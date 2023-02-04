import Head from 'next/head';
import styles from './primary.module.css';

export interface ILayout {
  children: React.ReactNode;
  pageName: string;
}

const Layout: React.FC<ILayout> = ({ children, pageName }) => {
  return (
    <>
      <Head>
        <title>Template | {pageName} </title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
