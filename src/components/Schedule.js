import React from "react";
import "../css/Schedule.css"

export default function Schedule(props) {
  return (
    <div key={12} className="container mt-5" style={{marginBottom:"100px"}}>
      {
        props.ipl2022.schedule.map((match)=>{
          return (
            <>
            <div key={match.matchno} className="row mb-3 outerborder border  rounded p-2"  style={{backgroundColor:"white"}}>
            <div key={4} className="col-12 text-center h2 text-success">Match-{match.matchno}</div>
            
        
      <div key={5}  className="row p-2 mx-auto inner" >
        <div key={2} className="col-5 text-start my-auto">
          <img
            src={require(`../images/${match.team1img}`)}
            alt=""
            height="100px"
            width="100px"
            style={{ borderRadius: "50px" }} 
          /> <h4 style={{display:"inline"}} className="my-auto" >{match.team1}</h4>
        </div>
        <div key={7}  className="col-2 text-center fst-italic fw-bold h3 my-auto " id="vs">VS</div>
        <div key={6} className="col-5 text-end my-auto">
          <h4 style={{display:"inline"}} className="my-auto" >{match.team2} </h4>
          <img
            src={require(`../images/${match.team2img}`)}
            alt=""
            height="100px"
            width="100px"
            style={{ borderRadius: "50px" }} 
          />
        </div>
      </div>
      <div key={7} className="row mt-2">
          <div key={1} className="col-4 h5 text-center">{match.time} IST</div>
          <div key={9} className="col-4 h5 text-center">{match.date}</div>
          <div key={8} className="col-4 h5 text-center">{match.location}</div>
      </div>
      </div>


            </>
          )
        })
      }
        {/* <div className="row mt-4 outerborder border  rounded p-2">
            <div className="col-12 text-center h2 text-success">Match-1</div>
            
        
      <div className="row p-2 mx-auto inner" >
        <div className="col-5 text-start my-auto">
          <img
            src={require(`../images/${props.ipl2022.teams[0].imgSrc}`)}
            alt=""
            height="100px"
            style={{ borderRadius: "50px" }} 
          /> <h2 style={{display:"inline"}} className="my-auto" > Chennai Super Kings</h2>
        </div>
        <div className="col-2 text-center fst-italic fw-bold h3 my-auto " id="vs">VS</div>
        <div className="col-5 text-end my-auto">
          <h2 style={{display:"inline"}} className="my-auto" >Chennai Super Kings </h2>
          <img
            src={require(`../images/${props.ipl2022.teams[0].imgSrc}`)}
            alt=""
            height="100px"
            style={{ borderRadius: "50px" }} 
          />
        </div>
      </div>
      <div className="row mt-2">
          <div className="col-4 h5 text-center">19:30 IST</div>
          <div className="col-4 h5 text-center">28-March-2022</div>
          <div className="col-4 h5 text-center">Wankhde Stadium,Mumbai</div>
      </div>
      </div> */}
        
    </div>
  );
}
