// Components
import Message from "./Message";

const Messages = () => {
  return (
    <div className="bg-[#f6f6f6] p-5 pb-0 rounded-2xl flex-1 overflow-scroll">
      <Message type="sent">This is a message</Message>
      <Message type="received">This is a message</Message>
      <Message type="sent">This is a message</Message>
    </div>
  );
};

export default Messages;
