import Image from 'next/image'
import { useState } from 'react';
function Header() {
  const [closedHeader, setCloseHeader] = useState(true);

  function showHeaderOptions() {
    setCloseHeader(state => !state);
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Image 
          src="https://assets.website-files.com/6077c884c3e246204e5f48d8/6077cccf4baced83a073cc5e_GLH-logo-Dark.svg" 
          alt="logo" 
          width={100}
          height={40}
        />
      </div>
      <div className="block lg:hidden">
        <button 
          onClick={showHeaderOptions}
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-500 hover:border-gray-500">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${closedHeader ? 'hidden' : ''}`}>
        <div className="text-sm lg:flex-grow">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4">
            Financeiro
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4">
            Gestão de contratos
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4">
            Integração
          </a>
        </div>
        <div>
          {/* <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a> */}
        </div>
      </div>
    </nav>  
  );
}

export {Header}