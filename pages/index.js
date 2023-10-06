import { Fragment } from "react";
import Head from "next/head";

import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../helpers/posts-util";

function HomePage(props){
  return (
    <Fragment>
      <Hero/>
      <Head>
        <title>Welcome to Akeem's Blog</title>
        <meta
          name="description"
          content="I post about programming and web developement."
        />
      </Head>
      <FeaturedPosts posts={props.posts}/>
    </Fragment>
  )
}

export function getStaticProps(){
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    },
  }
}

export default HomePage;