import { GetServerSidePropsContext } from "next";

export default function Home() {
  return <div>Testing</div>;
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  console.log("getServerSideProps req url: ", ctx.req.url);

  return {
    props: {},
  };
}
