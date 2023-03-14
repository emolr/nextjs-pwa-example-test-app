import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { getPWADisplayMode } from '../libs/getPWADisplayMode';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isPWA, setIsPWA] = useState(false);
  useEffect(() => {
    const browserMode = getPWADisplayMode();

    if (browserMode === 'standalone') {
      setIsPWA(true);
    }
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      {isPWA && <h1>This is running as an installed PWA!</h1>}

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
