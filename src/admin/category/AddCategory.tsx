import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { ICategory, IProduct } from "../../interface/Interface";
import { Button, Form, Input, Select } from "antd";

interface IPropProduct {
  // products: IProduct[];
  //   categories: ICategory[];
  onAdd: (category: ICategory) => void;
}
const AddCategory = (props: IPropProduct) => {
  console.log(props);
  const navigate = useNavigate();
  // const { register, handleSubmit } = useForm<IProduct>();

  const onHandleAdd = (values: any) => {
    // console.log(values);

    props.onAdd(values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <h2>Add Category</h2>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onHandleAdd}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="Category Name" name="name">
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      {/* <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
        <input type="text" {...register("name")} placeholder="Product Name" />
        <input type="text" {...register("price")} />
      
        <button type="submit">Add Product</button>
      </form> */}
    </div>
  );
};

export default AddCategory;
