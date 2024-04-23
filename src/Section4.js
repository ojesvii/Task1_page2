import React from 'react'
import styled from 'styled-components'

function Section4() {
  return (
    <Section>
         <div class="sec4">
            <div class="box">
                <div class="sub1">
                <img src="./images/girl_smile.png"/>
                <div class="rating">
                    <h4>4.5</h4> 
                    <img src="./images/sinngle-star.png"/>
                </div> 
                </div>
                <div class="sub2">
                    <h3>Dr. Prerna Narang</h3>
                    <div class="mid">
                        <div class="sub_mid">
                            <img src="./images/s1.png"/>
                            <h4>Male-Female Infertility</h4>
                        </div>
                        <div class="sub_mid1">
                            <img src="./images/s2.png"/>
                            <h4>7 years of Experience</h4>
                        </div>
                        <div class="sub_mid2">
                            <img src="./images/s3.png"/>
                            <h4>Speaks: English, Hindi, Marathi</h4>
                        </div>
                    </div>
                    <div class="end">
                        <div class="end_sub">
                            <h4>Video Consultation</h4>
                            <h5>₹800</h5>
                        </div>
                        <div class="end_sub">
                            <h4>Chat Consultation</h4>
                            <h5>Free</h5>
                        </div>
                    </div>
                </div>
                <div class="sub3">
                    <button class="but1">View Profile</button>
                    <button class="but2">Book a consultation</button>
                </div>
            </div>
            <div class="box">
                <div class="sub1">
                <img src="./images/girl_smile.png"/>
                <div class="rating">
                    <h4>4.5</h4> 
                    <img src="./images/sinngle-star.png"/>
                </div> 
                </div>
                <div class="sub2">
                    <h3>Dr. Prerna Narang</h3>
                    <div class="mid">
                        <div class="sub_mid">
                            <img src="./images/s1.png"/>
                            <h4>Male-Female Infertility</h4>
                        </div>
                        <div class="sub_mid1">
                            <img src="./images/s2.png"/>
                            <h4>7 years of Experience</h4>
                        </div>
                        <div class="sub_mid2">
                            <img src="./images/s3.png"/>
                            <h4>Speaks: English, Hindi, Marathi</h4>
                        </div>
                    </div>
                    <div class="end">
                        <div class="end_sub">
                            <h4>Video Consultation</h4>
                            <h5>₹800</h5>
                        </div>
                        <div class="end_sub">
                            <h4>Chat Consultation</h4>
                            <h5>Free</h5>
                        </div>
                    </div>
                </div>
                <div class="sub3">
                    <button class="but1">View Profile</button>
                    <button class="but2">Book a consultation</button>
                </div>
            </div>
            <div class="box">
                <div class="sub1">
                <img src="./images/girl_smile.png"/>
                <div class="rating">
                    <h4>4.5</h4> 
                    <img src="./images/sinngle-star.png"/>
                </div> 
                </div>
                <div class="sub2">
                    <h3>Dr. Prerna Narang</h3>
                    <div class="mid">
                        <div class="sub_mid">
                            <img src="./images/s1.png"/>
                            <h4>Male-Female Infertility</h4>
                        </div>
                        <div class="sub_mid1">
                            <img src="./images/s2.png"/>
                            <h4>7 years of Experience</h4>
                        </div>
                        <div class="sub_mid2">
                            <img src="./images/s3.png"/>
                            <h4>Speaks: English, Hindi, Marathi</h4>
                        </div>
                    </div>
                    <div class="end">
                        <div class="end_sub">
                            <h4>Video Consultation</h4>
                            <h5>₹800</h5>
                        </div>
                        <div class="end_sub">
                            <h4>Chat Consultation</h4>
                            <h5>Free</h5>
                        </div>
                    </div>
                </div>
                <div class="sub3">
                    <button class="but1">View Profile</button>
                    <button class="but2">Book a consultation</button>
                </div>
            </div>
        </div>
    </Section>
  )
}

export default Section4 ;

