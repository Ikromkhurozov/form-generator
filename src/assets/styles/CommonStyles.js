import styled from "styled-components";

export const Label = styled.div`
  font-size: ${(props) => props.fontSize || "16px"};
  color: ${(props) => props.color || "#111"};
  font-weight: ${(props) => props.weight || "400"};
  line-height: ${(props) => props.lineHeight || "1.3"};
`;

export const Button = styled.button`
  width: ${(props) => props.width || "150px"};
  min-width: ${(props) => props.width};
  height: ${(props) => props.height || "45px"};
  border: 1px solid ${(props) => props.bgColor || "#0073FF"};
  border-radius: 8px;
  background: ${(props) => (props.bgColor ? props.bgColor : "linear-gradient(360deg, #0073FF -1.25%, #00C2FF 100%)")};
  cursor: pointer;
  color: ${(props) => props.color || "#000"};
  font-size: ${(props) => props.fontSize || "16px"};
  margin-top: ${(props) => props.marginTop || "0"};
  margin-left: ${(props) => props.marginLeft || "0"};
  margin-right: ${(props) => props.marginRight || "0"};
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const CustomText = styled.div`
  font-size: ${(props) => props.fontSize || "16px"};
  color: ${(props) => props.color || "#111"};
  font-weight: ${(props) => props.weight || "400"};
  line-height: ${(props) => props.lineHeight || "1.3"};
`

export const FormPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
  width: 100%;
  max-width: 1200px;
`

export const FormWrapper = styled.div`
  display: ${(props) => props.display || "grid"};
  flex-wrap: wrap;
  grid-template-columns: ${(props) => props.columnTemplate || '3fr 3fr'};
  width: 100%;
  max-width: ${(props) => props.maxWidth || "650px"};
  background-color: ${(props) => props.bgColor || "#efefff"};
  padding: 25px 50px;
  border-radius: 10px;
  margin: 10px auto;
`;

export const CustomInput = styled.input.attrs(props => ({
  type: props.type || 'text',
  placeholder: props.placeholder || 'Enter text here',

}))`
  width: ${(props) => props.width || "90%"};
  height: ${(props) => props.height || "40px"};
  color: ${(props) => props.color || "#000"};
  font-size: ${(props) => props.fontSize || "16px"};
  margin-top: ${(props) => props.marginTop || "0"};
  outline: none;
  padding: 2px 7px;
  border: none;
  border-radius: 5px 5px 0 0 ;
  box-sizing: border-box;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'auto')};
  
  &::placeholder{
    font-size: 13px;
  }
  
  &:focus{
    border-bottom: 2px solid #0073FF;
  }
`

export const CustomInputWrapper =  styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "column"};
  align-items: ${(props) => props.alignItems || "start"};
  margin: ${(props) => props.margin || "15px 0"};
  
  &:nth-child(odd){
     margin: ${(props => props.margin || "15px 0")};
  }
`

export const BtnWrapper =  styled.div`
  display: flex;
  margin: 10px 0;
  
  button:last-child{
    margin-left: 30px;
  }
`

export const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  position: relative;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: 2px solid #0073FF; 
  border-radius: 4px;
  margin-right: ${(props) => props.marginRight || "0"};
  
  &::before {
    content: '\u2713'; 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px; 
    font-weight: 900;
    color: #fff; 
    opacity: ${(props) => (props.checked ? 1 : 0)}; 
    transition: opacity 0.2s ease-in-out; 
  }
  
  &:checked {
    background-color: #0073FF;
    border-color: #0073FF; 
  }
`;

export const FormContent = styled.form`
  display: flex;
  flex-wrap: wrap;
`

export const CustomSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #0073FF;
  border-radius: 4px;
  background-color: #fff;
  margin-right: ${(props) => props.marginRight || '0'};
  margin-top: ${(props) => props.marginTop || "0"};

  &:focus {
    outline: none;
    border-color: #0073FF;
    box-shadow: 0 0 5px rgba(0, 115, 255, 0.5);
  }

  &::after {
    content: '\u25BC';
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    font-size: 18px;
    color: #0073FF;
  }

  & option {
    background-color: #fff;
    color: #333;
  }

  &:hover option {
    background-color: #f0f0f0;
  }
`
