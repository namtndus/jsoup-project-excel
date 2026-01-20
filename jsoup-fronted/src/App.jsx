import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [searchValue,setSearchValue] = useState('');

  const saveSearchValue = event => {
    setSearchValue(event.target.value);
  }

  function search_btn(){
  const text = document.getElementsByName("search");

  console.log(searchValue+"버튼이 눌렸습니다.");
}

  return (
    <>
      <div>
        <input type="text" name="search" id="search" value={searchValue} onChange={saveSearchValue} />
        <input type="button" value="검색" onClick={search_btn}/>
      </div>
    </>
  )
}

export default App
