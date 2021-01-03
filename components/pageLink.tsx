import React from "react";
import Link from "next/link";

const PageLink: React.FC = () => {
  return (
    <div className="box">
      <div className="columns">
        <div className="column">
          <Link href="/csr" passHref>
            <button className="button is-warning is-normal is-fullwidth">
              CSR
            </button>
          </Link>
        </div>
        <div className="column">
          <Link href="/ssr" passHref>
            <button className="button is-primary is-normal is-fullwidth">
              SSR
            </button>
          </Link>
        </div>
        <div className="column">
          <Link href="/ssg" passHref>
            <button className="button is-info is-normal is-fullwidth">
              SSG
            </button>
          </Link>
        </div>
        <div className="column">
          <Link href="/isr" passHref>
            <button className="button is-danger is-normal is-fullwidth">
              ISR
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageLink;
