
import { FormStyles } from './FormStyles'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'

type FormData = {
  email: string
}

const SignIn: React.FC = () => {
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

        <button className='create-account'>Already have an account? Sign in.</button>
      </form>
    </FormStyles>
  )
}

export default SignIn