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
  delivery: <I.Delivery />,
  ellipsis: <I.Ellipsis />,
  heart: <I.Heart />,
  home: <I.Home />,
  info: <I.Info />,
  instagram: <I.Instagram />,
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
  share: <I.Share />,
  store: <I.Store />,
  kakao: <i.Kakao />,
};
