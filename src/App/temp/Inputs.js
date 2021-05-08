import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

import styles from "./inputs.module.scss";

// Validators

export const required = (value) => (value ? undefined : "*обязательное поле");

export const minLength = (min) => (value) =>
  value && value.length < min ? `*не меньше ${min} символов` : undefined;

export const fileRequired = (value) =>
  value !== 0 && value ? undefined : "*минимум 1 фото";

export const combinedValidators = (...validators) => (value) =>
  validators.reduce((err, val) => err || val(value), undefined);

// Inputs

export const TextInput = ({
  input,
  meta,
  isNum,
  classN = "textinput",
  ...props
}) => {
  const error = meta.touched && meta.error;

  const style = {
    borderBottom: error && classN === "textinput" ? "1px solid #f2002c" : "",
    paddingLeft: isNum ? "32px" : classN === "message" ? "16px" : "0px",
  };

  return (
    <div className={styles.input}>
      {props.sup && (
        <div className={styles.sup}>
          <img src={props.supicon} alt={props.sup} />
          <p>{props.sup}</p>
        </div>
      )}

      <input {...input} {...props} className={styles[classN]} style={style} />

      {!error && <div className={styles.sub}>{props.sub}</div>}

      {error && <p className={`${styles.sub} ${styles.error}`}>{meta.error}</p>}
    </div>
  );
};

export const TextArea = ({ input, meta, classN = "textarea", ...props }) => {
  const error = meta.touched && meta.error;

  const errorStyle = () => {
    if (classN === "textarea") return { borderBottom: "1px solid #f2002c" };
    if (classN === "message") return { border: "1px solid #f2002c" };
  };

  return (
    <div className={styles.input}>
      <TextareaAutosize
        {...input}
        {...props}
        onChange={input.onChange}
        className={styles[classN]}
        style={error ? errorStyle() : {}}
      />
      {!error && <p className={styles.sub}>{props.sub}</p>}
      {error && <p className={`${styles.sub} ${styles.error}`}>{meta.error}</p>}
    </div>
  );
};

export const Checkbox = ({ input, meta, ...props }) => {
  const [label, setLabel] = useState(false);

  return (
    <div className={styles.input}>
      <div className={styles.checkbox}>
        <input type="checkbox" id="agreetooverpay" {...input} />
        <label htmlFor="agreetooverpay" onClick={() => setLabel(!label)}>
          {label ? "Готов(а) доплатить!" : "Готовы доплатить?"}
        </label>
      </div>
    </div>
  );
};

export const UploadCheck = ({ input, meta, ...props }) => {
  const error = meta.touched && meta.error;

  return (
    <div className={styles.input}>
      <input {...input} {...props} className={styles.uploadcheck} />

      {error && <p className={`${styles.sub} ${styles.error}`}>{meta.error}</p>}
    </div>
  );
};
