import React from 'react'
import work1 from './images/buy-1.jpg';
const Statements = () => {
  return (
    <>
        <div className="statement">
            <div className="container">
                <h1>Their Statements Makes <br /> Us Proud</h1><hr />
                <div className="statement-body">
                    <div className="row statement-body">
                        <div className="col-10 col-md-6  col-lg-6">Lorem ipsum dolor sit amet, consectetur adimpedit quia zcjdfd sddvoluptas pariatur. Adipisci, quae accusantium? Provident similique debitis tempore ipsum totam eos et, er, nemo odit, deserunt quam impedit veniam doloribus optio mollitia.
                         <p>Tony Sparoon <br />CelTech (Founder,CEO) </p>
                        </div>
                        <div className="col-10 col-md-6 col-lg-4">
                            <img src={work1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default Statements;
