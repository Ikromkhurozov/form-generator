import React, {lazy, Suspense, useState, useMemo} from "react";

import { Routes, Route} from 'react-router-dom';


import {GlobalContext} from "./helpers/context";

import PageLoader from "./Components/Loaders/PageLoader";

const Main = lazy(() => import("./Views/Main/Main"));
const GenerateForm = lazy(() => import("./Views/GenerateForm/GenerateForm"));

export default function App() {
  const [selectedOption, setSelectedOption] = useState("")

  const globalContextValue = useMemo(
    () => ({
      setSelectedOption
    }),
    [
      setSelectedOption
    ]
  );
  return (
  <GlobalContext.Provider value={globalContextValue}>
    <Suspense fallback={<PageLoader/>}>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="generate">
            <Route path=":id" element={<GenerateForm/>}/>
          </Route>
        </Routes>
    </Suspense>
  </GlobalContext.Provider>
  );
}

