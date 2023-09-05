import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Trending from "@/components/trending";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <Trending />
    </main>
  );
}
