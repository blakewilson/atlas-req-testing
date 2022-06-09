import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return <div>Testing</div>;
}

export async function getServerSideProps(ctx) {
  console.log("getServerSideProps req url: ", ctx.req.url);

  return {
    props: {},
  };
}
