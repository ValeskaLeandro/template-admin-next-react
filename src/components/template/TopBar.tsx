import useAppData from "@/data/context/hook/useAppData"
import ButtonChangeTheme from "../ButtonChangeTheme"
import Title from "./Title"
import Avatar from "./Avatar"

interface TopBarProps {
  title: string
  subtitle: string
}

export default function TopBar(props: TopBarProps) {
  const {theme, changeTheme} = useAppData()
  return(
    <div className={`flex`}>
      <Title title={props.title} subtitle={props.subtitle}/>
      <div className={`flex flex-grow justify-end items-center`}>
        <ButtonChangeTheme theme={theme || ''} changeTheme={changeTheme || (() => {})} />
        <Avatar className="ml-3" />
      </div>
    </div>
  )
}