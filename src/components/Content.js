import React from 'react'
import second from '../images/2.jpg'
import third from '../images/ipl1.png'
import fourth from '../images/3.jpeg'
import '../css/Content.css'
import Team from "./Team" ;

import { useEffect } from 'react'
const Tone = require("../Tone.mp3");



export default function Content(props) {
    useEffect(() => {
        
    }, [])
    let play=()=>{
       
        return <audio src={Tone} autoPlay />
        
    }
    
    
    return (
        <>
        {play()}
        
            <div className="container mt-5" style={{marginBottom:"100px"}}>
        <h1 className="mt-5 mb-0 fst-italic" style={{ textAlign: "center" }}>Ipl 2022 Season</h1>
< hr className='mx-auto text-danger' style={{width:"150px"}}/>
                < div id="carouselExampleSlidesOnly" className="carousel slide mt-5" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={require('../images/1.jpg')} className="d-block w-100 main " height="450px" alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src={fourth} className="d-block w-100 main" height="450px" alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src={second} className="d-block w-100 main " height="450px" alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src={third} className="d-block w-100 main " height="450px" alt="" />
                        </div>

                    </div>
                </div>
                

                <h1 className="mt-5 mb-0 fst-italic" style={{ textAlign: "center" }}>All Teams</h1>
               
< hr className='mx-auto text-danger' style={{width:"150px"}}/>
            

                <div id="teams" className='mb-5'>
      
                        <div className="row">

                            {props.teams.map((team)=>{
                                return <Team team={team} getTeam={props.getTeam} key={team.sno}/>
                                // console.log(team);
                            })}


                        </div>

                </div>
                
             

            </div>

        </>
    )
}
