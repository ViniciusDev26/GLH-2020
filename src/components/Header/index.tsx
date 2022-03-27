import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

function Header() {
  const [closedHeader, setCloseHeader] = useState(true);

  const router = useRouter();
  const isLoginPath = router.asPath === "/login";

  function showHeaderOptions() {
    setCloseHeader(state => !state);
  }

  return isLoginPath ? <></> : (
    <nav className="flex flex-col-reverse items-center justify-between flex-wrap bg-black p-6">
    <Link href="/" passHref>
      <div className="flex items-center flex-shrink-0 text-white">
        <Image 
          src="/logo.png" 
          alt="logo"
          className='cursor-pointer'
          width={180}
          height={45}
        />
      </div>
    </Link>
    <div className={`w-full flex flex-col flex-grow${closedHeader ? 'hidden' : ''}`}>
      <Link href="/contracts" passHref={true}>
        <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4">
          Contratos
        </a>
      </Link>
      
      <Link href="/pendency" passHref={true}>
        <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4">
          Pendencias
        </a>
      </Link>

      <Link href="/providers" passHref={true}>
        <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4">
          Fornecedores
        </a>
      </Link>

      <Link href="/data" passHref={true}>
        <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4">
          Gráficos
        </a>
      </Link>

      <Link href="/faq" passHref={true}>
        <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4">
          FAQ
        </a>
      </Link>
    </div>
  </nav>  
  );
}

export {Header}