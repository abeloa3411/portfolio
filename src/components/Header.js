import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
`;
const HeaderCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 2rem;
  background: #bfdef2;
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
  return (
    <>
      <HeaderContainer>
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
