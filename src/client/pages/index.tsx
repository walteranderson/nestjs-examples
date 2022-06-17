import * as React from 'react';
import { NextPage } from 'next';
import User from '../../server/user';

const Home: NextPage<{ user: { name: string } }> = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <a href="/server-data">Server Data</a>
      <h1>Hello, {props.user.name}!</h1>
      <p>This data was retrieved using getServerSideProps from a server module</p>
    </React.Fragment>
  );
};

export async function getServerSideProps(context) {
  const u = new User();
  return {
    props: {
      user: u.getUser()
    }
  };
}

export default Home;
