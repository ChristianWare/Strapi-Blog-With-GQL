import Link from "next/link";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import Head from "next/head";
import { getAllPosts } from "../graphql/queries";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <Head>
        <title>My Blog</title>
        <meta name='description' content='My Blog' />
      </Head>
      <h1>Welcome to the CoderBlog</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
        reiciendis laborum quibusdam minima voluptas rem ut consequatur
        perspiciatis ad. Neque deleniti dolores esse eum nesciunt ex, atque eos
        debitis cumque.
      </p>
      <br />
      <h2>All Posts</h2>
      <br />
      {posts.map((val, i) => (
        <Link href={val.attributes.urlSlug} key={i}>
          <a>
            <div className='card'>
              <h3>{val.attributes.title}</h3>
              <p>{val.attributes.description}</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}

// With getServerSideProps, you don't have to worry about redeploying your app on vercel, since the server will automatically retrieve your new data whenever you add a new blog to the CMS. however this will take some time for the files to load.

// With getStaticProps, you have to redeploy your app everytime you add a new blog t,o the CMS. However, everything will be statically generated, which will load faster.

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: getAllPosts,
  });

  return {
    props: {
      posts: data.blogPosts.data,
    },
  };
}
