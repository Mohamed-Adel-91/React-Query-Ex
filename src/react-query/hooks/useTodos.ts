import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  const FetchTodos = () => 
  axios
  .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.data);

    return useQuery<Todo[], Error>({
      queryKey: ["todos"],
      queryFn: FetchTodos,
      staleTime: 10*1000, //10s
  });
}

export default useTodos ;