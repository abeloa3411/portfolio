import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  background: ${({ scrollNav }) => (scrollNav ? "#bfdef2" : "transparent")};
  position: sticky;
  height: 80px;
  z-index: 10;
  top: 0;
  transition: all 0.3s ease-in-out;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
`;
const HeaderCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 80px;
`;
const Logo = styled.div``;
const NavContainer = styled.div``;
const Nav = styled.nav``;
const NavMenu = styled.ul`
  display: flex;
`;
const NavItems = styled.li`
  list-style: none;
  margin-left: 1rem;
`;

const Header = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <>
      <HeaderContainer scrollNav={scrollNav}>
        <HeaderCenter>
          <Logo>
            <h3>
              <Link style={{ textDecoration: "none" }} to="/">
                Abel Wanyonyi
              </Link>
            </h3>
          </Logo>
          <NavContainer>
            <Nav>
              <NavMenu>
                <NavItems>
                  <Link
                    style={{ textDecoration: "none", color: "#000" }}
                    to="/blogs"
                  >
                    Blog
                  </Link>
                </NavItems>
                <NavItems>
                  <Link
                    style={{ textDecoration: "none", color: "#000" }}
                    to="/contacts"
                  >
                    Contacts
                  </Link>
                </NavItems>
              </NavMenu>
            </Nav>
          </NavContainer>
        </HeaderCenter>
      </HeaderContainer>
    </>
  );
};

export default Header;
