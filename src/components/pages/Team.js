import styled from "styled-components";
import Hero from "../hero";
import Footer from "../footer";
import { NftImage } from "../../constants/image-constant";
import { Container } from "../container";
import { Between, BodyText, Heading1, Heading2, Row } from "../layout";
import { Uppercase } from "../../utillities/uppercase";
import "./Home.css";
const { Sam, Steve, Colleen, Thais } = NftImage;

function Team() {
  return (
    <>
      <Content>
        <Container
          style={{
            backgroundColor: "rgba(0,0,0,.15)",
            borderRadius: "20px",
            margin: "20px",
            width: "800px",
          }}
        >
          <Heading1 className="wow fadeInUp">{Uppercase("The Team")}</Heading1>
        </Container>
        <Container
          style={{
            backgroundColor: "rgba(0,0,0,.15)",
            borderRadius: "20px",
            margin: "20px",
          }}
        >
          <Row>
            <TextWrapper style={{ maxWidth: "900px" }}>
              <Heading2 className="wow fadeInUp">
                {Uppercase("Thais Helena - Artist and Visionary")}
              </Heading2>
              <BodyText className="wow fadeInUp" style={{ marginTop: "30px" }}>
                Thais Helena Guidolin Oz is a Brazilian mixed media artist,
                married and mother of two boys who has lived in the San
                Francisco Bay Area for the last 20 years. Exhibiting her art in
                several galleries in the Bay Area and owning two charming ones
                in the South of Brazil she has touched people with the vibrance
                of her art and message. A former lawyer by degree and
                self-taught artist by passion Thais loves to portray the
                feminine universe and all the exuberance and strengh that
                inhabit the spirit of each person. A firm belevier in love,
                passion for life, compassion and service Thais’ wishes that
                through her art she can bring out these values that reflect the
                power and dignity of thoughtful living. Her biggest honor would
                be to bring you joy and to remind you of your unique and
                beautiful light.
                <br />
                <br />
                Namaste
              </BodyText>
            </TextWrapper>
            <Between />
            <ImageWrapper
              className="wow fadeInUp"
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <img
                src={Thais}
                alt="cronos-nft"
                style={{ borderRadius: "15px", width: "400px", height: "auto" }}
              />
            </ImageWrapper>
          </Row>
        </Container>
        <Container
          style={{
            backgroundColor: "rgba(0,0,0,.15)",
            display: "flex",
            borderRadius: "20px",
            margin: "20px",
          }}
        >
          <Row>
            <TextWrapper style={{ maxWidth: "900px" }}>
              <Heading2 className="wow fadeInUp">
                {Uppercase("Colleen Wanty - Marketing Director / Advisor")}
              </Heading2>
              <BodyText className="wow fadeInUp" style={{ marginTop: "30px" }}>
                Colleen has paid back her success through women’s advocacy for
                decades. Colleen was an original Luna Ambassador to help bring
                women safely into cycling, a GRiT leader to safely bring more
                girls into cycling, confidence, and friendship, and a mentor to
                young women via internships. Colleen’s 25 years of marketing
                leadership now also focused on helping The Divine Feminine
                effectively reach those interested in a unique blend of self
                expression, advocacy, inspiration, and investment. Colleen has
                led marketing, strategy, and branding efforts from A round
                startups to Fortune500 companies.
              </BodyText>
            </TextWrapper>
            <Between />
            <ImageWrapper
              className="wow fadeInUp"
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <img
                src={Colleen}
                alt="cronos-nft"
                style={{ borderRadius: "15px", width: "400px", height: "auto" }}
              />
            </ImageWrapper>
          </Row>
        </Container>
        <Container
          style={{
            backgroundColor: "rgba(0,0,0,.15)",
            display: "flex",
            borderRadius: "20px",
            margin: "20px",
          }}
        >
          <Row>
            <TextWrapper style={{ maxWidth: "900px" }}>
              <Heading2 className="wow fadeInUp">
                {Uppercase("Sam Ouzounian - Lead Blockchain Developer")}
              </Heading2>
              <BodyText className="wow fadeInUp" style={{ marginTop: "30px" }}>
                Sam Ouzounian is an experienced Full-Stack Blockchain Developer.
                He’s the lead blockchain developer at The Divine Feminine NFT
                project’s Divine Labs. He is responsible for all the technical
                components on our roadmap, including smart contracts, discord
                bots, NFT and Merch marketplaces, NFT Staking Utility,
                Tokenomics, component integrations, etc. He’s also the lead
                blockchain developer at Cronos Fighters which successfully
                minted and sold out in 8 minutes. He’s leading the tokenomics
                analysis and development for the subsequent project phases.
                <br />
                <br />
                Sam also works as an Ethical Hacker via the HackerOne platform.
                Before his emphasis on Blockchain and Web3 development, Sam was
                one of the top hackers in the nation. This experience gives him
                an edge in producing quality, secure code.
                <br />
                <br />
                Sam lives in Chicago, IL, and works towards a degree from DePaul
                University in Computer Science. He’s currently on the Dean’s
                list with a cumulative 4.0 GPA. Sam is excited to be part of the
                groundbreaking and revolutionary crypto and NFT space, helping
                change the world for the better. Aside from professional and
                educational endeavors, Sam spends his time outside rock
                climbing, surfing, or mountain biking. He believes in
                maintaining a healthy work-life balance, especially in Web3,
                where emotions are high and things move rapidly.
              </BodyText>
            </TextWrapper>
            <Between />
            <ImageWrapper
              className="wow fadeInUp"
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <img
                src={Sam}
                alt="cronos-nft"
                style={{ borderRadius: "15px", width: "400px", height: "auto" }}
              />
            </ImageWrapper>
          </Row>
        </Container>
        <Container
          style={{
            backgroundColor: "rgba(0,0,0,.15)",
            display: "flex",
            borderRadius: "20px",
            margin: "20px",
          }}
        >
          <Row>
            <TextWrapper style={{ maxWidth: "900px" }}>
              <Heading2 className="wow fadeInUp">
                {Uppercase("Steve Oz - Co-Founder and Executive Director")}
              </Heading2>
              <BodyText className="wow fadeInUp" style={{ marginTop: "30px" }}>
                Steve has been at the intersection of technology, business, and
                investment for over 30 years. At Accenture he defined the
                partnership’s early models of SaaS and led the firm’s investment
                into startups in that space (Accenture Ventures). He also built
                teams that developed complex applications that scaled into some
                of the largest global production environments. At Oracle Steve
                developed the first global industry operating model and assisted
                with the acquisition and integration of 5 retail technology
                companies and built and led the Retail global solutions team.
                Steve has spent the past 5 years analyzing and trading crypto
                and equities as well as co-founding a company.
                <br />
                Steve is personally committed to community youth development via
                volunteer management positions in national and regional
                charities as well as individual contribution enabling local
                youth clubs. He enthusiastically looks forward to applying his
                professional and personal experience into The Divine Feminine –
                a blend of advocacy, community, inspiration, expression and
                investment. Steve will also provide crypto analysis and
                education for those interested in learning to invest.
              </BodyText>
            </TextWrapper>
            <Between />
            <ImageWrapper
              className="wow fadeInUp"
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <img
                src={Steve}
                alt="cronos-nft"
                style={{ borderRadius: "15px", width: "400px", height: "auto" }}
              />
            </ImageWrapper>
          </Row>
        </Container>
      </Content>
      <Footer style={{ marginTop: "100px" }} />
    </>
  );
}

const Content = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  #about-cronos {
    padding-top: 180px;
    padding-bottom: 180px;
  }
  #roadmap-cronos {
    padding-top: 180px;
    padding-bottom: 180px;
  }

  #utility-cronos {
    margin-top: 180px;
  }

  #teams-cronos {
    padding-bottom: 180px;
    padding-top: 180px;
    margin-bottom: 180px;
    z-index: 10;
    background-color: #131313;
  }
  #teams-wrapper {
    margin-top: 50px;
    gap: 30px;
  }
`;

const ImageWrapper = styled.div`
  max-width: 100%;
  height: auto;
  text-align: center;
  @media screen and (max-width: 1220px) {
    order: 1;
  }
`;

const TextWrapper = styled.div`
  max-width: 620px;
  @media screen and (max-width: 1220px) {
    order: 2;
  }
`;

export default Team;
