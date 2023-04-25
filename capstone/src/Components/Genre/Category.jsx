import React, { useState, useEffect } from 'react';
import Chips from '../Global/Chips'
import './Category.css';
import action from './action.png';
import drama from './drama.png';
import fantasy from './fantasy.png';
import fiction from './fiction.png';
import horror from './horror.png';
import music from './music.png';
import romance from './romance.png';
import thriller from './thriller.png';
import western from './western.png';

const genres = [
  { id: 'Action',
    color:"#FF5209",
    image:<img style={{width:"160px", height:"120px"}} src={action} alt='jj'
/>  }
    ,
  { id: 'Drama',
    color:"#D7A4FF",
    image:<img style={{width:"160px", height:"120px"}} src={drama} alt='jj'
 /> }
    ,
  { id: 'Romance',
    color:"#11B800",
    image:<img style={{width:"160px", height:"120px"}} src={romance} alt='jj'
     />
  }
    ,
  { id: 'Thriller',
    color:"#84C2FF",
    image:<img style={{width:"160px", height:"120px"}} src={thriller} alt='jj'
    />
   }
    ,
  { id: 'Western',
    color:"#912500",
    image:<img style={{width:"160px", height:"120px"}} src={western}  alt='jj'
    />
  }
    ,
  { id: 'Horror',
    color:"#7358FF",
    image:<img style={{width:"160px", height:"120px"}} src={horror} alt='jj'
/>  }
    ,
  { id: 'Fantasy',
    color:" #FF4ADE",
    image:<img style={{width:"160px", height:"120px"}} src={fantasy} alt='jj'
    />
  }
    ,
  { id: 'Music',
    color:"#E61E32",
    image:<img style={{width:"160px", height:"120px"}} src={music} alt='jj'
 /> }
    ,
  { id: 'Fiction',
    color:"#6CD061",
    image:<img style={{width:"160px", height:"120px"}} src={fiction} alt='jj'
    />
  }
]

const Category = ()=>{
  const [categories, setCategories] = useState([])
  // const navigate = useNavigate()
  const handleSignUp = ()=>{
      window.localStorage.setItem("genres", JSON.stringify([...categories]))
      // navigate("/browse")
  }
  return (
      <div className='body'>
          <div className='left'>
              <p className='heading'>Super app</p>
              <p className='subHeading'>Choose your<br/> entertainment <br /> category</p>
              <div style={{marginTop:"10vh"}}>
              <Chips categories={categories} color={"green"}  setCategories={setCategories}/>
              </div>
          </div>
          <div className='right'>
              {genres.map((data,idx)=>
                  <Block data={data} idx={idx} categories={categories}  setCategories={setCategories}/>
              )}
          </div>
          <button className='signUp' onClick={handleSignUp}>Next Page</button>
      </div>
  )
}

const Block = ({data,idx, setCategories, categories})=>{
  const [selected, setSelected] = useState()
  const handleClick = (e)=>{
      if(categories.includes(data.id)){
          const index = categories.indexOf(data.id)
          categories.splice(index,1)
          setCategories([...categories])
      }
      else{
          setCategories([...categories,data.id])
      }
      setSelected(!selected)
  }
  useEffect(()=>{
      setSelected(categories.includes(data.id)===true)
  })
  return (
      <div data={data}  onClick={(e)=>handleClick(e)}  key={idx} style={{background:data['color'],color:"white",padding:"16px",borderRadius:"12px",border:`${selected?"4px solid green":"4px solid white"}`}}>
          <p style={{marginBottom:"4px",fontSize:"18px"}}>{data.id}</p>
          {data.image}
      </div>
  )
}

export default Category