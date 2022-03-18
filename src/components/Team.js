import React from 'react'
import { useNavigate} from 'react-router-dom';
import Teaminfo from './Teaminfo';


// import React from 'react'

const Team = (props) => {
    const navigate=useNavigate();
    function updateClick(team){
        
        props.getTeam(team);
        navigate("/teaminfo");
    }
  return ( 
   
          <>
          
             {/* <div className="col-sm-6 col-xs-12 column px-5 mt-5" onClick={()=>props.hello(props.team)}> */}
             <div className="col-sm-6 col-xs-12 column px-5 mt-5" onClick={()=>updateClick(props.team)}>
                                <div className="card c p-0" >
                                    <div className="imgoverflow">
                                    <img className="card-img-top" src={require(`../images/${props.team.imgSrc}`)} alt="" />
    
                                    </div>
                                    <div className="card-body py-1" style={{ backgroundColor:"rgb(0 0 0 / 6%)" }}>
                                        <h6 className="card-title" style={{ textAlign: "center"}}>{props.team.teamName}</h6>
                                    </div>
                                </div>
                            </div>
        
          </>
    
      )
    
    
  
}

export default Team


