import * as I from "@/assets/icons/index";

interface IIcon {
  [key: string]: React.ReactNode;
}

export const ICONS: IIcon = {
  arrowDown: <I.ArrowDown />,
  arrowLeft: <I.ArrowLeft />,
  arrowRight: <I.ArrowRight />,
  arrowUp: <I.ArrowUp />,
  bookmark: <I.Bookmark />,
  check: <I.Check />,
  close: <I.Close />,
  delivery: <I.Delivery />,
  ellipsis: <I.Ellipsis />,
  heart: <I.Heart />,
  homeNav: <I.HomeNav />,
  home: <I.Home />,
  info: <I.Info />,
  kakao: <I.Kakao />,
  instagram: <I.Instagram />,
  logo: <I.Logo />,
  like: <I.Like />,
  map: <I.Map />,
  clap: <I.Clap />,
  speaker: <I.Speaker />,
  tasty: <I.Tasty />,
  thinking: <I.Thinking />,
  warning: <I.Warning />,
  pencil: <I.Pencil />,
  profileSelected: <I.ProfileSelected />,
  profile: <I.Profile />,
  saveBookmark: <I.SaveBookmark />,
  search: <I.Search />,
  share: <I.Share />,
  sort: <I.Sort />,
  store: <I.Store />,
  user: <I.User />,
};
