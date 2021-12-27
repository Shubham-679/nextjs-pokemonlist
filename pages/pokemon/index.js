import Link from "next/link";
import Image from "next/image";
import CustomHead from "../../components/head";
import { firstWordCapital } from "../../utils/functions";
import { url, imageUrl } from "../../utils/contants";
import styles from "../../styles/Pokemon.module.css";

export const getStaticProps = async () => {
  // Fetch data before rendering
  const res = await fetch(url + "?limit=500");
  const data = await res.json();
  return {
    props: { pokemons: data },
  };
};

const Pokemons = ({ pokemons }) => {
  const { results = [] } = pokemons;

  return (
    <>
      <CustomHead title="All Pokemon"/>
      <div>
        <h1 style={{textAlign:"center"}}>All Pokemons</h1>
        <div className={styles.gridContainer}>
        {results.map((pokemon, index) => (
          <Link href={"/pokemon/" + pokemon.name} key={pokemon.name} >
            <a className={styles.single}>
              <img
                alt="pokemon"
                src={imageUrl+`${index + 1}.svg`}
                height={100}
                width={150}
                style={{marginTop:"20px"}}
              />
              <h2>{firstWordCapital(pokemon.name)}</h2>
            </a>
          </Link>
   
        ))}
        </div>
      </div>
    </>
  );
};

export default Pokemons;
