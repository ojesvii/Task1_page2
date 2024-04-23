import React from 'react'
import styled from 'styled-components'

function Section2() {
  return (
    <Section>
        <div class="sec2">
           
           <div class="box"><h3>Expertise</h3>
               <img src="./images/Vector.png"/></div>
           <div class="box"><h3>Gender</h3>
               <img src="./images/Vector.png"/></div>
           <div class="box"><h3>Fees</h3>
               <img src="./images/Vector.png"/></div>
           <div class="box"><h3>Languages</h3>
               <img src="./images/Vector.png"/></div>
            <div class="box1">
                   <h3>All filters</h3>
                   <img src="./images/Vector.png"/>
               </div>
       </div>
    </Section>
  )
}

export default Section2;

const Section=styled.div`
/* sec 2 */
.sec2{
width: 100%;
height: 72px;
border:1px solid rgba(237, 237, 237, 1);
display:flex;
justify-content: center;
align-items: center;
gap:41px;

}
.sec2 .box{
    display:flex;
    justify-content: space-between;
    align-items: center;
    height:40px;
    width:148px;
    background-color: rgba(243, 243, 243, 1);
    border-radius: 7px;
    padding:6px 13px;
    cursor:pointer;

}
.sec2  h3{
    font-family: inter;
font-size: 16px;
font-weight: 500;
}
.sec2 .box1{
    display:flex;
    justify-content: space-between;
    align-items: center;
    height:40px;
    width:148px;
    background-color:  rgba(220, 238, 220, 1);
    border-radius: 7px;
    padding:6px 13px;
    cursor:pointer;
}
`;