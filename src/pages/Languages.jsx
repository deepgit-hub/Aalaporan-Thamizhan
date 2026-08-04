import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

function Languages() {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    async function fetchLanguages() {
      const snapshot = await getDocs(collection(db, "languages"));

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setLanguages(data);
    }

    fetchLanguages();
  }, []);

  return (
    <div>
      <h1>Languages</h1>

      {languages.map((language) => (
        <Link
          key={language.id}
          to={`/home/${language.id}`}
        >
          <h2>{language.name}</h2>
        </Link>
      ))}
    </div>
  );
}

export default Languages;