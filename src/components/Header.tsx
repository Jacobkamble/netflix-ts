import { FC } from "react";
import { LOGO } from "../utils/constants";

const Header: FC = () => {
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {/* <div className="flex p-2 justify-between">
        <select className="p-2 m-2 bg-gray-900 text-white">
          {SUPPORTED_LANGUAGES.length > 0 &&
            SUPPORTED_LANGUAGES.map(({ identifier, name }) => (
              <option key={identifier} value={identifier}>
                {name}
              </option>
            ))}
        </select>
        <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg">
          GPT Search
        </button>
        <img className="hidden md:block w-12 h-12" alt="usericon" src={""} />
        <button className="font-bold text-white">(Sign Out)</button>
      </div> */}
    </div>
  );
};

export default Header;
