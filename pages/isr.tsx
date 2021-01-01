import React from "react";
import {GetStaticProps} from "next";
import PageLayout from "../layout/pageLayout";
import {fetchCurrentTime} from "../lib/api";
import Link from "next/link";
import PageLink from "../components/pageLink";
import TimeText from "../components/timeText";


type PropsType = {
  time: string
}

const ISRPage: React.FC<PropsType> = (props) => {
  return (
      <PageLayout color="danger" type="isr">
        <h1 className="title">
          ISR
        </h1>
        <h2 className="subtitle">
          Incremental Static Regeneration<br/>
          <TimeText time={props.time}/>
        </h2>
        <PageLink/>
      </PageLayout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const time = await fetchCurrentTime()

  return {
    props: {
      time,
    },
    revalidate: 5
  }
}

export default ISRPage
