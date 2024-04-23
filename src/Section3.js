import React from 'react'
import styled from 'styled-components'

function Section3() {
  return (
   <Section>
     <div class="sec3">                
             
             <div class="box">
                <h3>Hindi</h3>
                <img src="../images/cross.png"/>
             </div>
             <div class="box">
                <h3>Rs.0-Rs.500</h3>
                <img src="../images/cross.png"/>
             </div>
             <div class="box">
                <h3>Female</h3>
                <img src="../images/cross.png"/>
             </div>
             <div class="box">
                <h3>Hair care</h3>
                <img src="../images/cross.png"/>
             </div>
             
        </div>
   </Section>
  )
}

export default Section3;

const Section=styled.div`
/* section 3 */
.sec3 {
    display:flex;
    flex-direction: row-reverse;
    gap:16px;
  
    margin-left: 165px;
    margin-right: 160px;
    margin-top:50px;
}
.sec3 .box{
    display:flex;
    justify-content: center;
    align-items: center;
    gap:10px;
    cursor:pointer;
    padding:12px 20px;
    /* height:45px;
    width:139px; */
    border-radius: 31px;
    background-color:rgba(234, 242, 234, 1);
}
.sec3 h3{
    font-family: Inter;
font-size: 16px;
font-weight: 400;
letter-spacing: 0.5px;
color:rgba(0, 0, 0, 1);
}
`;