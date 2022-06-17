import * as React from 'react';
import { NextPage, NextPageContext } from 'next';

const ServerData: NextPage<{ user: { name: string, count: string } }> = (props) => {
  return (
    <React.Fragment>
      <a href="/">Back home</a>
      <h1>Hello, {props.user.name}!</h1>
      <p>This data was retrieved from the initial server render. count: {props.user.count}</p>
    </React.Fragment>
  );
};

interface Context extends NextPageContext {
  query: { name :string, count: string };
}

ServerData.getInitialProps = async (ctx: Context) => {
  return {
    user: ctx.query
  }
};

export default ServerData;
