export default function handleTextInput(event, index, formContent, setFormContent) {
  const newFormContent = [...formContent];

  newFormContent[index].element.value = event.target.value.replaceAll("\n", "<br />");

  if (newFormContent[index].element.inputType === "textarea") {
    const offset = event.target.offsetHeight - event.target.clientHeight;
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + offset + "px";
  }

  setFormContent(newFormContent);
}
