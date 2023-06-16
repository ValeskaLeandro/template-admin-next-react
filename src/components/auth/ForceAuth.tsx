import Head from "next/head"
import Image from "next/image"
import Loading from "../../../public/img/loading.gif"
import useAuth from "@/data/context/hook/useAuth"
import router from "next/router"

export default function ForceAuth(props){
  const {user, loading} = useAuth()

  function renderContent(){
    return(
      <>
      <Head>
        <script dangerouslySetInnerHTML={{
            __html: `
              if(!document.cookie?.includes("admin-template-vls-auth")) {
                window.location.href = "/auth"
              }
            `
          }}/>
          
        
      </Head>
      {props.children}
      </>
    )
  }

  function renderLoading(){
    return(
      <div className={`
        flex justify-center items-center h-screen
        `}>
          <Image src={Loading} alt="Carregando.."/>
      </div>
    )
  }
  if (!loading && user?.email) {
    return renderContent()
  } else if(loading) {
    return renderLoading()
  } else {
    router.push("/auth")
    return null
  }
}