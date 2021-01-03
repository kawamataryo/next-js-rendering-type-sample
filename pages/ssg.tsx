import React from "react";
import { GetStaticProps } from "next";
import PageLayout from "../layout/pageLayout";
import { fetchCurrentTime } from "../lib/api";
import PageLink from "../components/pageLink";
import TimeText from "../components/timeText";

type PropsType = {
  time: string;
};

const SSGPage: React.FC<PropsType> = (props) => {
  return (
    <PageLayout color="info" type="ssg">
      <h1 className="title">SSG</h1>
      <h2 className="subtitle">
        Static Site Generation
        <br />
        <TimeText time={props.time} />
      </h2>
      <PageLink />
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const time = await fetchCurrentTime();

  return {
    props: {
      time,
    },
  };
};

export default SSGPage;
