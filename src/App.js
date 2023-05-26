import React from "react";

import "./App.css";
import logo from "./logo.png";
import box1 from "./box1.png";
import box2 from "./box2.png";
import box3 from "./box3.png";
import box4 from "./box4.png";

import alexImage from "./images/alex.jpg";
import alexanderImage from "./images/alexander.jpg";
import chrisImage from "./images/chris.jpg";

import Container from "./components/Container";

const App = () => {
  return (
    <>
      <Navigation />
      <Container
        classGlow="glow-from-top-left"
        sectionContent={<HeroSection />}
      />
      <Container
        classGlow="glow-from-top-right"
        sectionContent={<Web3VideoSection />}
      />
      <Container
        classGlow="glow-from-top-left"
        sectionContent={<IdentitySection />}
      />
      <Container classGlow="" sectionContent={<TeamSection />} />
      <Container classGlow="" sectionContent={<ClientsSection />} />
      <Container
        classGlow="glow-from-top-right"
        sectionContent={<RoadmapSection />}
      />
      <Container sectionContent={<FooterSection />} />
    </>
  );
};

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 132 ||
    document.documentElement.scrollTop > 132
  ) {
    document.getElementById("header").style.background =
      "var(--black-and-green-dark)";
  } else {
    document.getElementById("header").style.background = "transparent";
  }
}

const Navigation = () => {
  return (
    <header id="header">
      <nav>
        <div class="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div class="navbar">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Isme</a>
            </li>
            <li>
              <a href="#">Developer</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
        </div>
        <div class="launch-app">
          <button>Launch App</button>
        </div>
      </nav>
    </header>
  );
};

const HeroSection = () => {
  return (
    <section className="hero">
      <div>
        <h1 className="green-bright">NFT3 The First</h1>
        <p>
          Your NFT3 acts as a unified identity across all Web3
          <br /> application layers and a pathway toward enabling
          <br /> personal monetization.
        </p>
      </div>
      <h1>Unified Virtual Identity Network For Web3</h1>
      <div className="hero-btns">
        <button>Browse NFTs Now</button>
        <button>0</button>
        <label>Play video</label>
      </div>
    </section>
  );
};

const Web3VideoSection = () => {
  return (
    <section className="web3-video-section">
      <div className="video-container">
        <video id="video" width="inherit">
          <source src="mov_bbb.mp4" type="video/mp4" />
          <source src="mov_bbb.ogg" type="video/ogg" />
          Your browser does not support HTML video.
        </video>
      </div>
      <div className="video-details-container">
        <h2>Watch The Future Of Web3</h2>
        <p>
          Your NFT3 acts as a unified identity across all Web3 application
          layers and a pathway toward anabling personal monetization.
        </p>
        <a href="" target="_blank" className="web3-video-link">
          Watch full Video
        </a>
      </div>
    </section>
  );
};

