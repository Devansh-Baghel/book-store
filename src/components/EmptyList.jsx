import { Link } from "react-router-dom";

function EmptyList(props) {
  return (
    <div className="flex justify-center items-center md:mt-10 mt-32 sm:mt-20 flex-col gap-6 text-lg">
      <img src={props.src} alt={`illustration of empty ${props.page}`} className="w-96" />
      <h1 className="font-main font-medium sm:text-2xl text-slate-950">
        Your {props.page} is empty
      </h1>
      <Link to={"/shop"}>
        <button className="bg-main_yellow px-8 py-1 rounded-lg sm:text-xl shadow-lg text-sm">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}

export default EmptyList;
