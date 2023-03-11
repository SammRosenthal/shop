import { useQuery } from "react-query";
import { fetcher } from "./fetcher";

export async function getUser() {
  return fetcher<{ message: string }>("ping");
}

export function useUserApi() {
  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });
  // const userMutation = useMutation('user', updateUser);

  return {
    userQuery,
    // userMutation,
  };
}
