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
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        'Write a Python program to print "I Love Python".',

      questionTamil:
        '"I Love Python" என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.',

      hintEnglish:
        "Use the print() function.",

      hintTamil:
        "print() Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `I Love Python`,

      expectedOutputTamil: `I Love Python`,

      solution: `print("I Love Python")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        'Write a Python program to print the following three lines:\n1. Welcome Deepak\n2. Welcome Kathir\n3. Welcome to Alaporan Thamizhan',

      questionTamil:
        "கீழே கொடுக்கப்பட்டுள்ள மூன்று வரிகளையும் Print செய்யும் Python Program-ஐ எழுதுங்கள்.\n1. Welcome Deepak\n2. Welcome Kathir\n3. Welcome to Alaporan Thamizhan",

      hintEnglish:
        "Use three print() statements.",

      hintTamil:
        "மூன்று print() Statements-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Welcome Deepak
Welcome Kathir
Welcome to Alaporan Thamizhan`,

      expectedOutputTamil: `Welcome Deepak
Welcome Kathir
Welcome to Alaporan Thamizhan`,

      solution: `print("Welcome Deepak")
print("Welcome Kathir")
print("Welcome to Alaporan Thamizhan")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a Python program to print your favorite programming language.",

      questionTamil:
        "உங்களுக்கு பிடித்த Programming Language-ஐ Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the print() function with a string.",

      hintTamil:
        "ஒரு String-ஐ print() Function மூலம் Print செய்யுங்கள்.",

      expectedOutput: `Python`,

      expectedOutputTamil: `Python`,

      solution: `print("Python")`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a Python program to print your name, college name, and favorite programming language on separate lines.",

      questionTamil:
        "உங்கள் பெயர், College பெயர் மற்றும் உங்களுக்கு பிடித்த Programming Language ஆகியவற்றை தனித்தனி வரிகளில் Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use three print() statements.",

      hintTamil:
        "மூன்று print() Statements-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Deepak
Don Bosco College
Python`,

      expectedOutputTamil: `Deepak
Don Bosco College
Python`,

      solution: `print("Deepak")
print("Don Bosco College")
print("Python")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        'Write a Python program to print the following message:\n"Python is easy to learn."\n"Practice every day."\n"Success will follow."', 

      questionTamil:
        "கீழே கொடுக்கப்பட்டுள்ள செய்தியை Print செய்யும் Python Program-ஐ எழுதுங்கள்.\n\"Python is easy to learn.\"\n\"Practice every day.\"\n\"Success will follow.\"", 

      hintEnglish:
        "Use three print() statements.",

      hintTamil:
        "மூன்று print() Statements-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Python is easy to learn.
Practice every day.
Success will follow.`,

      expectedOutputTamil: `Python is easy to learn.
Practice every day.
Success will follow.`,

      solution: `print("Python is easy to learn.")
print("Practice every day.")
print("Success will follow.")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a Python program to print your name, college name, department, and favorite programming language, each on a separate line.",

      questionTamil:
        "உங்கள் பெயர், College பெயர், Department மற்றும் உங்களுக்கு பிடித்த Programming Language ஆகியவற்றை தனித்தனி வரிகளில் Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use four print() statements.",

      hintTamil:
        "நான்கு print() Statements-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Deepak
Don Bosco College
Computer Science
Python`,

      expectedOutputTamil: `Deepak
Don Bosco College
Computer Science
Python`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        'Write a Python program to print the following quote exactly as shown:\n"Learning never stops."\n"- Alaporan Thamizhan"',

      questionTamil:
        "கீழே கொடுக்கப்பட்டுள்ள Quote-ஐ அதேபோல் Print செய்யும் Python Program-ஐ எழுதுங்கள்.\n\"Learning never stops.\"\n\"- Alaporan Thamizhan\"",

      hintEnglish:
        "Use multiple print() statements.",

      hintTamil:
        "பல print() Statements-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Learning never stops.
- Alaporan Thamizhan`,

      expectedOutputTamil: `Learning never stops.
- Alaporan Thamizhan`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },
  ],
},
{
  topicId: 2,
  title: "Variables",

  questions: [
    {
      id: 1,
      title: "Question 1",

      questionEnglish:
        "Write a Python program to create a variable named 'name' and store 'Deepak'. Then print the variable.",

      questionTamil:
        "'name' என்ற Variable-ஐ உருவாக்கி அதில் 'Deepak' என்ற மதிப்பை சேமித்து, அதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Assign the value using '=' and use print().",

      hintTamil:
        "'=' பயன்படுத்தி Value-ஐ Assign செய்து, print() மூலம் காட்டுங்கள்.",

      expectedOutput: `Deepak`,

      expectedOutputTamil: `Deepak`,

      solution: `name = "Deepak"

print(name)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a Python program to create a variable named 'college' and store 'Don Bosco College'. Print the variable.",

      questionTamil:
        "'college' என்ற Variable-ஐ உருவாக்கி அதில் 'Don Bosco College' என்ற மதிப்பை சேமித்து Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create a string variable and print it.",

      hintTamil:
        "ஒரு String Variable உருவாக்கி அதை Print செய்யுங்கள்.",

      expectedOutput: `Don Bosco College`,

      expectedOutputTamil: `Don Bosco College`,

      solution: `college = "Don Bosco College"

print(college)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a Python program to create a variable named 'language' and store 'Python'. Print the variable.",

      questionTamil:
        "'language' என்ற Variable-ஐ உருவாக்கி அதில் 'Python' என்ற மதிப்பை சேமித்து Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Store the value inside a variable and print it.",

      hintTamil:
        "Value-ஐ Variable-ல் சேமித்து அதை Print செய்யுங்கள்.",

      expectedOutput: `Python`,

      expectedOutputTamil: `Python`,

      solution: `language = "Python"

print(language)`,

      challenge: false,
      locked: false,
      completed: false,
    },
    
  ],
},
];

export default questions;