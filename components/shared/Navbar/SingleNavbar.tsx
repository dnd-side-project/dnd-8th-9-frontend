import Text from "../Text/Text";
import * as S from "./Navbar.styled";

interface IProp {
  text: string;
}

function SingleNavbar({ text }: IProp) {
  return (
    <S.SingleNav>
      <Text size={18} weight={600}>
        {text}
      </Text>
    </S.SingleNav>
  );
}

export default SingleNavbar;
