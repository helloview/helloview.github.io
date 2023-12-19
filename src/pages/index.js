import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
          This website is licensed under CC BY 4.0 <img src="https://mirrors.creativecommons.org/presskit/logos/cc.logo.svg" style={{fill: "#FFF"}} alt="cc"/>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Index Page`}
      description="Page Description">
      <HomepageHeader />
      <main></main>
    </Layout>
  );
}
