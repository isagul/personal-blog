import Head from 'next/head';
import Layout from '../components/Layout';
import BlogContent from '../components/BlogContent';
import { useFetch } from '../utils/hooks/useFetch';

const Blog = () => {

  const { data, loading } = useFetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@isagul');

  return (
    <Layout>
      <Head>
        <title>isagul - blog</title>
      </Head>

      <div className="blog-component">
        {
          data !== null && data.items.map((story, index) => {
            const { title, link, content, thumbnail, categories } = story;

            return categories.length > 0 && (
              <BlogContent
                title={title}
                link={link}
                thumbnail={thumbnail}
                content={content}
                categories={categories}
                key={index}
              />
            )
          })
        }
      </div>
      <style jsx>
        {`
        .blog-component {
          width: 550px;
          display: block;
          margin: 0 auto;
          font-family: 'Roboto', sans-serif;
        }
        .blog-component p {
          margin: 0;
        }
        .blog-component .story-area {
          border: 1px solid lightgray;
          border-radius: 6px;
          display: flex;
          flex-direction: column;
          margin: 1rem;
          padding: 1rem;
        }
        .blog-component .story-area .thumbnail {
          height: 200px;
          flex-shrink: 0;
          margin-bottom: 1rem;
        }
        .blog-component .story-area .desc-area {
          flex-grow: 1;
        }
        .blog-component .story-area .desc-area .title {
          font-weight: 600;
          margin-bottom: 1rem;
          text-align: center;
        }
        .blog-component .story-area .desc-area .content {
          text-align: justify;
          font-family: 'Nunito', sans-serif;
        }
        .blog-component .story-area .desc-area .show-more {
          border: none;
          cursor: pointer;
          color: black;
          font-size: 14px;
          text-align: right;
        }
        .blog-component .story-area .desc-area .show-more:hover {
          text-decoration: none;
        }
        .blog-component .story-area .desc-area .show-more p {
          margin-top: 1rem;
        }
        @media only screen and (max-width: 414px) {
          .blog-component {
            width: 370px;
          }
        }
        `}
      </style>
    </Layout>
  )
}

export default Blog;