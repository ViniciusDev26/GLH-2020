import { useRouter } from 'next/router'
import { StyledContainer } from './styles'

const Login = () => {

  const router = useRouter();

  return (
    <StyledContainer>
      <h2>Login</h2>
      <div>
        <input type="email" placeholder='E-mail'/>
        <input type="password" placeholder='E-mail'/>
        <button onClick={() => router.push('/contracts')}>Logar</button>
      </div>
    </StyledContainer>
  )
}

export default Login