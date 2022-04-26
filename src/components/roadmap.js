import styled from "styled-components";

export const RoadmapTimeline = styled.div`
  position: relative;
  max-width: 1340px;
  padding:0px 30px;
  margin: 0 auto;
  margin-top: 100px;
  &::after {
    content: "";
    position: absolute;
    width: 6px;
    background-color: #25252d;
    top: 0;
    bottom: 0;
    border-radius: 50px;
    left: 50%;
    margin-left: -3px;
    @media screen and (max-width: 600px) {
      left: 0px;

    }
  }
  @media screen and (max-width:600px){
    padding:0px;
    padding-left:20px;
  }
`;

export const RoadmapTimelineLeft = styled.div`
  left: -25px;
  position: relative;
  background-color: inherit;
  width: 50%;
  &::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    right: -37px;
    background-color: #450000;
    border: 4px solid var(--hover);
    top: 15px;
    border-radius: 50%;
    z-index: 1;
    @media screen and (max-width: 600px) {
      left: -32px;
    }
  }
  @media screen and (max-width: 600px) {
    width:100%;
    left:0px;
    margin-top:30px;
  }
`;

export const RoadmapContent = styled.div`
  background-color: rgba(0,0,0,0.15);
  position: relative;
  padding: 30px;
  border-radius: 20px;
`;

export const RoadmapContentTitle = styled.p`
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 24px;
  color: #fff;
`;

export const RoadmapContentText = styled.p`
  font-size: 15px;
  color:white;
  & > svg {
    font-size: 12px;
    margin-right: 10px;
    color: #7fffd4;
  }
`;

export const RoadmapTimelineRight = styled.div`
  left: 50%;
  position: relative;
  background-color: inherit;
  width: 50%;
  margin-left:30px;
  &::after {
    left: -42px;
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: #450000;
    border: 4px solid var(--hover);
    top: 15px;
    border-radius: 50%;
    z-index: 1;
    @media screen and (max-width: 600px) {
      left: -34px;
    }
  }
  @media screen and (max-width: 600px) {
      width:100%;
      left:0px;
      margin-left:0px;
      margin-top:30px;  
    }
`;
