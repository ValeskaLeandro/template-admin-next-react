import useAppData from "@/data/context/hook/useAppData"
import ButtonChangeTheme from "../ButtonChangeTheme"
import Title from "./Title"

interface TopBarProps {
  title: string
  subtitle: string
}

export default function TopBar(props: TopBarProps) {
  const {theme, changeTheme} = useAppData()
  return(
    <div className={`flex`}>
      <Title title={props.title} subtitle={props.subtitle}/>
      <div className={`flex flex-grow justify-end`}>
        <ButtonChangeTheme theme={theme || ''} changeTheme={changeTheme || (() => {})} />
      </div>
    </div>
  )
}