import YesUserCartComp from "./Component";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const YesUserCartContainer = ({ userInfo }) => {
  const [totalState, setTotalState] = useState([]);
  const [totalCount, setTotalCount] = useState([]);
  const [item, setItem] = useState([]);

  const buyOnClick = () => {
    axios.post("/api/order/buy", { id: 1, user: userInfo }).then(({ data }) => {
      console.log(data);
    });
  };

  const getCartItem = () => {
    axios
      .post("/api/cart/getCartItem")
      .then((data) => {
        setItem(data.data);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getCartItem();
  }, []);

  // window.scrollTo(0, 0);
  // console.log(item);

  return (
    <>
      <YesUserCartComp
        totalState={totalState}
        setTotalState={setTotalState}
        totalCount={totalCount}
        setTotalCount={setTotalCount}
        buyOnClick={buyOnClick}
        item={item}
        setItem={setItem}
      ></YesUserCartComp>
    </>
  );
};

export default YesUserCartContainer;
