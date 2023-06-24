import './Css/Exper.css'

function exper(){
    return(
       <>
       <h1 style={{textAlign:'center'}}>Experiences with Vethathiri Maharishi</h1>
       <div  className='parent' style={{display:'flex',justifyContent:'center'}}>
         <img
          src="https://dz8fbjd9gwp2s.cloudfront.net/orgData/5ec151380cf2b4feaa1bf5e5/pages/assets/images/bhKREtitle.png"
          alt=""
          width={"500px"}
        />
        <p style={{width:'500px',marginTop:'30px',textAlign:'center',fontSize:'20px',letterSpacing:'2px'}}>Join us in this Journey where we travel alongside people who share their personal experiences with Vethathiri Maharishi.
       <button style={{marginTop:'10px'}}>Read More</button>
        </p>
        
       </div>
       </>
    )
}

export default exper;