import React from "react";
import GithubIcon from "./icons/GithubIcon";
import TwitterIcon from "./icons/TwitterIcon";
import FrontendMentorIcon from "./icons/FrontendMentor";
import LinkedinIcon from "./icons/LinkedInIcon";

const ICONS = {
  "github.svg": <GithubIcon />,
  "twitter.svg": <TwitterIcon />,
  "frontend-mentor.svg": <FrontendMentorIcon />,
  "linkedin.svg": <LinkedinIcon />,
  default: <FrontendMentorIcon />,
};

function SocialLinkIcon({ socialSite }) {
  const { icon, href, title } = socialSite;
  const renderIcon = ICONS[icon] || ICONS.default;

  return (
    <a href={href} className="" title={title}>
      {renderIcon}
    </a>
  );
}

export default SocialLinkIcon;
