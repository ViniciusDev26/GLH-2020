import type { NextPage } from "next";
import { Table } from '../../components/table';

const Contracts: NextPage = () => {
  const columns = ['Fornecedor', 'Vigência', 'Recorrencia', 'periodicidade', '']
  const rows = [
    {Fornecedor: 'teste', vigencia: 'teste', recorrencia: 'teste', periodicidade: 'teste', status: "SUCCESS"},
    {Fornecedor: 'teste 2', vigencia: 'teste', recorrencia: 'teste', periodicidade: 'teste', status: "WARNING"},
    {Fornecedor: 'teste 3', vigencia: 'teste', recorrencia: 'teste', periodicidade: 'teste', status: "DANGER"},
  ];

  return (
    <>
      <Table columns={columns} rows={rows}/>
    </>
  );
};

export default Contracts;
