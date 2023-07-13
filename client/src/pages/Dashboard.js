import React from "react";
// import { Login } from "./Login";
// import { Register } from "./Register";
import { MainLayout } from "../components/layout/MainLayout";
import { Row } from "react-bootstrap";
import { TransactionForm } from "../components/form/TransactionForm";
import { TransactionTable } from "../components/transaction-table/TransactionTable";

export const Dashboard = () => {
  return (
    <div>
      <MainLayout>
        <Row>
          <h3 className="text-center mt-4">Dashboard</h3>

          <hr />

          {/* form section */}
          <TransactionForm />
          <hr className="mt-5" />

          {/* table section */}
          <TransactionTable />
        </Row>
      </MainLayout>
    </div>
  );
};
