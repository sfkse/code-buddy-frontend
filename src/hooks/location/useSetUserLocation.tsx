import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { setUserLocation } from "../../api/location";
import { UserLocation } from "../../types/location";
import { setUserRegistered } from "../../api/auth";
import { useFetchAuthUser } from "../user/useFetchAuthUser";

type SetUserLocationProps = {
  location: UserLocation;
};
export const useSetUserLocation = () => {
  const { authUser } = useFetchAuthUser();

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, error, data, isPending } = useMutation({
    mutationFn: (data: SetUserLocationProps) =>
      setUserLocation(data.location, authUser.idusers),
    onSuccess: async (data) => {
      if (data) {
        await setUserRegistered(authUser.idUser);
        queryClient.invalidateQueries({ queryKey: ["authUser"] });
        return navigate("/");
      }
    },
  });
  if (error instanceof Error) error;
  console.log(authUser);
  return { mutate, data, setLocationError: error, isPending };
};

