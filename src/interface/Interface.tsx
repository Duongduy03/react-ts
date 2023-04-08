import React from "react";
interface ICategory {
  _id: string | number;
  name: string;
  products?: IProduct[];
}
interface IProduct {
  _id: string | number;
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: ICategory & string;
}

interface IUser {
  _id: string | number;
  name: string;
  email: string;
  role: string;
  password: string;
  confirmPass: string;
}

// interface IPropProductAdd {
//   //   products: IProduct[];
//   //   onRemove: (id: number | string) => void;
//   onAdd: (inputValue: IProduct) => void;
//   //   onUpdate: (id: number | string, product: IProduct) => void;
// }
// interface IPropProductUpdate {
//   products: IProduct[];
//   //   onRemove: (id: number | string) => void;
//   //   onAdd: (inputValue: IProduct) => void;
//   onUpdate: (id: number | string, product: IProduct) => void;
// }
export type { IProduct, IUser, ICategory };
