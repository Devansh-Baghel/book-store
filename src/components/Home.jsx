import bibliophile from "../assets/undraw_bibliophile.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex justify-center items-center gap-28 mx-40 mt-10">
      <div className="flex flex-col gap-5 pl-10">
        <h1 className="text-3xl font-main font-medium">
          Embark on a Literary Journey <br /> Explore Worlds, Discover Stories
          at Our Bookstore!
        </h1>
        <Link to={"/shop"} className="">
          <button className="bg-yellow text-whi px-8 py-1 rounded-lg text-xl shadow-lg">
            Start Reading
          </button>
        </Link>
      </div>
      <img src={bibliophile} alt="" className="w-96" />
    </div>
  );
}

export default Home;
