import React from "react";
import { Item, formatDate, formatter, returnType } from "./helpers";

interface TableProps {
  items: Array<Item>;
}

const Table = ({ items }: TableProps): JSX.Element => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Produto
            </th>
            <th scope="col" className="px-6 py-3">
              Data
            </th>
            <th scope="col" className="px-6 py-3">
              Valor
            </th>
            <th scope="col" className="px-6 py-3">
              Vendedor
            </th>
            <th scope="col" className="px-6 py-3">
              Tipo
            </th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 && items?.map((item: Item) => (
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" id={item?.id}>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item?.attributes?.product}
              </th>
              <td className="px-6 py-4">
                {formatDate(item?.attributes?.date)}
              </td>
              <td className="px-6 py-4">
                {formatter.format(item?.attributes?.value / 100)}
              </td>
              <td className="px-6 py-4">{item?.attributes?.seller}</td>
              <td className="px-6 py-4">
                {returnType(item?.attributes?.product_type)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
