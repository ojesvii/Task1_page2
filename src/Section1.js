import React from 'react'
import styled from 'styled-components'

function Section1() {
  return (
    <Section>
         <div class="sec1">
            <div class="ellipse1 com"></div>
            <div class="ellipse2 com"></div>
            <div class="ellipse3 com"></div>
            <div class="ellipse4 com"></div>
            <h4>Find expert Doctors for an In-clinic session here </h4>
            <div class="part2">
                <div class="location-dropdown">
                    <img src="./images/location.png" style={{height:"24px",width:"24px"}}/>
                    <h3>Select Location</h3>
                    <img src="./images/down_arrow.png" style={{height:"24px",width:"24px"}}/>
                </div>
                <div class="search_bar">
                    <input type="text" placeholder="eg. Doctor, specialisation, clinic name" />
                    <img src="./images/arrow_forward.png"/>
                </div>

            </div>
        </div>
    </Section>
  )
}

export default Section1;

const Section=styled.div`
.sec1 {
    width:100%;
    height: 221px;
    background-color: rgba(234, 242, 234, 1);
    position:relative;
    overflow: hidden;
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items: center;
 

}
.sec1 h4{
    font-family: Inter;
font-size: 32px;
font-weight: 500;
letter-spacing: 0.005em;


}
.com{
    width: 184px;
    height: 184px;
    border-radius: 50%;
position: absolute;
background-color: rgba(207, 235, 207, 0.5);
}
.ellipse1{
   
top: -108px;
left: 1149px;

}
.ellipse2{

top: -100px;
left: 115px;

}
.ellipse3{
top: 113px;
left: 234px;

}
.ellipse4{
top: 104px;
left: 1071px;

}

.part2{
display:flex;
height:54px;
width:682px;
gap:8px;


}
.location-dropdown{
display:flex;
height:54px;
width:200px;
border:1px solid  rgba(212, 212, 212, 1);
padding:4px 12px;
justify-content: center;
align-items: center;
gap:4px;
border-radius: 8px;
background-color: white;
z-index:9;
cursor:pointer;
}
.location-dropdown h3{

font-family: Inter;
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.005em;
text-align: center;

}
.search_bar{
display:flex;
justify-content: space-between;
align-items: center;
border:1px solid  rgba(212, 212, 212, 1);
height:54px;
width:474px;
z-index:9;
border-radius:8px;
background-color: white;
padding:13px 10px;
}
.search_bar input{
width:321px;
font-family: Inter;
font-size: 16px;
font-weight: 400;

letter-spacing: 0.5px;
text-align: center;
color:rgba(123, 123, 123, 1);
border:none;
}

`;