import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Dashboard: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (router.isReady) {
      const { username } = router.query as { username: string };
      if (username) {
        setUsername(username);
      } else {
        router.push("/auth/login");
      }
    }
  }, [router.isReady, router.query]);

  if (!username) return <p>Loading...</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {username}!</p>
    </div>
  );
};

export default Dashboard;
