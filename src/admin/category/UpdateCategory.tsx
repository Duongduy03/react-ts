import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ICategory } from "../../interface/Interface";
import { Button, Form, Input } from "antd";
interface IPropProduct {
  categories: ICategory[];
  onUpdate: (category: ICategory) => void;
}
const UpdateCategory = (props: IPropProduct) => {
  console.log(props.categories);
  const navigate = useNavigate();
  const { id } = useParams();
  //   console.log(id);
  // const [product, setProduct] = useState<IProduct[]>([]);
  const [category, setCategory] = useState<ICategory>();

  // console.log(props);
  useEffect(() => {
    const currentCategory = props.categories.find(
      (category) => category._id == id
    );

    setCategory(currentCategory);
  }, [props]);
  //   console.log(category);

  const [form] = Form.useForm();
  //   console.log(form);

  const setFields = () => {
    form.setFieldsValue({
      _id: category?._id,
      name: category?.name,
    });
  };
  useEffect(() => {
    setFields();
  }, [category]);

  const onHandleUpdate = (values: ICategory) => {
    // console.log(values);

    props.onUpdate(values);
    // navigate("/admin/products");
  };

  return (
    <div>
      <h2>Update Category</h2>
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
          label="Category Name"
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Update Category
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

export default UpdateCategory;
