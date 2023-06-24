import './Css/Sky.Css'

function Sky(){
    return(
        <>
            <h1 style={{textAlign:'center'}}>SKY ENERGY</h1>
            <h2 style={{textAlign:'center'}}>IMMUNITY ENGINEERING (SELF LEARNING MODE)</h2>
            <br/>
            <div className='parent' style={{display:'flex',justifyContent:'space-evenly'}}>
            <iframe className='if1' width="400" height="215" src="https://www.youtube.com/embed/6vVLrSM2kjo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{marginTop:'50px'}}></iframe>
            <iframe className='if1' width="400" height="215" id='if2'  src="https://www.youtube.com/embed/6vVLrSM2kjo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{marginTop:'50px'}}></iframe> 
            </div>
            <br/>

            <div style={{display:'flex', justifyContent:"center"}}>
                <button style={{marginRight:"10px"}}>Know more</button>
                <button>Join Now</button>
            </div>
        </>
    )

}

export default Sky;

