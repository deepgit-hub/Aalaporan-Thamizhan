const questions = [
    {
  topicId: 1,
  title: "Introduction to Python",

  questions: [
    {
      id: 1,
      title: "Question 1",

      questionEnglish:
        'Write a Python program to print "Hello World" on the screen.',

      questionTamil:
        '"Hello World" என்பதை Screen-ல் Print செய்யும் Python Program-ஐ எழுதுங்கள்.',

      hintEnglish:
        "Use the print() function.",

      hintTamil:
        "print() Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Hello World`,

      expectedOutputTamil: `Hello World`,

      solution: `print("Hello World")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        'Write a Python program to print "Welcome to Python".',

      questionTamil:
        '"Welcome to Python" என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.',

      hintEnglish:
        "Use the print() function with the given text.",

      hintTamil:
        "கொடுக்கப்பட்டுள்ள Text-ஐ print() Function மூலம் Print செய்யுங்கள்.",

      expectedOutput: `Welcome to Python`,

      expectedOutputTamil: `Welcome to Python`,

      solution: `print("Welcome to Python")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        'Write a Python program to print your name and college name on separate lines.',

      questionTamil:
        "உங்கள் பெயர் மற்றும் College பெயரை தனித்தனி வரிகளில் Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use two print() statements.",

      hintTamil:
        "இரண்டு print() Statements-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Deepak
Don Bosco College`,

      expectedOutputTamil: `Deepak
Don Bosco College`,

      solution: `print("Deepak")
print("Don Bosco College")`,

      challenge: false,
      locked: false,
      completed: false,
    },
    
  ],
},
];

export default questions;