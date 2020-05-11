import Head from 'next/head';
import Layout from '../components/Layout';
import Profile from '../components/Profile';

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>isagul - frontend developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&family=Roboto:wght@100&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200&family=Raleway:wght@300&family=Roboto:wght@100&display=swap" rel="stylesheet"></link>
      </Head>

      <Layout>
        <Profile />
      </Layout>

      <style jsx>{`
        
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Nunito', sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
