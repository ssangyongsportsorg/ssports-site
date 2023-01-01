import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

export default function Newsletter(): JSX.Element {
  return (
    <section className={styles.root}>
      <div className={clsx("container", styles.wrapper)}>
        <div>
          <h2 className={styles.heading}>訂閱雙龍體育任何新消息</h2>
          <div className={styles.subheading}>
            訂閱及表示你同意{" "}
            <a target="_blank" href="/t">
              服務條款
            </a>{" "}
            and{" "}
            <a target="_blank" href="/p">
              隱私政策
            </a>
            .
          </div>
        </div>
        <form
          action="https://ssangyongsports.us11.list-manage.com/subscribe/post?u=d2e34413aa6cbf7c94020e4ae&amp;id=6b0083dcd5&amp;f_id=00d796e0f0"
          method="post"
          target="_blank"
          className={styles.form}
        >
          <input
  type="email"
  defaultValue=""
  name="EMAIL"
  className="email"
  id="mce-EMAIL"
  placeholder="lovely-human@example.com"
  required=""
/>

          className={clsx(styles.input, "button")}
          />
          <input
            type="submit"
            value="Subscribe"
            name="member[subscribe]"
            className={clsx(styles.button, "button button--primary")}
          />
        </form>
      </div>
    </section>
  );
}
