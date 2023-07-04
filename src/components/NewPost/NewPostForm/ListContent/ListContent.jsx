import styles from "./ListContent.module.css";
import { createElement } from "react";
import AddListItem from "./AddListItem";
import RemoveListItemButton from "./RemoveListItemButton";
import MoveListItemUpButton from "./MoveListItemUpButton";
import MoveListItemDownButton from "./MoveListItemDownButton";

export default function ListContent(props) {
  return (
    <div>
      <AddListItem formContent={props.formContent} setFormContent={props.setFormContent} index={props.index} />
      {createElement(
        props.content.element.listType,
        { className: props.content.element.className },
        props.content.element.value.map((val, valIndex) => {
          return (
            <div key={val.id} className={styles.listContainer}>
              {createElement(props.content.element.tag, {}, val.value)}
              <div className={styles.listActionButtons}>
                <MoveListItemUpButton id={val.id} formContent={props.formContent} setFormContent={props.setFormContent} index={props.index} valIndex={valIndex} />
                <RemoveListItemButton id={val.id} formContent={props.formContent} setFormContent={props.setFormContent} index={props.index} />
                <MoveListItemDownButton id={val.id} formContent={props.formContent} setFormContent={props.setFormContent} index={props.index} valIndex={valIndex} />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
