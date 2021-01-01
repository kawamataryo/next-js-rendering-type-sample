import React from "react";
import {GetServerSideProps} from "next";
import PageLayout from "../layout/pageLayout";
import {fetchCurrentTime} from "../lib/api";
import Link from "next/link";
import PageLink from "../components/pageLink";
import TimeText from "../components/timeText";


type PropsType = {
  time: string
}


const SSRPage: React.FC<PropsType> = (props) => {
  return (
      <PageLayout color="primary" type="ssr">
        <h1 className="title">
          SSR
        </h1>
        <h2 className="subtitle">
          Server Side Rendering<br/>
          <TimeText time={props.time}/>
        </h2>
        <PageLink/>
      </PageLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const time = await fetchCurrentTime()

  return {
    props: {
      time: time
    }
  }
}

export default SSRPage
