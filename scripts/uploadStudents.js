import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
} from "firebase/firestore";

import students from "../src/data/students/students.js";
const firebaseConfig = {
  apiKey: "AIzaSyAStzy7krxiv2ZDGRG-9ZDVjKNfG0j0DqY",
  authDomain: "aalaporan-thamizhan.firebaseapp.com",
  projectId: "aalaporan-thamizhan",
  storageBucket: "aalaporan-thamizhan.firebasestorage.app",
  messagingSenderId: "727449277716",
  appId: "1:727449277716:web:fb1620273d4779502e9e01",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// ================= UPLOAD STUDENTS =================

async function uploadStudents() {
  try {
    console.clear();

    console.log("====================================");
    console.log("🎓 STUDENT UPLOADER");
    console.log("====================================\n");

    for (const student of students) {

      await setDoc(
        doc(db, "students", student.username),
        {
          ...student,
        }
      );

      console.log(
        `✅ ${student.username} - ${student.name} Uploaded`
      );
    }

    console.log("\n====================================");
    console.log("🎉 ALL STUDENTS UPLOADED SUCCESSFULLY");
    console.log("====================================");

  } catch (error) {

    console.error("❌ Upload Failed");
    console.error(error);

  }
}

uploadStudents();