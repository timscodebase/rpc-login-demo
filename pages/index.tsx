import { useState } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import TopBar from './components/TopBar'
import Footer from './components/Footer'
import SignUpBg from '../public/signup-bg.jpg'
import SignInBg from '../public/signin-bg.jpg'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

type Props = {
  bg: {
    src: string
  };
}

const Container = styled.div<Props>`
  min-width: 100vw;
  min-height: 100vh;
  background: url(${props => props.bg.src});
  background-size: cover;
  display: grid;
  place-items: center;

  @media screen and (max-width: 960px) {
    background: none;
  }
`

const App: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false)

  return (
    <>
      <Head><title>RPC Login Demo</title></Head>
      <Container bg={isSignUp ? SignInBg : SignUpBg}>
        <TopBar isSignUp={isSignUp} setIsSignUp={setIsSignUp} />
        {isSignUp ?
          <SignIn isSignUp={isSignUp} setIsSignUp={setIsSignUp} /> :
          <SignUp isSignUp={isSignUp} setIsSignUp={setIsSignUp} />}
        <Footer />
      </Container>
    </>
  )
}

export default App
