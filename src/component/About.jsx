// import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "./UserContext";

// class About extends Component {
//   constructor() {
//     super();
//     console.log("parent constructor");
//   }
//   componentDidMount() {
//     console.log("parent componentDidMount");
//   }

//   render() {
//     console.log("parent Render");
//     return (
//       <div className="flex flex-col justify-center items-center">
//         <h1>About</h1>
//         <h4>Food React App</h4>
//         <div>
//           LoggedIn User:
//           <UserContext.Consumer>
//             {({ loggedInUser }) => (
//               <h1 className="font-bold text-xl">{loggedInUser}</h1>
//             )}
//           </UserContext.Consumer>
//         </div>
//         {/* <User name="Lakhan" /> */}
//         <UserClass name={"Ram"} location={"Bhind"} />
//         {/* <UserClass name={"Shayam"} location={"US"} /> */}
//       </div>
//     );
//   }
// }

const About = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center mt-4">
      <h2 className="text-4xl">Welcome To My Food Ordering App</h2>
      <p className="px-28">
        Are you tired of the hassle of cooking or dining out? Introducing Food
        Villa, your new favorite food ordering app that brings the world of
        delicious cuisine right to your fingertips. Whether you are craving a
        hearty meal, a quick snack, or a sweet treat, Food Villa has you covered
        with an extensive range of culinary delights.
      </p>
    </div>
  );
};

export default About;
