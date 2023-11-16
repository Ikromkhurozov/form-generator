import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import {
  OptionsForm,
  OptionsTitle,
  OptionsWrapper, OptionWrapper, RadioInput,
} from "./FormOptionsStyles";
import {Button, Label} from "../../assets/styles/CommonStyles";
export default function FormOptions() {
  const navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
  };

  const onNext = () => {
    if (selectedOption == null){
      return;
    }
    navigate(`/generate/${selectedOption.toLowerCase()}`)
  }

  return (
   <OptionsWrapper>
     <OptionsTitle>Choose one of the options to generate necessary registration fields </OptionsTitle>

     <OptionsForm>
       <OptionWrapper><RadioInput onChange={handleRadioChange} id="option1" value="textInput" checked={selectedOption === "textInput"} /><Label htmlFor="option1">Choose If you create Input, contains Text</Label></OptionWrapper>
       <OptionWrapper><RadioInput onChange={handleRadioChange} id="option2" value="selectInput" checked={selectedOption === "selectInput"} /><Label htmlFor="option2">Choose If you create Input, contains Select, Option</Label></OptionWrapper>
       <OptionWrapper><RadioInput onChange={handleRadioChange} id="option3" value="radioInput" checked={selectedOption === "radioInput"} /><Label htmlFor="option3">Choose If you create Input, contains Radio</Label></OptionWrapper>
       <Button onClick={onNext} color="#fff" marginTop="10px" >Next</Button>
     </OptionsForm>

   </OptionsWrapper>
  );
}






