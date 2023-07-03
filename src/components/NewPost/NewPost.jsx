import styles from "./NewPost.module.css";
import NewPostForm from "./NewPostForm/NewPostForm";

export default function NewPost() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>New post</h1>
      <NewPostForm />
    </main>
  );
}
