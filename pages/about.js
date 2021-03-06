import CustomHead from "../components/head";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <>
      <CustomHead title="Pokemon | About" />
      <div>
        <h1 className={styles.title}>About</h1>
        <p className={styles.text}>
          Pokémon(an abbreviation for Pocket Monsters in Japan) is a Japanese
          media franchise managed by The Pokémon Company, a company founded by
          Nintendo, Game Freak, and Creatures. The franchise was created by
          Satoshi Tajiri in 1996, and is centered on fictional creatures called
          "Pokémon". In Pokémon, humans, known as Pokémon Trainers, catch and
          train Pokémon to battle other Pokémon for sport. All media works
          within the franchise are set in the Pokémon universe. The English
          slogan for the franchise is "Gotta Catch ‘Em All!". There are
          currently 901 Pokémon species. The franchise began as Pocket Monsters:
          Red and Green (later released outside of Japan as Pokémon Red and
          Blue), a pair of video games for the original Game Boy handheld system
          that were developed by Game Freak and published by Nintendo in
          February 1996. It soon became a media mix franchise adapted into
          various different media.[8] Pokémon is estimated to be the
          highest-grossing media franchise of all time. The Pokémon video game
          series is the fourth best-selling video game franchise of all time
          with more than 380 million copies sold[9] and one billion mobile
          downloads.[10] The Pokémon video game series spawned an anime
          television series that has become the most successful video game
          adaptation[11] of all time with over 20 seasons and 1,000 episodes in
          183 countries.[9] The Pokémon Trading Card Game is the highest-selling
          trading card game of all time[12] with over 34.1 billion cards sold.
          In addition, the Pokémon franchise includes the world's top-selling
          toy brand,[13] an anime film series, a live-action film (Detective
          Pikachu), books, manga comics, music, merchandise, and a temporary
          theme park. The franchise is also represented in other Nintendo media,
          such as the Super Smash Bros. series, where various Pokémon characters
          are playable.
        </p>
      </div>
    </>
  );
};

export default About;
