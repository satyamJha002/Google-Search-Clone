import { TbGridDots } from "react-icons/tb";

import Profile from "../assets/profile-200x200.jpg";
import ProfileRing from "../assets/profile-ring.svg";

const ProfileIcon = () => {
  return (
    <div className="flex gap-2">
      <span className="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.5]">
        <TbGridDots size={24} color="#5f6368" />
      </span>
      <span className="w-8 h-8 flex items-center justify-center rounded-full">
        <img src={ProfileRing} alt="profile" className="absolute" />
        <span className="h-8 w-8 rounded-full overflow-hidden">
          <img
            src={Profile}
            alt="profile"
            className="w-full h-full object-cover rounded-full"
          />
        </span>
      </span>
    </div>
  );
};

export default ProfileIcon;
