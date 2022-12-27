import {
  NavBar,
  Container,
  HeaderWrapper,
  StyledLink,
} from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
const SharedLayout = () => {
  return (
    <>
      <NavBar>
        <Container>
          <HeaderWrapper>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </HeaderWrapper>
        </Container>
      </NavBar>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;
