import Head from "next/head";
import Layout from "../components/Layout";
import BlogContent from "../components/BlogContent";
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/core";
import { useFetch } from "../utils/hooks/useFetch";

const Blog = (props) => {
  const { data, loading } = useFetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@isagul"
  );

  const override = css`
    height: 100%;
    margin: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <Layout>
      <Head>
        <title>isagul - blog</title>
      </Head>
      <div className="info">
        <h1>My Blog Posts</h1>
      </div>
      <BeatLoader
        size={15}
        color={"#CF5050"}
        loading={loading}
        css={override}
      />
      <div className="blog-component">
        {data !== null &&
          data.items.map((story, index) => {
            const { title, link, content, thumbnail, categories } = story;

            return (
              <BlogContent
                title={title}
                link={link}
                thumbnail={thumbnail}
                content={content}
                categories={categories}
                key={index}
              />
            );
          })}
      </div>
      <style jsx global>
        {`
          .blog-component {
            max-width: 800px;
            align-self: center;
            padding: 0 40px;
            width: 100%;
          }
          .blog-component p {
            margin: 0;
          }
          .info {
            width: 100%;
            margin: 0 auto;
            max-width: 800px;
            padding: 20px 40px;
            user-select: none;
          }
          .info p {
            color: #718096;
          }
          @media screen and (max-width: 420px) {
            .info h1 {
              font-size: 20px;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default Blog;
