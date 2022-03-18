import React from 'react'
import "../css/Teaminfo.css"


const Teaminfo = (props) => {
 
    return (
      <>
      
     
       <div className="container mt-5 mb-5 bg-light p-5">
        <div className="row mb-5">
         <div className="col-lg-6 col-sm-12 d-flex justify-content-center" >  
           <img id='imgteaminfo' src={require(`../images/${props.clicked.imgSrc}`)} alt=""  width="380px" height="350px" />
           
         </div>
         <div className="col-lg-6 col-sm-12">
           <p className="h1 text-dark fst-italic text-center">{props.clicked.teamName}</p>
           <hr />
          
             <p className="h3 my-lg-4 my-xs-3 text-secondary">Owner- <span className="h4 fst-italic text-danger">{props.clicked.owner}</span></p>
           <p className="h3 my-lg-4 my-xs-3 text-secondary">Coach- <span className="h4 fst-italic text-danger">{props.clicked.headcoach}</span></p>
           <p className="h3 my-lg-4 my-xs-3 text-secondary">Captain- <span className="h4 fst-italic text-danger">{props.clicked.captain}</span></p>
           <p  className="h3 my-lg-4 my-xs-3 text-secondary">Winners- 🏆<span id='winners' className="h4 fst-italic text-danger">{props.clicked.winners}</span></p>
         

           </div>
          
      

        </div>
        <div className="row mt-5">
        <p className="h1 text-dark fst-italic text-center">Retained Players</p>
           <hr />
           <table className="table table-striped table-hover">
                    <thead>
                        <tr style={{ backgroundColor: "rgb(26,58,130)", color: "white" }}>
                            <th scope="col"></th>
                            <th scope="col">Player Name</th>
                            <th scope="col">Role</th>
                            <th scope="col">Price</th>
                           
                            
                            <th scope="col">Country</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                            {
                                props.clicked.players[0].retainedPlayers.map((player)=>{
                                    return (
                                        
                                         <tr key={player.sno}>
                            <td scope="row">{player.sno}</td>
                            <td>{player.playerName}</td>
                            <td>{player.role}</td>
                            <td>{player.price}</td>   
                            <td>{player.country}</td>
                            

                        </tr>            

                                        
                                    )
                                })
                            }
                            
                            

                        

                    </tbody>
                </table>

        </div>
        <div className="row mt-4">
        <p className="h1 text-dark fst-italic text-center">Auction Pool</p>
           <hr />
           <table className="table table-striped table-hover">
                    <thead>
                    
                        <tr style={{ backgroundColor: "rgb(26,58,130)", color: "white" }}>
                            <th scope="col"></th>
                            <th scope="col">Player Name</th>
                            <th scope="col">Role</th>
                            <th scope="col">Price</th>
                           
                            
                            <th scope="col">Country</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                                props.clicked.players[1].auctionPool.map((player)=>{
                                    return (
                                        
                                         <tr key={player.sno}>
                            <td scope="row">{player.sno}</td>
                            <td>{player.playerName}</td>
                            <td>{player.role}</td>
                            <td>{player.price}</td>   
                            <td>{player.country}</td>
                            

                        </tr>            

                                        
                                    )
                                })
                            }
                       
                            
                                 

                        

                    </tbody>
                </table>


        </div>
      </div> 
    </>
  )
}

export default Teaminfo