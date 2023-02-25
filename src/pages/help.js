import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
//Components
import ExploreContent from "../components/ExploreContent/ExploreContent";
//import DiscoverYourPath from "../components/DiscoverYourPath/DiscoverYourPath";
import { DocSearch } from '@docsearch/react'
import ChatwootWidget from '../components/ChatwootWidget'


function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout description="歡迎來到雙龍體育支援中心.">
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          
          <h1 className="hero__title">我們能幫助你什麼嗎？</h1>
          <div className="searchDiv">
<div className={styles.docSearch}>
            <DocSearch
              apiKey="c2e792c2e75fe1dd3e40574f8b4c9a80"
              appId="70GEOCJCSX"
              indexName="help"
            />
          </div>          </div>
        </div>
      </header>
      <hr></hr>
      <ExploreContent />
           <ChatwootWidget />
      <hr></hr>
      <main>
     </main>
    </Layout>
  );
}

export default Home;
