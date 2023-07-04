import { auth, database, storage } from "../../../settings/settings";
import { ref as ref_database, push } from "firebase/database";
import { ref as ref_storage, uploadBytes, getDownloadURL } from "firebase/storage";
import DisplayMessage from "../../common/DisplayMessage/DisplayMessage";

export default function uploadPost(event, formContent, setFormContent, setMessage) {
  event.preventDefault();

  (async () => {
    const postUrl = "posts/post/";
    const storageUrl = "posts/post/";

    const key = push(ref_database(database, postUrl)).key;

    for (const content of formContent) {
      try {
        if (content.typeOfContent === "text-content") {
          console.log(content.element.value);
          const uploadPost = await push(ref_database(database, postUrl + key + "/" + auth.currentUser.uid), { element: content.element.tag, value: content.element.value, placeholder: content.element.placeholder, type: content.element.type, className: content.element.className, id: content.element.id });
        }

        if (content.typeOfContent === "list-content") {
          const uploadPost = await push(ref_database(database, postUrl + key + "/" + auth.currentUser.uid), { element: content.element.tag, value: content.element.value, className: content.element.className, id: "" });
        }

        if (content.typeOfContent === "file-content") {
          const metadata = await uploadBytes(ref_storage(storage, storageUrl + key + "/" + auth.currentUser.uid + "/" + content.files[0].name), content.files[0]);
          const downloadURL = await getDownloadURL(ref_storage(storage, storageUrl + key + "/" + auth.currentUser.uid + "/" + content.files[0].name));
          const uploadMetadataToDatabase = await push(ref_database(database, postUrl + key + "/" + auth.currentUser.uid), { url: downloadURL });
        }

        setFormContent([]);
        setMessage(<DisplayMessage messageType="success">Post uploaded successfully</DisplayMessage>);
      } catch (error) {
        console.log(error);
        setMessage(<DisplayMessage messageType="error">{error.code.replace("auth/", "")}</DisplayMessage>);
      } finally {
        event.target.reset();
      }
    }
  })();
}
