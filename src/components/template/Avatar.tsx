import useAuth from "@/data/context/hook/useAuth"
import Link from "next/link"
import Image from "next/image"
import avatar from "../../../public/img/avatar.svg"

interface AvatarProps {
  className?: string
}

export default function Avatar(props: AvatarProps) {
  const {user} = useAuth()
  return(
    <Link href="/profile">
      <Image src={user?.imageUrl ?? avatar} 
      alt="Avatar do Usuário" 
      className={`
        h-10 w-10 rounded-full cursor-pointer ${props.className}
      `}/>
    </Link>
  )
}