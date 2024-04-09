import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import Logo from "../assets/google-logo.png";
import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";
import { Context } from "../utils/ContextApi";
import { menu } from "../utils/Constants";

const SearchResultHeader = () => {
  const [selectedMenu, setSelectedMenu] = useState("All");
  const { setImgSearch } = useContext(Context);

  useEffect(() => {
    return () => {
      setImgSearch(false);
    };
  });
  const clickHandler = (ele) => {
    let isTypeImage = ele.name === "Images";
    setSelectedMenu(ele.name);
    setImgSearch(isTypeImage ? true : false);
  };

  return (
    <div className="p-[15px] pb-0 md:pt-7 border-b  border-[#dadce0] flex md:block flex-col items-center sticky top-0 bg-white">
      <div className="flex items-center justify-center w-full">
        <div className="flex items-center grow">
          <Link to="/">
            <img src={Logo} alt="" className="hidden md:block w-[92px] mr-10" />
          </Link>

          <SearchInput from="search" />
        </div>
        <div className="hidden md:block">
          <ProfileIcon />
        </div>
      </div>

      <div className="flex ml-[-12px] mt-3">
        {menu.map((ele, idx) => (
          <span
            key={idx}
            className={`flex item-center p-3 relative text-[#5f6368] cursor-pointer ${
              selectedMenu === ele.name ? "text-[#1a73e8]" : ""
            }`}
            onClick={() => {
              clickHandler(ele);
            }}
          >
            <span className="hidden md:block mr-2">{ele.icon}</span>
            <span className="text-sm ">{ele.name}</span>
            {selectedMenu === ele.name && (
              <span className="h-[3px] w-[calc(100%-20px)] bg-[#1a73e8] bottom-0 absolute left-[10px]"></span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SearchResultHeader;
