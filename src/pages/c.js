import React from 'react';
import Layout from '@theme/Layout';
import contact from "../components/contact.js";

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
        <p>
       <contact />

</p>

      </div>
    </Layout>
  );
}
