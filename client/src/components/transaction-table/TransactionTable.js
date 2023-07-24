import Table from "react-bootstrap/Table";

export const TransactionTable = ({ transactions }) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>title</th>
            <th>Incomes</th>
            <th>Expenses</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 &&
            transactions.map((item, i) => (
              <tr>
                <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                <td>{item.title}</td>
                <td className="text-success">
                  {item.transactionType === "Income" && item.amounts}
                </td>
                <td className="text-danger">
                  {item.transactionType === "Expense" && item.amounts}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <div className="text-end fw-bold">Total Balance : $280</div>
    </>
  );
};
