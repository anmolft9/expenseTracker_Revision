import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export const TransactionForm = () => {
  return (
    <div className="mt-5">
      <Form>
        <Row>
          <Col>
            <Form.Select defaultValue="Transaction Type?">
              <option value="">Choose...</option>
              <option>Income</option>
              <option>Expense</option>
            </Form.Select>
          </Col>
          <Col xs={7}>
            <Form.Control name="title" placeholder="title" />
          </Col>
          <Col>
            <Form.Control name="amounts" placeholder="amount" />
          </Col>
          <Col>
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
