import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="聯絡" description="聯絡雙龍體育">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>

<section className="formcarry-container">
          <>
  <p>&nbsp;</p>
  <p>
    <br />
  </p>
  <p>
    <br />
  </p>
  <p>
    <br />
  </p>
</>
  
  <h1 style={{ textAlign: "left" }}>與我們聯絡</h1>

  
  <form action="#" method="POST" encType="multipart/form-data">

    <div className="formcarry-block">
      <label htmlFor="fc-generated-1-email">Your Email Address</label>
      <input
        type="email"
        name="email"
        id="fc-generated-1-email"
        placeholder="john@doe.com"
      />
    </div>
    <div className="formcarry-block">
      <label htmlFor="fc-generated-1-message">Your message</label>
      <textarea
        name="message"
        id="fc-generated-1-message"
        placeholder="Enter your message..."
        defaultValue={""}
      />
    </div>
    <div className="formcarry-block">
      <button type="submit">Send</button>
      <>
  <p>&nbsp;</p>
  <p>
    <br />
  </p>
  <p>
    <br />
  </p>
  <p>
    <br />
  </p>
</>


</div>

  </form>
</section>   
<>
  <p>&nbsp;</p>
  <p>
    <br />
  </p>
  <p>
    <br />
  </p>
  <p>
    <br />
  </p>
</>
<>
  <p>&nbsp;</p>
  <p>
    <br />
  </p>
  <p>
    <br />
  </p>
  <p>
    <br />
  </p>
</>
  <link rel="stylesheet" href="https://ssangyongsports.github.io/1.css" />

      </div>
    </Layout>
  );
}
