import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { setUserLocation } from "../../api/location";
import { UserLocation } from "../../types/location";
import { saveCredentials } from "../../utils/userUtils";

export const useSetUserLocation = (
  location: UserLocation,
  userID: string,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  const navigate = useNavigate();

  const { mutate, error, data, isLoading } = useMutation({
    mutationFn: () => setUserLocation(location, userID),
    onSuccess: (data) => {
      if (data) {
        saveCredentials(userID, true);
        return navigate("/");
      }
    },
    onError: (error: any) => setErrorMessage(error.response.data.message),
  });

  return { mutate, data, error, isLoading };
};

