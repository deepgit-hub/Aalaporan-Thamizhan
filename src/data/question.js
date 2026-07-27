const questions = [
  {
    topicId: 1,
    title: "Introduction to Programming",

    questions: [
     {
  id: 1,
  title: "Question 1",

  questionEnglish:
    'Write a Java program to print "Hello World" on the console.',

  questionTamil:
    '"Hello World" என்பதை Console-ல் Print செய்யும் Java Program-ஐ எழுதுங்கள்.',

  hintEnglish:
    "Use the System.out.println() statement.",

  hintTamil:
    "System.out.println() Statement-ஐ பயன்படுத்துங்கள்.",

  expectedOutput: `Hello World`,

  expectedOutputTamil: `Hello World`,

  solution: `public class Main {

    public static void main(String[] args) {

        System.out.println("Hello World");

    }

}`,

  challenge: false,
  locked: false,
  completed: false,
},
{
  id: 2,
  title: "Question 2",

  questionEnglish:
    "Write a Java program to print your name on the console.",

  questionTamil:
    "உங்கள் பெயரை Console-ல் Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

  hintEnglish:
    "Use the System.out.println() statement.",

  hintTamil:
    "System.out.println() Statement-ஐ பயன்படுத்துங்கள்.",

  expectedOutput: `Deepak`,

  expectedOutputTamil: `Deepak`,

  solution: `public class Main {

    public static void main(String[] args) {

        System.out.println("Deepak");

    }

}`,

  challenge: false,
  locked: false,
  completed: false,
},
{
  id: 3,
  title: "Question 3",

  questionEnglish:
    "Write a Java program to print your name and your goal on separate lines.",

  questionTamil:
    "உங்கள் பெயரையும் உங்கள் இலக்கையும் (Goal) தனித்தனி வரிகளில் Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

  hintEnglish:
    "Use two System.out.println() statements.",

  hintTamil:
    "இரண்டு System.out.println() Statements-ஐ பயன்படுத்துங்கள்.",

  expectedOutput: `Deepak
Cyber Security`,

  expectedOutputTamil: `Deepak
Cyber Security`,

  solution: `public class Main {

    public static void main(String[] args) {

        System.out.println("Deepak");
        System.out.println("Cyber Security");

    }

}`,

  challenge: false,
  locked: false,
  completed: false,
},
{
  id: 4,
  title: "Question 4",

  questionEnglish:
    "Write a Java program to print your college name.",

  questionTamil:
    "உங்கள் கல்லூரியின் பெயரை Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

  hintEnglish:
    "Use one System.out.println() statement.",

  hintTamil:
    "ஒரு System.out.println() Statement-ஐ பயன்படுத்துங்கள்.",

  expectedOutput: `ABC Engineering College`,

  expectedOutputTamil: `ABC Engineering College`,

  solution: `public class Main {

    public static void main(String[] args) {

        System.out.println("ABC Engineering College");

    }

}`,

  challenge: false,
  locked: false,
  completed: false,
},
{
  id: 5,
  title: "Question 5",

  questionEnglish:
    "Write a Java program to print your department and your favorite programming language.",

  questionTamil:
    "உங்கள் Department மற்றும் உங்களுக்கு பிடித்த Programming Language-ஐ Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

  hintEnglish:
    "Use two System.out.println() statements.",

  hintTamil:
    "இரண்டு System.out.println() Statements-ஐ பயன்படுத்துங்கள்.",

  expectedOutput: `Computer Science and Engineering
Java`,

  expectedOutputTamil: `Computer Science and Engineering
Java`,

  solution: `public class Main {

    public static void main(String[] args) {

        System.out.println("Computer Science and Engineering");
        System.out.println("Java");

    }

}`,

  challenge: false,
  locked: false,
  completed: false,
},
{
  id: 6,
  title: "Question 6",

  questionEnglish:
    "Write a Java program to print the following output.",

  questionTamil:
    "கீழே கொடுக்கப்பட்டுள்ள Output-ஐ Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

  hintEnglish:
    "Use four System.out.println() statements.",

  hintTamil:
    "நான்கு System.out.println() Statements-ஐ பயன்படுத்துங்கள்.",

  expectedOutput: `Welcome
To
Java
Programming`,

  expectedOutputTamil: `Welcome
To
Java
Programming`,

  solution: `public class Main {

    public static void main(String[] args) {

        System.out.println("Welcome");
        System.out.println("To");
        System.out.println("Java");
        System.out.println("Programming");

    }

}`,

  challenge: false,
  locked: false,
  completed: false,
},
{
  id: 7,
  title: "Question 7",

  questionEnglish:
    "Write a Java program to print your Name, Age, and Goal on separate lines.",

  questionTamil:
    "உங்கள் பெயர், வயது மற்றும் இலக்கை (Goal) தனித்தனி வரிகளில் Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

  hintEnglish:
    "Use three System.out.println() statements.",

  hintTamil:
    "மூன்று System.out.println() Statements-ஐ பயன்படுத்துங்கள்.",

  expectedOutput: `Deepak
20
Cyber Security`,

  expectedOutputTamil: `Deepak
20
Cyber Security`,

  solution: `public class Main {

    public static void main(String[] args) {

        System.out.println("Deepak");
        System.out.println("20");
        System.out.println("Cyber Security");

    }

}`,

  challenge: false,
  locked: false,
  completed: false,
},
{
  id: 8,
  title: "Question 8",

  questionEnglish:
    "Write a Java program to print the following output.",

  questionTamil:
    "கீழே கொடுக்கப்பட்டுள்ள Output-ஐ Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

  hintEnglish:
    "Print each line separately.",

  hintTamil:
    "ஒவ்வொரு வரியையும் தனித்தனியாக Print செய்யுங்கள்.",

  expectedOutput: `************
Welcome to Java
************`,

  expectedOutputTamil: `************
Welcome to Java
************`,

  solution: `public class Main {

    public static void main(String[] args) {

        System.out.println("************");
        System.out.println("Welcome to Java");
        System.out.println("************");

    }

}`,

  challenge: false,
  locked: false,
  completed: false,
},
{
  id: 9,
  title: "Challenge Question 9",

  questionEnglish:
    "Write a Java program to print the following pattern.",

  questionTamil:
    "கீழே கொடுக்கப்பட்டுள்ள Pattern-ஐ Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

  hintEnglish:
    "Use multiple System.out.println() statements.",

  hintTamil:
    "பல System.out.println() Statements-ஐ பயன்படுத்துங்கள்.",

  expectedOutput: `*
**
***
****
*****`,

  expectedOutputTamil: `*
**
***
****
*****`,

  solution: "",

  challenge: true,
  locked: true,
  completed: false,
},
{
  id: 10,
  title: "Challenge Question 10",

  questionEnglish:
    'Write a Java program to print "Java Programming is Fun" using only one System.out.println() statement.',

  questionTamil:
    '"Java Programming is Fun" என்பதை ஒரு System.out.println() Statement மட்டும் பயன்படுத்தி Print செய்யும் Java Program-ஐ எழுதுங்கள்.',

  hintEnglish:
    "Use newline characters (\\n).",

  hintTamil:
    "புதிய வரிக்கு (\\n) பயன்படுத்துங்கள்.",

  solution: "",

  challenge: true,

  locked: true,

  completed: false,
},  ],
  },

  {
    topicId: 2,
    title: "Variables",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
    topicId: 3,
    title: "Data Types",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
    topicId: 4,
    title: "Input & Output",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
    topicId: 5,
    title: "Operators",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
    topicId: 6,
    title: "If Statement",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
    topicId: 7,
    title: "If Else Statement",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
    topicId: 8,
    title: "Nested If Statement",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
    topicId: 9,
    title: "Switch Case",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
    topicId: 10,
    title: "Ternary Operator",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
   {
    topicId: 11,
    title: "While Loop",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
    topicId: 12,
    title: "Do While Loop",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
     topicId: 13,
  title: "For Loop",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
    topicId: 14,
  title: "Nested Loops",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
    topicId: 15,
  title: "Break Statement",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
    topicId: 16,
  title: "Continue Statement",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
    topicId: 17,
  title: "One-Dimensional Array",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
    topicId: 18,
  title: "Two-Dimensional Array",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
    topicId: 19,
  title: "Array Operations",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
    topicId: 20,
  title: "Methods",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
   topicId: 21,
  title: "Return Type",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
    topicId: 22,
  title: "Method Overloading",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
    topicId: 23,
  title: "Class",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
    topicId: 24,
  title: "Object",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
    topicId: 25,
  title: "Constructor",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
    topicId: 26,
  title: "this Keyword",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },

  {
   topicId: 27,
  title: "Inheritance",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
     topicId: 28,
  title: "Single Inheritance",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
  topicId: 29,
  title: "Multilevel Inheritance",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
     topicId: 30,
  title: "Hierarchical Inheritance",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
    topicId: 31,
  title: "Multiple Inheritance",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
    topicId: 32,
  title: "Hybrid Inheritance",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
    topicId: 33,
  title: "Exception Handling",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
    topicId: 34,
  title: "Try Catch",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
    topicId: 35,
  title: "Finally Block",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
    topicId: 36,
  title: "Throw Keyword",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  
];

export default questions;