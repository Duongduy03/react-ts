import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../interface/Interface";
interface IPropProduct {
  products: IProduct[];
  onRemove: (id: number | string) => void;
}
const ProductManagement = (props: IPropProduct) => {
  // console.log(props);
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    // console.log(props.products);
    setData(props.products);
  }, [props]);

  const removeProduct = (id: number | string) => {
    props.onRemove(id);
  };
  // console.log(data);
  return (
    <div>
      {/* <button><a href="/admin/products/add">Add New Product</a></button> */}
      <Link to={"/admin/products/add"}>
        <button className="btn btn-primary mb-3">Add New Product</button>
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Description </th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product, index) => {
            return (
              <tr key={product._id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>
                  <img src={product.image} width="100" />
                </td>

                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeProduct(product._id)}
                  >
                    Delete
                  </button>

                  <Link to={`/admin/products/update/${product._id}`}>
                    <button className="btn btn-warning">Update</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagement;
