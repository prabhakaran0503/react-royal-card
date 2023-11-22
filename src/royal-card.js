import { Component } from "react";

class RoyalCard extends Component{
    constructor(){
        super()
    }
    render(){
        const {DataAll}=this.props
        const CardStor=DataAll.map((e)=>{
            return(
               
                    <div className="card-col">
                        <div className="card-img">
                            <img src='{e.img}'></img>
                        </div>
                        <h1>{e.name}</h1>
                        <p>{e.pover}</p>
                        <h2>{e.price}</h2>
                     <div className="card-btn">
                         <button>{e.btn}</button>
                     </div>
                    </div>
               
            )
        })

     return(
        <div className="card-sec">
            <div className="card-container">
            <div className="card-row">
                {CardStor}
                </div>
            </div>
        </div>
     )   
    }

}
export default RoyalCard;