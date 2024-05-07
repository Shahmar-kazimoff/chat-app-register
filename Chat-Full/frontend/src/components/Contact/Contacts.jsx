import SingleContact from "./SingleContact";

const Contacts = () => {
  return (
    <div className="bg-[#F6F6F6] py-5 rounded-2xl flex-1 h-full overflow-y-scroll">
      <SingleContact />
      <SingleContact />
      <SingleContact />
      <SingleContact />
    </div>
  );
};

export default Contacts;
