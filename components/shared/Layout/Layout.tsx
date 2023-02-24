import GNB from "../GNB/GNB";
import Navbar from "../Navbar/Navbar";
import { Centering, FixedWidth } from "./Layout.styled";

interface IChildren {
  children: React.ReactNode;
}

const AppLayout = ({ children }: IChildren) => {
  return (
    <Centering>
      <FixedWidth>
        <Navbar />
        {children}
        <GNB />
      </FixedWidth>
    </Centering>
  );
};

export default AppLayout;
