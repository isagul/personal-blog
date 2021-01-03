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
              categories.length > 0 && (
                <BlogContent
                  title={title}
                  link={link}
                  thumbnail={thumbnail}
                  content={content}
                  categories={categories}
                  key={index}
                />
              )
            );
          })}
      </div>
      <style jsx global>
        {`
          .blog-component {
            max-width: 800px;
            padding: 0 40px;
            align-self: center;
          }
          .blog-component p {
            margin: 0;
          }
        `}
      </style>
    </Layout>
  );
};

export default Blog;
