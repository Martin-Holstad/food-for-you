import styles from "./MoveDownButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function MoveDownButton(props) {
  function moveDown() {
    const newFormContent = [...props.formContent];

    if (props.index != newFormContent.length - 1) {
      const temp = newFormContent[props.index];
      newFormContent[props.index] = newFormContent[props.index + 1];
      newFormContent[props.index + 1] = temp;

      props.setFormContent(newFormContent);
    }
  }

  return (
    <div className={styles.moveDownButton} onClick={moveDown}>
      <FontAwesomeIcon icon={faCaretDown} />
    </div>
  );
}
