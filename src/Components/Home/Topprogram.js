import './Css/Top.css'
function Top(){
    
    return(
         <>
         <center>
         <h1>Our Top Program</h1></center>
         <br/>
         <div className='parent' style={{display:"flex",justifyContent:'center'}}>
            <div style={{flexDirection:'column'}}>
         <img src='https://dz8fbjd9gwp2s.cloudfront.net/orgData/5ec151380cf2b4feaa1bf5e5/pages/assets/images/MpyFLbubbles01.jpg' alt="" width={'350px'} style={{marginRight:'100px'}} />
         <br/><br/>
         <button style={{marginLeft:"140px"}}>Register</button>
         </div>

        <div style={{flexDirection:'column'}}>
         <img src='https://dz8fbjd9gwp2s.cloudfront.net/orgData/5ec151380cf2b4feaa1bf5e5/pages/assets/images/iM29Zbubbles02.jpg' alt="" width={'350px'}/>
            <br/><br/>
            <button style={{marginLeft:"140px"}}>Register</button>
        </div>
        </div>
         </>
    )
}

export default Top