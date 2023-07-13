import { useState } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export const TransactionForm = () => {
  const [transaction, setTransaction] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setTransaction({ ...transaction, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(transaction);
  };

  return (
    <div className="mt-5">
      <Form onSubmit={handleOnSubmit}>
        <h4 className="m-3">Add the Transactions</h4>
        <Row className="g-2">
          <Col md="2">
            <Form.Select name="transactionType" onChange={handleOnChange}>
              <option value="">Choose...</option>
              <option>Income</option>
              <option>Expense</option>
            </Form.Select>
          </Col>
          <Col md="4">
            <Form.Control
              onChange={handleOnChange}
              name="title"
              placeholder="title"
            />
          </Col>
          <Col md="4">
            <Form.Control
              onChange={handleOnChange}
              name="amounts"
              type="number"
              placeholder="amount"
            />
          </Col>
          <Col md="2">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
