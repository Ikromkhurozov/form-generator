import React, {lazy} from 'react';
import { useParams } from 'react-router-dom';

const NotFound = lazy(() => import("../NotFound/NotFound"))
const TextForm = lazy(() => import("../../Components/Forms/TextForm"))
export default function GenerateForm() {
  const { id } = useParams();

  const renderFormContent = () => {
    if (id ==="textinput"){
      return <TextForm/>

    } else if(id ==="selectinput"){
      return (
        <div>selectinput</div>
      )
    } else if (id === "radioinput"){
      return (
        <div>textinput</div>
      )
    } else{
      return <NotFound/>
    }
  }
  return renderFormContent();
}
