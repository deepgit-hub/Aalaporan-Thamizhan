import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Languages() {
  useEffect(() => {
    async function fetchLanguages() {
      const snapshot = await getDocs(collection(db, "languages"));

      snapshot.forEach((doc) => {
        console.log(doc.id, doc.data());
      });
    }

    fetchLanguages();
  }, []);

  return (
    <div>
      <h1>Languages</h1>
    </div>
  );
}

export default Languages;