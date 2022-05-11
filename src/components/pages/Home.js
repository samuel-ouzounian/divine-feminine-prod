import styled from "styled-components";
import Hero from "../hero";
import Footer from "../footer";
import { SharedImage, NftImage } from "../../constants/image-constant";
import { Container } from "../container";
import { Between, BodyText, Heading1, Heading2, Row } from "../layout";
import { Uppercase } from "../../utillities/uppercase";
import { settings, settings2 } from "../../configs/app-config";
import "./Home.css";
import { MenuWrapper } from "../menu";
import {
  RoadmapContent,
  RoadmapTimeline,
  RoadmapTimelineLeft,
  RoadmapTimelineRight,
} from "../roadmap";
import Slider from "react-slick";
const { TwitterIco, InstagramIco } = SharedImage;
const {
  Sam,
  Steve,
  Colleen,
  Thais,
  Celestial1,
  Celestial2,
  Celestial3,
  Celestial4,
  Celestial5,
  Celestial6,
  LinkedIN,
  bronzeCelestial,
  goldCelestial,
  platinumCelestial,
} = NftImage;

export default function Views() {
  return (
    <>
      <Content>
        <Hero />
        <Container id="about">
          <Container
            style={{
              borderRadius: "20px",
              margin: "20px",
              backgroundColor: "rgba(0,0,0,.15)",
              width: 'auto'
            }}
          >
            <Heading1 className="wow fadeInUp">{Uppercase("What is the divine feminine?")}</Heading1>
            <BodyText className="wow fadeInUp" style={{ color: 'white' }}>
              We are an NFT project blending the benefits of (a) inspiration and expression, (b) strong community and advocacy, and (c) innovation and investment into a project beyond the ordinary.             </BodyText>
          </Container>
          <Row style={{ justifyContent: "center", marginTop: '50px' }}>
            <ImageWrapper className="wow fadeInLeft">
              <img
                src={Celestial1}
                alt="cronos-nft"
                style={{ borderRadius: "10px", width: "500px", height: "auto" }}
              />
            </ImageWrapper>
            <Between />
            <TextWrapper>
              <Heading1 className="wow fadeInUp">
                {Uppercase("Inspiration & Expression")}
              </Heading1>
              <BodyText className="wow fadeInUp">

                The artistic expression of our NFTs is to bring beautiful art that brings light and hope into this world.   To begin, we present the Goddess of Light collection comprising of 10,870 unique NFTs generated from hand drawn and painted elements by celebrated artist,{" "}
                <a
                  href="https://thaishelenastudio.com/about/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white" }}
                >
                  Thais Helena
                </a>
                , who has multiple galleries spread across 2 continents.  Each of us are created from the same base spark gifted by The Divine. And just like humanity, our collections are created from the same base. Each NFT in our collections represent a vast diversity with each bringing light, hope, faith and positive energy to share with the world.  And when you invest in an NFT from The Divine Feminine project, you will own the art-- unlike many other NFT projects out there.
              </BodyText>
            </TextWrapper>
          </Row>
          <Row style={{ justifyContent: "center", paddingTop: "50px" }}>
            <TextWrapper>
              <Heading1 className="wow fadeInUp">
                {Uppercase("Community & Advocacy")}
              </Heading1>
              <BodyText className="wow fadeInUp">
                Our Decentralized Autonomous Organization (DAO) drives decisions across the art they'd like to see, the location for our Celestial Gala events, the charities and causes they'll advocate, and decisions effecting their NFT investment.  We believe the collective strength of our DAO will drive better outcomes than a centralized project management alone.  Celestial Galas allows in person events to discuss and decide issues relevant to our community in a fun and casual environment.  Actionable financial trading education and analysis across both Cryptocurrency and Wall Street financial markets is available directly from our discord.  Trillions of dollars are flowing into the Web3 market, and our community will directly help in democratizing this opportunity.
              </BodyText>
            </TextWrapper>
            <Between />
            <ImageWrapper className="wow fadeInRight">
              <img
                src={Celestial2}
                alt="cronos-nft"
                style={{ borderRadius: "10px", width: "500px", height: "auto" }}
              />
            </ImageWrapper>
          </Row>
        </Container>
        <Row
          id="utility"
          style={{
            padding: "80px 20px",
            position: "relative",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Heading1
            className="wow fadeInUp"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            {Uppercase("Innovation & Investment")}
            <TextWrapper style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
              <BodyText>   
                Here at The Divine Feminine we are committed to providing our community with real life utility and investment opportunities. We want to build a community that will leave a long lasting impact on the NFT and Crypto spaces. We're excited about the future prospects of our project and the various ways we'll bring lasting value to you and our community.  We look forward to making this journey with you, and we're always happy to receive feedback on how and what we could be doing better.
              </BodyText>
            </TextWrapper>
          </Heading1>

          <Row>
            <UtilityWrapper>
              <li>
                <UtilityCard className="wow bounceInLeft">
                  <Heading2 style={{ textAlign: "center" }}>
                    {Uppercase("Celestial Gala")}
                  </Heading2>
                  <BodyText>
                    We envision conducting Celestial Galas in various locations
                    determined by our DAO and beginning once the Goddess of
                    Light collection sells out. We'd like to coincide these
                    events with the introduction of a new collection. Celestials
                    on our VIP lists (Bronze, Gold, and Platinum) will gain free
                    access in addition to a stipend. (See tier benefit list)
                  </BodyText>
                </UtilityCard>
              </li>
              <li>
                <UtilityCard className="wow bounceInLeft">
                  <Heading2 style={{ textAlign: "center" }}>
                    {Uppercase("The Divine Feminine DAO")}
                  </Heading2>
                  <BodyText>
                    All our Celestials will participate in the direction and
                    governance of our project via the DAO. These will primarily
                    comprise of suggestions, feedback, directional votes, and
                    binding votes. Eventually we'd like to see the DAO governed
                    by Celestials voted into positions by the DAO to work
                    alongside our project team for the betterment of the entire
                    community.
                  </BodyText>
                </UtilityCard>
              </li>
              <li>
                <UtilityCard className="wow bounceInLeft">
                  <Heading2 style={{ textAlign: "center" }}>
                    {Uppercase("NFT Marketplace")}
                  </Heading2>
                  <BodyText>
                    Our Marketplace will allow users to buy and sell NFTs from
                    our various collections. Eventually, NFT's will be able to
                    be bought with our $FEMME token.
                  </BodyText>
                </UtilityCard>
              </li>
              <li>
                <UtilityCard className="wow bounceInLeft">
                  <Heading2 style={{ textAlign: "center" }}>
                    {Uppercase("NFT Staking")}
                  </Heading2>
                  <BodyText>
                    Celestial's who stake their NFTs will receive rewards in
                    $FEMME. Celestial tiers boost the rewards received (See
                    Celestial Tier Benefits).
                  </BodyText>
                </UtilityCard>
              </li>
              <li>
                <UtilityCard className="wow bounceInLeft">
                  <Heading2 style={{ textAlign: "center" }}>
                    {Uppercase("Token")}
                  </Heading2>
                  <BodyText>
                    After our Goddess of Light collection sells out, we plan to
                    introduce our $FEMME token. $FEMME is a deflationary token
                    with an initial supply of 100,000,000 and a total supply of
                    300,624,135 released over 20 years. The $FEMME token may be
                    used for Celestial benefits like airdrops, Galas,
                    Merchandise, etc. Eventually we'd like to see our NFT
                    marketplace use $FEMME for the purchase and sale of our NFT
                    art to help spur the demand and use of the token to magnify
                    the benefits for all our Celestials.
                  </BodyText>
                </UtilityCard>
              </li>
              <li>
                <UtilityCard className="wow bounceInLeft">
                  <Heading2 style={{ textAlign: "center" }}>
                    {Uppercase("Merch Marketplace")}
                  </Heading2>
                  <BodyText>
                    Our merchandise marketplace will allow users to buy Divine
                    Feminine merchandise and print hard copies of NFTs with our
                    $FEMME token. The goal of this marketplace is to enable our
                    community to enjoy The Divine Feminine art in various media.
                  </BodyText>
                </UtilityCard>
              </li>
              <li>
                <UtilityCard className="wow bounceInLeft">
                  <Heading2 style={{ textAlign: "center" }}>
                    {Uppercase("Pre-Mint Reserve")}
                  </Heading2>
                  <BodyText>
                    Our Pre-Mint Reserve is an innovation within the NFT
                    community. This utility allows our community to reserve a
                    NFT prior to public mint via a pre-purchase. Once the mint
                    has started, the NFT is picked up at your convenience rather
                    than setting your alarm clock and hoping you don't
                    experience any technical issues or internet outages at the
                    time of Mint.
                  </BodyText>
                </UtilityCard>
              </li>
              <li>
                <UtilityCard className="wow bounceInLeft">
                  <Heading2 style={{ textAlign: "center" }}>
                    {Uppercase("Crypto Analysis and Education")}
                  </Heading2>
                  <BodyText>
                    An experienced crypto trader and analyst will provide
                    investment/trading education and analysis to help those new
                    to these concepts become proficient.
                  </BodyText>
                </UtilityCard>
              </li>
            </UtilityWrapper>
          </Row>
          <UtilityCard
            className="wow bounceInLeft"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <Heading2 style={{ textAlign: "center" }}>
              {Uppercase("NFT Buyback")}
            </Heading2>
            <BodyText>
              Our NFT Buyback utility is focused on supporting the growth and
              stability of overall collection value.
            </BodyText>
          </UtilityCard>
        </Row>
        <Row>
          <CarouselWrapper>
            <Slider {...settings}>
              <div>
                <img
                  src={Celestial3}
                  alt="cronos-fighter"
                  style={{
                    borderRadius: "15px",
                    width: "315px",
                    height: "auto",
                  }}
                  className="carousel-picture"
                />
              </div>
              <div>
                <img
                  src={Celestial4}
                  alt="cronos-fighter"
                  style={{
                    borderRadius: "15px",
                    width: "315px",
                    height: "auto",
                  }}
                  className="carousel-picture"
                />
              </div>
              <div>
                <img
                  src={Celestial5}
                  alt="cronos-fighter"
                  style={{
                    borderRadius: "15px",
                    width: "315px",
                    height: "auto",
                  }}
                  className="carousel-picture"
                />
              </div>
              <div>
                <img
                  src={Celestial3}
                  alt="cronos-fighter"
                  style={{
                    borderRadius: "15px",
                    width: "315px",
                    height: "auto",
                  }}
                  className="carousel-picture"
                />
              </div>
              <div>
                <img
                  src={Celestial4}
                  alt="cronos-fighter"
                  style={{
                    borderRadius: "15px",
                    width: "315px",
                    height: "auto",
                  }}
                  className="carousel-picture"
                />
              </div>
              <div>
                <img
                  src={Celestial5}
                  alt="cronos-fighter"
                  style={{
                    borderRadius: "15px",
                    width: "315px",
                    height: "auto",
                  }}
                  className="carousel-picture"
                />
              </div>{" "}
              <div>
                <img
                  src={Celestial3}
                  alt="cronos-fighter"
                  style={{
                    borderRadius: "15px",
                    width: "315px",
                    height: "auto",
                  }}
                  className="carousel-picture"
                />
              </div>
              <div>
                <img
                  src={Celestial4}
                  alt="cronos-fighter"
                  style={{
                    borderRadius: "15px",
                    width: "315px",
                    height: "auto",
                  }}
                  className="carousel-picture"
                />
              </div>
              <div>
                <img
                  src={Celestial5}
                  alt="cronos-fighter"
                  style={{
                    borderRadius: "15px",
                    width: "315px",
                    height: "auto",
                  }}
                  className="carousel-picture"
                />
              </div>
            </Slider>
          </CarouselWrapper>
          <CarouselWrapper>
            <Slider {...settings2}>
              <div>
                <img
                  src={Celestial3}
                  alt="cronos-fighter"
                  style={{
                    borderRadius: "15px",
                    width: "315px",
                    height: "auto",
                  }}
                  className="carousel-picture"
                />
              </div>
              <div>
                <img
                  src={Celestial4}
                  alt="cronos-fighter"
                  style={{
                    borderRadius: "15px",
                    width: "315px",
                    height: "auto",
                  }}
                  className="carousel-picture"
                />
              </div>
              <div>
                <img
                  src={Celestial5}
                  alt="cronos-fighter"
                  style={{
                    borderRadius: "15px",
                    width: "315px",
                    height: "auto",
                  }}
                  className="carousel-picture"
                />
              </div>{" "}
              <div>
                <img
                  src={Celestial3}
                  alt="cronos-fighter"
                  style={{
                    borderRadius: "15px",
                    width: "315px",
                    height: "auto",
                  }}
                  className="carousel-picture"
                />
              </div>
              <div>
                <img
                  src={Celestial4}
                  alt="cronos-fighter"
                  style={{
                    borderRadius: "15px",
                    width: "315px",
                    height: "auto",
                  }}
                  className="carousel-picture"
                />
              </div>
              <div>
                <img
                  src={Celestial5}
                  alt="cronos-fighter"
                  style={{
                    borderRadius: "15px",
                    width: "315px",
                    height: "auto",
                  }}
                  className="carousel-picture"
                />
              </div>{" "}
              <div>
                <img
                  src={Celestial3}
                  alt="cronos-fighter"
                  style={{
                    borderRadius: "15px",
                    width: "315px",
                    height: "auto",
                  }}
                  className="carousel-picture"
                />
              </div>
              <div>
                <img
                  src={Celestial4}
                  alt="cronos-fighter"
                  style={{
                    borderRadius: "15px",
                    width: "315px",
                    height: "auto",
                  }}
                  className="carousel-picture"
                />
              </div>
              <div>
                <img
                  src={Celestial5}
                  alt="cronos-fighter"
                  style={{
                    borderRadius: "15px",
                    width: "315px",
                    height: "auto",
                  }}
                  className="carousel-picture"
                />
              </div>
            </Slider>
          </CarouselWrapper>
        </Row>
        <Container
          style={{
            backgroundColor: "rgba(0,0,0,.15)",
            borderRadius: "20px",
            margin: "20px",
            marginTop: '80px'
          }}
          id='tiers'
        >
          <Heading1 className="wow fadeInUp">
            {Uppercase("Celestial Tiers")}
          </Heading1>
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
                {Uppercase("Platinum")}
              </Heading2>
              <BodyText className="wow fadeInUp" style={{ marginTop: "30px" }}>
                <h3>
                  The Top 40 Celestials Who Have Attained More Than 26 NFT's
                  Will Rise to Platinum*
                  <br />
                </h3>
                <ul>
                  <li>42% off collection purchases</li>
                  <li>8% boost in NFT Staking</li>
                  <li>
                    Voting rights of Silver plus certain buyback pool and token
                    operations parameters
                  </li>
                  <li>
                    Platinum tier benefits for each Celestial Gala including
                    Guests, Tokens / USDT for travel expenses, food, drink, and
                    more!
                  </li>
                  <li>
                    6 Platinum Tier Limited Edition Goddess of Light NFT
                    air-dropped after collection sells out
                  </li>
                  <li>
                    Free Goddess of Light NFT print available from merchandise
                    store & air-shipped where available. Size: Platinum
                  </li>
                  <li>
                    Enjoy Platinum Tier credit/discounts in our Merchandise
                    Marketplace
                  </li>
                </ul>
              </BodyText>
            </TextWrapper>
            <Between />
            <ImageWrapper
              className="wow fadeInUp"
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <img
                src={platinumCelestial}
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
              <Heading2 className="wow fadeInUp">{Uppercase("Gold")}</Heading2>
              <BodyText className="wow fadeInUp" style={{ marginTop: "30px" }}>
                <h3>
                  The 80 Celestials below Platinum Who Have Attained A Minumum
                  of 11 NFT's Rise to Gold*
                  <br />
                </h3>
                <li>30% off collection purchases</li>
                <li>5% boost in NFT Staking</li>
                <li>Voting rights of Bronze plus Celestial Gala Location </li>
                <li>
                  Gold tier benefits for each Celestial Gala including Guests,
                  Tokens / USDT for travel expenses, food, drink, and more!
                </li>
                <li>
                  3 Gold Tier Limited Edition Goddess of Light NFT air-dropped
                  after collection sells out
                </li>
                <li>
                  Free Goddess of Light NFT print available from merchandise
                  store & air-shipped where available. Size: Gold
                </li>
                <li>
                  Enjoy Gold Tier credit/discounts in our Merchandise
                  Marketplace
                </li>
              </BodyText>
            </TextWrapper>
            <Between />
            <ImageWrapper
              className="wow fadeInUp"
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <img
                src={goldCelestial}
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
                {Uppercase("Bronze")}
              </Heading2>
              <BodyText className="wow fadeInUp" style={{ marginTop: "30px" }}>
                <h3>
                  The 240 Celestials below Gold Who Have Attained A Minumum of 5
                  NFT's Rise to Bronze*
                  <br />
                </h3>
                <li>20% off collection purchases</li>
                <li>3% boost in NFT Staking</li>
                <li>
                  DAO Voting rights on art for future collections
                </li>
                <li>
                  Bronze tier benefits for each Celestial Gala including Guests,
                  Tokens / USDT for travel expenses, food, drink, and more!
                </li>
                <li>
                  1 Bronze Tier Limited Edition Goddess of Light NFT air-dropped
                  after collection sells out
                </li>
                <li>
                  Free Goddess of Light NFT print available from merchandise
                  store & air-shipped where available. Size: Bronze
                </li>
                <li>
                  Enjoy Bronze Tier credit/discounts in our Merchandise
                  Marketplace
                </li>
              </BodyText>
            </TextWrapper>
            <Between />
            <ImageWrapper
              className="wow fadeInUp"
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <img
                src={bronzeCelestial}
                alt="cronos-nft"
                style={{ borderRadius: "15px", width: "400px", height: "auto" }}
              />
            </ImageWrapper>
          </Row>
        </Container>
        <Container
          style={{
            backgroundColor: "rgba(0,0,0,.15)",
            borderRadius: "20px",
            margin: "20px",
          }}
        >
          <BodyText className="wow fadeInUp" style={{ marginTop: "30px" }}>
            <h3 style={{ textAlign: "center" }}>
              * Celestial Tier guidelines are subject to change if/when new
              collections are added.
            </h3>
          </BodyText>
        </Container>
        <Container id="roadmap">
          <Heading1 className="wow fadeInUp">{Uppercase("Roadmap")}</Heading1>
          <RoadmapTimeline>
            <RoadmapTimelineLeft className="wow bounceInLeft">
              <RoadmapContent>
                <Heading2 style={{ textAlign: "center" }}>
                  {Uppercase("Phase 1")}
                </Heading2>
                <BodyText>
                  Assemble Team and Define Project
                  <br />
                  Goddess of Light Collection: Create Sample Art
                  <br />
                  Develop Web Presence: Website, Twitter, Instagram
                  <br />
                  Create Celestial Community Discord
                  <br />
                  Divine Labs: Define Tokenomics, Marketplace, and Mint Utility
                  <br />
                </BodyText>
              </RoadmapContent>
            </RoadmapTimelineLeft>
            <RoadmapTimelineRight className="wow bounceInRight">
              <RoadmapContent>
                <Heading2 style={{ textAlign: "center" }}>
                  {Uppercase("Phase 2")}
                </Heading2>
                <BodyText>
                  The Divine Feminine Project Market Introduction
                  <br />
                  Complete Goddess of Light Art
                  <br />
                  NFT Marketplace Utility Launch
                  <br />
                  Pre-Mint Reserve Utility Launch
                  <br />
                  Goddess of Light Collection Mint
                  <br />
                  Investigate Crypto Investment Analysis and Education within
                  the Discord
                  <br />
                </BodyText>
              </RoadmapContent>
            </RoadmapTimelineRight>
            <RoadmapTimelineLeft className="wow bounceInLeft">
              <RoadmapContent>
                <Heading2 style={{ textAlign: "center" }}>
                  {Uppercase("Phase 3 - Goddess of Light Sellout")}
                </Heading2>
                <BodyText>
                  Initiate NFT Buyback Utility
                  <br />
                  Initiate DAO and Vote on Initial Items, including at least:
                  <br />
                  <ul>
                    <li>Charity(s) Designation</li>
                    <li>Celestial Gala Location</li>
                    <li>
                      Certain Collection Buyback Pool and Token Airdrop
                      parameters
                    </li>
                  </ul>
                  Set Celestial Gala Date and Location
                  <br />
                  Launch The Divine Feminine Merchandise Marketplace
                  <br />
                  Launch $FEMME Token DEX Offering
                  <br />
                  Launch NFT Staking Utility
                  <br />
                  Unveil Divine Labs Next Utilities for Marketplace (Top
                  Secret!)
                  <br />
                  Detailed Planning for Phase 4<br />
                </BodyText>
              </RoadmapContent>
            </RoadmapTimelineLeft>
            <RoadmapTimelineRight className="wow bounceInRight">
              <RoadmapContent>
                <Heading2 style={{ textAlign: "center" }}>
                  {Uppercase("Phase 4")}
                </Heading2>
                <BodyText>
                  Conduct Inaugural Celestial Gala
                  <br />
                  Vote on Second Celestial Gala Location
                  <br />
                  Charity Donation
                  <br />
                  Release Sample Art For Next Collection
                  <br />
                  Vote on Art For Next Collection
                  <br />
                  Release extended roadmap for our Community, next Collection,
                  and Divine Labs
                  <br />
                </BodyText>
              </RoadmapContent>
            </RoadmapTimelineRight>
          </RoadmapTimeline>
        </Container>
        <Row
          id="teams"
          style={{
            justifyContent: "center",
            marginTop: '80px'
          }}
        >
          <Row
            style={{
              justifyContent: "center",
            }}
          >
            <Heading1 className="wow fadeInUp">
              {Uppercase("The Team")}
            </Heading1>
          </Row>
          <Row
            id="teams-wrapper"
            style={{
              justifyContent: "space-between",
              maxWidth: "1440px",
            }}
          >
            <Card>
              <img
                src={Thais}
                className="wow bounceInUp"
                alt="cronos-fighter"
              />
              <Heading2
                style={{ textAlign: "center" }}
                className="wow fadeInUp"
              >
                {Uppercase("Thais Helena")}
              </Heading2>
              <BodyText className="team-description">
                Artist and Visionary
              </BodyText>
            </Card>
            <Card>
              <img
                src={Colleen}
                className="wow bounceInUp"
                alt="cronos-fighter"
              />
              <Heading2
                style={{ textAlign: "center" }}
                className="wow fadeInUp"
              >
                {Uppercase("Colleen Wanty")}
              </Heading2>
              <BodyText className="team-description">
                Marketing Director / Advisor
              </BodyText>
              <MenuWrapper>
                <a
                  href="https://www.linkedin.com/in/colleen-wanty-a3378718/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                >
                  <img src={LinkedIN} alt="cronos-social" />
                </a>
              </MenuWrapper>
            </Card>
            <Card>
              <img src={Sam} className="wow bounceInUp" alt="cronos-fighter" />
              <Heading2
                style={{ textAlign: "center" }}
                className="wow fadeInUp"
              >
                {Uppercase("Sam Ouzounian")}
              </Heading2>
              <BodyText className="team-description">
                Lead Blockchain Developer
              </BodyText>
              <MenuWrapper id="social-menu" style={{ marginLeft: "115px" }}>
                <a
                  href="https://twitter.com/_probatorem"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={TwitterIco} alt="cronos-social" />
                </a>
                <a
                  href="https://www.instagram.com/samouzounian/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={InstagramIco} alt="cronos-social" />
                </a>
              </MenuWrapper>
            </Card>
          </Row>
          <Row
            id="teams-wrapper"
            style={{
              justifyContent: "center",
              alightItems: "center",
              maxWidth: "1440px",
            }}
          >
            <Card>
              <img
                src={Steve}
                className="wow bounceInUp"
                alt="cronos-fighter"
              />
              <Heading2
                style={{ textAlign: "center" }}
                className="wow fadeInUp"
              >
                {Uppercase("Steve Ouzounian")}
              </Heading2>
              <BodyText className="team-description">
                Co-Founder and Executive Director
              </BodyText>
              <MenuWrapper>
                <a
                  href="https://www.linkedin.com/in/steve-ouzounian-3275b55/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                >
                  <img src={LinkedIN} alt="cronos-social" />
                </a>
              </MenuWrapper>
            </Card>
          </Row>
          <Row
            style={{
              justifyContent: "center",
              marginTop: "80px",
            }}
          >
            <Heading1 className="wow fadeInUp">
              <a
                href="/team"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white", textDecoration: "none" }}
              >
                <h3 className='learn-more-team-text'>Learn More About Our Team</h3>
              </a>
            </Heading1>
          </Row>
        </Row>
      </Content>
      <Footer />
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
    padding-bottom: 60px;
    padding-top: 50px;
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

const CarouselWrapper = styled.div`
  width: 100%;
`;

const Card = styled.div`
  overflow-wrap: normal;
  background-color: rgba(0, 0, 0, 0.15);
  max-width: 660px;
  padding: 20px;
  border-radius: 10px;
  @media screen and (max-width: 1220px) {
    height: auto;
  }
`;

const UtilityCard = styled.div`
  overflow-wrap: normal;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.15);
  max-width: 660px;
  padding: 20px;
  height: 350px;
  text-align: center;
  border-radius: 10px;
  @media screen and (max-width: 1450px) {
    max-width: 100%;
    height: auto;
  }
`;

const UtilityWrapper = styled.ul`
  display: flex;
  flex: 1;
  height: 1800px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0px;
  gap: 30px;
  @media screen and (max-width: 1450px) {
    height: auto;
    justify-content: center;
    align-items: center;
  }
`;
