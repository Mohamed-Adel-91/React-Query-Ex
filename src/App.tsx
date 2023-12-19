import "./App.css";
import PostList from "./react-query/PostList";
import TodoList from "./react-query/TodoList";

function App() {
    return (
        <>
            <h1>TodoList</h1>
            <TodoList />
            <h1>PostList</h1>
            <PostList />
        </>
    );
}

export default App;
