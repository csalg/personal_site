import React from "react"
import styled from 'styled-components'
import {Calendar} from '@styled-icons/boxicons-regular/Calendar'
import {LocationPin} from '@styled-icons/entypo/LocationPin'
import {Phone}  from '@styled-icons/boxicons-regular/Phone'
import {Mail} from"@styled-icons/entypo/Mail"
import {Suitcase} from "@styled-icons/entypo/Suitcase"
import {Education} from "@styled-icons/zondicons/Education"
import {Tools} from "@styled-icons/entypo/Tools"
import {Github} from '@styled-icons/boxicons-logos/Github'
import {World} from '@styled-icons/boxicons-regular/World'
import '../cv.css'


export default function Home() {
  return <CV>
    <Header name={"Carlos Pérez-Guerra"}/>
    <PersonalInfo>
      <InfoItem name = 'Birthday' icon={PersonalInfoIcon(Calendar)} data={'01/07/1989, Madrid (Spain)'} />
      <InfoItem name = 'Address' icon={PersonalInfoIcon(LocationPin)} data={'Kagsåkollegiet 2, 2860 Søborg'} />
      <InfoItem name = 'Phone' icon={PersonalInfoIcon(Phone)} data={'+45 5279 9658'} />
      <InfoItem name = 'E-Mail' icon={PersonalInfoIcon(Mail)} data={'charlie@csalgado.io'} />
      <InfoItem name = 'Github' icon={PersonalInfoIcon(Github)} data={'csalg'} />
      <InfoItem name = 'Website' icon={PersonalInfoIcon(World)} data={'www.csalgado.io'} />

    </PersonalInfo>

    <Section title = {"Work Experience"} icon={SectionIcon(Suitcase)}>
      <SectionItem
        date={"06/2019-12/2020"}
        header={"Laboratory for Collaborative Intelligent Technologies"}
        subheader={"Software Developer"}
        details={[
          "Full-stack work using Python for backends and predictive analytics and React for frontend work.",
          "Developed and published a predictive model for estimating vocabulary memory traces from user interaction data.",
          "Designed and implemented new publish-subscribe algorithms in C++.",
        ]}
    />

      <SectionItem
        date={"04/2018-06/2018"}
        header={"Ruijin Hospital"}
        subheader={"Software Developer"}
        details={[
          "Built CRUD app with a reactive frontend using Django and Elm.",
          ]}
      />
      <SectionItem
        date={"05/2015-12/2017"}
        header={"KnowledgeLink Group Inc."}
        subheader={"Mathematics Teacher"}
        details={["Taught high-school Mathematics at the St. Mary's and Barstow campuses in Shanghai and Ningbo."
        ]}
      />
      <SectionItem
        date={"04/2012-05/2015"}
        header={"Mango Producciones"}
        subheader={"Media Producer"}
        details={[ "Corporate video production for clients like Airbus, Iberia or Spanish Air Force."
        ]}
      />
    </Section>
    <div className='page'>
    <Section
      title = {"Education"}
      icon={SectionIcon(Education)}
    >

    <SectionItem
      date={"09/2018-06/2021"}
      header={"MSc. Computer Science"}
      subheader={"Shanghai Jiaotong University"}
      details={[
        "GPA: 3.8/4.0, top 5 percentile",
        "Research direction: data-driven software development",
        "Awarded CSC A scholarship for the duration of my studies.",
        `Key subjects: Algorithm Design and Analysis, Computer Networks, 
        Programming Languages, Machine Learning, Statistics, Bioinformatics`
      ]}
    />
      <SectionItem
        date={"12/2017-09/2018"}
        header={"Self-study"}
        subheader={""}
        details={[
           "Studied Math and CS topics by myself full-time.",
        ]}
      />
      <SectionItem
        date={"09/2007-07/2010"}
        header={"BA Film and Television Studies"}
        subheader={"University of Wales, Aberystwyth"}
        details={[
        ]}
      />

    </Section>
    <Section title = {"Skills"} icon={SectionIcon(Tools)}>
      <SectionItem
        date={"Development"}
        header={""}
        subheader={"SDLC, software architecture, domain-oriented design, TDD, unit testing"}
        details={[
        ]}
      />
      <SectionItem
        date={"Computer languages"}
        header={""}
        subheader={"Python, Javascript, C++, Go, R"}
        details={[
        ]}
      />
      <SectionItem
        date={"Libraries / Frameworks"}
        header={""}
        subheader={"React, Gatsby, Django, Tensorflow, Keras, SKLearn, NumPy, Pandas..."}
        details={[
        ]}
      />
      <SectionItem
        date={"Operations"}
        header={""}
        subheader={"Linux, Docker, Bash scripting"}
        details={[
        ]}
      />
      <SectionItem
        date={"Human languages"}
        header={""}
        subheader={"Spanish (native), English (native), Chinese (advanced), German (intermediate)"}
        details={[
        ]}
      />
    </Section>
    </div>
  </CV>
}

const CV = props => (
  <div style={{width: '100%', display:'flex', justifyContent: 'center'}}>
    <div style={{
      width: '210mm',
      background: 'white',
      padding: '4em'
    }}>
      {props.children}

    </div>
  </div>
)

const Header = props => {
  return <div style={{
    display: "flex",
    justifyContent: "space-between",
    margin: '1em 0 0.5em 0'
  }}>
    <div>
    <h1 className={'name'} style={{
      margin: '0 0 -0.2em 0',
    }}>{props.name}</h1>
      <span style={{
        color: 'hsla(0,0%,0%,0.6)'
      }}
      >Curriculum Vitae</span>
    </div>
    <img src="img/cv-photo-small.png" style={{
      width: '25%',
      borderRadius: '50%'
    }}/>

  </div>
}

const PersonalInfo = (props) => {
  return <div style={{
    margin: '-5.5em 0 2em 0'
  }}>
      <table className='personalInfoTable'>
        {props.children}
      </table>
    </div>
}

const InfoItem = props => {
  const Icon = props.icon
    return <tr>
      <td><Icon/><span style={{padding: '10px'}}>{props.name}</span></td><td>{props.data}</td>
    </tr>
}

const PersonalInfoIcon = icon => styled(icon)`
  width: 1em
`
const Section = (props) => {
  const Icon = props.icon
  return <div style={{
    margin: '2em 0',
    pageBreakBefore: props.pageBreak
  }}>
    <h3><Icon/><span style={{paddingLeft: '0.25em'}}>{props.title}</span></h3>
    <table className="sectionTable">
      {props.children}
    </table>
  </div>
}

const SectionItem = props => {
  let Header = _ => <></>
  if (props.header) {
    Header = _ => (
      <>
      <span style={{
        fontWeight: 'bold',
        color: 'hsl(0,0%,0%,0.8)',

      }}>{props.header}</span><br/>
      </>
    )
  }
  return <tr>
    <td>{props.date}</td>
    <td> <Header/>
      {props.subheader}
      <ul>
        {props.details.map(bulletpoint => <li>{bulletpoint}</li>)}
      </ul>
    </td>
  </tr>
}
const SectionIcon = icon => props => {
  const Icon = styled(icon)`
  width: 0.8em
  `
  return <span className={'circle-icon'}><Icon/></span>
}
