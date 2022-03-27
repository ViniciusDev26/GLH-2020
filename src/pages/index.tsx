import type { NextPage } from "next";

export const getServerSideProps = (_req: any, res: any) => {
  return {
    redirect: {
      destination: '/contracts'
    }
  }
}

const Home: NextPage = () => {
  return (
    <h2>gggg</h2>
  );
};

export default Home;
