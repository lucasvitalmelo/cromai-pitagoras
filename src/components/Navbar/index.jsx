import "./index.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

import LogoLV from "../../assets/LVlogo.svg"

function Navbar() {
  return (
    <header>
          <nav className="navbar navbar-dark bg-transparent">
            <div className="container">
              <a className="navbar-brand fs-5 font-oxanium" href="https://www.linkedin.com/in/lucas-vital-98580518a/">
                <img
                  src={LogoLV}
                  alt="Logo LV"
                  width="79"
                  height="102"
                  className="d-inline-block me-5"
                />
                Lucas Vital
              </a>
              <div>
                <a
                  className="link-light me-3 fs-5"
                  href="https://www.linkedin.com/in/lucas-vital-98580518a/"
                >
                   <FontAwesomeIcon icon={faLinkedinIn} />

                </a>

                <a
                  className="link-light fs-5"
                  href="https://github.com/lucasvitalmelo"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </nav>
        </header>
  );
}

export default Navbar;