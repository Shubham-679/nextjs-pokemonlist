import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CustomHead from "../../components/head";
import { firstWordCapital } from "../../utils/functions";
import { url, imageUrl } from "../../utils/constants";
import styles from "../../styles/Pokemon.module.css";
import { useRouter } from "next/router";

export const getServerSideProps = async ({ query }) => {
  // Fetch data before rendering
  const res = await fetch(url + `?offset=${query.offset}&limit=${query.limit}`);
  const { results, count } = await res.json();
  const totalPages = Math.ceil(count / 10);
  return {
    props: {
      pokemons: results,
      paginationProps: { totalCount: count, totalPages },
    },
  };
};

const Pokemons = ({ pokemons, paginationProps }) => {
  const { query, pathname, push } = useRouter();
  const [lim, setLim] = useState(query.limit || 10);
  const [ofSet, setOfSet] = useState(query.offset || null);
  const [currentPage, setCurrentPage] = useState(query.page || 1);
  // const { totalCount, totalPages } = paginationProps;

  useEffect(() => {
    pagginationHandler(+ofSet, +lim, +currentPage);
  }, []);

  const pagginationHandler = (o = 0, l = 10, cp = 1) => {
    const currentPath = pathname;
    const currentQuery = { ...query };
    currentQuery.offset = o;
    currentQuery.limit = l;
    currentQuery.page = cp;
    setLim(l);
    setOfSet(o);
    setCurrentPage(cp);
    push({
      pathname: currentPath,
      query: currentQuery,
    });
  };

  const getImgValue = (str) => {
    const last = str.substring(str.lastIndexOf("pokemon"), str.length);
    return last.split("/")[1];
  };

  return (
    <>
      <CustomHead title="All Pokemon" />
      <div>
        <div style={{ display: "inline-flex", width: "950px" }}>
          <div style={{ display: "inline-flex", width: "950px" }}>
            <h1 style={{ textAlign: "center", marginLeft: "15px" }}>
              All Pokemons
            </h1>
            <div>Current Page {currentPage}</div>
          </div>
          <div style={{ display: "inline-flex", marginLeft: "auto" }}>
            <button
              type="button"
              className={`${ofSet === 0 ? styles.btnDisable : styles.btn}`}
              onClick={() =>
                ofSet > 0 &&
                pagginationHandler(ofSet - lim, lim, currentPage - 1)
              }
            >
              Prev
            </button>
            <button
              type="button"
              className={styles.btn}
              onClick={() =>
                pagginationHandler(ofSet + lim, lim, currentPage + 1)
              }
            >
              Next
            </button>
          </div>
        </div>
        <div className={styles.gridContainer}>
          {pokemons.map((pokemon) => (
            <Link href={"/pokemon/" + pokemon.name} key={pokemon.name}>
              <a className={styles.single}>
                <img
                  alt="pokemon"
                  src={imageUrl + `${getImgValue(pokemon.url)}.svg`}
                  height={100}
                  width={120}
                  style={{ marginTop: "20px" }}
                />
                <h3>{firstWordCapital(pokemon.name)}</h3>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pokemons;
