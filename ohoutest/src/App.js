import { useState } from "react";
import ManagerInfo from "./components/ManagerPage";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer/Container";
import SingUp from "./components/index";
import AnswerQna from "./components/ManagerPage/ManagerInfo/answerQna/AnswerQnaComponent";
import AnswerQnaContainer from "./components/ManagerPage/ManagerInfo/answerQna/AnswerQnaContainer";
import PopupBarContainer from "./components/popupBar/Container";
import axios from "axios";
import RegistContainer from "./components/UserLogin/Regist/Container";
import SearchContainer from "./components/Search/Container";
import CartContainer from "./components/Cart/Container";
axios.defaults.withCredentials = true;

function App() {
  const [switcher, setSwitcher] = useState(false);
  return (
    <AppBox>
      {/* <SingUp></SingUp> */}
      {switcher || <PopupBarContainer setSwitcher={setSwitcher} />}
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/signUp" element={<SingUp></SingUp>}></Route>
        <Route path="/managerInfo" element={<ManagerInfo></ManagerInfo>} />
        <Route path="/regist" element={<RegistContainer />} />
        <Route path="/search/:sword" element={<SearchContainer />} />
        {/* 회원가입 예외처리 하려고  26번 줄 추가 */}
        <Route
          path="/managerInfo/qnaAnswer/:id"
          element={
            <>
              <ManagerInfo />
              <AnswerQnaContainer />
            </>
          }
        />
        <Route path="/cart" element={<CartContainer />}></Route>
      </Routes>
      <Footer />
      <div style={{ backgroundColor: "#1a1c20" }}></div>
    </AppBox>
  );
}

export default App;

const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #f4f4f4;
  height: 3000px;
`;
