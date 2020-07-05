  
import { NotionRenderer, BlockMapType } from "react-notion";
import { DOC_TITLE } from "../lib/constants";
import Container from "../components/container";
import Head from "next/head";
import Layout from "../components/layout";
import fetch from "node-fetch";

export async function getServerSideProps(context) {
  const pageId = context.params?.pageId;

  if (!pageId) {
    return;
  }

  const data: BlockMapType = await fetch(
    `https://notion-api.splitbee.io/v1/page/${pageId}`
  ).then(res => res.json());

  let parentPages = [];
  let parent: any = data[Object.keys(data)[0]]?.value.parent_id;
  
  while (parent) {
    const parentBlocks: BlockMapType = await fetch(
      `https://notion-api.splitbee.io/v1/page/${parent}`
    ).then(res => res.json());

    if (Object.keys(parentBlocks).length > 0) {
      parentPages.push({
        id: Object.keys(parentBlocks)[0],
        title: (parentBlocks[Object.keys(parentBlocks)[0]]?.value as any).properties.title[0][0]
      });

      parent = parentBlocks[Object.keys(parentBlocks)[0]]?.value.parent_id;
    } else {
      parent = false;
    }
  }

  parentPages.reverse().shift();

  if (Object.keys(data).length > 0) {
    parentPages.push({
      id: Object.keys(data)[0],
      title: data[Object.keys(data)[0]]?.value.properties.title[0][0]
    });
  }

  return {
    props: {
      blockMap: data,
      breadcrumb: parentPages
    }
  };
}

const NotionPage = ({ blockMap, breadcrumb }) => {
  if (!blockMap || Object.keys(blockMap).length === 0) {
    return (
      <div>
        <h3>No data found.</h3>
        <div> Make sure the pageId is valid.</div>
        <div>Only public pages are supported in this example.</div>
      </div>
    );
  }

  const title =
    blockMap[Object.keys(blockMap)[0]]?.value.properties.title[0][0];
  
  return (
    <Layout breadcrumb={breadcrumb}>
      <Head>
        <title>{title} – { DOC_TITLE }</title>
      </Head>
      <Container>
        <NotionRenderer blockMap={blockMap} />
      </Container>
    </Layout>
  );
};

export default NotionPage;