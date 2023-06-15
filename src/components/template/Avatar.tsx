import useAuth from "@/data/context/hook/useAuth"
import Link from "next/link"

interface AvatarProps {
  className?: string
}

export default function Avatar(props: AvatarProps) {
  const {user} = useAuth()
  return(
    <Link href="/profile">
      <img src={user?.imageUrl ?? '/img/avatar.svg'} 
      alt="Avatar do Usuário" 
      className={`
        h-10 w-10 rounded-full cursor-pointer ${props.className}
      `}/>
    </Link>
  )
}