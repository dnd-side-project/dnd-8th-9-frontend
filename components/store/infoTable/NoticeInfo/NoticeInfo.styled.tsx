import Button from "@/components/shared/Button/Button";
import Text from "@/components/shared/Text/Text";
import styled from "@emotion/styled";

export const Content = styled.div`
  padding: 2rem 1.9rem 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey[200]};
  border-radius: 8px;
  position: relative;
`;

export const Date = styled(Text)`
  position: absolute;
  right: 0;
  top: -3.3rem;
`;

export const TextBox = styled(Text)<{ isPreviewMode: boolean }>`
  line-height: 150%;
  white-space: pre-wrap;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: clip;
  -webkit-line-clamp: ${({ isPreviewMode }) => (isPreviewMode ? 4 : 100)};
`;

export const FullTextButton = styled(Button)`
  width: 100%;
  background-color: transparent;
  text-align: center;
  margin-top: 0.8rem;
  padding: 0.4rem 1rem;
`;
