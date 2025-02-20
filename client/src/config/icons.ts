import HomeSideBarIcon from "@assets/home-sidebar-icon.png";
import MenuSideBarIcon from "@assets/menu-sidebar-icon.svg";
import MovieSideBarIcon from "@assets/movie-sidebar-icon.png";
import TVShowSideBarIcon from "@assets/tvShow-sidebar-icon.png";
import ProfileSideBarIcon from "@assets/user-sidebar-icon.png";
import LogoutSideBarIcon from "@assets/logout-sidebar-icon.png";
import FavouriteSideBarIcon from "@assets/favourite-sidebar-icon.png";
import TrendingSideBarIcon from "@assets/trending-sidebar-icon.png";
import PreviousArrowIcon from "@assets/less-than-sidebar-icon.png";
import NextArrowIcon from "@assets/greater-than-sidenbar-icon.png";
import MoreIcon from "@assets/more-icon.png";
import FilterIcon from "@assets/filter-icon.png";
import SortIcon from "@assets/sort-icon.png";
export type IconType = {
  Home: string;
  Menu: string;
  Movies: string;
  "TV Shows": string;
  Profile: string;
  Logout: string;
  Favourites: string;
  Trending: string;
  Previous: string;
  Next: string;
  More: string;
  Filter: string;
  Sort: string;
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
  Previous: PreviousArrowIcon,
  Next: NextArrowIcon,
  More: MoreIcon,
  Filter: FilterIcon,
  Sort: SortIcon,
};

export function getIcon(name: keyof IconType): string {
  return icons[name];
}
