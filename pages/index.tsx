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
        <Layout>
          <Head>
            <title>{ DOC_TITLE }</title>
          </Head>
          <Container>
            <NotionRenderer blockMap={blockMap} />
          </Container>
        </Layout>
    )
}

export default Home;