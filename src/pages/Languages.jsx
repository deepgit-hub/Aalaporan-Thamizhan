import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Languages() {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    async function fetchLanguages() {
      const snapshot = await getDocs(collection(db, "languages"));

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(data);
      setLanguages(data);
    }

    fetchLanguages();
  }, []);

  return (
    <div>
      <h1>Languages</h1>

      {languages.map((language) => (
        <h2 key={language.id}>
          {language.name}
        </h2>
      ))}
    </div>
  );
}

export default Languages;