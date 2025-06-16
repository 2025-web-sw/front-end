import { postLogin } from '../lib/login.ts'
import { type FormEvent, useState } from 'react'
import type { SignUpType } from '../types/login.ts'
import { LogoIcon } from '../assets/svgComponents/index.ts'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [signUpInfo, setSignUpInfo] = useState<SignUpType>({
    emailVisibility: true,
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    postLogin(signUpInfo).then((res) => {
      console.log('res', res)
      navigate('/home')
    })
  }

  return (
    <form
      className="bg-deep-dark-gray flex min-h-screen flex-col items-center justify-center"
      onSubmit={(e) => handleSubmit(e)}
    >
      <LogoIcon width={230} height={52} />

      <div className="mt-10 flex w-full flex-col gap-y-2 px-5">
        <div className="w-full rounded-full bg-white px-4 py-3">
          <input
            onChange={(e) => {
              setSignUpInfo((prevState) => ({ ...prevState, email: e.target.value }))
            }}
            type="email"
            className={'w-full outline-none'}
            placeholder={'아이디를 입력해주세요.'}
          />
        </div>

        <div className="w-full rounded-full bg-white px-4 py-3">
          <input
            onChange={(e) => {
              setSignUpInfo((prevState) => ({ ...prevState, password: e.target.value }))
            }}
            type="password"
            className={'w-full outline-none'}
            placeholder={'비밀번호를 입력해주세요'}
          />
        </div>
      </div>

      <button
        className={'bg-brand-color button fixed right-5 bottom-5 left-5 rounded-full py-3 text-white'}
        type={'submit'}
      >
        전송
      </button>
    </form>
  )
}
export default Login
