import Link from 'next/link';
import styles from './sidebar.module.css';

export interface ISidebar {}

const Sidebar: React.FC<ISidebar> = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
};

export default Sidebar;
