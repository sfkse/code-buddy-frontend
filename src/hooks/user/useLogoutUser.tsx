import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../api/auth";

import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLogoutUser = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, error, data, isPending } = useMutation({
    mutationFn: logoutUser,
    onSuccess: async () => {
      queryClient.removeQueries({ queryKey: ["authUser"] });
      queryClient.removeQueries({ queryKey: ["allUserNotes"] });
      queryClient.removeQueries({ queryKey: ["allUsers"] });
      localStorage.clear();
      return navigate("/");
    },
  });

  return { mutate, data, error, isPending };
};

