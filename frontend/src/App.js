import LoginPage from "./LoginPage/LoginPage";
import RequestDetails from "./RequestDetails/RequestDetails";
import Homepage from "./Homepage/Homepage";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [page, setPage] = useState(0);
  const [stationid, setStationid] = useState("1");

  const loginHandler = () => {
    setIsLogin((prevState) => {
      return !prevState;
    });
  };

  const togglePageHandler = () => {
    setPage((prevState) => {
      return Math.abs(prevState - 1);
    });
  };

  return (
    <>
      {!isLogin && <LoginPage loginHandler={loginHandler} />}
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
