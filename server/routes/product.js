import { Router } from "express";
const router = Router();

import db from "../models/index.js";

const tables = [
  {
    name: "크리스마스 트리 오너먼트 볼 장식 15종",
    price: 2100,
    brand: "플라워트리",
    description: `플라워트리의 크리스마스 준비는 수박이 달고 맛있는 여름부터 시작해요.
    기분 좋아야 하는 특별한날 기대에 못미치는 상품을 받으면 안돼서에요
    상품 한개 한개 오랜 시간을 두고 꼼꼼히 선택했어요.
    누적된 피드백과 의견 주신 내용을 최대한 반영하려 많은 노력도 담았지요.`,
    img: "treeBall1",
  },
];

db.Products.findAll().then((data) => {
  if (data.length === 0) {
    db.Products.create(tables[0]);
  }
});

router.route("/").post((req, res) => {
  res.send(req.body);
});

router.route("/productManage").post(async (req, res) => {
  console.log("지나갔다.");

  const productInfo = await db.Products.findAll();
  const sliceInfo = productInfo.slice(
    req.body.number * 10,
    req.body.number * 10 + 10
  );

  res.send(sliceInfo);
});

router.route("/productPage").post(async (req, res) => {
  let pageNum = 0;

  console.log(pageNum);
  // if (parseInt(pagingNum / 10) == pagingNum / 10) {
  //   pageNum = parseInt(pagingNum / 10);
  // } else {
  //   pageNum = parseInt(pagingNum / 10) + 1;
  // }
  console.log(pageNum);
  res.send(pageNum);
});

export default router;
