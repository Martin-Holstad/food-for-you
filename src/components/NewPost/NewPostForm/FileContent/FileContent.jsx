import styles from "./FileContent.module.css";
import Dropzone from "../../../common/Dropzones/Dropzone";

export default function FileContent(props) {
  function getDropzoneFiles(dropzoneFiles, index) {
    let newFormContent = props.formContent;
    newFormContent[index].files = dropzoneFiles;
  }

  return <Dropzone index={props.index} onChange={getDropzoneFiles} />;
}
