import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { setUserLocation } from "../../api/location";
import { UserLocation } from "../../types/location";
import { setUserRegistered } from "../../api/auth";

type SetUserLocationProps = {
  location: UserLocation;
  userID: string;
};
export const useSetUserLocation = (idUser: string) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, error, data, isPending } = useMutation({
    mutationFn: (data: SetUserLocationProps) =>
      setUserLocation(data.location, data.userID),
    onSuccess: async (data) => {
      if (data) {
        await setUserRegistered(idUser);
        queryClient.invalidateQueries({ queryKey: ["authUser"] });
        return navigate("/");
      }
    },
  });
  if (error instanceof Error) error;

  return { mutate, data, setLocationError: error, isPending };
};

