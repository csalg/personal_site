import React from "react"
import {Link} from "gatsby"
import '../styles.scss'
import './portfolio.scss'
import "../buttons.scss"
import {LogoPython} from "@styled-icons/ionicons-solid/LogoPython"
import {LogoReact} from "@styled-icons/ionicons-solid/LogoReact"
import {Mongodb} from "@styled-icons/simple-icons/Mongodb"
import {Flask} from "@styled-icons/simple-icons/Flask"
import {Antdesign} from "@styled-icons/simple-icons/Antdesign"
import {ScikitLearn}  from "@styled-icons/simple-icons/ScikitLearn"
import {Pandas}  from "@styled-icons/simple-icons/Pandas"
import {Numpy}  from "@styled-icons/simple-icons/Numpy"
import {Elm} from "@styled-icons/simple-icons/Elm"
import {Django} from "@styled-icons/simple-icons/Django"
import {Materialdesign} from "@styled-icons/simple-icons/Materialdesign"
import {Latex} from "@styled-icons/simple-icons/Latex"
import {AcademicCap} from "@styled-icons/heroicons-solid/AcademicCap"
import NavigationWrapper from "../components/NavigationWrapper"
import {ReadMore} from "@styled-icons/material-outlined/ReadMore"
import {MarkGithub} from "@styled-icons/octicons/MarkGithub"

export default () => (
  <NavigationWrapper>
      <PortfolioItem
        name={"Lomb"}
        readMore={'lomb'}
        gallery={['portfolio-lomb-1.gif','lomb_video.gif',]}
        description={"Lomb is a data-driven platform for immersive language-learning. In contrast to simplistic flashcard apps like Duolingo, in Lomb one tackles complex, immersive language tasks like reading a book or watching a TV series, and its powerful machine learning algorithms craft perfectly-targeted revision sessions to optimize relevant vocabulary acquisition. A completely original concept which dismisses the SRS dogma in favour of actual science, born out of the ideas I explored in my masters thesis."
}
        stack={[
          <StackItem Icon={LogoPython} name='Python' />,
          <StackItem Icon={LogoReact} name='React' />,
          <StackItem Icon={Mongodb} name='MongoDB' />,
          <StackItem Icon={Flask} name='Flask' />,
          <StackItem Icon={Antdesign} name='antd' />,
          ]}
        style={{marginTop: '2em'}}
      />
      <PortfolioItem
        name={"Memory-Trace Regression"}
        paper={'portfolio-mtr-paper.pdf'}
        github={'https://github.com/csalg/mtr'}
        gallery={['portfolio-mtr.png']}
      description={"Memory-Trace Regression is the machine learning algorithm which powers Lomb's revision module. It is a new algorithm which I developed specifically for the task of memory trace estimation because standard supervised learning techniques did not work at all. Instead, it relies on a set of techniques known as weakly supervised learning, an approach which modifies traditional machine learning methods to encode domain knowledge and which is still an area of active research. The paper which introduces my approach was recently accepted to the CSCW 2021 conference."}
        stack={[
          <StackItem Icon={LogoPython} name='Python' />,
          <StackItem Icon={ScikitLearn} name='sklearn' />,
          <StackItem Icon={Pandas} name='Pandas' />,
          <StackItem Icon={Numpy} name='Numpy' />,
          <StackItem Icon={Latex} name='Latex' />,
        ]}
      />
      <PortfolioItem
        name={"Chemotherapy Management App"}
        externalReadMore={'https://github.com/csalg/chemotherapy_manager'}
        github={'https://github.com/csalg/chemotherapy_manager'}
        gallery={['portfolio-ruijin-1.jpg', 'portfolio-ruijin-2.jpg']}
        description={"A dosage management solution which is used \ " +
        "in Ruijin Hospital for tracking chemotherapy drug amounts and expiry dates"}
        stack={[
          <StackItem Icon={LogoPython} name='Python' />,
          <StackItem Icon={Django} name='Django' />,
          <StackItem Icon={Elm} name='Elm' />,
          <StackItem Icon={Materialdesign} name='Material design' />,
        ]}
      />
      <PortfolioItem
        name={"Pubsub Testing Framework"}
        github={'https://github.com/csalg/pubsub/'}
        gallery={['portfolio-pubsub.png']}
        description={"I refactored and extended the framework we use in my lab for testing new content-based publish-subscribe brokering algorithms. My main contribution was to automate much of the work involved in running experiments, so that one can simply declare what should be done in a configuration file and receive the results a while later, already formatted in Latex (before this was a very time consuming process)."
}
        stack={['C++, R, Python, Latex']}
      />

   </NavigationWrapper>
)


const PortfolioItem = ({
                         name,
                         readMore,
                         externalReadMore,
                         gallery,
                         github,
                         paper,
                         description,
                         stack,
                         style
}) => {
   const StackComponent = _ => stack ? <div style={{marginBottom: '1.5em'}}><b style={{ marginRight: '20px' }}>Stack:</b><div style={{'display': 'inline-block'}}>{stack}</div></div> : <span/>

  const ReadMoreButton = _ => readMore ? <Link to={'portfolio/'+readMore}>
    <button className="btn" data-color="#ffffff"><ReadMore style={{height: '1.5em', margin: '0.2em'}}/> Read more</button></Link>: <span />

  const ExternalReadMoreButton = _ => externalReadMore ? <a href={externalReadMore}>
    <button className="btn" data-color="#ffffff"><ReadMore style={{height: '1.5em', margin: '0.2em'}}/> Read more</button></a>: <span />

  const PaperButton = _ =>  paper ? <a href={paper}>
    <button className="btn" data-color="#ffffff"><AcademicCap style={{height: '1.5em', margin: '0.2em'}}/> Read paper</button></a> : <span />

  const GithubButton = _ =>  github ? <a href={github}>
    <button className="btn" data-color="#ffffff"><MarkGithub style={{height: '1.5em', margin: '0.2em'}}/> See source code</button></a> : <span />

  return (<div className={'portfolio-item-wrapper'} style={style}>
    <div className={'portfolio-item'}>
      <div className={'flex-col justify-space-around align-center'}>
        {gallery.map(src => <img src={`/img/${src}`} alt="" style={{maxWidth: '100%'}} />)}

      </div>
    <main>
      <h1>{name}</h1>
      <p className={'description'}>{description}</p>
      <StackComponent/>
      <p>
        <ReadMoreButton/> <ExternalReadMoreButton/> <PaperButton/> <GithubButton/>
      </p>

    </main></div>
  </div>)
}


const StackItem = ({Icon, name}) => {
  return (
    <div style={{display: "inline-flex", flexDirection: "column", marginRight: '20px'}}>
      <Icon style={{height: '30px', color: '#777'}}/>
      <span style={{fontSize: '0.8em', paddingTop: '4px'}}>{name}</span>
    </div>
  )}
