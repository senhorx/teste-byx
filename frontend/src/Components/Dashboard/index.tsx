import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";
import Form from "./Form";
import { Token } from "./variables";
const baseURL = "http://127.0.0.1:8000/";

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState(true);
  const [message, setMessage] = useState("");

  const getItems = () => {
    axios
      .get(`${baseURL}item/`, {
        headers: {
          Authorization: "Token " + Token,
        },
      })
      .then((response) => {
        if (response.data.data) {
          setItems(response.data.data);
        } else {
          setItems([]);
        }
      })
      .catch((error) => {
        console.log(error);
        setMessage(error.message);
      });
  };

  useEffect(() => {
    if (items.length === 0 && search) {
      getItems();
      setSearch(false);
    }
  }, [items, search]);

  return (
    <div className="flex flex-col flex-wrap gap-20 mt-10">
      {message && (
        <>
          <span className="text-red-600">Erro ao buscar Produtos - {message}</span>
        </>
      )}
      <Form />
      <Table items={items ? items : []} />
    </div>
  );
}
