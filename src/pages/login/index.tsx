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
      <h2>Login</h2>
      <div>
        <input type="email" placeholder='E-mail'/>
        <input type="password" placeholder='Password'/>
        <button onClick={() => router.push('/contracts')}>Logar</button>
      </div>
    </StyledContainer>
  )
}

export default Login