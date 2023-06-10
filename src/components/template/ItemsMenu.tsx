import Link from "next/link"
interface ItemsMenuProps {
  url?: string
  text: string
  icon: any
  onClick?: (event: any) => void
  className?: string
}
export default function ItemsMenu(props: ItemsMenuProps){
  function renderContent() {
    return(
      <div className={`flex flex-col justify-center items-center w-20 h-20
      text-gray-600 ${props.className}`}>
          {props.icon}
          <span className={`text-xs font-light `}>
            {props.text}
          </span>
        </div>
    )
  }
  return(
    <li onClick={props.onClick} className={`hover:bg-gray-100 cursor-pointer`}>      
      {props.url ? (
      <Link href={props.url}>
        {renderContent()}
      </Link>
    ) : (
      <div>
        {renderContent()}
      </div>
    )}
    </li>
  )
}