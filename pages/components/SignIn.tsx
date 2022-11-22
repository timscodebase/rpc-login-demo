
import { FormStyles } from './FormStyles'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'

type FormData = {
  email: string
}

type Props = {
		isSignUp: boolean;
		setIsSignUp: (isSignUp: boolean) => void;
	}

const SignIn: React.FC = ({isSignUp, setIsSignUp}: Props) => {
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
      <h2>Welcome to RPC!</h2>
      <p>Create your account and start saving time today!</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label><br />
          <input {...register('email')} />
        </div>
        <button type="submit"><p className='button-p'>Sign In</p></button>

        <button className='create-account' onClick={handleClick}>Already have an account? Sign in.</button>
      </form>
    </FormStyles>
  )
}

export default SignIn