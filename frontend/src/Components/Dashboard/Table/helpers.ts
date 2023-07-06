import { parseISO, format } from "date-fns";

export type Item = {
    type: string;
    id: string;
    attributes: {
      product: string;
      date: string;
      value: number;
      seller: string;
      product_type: number;
    };
  };

export const formatDate = (date: string) => {
  return format(parseISO(date), "dd/MM/yyyy HH:mm:ss");
};

export const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const returnType = (type: number) => {
  console.log(typeof type);
  if (type === 1) {
    return "Venda produtor";
  }
  if (type === 2) {
    return "Venda afiliado";
  }
  if (type === 3) {
    return "Comissão paga";
  }
  if (type === 4) {
    return "Comissão recebida";
  }
  return "";
};
