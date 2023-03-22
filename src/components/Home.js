import React from "react";
import {FcExpand} from "react-icons/fc";


function Home(){
    return(<> 
    <div className="hero__section safe"> 
        <section>
            <div style={{display:'flex',flexDirection:'row', alignItems:'center', gap:'5px'}}>
            <p className="tag__line">Community</p>
            <p className="black__line">of Developers</p>
            </div>

            <div style={{display:'flex',flexDirection:'row', alignItems:'center', gap:'5px'}}>
            <p className="black__line">Who</p>
            <p className="black__line">Improves</p>
            <p className="tag__line">Society</p>
            </div>
            <h2 style={{marginTop:'10px'}}>We love to hack problems with softwares</h2>
            <p style={{fontSize:'22px', fontWeight:300, color:"grey"}}>We are dev for society, an community initiative by Developers. Our target audiance are the poor people who are facing difficulties in the term of financial as well as in the mental heath. Our mission is to remove the #17 united nation problems governed by the W.H.O and our team is working towards that mission and moving our path towards acheivement. We're currently contributing actively on the #2 problem,i.e. Zero Hunger. Fell free to contribute into our project and be the part of this amazing journey.</p>
            <div style={{background: 'linear-gradient(90deg, rgb(0, 170, 255), rgb(255, 0, 255)', width:'10rem', height:'0.5rem',paddingRight:'10px', marginTop:'1rem', borderRadius:'10px'}}></div>
        </section>
        <section>
        
        </section>   


        
    </div>
    <center>
    <div className="Explore__btn">
        <FcExpand/>
        <p>Explore Now</p>
    </div>
    </center>
    </>);
}

export default Home;