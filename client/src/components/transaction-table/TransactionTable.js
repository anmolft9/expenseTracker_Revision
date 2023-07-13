import Table from "react-bootstrap/Table";

export const TransactionTable = () => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Incomes</th>
            <th>Expenses</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Salary</td>
            <td>$1000</td>
            <td className="text-success">$1000</td>
            <td></td>
          </tr>
          <tr>
            <td>Rent</td>
            <td>720</td>
            <td></td>
            <td className="text-danger">- $720</td>
          </tr>
        </tbody>
      </Table>
      <div className="text-end fw-bold">Total Balance : $280</div>
    </>
  );
};
