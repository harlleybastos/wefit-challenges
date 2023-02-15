// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ShapeMovies } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ShapeMovies>
) {
  res.status(200).json({
    movies: [
      {
        id: 1,
        title: "Viúva Negra",
        price: 9.99,
        image: "https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png",
        quantity: 1,
      },
      {
        id: 2,
        title: "Shang-chi",
        price: 30.99,
        image: "https://wefit-react-web-test.s3.amazonaws.com/shang-chi.png",
        quantity: 1,
      },
      {
        id: 3,
        title: "Homem Aranha",
        price: 29.9,
        image: "https://wefit-react-web-test.s3.amazonaws.com/spider-man.png",
        quantity: 1,
      },
      {
        id: 5,
        title: "Morbius",
        price: 1.5,
        image: "https://wefit-react-web-test.s3.amazonaws.com/morbius-1.png",
        quantity: 1,
      },
      {
        id: 6,
        title: "Batman",
        price: 21.9,
        image: "https://wefit-react-web-test.s3.amazonaws.com/the-batman.png",
        quantity: 1,
      },
      {
        id: 4,
        title: "Eternos",
        price: 17.9,
        image: "https://wefit-react-web-test.s3.amazonaws.com/eternals.png",
        quantity: 1,
      },
    ],
  });
}
