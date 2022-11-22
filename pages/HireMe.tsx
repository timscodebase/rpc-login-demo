import Head from 'next/head'
import styled from "styled-components"

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: grid;
  place-content: center;

  a  {
    color: red;
    font-size: 3rem;
    text-decoration: underline;

  }
`

const HireMePage: React.FC = () => {
  return (
    <>
      <Head><title>Please hire me!!</title></Head>
      <Container>
        <h1>Please Hire Me!</h1>
        <a href="https://timsmith.tech" rel="noopener noreferrer">Tim Smith's Awesome website!</a>

      </Container>
    </>
  )
}

export default HireMePage