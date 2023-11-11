import React from "react";
import styled from "styled-components";
import prakash from "../../../../images/prakash_jamatia.png"

 
const OuterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 64px;
  align-self: stretch;
  background: var(--White, #fff);
  margin-bottom:150px;
`;

const FirstSection = styled.div`
  h2 {
    color: var(--Black, #0e0e0f);
    text-align: center;
 font-family: "Neurial Grotesk", sans-serif;
    font-size: 72px;
    font-style: normal;
    font-weight: 700;
    line-height: 76.882px; /* 106.78% */
    letter-spacing: -2.097px;
  }
  p {
    color: var(--neutrals-grey-8, #32333a);
    text-align: center;
    font-family: "Neurial Grotesk", sans-serif;
    font-size: 22.366px;
    font-style: normal;
    font-weight: 400;
    line-height: 32.849px;
    margin-top: -35px;
  }
`;

const FlexBox = styled.div`
  width:60%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  margin:0 auto;
  align-self: stretch;
`;

const Flexy = styled.div`
  display: flex;
  align-items: center;
  ${'' /* justify-content: space-between; */}
`;

const InnerDiv = styled.div`
background:#F3F3F3;
width:33.33%;
  height: 450px;
  ${'' /* flex: 1 0 0; */}
`;

const Image = styled.img`
  width: 35%;
  margin-left:22%;
  margin-top:60px;
`;

const BlockTitle = styled.h1`
 font-family: "Neurial Grotesk", sans-serif;
  font-size: 32px;
  font-weight: 700;
  margin-left:20px;
`;

const Paragraph = styled.p`
color:#666673;
 font-family: "Neurial Grotesk", sans-serif;
 text-lign:justify;
  font-size: 20px;
  width : 60%;
  margin-left:30px;

`;

 

const Feedbacks = () => {
  return (
    <OuterBox>
      <FirstSection>
        <h2>Don’t take our word for it.</h2>
        <p>
          Hear it from our expert community of traders who have made <br />{" "}
          insane amounts in a short amount of time
        </p>
      </FirstSection>

      <FlexBox>
        <InnerDiv>
          <Paragraph>
            As someone who's always looking for the next big thing, I was really
            excited to try out Density's crypto futures trading platform. And I
            have to say, it definitely lived up to my expectations.
          </Paragraph>
          <Flexy>
            <div>
              <BlockTitle>
                Prakash <br />
                Jamtiya
              </BlockTitle>
              <Paragraph>Founder, Tradeshala</Paragraph>
            </div>
            <Image
              src={prakash}
              alt="Description 1"
            />
          </Flexy>
        </InnerDiv>
        <InnerDiv>
          <Paragraph>
            As someone who's always looking for the next big thing, I was really
            excited to try out Density's crypto futures trading platform. And I
            have to say, it definitely lived up to my expectations.
          </Paragraph>
          <Flexy>
            <div>
              <BlockTitle>
                Prakash <br />
                Jamtiya
              </BlockTitle>
              <Paragraph>Founder, Tradeshala</Paragraph>
            </div>
            <Image
              src={prakash}
              alt="Description 1"
            />
          </Flexy>
        </InnerDiv>
        <InnerDiv>
          <Paragraph>
            As someone who's always looking for the next big thing, I was really
            excited to try out Density's crypto futures trading platform. And I
            have to say, it definitely lived up to my expectations.
          </Paragraph>
          <Flexy>
            <div>
              <BlockTitle>
                Prakash <br />
                Jamtiya
              </BlockTitle>
              <Paragraph>Founder, Tradeshala</Paragraph>
            </div>
            <Image
              src={prakash}
              alt="Description 1"
            />
          </Flexy>
        </InnerDiv>
      </FlexBox>
   
    </OuterBox>
  );
};

export default Feedbacks;
