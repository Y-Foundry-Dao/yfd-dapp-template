import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';

function NavLinks() {
  return (
    <Nav>
      <Ul>
        <li>
          <StyledLink smooth to="about">
            about
          </StyledLink>
        </li>
        <li>
          <StyledLink smooth to="medium">
            medium
          </StyledLink>
        </li>
        <li>
          <StyledLink smooth to="community">
            join community
          </StyledLink>
        </li>
        <li>
          <StyledLink smooth to="roadmap">
            roadmap
          </StyledLink>
        </li>
      </Ul>
    </Nav>
  );
}

const Nav = styled.nav`
  width: 65%;

  /* hides nav bar on mobile */
  @media (max-width: 756px) {
    display: none;
  }
`;

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-weight: 600;
  display: flex;
  justify-content: space-around;
`;

const fadeIn = keyframes`
  0%{
    opacity: 0;
  }100%{
    opacity: 1;
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  color: ${(props) => `${props.theme.colors.gray}`};
  text-decoration: none;
  text-transform: uppercase;
  z-index: 2;
  cursor: pointer;

  &:hover {
    color: ${(props) => `${props.theme.colors.orange}`};
    transition: all 0.2s linear;

    /* Styles for orange underline on hover */
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 42px;
      height: 2px;
      animation: ${fadeIn} 0.2s 1 linear;
      background: ${(props) => `${props.theme.colors.orange}`};
      border-radius: 10px;
    }
  }
`;

export default NavLinks;
