import type { GetServerSideProps, NextPage } from "next";

import { Provider } from "@prisma/client";
import { prisma } from "../../database/client";
import { FaEye } from 'react-icons/fa';

type TProvidersPageProps = {
  providers: Provider[];
};

const Providers: NextPage<TProvidersPageProps> = ({providers}) => {
  return(
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-1">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <caption className="text-white py-2 text-xl bg-gray-800">Listagem de fornecedores</caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nome
              </th>
              <th scope="col" className="px-6 py-3">
                CNPJ
              </th>
              <th scope="col" className="px-6 py-3">
                Telefone
              </th>
              <th scope="col" className="px-6 py-3">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
          {providers?.map((provider) => (
            <tr key={provider.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="
                  px-6 
                  py-4 
                  font-medium 
                  text-gray-900 
                  dark:text-white 
                  whitespace-nowrap
                "
              >
                {provider.name}
              </th>
              <td className="px-6 py-4">{provider.cnpj}</td>
              <td className="px-6 py-4">{provider.phone}</td>
              <td className="px-6 py-4 text-zinc-300 cursor-pointer">{<FaEye />}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await prisma.provider.findMany();

  return {
    props: {
      providers,
    },
  };
};

export default Providers;