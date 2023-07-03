import styles from "./RemoveListItemButton.module.css";

export default function RemoveListItemButton(props) {
  function remove() {
    const newFormContent = [...props.formContent];

    const filterdValueArray = newFormContent[props.index].element.value.filter((val) => val.id != props.id);
    newFormContent[props.index].element.value = filterdValueArray;
    props.setFormContent(newFormContent);
  }

  return (
    <div className={styles.removeButton} onClick={remove}>
      Remove
    </div>
  );
}
