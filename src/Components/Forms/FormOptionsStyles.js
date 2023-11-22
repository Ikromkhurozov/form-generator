import styled from "styled-components";

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
`;

export const OptionsForm = styled.div`
  display: flex;
  flex-direction: column;
`

export const OptionWrapper  = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const OptionsTitle = styled.h2`
  width: 500px;
  text-align: center;
`;

export const RadioInput = styled.input.attrs({ type: 'radio' })`
  appearance: none;
  position: relative;
  width: 25px;
  height: 25px;
  background-color: #fff;
  border: 2px solid #0073FF;
  border-radius: 50%;


  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 13px;
    height: 13px;
    background-color: #0073FF;
    border-radius: 50%;
    opacity: ${(props) => (props.checked ? 1 : 0)};
    transition: opacity 0.2s ease-in-out; 
  }

  &:checked {
    border-color: #0073FF; 
  }
`;

export const ChooseOptionWarning = styled.div`
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: red;
  margin: 5px 0;
`
