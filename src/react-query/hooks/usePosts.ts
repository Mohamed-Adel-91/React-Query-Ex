import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePosts = (userId: number | undefined) => {
const FetchPosts = () =>
axios
  .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
    params: {
      userId, 
    }
  })
  .then((res) => (res.data))

  return useQuery<Post[], Error>({
    queryKey: userId ? ['users', userId, 'posts'] : ['posts'], // unique cache key for this request
    queryFn: FetchPosts, // function that returns the promise
    staleTime: 1*60*1000, //1m
  })
}

export default usePosts;