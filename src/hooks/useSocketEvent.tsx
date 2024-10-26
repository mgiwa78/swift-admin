import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { api } from "../redux/services/api";
import { useAppDispatch } from "./useAppDispatch";
import { useSocketContext } from "./useSocket";

export const useSocketEvent = (eventName: any, options?: any) => {
  const { socket }: any = useSocketContext();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!socket) return;

    const eventListener = (data: any) => {
      if (options?.toastType) {
        const toastMessage = options?.getMessage
          ? options.getMessage(data)
          : `${eventName} received`;

        switch (options.toastType) {
          case "success":
            toast.success(toastMessage);
            break;
          case "error":
            toast.error(toastMessage);
            break;
          case "info":
            toast.info(toastMessage);
            break;
          default:
            toast(toastMessage);
        }
      }
      // Dynamically invalidate specific cache tags or queries
      if (options?.invalidateTags) {
        const tags = options.invalidateTags(data);
        console.log("Invalidating tags for data:", data);
        tags.forEach((tag: any) => {
          console.log("Invalidating tag:", tag);
          dispatch(api.util.invalidateTags(tag));
        });
      }
      if (options?.action) {
        console.log("first");
        options.action();
      }
    };

    socket.on(`${eventName}`, eventListener);

    return () => {
      socket.off(eventName, eventListener);
    };
  }, [eventName, socket, options, dispatch]);
};
