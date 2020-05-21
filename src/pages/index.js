import React from 'react';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import Hero from '../components/hero';
import Insta from '../components/insta';
import PostPreview from '../components/post-preview';
import FaunaData from '../hooks/use-fauna';


export default () => {
  const posts = usePosts();
  // const faunas = FaunaData()
  // console.log(faunas)
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
        {faunas.map(todo => (
          <li>{todo.title} - {todo.completed}</li>
        ))}
        </ul> */}
      </Layout>
    </>
  );
};
