import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import styles from '../styles/Home.module.css';

export default function Home({ countries }) {
  console.log(countries);
  return (
    <Layout>main</Layout>
  )
};

export const getStaticProps = async () => {
  const response = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await response.json();

  return {
    props: {
      countries,
    },
  };
};

