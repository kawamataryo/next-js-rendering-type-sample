import React, {useEffect, useState} from "react";
import PageLayout from "../layout/pageLayout";
import {fetchCurrentTime} from "../lib/api";
import Link from "next/link";
import PageLink from "../components/pageLink";
import TimeText from "../components/timeText";

const CSRPage: React.FC = ({ children }) => {
  const [time, setTime] = useState('');
  useEffect( () => {
    (async () => {
      const res = await fetchCurrentTime();
      setTime(res)
    })()
  }, [])

  return (
  <PageLayout color="warning" type="csr">
    <h1 className="title">
      CSR
    </h1>
    <h2 className="subtitle">
      Client Side Rendering
      <TimeText time={time}/>
    </h2>
    <PageLink/>
  </PageLayout>

)
}

export default CSRPage
