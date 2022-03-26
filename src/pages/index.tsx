import { Provider } from '@prisma/client'
import type { GetServerSideProps, NextPage } from 'next'
import { Header } from '../components/Header'
import { prisma } from '../database/client'
import { api } from '../lib/axios'

type THomeProps = {
  providers: Provider[]
}

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await prisma.provider.findMany();
  
  return {
    props: {
      providers
    }
  }
}

const Home: NextPage<THomeProps> = ({providers}) => {
  async function sendMail() {
    await api.post('/email', {
      "fromEmail": "GLH@2022.com",
      "toEmail": "GLH-JUNTO@2022.com",
      "subject": "Hello world",
      "text": "Hello World"
    })
  };

  return (
    <>
      <Header />
      <h2 className="font-bold underline">Listagem de fornecedores</h2>
      <ul>
        {providers?.map(provider => (
          <li key={provider.id}>{provider.name} - {provider.cnpj}</li>
        ))}
      </ul>
      
      <button
        className="bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded"
        onClick={sendMail}
      >
        Send Example Email
      </button>
    </>
  )
}

export default Home
