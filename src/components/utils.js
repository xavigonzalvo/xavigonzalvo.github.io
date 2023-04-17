import { graphql } from "gatsby";

import googleIcon from "../icons/google.svg";
import pattsIcon from "../icons/patts.svg";
import salleIcon from "../icons/salle.svg";

export default function getIcon(name) {
  switch (name) {
    case "google":
      return googleIcon;
    case "patts":
      return pattsIcon;
    case "salle":
      return salleIcon;
  }
}

export const formatPagePath = (path) => {
  // Remove the leading and trailing "/"
  const formattedPath = path.substring(1, path.length - 1);

  // Capitalize the first letter
  return formattedPath.charAt(0).toUpperCase() + formattedPath.slice(1);
};

export const AllSitePageFragment = graphql`
  fragment AllSitePageFragment on Query {
    allSitePage(
      filter: { path: { nin: ["/", "/404/", "/404.html", "/dev-404-page/"] } }
    ) {
      nodes {
        path
      }
    }
  }
`;
