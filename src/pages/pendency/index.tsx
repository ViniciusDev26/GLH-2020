import type { NextPage } from "next";
import { Table } from '../../components/table';

const Pendency: NextPage = () => {
  const columns = ['Urgencia', 'Fornecedor', '']
  const rows = [
    {urgencia: '27/03/2022', fornecedor: 'Fornecedor de teste', status: "DANGER"},
    {urgencia: '28/03/2022', fornecedor: 'Fornecedor de teste', status: "DANGER"},
    {urgencia: '29/05/2022', fornecedor: 'Fornecedor de teste', status: "WARNING"},
  ];

  return (
    <>
      <Table columns={columns} rows={rows}/>
    </>
  );
};

export default Pendency;
