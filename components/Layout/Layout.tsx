import { Centering, FixedWidth } from "./Layout.styled";

interface IChildren {
  children: React.ReactNode;
}

const AppLayout = ({ children }: IChildren) => {
  return (
    <Centering>
      <FixedWidth>{children}</FixedWidth>
    </Centering>
  );
};

export default AppLayout;
