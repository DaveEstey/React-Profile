import React from "react";
import Projects from "../Projects";
import "../../styles/Portfolio.css";

const Portfolio = () => {
  const info = [
    {
      title: "Social Networking",
      img: "https://raw.githubusercontent.com/DaveEstey/react-profile/main/src/images/social_network.png",
      github: "https://github.com/DaveEstey/Social-Networking",
      deployed: "https://github.com/DaveEstey/Social-Networking",
    },
    
    {
      title: "Investment Solutions",
      img: "https://raw.githubusercontent.com/DaveEstey/react-profile/main/src/images/investment.png",
      github: "https://github.com/DaveEstey/Investment-Solutions",
      deployed: "https://daveestey.github.io/Investment-Solutions/",
    },
    {
      title: "Team Profile Generator",
      img: "https://raw.githubusercontent.com/DaveEstey/react-profile/main/src/images/team_gen.png",
      github: "https://github.com/DaveEstey/Team-Profile-Generator",
      deployed: "https://github.com/DaveEstey/Team-Profile-Generator",
    },
    {
      title: "Text Editor",
      img: "https://raw.githubusercontent.com/DaveEstey/react-profile/main/src/images/text_edit.png",
      github: "https://github.com/DaveEstey/Text-Editor/",
      deployed: "https://text-editor-david.herokuapp.com/",
    },
    {
      title: "Body Buddy",
      img: "https://raw.githubusercontent.com/DaveEstey/react-profile/main/src/images/body_buddy.png",
      github: "https://github.com/DaveEstey/body-buddy",
      deployed: "https://body-buddy.herokuapp.com/",
    },
    {
      title: "Bootcamp Work Finder",
      img: "https://raw.githubusercontent.com/DaveEstey/react-profile/main/src/images/bootcamp.png",
      github: "https://github.com/DaveEstey/bootcamp-work-finder/",
      deployed: "https://david-bootcamp-work-finder.herokuapp.com/",
    }
  ];

  return (
    <div className="container horizontalFlex">
      <Projects data={info} />
    </div>
  );
};

export default Portfolio;
