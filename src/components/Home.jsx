import bibliophile from "../assets/undraw_bibliophile.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex justify-center items-center gap-28 xl:mx-40 md:mx-20 mx-8 md:mt-20 mt-48">
      <div className="flex flex-col gap-5 md:pl-10 ">
        <h1 className="xl:text-3xl text-2xl font-main font-medium">
          Embark on a Literary Journey <br /> Explore Worlds, Discover Stories
          at Our Bookstore!
        </h1>
        <Link to={"/shop"} className="">
          <button className="bg-main_yellow text-whi px-8 py-1 rounded-lg text-xl shadow-lg">
            Start Reading
          </button>
        </Link>
      </div>
      <img src={bibliophile} alt="illustration of a woman reading" className="xl:w-96 hidden md:block md:w-[30vw]" />
    </div>
  );
}

export default Home;
