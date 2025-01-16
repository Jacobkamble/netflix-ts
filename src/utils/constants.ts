interface SUPPORTED_LANGUAGES_INTERFACE {
  identifier: string;
  name: string;
}

// interface API_OPTIONS_INTERFACE {
//   method: string;
//   headers: {
//     accept: string;
//     Authorization: string;
//   };
// }

export const LOGO: string =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR: string =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

// export const API_OPTIONS: API_OPTIONS_INTERFACE = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
//   },
// };

export const IMG_CDN_URL: string = "https://image.tmdb.org/t/p/w500";

export const BG_URL: string =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES: SUPPORTED_LANGUAGES_INTERFACE[] = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

// export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;