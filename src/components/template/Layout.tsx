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
    <div>     
      <LateralMenu /> 
      <TopBar title={props.title} subtitle={props.subtitle}/>
      <Content>
        {props.children}
      </Content>
    </div>
  )
}