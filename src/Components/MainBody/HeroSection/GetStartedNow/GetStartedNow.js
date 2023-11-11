import React from "react";
import styled from "styled-components";
import mobile from "../../../../images/mobile.png";

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  background: #000;
  margin-top: -120px;
`;

const GetStartedContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  top: 24%;
  left: 20%;
`;

const Heading1 = styled.h2`
  text-align: center;
  z-index: 1;
  margin-bottom : 620px;
 font-family: "Neurial Grotesk", sans-serif;
  font-size: 132.195px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -2.783px;
  background: linear-gradient(
    177deg,
    #fff 2.77%,
    rgba(255, 255, 255, 0) 139.85%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Button = styled.button`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  width: 866.226px;
  height: 134.978px;
  padding: 11.132px 33.397px;
  justify-content: center;
  align-items: center;
  gap: 6.958px;
  flex-shrink: 0;
  background: linear-gradient(
    269deg,
    #d4f938 38.89%,
    rgba(50, 216, 117, 0.96) 103.19%
  );
  color: #000;
 font-family: "Neurial Grotesk", sans-serif;
  font-size: 38.267px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top : 400px;
`;

const GetStartedNow = () => {
  return (
    <OuterContainer>
      <GetStartedContainer>
      <Heading1>Get started now</Heading1>
        <Image
        src={mobile}
        alt="mobile"
        />
        <Button>Start Trading!</Button>
      </GetStartedContainer>
    </OuterContainer>
  );
};

export default GetStartedNow;
