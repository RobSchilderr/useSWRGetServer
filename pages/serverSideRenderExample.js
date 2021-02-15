import Head from 'next/head';
import styles from '../styles/Home.module.css';
import useSWR, { SWRConfig } from 'swr';

export default function Home({ results }) {
  return (
    <div>
      <>
        {results ? (
          results.map((hazard) => (
            <>
              <h2>{hazard.hazardtype.hazardtype}</h2>

              <ul>
                <li>{hazard.hazardlevel.title}</li>
              </ul>
            </>
          ))
        ) : (
          <h1>No hazard found</h1>
        )}
      </>
    </div>
  );
}

export async function getServerSideProps() {
  console.log('hello from the server');

  const res = await fetch('http://thinkhazard.org/en/report/177.json');
  const data = await res.json();

  console.log(data);
  return {
    props: {
      results: data,
    },
  };
}
