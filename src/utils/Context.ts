import { createContext, Dispatch, SetStateAction } from "react";
import { VideoItemType } from "../components/videoContent/VideoCard";

export interface InitialContext {
  videos: VideoItemType[] | null;
  setVideos: Dispatch<SetStateAction<VideoItemType[] | null>>;
  selectedCategory: string;
  setSelectedCategory: (str: string) => void;
}

const initialContextValue: InitialContext = {
  videos: null,
  setVideos: () => {},
  selectedCategory: "Music",
  setSelectedCategory: () => {},
};

const Context = createContext<InitialContext>(initialContextValue);

export default Context;
