import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./component/page/MainPage";


function App() {

  

  const MainTitle = styled.div` 
    font-size: 30px;
    text-align: start;
    font-weight: bold;
    color: white;
    background-color: gray;
    padding-left: 10px;
    border-bottom: 3px solid black;
  `;
  
  
  return (
    <BrowserRouter >
      <MainTitle>메모장</MainTitle>
      <Routes>
        <Route path='/' element={<MainPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
