import styles from "./MoveDownButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function MoveDownButton(props) {
  function moveDown() {
    const newFormContent = [...props.formContent];

    if (props.valIndex != newFormContent[props.index].element.value.length - 1) {
      const temp = newFormContent[props.index].element.value[props.valIndex];
      newFormContent[props.index].element.value[props.valIndex] = newFormContent[props.index].element.value[props.valIndex + 1];
      newFormContent[props.index].element.value[props.valIndex + 1] = temp;

      props.setFormContent(newFormContent);
    }
  }

  return (
    <div className={styles.moveDownButton} onClick={moveDown}>
      <FontAwesomeIcon icon={faCaretDown} />
    </div>
  );
}
