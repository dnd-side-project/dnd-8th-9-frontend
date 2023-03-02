import { IImage } from "@/api/types/shared";
import CardImage from "./CardImage";
import * as S from "./Card.styled";

interface IProp {
  isEditMode?: boolean;
  imgWidth: number;
  imgHeight: number;
  gap: number;
  dir: "row" | "col";
  image: string | IImage[];
  rank?: number;
  className?: string;
  children: React.ReactNode;
  canDelivery?: boolean;
  canPickup?: boolean;
}

function DangdoCard({
  image,
  dir,
  gap,
  imgWidth,
  imgHeight,
  isEditMode = false,
  rank = 0,
  className,
  children,
  canDelivery = false,
  canPickup = false,
}: IProp) {
  return (
    <S.Container
      dir={dir}
      gap={gap}
      imgWidth={imgWidth}
      imgHeight={imgHeight}
      className={className}
    >
      <S.ImageWrap>
        <CardImage
          data={image}
          rank={rank}
          canDelivery={canDelivery}
          canPickup={canPickup}
          isEditMode={isEditMode}
        />
      </S.ImageWrap>
      {children}
    </S.Container>
  );
}

export default DangdoCard;
