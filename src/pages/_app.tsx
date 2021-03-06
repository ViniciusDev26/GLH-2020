import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-row h-screen">
      <Header />
      <Component {...pageProps} />

      <Link href="https://wa.me/+5585996282955" passHref>
        <div className="flex justify-end" style={{position: "absolute", bottom: 5, right: 5}}>
          <FaWhatsapp
            className="mt-2 mr-2 cursor-pointer"
            size={46}
            color="green"
          />
        </div>
      </Link>
    </div>
  )
}

export default MyApp
