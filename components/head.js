import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      {/* https://img.icons8.com/color/96/000000/pokeball--v1.png */}
      <title>{title}</title>
      <link rel="title icon" href="/PokeBall1.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <meta name="keywords" content="pokemon, HTML, CSS, JavaScript" />
      <meta name="description" content="pokemon" />
      <meta name="author" content="Shubham K"></meta>
    </Head>
  );
};

export default CustomHead;
