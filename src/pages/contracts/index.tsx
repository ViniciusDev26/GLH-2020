import type { NextPage } from "next";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
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

      <Link href="https://wa.me/+5585996282906" passHref>
        <div className="flex justify-end">
          <FaWhatsapp
            className="mt-2 mr-2 cursor-pointer"
            size={46}
            color="green"
          />
        </div>
      </Link>
    </>
  );
};

export default Contracts;
