import {CountOrderList} from "./components/List/list.jsx"
import { CountUnorderList } from "./components/List/list.jsx"
import { Head1,Head2 } from "./components/heading/headings.jsx"
import { Img1 } from "./components/Images/image.jsx"
import Btn from "./components/button/button.jsx"
const App=()=>{
  return(
    <>
      <Head1/>
      <Head2/>
      <Img1/> 
      <Img1/> 
      <Img1/> 
      <CountUnorderList/>
      <CountOrderList></CountOrderList>
      <Btn></Btn>
    </>
  )
}

export default App