import type { NextPage } from "next";
import { Table } from '../../components/table';

const Pendency: NextPage = () => {
  const columns = ['Urgencia', 'Fornecedor', '']
  const rows = [
    {urgencia: '27/03/2022', fornecedor: 'Fornecedor de teste', status: "DANGER"},
    {urgencia: '28/03/2022', fornecedor: 'Fornecedor de teste', status: "WARNING"},
    {urgencia: '29/03/2022', fornecedor: 'Fornecedor de teste', status: "DANGER"},
  ];

  return (
    <>
      <Table columns={columns} rows={rows}/>
    </>
  );
};

export default Pendency;
