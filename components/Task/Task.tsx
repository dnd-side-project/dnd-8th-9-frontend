import { useTheme } from "@emotion/react";
import { useQuery } from "@tanstack/react-query";

import useBearStore from "@/store/store";
import { fetchUser, fetchTodos } from "@/api/api";
import Paragraph from "./Task.styled";

export default function Task() {
  const { colors } = useTheme();
  const { bears, increase, decrease } = useBearStore(state => state);
  const {
    isLoading: isLoadingUsers,
    data: users,
    isError: isErrorUsers,
  } = useQuery(["users"], fetchUser);
  const {
    isLoading: isLoadingTodos,
    data: todos,
    isError: isErrorTodos,
  } = useQuery(["todos"], fetchTodos);

  if (isLoadingUsers || isLoadingTodos) return <p>Loading...</p>;
  if (isErrorUsers || isErrorTodos) return <p>Error</p>;

  return (
    <>
      <Paragraph hoverColor={colors.secondary}>
        I am a component made with Emotion (Styled Components)
      </Paragraph>
      <div>
        <p>Bears: {bears}</p>
        <button type="button" onClick={increase}>
          +
        </button>
        <button type="button" onClick={decrease}>
          -
        </button>
      </div>
      <div>
        {users.map(user => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
      <div>
        {todos.map(todo => (
          <p key={todo.id}>{todo.todo}</p>
        ))}
      </div>
    </>
  );
}
