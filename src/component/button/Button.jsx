import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Button(props) {

  const Button = styled.button`
    color: white;
    background-color: #222222;
    cursor: pointer;
    width: 100px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    /* margin-right: 500px; */
    justify-content: center;
    margin-left: 20px;
    margin-right: 20px;
  `;

  
    const navigate = useNavigate();

    const {title, onClick} = props
  return (
    <>
    <Button type='submit' onClick={onClick}>{title}</Button>
    
    </>

  );
  }

export default Button;