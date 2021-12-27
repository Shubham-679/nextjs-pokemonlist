import CustomHead from "../../components/head";
import { firstWordCapital, getTypeColor, getWeight, getHeight } from "../../utils/functions";
import styles from "../../styles/Details.module.css";
import { url } from "../../utils/contants";

export const getStaticPaths = async () => {
  const res = await fetch(url + "?limit=500");
  const { results = { data } } = await res.json();
  // map data to an array of path objects with params (id)
  const paths = results.map((pokemon) => {
    return {
      params: { id: pokemon.name.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(url + "/" + id);
  const data = await res.json();
  return {
    props: { pokemon: data },
  };
};

const Details = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <>
      <CustomHead
        title={`Pokemon Details | ${firstWordCapital(pokemon.name)}`}
      />
      <div className={styles.mainContainer}>
        <img
          alt={pokemon.name}
          src={pokemon.sprites.other.dream_world.front_default}
          height={400}
          width={500}
          style={{ marginTop: "20px" }}
        />
        <div className={styles.detailContainer}>
          <h1 className={styles.name}>{firstWordCapital(pokemon.name)}</h1>
          <table className={styles.vitalsTable}>
            <tbody>
              <tr>
                <th>National No./Id</th>
                <td>
                  <strong>#{pokemon.id}</strong>
                </td>
              </tr>
              <tr>
                <th>Type</th>
                <td>
                  {pokemon.types.map((a) => (
                    <span
                      key={a.slot}
                      className={styles.typeIcon}
                      style={{ backgroundColor: getTypeColor(a.type.name) }}
                    >
                      {a.type.name}
                    </span>
                  ))}
                </td>
              </tr>
              {/* <tr>
                <th>Species</th>
                <td>
                  <strong>{pokemon.height}</strong>
                </td>
              </tr> */}
              <tr>
                <th>Height</th>
                <td>
                  <strong>{getHeight(pokemon.height)}</strong>
                </td>
              </tr>
              <tr>
                <th>Weight</th>
                <td>
                  <strong>{getWeight(pokemon.weight)}</strong>
                </td>
              </tr>
              <tr>
                <th>Abilities</th>
                <td>
                  <ul>
                    {pokemon.abilities.map((a) => (
                      <li key={a.slot}>
                        {firstWordCapital(a.ability.name)}{" "}
                        {a.is_hidden && "(Hidden Ability)"}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Details;
