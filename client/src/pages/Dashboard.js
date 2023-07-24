import React, { useEffect, useState } from "react";
// import { Login } from "./Login";
// import { Register } from "./Register";
import { MainLayout } from "../components/layout/MainLayout";
import { Row } from "react-bootstrap";
import { TransactionForm } from "../components/form/TransactionForm";
import { TransactionTable } from "../components/transaction-table/TransactionTable";
import { getTransaction } from "../helpers/axiosHelper.js";

export const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { status, message, trans } = await getTransaction();
    status === "success" && trans.length && setTransactions(trans);
  };
  // console.log(transactions);

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
          <TransactionTable transactions={transactions} />
        </Row>
      </MainLayout>
    </div>
  );
};
