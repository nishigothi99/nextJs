import NavBar from './NavBar';
import Head from 'next/head'
const Layouts = (props) => (
  <div>
      <Head>
        <title>NextJs</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>

      </Head>
    <NavBar/>
      {props.children}
    </div>
);

export default Layouts;