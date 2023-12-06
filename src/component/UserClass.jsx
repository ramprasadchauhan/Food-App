import { Component } from "react";

export class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
      userInfo: {
        name: "Ram",
        location: "India",
        avatar_url: "https//dumi.jpg",
      },
    };

    console.log(this.props.name + " child constructor");
  }
  async componentDidMount() {
    console.log(this.props.name + " Child ComponentDidMount");
    const data = await fetch("https://api.github.com/users/ramprasadchauhan");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });

    // Api call
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    const { name, location } = Object(this.props);

    console.log(name + " Child Render");

    return (
      <div className="user-card">
        <h2>Count: {this.state.count} </h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Count: {this.state.count2} </h2>
        <img src={this.state.userInfo.avatar_url} alt="profile" />
        <h2>Name : {this.state.userInfo.name} </h2>
        <h3>Location: {this.state.userInfo.location} </h3>
        <h3>Contect: ramprasadchauhan782@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
