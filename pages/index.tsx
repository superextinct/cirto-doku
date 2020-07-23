import { NotionRenderer, BlockMapType } from "react-notion";
import { DOC_TITLE } from "../lib/constants";
import Container from "../components/container";
import Head from "next/head";
import Layout from "../components/layout";
import fetch from "node-fetch";

const NOTION_BLOG_ID = "74633d3347374bfb995c6dabbdeeb513";

export async function getStaticProps() {
  const data: BlockMapType = await fetch(
    `https://notion.superextinct.workers.dev/v1/page/${NOTION_BLOG_ID}`
  ).then(res => res.json());

  return {
    props: {
      blockMap: data
    }
  };
}

const Home = ({ blockMap }) => {
    return (
        <Layout breadcrumb={[]}>
          <Head>
            <title>{ DOC_TITLE }</title>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000"/>
            <meta name="msapplication-TileColor" content="#ede164"/>
            <meta name="theme-color" content="#18170b"/>
          </Head>
          <Container>
            <NotionRenderer blockMap={blockMap} />
          </Container>
        </Layout>
    )
}

export default Home;