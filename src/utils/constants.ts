import MusicNoteIcon from "@mui/icons-material/MusicNote";
import JavascriptIcon from "@mui/icons-material/Javascript";
import CodeIcon from "@mui/icons-material/Code";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SchoolIcon from "@mui/icons-material/School";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import React from "react";

export interface CategoryType {
  title: string;
  icon: React.ComponentType;
}

export const videoCategories: CategoryType[] = [
  {
    title: "Music",
    icon: MusicNoteIcon,
  },
  {
    title: "Education",
    icon: SchoolIcon,
  },
  {
    title: "Games",
    icon: SportsEsportsIcon,
  },
  {
    title: "Podcast",
    icon: PodcastsIcon,
  },
  {
    title: "Movies",
    icon: LocalMoviesIcon,
  },
  {
    title: "Programming",
    icon: CodeIcon,
  },
  {
    title: "JavaScript",
    icon: JavascriptIcon,
  },
  {
    title: "Live",
    icon: LiveTvIcon,
  },
  { title: "Sport", icon: SportsBasketballIcon },
  { title: "Fashion", icon: CheckroomIcon },
  { title: "Beauty", icon: FaceRetouchingNaturalIcon },
  { title: "Comedy", icon: TheaterComedyIcon },
  { title: "Gym", icon: FitnessCenterIcon },
  { title: "Crypto", icon: CurrencyBitcoinIcon },
];
