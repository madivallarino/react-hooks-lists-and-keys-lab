import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const newTags = links.map(tag => <a key={tag} href={"#" + tag}>{tag}</a>
  )
  return <nav>{newTags}</nav>;
}

export default NavBar;
