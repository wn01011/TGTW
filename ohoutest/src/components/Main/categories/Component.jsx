import styled from "styled-components";
import { Link } from "react-router-dom";

const CategoriesComponent = ({
  categoriesArr,
  categoriesRef,
  left,
  right,
  currentItem,
}) => {
  return (
    <CategoriesCompBox>
      <div className="subtitle">
        <div>카테고리</div>
      </div>
      <button
        onClick={left}
        className="categories-btn-left"
        style={{ display: `${currentItem === 1 ? "none" : "block"}` }}
      >
        <img src="/img/chevron-right-solid.svg" />
      </button>
      <button
        onClick={right}
        className="categories-btn-right"
        style={{ display: `${currentItem === 8 ? "none" : "block"}` }}
      >
        <img src="/img/chevron-right-solid.svg" />
      </button>
      <div className="categories-container" ref={categoriesRef}>
        {categoriesArr.map((elem, idx) => {
          return (
            <Link key={`categoriesArr - ${idx}`} to={"/"}>
              <img src={`/img/categories/categories${idx + 1}.webp`} />
              <div>{elem}</div>
            </Link>
          );
        })}
        {/* <img className="plus-img" src="/img/plus-solid.svg" /> */}
      </div>
    </CategoriesCompBox>
  );
};

export default CategoriesComponent;

const CategoriesCompBox = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  position: relative;
  width: 1200px;
  overflow: hidden;

  .subtitle {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  .subtitle div {
    font-size: 24px;
    margin: 0 5px;
    font-weight: bold;
  }
  .categories-container {
    display: flex;
    transition: transform 0.4s;
    margin: 0 auto;
  }
  .categories-container img {
    width: 100px;
  }
  .categories-container a {
    margin: 0 10px;
    text-decoration: none;
    color: inherit;
  }
  .categories-container a div {
    margin-top: 5px;
    font-size: 14px;
    font-weight: bold;
  }
  .categories-btn-left,
  .categories-btn-right {
    position: absolute;
    z-index: 1;
    border: none;
    font-size: 0;
    padding: 7px;
    background-color: rgba(40, 40, 40, 0.5);
    border-radius: 30px;
    cursor: pointer;
    top: calc(50%);
  }
  .categories-btn-left:hover,
  .categories-btn-right:hover {
    background-color: rgba(100, 100, 100, 0.5);
  }
  .categories-btn-left img,
  .categories-btn-right img {
    width: 20px;
    height: 20px;
    filter: invert(100%) sepia(30%) saturate(1436%) hue-rotate(292deg)
      brightness(109%) contrast(90%);
  }
  .categories-btn-left img {
    transform: rotate(180deg);
  }
  .categories-btn-left {
    left: 0px;
  }
  .categories-btn-right {
    right: 0px;
  }
  .plus-img{
    width: 100px;
    height: 127px;
    margin: 0 auto;
    cursor: pointer;
  }

  @media only screen and (max-width: 1440px) {
    width: 900px;
    .categories-container a {
      margin: 0 5px;
    }
    .categories-container img {
      width: 80px;
    }
  }
  @media only screen and (max-width: 1024px) {
    width: 700px;
    .categories-container a {
      margin: 0 2.5px;
    }
    .categories-container img {
      width: 65px;
    }
  }
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    .categories-btn-left,
    .categories-btn-right {
      display: none !important;
    }
    .categories-container{
      flex-wrap: wrap;
      gap: 30px;
      transform: translate(0) !important;
    }
    .categories-container a {
      margin: 0 auto;
    }
    .categories-container img {
      width: 100px;
    }
  }
  @media only screen and (max-width: 425px) {
    display: none;
  }
`;
