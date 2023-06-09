import React, { memo, useState } from 'react';
import styled from 'styled-components';
import Input from '../input/Input';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import MemoItems from './MemoItems';

const Wrapper = styled.div`
	padding: 16px;
	width: calc(100% - 32px);
	display: flex;
	/* flex-direction: column; */
	align-items: center;
	justify-content: center;
  background-color: gray;
  /* height: 100vb; */
`;

const Container = styled.div`
	width: 100%;
	max-width: 720px;
  background-color: gray;

	& > * {
		:not(:last-child) {
			margin-bottom: 16px;
		}
	}
`;

function  MemoPage({addMemo}) {

	const navigate = useNavigate()

  
	
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

  
	// console.log(addMemo);
  return (
    <Wrapper>
      <Container>
				<Input
					height={20}
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
				<Input 
					height={580}
					value={content}
					onChange={(e) => {
						setContent(e.target.value);
					}}
				/>
				<Button
					title='Memo List'
					onClick={() => {
						navigate('/')
					}}
				/>
        <Button
					title='New Memo'
					onClick={() => {
						navigate('/')
            addMemo(title);
					}}
				/>
			</Container>
    </Wrapper>
  );
}
export default MemoPage;