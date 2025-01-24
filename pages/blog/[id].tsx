import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "../../services/api";

interface Post {
  title: string;
  content: string;
}

const BlogPost: React.FC = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };
  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchPost = async () => {
      try {
        const response = await api.get<Post>(`/posts/${id}`);
        setPost(response.data);
      } catch (error: any) {
        setError(error.response?.data?.error || "Failed to load post");
      }
    };

    fetchPost();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};
