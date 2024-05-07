import React from "react";

const Message = (props) => {
  const messageStyle = props.type === "sent" ? "text-left" : "text-right";
  const contentStyle =
    props.type === "sent"
      ? "bg-gray-300 text-black rounded-bl-none "
      : "bg-lightOrange text-white rounded-br-none";
  const timeStyle = props.type === "received" ? "text-right" : "text-left";

  return (
    <div className={`${messageStyle} mb-3`}>
      <div
        className={`py-2 px-4 mb-1 text-sm inline-block w-auto max-w-sm rounded-xl ${contentStyle}`}
      >
        {props.children}
      </div>
      <p className={`text-[9px] text-gray-500 ${timeStyle}`}>5:12 PM</p>
    </div>
  );
};

export default Message;
