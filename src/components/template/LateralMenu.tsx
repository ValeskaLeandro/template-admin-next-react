import { HomeIcon, LogoutIcon, NotificationsIcon, SettingsIcon } from "../icons"
import ItemsMenu from "./ItemsMenu"
import Logo from "./Logo"

export default function LateralMenu() {
  return(
    <aside className={`flex flex-col`}>
      <div className={`flex flex-col justify-center items-center h-20 w-20 
        bg-gradient-to-r from-indigo-500 to-purple-800`}>
          <Logo />
      </div>  
      <ul className={`flex-grow`}>
        <ItemsMenu url="/" text="Início" icon={HomeIcon} />
        <ItemsMenu url="/config" text="Ajustes" icon={SettingsIcon} />
        <ItemsMenu url="/news" text="Notificações" icon={NotificationsIcon} />
      </ul>
      <ul>
        <ItemsMenu text="Sair" icon={LogoutIcon} onClick={() => console.log('Você saiu.')}
        className={`text-red-600 duration-300 hover:bg-red-500 hover:text-white`}/>
      </ul>
    </aside>
  )
}