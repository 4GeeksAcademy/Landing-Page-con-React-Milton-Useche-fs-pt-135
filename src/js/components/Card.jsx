import React from "react";

export const Card = ()=>{
    return(
        <>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="card" >
                        <img src="src/img/rigo-baby.jpg" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

        </>
    )
}