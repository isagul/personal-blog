import Head from 'next/head';
import Layout from '../components/Layout';
import Profile from '../components/Profile';

export default function Home() {
  return (
    <Layout>
      <Profile />
    </Layout>
  )
}
