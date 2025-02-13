import HomeSideBarIcon from "@assets/home-sidebar-icon.png";
import MenuSideBarIcon from "@assets/menu-sidebar-icon.svg";
import MovieSideBarIcon from "@assets/movie-sidebar-icon.png";
import TVShowSideBarIcon from "@assets/tvShow-sidebar-icon.png";
import ProfileSideBarIcon from "@assets/user-sidebar-icon.png";
import LogoutSideBarIcon from "@assets/logout-sidebar-icon.png";
import FavouriteSideBarIcon from "@assets/favourite-sidebar-icon.png";
import TrendingSideBarIcon from "@assets/trending-sidebar-icon.png";

type IconType = {
  Home: string;
  Menu: string;
  Movies: string;
  "TV Shows": string;
  Profile: string;
  Logout: string;
  Favourites: string;
  Trending: string;
};
export const icons: IconType = {
  Home: HomeSideBarIcon,
  Menu: MenuSideBarIcon,
  Movies: MovieSideBarIcon,
  "TV Shows": TVShowSideBarIcon,
  Profile: ProfileSideBarIcon,
  Logout: LogoutSideBarIcon,
  Favourites: FavouriteSideBarIcon,
  Trending: TrendingSideBarIcon,
};

export function getIcon(name: keyof IconType): string {
  return icons[name];
}
