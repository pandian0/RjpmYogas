function Wellness(){
    return(
        <>
            <h1 style={{textAlign:'center'}}>YOGIC WELLNESS FOR HEALTHY LIFESTYLE</h1>
            <br/>
            <div className="parent"  style={{display:'flex',justifyContent:'space-evenly'}}>
        

            <div className="chile">
           <img 
                src="https://dz8fbjd9gwp2s.cloudfront.net/orgData/5ec151380cf2b4feaa1bf5e5/pages/assets/images/WffBcbackpain.jpg"
                alt=""
                width={"300px"}
             />
             <br/><br/>
             <button style={{marginLeft:"80px"}}>Yoga for backpain</button>
            </div>
        
         <div className="child">
           <img 
                src="https://cdn.jsdelivr.net/gh/WCSC-Engineering/wcsc-spayee@main/assets/img/course/skyenergy/Thyroid/TT_CIMG.jpg"
                alt=""
                width={"300px"}

             />
             <br/><br/>
             <button style={{marginLeft:"50px"}}> Integrated thyroid therapy</button>
            </div>

 

            <div className="chile">
           <img 
                src="https://dz8fbjd9gwp2s.cloudfront.net/orgData/5ec151380cf2b4feaa1bf5e5/pages/assets/images/EiA3Xmeditation.jpg"
                alt=""
                width={"300px"}

             />
             <br/><br/>
             <button style={{marginLeft:"60px"}}>Meditation for backpain</button>
            </div>
             </div>
        </>
    )
}

export default Wellness;