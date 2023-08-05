import React from 'react';
import work1 from './images/buy-1.jpg';
import work2 from './images/product-9.jpg';
import work3 from './images/exclusive.png';
import flag from './images/flag.png';
const Work = () => {
  return (
    <>
    <div className="work">
    <div className='container'>
           <h1>Work</h1><hr className='hr1'/>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tenetur nesciunt dignissimos quidem <br/> ullam dolorem eum? Odio, fugit molestias nobis doloremque nemo sunt veritatis ducimus aftab an<br/> quod nostrum, excepturi vel.</p>
        
          <div className="card-group">
            <div className="card">
                <img src={work1} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <img src={flag} alt="flag" width="16px"/><br /><br />
                <h5 className="card-title">TeamAlert:transition from MVP to product-market from MVP to product-market  </h5>
                <p className="card-text">This is a wider card with supporting text below as a natural from MVP to product-market  from MVP to product-market </p>
                <div className="card-text card-button">
                    <button>#B2B SERVICES</button>
                    <button>#PRODUCT</button>
                    <button>#NORTH KOREA</button>
                    </div>
                </div>
            </div>
            <div className="card">
                <img src={work2} className="card-img-top" alt="..." />
                <div className="card-body">
                <img src={flag} alt="flag" width="16px"/><br /><br />
                <h5 className="card-title">TeamAlert:transition from MVP to product-market from MVP to product-market </h5>
                <p className="card-text">This card has supporting text below as a natural from MVP to product-market from MVP to product-market  </p>
                <div className="card-text card-button">
                    <button>#B2B SERVICES</button>
                    <button>#PRODUCT</button>
                    <button>#NORTH KOREA</button>
                    </div>
                </div>
            </div>
            <div className="card">
                <img src={work3} className="card-img-top" alt="..." />
                <div className="card-body">
                <img src={flag} alt="flag" width="16px"/><br /><br />
                <h5 className="card-title">TeamAlert:transition from MVP to product-market from MVP to product-market </h5>
                <p className="card-text">This is a wider card with supporting text below as a natural from MVP to product-market from MVP to product-market </p>
                <div className="card-text card-button">
                    <button>#B2B SERVICES</button>
                    <button>#PRODUCT</button>
                    <button>#NORTH KOREA</button>
                    </div>
                </div>
            </div>
            </div>
           
    </div>
    </div>
    </>
  )
}

export default Work;
