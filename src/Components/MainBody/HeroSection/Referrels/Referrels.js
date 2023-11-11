import React from "react";
import styled from "styled-components";
import graphical_data from "../../../../images/graphical_data.png";

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
  margin: auto;
`;

const FlexBox = styled.div`
  display: flex;
  width: 1140px;
  height: 171px;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  background: rgba(16, 16, 16, 0.4);
  backdrop-filter: blur(26.25px);
  margin: 82px;
`;

const FlexItem = styled.div`
  color: var(--White, #fff);
  text-align: center;
 font-family: "Neurial Grotesk", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background:#19191D;
  width:32%;
  padding:30px 0;
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

const HeroImage = styled.img`
  width: 200px;
  height: 200px;
  flex-shrink: 0;
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
  flex-shrink: 0;
`;

const CenteralImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
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

const Referrels = () => {
  return (
    <>
      <OuterBox>
        <CenteralImage>
          <HeroImage
            src="https://framerusercontent.com/images/7aKKvEZCSVRFsDSyHuluqzNp1RQ.png?scale-down-to=512"
            alt="image1"
          />
        </CenteralImage>
        <FirstSection>
          <Title>
            {" "}
            <span>Earn Money.</span> The Easy Way.
          </Title>
          <Description>
            No Complexity of Trading Fee, generate volume and win
          </Description>
        </FirstSection>
        <SecondSection>
          <FlexBox>
            <FlexItem>
              <Image
                src="https://framerusercontent.com/images/7aKKvEZCSVRFsDSyHuluqzNp1RQ.png?scale-down-to=512"
                alt="image1"
              />
              <h3>
                Share your <br /> referrel link
              </h3>
            </FlexItem>
            <FlexItem>
              <Image
                src="https://framerusercontent.com/images/7aKKvEZCSVRFsDSyHuluqzNp1RQ.png?scale-down-to=512"
                alt="image1"
              />
              <h3>
                Invite Friends to <br /> Trade on Density
              </h3>
            </FlexItem>
            <FlexItem>
              {" "}
              <Image
                src="https://framerusercontent.com/images/7aKKvEZCSVRFsDSyHuluqzNp1RQ.png?scale-down-to=512"
                alt="image1"
              />
              <h3>
                Trade <br /> and Earn
              </h3>
            </FlexItem>
          </FlexBox>
        </SecondSection>
        <Button>start earning now</Button>
      </OuterBox>
    </>
  );
};

export default Referrels;
