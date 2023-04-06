import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ICategory, IProduct } from "../interface/Interface";
import { Button, Form, Input, Select } from "antd";
interface IPropProduct {
  products: IProduct[];
  categories: ICategory[];
  onUpdate: (product: IProduct) => void;
}
const UpdateProduct = (props: IPropProduct) => {
  // console.log(props.products);
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id);
  // const [product, setProduct] = useState<IProduct[]>([]);
  const [product, setProduct] = useState<IProduct>();

  // console.log(props);
  useEffect(() => {
    const currentProduct = props.products.find((product) => product._id == id);

    setProduct(currentProduct);
  }, [props]);
  const [form] = Form.useForm();
  const setFields = () => {
    form.setFieldsValue({
      _id: product?._id,
      name: product?.name,
      price: product?.price,
      description: product?.description,
      image: product?.image,
    });
  };
  useEffect(() => {
    setFields();
  }, [product]);

  const onHandleUpdate = (values: IProduct) => {
    console.log(values);

    props.onUpdate(values);
    // navigate("/admin/products");
  };

  return (
    <div>
      <h2>Update</h2>
      <Form form={form} style={{ maxWidth: 600 }} onFinish={onHandleUpdate}>
        {/* đoạn này cần truyền cả id vào form khi submit để lấy được giá trị id truyền lên component App */}
        <Form.Item
          label=""
          name="_id"
          style={{ display: "none" }} // ẩn input này đi
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Product Name"
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Product Price"
          name="price"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <Input />
        </Form.Item>
        <Form.Item
          label="Image"
          name="image"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Select" name="categoryId">
          <Select>
            {props.categories.map((cate) => {
              return (
                <Select.Option key={cate._id} value={cate._id}>
                  {cate.name}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Update Product
          </Button>
        </Form.Item>
      </Form>
      {/* <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
        <input type="text" {...register("name")} placeholder="Product Name" />
        <input type="text" {...register("price")} />
        <button type="submit">update product</button>
      </form> */}
    </div>
  );
};

export default UpdateProduct;
