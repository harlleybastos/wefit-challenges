import Head from "next/head";
import axios from "axios";
import { InferGetStaticPropsType } from "next";
import { ShapeProduct } from "@/types";
import MovieList from "@/components/Home/MovieList";
import { useState } from "react";
import Loader from "@/components/Home/Loader";

export default function Home({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <>
      {!isLoading ? (
        <>
          <Head>
            <title>Challenge WeFit</title>
            <meta name="description" content="Challenge WeFit" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <MovieList data={data} />
        </>
      ) : (
        <Loader />
      )}
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
