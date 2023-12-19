import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePosts = () => {
const FetchPosts = () =>
axios
  .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  .then((res) => (res.data))

  return useQuery<Post[], Error>({
    queryKey: ['posts'], // unique cache key for this request
    queryFn: FetchPosts, // function that returns the promise
    staleTime: 1*60*1000, //1m
  })
}

export default usePosts;