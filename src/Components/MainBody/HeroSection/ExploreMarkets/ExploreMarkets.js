import React from "react";
import styled from "styled-components";

import ethereum_image  from "../../../../images/etherium.png"
// Styled Components
const OuterBox = styled.div`
  display: flex;
  padding: 140px 0px;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  align-self: stretch;
  background-color: #000;
`;

const TopBox = styled.div`
  /* Define styles for the top box */
`;

const Title = styled.div`
  h2 {
    color: var(--White, #fff);
    text-align: center;
    font-family: "Neurial Grotesk", sans-serif;
    font-size: 72px;
    font-style: normal;
    font-weight: 700;
    line-height: 76.882px;
    letter-spacing: -2.097px;
  }
  span {
    color: var(--White, #ebff25);
  }
`;

const SubTitle = styled.p`
  width: 659.086px;
  color: var(--neutrals-grey-4, #e7e7ea);
  text-align: center;
  font-family: "Neurial Grotesk", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  margin-top: -25px;
`;

const Image = styled.img`
  width : 95%;
`;

const ExploreButton = styled.button`
  display: flex;
  height: 48px;
  padding: 24px 48px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  color: #000;
  font-family: "Neurial Grotesk", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  background: linear-gradient(86deg, #d4f938 23.09%, #32d875 108.69%);
  box-shadow: 0px 0px 16px 0px rgba(168, 239, 156, 0.8);
  backdrop-filter: blur(5px);
`;

// Component
const ExploreMarkets = () => {
  return (
    <OuterBox>
      <TopBox>
        <Title>
          <h2>
            Explore the Markets <br />
            like it is your <span>Playground.</span>
          </h2>
        </Title>
        <SubTitle>
          Search for your favorite coins and stay ahead of the market
        </SubTitle>
      </TopBox>
        <Image src={ethereum_image} alt="Description" />
        <ExploreButton>Explore markets</ExploreButton>
      {/* Other sections/components within the OuterBox */}
    </OuterBox>
  );
};

export default ExploreMarkets;
