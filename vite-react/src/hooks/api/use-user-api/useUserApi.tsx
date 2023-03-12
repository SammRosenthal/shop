import { useMutation, useQuery } from "react-query";
import { queryClient } from "../../../main";
import { fetcher } from "../fetcher";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
}

export async function getUser() {
  return fetcher<User>("/user");
}

export function login() {
  return fetcher<User>("/login", { method: "POST" });
}

export function logOut() {
  return fetcher("/logout", { method: "POST" });
}

// TODO
// implement some type of run time type checking
// zod or try something else new
export function useUserApi() {
  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const logoutMutation = useMutation({
    mutationFn: logOut,
    onSuccess: (res) => {
      userQuery.refetch()
      queryClient.setQueryData("user", res);
    },
  });

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: () => userQuery.refetch(),
  });

  return {
    userQuery,
    logoutMutation,
    loginMutation,
  };
}
