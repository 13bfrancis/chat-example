import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();
  const { data, isLoading } = trpc.useQuery(["hello"]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      Hello {sessionData?.user?.name ?? "not logged in"}
      {sessionData?.user ? (
        <button onClick={() => signOut()}>Sign Out</button>
      ) : (
        <button onClick={() => signIn()}>Sign In</button>
      )}
    </div>
  );
};

export default Home;
