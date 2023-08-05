import React, { useState } from 'react';
import AdvantagesApi from './API/AdvantagesApi.jsx';

const Advantages = () => {

    const [data,setData] = useState(AdvantagesApi);
    
  return (
    <>
        <div className="advantages">
        <div className="container ">
            <h2>Our competitve <br /> advantages</h2><hr className='hr2'/>
            <p>Lorem ipsum dolor sit amet consectetur aftab ansari aperiam nesciunt est quis  deleniti aspernatur magni harum asperiomagni<br /> deleniti aspernatur magni harum asperiomagni </p>
            <div className="row">
                {
                    data.map((ele)=>{
                        const {id,title,info} = ele;
                        
                        return(
                            <>
                                <div className="col-12 col-md-6 col-lg-4 col-advantages" key={id}>
                                    <h1>{id}</h1>
                                    <h3 className='advantages-body'> {title}</h3>
                                    <p className='advantages-body'> {info}</p>
                                </div>
                            </>
                            );
                    })
                }
{/* 
                                <div className="col-12 col-md-6 col-lg-4 col-advantages">
                                    <h1>1</h1>
                                    <h3 className='advantages-body'>fdjhgskhfjdf</h3>
                                    <p className='advantages-body'> zvdfdhgfgsdf</p>
                                </div>
                */}
            </div>
        </div>  
        </div>    
    </>
  )
}

export default Advantages;
