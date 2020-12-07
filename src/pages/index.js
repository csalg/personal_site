import React from "react"
import { Link } from "gatsby"
import "../stylesheets/portfolio.scss"
import { LogoPython } from "@styled-icons/ionicons-solid/LogoPython"
import { LogoReact } from "@styled-icons/ionicons-solid/LogoReact"
import { Mongodb } from "@styled-icons/simple-icons/Mongodb"
import { Flask } from "@styled-icons/simple-icons/Flask"
import { Antdesign } from "@styled-icons/simple-icons/Antdesign"
import { ScikitLearn } from "@styled-icons/simple-icons/ScikitLearn"
import { Pandas } from "@styled-icons/simple-icons/Pandas"
import { Numpy } from "@styled-icons/simple-icons/Numpy"
import { Elm } from "@styled-icons/simple-icons/Elm"
import { Django } from "@styled-icons/simple-icons/Django"
import { Materialdesign } from "@styled-icons/simple-icons/Materialdesign"
import { Latex } from "@styled-icons/simple-icons/Latex"
import { AcademicCap } from "@styled-icons/heroicons-solid/AcademicCap"
import NavigationWrapper from "../components/NavigationWrapper"
import { ReadMore } from "@styled-icons/material-outlined/ReadMore"
import { MarkGithub } from "@styled-icons/octicons/MarkGithub"

export default () => (
  <NavigationWrapper contentId={"portfolio-content"}>
    <PortfolioItem
      name={"Lomb"}
      subtitle={"Data-driven platform for immersive language-learning."}
      readMore={"lomb"}
      gallery={["portfolio-lomb-1.gif", "lomb_video.gif"]}
      description={[
        "User tackles complex, immersive language tasks like reading a book or watching a TV series.",
        "Machine learning algorithms craft perfectly-targeted revision sessions to optimize relevant vocabulary acquisition.",
        "Completely original concept which dismisses the SRS dogma in favour of actual science"]
      }
      stack={[
        <StackItem Icon={LogoPython} name='Python' />,
        <StackItem Icon={LogoReact} name='React' />,
        <StackItem Icon={Mongodb} name='MongoDB' />,
        <StackItem Icon={Flask} name='Flask' />,
        <StackItem Icon={Antdesign} name='antd' />
      ]}
      style={{ marginTop: "2em" }}
    />
    <PortfolioItem
      name={"Memory-Trace Regression"}
      subtitle={"Machine learning algorithm which powers Lomb's revision module."}
      paper={"portfolio-mtr-paper.pdf"}
      github={"https://github.com/csalg/mtr"}
      gallery={["portfolio-mtr.png"]}
      description={[
        "Standard  machine learning methods cannot reliably predict when a user will forget a word.",
        "My approach encodes domain knowledge from Experimental Psychology models (and elsewhere) using semi-supervised learning techniques.",
        "The paper which introduces my approach was recently accepted to the CSCW 2021 conference."]}
      stack={[
        <StackItem Icon={LogoPython} name='Python' />,
        <StackItem Icon={ScikitLearn} name='sklearn' />,
        <StackItem Icon={Pandas} name='Pandas' />,
        <StackItem Icon={Numpy} name='Numpy' />,
        <StackItem Icon={Latex} name='Latex' />
      ]}
    />
    <PortfolioItem
      name={"Chemotherapy Management App"}
      subtitle={"Medicine management solution."}
      externalReadMore={"https://github.com/csalg/chemotherapy_manager"}
      github={"https://github.com/csalg/chemotherapy_manager"}
      gallery={["portfolio-ruijin-1.jpg", "portfolio-ruijin-2.jpg"]}
      description={[
        "Calculates chemotherapy drug doses, inventory expiry dates, prints labels, etc. for each patient.",
        "UI designed to prevent human error.",
        "Admin and user roles with different privileges.",
        "Used in Ruijin Hospital (Shanghai)."]}
      stack={[
        <StackItem Icon={LogoPython} name='Python' />,
        <StackItem Icon={Django} name='Django' />,
        <StackItem Icon={Elm} name='Elm' />,
        <StackItem Icon={Materialdesign} name='Material design' />
      ]}
    />
    <PortfolioItem
      name={"Pubsub Testing Framework"}
      subtitle={"Framework used for testing new content-based publish-subscribe algorithms."}
      github={"https://github.com/csalg/pubsub/"}
      gallery={["portfolio-pubsub.png"]}
      description={[
        "I inherited this codebase, which I significantly re-wrote and then extended.",
        "My main contribution was to automate much of the work involved in running experiments: user declares what should be done in a configuration file and the program runs the experiments, plots the results, typesets Latex tables, etc. (before this was a very time consuming process)."]
      }
      stack={["C++, R, Python, Latex"]}
    />

  </NavigationWrapper>
)


const PortfolioItem = ({
                         name,
                         subtitle,
                         readMore,
                         externalReadMore,
                         gallery,
                         github,
                         paper,
                         description,
                         stack,
                         style
                       }) => {
  const StackComponent = _ => stack ?
    <div style={{ marginBottom: "1.5em" }}><b style={{ marginRight: "20px" }}>Stack:</b>
      <div style={{ "display": "inline-block" }}>{stack}</div>
    </div> : <span />

  const ReadMoreButton = _ => readMore ? <Link to={"portfolio/" + readMore}>
    <button className="btn" data-color="#ffffff"><ReadMore style={{ height: "1.5em", margin: "0.2em" }} /> Read more
    </button>
  </Link> : <span />

  const ExternalReadMoreButton = _ => externalReadMore ? <a href={externalReadMore}>
    <button className="btn" data-color="#ffffff"><ReadMore style={{ height: "1.5em", margin: "0.2em" }} /> Read more
    </button>
  </a> : <span />

  const PaperButton = _ => paper ? <a href={paper}>
    <button className="btn" data-color="#ffffff"><AcademicCap style={{ height: "1.5em", margin: "0.2em" }} /> Read paper
    </button>
  </a> : <span />

  const GithubButton = _ =>  github ? <a href={github}>
    <button className="btn" data-color="#ffffff"><MarkGithub style={{height: '1.5em', margin: '0.2em'}}/> See source code</button></a> : <span />

  return (<div className={'portfolio-item-wrapper'} style={style}>
    <div className={"portfolio-item"}>
      <div className={"flex flex-col justify-space-around align-center"}>
        {gallery.map(src => <img src={`/img/${src}`} alt="" />)}

      </div>
      <main>
        <div className={'portfolio-item-heading'}>
          <h1>{name}</h1>
          <span>{subtitle}</span>
        </div>
        <p className={"description"}>
          <ul>
            {description.map(bulletpoint => <li>{bulletpoint}</li>)}
          </ul>
        </p>
        <StackComponent />
        <p>
          <ReadMoreButton /> <ExternalReadMoreButton /> <PaperButton /> <GithubButton />
        </p>

      </main>
    </div>
  </div>)
}


const StackItem = ({Icon, name}) => {
  return (
    <div style={{display: "inline-flex", flexDirection: "column", marginRight: '20px'}}>
      <Icon style={{height: '30px', color: '#777'}}/>
      <span style={{fontSize: '0.8em', paddingTop: '4px'}}>{name}</span>
    </div>
  )}
