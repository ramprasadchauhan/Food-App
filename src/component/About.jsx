// import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "./UserContext";

class About extends Component {
  constructor() {
    super();
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent componentDidMount");
  }

  render() {
    console.log("parent Render");
    return (
      <div>
        <h1>About</h1>
        <h4>Food React App</h4>
        <div>
          LoggedIn User:
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold text-xl">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        {/* <User name="Lakhan" /> */}
        <UserClass name={"Ram"} location={"Bhind"} />
        {/* <UserClass name={"Shayam"} location={"US"} /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h4>Food React App</h4>
//       {/* <User name="Lakhan" /> */}
//       <UserClass name="Ram" location="Bhind" />
//     </div>
//   );
// };

export default About;