const Section=styled.div`
/* section 4 */

.sec4{
    display:flex;
    
    gap:43px;

    margin-left: 165px;
    margin-right: 120px;
    margin-top:50px;

}

.sec4 .box{

    width: 356px;
height: 561px;
display:flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
position: relative;

padding: 29px 31px 26px 36px;
gap: 10px;
border-radius: 30px ;
border: 1px solid rgba(227, 227, 227, 1);
background-color: rgba(255, 247, 226, 1);


}
.rating{
    display:flex;
    gap:5px;
    border:1px solid black;
    height:28px;
    width:70px;
    background: linear-gradient(180deg, #0B0B0B 0%, rgba(11, 11, 11, 0.79) 100%);
    border-radius: 17px;
    padding:4px 12px;
    color:white;
    position: absolute;
    top: 160px;
    left: 145px;
    
    
}
.rating h4{
    font-family: Inter;
font-size: 16px;
font-weight: 700;

letter-spacing: -0.01em;
}

.sec4 .sub2{
    height:195px;
    width:289px;
    
}
.sec4 .sub2 h3{
    font-family: Nunito;
font-size: 32px;
font-weight: 700;

letter-spacing: -0.01em;


}
.sec4 .mid{
    display:flex;
    flex-direction: column;
    padding:5px 10px;
    gap:10px;
    width:289px;
}
.mid .sub_mid{
    display: flex;
    align-items: center;
    gap:13px;
    height:20px;
    width: 191px;
}
.sub_mid img{
height:16px;
width:16px;
}
.mid .sub_mid h4{
    font-family: Nunito;
font-size: 16px;
font-weight: 400;
color: rgba(100, 102, 101, 1);
letter-spacing: -0.01em;



}

.mid .sub_mid1{
    display: flex;
    align-items: center;
    gap:7px;
    height:24px;
    width: 184px;
}
.sub_mid1 img{
height:24px;
width:24px;
}
.mid .sub_mid1 h4{
    font-family: Nunito;
    font-size: 16px;
    font-weight: 400;
    color: rgba(100, 102, 101, 1);
    letter-spacing: -0.01em;  
}
.mid .sub_mid2{
    display: flex;
    align-items: center;
    gap:7px;
    height:20px;
    width: 247px;
}
.sub_mid2 img{
height:16px;
width:18px;
}
.mid .sub_mid2 h4{
    font-family: Nunito;
    font-size: 16px;
    font-weight: 400;
    color: rgba(100, 102, 101, 1);
    letter-spacing: -0.01em;  
}
.end{
    width: 289px;
height: 57px;
gap: 8px;
padding:0 5px;
display:flex;
margin-top:8px;

}
.end_sub{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 136px;
height: 57px;
padding: 0;
gap: 4px;
border-radius: 10px;
border: 1px solid rgba(58, 100, 59, 0.39);
}
.end_sub h4{
    font-family: Nunito;
font-size: 14px;
font-weight: 600;
letter-spacing: -0.01em;
color:rgba(60, 60, 60, 1);

}
.end_sub h5{
    font-family: Nunito;
font-size: 14px;
font-weight: 700;
letter-spacing: -0.01em;
color: rgba(58, 100, 59, 1);


}

.sec4 .sub3{
    display:flex;
    flex-direction: column;
    gap:9px;
    margin-top:15px;

}
.sec4 .sub3 .but1{
 height:42px;
 width:284px;
 border:1px solid  rgba(58, 100, 59, 1);
 border-radius: 8px;
 font-family: Nunito;
 font-size: 16px;
 font-weight: 600;
 letter-spacing: -0.01em;
 color: rgba(58, 100, 59, 1);
 background-color:rgba(255, 255, 255, 1);
 }

 .sec4 .sub3 .but1:hover{
    background-color:rgba(58, 100, 59, 1);
    color:white;
    cursor: pointer;
 }
 .sec4 .sub3 .but2{
    height:53px;
    width:287px;
    color:white;
    border-radius: 8px;
    font-family: Nunito;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.01em;
    background-color:rgba(58, 100, 59, 1);
    border:none;
}
.sec4 .sub3 .but2:hover{
 background-color: orange;
    color:black;
    cursor: pointer;
 }
`;