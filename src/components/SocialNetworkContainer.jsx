import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/jo%C3%A3o-vitor-santos-de-paula-7b8a96232/" },
  { name: "github", icon: <FaGithub />, link: "https://github.com/jaopaula" },
  { name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/jao_paula/" },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} className="social-btn" id={network.name} key={network.name} target="_blank" rel="noopener noreferrer">
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
