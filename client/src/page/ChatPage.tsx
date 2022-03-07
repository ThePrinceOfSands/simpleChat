import { useEffect } from "react";

import socket from "../helpers/socket";
import { Chat } from "../components/Chat/Chat";
import { useRoom } from "../context/RoomProvider";
import type { IRoom } from "../model/room";

const ChatPage = () => {
  const { onUpdateRoomValue, users, roomId, currentUser, messages } = useRoom();

  useEffect(() => {
    socket.on("ROOM:UPDATE_USERS", (users: Array<IRoom["user"]>) => onUpdateRoomValue({ users }));
  }, []);

  return <Chat users={users} roomId={roomId} currentUser={currentUser} messages={messages} />;
};

export default ChatPage;
