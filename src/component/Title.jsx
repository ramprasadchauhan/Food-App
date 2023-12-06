import { LOGO_URL } from "../utils/constant";
const Title = () => {
  return (
    <a href="/">
      <img className="h-[100px]" src={LOGO_URL} alt="logo" />
    </a>
  );
};

export default Title;
