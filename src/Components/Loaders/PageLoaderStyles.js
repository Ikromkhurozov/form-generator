import styled, { keyframes } from "styled-components";

const rollerAnimation = keyframes` 
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}`;

export const PageLoaderWrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 45%;
  left: 45%;
  width: 150px;
  height: 150px;

  @media (max-width: 500px) {
    left: 38%;
  }

  @media (max-width: 400px) {
    left: 30%;
  }

  div {
    animation: ${rollerAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 60px 60px;
  }

  div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #00bfb2;
    margin: -4px 0 0 -4px;
  }

  div:nth-child(1) {
    animation-delay: -0.036s;
  }

  div:nth-child(1):after {
    top: 83px;
    left: 83px;
  }

  div:nth-child(2) {
    animation-delay: -0.072s;
  }

  div:nth-child(2):after {
    top: 88px;
    left: 76px;
  }

  div:nth-child(3) {
    animation-delay: -0.108s;
  }

  div:nth-child(3):after {
    top: 91px;
    left: 68px;
  }

  div:nth-child(4) {
    animation-delay: -0.144s;
  }

  div:nth-child(4):after {
    top: 92px;
    left: 60px;
  }

  div:nth-child(5) {
    animation-delay: -0.18s;
  }

  div:nth-child(5):after {
    top: 91px;
    left: 52px;
  }

  div:nth-child(6) {
    animation-delay: -0.216s;
  }

  div:nth-child(6):after {
    top: 88px;
    left: 44px;
  }

  div:nth-child(7) {
    animation-delay: -0.252s;
  }

  div:nth-child(7):after {
    top: 83px;
    left: 37px;
  }

  div:nth-child(8) {
    animation-delay: -0.288s;
  }

  div:nth-child(8):after {
    top: 76px;
    left: 32px;
  }
`;