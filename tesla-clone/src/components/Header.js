import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from '../features/car/carSlice';
import { useSelector } from 'react-redux';

const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);
 
  return (
    <Container>
      <a>
        <img src='/images/logo.svg' alt='Logo' />
      </a>
      <Menu>
      {cars && cars.map((car, index) => (
           <a key={index} href='#'>{car}</a>
      ))}    
      </Menu>
      <RightMenu>
      <a href='#'>Shop</a>
      <a href='#'>Account</a>
      <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
      <CloseWrapper>
      <CustomClose onClick={() => setBurgerStatus(false)} />
      </CloseWrapper>
      {cars && cars.map((car, index) => (
           <li key={index}><a href='#'>{car}</a></li>
      ))} 


      <li><a href='#'>Existing Inventory</a></li>
      <li><a href='#'>Used Inventory</a></li>
      <li><a href='#'>Trade In</a></li>
      <li><a href='#'>Test Drive</a></li>
      <li><a href='#'>Cybertruck</a></li>
      <li><a href='#'>Roadster</a></li>
      <li><a href='#'>Semi</a></li>
      <li><a href='#'>Charging</a></li>
      <li><a href='#'>Powerwall</a></li>
      <li><a href='#'>Commecial Energy</a></li>
      <li><a href='#'>Utilities</a></li>
      <li><a href='#'>Find Us</a></li>
      <li><a href='#'>Support</a></li>
      <li><a href='#'></a></li>
      </BurgerNav>
    </Container>
  );
};

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left:0;
  right:0;
  z-index: 1;

  a {
      cursor:pointer;
  }
`;

const Menu = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex: 1;

a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
}

@media (max-width: 768px) {
    display: none;
}
`;

const RightMenu = styled.div`
display: flex;
align-items: center;
a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right:  10px;
}
`;

      
const CustomMenu = styled(MenuIcon)`
cursor: pointer;
`;

const BurgerNav = styled.div`
position: fixed;
top:0;
right: 0;
bottom:0;
background-color: white;
width: 280px;
z-index: 999;
list-style: none;
padding: 40px;
padding-top: 25px;
display: flex;
flex-direction: column;
text-align: start;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
transition: transform 0.2s;

      border-bottom: 2px solid black;



li {
    margin-top:10px;
     padding: 5px 5px;
     border-radius: 30px;
      width: 100%;

a{
    width: 100%;
    font-weight: 500;
    font-size: 15px;

}
   

    &:hover {
        background-color:#C7BFB3;
    }
    
}
`;

const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;
background: red;
`;

const CustomClose = styled(CloseIcon)`
cursor: pointer;
position: absolute;
top: 15px;
right:20px;
`;

export default Header;
