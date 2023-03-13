import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Link href="./subpage">Subpage</Link>
      <br />
      <br />
      <br />
      <a href="https://nextjs-pwa-example-test-app-redirect-page.vercel.app/">
        Link to external page that redirects back
      </a>
    </div>
  );
}
