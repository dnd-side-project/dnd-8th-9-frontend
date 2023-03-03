import Link from "next/link";
import Button from "@/components/shared/Button/Button";
import styled from "@emotion/styled";

export const Header = styled.div`
  margin: 1.9rem 0 2.4rem;
  padding: 0 1.6rem;

  .icon {
    width: 6rem;
    height: 6rem;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  height: 8rem;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.4rem;

  div {
    display: flex;
    flex-direction: column;
    row-gap: 0.4rem;
    width: 60%;
  }

  a {
    text-align: right;
  }
`;
export const EditLink = styled(Link)`
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.blue[800]};
  height: 5.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.6rem;

  div {
    display: flex;
    align-items: center;
  }
`;

export const LinkWrap = styled.div`
  border-bottom: 0.6rem solid ${({ theme }) => theme.colors.grey[200]};
  border-top: 0.6rem solid ${({ theme }) => theme.colors.grey[200]};
  display: flex;
  flex-direction: column;

  a {
    padding: 0 1.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 7.2rem;
  }

  a:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey[300]};
  }
`;

export const LogoutButton = styled(Button)`
  padding: 0 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7.2rem;
  column-gap: 1.2rem;
`;
