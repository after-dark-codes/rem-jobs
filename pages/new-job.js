import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { useSession } from "next-auth/react";
import { ref, getDownloadURL, uploadString } from "@firebase/storage";
import { useState } from "react";
function NewJob() {
  const [selectedFile, setSelectedFile] = useState(null);
  const { data: session } = useSession();
  const uploadJob = async () => {
    // create a job and add to firestore jobs collection
    // get the job id for the newly created job
    // upload the image to firebase storage with the post ID
    // get a download url form fb storage and update the original post with image

    const docRef = await addDoc(collection(db, "jobs"), {
      username: session.user.username,
      timeStamp: serverTimestamp,
    });
    //2
    console.log("Doc added with id", docRef.id);
    //3
    const imageRef = ref(storage, `jobs/${docRef.id}/image}`);
    //4
    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "jobs", docRef.id), {
          image: downloadURL,
        });
      }
    );
  };
  return (
    <div>
      <div>NewJob</div>
      <button onClick={uploadJob}>Upload Job</button>
    </div>
  );
}

export default NewJob;
