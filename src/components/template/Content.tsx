interface ContentProps {
  children?: any

}

export default function Layout(props: ContentProps) {
  return(
    <div className={`flex flex-col mt-7`}>
      {props.children}
    </div>
  )
}