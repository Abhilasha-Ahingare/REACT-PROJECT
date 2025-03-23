import List from "./linkList";
import "./style/mainComponents.css";

const MainComponents = () => {
  return (
    <div className="container">
      <div className="components">
        <div className="link-item instagram">
          my{" "}
          <List url="https://www.instagram.com/accounts/login/?hl=en">
            <span className="link">instagram</span>
          </List>{" "}
          profile
        </div>
        <div className="link-item youtube">
          my{" "}
          <List url="https://www.youtube.com/">
            <span className="link">youtube</span>
          </List>{" "}
          profile
        </div>
        <div className="link-item website">
          my{" "}
          <List url="https://www.codecademy.com/">
            <span className="link">website</span>
          </List>{" "}
          profile
        </div>
      </div>
    </div>
  );
};

export default MainComponents;
