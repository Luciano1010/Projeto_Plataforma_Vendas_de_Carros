import { Link } from 'react-router-dom'
import logoimg from '../../assets/logo.svg'
import { Contaneir } from '../../components/contaneir'
import { Input } from '../../components/input'
import { useForm } from 'react-hook-form'
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string().min(1, { message: "O campo é obrigatorio" }),
  email: z.string().email("Insira um Email valido").min(2),
  password: z.string().min(6, { message: "A senha deve conter no minimo 6 caracteres" })

})

type FormData = z.infer<typeof schema>



export function Register() {

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange"
  })

  function onsubmit(data: FormData) {
    console.log(data)
  }

  return (
    <Contaneir>
      <div className='w-full min-h-screen flex justify-center items-center flex-col gap-4'>
        <Link to="/" className='mb-6 max-w-sm w-full'>
          <img
            src={logoimg}
            alt='Logo do Site'
            className='w-full'
          />
        </Link>

        <form
          className='bg-white max-w-xl w-full rounded-lg p-4'
          onSubmit={handleSubmit(onsubmit)}
        >
          <div className='mb-3'>
            <Input
              type="text"
              placeholder="Digite seu nome completo"
              name="name"
              error={errors.name?.message}
              register={register}
            />
          </div>
          <div className='mb-3'></div>

          <div className='mb-3'>
            <Input
              type="email"
              placeholder="Digite seu email..."
              name="email"
              error={errors.email?.message}
              register={register}
              rules={{ required: "O email é obrigatorio" }}
            />
          </div>

          <div className='mb-3'>
            <Input
              type="password"
              placeholder="Digite sua senha..."
              name="password"
              error={errors.password?.message}
              register={register}
              rules={{ required: "Senha de minimo 6 caracteres" }}
            />
          </div>
          <button type='submit' className='bg-zinc-900 w-full rounded-md text-white h-10 font-medium'>
            Acessar
          </button>
        </form>

        <Link to={'/login'}>
          Já possui conta? faça Login!
        </Link>
      </div>
    </Contaneir>

  )
}


