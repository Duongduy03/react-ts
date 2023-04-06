import { ICategory } from "../interface/Interface";
import instance from "./instance";
const getAllCategory = () => {
  return instance.get("/categories");
};
const getCategoryId = (id: string | number) => {
  return instance.get("/categories/" + id);
};
const deleteCategory = (id: string | number) => {
  return instance.delete("/categories/" + id);
};
const addCategory = (category: ICategory) => {
  return instance.post("/categories/add", category);
};
const updateCategory = (category: ICategory) => {
  return instance.patch("/categories/update/" + category._id, category);
};
export {
  getAllCategory,
  getCategoryId,
  deleteCategory,
  addCategory,
  updateCategory,
};
