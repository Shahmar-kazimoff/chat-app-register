// Components
import Message from "./Message";

import { useEffect, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setMessages } from "../../slices/messages.slice";
const Messages = () => {
  const selectedConversation = useSelector((state) => state.conversations.selectedConversation)

  const messages = useSelector((state) => state.messages.messages);
  const dispatch = useDispatch();

  const getAllMessages = async () => {
    try {
      const response = await fetch(`/api/messages/${selectedConversation._id}`);
      const data = await response.json();

      if (!response.ok) {
        console.log('Failed to get all messages');
      }

      if (response.ok) {
        dispatch(setMessages(data));
      }

    } catch (error) {
      console.log(`Fetch error: ${error}`);
    }
  };

  useEffect(() => {
    getAllMessages()
  }, []);

  const scrollElement = useRef();

  useEffect(() => {
    scrollElement?.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages])

  return (
    <div className="bg-[#f6f6f6] p-5 pb-0 rounded-2xl flex-1 overflow-scroll">
      {messages?.map(message => {
        return <Message key={message._id} type={
          message.receiverId === selectedConversation._id
            ? "sent"
            : "received"}
        >
          {message.message}
        </Message>
      })}
      <div ref={scrollElement}></div>
    </div>
  );
};

export default Messages;
