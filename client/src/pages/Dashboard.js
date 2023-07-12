import React from "react";
// import { Login } from "./Login";
// import { Register } from "./Register";
import { MainLayout } from "../components/layout/MainLayout";
import { Row } from "react-bootstrap";

export const Dashboard = () => {
  return (
    <div>
      <MainLayout>
        <Row>
          <h3 className="text-center mt-4">Dashboard</h3>
        </Row>

        {/* form section */}

        {/* table section */}
        <hr />
      </MainLayout>
    </div>
  );
};
