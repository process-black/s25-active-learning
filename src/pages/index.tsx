import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <video 
        src="https://res.cloudinary.com/dfnq1g0fu/video/upload/v1750590301/j5y2p1kowvlmlufpdh1l.mp4"
        className={styles.fixedVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <main className={styles.scrollableContent}>
        {/* Content goes here */}
      </main>
    </Layout>
  );
}
