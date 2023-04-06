import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICategory, IProduct } from "../../interface/Interface";
interface IPropProduct {
  categories: ICategory[];
  onRemove: (id: number | string) => void;
}
const CategoryManagement = (props: IPropProduct) => {
  // console.log(props);
  const [data, setData] = useState<ICategory[]>([]);
  useEffect(() => {
    // console.log(props.products);
    setData(props.categories);
  }, [props]);

  const removeCategory = (id: number | string) => {
    props.onRemove(id);
  };
  // console.log(data);
  return (
    <div>
      {/* <button><a href="/admin/products/add">Add New Product</a></button> */}
      <Link to={"/admin/categories/add"}>
        <button className="btn btn-primary mb-3">Add New Category</button>
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Category Name</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((category, index) => {
            return (
              <tr key={category._id}>
                <td>{index + 1}</td>
                <td>{category.name}</td>

                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeCategory(category._id)}
                  >
                    Delete
                  </button>

                  <Link to={`/admin/categories/update/${category._id}`}>
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

export default CategoryManagement;
