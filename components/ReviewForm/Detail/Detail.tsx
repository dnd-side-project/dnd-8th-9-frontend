/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, useMemo, useCallback } from "react";
import ImageWrap from "@/components/shared/ImageWrap/ImageWrap";
import { Heart, Delete } from "@/assets/icons";
import Button from "@/components/shared/Button/Button";
import { UploadImage } from "@/assets/images";
import * as S from "./Detail.styled";

interface ISelectMenu {
  formData: {
    id: number;
    name: string;
    menuImage: string;
    size: string;
    dangdo: number;
    like: string;
    text: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      id: number;
      name: string;
      menuImage: string;
      size: string;
      dangdo: number;
      like: string;
      text: string;
    }>
  >;
}

interface IImgFile {
  file: File;
  thumbnail: string;
}

const likeList = ["맛있어요", "가성비가 좋아요", "친절해요", "선물하기 좋아요", "응답이 빨라요"];

export default function Detail({ formData, setFormData }: ISelectMenu) {
  const [best, setBest] = useState("");
  const [comment, setComment] = useState("");
  const [imgFile, setImgFile] = useState<string | null>(null);
  const [imgFiles, setImgFiles] = useState<string[]>([]);
  const selectFile = useRef<HTMLInputElement>(null);

  const handleFileUpload = () => {
    selectFile.current?.click();
  };

  const saveImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (fileList && fileList[0]) {
      const url = URL.createObjectURL(fileList[0]);
      setImgFile(url);
      if (imgFiles.length >= 3) return;
      setImgFiles([...imgFiles, url]);
    }
  };

  const deleteImage = useCallback(
    (clickedImg: string) => {
      setImgFiles(imgFiles.filter(img => img !== clickedImg));
    },
    [imgFiles],
  );

  const showImage = useMemo(() => {
    if (imgFiles !== null)
      return (
        <>
          {imgFiles.map(clickedImg => (
            <S.ImageWrap key={clickedImg}>
              <img src={clickedImg} alt="업로드" width="70px" height="70px" />
              <S.ImageBackground>
                <Delete onClick={() => deleteImage(clickedImg)} />
              </S.ImageBackground>
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
          <img src={formData.menuImage} alt="menu" className="menu" />
        </ImageWrap>
        <S.InfoWrap>
          <S.Name>{formData.name}</S.Name>
          <S.Size>사이즈: {formData.size} </S.Size>
          <S.DangdoComment>
            <S.Dangdo>
              <Heart height={16} width={16} viewBox="0 0 19 19" />
              {formData.dangdo}%
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
              onClick={() => setBest(like)}
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
            onChange={e => setComment(e.target.value)}
          />
        </S.Textarea>
      </S.Detail>
    </S.Container>
  );
}
