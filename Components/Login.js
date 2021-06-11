import Image from 'next/image'

// Auth
import { signIn } from 'next-auth/client'

const Login = () => {
  return (
    <div className='grid place-items-center'>
      <Image
        src='https://links.papareact.com/t4i'
        height={400}
        width={400}
        objectFit='contain'
      />
      <h1
        onClick={signIn}
        className='text-white text-center cursor-pointer p-5 bg-blue-500 rounded-full'
      >
        Login to Doggobook with Facebook
      </h1>
    </div>
  )
}

export default Login
