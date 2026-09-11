import React from "react"
import { Helmet } from "react-helmet"
import { LocationPin } from "@styled-icons/entypo/LocationPin"
import { Phone } from "@styled-icons/boxicons-regular/Phone"
import { Mail } from "@styled-icons/entypo/Mail"
import { Suitcase } from "@styled-icons/entypo/Suitcase"
import { Education } from "@styled-icons/zondicons/Education"
import { Tools } from "@styled-icons/entypo/Tools"
import { Github } from "@styled-icons/boxicons-logos/Github"
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare"
import { World } from "@styled-icons/boxicons-regular/World"
import { OpenBook } from "@styled-icons/entypo/OpenBook"
import { DocumentText } from "@styled-icons/typicons/DocumentText"
import { Cake2 } from "@styled-icons/remix-line/Cake2"
import "../stylesheets/cv.scss"

export default function Home() {
  return (
    <>
      <Helmet title="Carlos Pérez-Guerra — CV">
        <meta
          name="description"
          content="CV of Carlos Pérez-Guerra, backend software engineer specialized in Go, distributed systems and search infrastructure."
        />
      </Helmet>
      <CV>
        <Header name={"Carlos Pérez-Guerra"}>
          <Summary>
            Backend software engineer with a non-traditional path — teacher and
            researcher turned engineer — currently building large-scale search
            and scraping infrastructure at raffle.ai. I like owning systems
            end-to-end: Go services, databases, queues, CI/CD and the servers
            they run on.
          </Summary>
        </Header>
        <PersonalInfo>
          <InfoItem
            name="Website"
            icon={World}
            data={"csalg.com"}
            href={"https://csalg.com"}
          />
          <InfoItem
            name="E-Mail"
            icon={Mail}
            data={"charlie@csalgado.io"}
            href={"mailto:charlie@csalgado.io"}
          />
          <InfoItem
            name="Github"
            icon={Github}
            data={"github.com/csalg"}
            href={"https://github.com/csalg"}
          />
          <InfoItem
            name="LinkedIn"
            icon={LinkedinSquare}
            data={"linkedin.com/in/csalg"}
            href={"https://www.linkedin.com/in/csalg"}
          />
          <InfoItem
            name="Phone"
            icon={Phone}
            data={"+359 87 954 4808"}
            href={"tel:+359879544808"}
          />
          <InfoItem
            name="Home base"
            icon={LocationPin}
            data={"Sofia, Bulgaria"}
          />
          <InfoItem
            name="Birthday"
            icon={Cake2}
            data={"01/07/1989, Madrid (Spain)"}
          />
        </PersonalInfo>

        <Section
          title={"Work Experience"}
          id={"cv-work-experience"}
          icon={Suitcase}
        >
          <SectionItem
            date={"12/2023 – Current"}
            city={"Remote"}
            header={"raffle.ai"}
            subheader={"Senior Software Engineer (Contractor)"}
            details={[
              "Promoted to Senior Software Engineer in 01/2025.",
              "Led the migration from a custom BERT fine-tuning pipeline to generic models, migrating core components to Go.",
              "Moved vector search infrastructure from FAISS to Milvus, unlocking greater scalability, distributed reliability and maintainability.",
            ]}
          />
          <SectionItem
            date={"03/2022 – 12/2023"}
            city={"Copenhagen, Denmark"}
            header={"raffle.ai"}
            subheader={"Software Engineer (Backend, Employee)"}
            details={[
              "Scaled web scraper infrastructure from MVP to thousands of sandboxed, concurrent scrapes by overhauling the architecture and introducing queue-based async processing, dramatically improving reliability and system throughput.",
              "Shipped many backend features: page rank, differential scraping, content denoising, stealth mode (for scraping sites behind Cloudflare), autocomplete, constraint-based CSS blacklisting suggestions.",
              "Built CLI tools for self-serve pipeline troubleshooting by support teams, drastically reducing the support load on engineers.",
            ]}
          />
          <SectionItem
            date={"03/2021 – 03/2022"}
            city={"Copenhagen, Denmark"}
            header={"ChurchDesk"}
            subheader={"Software Engineer (Backend & Ops)"}
            details={[
              "Development of new messaging features which had a massive impact on sales in 2021Q4.",
              "Integration with external APIs like Sendgrid, Unlayer, mjml, Google Geolocation and others.",
              "Working with legacy code: refactoring, de-duplicating, extending test case coverage, etc.",
              "Setting up and migrating new production MariaDb cluster to our own dedicated servers (using Ansible).",
              "All sorts of infrastructure / sysadmin work: setting up encryption, backups, access management, etc.",
              "Performance optimization using metrics from Elastic, splitting off slow endpoints and profiling tools to find procedures blocking the main thread.",
            ]}
          />
          <SectionItem
            date={"06/2019 – 02/2021"}
            city={"Shanghai, China"}
            header={"Laboratory for Collaborative Intelligent Technologies"}
            subheader={"Software Engineer (Apprenticeship)"}
            details={[
              "Designed and implemented new publish-subscribe broker algorithms in C++.",
              "Full-stack work using Python for backends and predictive analytics and React for frontend work.",
              "Developed and published a predictive model for estimating vocabulary memory traces from user interaction data.",
            ]}
          />

          <SectionItem
            date={"04/2018 – 08/2018"}
            city={"Shanghai, China"}
            header={"Ruijin Hospital"}
            subheader={"Student Software Developer"}
            details={[
              "Developed a chemotherapy tracking solution helping nurses set and track doses, manage drug inventory & expiry dates, print labels and store heart report results.",
              "Built with Django and Elm, with a reactive frontend designed to prevent human error.",
            ]}
          />
          <SectionItem
            date={"05/2015 – 12/2017"}
            city={"Shanghai, China"}
            header={"KnowledgeLink Group Inc."}
            subheader={"Mathematics Teacher"}
            details={[
              "Taught high-school Mathematics at the St. Mary's and Barstow campuses in Shanghai and Ningbo.",
              "Created lessons within a blended learning environment and assisted the school in the use of technology and media in the classroom.",
            ]}
          />
          <SectionItem
            date={"04/2012 – 05/2015"}
            city={"Madrid, Spain"}
            header={"Mango Producciones"}
            subheader={"Media Producer"}
            details={[
              "Corporate video production for clients like Airbus, Iberia or Spanish Air Force.",
            ]}
          />
        </Section>
        <div className="page">
          <Section title={"Education"} icon={Education}>
            <SectionItem
              date={"09/2018 – 03/2021"}
              city={"Shanghai, China"}
              header={"MSc. Computer Science"}
              subheader={"Shanghai Jiaotong University"}
              details={[
                "GPA: 3.8/4.0, top 5 percentile",
                "Awarded CSC A scholarship for the duration of my studies.",
                `Key subjects: Algorithm Design and Analysis, Computer Networks,
        Programming Languages, Machine Learning, Statistical Learning, Linear System Theory, Game Theory, Optimization, Real Analysis, Statistics, Bioinformatics`,
                "(Remark: I decided NOT to graduate because apart from the classes, the program requires two additional years of essentially being a postdoc for free. However I completed all classes with good grades and even published a paper)",
              ]}
            />
            <SectionItem
              date={"12/2017 – 09/2018"}
              city={"Shanghai, China"}
              header={"Self-study"}
              subheader={""}
              details={[
                "Studied Math and CS topics by myself full-time.",
                "Areas of study: Programming (SICP), Algorithms, Linear Algebra, Multivariable Calculus, Probability, Statistics, Statistical Inference, Machine Learning.",
              ]}
            />
            <SectionItem
              date={"09/2007 – 07/2010"}
              city={"Aberystwyth, UK"}
              header={"BA Film and Television Studies"}
              subheader={"University of Wales, Aberystwyth"}
              details={[]}
            />
          </Section>
          <Section title={"Skills"} icon={Tools}>
            <SkillRow
              category={"Design & architecture"}
              items={
                "Functional architectures, domain-driven design, clean code, TDD/ATDD, UML"
              }
            />
            <SkillRow
              category={"Backend languages"}
              items={"Go, Typescript, Python, C++"}
            />
            <SkillRow
              category={"Databases / Queues"}
              items={"PostgresDb, MariaDb, Redis, Nats, Kafka, Milvus"}
            />
            <SkillRow
              category={"Ops"}
              items={
                "Linux, Ansible, AWS, Serverless, Docker, CircleCI, Vagrant, Bash..."
              }
            />
            <SkillRow
              category={"Data analytics (a bit rusty now)"}
              items={"Tensorflow, keras, sklearn, numpy, pandas, R"}
            />
            <SkillRow
              category={"Frontend"}
              items={"React, Typescript, Gatsby, antd, material"}
            />
            <SkillRow
              category={"Human languages"}
              items={"Spanish (native), English (native), a little Danish"}
            />
          </Section>
          <Section title={"Publications"} icon={OpenBook}>
            <Publication>
              Perez-Guerra, Carlos &amp; Jian Cao (2021). Estimating Memory
              Retention Traces of Foreign Language Vocabulary from Reading
              Interaction Data.{" "}
              <i>
                Proceedings of the 2021 IEEE 24th International Conference on
                Computer Supported Cooperative Work in Design (CSCWD).
              </i>
            </Publication>
          </Section>
        </div>
      </CV>
    </>
  )
}

