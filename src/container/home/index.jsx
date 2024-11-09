import React from 'react'

import { useNavigate } from 'react-router-dom'
import { Animate } from 'react-simple-animate'
import './style.scss'
const Home = ()=>{


const navigate =useNavigate();
console.log(navigate);

    const navigatetocontactme =()=>{
        navigate('/contact')

    };


    return (
        <section id='home' className='home'>
<div class="home_text_wrapper">
      <h1>Hi I am  Athreyjith </h1>
</div>
<Animate
play
duration={2}
delay={1}
start={{
    transform : 'translateY(551px)'
}}
end={{
    transform : 'translateX(0px)'
}}

><div className='home_contactme' >
<button className='home_contactme_button' onClick={navigatetocontactme}>contactme</button>
</div></Animate>

        </section>
        
    )
    
}
  
export default Home
