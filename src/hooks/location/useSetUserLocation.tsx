import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { setUserLocation } from "../../api/location";
import { UserLocation } from "../../types/location";

export const useSetUserLocation = (location: UserLocation, userID: string) => {
  const navigate = useNavigate();
  const { mutate, error, data, isLoading } = useMutation({
    mutationFn: () => setUserLocation(location, userID),
    onSuccess: (data) => {
      if (data) {
        return navigate("/");
      }
    },
    // onError: (error: any) => setErrorMessage(error.response.data.message),
  });

  return { mutate, data, error, isLoading };
};

