import Header from "./Header";
// import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
// import usePopularMovies from "../hooks/usePopularMovies";
// import GptSearch from "./GptSearch";
// import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = true;

  //   useNowPlayingMovies();
  //   usePopularMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        ""
      ) : (
        // <GptSearch />
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;
