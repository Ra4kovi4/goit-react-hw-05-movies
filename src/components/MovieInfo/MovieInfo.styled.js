import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { TbArrowBigLeftLines } from 'react-icons/tb';
export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: black;
  font-size: 16px;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 10px;
  background-color: #097b78;

  width: 170px;
  text-decoration: none;
  :hover,
  :focus {
    background-color: #09c5c0;
  }
`;
export const StyledIcon = styled(TbArrowBigLeftLines)`
  margin-right: 5px;
`;
export const Container = styled.div`
  width: 100%;
  padding: 15px;
`;

export const StyledLink = styled(Link)`
  padding: 15px;
  margin-right: 10px;
  color: black;
  border: 1px solid grey;
  border-radius: 10px;
  background-color: #097b78;
  text-decoration: none;
  :hover,
  :focus {
    background-color: #09c5c0;
  }
`;
