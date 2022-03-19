import React from 'react'
import second from '../images/2.jpg'
import third from '../images/ipl1.png'
import fourth from '../images/3.jpeg'
import '../css/Content.css'
import Team from "./Team" ;
import { useState } from 'react'

import { useEffect } from 'react'
const Tone = require("../Tone.mp3");



export default function Content(props) {
    let [ipl2022,setipl2022]=useState(null);
    let play=()=>{
       
        return <audio src={Tone} autoPlay />
        
        
    }
    useEffect(() => {

        
          let GetData=async()=>{
          
            let response=await fetch("https://ipl2022api.herokuapp.com/");
          
            let data=await response.text()
            data=JSON.parse(data);
            // console.log(JSON.parse(data));
            setipl2022(data);
            
        
            
        }
        GetData()
        
        
        
    }, [])
    
    
    return (
        <>
        {play()}
        
        
            <div className="container mt-5" style={{marginBottom:"100px"}}>
        <h1 className="mt-5 mb-0 fst-italic" style={{ textAlign: "center" }}>Ipl 2022 Season</h1>
< hr className='mx-auto text-danger' style={{width:"150px"}}/>
                <div id="carouselExampleSlidesOnly" className="carousel slide mt-5" data-bs-ride="carousel">
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

                            {/* { props.teams.map((team)=>{
                                return <Team team={team} getTeam={props.getTeam} key={team.sno}/>
                                // console.log(team);
                            })} */}
                            {ipl2022 && ipl2022.teams.map((team)=>{
                                return <Team team={team} getTeam={props.getTeam} key={team.sno}/>
                                // console.log(team);
                            })}


                        </div>

                </div>
                
             

            </div>

        </>
    )
}
