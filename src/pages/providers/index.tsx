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
          <thead className="">
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
            <tr key={provider.id} className="">
              <th
                scope="row"
                className="
                  px-6 
                  py-4 
                  font-medium 
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