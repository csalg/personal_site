import React from "react"
import { Link } from "gatsby"
import "../stylesheets/_styles.scss"
import { Helmet } from "react-helmet"


export default ({children, contentId}) => {
  return <Container>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Charlie Salgado - Software Developer</title>
    </Helmet>
    <Navbar
      name={"Charlie Salgado"}
      links={{
        portfolio: "/",
        // blog: '/blog',
        cv: "/cv"
      }} />
    <Content id={contentId}>
      {children}
    </Content>
  </Container>
}

const Container = props => {
  return (
    <div className="flex justify-space-around">
      <div className={"wrapper__container"}>
        {props.children}
      </div>
    </div>)

}

const Navbar = ({ name, links }) => {
  const link_elements = Object.keys(links).map(key => {
    return <Link to={links[key]}>{key}</Link>
  })
  return (<nav>
    <Link to={'/'} style={{ color: 'inherit', textDecoration: 'none'}}><div className="logo">{name}</div></Link>
    <ul>
      {link_elements.map(el => <li>{el}</li>)}
    </ul>
  </nav>)
}

const Content = ({children, id}) => {
  return (<div className={"content"} id={id}>
    {children}
  </div>)
}
