import Head from 'next/head';
import Form from '../components/Form';
const IndexPage = () => {
  return (
    <div>
      <div>
        <Head>
          <title>Form Hook Package</title>
        </Head>
      </div>
      <center>
        <Form />
      </center>
    </div>
  );
};
export default IndexPage;