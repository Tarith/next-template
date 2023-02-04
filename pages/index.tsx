import Layout from '@/components/layout/primary/primary';
import Sidebar from '@/components/layout/sidebar/sidebar';
import styles from '@/styles/home.module.css';
import { NextPageWithLayout } from '@/types/page';
import Head from 'next/head';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Template | Home</title>
      </Head>
      <article>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nemo
          reprehenderit at illo id. Odio, provident repellendus obcaecati itaque
          nulla et! Architecto officia quisquam animi iure incidunt eos totam
          veritatis.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nemo
          reprehenderit at illo id. Odio, provident repellendus obcaecati itaque
          nulla et! Architecto officia quisquam animi iure incidunt eos totam
          veritatis.
        </p>
      </article>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <Layout pageName="Home">
      <Sidebar />
      {page}
    </Layout>
  );
};
