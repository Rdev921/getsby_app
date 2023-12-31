import React from "react";
import styled from "styled-components";
import stat1 from "../../../images/stat1.png";
import stat2 from "../../../images/stat2.png";
import stat3 from "../../../images/stat3.png";
const data = [
  {
    image: stat1,
    text: "One App Endless Possibilities",
  },
  {
    image: stat2,
    text: "Future of Derivative Trading.",
  },
  {
    image: stat3,
    text: "Is now here, for you.",
  },
];

const Container = styled.div`
  display: flex;
  padding: 120px 0px 240px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
  align-self: stretch;
  background-color: #000;
   
`;

const StyledItem = styled.div`
  width: 200px;
  height: 620px;
  flex-shrink: 0;
  fill: #000;
  padding:0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow:   #1D7B6E 0px 0px 0px 2px;
  font-weight:normal;
  border-radius: 30px;
`;

const Image = styled.img`
  width: 130.016px;
  height: 185.997px;
  flex-shrink: 0;
`;


const Text = styled.p`
  color: var(--White, #fff);
  text-align: center;
  font-family: "Neurial Grotesk", sans-serif;
  font-size: 33.501px;
  font-style: normal;
  line-height: 40.201px; /* 120% */
  letter-spacing: -0.799px;
`;

const Properties = () => {
  return (
    <Container>
      {data.map((item, index) => (
        <StyledItem key={index}>
          <Image src={item.image} alt={`stat${index + 1}`} />
          <Text>{item.text}</Text>
        </StyledItem>
      ))}
    </Container>
  );
};

export default Properties;
