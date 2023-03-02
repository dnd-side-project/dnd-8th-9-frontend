import styled from "@emotion/styled";

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-inline: 1.6rem;

  a {
    flex-grow: 1;
  }
`;

export const Searchbar = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.colors.grey[100]};
  border-radius: 0.8rem;
  height: 4.2rem;
  padding: 1.1rem 1.2rem;
  column-gap: 0.8rem;
`;
