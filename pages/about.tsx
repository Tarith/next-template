import Layout from '@/components/layout/primary/primary';
import Sidebar from '@/components/layout/sidebar/sidebar';
import styles from '@/styles/home.module.css';
import { NextPageWithLayout } from '@/types/page';

const About: NextPageWithLayout = () => {
  return (
    <article>
      <h1 className={styles.title}>About</h1>
      <p className={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis dicta
        cum numquam quod. Asperiores dolorem impedit eius a molestias eveniet
        recusandae tenetur officiis aperiam! Magnam eaque culpa quod placeat.
        Ratione.
      </p>
      <p className={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis dicta
        cum numquam quod. Asperiores dolorem impedit eius a molestias eveniet
        recusandae tenetur officiis aperiam! Magnam eaque culpa quod placeat.
        Ratione.
      </p>
    </article>
  );
};

export default About;

About.getLayout = (page) => {
  return (
    <Layout pageName="About">
      <Sidebar />
      {page}
    </Layout>
  );
};
