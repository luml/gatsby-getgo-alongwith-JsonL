import React from 'react';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import Hero from '../components/hero';
import Insta from '../components/insta';
import PostPreview from '../components/post-preview';
// import FaunaData from '../hooks/use-fauna';


export default () => {
  const posts = usePosts();
  // const faunas = FaunaData()
  return (
    <>
      <Hero />
      <Layout>
        <h2>Read my blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <Insta />
        {/* <ul>
        {faunas.map(product => (
          <li>{product.title} - {product.description}</li>
        ))}
        </ul> */}
      </Layout>
    </>
  );
};
