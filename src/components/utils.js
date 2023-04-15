import googleIcon from "../icons/google.svg";
import pattsIcon from "../icons/patts.svg";
import salleIcon from "../icons/salle.svg";

function getIcon(name) {
  switch (name) {
    case "google":
      return googleIcon;
    case "patts":
      return pattsIcon;
    case "salle":
      return salleIcon;
  }
}

export default getIcon;
