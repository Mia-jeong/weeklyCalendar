import React, { Component } from "react";
import Card from "../ui/form/Card";
import CustomerForm from "./CustomerForm";

const CustomerCreate = () => {
  const onSubmit = formValues => {
    alert("formValues", formValues);
  };

  return (
    <Card label="Create Customer">
      <CustomerForm onSubmit={onSubmit} />
    </Card>
  );
};

export default CustomerCreate;
