import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import logo from '../../public/logo2.webp'

const TopBarStyles = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.25rem;
  background-color: #fff;
  border-bottom: 1px solid rgba(0,0,0,.03);
  z-index: 3;
  -webkit-box-shadow: 0 2px 6px rgb(0 0 0 / 10%);
  box-shadow: 0 2px 6px rgb(0 0 0 / 10%);

  button {
    display: grid;
    place-items: center;
    width: 7rem;
    cursor: pointer;
    padding: 0.5rem 1rem;
    min-width: fit-content;
    border-radius: 5px;
    background-color: var(--blue);
    color: #fff;
    border: none;
    font-size: 1.125rem;
    padding: .8rem 1rem;
    font-family: 'Brandon Grotesque Light', serif;

    &:hover {
      background-color: var(--peach);
  }
`

export default function TopBar({isSignUp, setIsSignUp}) {
  function handleClick() {
    setIsSignUp(!isSignUp)
  }
  return (
    <TopBarStyles>  
      <Link href="/">
        <Image
          src={logo}
          alt="Rock, Paper, Coin Logo"
          width={64}
          height={64}
          placeholder="blur"
        />
      </Link>

      <button onClick={handleClick}>{isSignUp ? "Sign In" : "Sign Up"}</button>
    </TopBarStyles>
  )
}