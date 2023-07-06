import React, { useState } from "react";
import axios from "axios";
import { Token } from "../variables";
const baseURL = "http://127.0.0.1:8000/";

const Form = (): JSX.Element => {
  const [message, setMessage] = useState("");

  const uploadFile = (event: any) => {
    console.log(event.target.files[0]);
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append("file", file);

    axios
      .post(`${baseURL}item/`, formData, {
        headers: {
          Authorization: "Token " + Token,
        },
      })
      .then((response) => {
        console.log("Deu certo");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        setMessage(error.message)
      });
  };

  return (
    <div className="relative overflow-x-auto">
      <form onSubmit={uploadFile}>
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="user_avatar"
        >
          Upload dos Produtos
        </label>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          aria-describedby="user_avatar_help"
          id="user_avatar"
          type="file"
          accept=".txt"
          onChange={uploadFile}
        />
        {message && (
        <>
          <span className="text-red-600">Erro ao tentar enviar arquivo -{message}</span>
        </>
      )}
      </form>
    </div>
  );
};

export default Form;
