import {CountOrderList} from "./components/List/list.jsx"
import { CountUnorderList } from "./components/List/list.jsx"
import { Head1,Head2 } from "./components/heading/headings.jsx"
import { Img1 } from "./components/Images/image.jsx"
import Btn from "./components/button/button.jsx"
import { reciepeData } from "./data/reciepe.js"
const App=()=>{
  // const data=[
  //   {
  //     source:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //     alternateText:"bag",
  //     height:100,
  //     width:100
  //   },
  //   {
  //     source:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //     alternateText:"bag",
  //     height:150,
  //     width:150
  //   },
  //   {
  //     source:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //     alternateText:"bag",
  //     height:200,
  //     width:200
  //   }
  // ]
  return(
    <>
    {
      reciepeData.map((obj)=>{
        return (
          <div key={obj.id}>
            <Head1 text={obj.name}/>
            <Img1 source={obj.image} height={300} width={300} />
            <Head2 text="Ingredients"/>
            <CountOrderList list={obj.ingredients} />
            <Head2 text="Instructions" />
            <CountOrderList list={obj.instructions}/>
          </div>
        )
      })
    }
      {/* {
        data.map((e,i)=>{
          return <Img1 key={i} source={e.source} alternateText={e.alternateText} height={e.height} width={e.width}/>
        })
      } */}
      {/* <Head1/>
      <Head2/>
      <Img1/> 
      <Img1/> 
      <Img1/> 
      <CountUnorderList/>
      <CountOrderList />
      <Btn /> */}
      
    </>
  )
}

export default App