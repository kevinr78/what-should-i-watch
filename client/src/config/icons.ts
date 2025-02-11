import HomeSideBarIcon from "@assets/home-sidebar-icon.svg";
import MenuSideBarIcon from "@assets/menu-sidebar-icon.svg";
import MovieSideBarIcon from "@assets/movie-sidebar-icon.png";
import TVShowSideBarIcon from "@assets/tvShow-sidebar-icon.png";

type IconType = {
  Home: string;
  Menu: string;
  Movie: string;
  "TV Show": string;
};
export const icons: IconType = {
  Home: HomeSideBarIcon,
  Menu: MenuSideBarIcon,
  Movie: MovieSideBarIcon,
  "TV Show": TVShowSideBarIcon,
};

export function getIcon(name: keyof IconType): string {
  return icons[name];
}
