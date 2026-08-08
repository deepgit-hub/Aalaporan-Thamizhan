import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
} from "firebase/firestore";

import cppTopics from "../src/data/cpp/topics.js";
import cppQuestions from "../src/data/cpp/questions.js";

import javaTopics from "../src/data/java/topics.js";
import javaQuestions from "../src/data/java/questions.js";

import pythonTopics from "../src/data/python/topics.js";
import pythonQuestions from "../src/data/python/questions.js";

// ================= FIREBASE =================

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

// ================= LANGUAGE LIST =================

const languages = [
  {
    id: "cpp",
    name: "C++",
    topics: cppTopics,
    questions: cppQuestions,
  },

  {
    id: "java",
    name: "Java",
    topics: javaTopics,
    questions: javaQuestions,
  },

  {
    id: "python",
    name: "Python",
    topics: pythonTopics,
    questions: pythonQuestions,
  },
];
// ================= UPLOAD FUNCTION =================

async function uploadLanguage(language) {
  console.log(`\n====================================`);
  console.log(`Uploading ${language.name}`);
  console.log(`====================================\n`);

  // Create language document
  await setDoc(doc(db, "languages", language.id), {
    id: language.id,
    name: language.name,
  });

  for (const topic of language.topics) {

    console.log(`Uploading Topic ${topic.id} - ${topic.title}`);

    // Create concept document
    await setDoc(
      doc(
        db,
        "languages",
        language.id,
        "concepts",
        topic.id.toString()
      ),
      {
        ...topic,
      }
    );

    // Find all questions belonging to this topic
    const topicQuestions = language.questions.find(
      (item) => item.topicId === topic.id
    );

    if (!topicQuestions) {
      console.log(`⚠ No questions found for Topic ${topic.id}`);
      continue;
    }

    // Upload every question
    for (const question of topicQuestions.questions) {

      await setDoc(
        doc(
          db,
          "languages",
          language.id,
          "concepts",
          topic.id.toString(),
          "questions",
          question.id.toString()
        ),
        {
          ...question,
        }
      );

      console.log(
        `   ✔ Question ${question.id} Uploaded`
      );
    }

    console.log(
      `✅ Topic ${topic.id} Uploaded Successfully\n`
    );
  }

  console.log(
    `🎉 ${language.name} Uploaded Successfully\n`
  );
}
// ================= MAIN =================

async function uploadAll() {
  try {
    console.clear();

    console.log("====================================");
    console.log("🚀 FIREBASE DATA UPLOADER");
    console.log("====================================\n");

    for (const language of languages) {
      await uploadLanguage(language);
    }

    console.log("\n====================================");
    console.log("🎉 ALL DATA UPLOADED SUCCESSFULLY");
    console.log("====================================");
  } catch (error) {
    console.error("\n❌ Upload Failed");
    console.error(error);
  }
}

uploadAll();