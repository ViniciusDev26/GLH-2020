import { Provider } from '@prisma/client'
import type { GetServerSideProps, NextPage } from 'next'
import { Header } from '../components/Header'
import { prisma } from '../database/client'

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
  return (
    <>
      <Header />
      <h2 className="font-bold underline">Listagem de fornecedores</h2>
      <ul>
        {providers?.map(provider => (
          <li key={provider.id}>{provider.name}</li>
        ))}
      </ul>
    </>
  )
}

export default Home
