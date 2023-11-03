import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { joinSingleEvent } from "../../api/event";

const useJoinEvent = () => {
  const queryClient = useQueryClient();
  const { mutate, error, data, isLoading } = useMutation({
    mutationFn: (data: object) => joinSingleEvent(data.idEvent, data.idUser),
    onSuccess: () => {},
  });

  return { mutate, data, error, isLoading };
};

export default useJoinEvent;

