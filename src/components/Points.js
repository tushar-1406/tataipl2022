import React from 'react'
import '../css/Points.css'

export default function Points(props) {
    
  
    return (
        <>
            <div className="container mt-5 mb-5">
                <table className="table table-striped table-hover" style={{marginBottom:"100px"}}>
                    <thead>
                        <tr style={{ backgroundColor: "rgb(26,58,130)", color: "white" }}>
                            <th scope="col"></th>
                            <th scope="col">Team</th>
                            <th scope="col">Played</th>
                            <th scope="col">Won</th>
                            <th scope="col">Lost</th>
                            <th scope="col">Tied</th>
                            <th scope="col">Net RR</th>
                            <th scope="col">Points</th>
                        </tr>
                    </thead>
                    <tbody>

                   
                        



                        {props.points.map((team)=>{     
                            return (
                            
                            <tr key={team.sno}>
                            <td scope="row">{team.position}</td>
                            <td> <img src={require(`../images/${team.imgSrc}`)} alt="" height="30px" width="30px" style={{ borderRadius: "20px" }}/> &nbsp;{`${team.key.toUpperCase()}`}</td>
                            <td>{team.played}</td>
                            <td>{team.won}</td>
                            <td>{team.lost}</td>
                            <td>{team.draw}</td>
                            <td>{team.nrr}</td>
                            <td>{team.points}</td>

                        </tr>                     
                            
                            )
                                 
                                })}
                               
                            
                        
  
                        

                    </tbody>
                </table>


            </div>

        </>
    )
}
