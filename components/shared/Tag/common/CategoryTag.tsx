import { TCategory } from "@/types/api/shared";
import { css, useTheme } from "@emotion/react";
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
        padding: 0.5rem 0.8rem;
      `}
    >
      <Text weight={500} size={12} color={colors.blue[700]}>
        {category}
      </Text>
    </Tag>
  );
}

export default CategoryTag;
