import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.header`
  display: flex;
  align-items: center;
  padding: 30px 50px;
  background-color: #f0f8ff;
  box-shadow: 8px 12px 31px 1px rgba(0, 0, 0, 0.54);
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
export const HeaderWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledLink = styled(NavLink)`
  color: #87cefa;
  font-size: 18px;
  font-weight: 700;
  margin-right: 10px;
  text-transform: uppercase;
  padding: 6px 12px;
  text-decoration: none;

  :hover,
  :focus {
    color: #1e90ff;
  }

  &.active {
    color: #0000cd;

    border-radius: 4px;

    transform: scale(1);
    pointer-events: none;
  }
`;
