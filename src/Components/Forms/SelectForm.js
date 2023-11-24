import React, {lazy, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {
  Button, CheckboxInput,
  CustomInput,
  CustomInputWrapper,
  CustomText,
  FormPageContainer,
  FormWrapper,
  Label
} from "../../assets/styles/CommonStyles";

import {CreatingOptionWrapper, ItemContent, List, ListItem} from "./SelectFormStyles"

const ButtonGroup = lazy(() => import("./ButtonGroup"));

export default function SelectForm() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [showOption, setShowOption] = useState(false)
  const [showRegionOption, setRegionOption] = useState(false)
  const [savedSelectInfo, setSavedSelectInfo] = useState([]);
  const [selectData, setSelectData] = useState({
    selectLabel: "",
    id: "",
    placeholder: "",
    regionName: "",
    regionId: "",
    optionName: "",
    optionValue: "",
    optionRegionId: "",
    inputType: 'select',
    inputRequired: false,
  });
  const [options, setOptions] = useState([]);
  const [regions, setRegions] = useState([]);

  const handleSelectValue = (e) => {
    const { name, value, type, checked } = e.target;

    setSelectData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const onAddOption = () => {
    setOptions((prevOptions) => [...prevOptions, {optionName: selectData.optionName, optionValue: selectData.optionValue, optionRegionId: selectData.optionRegionId }])

    setShowOption(false)
  };

  const onAddRegion = () => {
    setRegions((prevRegions) => [...prevRegions, {regionName: selectData.regionName, regionId: selectData.regionId}])

    setRegionOption(false)
  }

  const onSaveSelect = () => {
    setSelectData((prevData) => ({...prevData, option: options, region: regions}));

    setSavedSelectInfo((prevSavedInfo) => [...prevSavedInfo, {...selectData, option: [...options], region: [...regions]}])

    setSelectData({
      selectLabel: "",
      id: "",
      placeholder: "",
      regionName: "",
      regionId: "",
      optionName: "",
      optionValue: "",
      optionRegionId: "",
      optionId: "",
      inputRequired: false,
    });
    setOptions([])
    setRegions([])
  }

  const handleSave = () => {
    setLoading(true)

    setTimeout(() => {
      localStorage.setItem('selectFormDetails', JSON.stringify(savedSelectInfo))

      setLoading(false);
      navigate(`/`)
    }, 1200);
  }

  const handleBack = () => {
    navigate(`/`)
  }

  const onOpenOptions = () => {
    setShowOption(true)
  }

  const handleRemoveField = (index) => {
    const newSelectInfo = [...savedSelectInfo];
    newSelectInfo.splice(index, 1);
    setSavedSelectInfo(newSelectInfo);
  };

  const onCancelOption = () => {
    setShowOption(false)
  }


  return (
    <FormPageContainer>
      <CustomText fontSize="22px" weight="600" color="#555">
        Fill all the Fields to create <mark>Selectable</mark> Input
      </CustomText>

      <FormWrapper display="flex" maxWidth="560px">
        <CustomInputWrapper>
          <Label>Label of Select</Label>
          <CustomInput onChange={handleSelectValue} value={selectData.selectLabel} name="selectLabel" placeholder="Example: Select region" marginTop="8px"></CustomInput>
        </CustomInputWrapper>

        <CustomInputWrapper>
          <Label>Enter Placeholder</Label>
          <CustomInput width="350px" onChange={handleSelectValue} value={selectData.placeholder} name="placeholder" placeholder="Example: Choose an option" marginTop="8px"></CustomInput>
        </CustomInputWrapper>

        <CustomInputWrapper>
          <Label>Enter ID</Label>
          <CustomInput  onChange={handleSelectValue} value={selectData.id} name="id" placeholder="Example: 12345" marginTop="8px"></CustomInput>
        </CustomInputWrapper>


        <CreatingOptionWrapper>

          {!showRegionOption && <Button onClick={() => setRegionOption(true)} width="167px" color="#fff" bgColor="#4CA008" marginRight="15px" marginTop="26px" height="40px">Add Regions</Button>}

          {showRegionOption && (
            <>
              <CustomInputWrapper>
                <Label>Name of Region</Label>
                <CustomInput onChange={handleSelectValue}  width="190px" name="regionName" placeholder="Example: Jizzakh (viloyat)" marginTop="8px"></CustomInput>
              </CustomInputWrapper>
              <CustomInputWrapper margin="15px 0 15px 20px">
                <Label>ID of region</Label>
                <CustomInput onChange={handleSelectValue}  name="regionId" placeholder="Example: 10" marginTop="8px"></CustomInput>
              </CustomInputWrapper>
              <Button onClick={() => setRegionOption(false)} width="60px" color="#fff" bgColor="#999" marginLeft="12px" marginTop="30px" height="40px" fontSize="13px">Close</Button>
              <Button onClick={onAddRegion} width="60px" color="#fff" marginLeft="12px" marginTop="30px" height="40px" fontSize="13px">Add Region</Button>
            </>
          )}
        </CreatingOptionWrapper>

        <CreatingOptionWrapper>

          {!showOption && <Button onClick={onOpenOptions} width="167px" color="#fff" bgColor="#4CA008" marginTop="26px" height="40px">Add options</Button>}

          {showOption && (
            <>
              <CustomInputWrapper>
                <Label>Name of Option (District)</Label>
                <CustomInput onChange={handleSelectValue}  width="190px" name="optionName" placeholder="Example: mirabad (district)" marginTop="8px"></CustomInput>
              </CustomInputWrapper>
              <CustomInputWrapper margin="15px 0 15px 20px">
                <Label>Region ID</Label>
                <CustomInput onChange={handleSelectValue}  name="optionRegionId" placeholder="Example: 10 " marginTop="8px"></CustomInput>
              </CustomInputWrapper>
              <CustomInputWrapper>
                <Label>ID</Label>
                <CustomInput onChange={handleSelectValue}  name="optionValue" placeholder="Example:123 " marginTop="8px"></CustomInput>
              </CustomInputWrapper>
              <Button onClick={onCancelOption} width="60px" color="#fff" bgColor="#999" marginLeft="12px" marginTop="30px" height="40px" fontSize="13px">Close</Button>
              <Button onClick={onAddOption} width="60px" color="#fff" marginLeft="12px" marginTop="30px" height="40px" fontSize="13px">Add option</Button>
            </>
          )}
        </CreatingOptionWrapper>

        <CustomInputWrapper flexDirection="row" alignItems="center">
          <CheckboxInput onClick={handleSelectValue} checked={selectData.inputRequired} marginRight="10px" name="inputRequired"></CheckboxInput>
          <Label>Please check if input should be Required!</Label>
        </CustomInputWrapper>

        <CustomInputWrapper>
          <Button onClick={onSaveSelect} width="270px" bgColor="#199c11" color="#fff">Save and Add another Select</Button>
        </CustomInputWrapper>
      </FormWrapper>

      <List>
        {savedSelectInfo.map((data, index) => (
          <ListItem key={index}>
            <ItemContent>
              SelectLabel: {data?.selectLabel} | regionValue: {data.regionValue} | placeholder: {data?.placeholder} | id: {data?.id} | inputRequired: {data?.inputRequired ? "Yes" : "No"} <br/>
              Options: {data?.option?.map((item, innerIndex) => (
              <ItemContent key={innerIndex}>
                value: {item?.optionValue} - name: {item?.optionName}
              </ItemContent>
              ))}
            </ItemContent>
            <Button onClick={() => handleRemoveField(index)} color="#fff" bgColor="red" width="80px" height="30px" marginLeft="20px" fontSize="14px" >Remove</Button>
          </ListItem>
        ))}
      </List>

      <ButtonGroup onBack={handleBack} onSave={handleSave} isLoading={loading} />

    </FormPageContainer>
  );
}
