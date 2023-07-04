import styles from "./TextContent.module.css";
import { createElement } from "react";
import handleTextInput from "./handleTextInput";

export default function TextContent(props) {
  return createElement(props.content.element.inputType, {
    placeholder: props.content.element.placeholder,
    type: props.content.element.type,
    name: props.content.element.tag,
    className: props.content.element.className,
    id: props.content.element.id,
    onChange: (event) => {
      handleTextInput(event, props.index, props.formContent, props.setFormContent);
    },
  });
}
