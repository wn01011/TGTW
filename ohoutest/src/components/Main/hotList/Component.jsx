import styled from "styled-components";
import { Link } from "react-router-dom";

const HotListComponent = ({ itemArr }) => {
  return (
    <HotListCompBox>
      <div className="subtitle">
        <div>인기상품</div>
      </div>
      <div className="hot-list-container">
        {itemArr.map((elem, idx) => {
          return (
            <ItemBox itemArr={itemArr} key={`itemArr - ${idx}`}>
              <Link to={`/readmore/${elem.id}`}>
                <div className="hot-list-item-img">
                  <img src={`/api/download${elem.img.split(",")[0]}`} />
                </div>
                <div className="item-container">
                  <div className="item-brand">{elem.brand}</div>
                  <div className="item-name">{elem.name}</div>
                  <div className="item-price">
                    {elem.price.toLocaleString()}
                  </div>
                </div>
              </Link>
            </ItemBox>
          );
        })}
      </div>
    </HotListCompBox>
  );
};

export default HotListComponent;

const HotListCompBox = styled.div`
  width: 1200px;
  margin: 0 auto;
  margin-top: 50px;

  .subtitle {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .subtitle div {
    font-size: 24px;
    margin: 0 5px;
    font-weight: bold;
  }
  .hot-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    word-break: break-word;
    flex-grow: 1;
  }

  @media only screen and (max-width: 1440px) {
    width: 900px;
  }
  @media only screen and (max-width: 1024px) {
    width: 700px;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  @media only screen and (max-width: 425px) {
  }
`;

const ItemBox = styled.div`
  width: 24%;
  margin: 0 0.5%;
  margin-bottom: 30px;

  img {
    width: 100%;
    transition: transform 0.2s;
  }
  a {
    font-size: 0;
    text-decoration: none;
    color: inherit;
  }
  .hot-list-item-img {
    overflow: hidden;
    border-radius: 8px;
    font-size: 0;
  }
  .item-container {
    text-align: left;
    margin: 7px 5px;
    padding: 0 5px;
  }
  .item-brand {
    font-size: 12px;
    color: #828c94;
  }
  .item-name {
    margin-top: 5px;
    font-size: 16px;
    color: #424242;
  }
  .item-price {
    font-size: 22px;
    font-weight: bold;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
    .item-name {
      color: #9f9f9f;
    }
  }

  @media only screen and (max-width: 1440px) {
  }
  @media only screen and (max-width: 1024px) {
  }
  @media only screen and (max-width: 768px) {
    width: 40%;
    flex-grow: 1;
    padding: 3%;
    margin-left: 0;
    margin-right: 0;
    border-bottom: 1px solid lightgrey;
    &:hover {
      img {
        transform: none;
      }
      .item-name {
        color: #424242;
      }
    }
    &:last-child {
      ${(props) =>
        props.itemArr.length % 2 === 0
          ? ""
          : "margin-bottom: 0;flex-grow: 0;width: 50%;border-bottom: none;"}
    }
    &:last-child,
    &:nth-child(${(props) => props.itemArr.length - 1}) {
      ${(props) =>
        props.itemArr.length % 2 === 0
          ? "margin-bottom: 0;border-bottom: none;"
          : ""}
    }
  }
  @media only screen and (max-width: 425px) {
  }
`;
