// server side rendering
import List from '../components/list';
import { MOCK_API } from '../config/constants';

// Demo 1 
// Note: .env, .env.development, and .env.production files should be included in your repository as they define defaults. 
// .env*.local should be added to .gitignore, as those files are intended to be ignored. .env.local is where secrets can be stored.

export default function ServerSideRendered() {
  return (
    <>
      <h1>I am sample example rewrite page</h1>
    </>
  );
}

// export async function getServerSideProps() {
//   console.log(process.env.NEXT_PUBLIC_API_HOST)
//   console.log(process.env.API_HOST)
//   const res = await fetch(MOCK_API);
//   const data = await res.json();

//   return {
//     props: {
//       data, // will be passed to the page component as props
//     },
//   };
// }
