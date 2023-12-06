import { useState } from "react";

const User = (props) => {
  const { name } = Object(props);
  let [count, setCount] = useState(0);
  const [count2] = useState(1);
  const handleClick = () => setCount(count + 1);
  return (
    <div className="user-card">
      <h2>Count:{count} </h2>
      <button onClick={handleClick}>Increase Count</button>
      <h2>Count2:{count2} </h2>
      <h2>Name : {name} </h2>
      <h3>Location: Gwalior</h3>
      <h3>Contect: ramprasadchauhan7@gmail.com</h3>
    </div>
  );
};

export default User;
