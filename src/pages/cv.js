import React from "react"
import styled from 'styled-components'
import {LocationPin} from '@styled-icons/entypo/LocationPin'
import {Phone}  from '@styled-icons/boxicons-regular/Phone'
import {Mail} from"@styled-icons/entypo/Mail"
import {Suitcase} from "@styled-icons/entypo/Suitcase"
import {Education} from "@styled-icons/zondicons/Education"
import {Tools} from "@styled-icons/entypo/Tools"
import {Github} from '@styled-icons/boxicons-logos/Github'
import {LinkedinSquare} from '@styled-icons/boxicons-logos/LinkedinSquare'
import {World} from '@styled-icons/boxicons-regular/World'
import {OpenBook} from '@styled-icons/entypo/OpenBook'
import {DocumentText} from '@styled-icons/typicons/DocumentText';
import {Cake2} from "@styled-icons/remix-line/Cake2";
import '../stylesheets/cv.scss'


export default function Home() {
  return <CV>
    <Header name={"Carlos Pérez-Guerra"}/>
    <PersonalInfo>
      <InfoItem name = 'Portfolio' icon={PersonalInfoIcon(World)} data={'www.csalgado.io'} />
      <InfoItem name = 'E-Mail' icon={PersonalInfoIcon(Mail)} data={'charlie@csalgado.io'} />
      <InfoItem name = 'Github' icon={PersonalInfoIcon(Github)} data={'github.com/csalg'} />
      <InfoItem name = 'LinkedIn' icon={PersonalInfoIcon(LinkedinSquare)} data={'linkedin.com/in/csalg'} />
      <InfoItem name = 'Phone' icon={PersonalInfoIcon(Phone)} data={'+45 5279 9658'} />
      <InfoItem name = 'Address' icon={PersonalInfoIcon(LocationPin)} data={'Kagsåkollegiet 2, 2860 Søborg'} />
      <InfoItem name = 'Birthday' icon={PersonalInfoIcon(Cake2)} data={'01/07/1989, Madrid (Spain)'} />
    </PersonalInfo>

    <Section title = {"Work Experience"} id={'cv-work-experience'} icon={SectionIcon(Suitcase)}>
      <SectionItem
        date={"04/2021-now"}
        city={"Copenhagen, Denmark"}
        header={"ChurchDesk"}
        subheader={"Software Developer, Backend"}
        details={[
          "Designing and implementing new features with Product Manager and other team members.",
          "Refactoring very long legacy code methods into something maintainable.",
          "Bumping dependency versions.",
          "Some ops stuff: e.g. I migrated the production db to new MariaDb cluster which I set up.",
        ]}
      />
      <SectionItem
        date={"03/2021"}
        city={"Copenhagen, Denmark"}
        header={"Uniqkey"}
        subheader={"Software Developer, QA"}
        details={[
          "Started service-level api testing, which now gets triggered as part of the CI/CD commit cycle.",
          "Clarifying expected behaviour with PO, Support, QA and coming up with test cases.",
          "Tech stack: Node, CircleCI, SQL, Pusher, mocha, chai, supertest.",
        ]}
      />
      <SectionItem
        date={"06/2019-12/2020"}
        city={"Shanghai, China"}
        header={"Laboratory for Collaborative Intelligent Technologies"}
        subheader={"Software Developer"}
        details={[
          "Designed and implemented new publish-subscribe algorithms in C++.",
          "Full-stack work using Python for backends and predictive analytics and React for frontend work.",
          "Developed and published a predictive model for estimating vocabulary memory traces from user interaction data.",
        ]}
    />

      <SectionItem
        date={"04/2018-06/2018"}
        city={"Shanghai, China"}
        header={"Ruijin Hospital"}
        subheader={"Software Developer"}
        details={[
          "Built CRUD app with a reactive frontend using Django and Elm.",
          ]}
      />
      <SectionItem
        date={"05/2015-12/2017"}
        city={"Shanghai, China"}
        header={"KnowledgeLink Group Inc."}
        subheader={"Mathematics Teacher"}
        details={["Taught high-school Mathematics at the St. Mary's and Barstow campuses in Shanghai and Ningbo."
        ]}
      />
      <SectionItem
        date={"04/2012-05/2015"}
        city={"Madrid, Spain"}
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
      city={"Shanghai, China"}
      header={"MSc. Computer Science"}
      subheader={"Shanghai Jiaotong University"}
      details={[
        "(Remark: Only waiting for thesis defense which will happen online.)",
        "GPA: 3.8/4.0, top 5 percentile",
        "Research direction: data-driven software development",
        "Awarded CSC A scholarship for the duration of my studies.",
        `Key subjects: Algorithm Design and Analysis, Computer Networks, 
        Programming Languages, Machine Learning, Statistics, Bioinformatics`
      ]}
    />
      <SectionItem
        date={"12/2017-09/2018"}
        city={"Shanghai, China"}
        header={"Self-study"}
        subheader={""}
        details={[
           "Studied Math and CS topics by myself full-time.",
        ]}
      />
      <SectionItem
        date={"09/2007-07/2010"}
        city={"Aberystwyth, UK"}
        header={"BA Film and Television Studies"}
        subheader={"University of Wales, Aberystwyth"}
        details={[
        ]}
      />

    </Section>
    <Section title = {"Skills"} icon={SectionIcon(Tools)}>
      <SectionItem
        date={"Design & architecture"}
        header={""}
        subheader={"Event-stream architectures, domain-driven design, clean code, TDD/ATDD, UML"}
        details={[
        ]}
      />
      <SectionItem
        date={"Backend languages"}
        header={""}
        subheader={"Python (fastapi, async, flask, django, celery...), Node, Go, C++"}
        details={[
        ]}
      />
      <SectionItem
        date={"Databases / Queues"}
        header={""}
        subheader={"MongoDB, SQL, Kafka, DynamoDB"}
        details={[
        ]}
      />
      <SectionItem
        date={"Ops"}
        header={""}
        subheader={"Linux, Ansible, MariaDb, AWS, Serverless, Docker, CircleCI, Vagrant, Bash..."}
        details={[
        ]}
      />
      <SectionItem
        date={"Data analytics"}
        header={""}
        subheader={"Tensorflow, keras, sklearn, numpy, pandas, R"}
        details={[
        ]}
      />
      <SectionItem
        date={"Frontend"}
        header={""}
        subheader={"React, Typescript, Gatsby, antd, material"}

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
      <Section
        title = {"Publications"}
        icon={SectionIcon(OpenBook)}
      >
        <tr>
          <td style={{
            width:"4.4em",
          }}>
            <DocumentText style={{
              margin: "0em 0.5em 0.25em 2.5em",
              color: "hsla(0,0%,0%,0.4)",
              fontSize:"0.8em"
            }}/>
          </td>
          <td>
            <div style={{maxWidth: "70ch"}}>
              Perez-Guerra, Carlos & Jian Cao (2021).  Estimating Memory Retention Traces of Foreign Language Vocabulary from Reading Interaction Data. <i>Proceedings of the 2021 IEEE 24th International Conference on Computer Supported Cooperative Work in Design (CSCWD).</i>
            </div>
          </td>
        </tr>
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
  return <div className={'header'}>
    <div>
    <h1 className={'name'} style={{
      margin: '0 0 -0.2em 0',
    }}>{props.name}</h1>
      <span style={{
        color: 'hsla(0,0%,0%,0.6)'
      }}
      >Curriculum Vitae</span>
    </div>
    <img src="/img/cv-photo-small.png"/>

  </div>
}

const PersonalInfo = (props) => {
  return <div className={'personal-info'}>
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
  return <div id={props.id} style={{
    margin: '2em 0',
    pageBreakBefore: props.pageBreak
  }}>
    <h3 style={{marginBottom: "0.5em"}}><Icon/><span style={{paddingLeft: '0.25em'}}>{props.title}</span></h3>
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
    <td>
      <div>{props.date}</div>
      <div className='cv-city'>{props.city}</div>
    </td>
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
