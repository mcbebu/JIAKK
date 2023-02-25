import LoginPage from "./LoginPage/LoginPage";
import RequestDetails from "./RequestDetails/RequestDetails";
import Homepage from "./Homepage/Homepage";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const loginHandler = () => {
    setIsLogin(prevState => {
      return !prevState;
    })
  }

  return <>
  {!isLogin && <LoginPage loginHandler={loginHandler} />}
  {isLogin && <Homepage stationid={"1"} />}
  </>;
}

export default App;
