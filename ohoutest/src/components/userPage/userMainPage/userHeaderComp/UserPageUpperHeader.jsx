import { useEffect, useState } from "react";
import styled from "styled-components";
import MyList from "./MyList";
import ShippingStatus from "./myShopping/ShippingStatus";
import CartContainer from "../../../Cart/Container";
import MyQnaList from "./MyQnaList/MyQnaList";
import MyOptionContainer from "../myOption/MyOptionContainer";
import OrderArrListComp from "./OrderArrListComp";
import MyReviewComp from "./MyReviewComp";
import { useSelector } from "react-redux";
import axios from "axios";

const UserPageUpperHeader = () => {
  const [clickColor, setClickColor] = useState(0);
  const [myList, setMyList] = useState(0);
  const [listClick, setListClick] = useState(0);
  const myShoppingArr = ["주문배송내역 조회", "나의 장바구니"];
  const MyReviewArr = ["리뷰쓰기", "내가 작성한 리뷰"];
  const myOptionArr = ["회원정보수정", "비밀번호 변경"];
  const [orderArr, setOrderArr] = useState([]);

  const userInfo = useSelector((state) => state.userInfo);
  useEffect(() => {
    if (userInfo.userId) {
      axios
        .post("/api/order/getOrder", { userId: userInfo.userId })
        .then(({ data }) => {
          setOrderArr(data);
        });
    }
  }, [userInfo]);

  return (
    <div>
      <UserPageHeader>
        <UserPageUpperHeaderDiv>
          <UserPageUpperItem
            onClick={() => {
              setClickColor((state) => (state = 0));
              setMyList((state) => (state = 0));
            }}
            style={{ color: clickColor == 0 ? "#f0a500" : "black" }}
          >
            나의 쇼핑
          </UserPageUpperItem>
          <UserPageUpperItem
            onClick={() => {
              setClickColor((state) => (state = 1));
              setMyList((state) => (state = 0));
            }}
            style={{ color: clickColor == 1 ? "#f0a500" : "black" }}
          >
            나의 리뷰
          </UserPageUpperItem>
          <UserPageUpperItem
            onClick={() => {
              setClickColor((state) => (state = 2));
              setMyList((state) => (state = 0));
            }}
            style={{ color: clickColor == 2 ? "#f0a500" : "black" }}
          >
            설정
          </UserPageUpperItem>
        </UserPageUpperHeaderDiv>

        {clickColor == 0 ? (
          <MyList myarr={myShoppingArr} myList={myList} setMyList={setMyList} />
        ) : (
          <></>
        )}
        {clickColor == 1 ? (
          <>
            <MyList myarr={MyReviewArr} myList={myList} setMyList={setMyList} />
            {myList == 0 ? (
              <div>
                {orderArr.map((item, index) => {
                  return (
                    <OrderArrListComp
                      key={"orderArrComp-" + index}
                      productId={item.products_id}
                      createdAt={item.createdAt}
                      index={index}
                    />
                  );
                })}
              </div>
            ) : (
              <></>
            )}
            {myList == 1 ? <MyReviewComp></MyReviewComp> : <></>}
          </>
        ) : (
          <></>
        )}
        {clickColor == 2 ? (
          <MyList myarr={myOptionArr} myList={myList} setMyList={setMyList} />
        ) : (
          <></>
        )}
      </UserPageHeader>

      {clickColor == 0 && myList == 0 ? (
        <UserPageInfo>
          <ShippingDiv>
            <ShippingItem
              onClick={() => setListClick((state) => (state = 0))}
              style={{ color: listClick == 0 ? "#f0a500" : "black" }}
            >
              배송준비
            </ShippingItem>
            <ShippingItem
              onClick={() => setListClick((state) => (state = 1))}
              style={{ color: listClick == 1 ? "#f0a500" : "black" }}
            >
              배송중
            </ShippingItem>
            <ShippingItem
              onClick={() => setListClick((state) => (state = 2))}
              style={{ color: listClick == 2 ? "#f0a500" : "black" }}
            >
              배송 완료
            </ShippingItem>
          </ShippingDiv>
          <ShippingStatus listClick={listClick} />
        </UserPageInfo>
      ) : (
        <></>
      )}
      {clickColor == 0 && myList == 1 ? <CartContainer /> : <></>}
      {clickColor == 0 && myList == 2 ? <MyQnaList /> : <></>}

      {clickColor == 2 && myList == 0 ? (
        <MyOptionContainer myList={0} />
      ) : (
        <></>
      )}
      {clickColor == 2 && myList == 1 ? (
        <MyOptionContainer myList={1} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserPageUpperHeader;

const UserPageUpperHeaderDiv = styled.div`
  width: 100%;
  display: flex;
  column-gap: 20px;
  padding: 10px;
  justify-content: center;
  border-bottom: 1px solid #f0a500;
`;
const UserPageUpperItem = styled.div`
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    color: #f0a500;
  }
`;
const UserPageInfo = styled.div`
  width: 100%;
  padding-top: 20px;
`;
const ShippingDiv = styled.div`
  width: 50%;
  min-width: 350px;
  margin: auto;
  justify-content: center;
  border: 1px solid #f0a500;
  border-radius: 10px;
  display: flex;
  column-gap: 100px;
  @media only screen and (max-width: 1000px) {
    column-gap: 50px;
  }
`;

const ShippingItem = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  cursor: pointer;
  margin: 15px;
  white-space: nowrap;
  @media only screen and (max-width: 1268px) {
    font-size: 1.3rem;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 1.3rem;
    margin: 15px 0px;
  }
`;

const UserPageHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid #f0a500;
`;
