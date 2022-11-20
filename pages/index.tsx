import Head from "next/head";
import next, { NextPage } from "next";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { AboutMe } from "../components/AboutMe";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import axios from "axios";
import { Projects } from "../components/Projects";

export const getServerSideProps: GetServerSideProps = async (context) => {
  let data;
  if (process.env.NODE_ENV == "production") {
    data = await axios.get("http://grape-app:8080/getGitRepos");
  } else {
    data = await axios.get("http://localhost:8080/getGitRepos");
  }
  return {
    props: { gitData: data.data },
  };
};

const Home: NextPage<InferGetServerSidePropsType<GetServerSideProps>> = (
  props
) => {
  return (
    <div className="scroll-smooth">
      <Header />
      <Hero />
      <AboutMe />
      <Projects {...props.gitData} />
      <Footer />
    </div>
  );
};

export default Home;