const IdentitySection = () => {
  return (
    <section className="identity-section">
      <h2>DID-Wrapped NFTs to Allow Staked Identity</h2>
      <div>
        <div className="identity-box">
          <img src={box1} alt="Box 1" width="80px" />
          <h3>The first</h3>
          <p>
            Unified identity platform and network to engineer a staked
            incentivization model to apply to the identity problem, creating the
            concept of NFT3 it is pseudonymous.
          </p>
          <button>Learn more</button>
        </div>
        <div className="identity-box">
          <img src={box2} alt="Box 2" width="80px" />
          <h3>DAO-Governance</h3>
          <p>
            Direct monetization path for individuals in Web3 and provides an
            infrastructural component for composite level creations and
            innovations for Web3 application.
          </p>
          <button>Learn more</button>
        </div>
        <div className="identity-box">
          <img src={box3} alt="Box 3" width="80px" />
          <h3>The first Aggregation</h3>
          <p>
            Technological innovation to conceivably (architecturally) invert
            current massified internet monetization models that fleece
            individuals' informational and identical value
          </p>
          <button>Learn more</button>
        </div>
        <div className="identity-box">
          <img src={box4} alt="Box 4" width="80px" />
          <h3>On-chain Credit System</h3>
          <p>
            Platform to utilize DID to create a comprehensive Web3 world
            passport. It will also create a user's personal credit scoring
            system for the Web3 world.
          </p>
          <button>Learn more</button>
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const MemberCard = ({ backgroundDirection, sided, memberImage }) => {
    return (
      <div
        className={`member-card ${sided || ""}`}
        style={{
          background: `linear-gradient(to ${backgroundDirection}, var(--black-and-green-dark) 2%, var(--green-bright))`,
        }}
      >
        <div className="card">
          <img src={memberImage} alt="Box 1" width="80px" />
          <h3>Dylan Dewdney</h3>
          <p>Lead Initiator</p>
        </div>
      </div>
    );
  };

  return (
    <section className="team-section">
      <h2>Team and Advisors</h2>
      <div>
        <div className="member-row">
          <MemberCard backgroundDirection={"bottom"} memberImage={alexImage} />
        </div>

        <div className="member-row">
          <MemberCard backgroundDirection={"top"} memberImage={chrisImage} />
          <MemberCard
            backgroundDirection={"bottom"}
            memberImage={alexanderImage}
          />
          <MemberCard backgroundDirection={"top"} memberImage={alexImage} />
        </div>

        <div className="member-row">
          <MemberCard
            backgroundDirection={"left"}
            sided="sided"
            memberImage={chrisImage}
          />
          <MemberCard backgroundDirection={"top"} memberImage={alexImage} />
          <MemberCard backgroundDirection={"bottom"} memberImage={chrisImage} />
          <MemberCard
            backgroundDirection={"top"}
            memberImage={alexanderImage}
          />
          <MemberCard
            backgroundDirection={"right"}
            sided="sided"
            memberImage={alexImage}
          />
        </div>
      </div>
    </section>
  );
};

const ClientsSection = () => {
  const ClientLogo = ({ name }) => {
    return (
      <img
        src={`./logo-${name}.PNG`}
        alt={`${name} Logo`}
        width="130px"
        height="auto"
      />
    );
  };

  return (
    <section className="clients-section">
      <ClientLogo name={"nitro"} />
      <ClientLogo name={"cardano"} />
      <ClientLogo name={"dynamite"} />
      <ClientLogo name={"cardano"} />
      <ClientLogo name={"chorus"} />
      <ClientLogo name={"dynamite"} />
      <ClientLogo name={"certus"} />
      <ClientLogo name={"kukis"} />
      <ClientLogo name={"certus"} />
    </section>
  );
};

const RoadmapSection = () => {
  const RoadmapCard = ({ number, desc, quarter }) => {
    return (
      <div className="roadmap-card">
        <h2 className="point-number">{number}</h2>
        <h2>{quarter}</h2>
        <p>{desc}</p>
      </div>
    );
  };

  return (
    <section className="roadmap-section">
      <h2>Roadmap</h2>
      <p>
        The NFT3 website homepage provides an overview of the platform,
        including
        <br /> information about their services, team, and contact information.
      </p>
      <div>
        <RoadmapCard
          number={1}
          desc="Airdrops and Referral Program"
          quarter="2022Q1"
        />
        <RoadmapCard number={2} desc="ETH Beta [TBC]" quarter="2022Q2" />
        <RoadmapCard
          number={3}
          desc="Integration of DEXs (TBC)"
          quarter="2022Q3"
        />
        <RoadmapCard number={4} desc="Wide Adoption" quarter="2022Q4" />
      </div>
    </section>
  );
};

const FooterSection = () => {
  const navItems = [
    { name: "Home", url: "#" },
    { name: "About", url: "#" },
    { name: "Blockchain", url: "#" },
    { name: "Wallets", url: "#" },
    { name: "Exchanges", url: "#" },
    { name: "Block", url: "#" },
  ];

  const NavListItem = ({ name, url }) => {
    return (
      <li>
        <a href={url}>{name}</a>
      </li>
    );
  };

  return (
    <footer className="main-footer">
      <nav>
        <div class="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div class="navbar">
          <ul>
            {navItems.map((item) => {
              return <NavListItem name={item.name} url={item.url} />;
            })}
          </ul>
        </div>
        <div class="documentation">
          <button>Documentation</button>
        </div>
      </nav>
      <div className="copyright">
        <p>Copyright {new Date().getUTCFullYear()} NFT3 All Rights Reserved</p>
        <div>
          <p>Terms Agreements</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default App;
