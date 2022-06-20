import { ReactElement } from 'react';
import styled from 'styled-components';
import { Anchor, Switch } from '../';

type NavbarProps = {
  darkMode?: boolean;
  toggleDarkMode?: () => void;
};

export default function Navbar({
  darkMode,
  toggleDarkMode,
}: NavbarProps): ReactElement {
  return (
    <Main>
      <Anchor href="/">
        <Title>ASCE FOOTBALL</Title>
      </Anchor>
      <RightSection>
        <Links>
          <Anchor href="/leagues">Leagues</Anchor>
          <Anchor href="/">Home</Anchor>
        </Links>
        <Switch
          name="theme-switch"
          checked={darkMode || false}
          onChange={toggleDarkMode}
        />
      </RightSection>
    </Main>
  );
}

const Title = styled.span`
  font-weight: 900;
  font-size: 1.2em;
  cursor: pointer;
`;

const Links = styled.div`
  font-weight: 700;
  display: flex;
  gap: 20px;
  padding-right: 20px;
  border-right: 2px solid ${({ theme }) => theme.secondary};
`;

const RightSection = styled.div`
  display: flex;
  gap: 20px;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
`;
