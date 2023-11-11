import React from "react";
import styled from "styled-components";

const data = [
  {
    image:
      "https://framerusercontent.com/images/RGxoj1OWYnxPhEypnfPbyya0.png?scale-down-to=512",
    Maker: "0.025",
    Taker: "0.07",
  },
  {
    image:
      "https://framerusercontent.com/images/RGxoj1OWYnxPhEypnfPbyya0.png?scale-down-to=512",
    Maker: "0.02",
    Taker: "0.04",
  },
  {
    image:
      "https://framerusercontent.com/images/DNTQzRQMOU1ny1X7Xz3w4iHCBM.png?scale-down-to=512",
    Maker: "0.02",
    Taker: "0.05",
  },
];
const OuterContainer = styled.div`
  display: flex;
  padding: 140px 18rem;
  flex-direction: column;
  align-items: center;
  gap: 82px;
  align-self: stretch;
  background-color: #000;
`;

const TopContents = styled.div`
  span {
    font-family: "Neurial Grotesk", sans-serif;
    font-size: 72px;
    font-style: normal;
    font-weight: 700;
    line-height: 76.882px;
    letter-spacing: -2.097px;
  }

  span:nth-child(1) {
    color: var(--White, #fff);
    text-align: center;
  }

  span:nth-child(2) {
    color: var(--electric-green-primary, #ebff25);
  }

  div {
    color: var(--neutrals-grey-4, #e7e7ea);
    text-align: center;
    font-family: "Neurial Grotesk", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32.849px; /* 136.873% */
    margin-top: 20px;
  }
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  align-self: stretch;
  margin: 0 60px;
`;

const InnerDiv = styled.div`
  height: 438px;
  background: var(--neutrals-grey-9, #19191d);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  flex: 1 0 0;
`;

const Item = styled.div`
  img {
    width: 146px;
    height: 30px;
    flex-shrink: 0;
    margin-bottom:80px
  }
  div{
    display : flex;
    align-items: center;  
    justify-content: center;
    flex-direction: column;
  }
  h2 {
    color: var(--White, #fff);
    font-family: "Neurial Grotesk", sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -1.687px;
    margin-bottom:10px;
  }
  p {
    margin:0;
    color: var(--White, #fff);
    font-family: "Neurial Grotesk", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: -1.687px;
    opacity: 0.5;
  }

  `;
 
const TradeMore = () => {
  return (
    <OuterContainer>
      <TopContents>
        <span>Trade More. </span>
        <span>Pay Less</span>
        <div>Our low Fees Supercharge Your Profits</div>
      </TopContents>
      <Contents>
        {data.map((item, index) => (
          <InnerDiv key={index}>
            <Item>
              <div>
                <img src={item.image} alt={`Item ${index}`} />
              </div>
              <div>
                <h2>{item.Maker}</h2>
                <p>Item Maker</p>
              </div>
              <div>
                <h2>{item.Taker}</h2>
                <p>Item Taker</p>
              </div>
            </Item>
          </InnerDiv>
        ))}
      </Contents>
    </OuterContainer>
  );
};

export default TradeMore;
