import LateralMenu from "./LateralMenu"
import TopBar from "./TopBar"
import Content from "./Content"

interface LayoutProps {
  title: string
  subtitle: string
  children?: any

}

export default function Layout(props: LayoutProps) {
  return(
    <div className={`
      flex h-screen w-screen dark
    `}>     
      <LateralMenu /> 
      <div className={`flex flex-col w-full bg-gray-300 dark:bg-gray-800 p-7`}>
        <TopBar title={props.title} subtitle={props.subtitle}/>
        <Content>
          {props.children}
        </Content>
      </div>
    </div>
  )
}