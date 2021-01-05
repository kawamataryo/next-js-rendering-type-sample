import React from "react";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

type PropsType = InferGetStaticPropsType<typeof getStaticProps>;

const SSGPage: React.FC<PropsType> = (props) => {
  return <div>{props.user}</div>;
};

export const getStaticProps = async (_context: GetStaticPropsContext) => {
  const user = await fetch("http://localhost:3000/api/user");

  return {
    props: {
      user,
    },
  };
};

export default SSGPage;
