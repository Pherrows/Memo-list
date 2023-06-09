import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./component/page/MainPage";
import MemoPage from "./component/page/MemoPage";
import { useState } from "react";

const MainTitle = styled.div` 
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: white;
  background-color: gray;
  padding-left: 10px;
  border-bottom: 3px solid black;
`;

function App() {

  const [memo, setMemo] = useState([]);

  const addMemo = (title, content) => {
    const newMemo = {
      title,
      content
    };
    setMemo(memo => memo.concat(newMemo));
  };
  
  
  return (
    <BrowserRouter >
      <MainTitle>Memo List</MainTitle>
      <Routes>
        <Route path='/' element={<MainPage addMemo={addMemo} />}/>
        <Route path="/MemoPage" element={<MemoPage addMemo={addMemo}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
