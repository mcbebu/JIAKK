import LoginPage from "./LoginPage/LoginPage";
import RequestDetails from "./RequestDetails/RequestDetails";
import Homepage from "./Homepage/Homepage";
import { useState } from "react";
import { addUser, login } from "./api";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [page, setPage] = useState(0);
  const [stationid, setStationid] = useState("1");

  const loginHandler = (email, password) => {
    login(email, password).then(({ data }) => {
      console.log(data);
      if (data.status === 200) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  };

  const registerHandler = (email, password) => {
    addUser(email, password).then(({ data }) => {
      console.log(data);
      if (data.status === 200) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  };

  const togglePageHandler = () => {
    setPage((prevState) => {
      return Math.abs(prevState - 1);
    });
  };

  return (
    <>
      {!isLogin && (
        <LoginPage
          loginHandler={loginHandler}
          registerHandler={registerHandler}
        />
      )}
      {isLogin && page === 0 && (
        <Homepage
          stationid={stationid}
          page={0}
          activePage={page}
          togglePageHandler={togglePageHandler}
        />
      )}
      {isLogin && page === 1 && (
        <RequestDetails
          stationid={stationid}
          page={1}
          activePage={page}
          togglePageHandler={togglePageHandler}
        />
      )}
    </>
  );
}

export default App;
