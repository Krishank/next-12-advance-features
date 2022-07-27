// server side rendering
import getConfig from 'next/config'
import List from '../components/list';
import { MOCK_API } from '../config/constants';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
// Demo 1 
// Note: .env, .env.development, and .env.production files should be included in your repository as they define defaults. 
// .env*.local should be added to .gitignore, as those files are intended to be ignored. .env.local is where secrets can be stored.

export default function ServerSideRendered({ data }) {
  // Will only be available on the server-side
  console.log(`serverRuntimeConfig ${JSON.stringify(serverRuntimeConfig)}`)
  // Will be available on both server-side and client-side
  console.log(`publicRuntimeConfig ${JSON.stringify(publicRuntimeConfig)}`)

  return (
    <>
      <h2>SSR - Random countries list</h2>
      <List data={data}/>
      <p>{`I am API_HOST ${process.env.API_HOST}`}</p> 
      <p>{`I am NEXT_PUBLIC_API_HOST ${process.env.NEXT_PUBLIC_API_HOST}`}</p>
      <p>{`I am customeKey ${process.env.customKey}`}</p>
    </>
  );
}

export async function getServerSideProps() {
  console.log(process.env.NEXT_PUBLIC_API_HOST)
  console.log(process.env.API_HOST)
  const res = await fetch(MOCK_API);
  const data = await res.json();

  return {
    props: {
      data, // will be passed to the page component as props
    },
  };
}