const CV = props => (
  <div className={"cv-root"}>
    <div className={"cv-sheet"}>{props.children}</div>
  </div>
)

const Header = props => {
  return (
    <div className={"header"}>
      <div className={"header-text"}>
        <h1 className={"name"}>{props.name}</h1>
        <span className={"header-subtitle"}>Curriculum Vitae</span>
        {props.children}
      </div>
      <img src="/img/cv-photo-small.png" alt={`Portrait of ${props.name}`} />
    </div>
  )
}

const Summary = props => <p className={"cv-summary"}>{props.children}</p>

const PersonalInfo = props => {
  return (
    <div className={"personal-info"}>
      <div className="personal-info-grid">{props.children}</div>
    </div>
  )
}

const InfoItem = props => {
  const Icon = props.icon
  const value = props.href ? <a href={props.href}>{props.data}</a> : props.data
  return (
    <div className="info-item">
      <Icon className={"info-icon"} />
      <span className={"info-label"}>{props.name}</span>
      <span className={"info-value"}>{value}</span>
    </div>
  )
}

const Section = props => {
  const Icon = props.icon
  return (
    <div id={props.id} className={"section"}>
      <h3 className={"section-title"}>
        <span className={"circle-icon"}>
          <Icon />
        </span>
        <span className={"section-heading-text"}>{props.title}</span>
      </h3>
      <table className="sectionTable">{props.children}</table>
    </div>
  )
}

const SectionItem = props => {
  let Header = _ => <></>
  if (props.header) {
    Header = _ => (
      <>
        <span className={"item-header"}>{props.header}</span>
        <br />
      </>
    )
  }
  return (
    <tr>
      <td>
        <div>{props.date}</div>
        <div className="cv-city">{props.city}</div>
      </td>
      <td>
        {" "}
        <Header />
        {props.subheader}
        {props.details.length > 0 && (
          <ul>
            {props.details.map((bulletpoint, i) => (
              <li key={i}>{bulletpoint}</li>
            ))}
          </ul>
        )}
      </td>
    </tr>
  )
}

const SkillRow = props => (
  <div className="skill-row">
    <div className="skill-category">{props.category}</div>
    <div className="skill-items">{props.items}</div>
  </div>
)

const Publication = props => (
  <div className="publication">
    <span className="publication-icon">
      <DocumentText />
    </span>
    <div>{props.children}</div>
  </div>
)
