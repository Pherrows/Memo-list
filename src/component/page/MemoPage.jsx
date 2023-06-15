import React, { memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from '../input/Input';
import { useNavigate, useParams } from 'react-router-dom';
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
	font-size: 20px;
	& > * {
		:not(:last-child) {
			margin-bottom: 16px;
		}
	}
`;

function  MemoPage({addMemo, memo, amendMemo}) {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const navigate = useNavigate()

	const {memoId} = useParams();

	useEffect(() => {
		if (memoId) {
			const saveMemo = memo.find((m) => {
				return m.id == memoId;
			});
			console.log(saveMemo);
	
			setTitle(saveMemo?.title);
			setContent(saveMemo?.content);
		}
	}, []);
	


	const handleAddMemo = (e) => {
		if (memoId) {
			amendMemo(title , content)
		} else {
			addMemo(title, content);
		}
    setTitle('');
    setContent('');
		
  };

	// console.log(title);
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
					title='Save'
					onClick={(e) => {
            handleAddMemo()
						navigate('/')
					}}
				/>
			</Container>
    </Wrapper>
  );
}
export default MemoPage;