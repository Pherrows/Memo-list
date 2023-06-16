import React, { memo, useState,  } from 'react';
import styled from 'styled-components';
import MemoPage from './MemoPage';
import Input from '../input/Input';
import App from '../../App';
import { useNavigate } from 'react-router-dom';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
const MemoItemsWrapper = styled.div`
  background-color: #ffffcc;
  border-radius: 60px;
  width: 600px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
  font-size: 20px;
  margin: 0  auto;
  margin-top: 30px;
  flex: 1;
`;

const Title = styled.div`
  display: flex;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  /* margin-bottom: 50px; */
`;
// const Lable = styled.label`
//   width: 40px;
// `;
const Checkbox = styled.div`
  cursor: pointer;
  display: flex;  
  align-items: center;
  justify-content: center;
  width: 2.8rem;
  height: 2.8rem;
  appearance: none;
  margin-left: 400px;
  /* margin-bottom: 200px; */
  
  svg {
    font-size: 150px;
    margin-bottom: 140px;
  }
`;

function MemoItems({ memo, title, content, index, memoId, handleRemove}) {
  const navigate = useNavigate();
    
    const [check, setCheck] = useState(false);

    const onClick = () => {
      setCheck(!check);
      
    };
      
      

    
  return (
    <>
      <MemoItemsWrapper
          onClick={(e) => {navigate(`/MemoPage/${memoId}`); e.stopPropagation()}}>
        <Title>Title: {title}</Title>
      </MemoItemsWrapper>
        <Checkbox type='checkbox' onClick={onClick} checked={check}>
          {check ? <MdCheckBox /> : <MdCheckBoxOutlineBlank  />}
        </Checkbox>
    </>
  );

}

export default MemoItems;