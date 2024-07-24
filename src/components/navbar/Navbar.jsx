import { useEffect, useState } from "react";
import SocialLinkIcon from "../ui/social/SocialLinkIcon";

function Navbar() {
  const [socialSites, setSocialSites] = useState([]);

  useEffect(() => {
    fetch("/data/social-sites.json")
      .then((res) => res.json())
      .then((data) => setSocialSites(data.sites));
  }, []);

  const renderSocialLinks = socialSites.map((site) => (
    <SocialLinkIcon key={site.icon} socialSite={site} />
  ));

  return (
    <div className="flex flex-col items-center space-y-5 md:flex-row md:justify-between md:space-y-0 ">
      <span className="text-base font-bold md:text-xm lg:text-xm">
        adamkeyes
      </span>

      <div className="flex items-center justify-between w-36 md:w-48 ">
        {renderSocialLinks}
      </div>
    </div>
  );
}

export default Navbar;
