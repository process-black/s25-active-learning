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
      <main className={styles.fullScreenContainer}>
        <img 
          src="https://files.slack.com/files-pri/T0HTW3H0V-F08NL1A4V61/podcast002.png?pub_secret=145e64449d" 
          alt="Active Learning Podcast" 
          className={styles.fullScreenImage}
        />
      </main>
    </Layout>
  );
}
