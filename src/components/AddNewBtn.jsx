import { AiOutlinePlus } from "react-icons/ai";

const AddNewBtn = () => {
  return (
    <button className=" flex gap-2 items-center">
      <p className=" text-sm">Add new </p>
      <div className=" p-1 rounded bg-slate-900 w-fit">
        <AiOutlinePlus className=" text-[10px] text-slate-50" />
      </div>
    </button>
  );
};

export default AddNewBtn;
