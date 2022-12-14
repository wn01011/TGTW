import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import ReadMoreHead from "./ReadMoreHead";
import ReadMoreReviewContainer from "./ReadMoreReview/Container";

const ReadMore = () => {
  const [item, setItem] = useState({});
  const { productId } = useParams();

  const getProductItem = (pdtId) => {
    axios
      .post("/api/product/getProductItem", { id: pdtId })
      .then((data) => {
        setItem(data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getProductItem(productId);
  }, []);

  window.scrollTo(0, 0);

  return (
    <ReadMoreBox>
      <ReadMoreHead item={item} />
      <ReadMoreReviewContainer productId={productId} />
    </ReadMoreBox>
  );
};

const ReadMoreBox = styled.div`
  width: 100%;
`;

export default ReadMore;
