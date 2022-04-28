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
            width: '800px'
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
                Thais Helena Guidolin Miguel is a Brazilian mixed media artist,
                wife, and mother of two boys. She has lived between the San
                Francisco Bay Area and Brazil for the last 18 years. She is
                passionate about her family, art, nature, music, books,
                traveling, human rights advocacy and simplicity. “If my art can
                stir your soul, if I foment reflection or if I can put a smile
                on your heart, then my creativity succeeds.” Thais is grateful
                that the motivation for her work is the symbiosis between what
                she is and how her art can touch others. “The magic around being
                us, is also between us, on this golden bridge between you and
                I.”
                <br />
                Thais' explorations in painting, including mixed media, produce
                insightful works that reflects the strength and dignity of
                thoughtful living. Using paint, canvas and the decorative
                properties of mixed media, she creates visual delights and
                incorporating timeless words of wisdom. There is an explosive
                energy to these works that capture the inspirational, sometimes
                fleeting, moments of life”, says Randy Dutra, artist and Academy
                Award Nominee for “Star Wars” and “Jurassic Park”.
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
                test
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
                {Uppercase(
                  "Steve Ouzounian - Co-Founder and Executive Director"
                )}
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
                investment. He’ll also provide introductory level analysis and
                education in the crypto space for those interested in learning
                to invest.
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
