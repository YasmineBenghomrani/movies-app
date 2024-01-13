import React, { useEffect, useState } from "react";
import HeroSwiper from "../components/HeroSwiper";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import CardMovie from "../components/CardMovie";
import HorizontalSwiper from "../components/horizontalSwiper";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjQxNjQzNjMzOWI1MDIyYTdmNzkzNGVlMzU4ZTBhMSIsInN1YiI6IjY1OTk3MTI1NmU5MzhhMDA5MzFiNTdhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6j2mJTyhkIX4K7shJ4iYGBPX3JyRYzZ4jnZE45nu1ks",
      },
    };

    axios
      .request(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options
      )
      .then((res) => {
        console.log(res.data);
        setMovies(res.data.results);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <HeroSwiper />
      <section className="movies">
        <div className="header">
          <div className="line"></div>
          <h2>Top Rated Movies</h2>
          <div className="line"></div>
        </div>
        <div className="content">
          {loading ? (
            <CircularProgress />
          ) : (
            <HorizontalSwiper medias={movies} />
          )}
        </div>
      </section>
    </div>
  );
}
