import Header from "./component/Header";
// import Body from "./component/Body";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import UserContext from "./component/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  const [userName, setUserName] = useState();
  // authentication
  useEffect(() => {
    const data = {
      name: "Ramprasad Chauhan",
    };
    setUserName(data.name);
  }, []);
  return (
    // outside loggedInUser : DefaultUser
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        {/* Ramprasad Chauhan */}
        <div className="app">
          <Header />,
          <Outlet />,
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
