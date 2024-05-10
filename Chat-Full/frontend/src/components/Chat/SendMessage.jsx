// Icons
import Clip from "../../icons/Clip";
import Mic from "../../icons/Mic";
import Smile from "../../icons/Smile";
import Send from "../../icons/Send";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../slices/messages.slice";
const SendMessage = () => {

  const dispatch = useDispatch();
  const messageRef = useRef();

  const selectedConversation = useSelector(state => state.conversations.selectedConversation)

  const sendMessage = async () => {
    const message = messageRef.current.value.trim();
    try {
      const response = await fetch(`/api/messages/${selectedConversation._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        });

      const data = await response.json()

      if (!response.ok) {
        console.log("Failed to send message");
      }

      if (response.ok) {
        dispatch(addMessage(data))
      }

    } catch (error) {
      console.log(`Fetch error ${error}`);
    }
  }
  return (
    <div className="h-12 flex gap-2">
      <div className="flex-1 bg-[#f6f6f6] rounded-xl relative overflow-hidden">
        <input
          ref={messageRef}
          type="text"
          className="absolute w-full h-full top-0 left-0 pl-12 text-xs focus:outline-none rounded-e-xl"
          placeholder="Write messages..."
        />
        <button className="absolute top-1/2 -translate-y-1/2 left-5">
          <Clip color="black" className="h-4 w-4" />
        </button>
        <button className="absolute top-1/2 -translate-y-1/2 right-5">
          <Smile color="black" className="h-4 w-4" />
        </button>
      </div>
      <button className="bg-[#f6f6f6] h-12 w-12 flex items-center justify-center rounded-xl">
        <Mic className="h-5 w-5" color="black" />
      </button>
      <button onClick={sendMessage} className="bg-lightOrange h-12 w-12 flex items-center justify-center rounded-xl">
        <Send className="h-5 w-5" color="white" />
      </button>
    </div>
  );
};

export default SendMessage;
