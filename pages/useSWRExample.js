import Head from 'next/head';
import styles from '../styles/Home.module.css';
import useSWR, { SWRConfig } from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const url = 'http://thinkhazard.org/en/report/177.json';

  const { data, error } = useSWR(url, fetcher);

  console.log(data, error);

  return (
    <div>
      <h1>SWR</h1>
    </div>
  );
}
