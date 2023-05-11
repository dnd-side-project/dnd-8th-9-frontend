/* eslint-disable react/no-array-index-key */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useMemo, useCallback } from "react";
import {
  useFormMenuStore,
  useFormSizeDangdoStore,
  useFormDetailStore,
  useButtonDisabledStore,
} from "@/store/ReviewForm";
import ImageWrap from "@/components/shared/ImageWrap/ImageWrap";
import { Heart, Delete } from "@/assets/icons";
import Button from "@/components/shared/Button/Button";
import { UploadImage } from "@/assets/images";
import * as S from "./Detail.styled";

const likeList = ["맛있어요", "가성비가 좋아요", "친절해요", "선물하기 좋아요", "응답이 빨라요"];

export default function Detail() {
  const { name, menuImage } = useFormMenuStore(state => state);
  const { size, dangdo } = useFormSizeDangdoStore(state => state);
  const { best, comment, imgFiles, setDetail } = useFormDetailStore(state => state);
  const { setButtonDisabled, setButtonAbled } = useButtonDisabledStore(state => state);

  let imgIdx = 1;

  useEffect(() => {
    setButtonDisabled();
  }, [setButtonAbled, setButtonDisabled]);

  useEffect(() => {
    if (best !== "" && comment !== "" && imgFiles.length) setButtonAbled();
  }, [best, comment, imgFiles, setButtonAbled]);

  const selectFile = useRef<HTMLInputElement>(null);

  const handleFileUpload = () => {
    selectFile.current?.click();
  };

  const saveImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (fileList && fileList[0]) {
      imgIdx += 1;
      const reader = new FileReader();
      reader.readAsDataURL(fileList[0]);
      reader.onloadend = () => {
        if (imgFiles.length >= 3) return;
        // setDetail({ best, comment, imgFiles: [...imgFiles, reader.result] });

        setDetail({
          best,
          comment,
          imgFiles: [
            ...imgFiles,
            { id: imgIdx, url: reader.result as string, type: "REVIEW_IMAGE", targetId: 7 },
          ],
        });
      };
    }
  };

  const deleteImage = useCallback(
    (clickedImg: string) => {
      setDetail({ best, comment, imgFiles: imgFiles.filter(img => img.url !== clickedImg) });
    },
    [best, comment, imgFiles, setDetail],
  );

  const showImage = useMemo(() => {
    if (imgFiles !== null)
      return (
        <>
          {imgFiles.map((clickedImg, idx) => (
            <S.ImageWrap key={idx}>
              {clickedImg && (
                <>
                  <img src={clickedImg.url.toString()} alt="업로드" width="70px" height="70px" />
                  <S.ImageBackground>
                    <Delete onClick={() => deleteImage(clickedImg.toString())} />
                  </S.ImageBackground>
                </>
              )}
            </S.ImageWrap>
          ))}
        </>
      );
    return <></>;
  }, [imgFiles, deleteImage]);

  return (
    <S.Container>
      <S.Menu>
        <ImageWrap percent={30} borderRadius={8}>
          <img src={menuImage} alt="menu" className="menu" />
        </ImageWrap>
        <S.InfoWrap>
          <S.Name>{name}</S.Name>
          <S.Size>사이즈: {size} </S.Size>
          <S.DangdoComment>
            <S.Dangdo>
              <Heart height={16} width={16} viewBox="0 0 19 19" />
              {dangdo}%
            </S.Dangdo>
            <S.Comment>당도가 훌륭해요!</S.Comment>
          </S.DangdoComment>
        </S.InfoWrap>
      </S.Menu>
      <S.Best>
        <S.Title>이런 점이 가장 좋았어요</S.Title>
        <S.LikeList>
          {likeList.map(like => (
            <Button
              key={like}
              label="like"
              type="button"
              shape="round"
              cssProp={like === best ? S.ClickedButton : S.Button}
              onClick={() => setDetail({ best: like, comment, imgFiles })}
            >
              {like}
            </Button>
          ))}
        </S.LikeList>
      </S.Best>
      <S.Detail>
        <S.Top>
          <S.Title>상세 리뷰</S.Title>
          <S.OrderedTwice>두 번 이상 주문했어요!</S.OrderedTwice>
        </S.Top>
        <S.UploadImage>
          <>
            <S.FileUpload>
              <input
                type="file"
                className="fileUpload"
                accept="image/*"
                ref={selectFile}
                onChange={saveImage}
              />
            </S.FileUpload>

            <UploadImage width={73} height={73} onClick={handleFileUpload} />
            {imgFiles ? (
              showImage
            ) : (
              <S.UploadImageText>
                <p className="title">사진 등록</p>
                <p className="detail">
                  도안 사진을 함께 첨부해주시면 다른 분들의 선택에 많은 도움이 될 거예요:)
                </p>
              </S.UploadImageText>
            )}
          </>
        </S.UploadImage>
        <S.Textarea>
          <textarea
            placeholder="주문한 메뉴, 업체에 대한 후기를 20자 이상 남겨주시면 다른 구매자들에게도 도움이 됩니다."
            value={comment}
            onChange={e => setDetail({ best, comment: e.target.value, imgFiles })}
          />
        </S.Textarea>
      </S.Detail>
    </S.Container>
  );
}
