import React from "react";
import styled from "styled-components";
import graphical_data from "../../../../images/graphical_data.png"

const OuterBox = styled.div`
  display: flex;
  padding: 150px 0px;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  align-self: stretch;
  background-color: #000;
`;

const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`;

const SecondSection = styled.div`
   margin : auto;
`;

const FlexBox = styled.div`
  display: flex;
  width: 1140px;
  height: 171px;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(16, 16, 16, 0.4);
  backdrop-filter: blur(26.25px);
`;

const Content = styled.div`
content:" ";
height:90px;
border:1px solid white;
`

const FlexItem = styled.div`
  color: var(--White, #fff);
  text-align: center;
  font-family: "Neurial Grotesk", sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
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

const Description = styled.p`
  color: var(--neutrals-grey-4, #e7e7ea);
  text-align: center;
  font-family: "Neurial Grotesk", sans-serif;
  font-size: 22.366px;
  font-style: normal;
  font-weight: 400;
  line-height: 32.849px;
  margin-top: -50px;
`;

const Image = styled.img`
width: 1130px;
height: 510px;
flex-shrink: 0;
 
`;

const UnlockNewFrontiers = () => {
  return (
    <OuterBox>
      <FirstSection>
        <Title>
          {" "}
          <span>Unlock</span> New Frontiers.
        </Title>
        <Description>
          Are you a stock trader looking for new opportunities to make <br />{" "}
          money? We got you covered!
        </Description>
      </FirstSection>
      <SecondSection>
        <FlexBox>
          <FlexItem>
            Same <br /> Strategies
          </FlexItem>
          <Content></Content>
          <FlexItem>
            Same <br />
            Indicators
          </FlexItem>
          <Content></Content>
          <FlexItem>
            {" "}
            Better <br />
            Leverage
          </FlexItem>
          <Content></Content>
          <FlexItem>
            {" "}
            24x7 <br />
            Trading
          </FlexItem>
        </FlexBox>
      </SecondSection>
 
        <Image src={graphical_data} alt="Description" />
 
    </OuterBox>
  );
};

export default UnlockNewFrontiers;
