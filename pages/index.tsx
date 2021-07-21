import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Home from '../containers/home/Home';

export default function App() {
  return (
    <Layout>
      <Head>
        <title>Kitty Friends</title>
        <meta
          name="description"
          content="A web app to check our all the cute kitties in the world."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </Layout>
  );
}
