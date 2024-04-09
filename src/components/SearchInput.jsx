import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {
  const { query } = useParams();
  const [searchInput, setSearchInput] = useState(query || "");
  const navigate = useNavigate();

  const searhInputHandler = (e) => {
    if (e.key === "Enter" && searchInput.length > 0) {
      navigate(`/${searchInput}/${1}`);
    }
  };

  return (
    <div
      id="searchBox"
      className="h-[46px] w-[450px] flex items-center gap-3 px-4 border border-[#dadce0] rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0"
    >
      <AiOutlineSearch size={20} color="#5f6368" />
      <input
        type="text"
        className="grow text-black/[0.87] outline-0"
        placeholder="Search Google or type a URL"
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyUp={searhInputHandler}
        value={searchInput}
        autoFocus
      />
      <div className="flex items-center gap-3">
        {searchInput && (
          <IoMdClose
            size={20}
            color="#5f6368"
            className="cursor-pointer"
            onClick={() => setSearchInput("")}
          />
        )}
        <img src={MicIcon} alt="" className="w-6 h-6 cursor-pointer" />
        <img src={ImageIcon} alt="" className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchInput;
