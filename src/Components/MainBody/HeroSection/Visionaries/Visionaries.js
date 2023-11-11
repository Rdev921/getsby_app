import React from "react";
import styled from "styled-components";

// OuterBox component
const OuterBox = styled.div`
  display: flex;
  padding: 140px 0px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 82px;
  align-self: stretch;
  background: #19191D;
`;

 

const Paragraph = styled.p`
  color : #a9a9a9;
`;

const FlexBox = styled.div`
  display: flex;
  width: 1040px;
  height: 191px;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  gap : 70px;

  backdrop-filter: blur(26.25px);
`;
 
const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`;

const Title = styled.h2`
  color: var(--electric-green-primary, #ebff25);
  text-align: center;
 font-family: "Neurial Grotesk", sans-serif;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 76.882px; /* 106.78% */
  letter-spacing: -2.097px;

  span {
    color: var(--White, #fff);
  }
`;
 

const Button = styled.button`
  display: flex;
  height: 48px;
  padding: 24px 48px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: linear-gradient(86deg, #d4f938 23.09%, #32d875 108.69%);
  box-shadow: 0px 0px 16px 0px rgba(168, 239, 156, 0.8);
  backdrop-filter: blur(5px);
  color: #000;
 font-family: "Neurial Grotesk", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;

const Flexy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding  :60px 90px;
    background: rgba(16, 16, 16, 0.4);
`;

const Image = styled.img`
  width: 80%;
`;

const BlockTitle = styled.h1`
 font-family: "Neurial Grotesk", sans-serif;
  font-size: 32px;
  font-weight: 700;
  margin-top: -40px;
  color : white;
`;

 

const Visionaries = () => {
  return (
    <OuterBox>
      <FirstSection>
        <Title>
          {" "}
         <span> Meet the</span>  Visionaries <br/> <span>behind Density. </span>  
        </Title>
      </FirstSection>
      <FlexBox>
      <Flexy>
            <div>
            <BlockTitle>
               Aakash Neeraj<br />
                Mittal
              </BlockTitle>
              <Paragraph>CEO, Density</Paragraph>
            </div>
            <Image
              src="https://framerusercontent.com/images/rpNXycRYwOL2fZ6QsuITaxNCvPo.png?scale-down-to=512"
              alt="Description 1"
            />
       </Flexy>
      <Flexy>
            <div>
              <BlockTitle>
                 Bhupendra<br />
                 Bhule
              </BlockTitle>
              <Paragraph>CTO, Density</Paragraph>
              
            </div>
            <Image
              src="https://framerusercontent.com/images/4n8TnsDzZ83qgQQ4T8ls6EicHE.png?scale-down-to=512"
              alt="Description 1"
            />
       </Flexy>
      <Flexy>
            <div>
              <BlockTitle>
               Deepak<br />
               Vasman
              </BlockTitle>
              <Paragraph>CBO, Density</Paragraph>
            </div>
            <Image
              src="https://framerusercontent.com/images/5Sox37z0hcHue5OfRbADcxNU0w.png?scale-down-to=512"
              alt="Description 1"
            />
       </Flexy>     
      </FlexBox>
      <Button>Join community</Button>
    </OuterBox>
  );
};

export default Visionaries;
