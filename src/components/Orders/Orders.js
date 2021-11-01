import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import useAuth from "../../hooks/useAuth";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const history = useHistory();
  useEffect(() => {
    fetch(
      `https://obscure-shore-51996.herokuapp.com/orders?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("idToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 200) {
          res.json();
        } else if (res.status === 401) {
          history.push("/login");
        }
      })
      .then((data) => {
        setOrders(data);
      });
  }, []);
  return (
    <div>
      <h2>this is orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            {order?.Name} :: {order?.Email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
