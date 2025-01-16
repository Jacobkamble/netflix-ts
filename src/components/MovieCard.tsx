import React from "react";

interface MovieCardProps {
  posterPath: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img alt="Movie Card" src={"" + ""} />
    </div>
  );
};

export default MovieCard;
