import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="flex h-[100vh] flex-col">
      <HomeHeader />
      <main className="grow flex ">
        <div className="w-full px-5 flex flex-col items-center justify-center">
          <img src={Logo} alt="logo" className="w-[172px] md:w-[272px] mb-8" />
          <SearchInput />
          <div className="flex gap-2 text-[#70757a] mt-8">
            <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#dadce0] hover:border-[#c6c6c6] hover:shadow-c2">
              Google Search
            </button>
            <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#dadce0] hover:border-[#c6c6c6] hover:shadow-c2">
              I am Feeling Lucky
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
