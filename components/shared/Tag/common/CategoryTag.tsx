import { css, useTheme } from "@emotion/react";
import { TCategory } from "@/types/api/shared";
import Text from "../../Text/Text";
import Tag from "../Tag";

interface IProp {
  category: TCategory;
}

function CategoryTag({ category }: IProp) {
  const { colors } = useTheme();

  return (
    <Tag
      type="square"
      label={category}
      key={category}
      cssProp={css`
        background-color: ${colors.blue[100]};
        padding: 0.4rem 0.8rem;
        border-radius: 0.4rem;
      `}
    >
      <Text weight={500} size={13} color={colors.blue[700]}>
        {category}
      </Text>
    </Tag>
  );
}

export default CategoryTag;
