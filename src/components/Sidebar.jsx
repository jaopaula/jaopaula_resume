import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpg";
import ResumeFile from "../curriculo/meucurriculo.pdf"; 

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="João Vitor Santos de Paula" />
      <p className="title">Full-Stack Software Engineer</p>
      <SocialNetworkContainer />
      <InformationContainer />
      {/*Lembrar de Atualizar o link de download com o arquivo do currículo */}
      <a href={ResumeFile} download="meucurriculo.pdf" className="btn">
        Download Resume
      </a>
    </aside>
  );
};

export default Sidebar;
