import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./dashboard.styles.css";
import { UserContext } from '../context/user.context';

 

const TruncatedText = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const truncatedText = text.slice(0, 150);
 
  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='desc'>
      {isExpanded ? text : truncatedText}
      {text.length > 150 && (
        <p onClick={handleToggleExpand} style={{color:'blue',fontWeight:'500',fontSize:'15px',cursor:'pointer'}}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </p>
      )}
    </div>
  );
};




const Dashboard = () => {
  const {currentUser} = useContext(UserContext);
  const [items, setitems] = useState(
  [{
    name:'default',
    image:'',
    category:'self',
    title:'none',
    description:'OLA OLA'
  }]
  );
  const [items2, setitems2] = useState([{}]);
  const [dropbox, setdropbox] = useState(false);
  const [category, setcategory] = useState([{}]);
  const handledrop = ()=>{
    setdropbox(!dropbox);
  }
  
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then((response)=>response.json())
    .then((data)=>{
      setitems(data);
      setitems2(data);
    })


    fetch('https://fakestoreapi.com/products/categories')
    .then((response)=>response.json())
    .then((data)=>{
      setcategory(data);
    })

  },[])



  const filteroptions = (event)=>{
    const filteritems = items2.filter((element)=>{
      return element.title.toLowerCase().includes(event.target.value.toLowerCase());
    })
    setitems(filteritems);
  }



  const hanlefiltercategory = (itemsfilt)=>{
    const filteritems = items2.filter((element)=>{
      return element.category.toLowerCase() ===itemsfilt.toLowerCase();
    })
    setitems(filteritems)
  }

  return (
    <div style={{width:'100%'}}>
   
    <div className='navbar' style={{flexWrap:'wrap'}}>
        <p className='navtext'>{currentUser[0]} | {currentUser[1]}</p>
        
        <div className='operations' style={{flexWrap:'wrap'}}>
          <Link to='/datarepresentation'><button className='navbtn'>plots</button></Link>
          <button onClick={handledrop} className='navbtn'>select</button>
          <input type="text" placeholder='search' className='search' onChange={filteroptions}/>
        </div>

        {
          (dropbox)?
          
              <div className="dropbox">
                {
                  category.map((element,id)=>{
                    return(
                      <p className="dropselect" key={id} onClick={()=>{hanlefiltercategory(element)}}>{element}</p>
                    )
                  })
                } 
              </div>
              
          :
          <></>
        }
        
      </div>


     <div className='allitems'>
      {
        items.map((element,id)=>{
          return(
            <div className="itemcontainer" key={id}>
              <img src={element.image} alt='none' width='100px'/>
               <div className="category">{element.category}</div>
               <div className="title">{element.title}</div>
               <TruncatedText text={element.description}/>
            </div>
          )
        })
      }
     </div>
    </div>
  )
}

export default Dashboard;