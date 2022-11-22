import { FormStyles } from './FormStyles'
import { useForm } from 'react-hook-form'

type FormData = {
  email: string
  password: string
}

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = data => console.log(data)

  return (
    <FormStyles>
      <h2>Welcome Back!</h2>
      <p>Sign in and get to it.</p>
      {/* sign up form with validation */}
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

        <button className='create-account'>Don't have an account? Create one now!</button>
      </form>
    </FormStyles>
  )
}

export default SignUp