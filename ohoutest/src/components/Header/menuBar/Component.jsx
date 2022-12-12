import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuBarComponent = () => {
  return (
    <MenuBarCompBox>
      <Link to={"/"}>스토어홈</Link>
      <Link to={"/"}>카테고리</Link>
      <Link to={"/"}>베스트</Link>
      <Link to={"/"}>오늘의딜</Link>
    </MenuBarCompBox>
  );
};

export default MenuBarComponent;

const MenuBarCompBox = styled.div`
  display: flex;
  gap: 30px;
  width: 1200px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
  a:hover {
    color: #f0a500;
  }
`;