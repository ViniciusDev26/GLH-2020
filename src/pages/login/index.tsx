import Image from 'next/image';
import { useRouter } from 'next/router'
import { StyledContainer } from './styles'

const Login = () => {

  const router = useRouter();

  return (
    <StyledContainer>
      <Image 
        src="/logo.png" 
        alt="logo"
        className='cursor-pointer'
        width={180}
        height={45}
        layout="fixed"
      />
      <div>
        <input type="email" placeholder='E-mail'/>
        <input type="password" placeholder='Senha'/>
        <button onClick={() => router.push('/contracts')}>Entrar</button>
      </div>
    </StyledContainer>
  )
}

export default Login