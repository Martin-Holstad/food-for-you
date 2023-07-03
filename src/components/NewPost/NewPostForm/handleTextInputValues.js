export default function handleTextInputValues(event, index, formContent, setFormContent) {
  const newFormContent = formContent;

  newFormContent[index].element.value = event.target.value;

  setFormContent(newFormContent);
}
