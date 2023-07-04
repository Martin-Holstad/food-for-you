import styles from "./AddListItem.module.css";
import { useState } from "react";

export default function AddListItem(props) {
  //useStates
  const [value, setValue] = useState("");
  const [uniqueId, setUniqueId] = useState(0);

  function addItem() {
    if (value.trim() !== "") {
      setUniqueId(uniqueId + 1);
      const newFormContent = [...props.formContent];

      newFormContent[props.index].element.value = [...newFormContent[props.index].element.value, { id: uniqueId, value: value }];

      props.setFormContent(newFormContent);
      setValue("");
    }
  }

  return (
    <div className={styles.addListItemContainer}>
      <input
        name="listInput"
        placeholder="List content"
        value={value}
        type="text"
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <div className={styles.addListItemButton} onClick={addItem}>
        Add
      </div>
    </div>
  );
}
