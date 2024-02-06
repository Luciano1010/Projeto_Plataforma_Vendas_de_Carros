import { Link } from 'react-router-dom'
import logoimg from '../../assets/logo.svg'
import { Contaneir } from '../../components/contaneir'
import { Input } from '../../components/input'
import { useForm } from 'react-hook-form'
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  email: z.string().email("Insira um Email valido").min(1),
  password: z.string().min(6, {message: "Insira uma senha valida"})

})

type FormData = z.infer<typeof schema>



export function Login() {

const {register, handleSubmit, formState: { errors}} = useForm<FormData>({
  resolver: zodResolver(schema),
  mode:"onChange"
})

function onsubmit(data: FormData){
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
          type="email"
          placeholder="Digite seu email..." 
          name="email"
          error={errors.email?.message}
          register={register}
         />
        </div>
        <div className='mb-3'>
        <Input
          type="password"
          placeholder="Digite sua senha..." 
          name="password"
          error={errors.password?.message}
          register={register}
          rules={{ required: "Insira uma senha valida" }}
         />
        </div>

         <button type='submit' className='bg-zinc-900 w-full rounded-md text-white h-10 font-medium'>
          Acessar
         </button>

        </form>

        <Link to={'/register'}>
          Ainda não possui conta? Cadastra-se!
        </Link>
      </div>
    </Contaneir>
     
    )
  }
  
  
  