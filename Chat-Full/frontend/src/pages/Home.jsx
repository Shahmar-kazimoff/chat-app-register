// Components
import Sidebar from "../components/Sidebar/Sidebar";
import Main from "../components/Main/Main";
import { useSelector } from "react-redux";

const Home = () => {

  const user = useSelector((state) => state.user)
  return (
    <div className="h-[600px] w-full flex gap-2">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Home;
