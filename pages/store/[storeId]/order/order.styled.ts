import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 0 1.6rem 7.4rem 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3.2rem;
`;

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2.4rem 2rem;
  border: 1.6px solid ${({ theme }) => theme.colors.grey[300]};
  border-radius: 8px;
  width: 100%;
  row-gap: 2rem;

  :focus-within {
    border-color: ${({ theme }) => theme.colors.blue[500]};
  }
`;

export const FormCell = styled.div`
  display: flex;
  gap: 1.6rem;

  input::placeholder,
  input {
    font-size: ${({ theme }) => theme.fontSizes[13]};
    font-weight: 500;
    line-height: 1.6rem;
  }

  input {
    overflow-wrap: break-word;
    color: ${({ theme }) => theme.colors.grey[800]};
    width: calc(100% - 10rem);
  }

  input::placeholder {
    font-weight: 400;
    width: 100%;
    color: ${({ theme }) => theme.colors.grey[500]};
  }
`;

export const Title = styled.div`
  width: 8rem;
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: 600;
  line-height: 1.7rem;
  color: ${({ theme }) => theme.colors.blue[800]};
`;

export const TextBox = styled.div`
  background-color: ${({ theme }) => theme.colors.grey[200]};
  border-radius: 8px;
  padding: 1.1rem 1.4rem;
  font-size: ${({ theme }) => theme.fontSizes[13]};
  font-weight: 400;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.grey[700]};

  width: 32.8rem;
  margin: 0.8rem 0 1.6rem 0;
`;
