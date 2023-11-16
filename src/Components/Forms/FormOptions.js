import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import {
  ChooseOptionWarning,
  OptionsForm,
  OptionsTitle,
  OptionsWrapper, OptionWrapper, RadioInput,
} from "./FormOptionsStyles";
import {Button, Label} from "../../assets/styles/CommonStyles";
export default function FormOptions() {
  const navigate = useNavigate()
  const [warning, setWarning] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
  };

  const onNext = () => {
    if (selectedOption == null){
      setWarning(true);
      return;
    }

    navigate(`/generate/${selectedOption}`)
  }

  return (
   <OptionsWrapper>
     <OptionsTitle>Choose one of the options to generate necessary registration fields </OptionsTitle>

     <OptionsForm>
       <OptionWrapper><RadioInput onChange={handleRadioChange} id="option1" value="text-input" checked={selectedOption === "text-input"} /><Label htmlFor="option1">Choose If you create Input, contains <b>Text</b></Label></OptionWrapper>
       <OptionWrapper><RadioInput onChange={handleRadioChange} id="option2" value="select-input" checked={selectedOption === "select-input"} /><Label htmlFor="option2">Choose If you create Input, contains <b>Select, Option</b></Label></OptionWrapper>
       <OptionWrapper><RadioInput onChange={handleRadioChange} id="option3" value="radio-input" checked={selectedOption === "radio-input"} /><Label htmlFor="option3">Choose If you create Input, contains <b>Radio</b></Label></OptionWrapper>
       <OptionWrapper><RadioInput onChange={handleRadioChange} id="option4" value="checkbox-input" checked={selectedOption === "checkbox-input"} /><Label htmlFor="option4">Choose If you create Input, contains <b>Checkbox</b></Label></OptionWrapper>
       {warning && <ChooseOptionWarning>Please choose one option from the list above!</ChooseOptionWarning>}
       <Button onClick={onNext} color="#fff" marginTop="10px" >Next</Button>
     </OptionsForm>

   </OptionsWrapper>
  );
}






