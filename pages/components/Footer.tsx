import styled from "styled-components"

const FooterStyles = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: var(--blue);
  color: #fff;
  display: flex;
  place-content: center;
`

export default function Footer() {
  return (
    <FooterStyles>
      <p>© {new Date().getFullYear()} Rock, Paper, Coin</p>
    </FooterStyles>
  )
}