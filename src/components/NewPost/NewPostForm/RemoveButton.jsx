import styles from "./RemoveButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function RemoveButton(props) {
  function remove() {
    const newFormContent = props.formContent.filter((file) => file.id != props.id);

    props.setFormContent(newFormContent);
  }

  return (
    <div className={styles.removeButton} onClick={remove}>
      <FontAwesomeIcon icon={faTrash} />
    </div>
  );
}
