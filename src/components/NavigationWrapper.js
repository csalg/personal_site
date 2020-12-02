import React from "react"
import { Link } from "gatsby"
import "../styles.scss"
import { Helmet } from "react-helmet"


export default props => {
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
    <Content>
      {props.children}
    </Content>
  </Container>
}

const Container = props => {
  return (
    <div className="page_wrapper">
      <div className={"wrapper__container"}>
        {props.children}
      </div>
    </div>)

}

const Navbar = ({ name, links }) => {
  console.log(links)
  const link_elements = Object.keys(links).map(key => {
    return <Link to={links[key]}>{key}</Link>
  })
  return (<nav>
    <div className="logo">{name}</div>
    <ul>
      {link_elements.map(el => <li>{el}</li>)}
    </ul>
  </nav>)
}

const Content = props => {
  return (<div className={"content"}>
    {props.children}
  </div>)
}
