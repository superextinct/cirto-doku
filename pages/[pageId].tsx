  
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
      let pageBlock = 0;

      if ((parentBlocks[Object.keys(parentBlocks)[0]]?.value as any).type != "page") {
        for (let i=1; i<Object.keys(parentBlocks).length; i++) {
          if((parentBlocks[Object.keys(parentBlocks)[i]]?.value as any).type == "page") {
            pageBlock = i;
            break;
          }
        }
      }

      parentPages.push({
        id: Object.keys(parentBlocks)[pageBlock],
        title: (parentBlocks[Object.keys(parentBlocks)[pageBlock]]?.value as any).properties.title[0][0]
      });

      parent = parentBlocks[Object.keys(parentBlocks)[pageBlock]]?.value.parent_id;
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
  );
};

export default NotionPage;