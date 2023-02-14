import Navbar from "@/components/shared/Navbar";
import Head from "next/head";
import axios from "axios";
import { InferGetStaticPropsType } from "next";
import { ShapeProduct } from "@/types";
import MovieList from "@/components/Home/MovieList";

export default function Home({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Challenge WeFit</title>
        <meta name="description" content="Challenge WeFit" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <MovieList data={data} />
    </>
  );
}

export const getStaticProps = async () => {
  const { data } = await axios.get<{ movies: ShapeProduct[] }>(
    "http://localhost:3000/api/movies"
  );

  return {
    props: {
      data,
    },
  };
};
