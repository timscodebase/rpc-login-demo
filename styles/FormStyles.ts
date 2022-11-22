import styled from 'styled-components'

export const FormStyles = styled.div`
  width: 39.563rem;
  padding: 1.25rem 8rem;
  border-radius: 5px;
  box-shadow: 30px 30px 60px 0 rgb(74 74 74 / 25%);
  border: 1px solid hsla(300,1%,81%,.37);
  background-color: #fff;

  @media screen and (max-width: 960px) {
    width: 100%;
    box-shadow: none;
    border: none;
  }

  /* I am purposly leaving the footer around on mobile.  It looks better */
  
  h2 {
    color: var(--blue);
    font-size: 1.688rem;
    font-family: 'Brandon Grotesque Bold', serif;
    text-align: center;
    margin: 0;
  }

  p {
    color: var(--blue);
    text-align: center;
  }

  lable {
    font-size: 1.125rem;
    margin: 0px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }

  input {
    color: rgb(32, 58, 96);
    width: 100%;
    height: 3rem;
    border-radius: 5px;
    border: 1px solid rgba(207, 206, 207, 0.37);
    margin: 0.5rem 0px 0.5rem 0px;
    font-size: 1.125rem;
    padding: 0.6rem 1rem;
  }

  input::placeholder {
    color: #000;
    opacity: 0.2;
  }

  input:focus-within {
    border: 1px solid rgb(4, 149, 95);
  }

  .button-p,
  .forgot-password {
    color: #000;
    opacity: 0.2;
  }

  .forgot-password {
    display: block;
    width: fit-content;
    margin-left: auto;
  }

  [type="submit"] {
    margin: 2.5rem auto;
    display: grid;
    place-items: center;
    cursor: pointer;
    padding: 0.5rem 1rem;
    min-width: fit-content;
    width: 11.975rem;
    height: 3rem;
    border-radius: 5px;
    border: none;
  }

  p.button-p {
    padding: 0;
    margin: 0;
  }

  .create-account {
    color: var(--peach);
    border: none;
    background-color: transparent;
    margin: 0 auto;
    display: block;
    width: fit-content;

    &:hover {
      text-decoration: underline;
    }
  }
`