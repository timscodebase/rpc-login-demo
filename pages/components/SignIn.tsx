
import { FormStyles } from '../../styles/FormStyles'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'

type FormData = {
  email: string
}

type Props = {
		isSignUp: boolean;
		setIsSignUp: (isSignUp: boolean) => void;
	}

const SignIn = ({isSignUp, setIsSignUp}: Props) => {
  const [formDone, setFormDone] = useState(false)
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
          <input onKeyUp={() => setFormDone(!formDone)} type="text" placeholder="Email Address" {...register(
            'email', {required: true, pattern: /^\S+@\S+$/i})} />
        </div>
        <button type="submit" disabled={!formDone}><span>Sign In</span></button>

        <button className='create-account' onClick={handleClick}>Already have an account? Sign in.</button>
      </form>
    </FormStyles>
  )
}

export default SignIn