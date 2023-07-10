import React from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { MainLayout } from "../components/layout/MainLayout";

export const Dashboard = () => {
  return (
    <div>
      <MainLayout>
        <h3 className="text-center mt-4">Dashboard</h3>
        <hr />
      </MainLayout>
    </div>
  );
};
