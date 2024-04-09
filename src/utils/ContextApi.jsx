import { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = (props) => {
  const [imgSearch, setImgSearch] = useState(false);

  return (
    <Context.Provider value={{ imgSearch, setImgSearch }}>
      {props.children}
    </Context.Provider>
  );
};

// AIzaSyBdPB6-7bt7dQlRBbNwUi3jA-pg-up7ME8
// AIzaSyBdPB6-7bt7dQlRBbNwUi3jA-pg-up7ME8
// 7465378fe6ad64685
