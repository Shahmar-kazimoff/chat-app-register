// Components
import Contact from "../Contact/Contact";
import Chat from "../Chat/Chat";

const Main = () => {
  return (
    <div className="flex-1 grid grid-cols-12 gap-2">
      <Contact />
      <Chat />
    </div>
  );
};

export default Main;
