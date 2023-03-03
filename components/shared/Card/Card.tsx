import Link from "next/link";
import { IImage } from "@/api/types/shared";
import { IStoreItem } from "@/api/types/storeList";
import { IRandomMenuItem } from "@/api/types/randomMenuList";
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
  data: IStoreItem | IRandomMenuItem;
  type: "menu" | "store";
}

function Card({
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
  data,
  type,
}: IProp) {
  return (
    <Link href={`/store/${data.id}`}>
      <S.Container
        dir={dir}
        gap={gap}
        imgWidth={imgWidth}
        imgHeight={imgHeight}
        className={className}
      >
        <S.ImageWrap>
          <CardImage
            type={type}
            bookmarkData={data}
            data={image}
            rank={rank}
            canDelivery={canDelivery}
            canPickup={canPickup}
            isEditMode={isEditMode}
          />
        </S.ImageWrap>
        {children}
      </S.Container>
    </Link>
  );
}

export default Card;
