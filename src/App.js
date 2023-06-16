import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./component/page/MainPage";
import MemoPage from "./component/page/MemoPage";
import { useCallback, useState } from "react";
import MemoItems from "./component/page/MemoItems";
import {v4 as uuidv4} from 'uuid'

  const MainWrapper = styled.div`
    background-color: gray;
    height: 100vb;
    width: 1300px;
    margin: 0 auto;
  `;

const MainTitle = styled.div` 
  font-size: 50px;
  text-align: center;
  font-weight: bold;
  color: white;
  background-color: gray;
  /* padding-left: 10px; */
  border-bottom: 3px solid black;
  width: 1300px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
  /* z-index: -1; */
`;



function App() {

  const [memo, setMemo] = useState([]);

  const addMemo = (title, content) => {
    const newMemo = {
      id: uuidv4(),
      title,
      content
    };
    setMemo(memo => memo.concat(newMemo));
  };

  const amendMemo = (title, content) => {
    const reMemo = {
      id: uuidv4(),
      title,
      content
    };
    setMemo(memo => memo.map(reMemo));
  }
  
  const handleRemove = useCallback((id) => {
    setMemo(memo => memo.filter((m) => m.id !== id ))

  },[])

  
  return (
    
  <BrowserRouter  >
    <MainWrapper>
      <MainTitle>Memo List</MainTitle>
      <Routes>
        <Route path='/' element={<MainPage addMemo={addMemo} memo={memo} handleRemove={handleRemove}/>}/>
        <Route path="/MemoPage/" element={<MemoPage memo={memo} addMemo={addMemo} amendMemo={amendMemo}/>}/>
        <Route path="/MemoPage/:memoId" element={<MemoPage memo={memo} addMemo={addMemo} amendMemo={amendMemo}/>}/>
        <Route path="/MemoItems" element={<MemoItems memo={memo} handleRemove={handleRemove} />}/>
      </Routes>
      </MainWrapper>
  </BrowserRouter>
  
  );
}

export default App;
