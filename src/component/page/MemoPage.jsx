import React, { useState } from 'react';
import styled from 'styled-components';

function MemoPage(props) {

  const [memo, setMemo] = useState('');

  // const {memoPage} = props;

  const Memost = styled.li`
    width: 100%;
    height: 100px;
    border: 1px solid black;
    background-color: yellow;
    border-radius: 50px;
  `;

  return (
    <Memost>
      
    </Memost>
  );
}

export default MemoPage;