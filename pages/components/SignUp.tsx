import { FormStyles } from './FormStyles'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'

type FormData = {
  email: string
  password: string
}

type Props = {
  isSignUp: boolean;
  setIsSignUp: (isSignUp: boolean) => void;
}

const SignUp: React.FC = ({isSignUp, setIsSignUp}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const router = useRouter()
  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
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
          <input {...register('email', { required: true })} />
        </div>
        <div>
          <label htmlFor="password">Password</label><br />
          <input {...register('password', { required: true })} />
          <a href="" className="forgot-password">Forgot your password?</a>
        </div>
        <button type="submit"><p className='button-p'>Sign In</p></button>

        <button className='create-account' onClick={handleClick}>Don't have an account? Create one now!</button>
      </form>
    </FormStyles>
  )
}

export default SignUp