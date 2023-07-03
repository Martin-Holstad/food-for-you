import styles from "./Dropzone.module.css";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useState, useEffect } from "react";

export default function Dropzone(props) {
  //useStates
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((dropzoneFiles) => {
    setFiles(
      dropzoneFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  useEffect(
    function () {
      if (files.length != 0) {
        props.onChange(files, props.index);
      }
    },
    [files]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    contentType: "image/jpeg",
    onDrop,
    multiple: false,
  });
  
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()}/>
      {files.length > 0 ? (
        files.map((file) => (
          <img
            key={file.name}
            className={styles.img}
            src={file.preview}
            onLoad={() => {
              URL.revokeObjectURL(file.preview);
            }}
          />
        ))
      ) : (
        <div className={styles.dropImage}>
          <p>Drop an image or click to choose one</p>
        </div>
      )}
    </div>
  );
}
