import React from "react";
import AdminItem from "../components/admin/AdminItem";
import Form from "../components/admin/From";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useAppSelector } from "../types/hook";

function Admin() {
  let { productCard } = useAppSelector((state: any) => state.filters);
  return (
    <div className="">
      <Header crumbs={"Админка"}></Header>
      <main className="main-admin">
        <div className="main__container _container">
          <h1>Admin</h1>
          <h2>Добавление товара</h2>
          <Form></Form>
          <h2>Товар</h2>
          <div className="main-admin__items">
            {productCard.map((i: any) => (
              <AdminItem item={i} key={i.id}></AdminItem>
            ))}
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Admin;
