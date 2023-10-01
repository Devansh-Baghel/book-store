import { Link } from "react-router-dom";

function EmptyList(props) {
  return (
    <div className="flex justify-center items-center mt-10 flex-col gap-6">
      <img src={props.src} alt={`illustration of empty ${props.page}`} className="w-96" />
      <h1 className="font-main font-medium text-2xl text-slate-950">
        Your {props.page} is empty
      </h1>
      <Link to={"/shop"}>
        <button className="bg-yellow text-whi px-8 py-1 rounded-lg text-xl shadow-lg">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}

export default EmptyList;
