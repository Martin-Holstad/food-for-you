import styles from "./SelectMenu.module.css";
import { useEffect } from "react";
import Select from "react-select";

export default function SelectMenu(props) {
  useEffect(
    function () {
      if (props.selectValue !== "") {
        props.setUniqueId(props.uniqueId + 1);
        props.setMessage("");

        if (props.selectValue === "img") {
          props.setFormContent([...props.formContent, { id: props.uniqueId, typeOfContent: "file-content", element: { name: "img", label: "Add an image" } }]);
        }

        if (props.selectValue === "textarea") {
          props.setFormContent([...props.formContent, { id: props.uniqueId, typeOfContent: "text-content", element: { inputType: "textarea", placeholder: "Text", type: "text", tag: "p", value: "", className: styles.textareaInput, id: "", label: "Enter text" } }]);
        }

        if (props.selectValue === "bullet-list") {
          props.setFormContent([...props.formContent, { id: props.uniqueId, typeOfContent: "list-content", element: { listType: "ul", tag: "li", value: [], className: styles.ul, id: "", label: "Enter list content" } }]);
        }

        if (props.selectValue === "number-list") {
          props.setFormContent([...props.formContent, { id: props.uniqueId, typeOfContent: "list-content", element: { listType: "ol", tag: "li", value: [], className: styles.ol, id: "", label: "Enter list content" } }]);
        }

        if (props.selectValue === "h1") {
          props.setFormContent([...props.formContent, { id: props.uniqueId, typeOfContent: "text-content", element: { inputType: "input", placeholder: "H1", type: "text", tag: "h1", value: "", className: styles.h1Input, id: "", label: "Enter H1" } }]);
        }

        if (props.selectValue === "h2") {
          props.setFormContent([...props.formContent, { id: props.uniqueId, typeOfContent: "text-content", element: { inputType: "input", placeholder: "H2", type: "text", tag: "h2", value: "", className: styles.h2Input, id: "", label: "Enter H2" } }]);
        }

        if (props.selectValue === "h3") {
          props.setFormContent([...props.formContent, { id: props.uniqueId, typeOfContent: "text-content", element: { inputType: "input", placeholder: "H3", type: "text", tag: "h3", value: "", className: styles.h3Input, id: "", label: "Enter H3" } }]);
        }

        if (props.selectValue === "h4") {
          props.setFormContent([...props.formContent, { id: props.uniqueId, typeOfContent: "text-content", element: { inputType: "input", placeholder: "H4", type: "text", tag: "h4", value: "", className: styles.h4Input, id: "", label: "Enter H4" } }]);
        }
        props.setSelectValue("");
      }
    },
    [props.selectValue]
  );

  const options = [
    { value: "img", label: "Image" },
    { value: "textarea", label: "Text" },
    { value: "bullet-list", label: "Bullet list" },
    { value: "number-list", label: "Number list" },
    { value: "h1", label: "H1" },
    { value: "h2", label: "H2" },
    { value: "h3", label: "H3" },
    { value: "h4", label: "H4" },
  ];

  return (
    <Select
      className={styles.select}
      options={options}
      placeholder="Choose content..."
      onChange={(event) => {
        props.setSelectValue(event.value);
        event.label = "Choose content...";
      }}
    />
  );
}
