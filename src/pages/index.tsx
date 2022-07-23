import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["hello"]);

  if (isLoading) return <p>Loading...</p>;

  return <div>Hello world {data?.greeting}</div>;
};

export default Home;
