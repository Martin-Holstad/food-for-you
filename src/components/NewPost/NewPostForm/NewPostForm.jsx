import styles from "./NewPostForm.module.css";
import { useState } from "react";
import SelectMenu from "./SelectMenu";
import uploadPost from "./uploadPost";
import RemoveButton from "./RemoveButton";
import MoveUpButton from "./MoveUpButton";
import MoveDownButton from "./MoveDownButton";
import TextContent from "./TextContent/TextContent";
import ListContent from "./ListContent/ListContent";
import FileContent from "./FileContent/FileContent";

export default function NewPostForm() {
  //useStates
  const [formContent, setFormContent] = useState([]);
  const [message, setMessage] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [uniqueId, setUniqueId] = useState(0);

  return (
    <form
      className={styles.form}
      autoComplete="off"
      onSubmit={(event) => {
        uploadPost(event, formContent, setFormContent, setMessage);
      }}
    >
      <div className={styles.formContainer}>
        {message ? <div className={styles.message}>{message}</div> : ""}

        {formContent.map(function (content, index) {
          return (
            <div key={content.id} className={styles.contentContainer}>
              <h2 className={styles.h2}>{content.element.label}</h2>

              {content.typeOfContent === "text-content" ? <TextContent formContent={formContent} setFormContent={setFormContent} content={content} index={index} /> : ""}

              {content.typeOfContent === "list-content" ? <ListContent formContent={formContent} setFormContent={setFormContent} content={content} index={index} /> : ""}

              {content.typeOfContent === "file-content" ? <FileContent formContent={formContent} index={index} /> : ""}

              <div className={styles.actionButtons}>
                <MoveUpButton id={content.id} formContent={formContent} setFormContent={setFormContent} index={index} />
                <RemoveButton id={content.id} formContent={formContent} setFormContent={setFormContent} />
                <MoveDownButton id={content.id} formContent={formContent} setFormContent={setFormContent} index={index} />
              </div>
            </div>
          );
        })}

        <div className={styles.selectAndSubmitContainer}>
          <SelectMenu uniqueId={uniqueId} setUniqueId={setUniqueId} selectValue={selectValue} setSelectValue={setSelectValue} formContent={formContent} setFormContent={setFormContent} setMessage={setMessage} />
          <button type="submit">Upload post</button>
        </div>
      </div>
    </form>
  );
}
