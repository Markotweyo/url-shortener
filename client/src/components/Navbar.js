import React, {useState, useEffect} from 'react';
import { BiMenu, BiX } from "react-icons/bi";
import {Button} from '../styles/GlobalStyles';
import { IconContext } from "react-icons";
import 
{
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MenuIcon,
    Menu,
    MenuItem,
    MenuItemBtn, 
    MenuLink,
    MenuLinkBtn
} from '../styles/NavbarStyle.js';
const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);


    const showButton = () =>{
        if(window.innerWidth<= 1000){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);

    return (
        <div>
            <IconContext.Provider value={{ color: '#fff'}}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon/>
                            Shrtly
                        </NavLogo>
                        <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>

                        <Menu onClick={handleClick} click={click}>
                            <MenuItem>
                                <MenuLink onClick={closeMenu} to="/">Home</MenuLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink onClick={closeMenu} to="/about">About</MenuLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink onClick={closeMenu} to="/pricing">Pricing</MenuLink>
                            </MenuItem>
                            <MenuItemBtn>
                                {button?(
                                    <MenuLinkBtn to="/get-started">
                                        <Button primary>Get Started</Button>
                                    </MenuLinkBtn>
                                ): (
                                    <MenuLinkBtn to="/get-started">
                                        <Button primary bigFont onClick={closeMenu}>Get Started</Button>
                                    </MenuLinkBtn>
                                )
                                }
                            </MenuItemBtn>
                        </Menu>

                    </NavbarContainer>


                </Nav>
            </IconContext.Provider>
        </div>
    )
}

export default Navbar;