import { useEffect, useRef, useState } from "react";
import io, { Socket } from "socket.io-client";
import React, { createContext, useContext, ReactNode } from "react";
import { SOCKET_API_BASE_URL } from "../constants/api";

import { useGetProfileQuery } from "../redux/services/auth";

export const useSocket = (): any => {
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef<any>(null);

  useEffect(() => {
    const socket = io(SOCKET_API_BASE_URL);

    socket.on("connect", () => {
      console.log("Socket connected");
      setIsConnected(true);
    });

    socket.on("disconnect", (reason) => {
      console.log("Socket disconnected:", reason);
      setIsConnected(false);
    });

    socket.on("connect_error", (error) => {
      console.log("Connection error:", error);
    });

    socketRef.current = socket;
  }, []);

  const emit = (eventName: any, data: any) => {
    if (socketRef.current) {
      socketRef.current.emit(eventName, data);
    }
  };

  return { socket: socketRef.current, isConnected, emit };
};

const SocketContext = createContext(null);

export const SocketProvider = ({ children }: any) => {
  const socket = useSocket();
  const { data: profileApiResponse, ...profileApiResponseDetails } =
    useGetProfileQuery();

  useEffect(() => {
    if (socket && !profileApiResponseDetails.isLoading) {
      socket.emit("join", `customer-${profileApiResponse?.id}`);

      socket.socket?.onAny((eventName: any, ...args: any) => {
        console.log(`Received event: ${eventName}`, args);
      });
    }
  }, [profileApiResponse]);
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export const useSocketContext = () => {
  const context = useContext(SocketContext);

  if (!context) {
    throw new Error("useSocketContext must be used within a SocketProvider");
  }
  return context;
};
