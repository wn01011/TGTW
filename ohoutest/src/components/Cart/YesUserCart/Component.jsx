import styled from "styled-components";

const YesUserCartComp = ({ CartProductCardContainer }) => {
  return (
    <BigBox>
      <div>
        <div>
          <input type={"checkbox"} checked={true} />
          <p>모두선택</p>
        </div>
        <div>선택삭제</div>
      </div>
      <YesUserCartBox>
        <div className="">
          <div>달팽이리빙 배송</div>
          <hr />
          <div>
            <CartProductCardContainer></CartProductCardContainer>
          </div>
          <hr />
          <div>배송비 무료</div>
        </div>
        <div>
          <div className="summary">
            <div>
              <ul>
                <li>
                  <p>총 상품금액</p>
                  <p>총 배송비</p>
                </li>
                <li>
                  <p>29,000원</p>
                  <p>+ 0원</p>
                </li>
              </ul>
              <div>
                <p>결제금액</p>
                <p>12,900원</p>
              </div>
            </div>
            <button>1개 상품 구매하기</button>
          </div>
        </div>
      </YesUserCartBox>
    </BigBox>
  );
};

export default YesUserCartComp;

const BigBox = styled.div`
  width: 100%;
  background-color: #afafaf75;
`;

const YesUserCartBox = styled.div`
  display: flex;
  width: 90%;
  margin: 20px auto;
  column-gap: 10%;
  & > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 60%;
    border-radius: 10px;
    background-color: #f4f4f4;
    div {
      padding: 5px;
    }
    div:nth-child(1) {
      margin: 10px 0px;
    }
    div:nth-child(3) {
      height: 200px;
    }
    div:last-child {
      margin: 10px 0px;
    }
    hr {
      color: #f4f4f4;
    }
  }
  & > div:last-child {
    width: 30%;
    border-radius: 10px;
  }
  .summary {
    position: sticky;
    top: 150px;
    row-gap: 20px;

    & > div {
      padding-top: 20px;
      width: 100%;
      background-color: #f4f4f4;
      border-radius: 15px;

      ul {
        width: 100%;
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        li {
          width: 40%;
          display: flex;
          flex-direction: column;
          row-gap: 15px;
        }
        li:first-child {
          text-align: left;
        }
        li:last-child {
          text-align: right;
          font-weight: 600;
        }
      }
      div {
        display: flex;
        justify-content: space-evenly;
        padding: 20px 0px;
        p {
          width: 40%;
        }
        p:first-child {
          text-align: left;
          margin: auto 0;
          font-weight: 600;
        }
        p:last-child {
          text-align: right;
          font-size: 1.5rem;
          font-weight: 600;
        }
      }
    }
    button {
      width: 100%;
      margin-top: 15px;
      padding: 15px 0px;
      border: none;
      border-radius: 10px;
      color: #f4f4f4;
      font-size: 1.2rem;
      background-color: #f0a500;
      font-weight: 800;
    }
    button:hover {
      background-color: #cf7500;
    }
  }
`;