import styles from "./MoveListItemUpButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

export default function MoveUpButton(props) {
  function moveUp() {
    const newFormContent = [...props.formContent];

    if (props.valIndex != 0) {
      const temp = newFormContent[props.index].element.value[props.valIndex];
      newFormContent[props.index].element.value[props.valIndex] = newFormContent[props.index].element.value[props.valIndex - 1];
      newFormContent[props.index].element.value[props.valIndex - 1] = temp;
      props.setFormContent(newFormContent);
    }
  }

  return (
    <div className={styles.moveUpButton} onClick={moveUp}>
      <FontAwesomeIcon icon={faCaretUp} />
    </div>
  );
}
