import React from "react";
import styled from "styled-components";

const OutermostContainer = styled.div`
  display: flex;
  padding: 1rem 16rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  background-color: #000;
`;

const StatisticsContainer = styled.div`
  display: flex;
  height: 171px;
  align-items: center;
  align-self: stretch;
  background: linear-gradient(180deg, rgba(235, 255, 37, 0) 15.62%, rgba(235, 255, 37, 0.4) 49.48%, rgba(235, 255, 37, 0) 85.42%);
  background: rgba(0, 0, 0, 0.05);
  box-shadow: 0px 0px 10px 0px rgba(235, 255, 37, 0.20);
  backdrop-filter: blur(26.25px);   
`;

const SingleData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
`;



const StatisticData = styled.div`
  color: var(--electric-green-primary, #ebff25);
  font-family: "Neurial Grotesk", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const StatisticText = styled.div`
  color: #a9a9a9;
  font-family: "Neurial Grotesk", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
`;

const Data = [
  {
    data: "00%",
    text: "Conversion Fee",
  },
  {
    data: "500 Mn+",
    text: "Lifetime Volume Traded",
  },
  {
    data: "250+",
    text: "Total Tradable Pairs",
  },
  {
    data: "15,000+",
    text: "Traders",
  },
];

const Statistics = () => {
  return (
    <OutermostContainer>
      <StatisticsContainer>
        {Data.map((stat, index) => (
          <SingleData key={index}>
            <StatisticData>{stat.data}</StatisticData>
            <StatisticText>{stat.text}</StatisticText>
          </SingleData>
        ))}
      </StatisticsContainer>
    </OutermostContainer>
  );
};

export default Statistics;
