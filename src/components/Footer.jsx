import { quickLinks, settingMenu } from "../utils/Constants";

const Footer = () => {
  return (
    <div className="bg-[#f2f2f2]">
      <div className="flex py-[15px] px-[30px] border-b border-[#dadce0]">
        <span className="text-[#70767a] text-[15px] leading-none">India</span>
      </div>

      <div className="flex flex-col md:flex-row justify-between py-3 md:py-0 md:px-[15px">
        <div className="flex justify-center">
          {quickLinks.map((menu, idx) => (
            <span
              key={idx}
              className="text-[#70757a] text-[13px] leading-none md:text-[15px] p-[10px] cursor-pointer md:p-[15px]"
            >
              {menu}
            </span>
          ))}
        </div>
        <div className="flex justify-center">
          {settingMenu.map((menu, idx) => (
            <span
              key={idx}
              className="text-[#70757a] text-[13px] leading-none md:text-[15px] p-[10px] cursor-pointer md:p-[15px]"
            >
              {menu}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
