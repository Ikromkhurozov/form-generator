import React, {useEffect, useState} from 'react';

import {FormContainer} from "../../Views/Main/MainStyles";
import {
  Button,
  CheckboxInput,
  CustomInput,
  CustomInputWrapper, CustomSelect,
  CustomText,
  FormContent,
  Label
} from "../../assets/styles/CommonStyles";
import {RadioInput} from "./FormOptionsStyles";

export default function Form() {
  const [savedInputData, setSavedInputData] = useState([])
  const [savedCheckboxData, setSavedCheckboxData] = useState([])
  const [savedSelectInfo, setSavedSelectInfo] = useState([])
  const [selectedRegion, setSelectedRegion] = useState([])
  const [selectedOption, setSelectedOption] = useState([])

  useEffect(() => {
    const storedInputData = localStorage.getItem('inputFormDetails');
    const storedCheckboxData = localStorage.getItem("checkboxFormDetails")
    const storedSelectInfo = localStorage.getItem("selectFormDetails")

    if (storedInputData) {
      setSavedInputData(JSON.parse(storedInputData));
    }

    if (storedCheckboxData){
      setSavedCheckboxData(JSON.parse(storedCheckboxData));
    }

    if (storedSelectInfo){
      setSavedSelectInfo(JSON.parse(storedSelectInfo))
    }
  },[])

  const onSelectRegion = (e) => {
    const selectedValue = e.target.value;
    setSelectedRegion(selectedValue);

    const selectedObject = savedSelectInfo.find((obj) =>
      obj.option.some((option) => option?.optionRegionId === selectedValue)
    );

    const selectedOptionArray = selectedObject
      ? selectedObject.option.filter((option) => option.optionRegionId === selectedValue)
      : [];

    setSelectedOption(selectedOptionArray)
  }

  const onClearStorage = () => {
    localStorage.clear()
    window.location.reload();
  }

  return (
    <FormContainer>
      <CustomText fontSize="25px" weight="600" lineHeight="27px">Here you can see Form that you generated!</CustomText>

      <FormContent>
        {savedInputData && (
          savedInputData?.map((data) => (
            <CustomInputWrapper key={data?.id} margin="15px 25px 15px 0">
              <Label>{data?.inputLabel}</Label>
              <CustomInput type={data?.type} placeholder={data?.placeholder} width="300px" marginTop="5px"></CustomInput>
            </CustomInputWrapper>
          ))
        )}

        {savedCheckboxData && (
          savedCheckboxData?.map((checkboxData) => (
            <CustomInputWrapper key={checkboxData?.id} margin="15px 25px 15px 0">
              <Label>{checkboxData?.checkboxLabel}</Label>
                {checkboxData?.options?.map((option, index) => (
                  <CustomInputWrapper flexDirection="row" alignItems="center" key={index} margin="3px 0">
                    {checkboxData?.inputType === "radio" ? (
                      <RadioInput marginRight="5px" checked={checkboxData?.inputRequired} name={savedCheckboxData?.nameCheckbox}></RadioInput>
                    ) : (
                      <CheckboxInput marginRight="5px" checked={checkboxData?.inputRequired} name={savedCheckboxData?.nameCheckbox}></CheckboxInput>
                    )}
                    <Label>{option}</Label>
                  </CustomInputWrapper>
                ))}
            </CustomInputWrapper>
          ))
        )}

        {savedSelectInfo && (
          savedSelectInfo?.map((selectData) => (
            <CustomInputWrapper key={selectData?.id} margin="0" flexDirection="row">
              <CustomInputWrapper margin="15px 25px 0 0">
                <CustomText>{selectData?.selectLabel}</CustomText>
                <CustomSelect onChange={onSelectRegion} value={selectedRegion} marginTop="5px">
                  <option value="default">Select region</option>
                  {selectData?.region?.map((item, index) => (
                    <option key={index} value={item?.regionId}>{item?.regionName}</option>
                  ))}
                </CustomSelect>
              </CustomInputWrapper>

              <CustomInputWrapper>
                <CustomText>{selectData?.placeholder}</CustomText>
                <CustomSelect marginTop="5px">
                  {selectedOption && (
                    selectedOption?.map((item, index) => (
                      <option key={index} value={item?.optionValue}>{item?.optionName}</option>
                    )))}
                </CustomSelect>
              </CustomInputWrapper>
            </CustomInputWrapper>
          ))
        )}

      </FormContent>
      <Button onClick={onClearStorage} width="200px" color="#fff" marginTop="50px">Clear all data</Button>
    </FormContainer>
  );
};
