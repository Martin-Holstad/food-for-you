import styles from "./NewPostForm.module.css";
import { useState, createElement } from "react";
import SelectMenu from "./SelectMenu";
import uploadPost from "./uploadPost";
import handleTextInputValues from "./handleTextInputValues";
import Dropzone from "../../common/Dropzones/Dropzone";
import RemoveButton from "./RemoveButton";
import MoveUpButton from "./MoveUpButton";
import MoveDownButton from "./MoveDownButton";
import AddListItem from "./AddListItem";
import RemoveListItemButton from "./RemoveListItemButton";
import MoveListItemUpButton from "./MoveListItemUpButton";
import MoveListItemDownButton from "./MoveListItemDownButton";

export default function NewPostForm() {
  //useStates
  const [formContent, setFormContent] = useState([]);
  const [message, setMessage] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [uniqueId, setUniqueId] = useState(0);

  function getDropzoneFiles(dropzoneFiles, index) {
    let newFormContent = formContent;
    newFormContent[index].files = dropzoneFiles;
  }

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
              {content.typeOfContent === "text-content"
                ? createElement(content.element.inputType, {
                    placeholder: content.element.placeholder,
                    type: content.element.type,
                    name: content.element.tag,
                    className: content.element.className,
                    id: content.element.id,
                    onChange: (event) => {
                      handleTextInputValues(event, index, formContent, setFormContent);
                    },
                  })
                : ""}

              {content.typeOfContent === "list-content" ? (
                <div>
                  <AddListItem formContent={formContent} setFormContent={setFormContent} index={index} />
                  {createElement(
                    content.element.listType,
                    { className: content.element.className },
                    content.element.value.map((val, valIndex) => {
                      return (
                        <div key={val.id} className={styles.listActionButtons}>
                          {createElement(content.element.tag, {}, val.value)}
                          <MoveListItemUpButton id={val.id} formContent={formContent} setFormContent={setFormContent} index={index} valIndex={valIndex} />
                          <RemoveListItemButton id={val.id} formContent={formContent} setFormContent={setFormContent} index={index} />
                          <MoveListItemDownButton id={val.id} formContent={formContent} setFormContent={setFormContent} index={index} valIndex={valIndex} />
                        </div>
                      );
                    })
                  )}
                </div>
              ) : (
                ""
              )}

              {content.typeOfContent === "file-content" ? <Dropzone index={index} onChange={getDropzoneFiles} /> : ""}

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
