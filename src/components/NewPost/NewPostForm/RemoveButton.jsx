import styles from "./RemoveButton.module.css";

export default function RemoveButton(props) {
  function remove() {
    const newFormContent = props.formContent.filter((file) => file.id != props.id);

    props.setFormContent(newFormContent);
  }

  return (
    <div className={styles.removeButton} onClick={remove}>
      Remove
    </div>
  );
}
