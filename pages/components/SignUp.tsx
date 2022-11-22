import { FormStyles } from '../../styles/FormStyles'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'

type FormData = {
  email: string
  password: string
}

type Props = {
  isSignUp: boolean;
  setIsSignUp: (isSignUp: boolean) => void;
}

const SignUp = ({isSignUp, setIsSignUp}: Props) => {
  const [formDone, setFormDone] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const router = useRouter()
  const onSubmit: SubmitHandler<FormData> = data => {
    router.push('/HireMe')
  }
  function handleClick() {
    setIsSignUp(!isSignUp)
  }

  return (
    <FormStyles>
      <h2>Welcome Back!</h2>
      <p>Sign in and get to it.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label><br />
          <input type="text" placeholder="Email Address" {...register(
            'email', {required: true, pattern: /^\S+@\S+$/i})} />
        </div>
        <div>
          <label htmlFor="password">Password</label><br />
          <input className='password' onKeyUp={() => setFormDone(!formDone)} placeholder='Password' {...register('password', { required: true })} />
          <a href="" className="forgot-password">Forgot your password?</a>
        </div>
        <button type="submit" disabled={!formDone}><span>Sign In</span></button>

        <button className='create-account' onClick={handleClick}>Don&apos;t have an account? Create one now!</button>
      </form>
    </FormStyles>
  )
}

export default SignUp