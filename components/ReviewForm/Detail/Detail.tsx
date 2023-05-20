import { useRef } from "react";
import Image from "next/image";
import { useTheme } from "@emotion/react";
import useReviewStore from "@/store/review";
import { Delete, ImagePlaceholder } from "@/assets/icons";
import Button from "@/components/shared/Button/Button";
import Dangdo from "@/components/shared/Dangdo/Dangdo";
import Text from "@/components/shared/Text/Text";
import * as S from "./Detail.styled";

const reviewOptions = [
  "맛있어요",
  "가성비가 좋아요",
  "친절해요",
  "선물하기 좋아요",
  "응답이 빨라요",
];

export default function Detail() {
  const { colors } = useTheme();
  const { reviewState, updateReviewState } = useReviewStore();
  const { menuImage, menuName, sizeOption, dangdo, goodPoint, content, reorder, files } =
    reviewState;

  const imageRef = useRef<HTMLInputElement>(null);

  const handleSelectReviewOption = (option: string) => {
    updateReviewState("goodPoint", option);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateReviewState("content", e.target.value);
  };

  const handleAddImage = () => {
    if (!imageRef || !imageRef.current || !imageRef.current.files) return;
    const currentFile = imageRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(currentFile);
    reader.onloadend = () => {
      const newFile = {
        file: currentFile,
        url: reader.result as string,
      };
      updateReviewState("files", [...files, newFile]);
    };
  };

  const handleDeleteImage = (targetImageUrl: string) => {
    const filterFiles = files.filter(file => file.url !== targetImageUrl);
    updateReviewState("files", filterFiles);
  };

  const handleReorderCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateReviewState("reorder", e.target.checked);
  };

  return (
    <S.Container>
      <S.MenuCard>
        <S.ImageWrap>
          <Image src={menuImage} alt="menu" fill />
        </S.ImageWrap>
        <S.InfoWrap>
          <Text weight={600} size={16}>
            {menuName}
          </Text>
          <Text weight={500} size={13} color={colors.grey[700]}>
            사이즈: {sizeOption}
          </Text>
          <S.DangdoComment>
            <Dangdo dangdo={dangdo} size="m" />
            <Text weight={600} size={13} color={colors.blue[800]}>
              당도가 훌륭해요!
            </Text>
          </S.DangdoComment>
        </S.InfoWrap>
      </S.MenuCard>
      <S.Section>
        <Text as="h2" weight={600} size={16}>
          이런 점이 가장 좋았어요
        </Text>
        <S.ReviewOptionList>
          {reviewOptions.map(option => (
            <Button
              key={option}
              label="like"
              type="button"
              shape="round"
              className={goodPoint === option ? "isSelected" : ""}
              onClick={() => handleSelectReviewOption(option)}
            >
              {option}
            </Button>
          ))}
        </S.ReviewOptionList>
      </S.Section>
      <S.Section>
        <Text as="h2" weight={600} size={16}>
          사진을 등록해주세요 <small>(선택)</small>
        </Text>
        <S.UploadImage>
          <label htmlFor="fileInput">
            <ImagePlaceholder />
            <Text weight={500} size={12} color={colors.grey[500]}>
              {files.length}/3
            </Text>
          </label>
          <input
            id="fileInput"
            type="file"
            className="fileUpload"
            accept="image/*"
            ref={imageRef}
            onChange={handleAddImage}
            disabled={files.length >= 3}
          />
          {files.length ? (
            files.map(file => (
              <S.ImageWrap key={file.url} isPreviewMode>
                <Image src={file.url} alt="preview" fill />
                <Delete className="deleteIcon" onClick={() => handleDeleteImage(file.url)} />
              </S.ImageWrap>
            ))
          ) : (
            <></>
          )}
        </S.UploadImage>
      </S.Section>
      <S.Section>
        <Text as="h2" weight={600} size={16}>
          상세한 후기를 작성해주세요
        </Text>
        <S.Textarea
          placeholder="주문한 메뉴, 업체에 대한 후기를 20자 이상 남겨주시면 다른 구매자들에게도 도움이 됩니다."
          value={content}
          onChange={handleCommentChange}
        />
        <Text className="contentLength" weight={500} color={colors.grey[600]}>
          {content.length} / 최소 20자
        </Text>
      </S.Section>
      <S.Caution>
        <Text size={12} color={colors.grey[700]}>
          작성한 내용이 실제 주문한 사실과 다를 경우 검토 후, <br /> 혹은 업체 측의 요청으로 삭제
          처리될 수 있습니다. <br /> 업체를 모함하거나 의도적으로 비난하는 것은 삼가해 주세요.
        </Text>
      </S.Caution>
      <S.ReorderCheckbox>
        <label htmlFor="reorder">
          <input type="checkbox" id="reorder" checked={reorder} onChange={handleReorderCheck} />
          <Text weight={500}>이 스토어에서 두 번 이상 주문했어요!</Text>
          <small>(선택)</small>
        </label>
      </S.ReorderCheckbox>
    </S.Container>
  );
}
