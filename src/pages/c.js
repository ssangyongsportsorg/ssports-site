import React from 'react';
import Layout from '@theme/Layout';
import styles from './demo.module.css';
import ReactiveButton from 'reactive-button';


function Form() {
  return (
    <Layout title="聯絡">
      <main>
        <div className={styles.content}>
          <h1>
         聯繫雙龍體育
          </h1>
       
        </div>
        <div className={styles.formwrapper}>
          <div className={styles.formbox}>
            <form
              action="https://send.pageclip.co/uLHUxztMTNIK2IljRIEgBJh6JVi7QruG/Site-contact"
              name="聯繫表單"
              method="POST" 
            >
              <input type="hidden" name="form-name" value="聯繫表單" />
              <p>
                <label>
                  名稱
                  <input
                    type="text"
                    name="name"
                    placeholder="你的名子"
                    required
                  />
                </label>
              </p>
              <p>
                <label>
                  電子郵件
                  <input
                    reqpuired
                    type="email"
                    name="email"
                    placeholder="name@ssangyongsports.org"
                  />
                </label>

                <label>
                  Comments
                  <textarea
                    name="留言"
                    placeholder="輸入..."
                    rows="3"
                  ></textarea>
                </label>
              </p>
              <p>
                    <ReactiveButton type={'submit'} idleText="Submit" />

              </p>
            </form>
<div className="wc-sks-wrp hidden">
  <div className="wc-sks-knt">
    <svg
      className="wc-sks-svg"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
    </svg>
    <h2>聯繫已成功發送</h2>
    <p>
      我們將在1-4天內回復您的郵件，定期檢查您的電子郵件收件匣，包括垃圾郵件箱.
    </p>
    <p>
      {" "}
      <a href="javascript:location.reload();">關閉視窗</a>
    </p>
  </div>
</div>

          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Form;
