import React from "react";
import PageLink from "../components/pageLink";
import PageLayout from "../layout/pageLayout";

const Home: React.FC = () => {
  return (
    <PageLayout color="white" type="index">
      <h1 className="is-size-1 has-text-weight-bold">Next.js</h1>
      <p className="is-size-5 mb-3">Rendering type samples.</p>
      <PageLink />
    </PageLayout>
  );
};

export default Home;
