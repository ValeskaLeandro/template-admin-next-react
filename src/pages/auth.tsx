import AuthInput from "@/components/auth/AuthInput";
import { WarningIcon } from "@/components/icons";
import { SetStateAction, useState } from "react";

export default function Auth(){
  const [mode, setMode] = useState<'login' | 'register'>("login")
  const [email, setEmail] = useState("")
  const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState("")

  function renderError(message: string , time: number = 5){
    setError(message)
    setTimeout(() => setError(null), time*1000)
  }

  function submit(){
    if(mode === 'login'){
      console.log('Login')
    } else {
      console.log('Cadastrar')
    }
  }
  return(
    <div className={`flex  h-screen items-center justify-center`}>
      <div className=" hidden md:block md:w-1/2 lg:w-2/3">
        <img src="img/image-main.jpg"
         alt="Imagem da Tela de Autenticação" 
         className="h-screen w-full object-cover"/>
      </div>
      <div className="w-full md:w-1/2 m-10 lg:w-1/3">
        <h1 className={`
          text-3xl font-bold mb-5
          `}>
          {mode === 'login'? 'Entre com sua conta!': 'Cadastre-se na plataforma.'}
        </h1>

        {error? (
          <div className={`flex items-center bg-red-400 text-white py-3 px-5 my-2
          border border-red-700 rounded-lg`}>
            {WarningIcon}
            <span className="ml-3">{error}</span>
          </div>
        ): false}

        <AuthInput 
          label="E-mail"
          value={email}
          type="email"
          changeValue={setEmail}
          required
        />
        <AuthInput 
          label="Senha"
          value={password}
          type="password"
          changeValue={setPassword}
          required
        />

        <button onClick={submit} className={`
          w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg
          px-4 py-3 mt-6
        `}>
        {mode === 'login'? 'Entrar': 'Cadastrar'}
        </button>

        <hr className="my-6 border-gray-300 w-full"/>

        <button onClick={submit} className={`
          w-full bg-red-500 hover:bg-red-400 text-white rounded-lg
          px-4 py-3
        `}>
        {mode === 'login'? 'Entrar com Google': 'Cadastrar com Google'}
        </button>

        {mode === 'login'? (
          <p className="mt-8"> Novo por aqui?
            <a onClick={() => setMode('register')}
            className={`
            text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
            `}> Criar uma conta.</a>
          </p>
        ) : (
          <p className="mt-8"> Já faz parte da nossa comunidade?
            <a onClick={() => setMode('login')}
            className={`
            text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
            `}> Entre com suas credenciais.</a>
          </p>
        )}
      </div>
    </div>
  )
}