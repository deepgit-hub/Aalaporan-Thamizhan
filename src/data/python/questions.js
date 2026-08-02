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
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a Python program to create two variables named 'student' and 'friend'. Store 'Deepak' and 'Kathir' respectively, then print both variables.",

      questionTamil:
        "'student' மற்றும் 'friend' என்ற இரண்டு Variables-ஐ உருவாக்கி, அவற்றில் 'Deepak' மற்றும் 'Kathir' என்ற மதிப்புகளை சேமித்து Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create two variables and print them using two print() statements.",

      hintTamil:
        "இரண்டு Variables உருவாக்கி, இரண்டு print() Statements மூலம் Print செய்யுங்கள்.",

      expectedOutput: `Deepak
Kathir`,

      expectedOutputTamil: `Deepak
Kathir`,

      solution: `student = "Deepak"

friend = "Kathir"

print(student)

print(friend)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a Python program to create variables for your name, college, and programming language. Print all the variables.",

      questionTamil:
        "உங்கள் பெயர், College மற்றும் Programming Language ஆகியவற்றிற்கு Variables உருவாக்கி, அவற்றை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create three variables and print each variable.",

      hintTamil:
        "மூன்று Variables உருவாக்கி ஒவ்வொன்றையும் Print செய்யுங்கள்.",

      expectedOutput: `Deepak
Don Bosco College
Python`,

      expectedOutputTamil: `Deepak
Don Bosco College
Python`,

      solution: `name = "Deepak"

college = "Don Bosco College"

language = "Python"

print(name)

print(college)

print(language)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a Python program to create a variable named 'course' and store 'Python Programming'. Print the sentence 'I am learning Python Programming.' using the variable.",

      questionTamil:
        "'course' என்ற Variable-ஐ உருவாக்கி அதில் 'Python Programming' என்ற மதிப்பை சேமியுங்கள். பின்னர் Variable-ஐ பயன்படுத்தி 'I am learning Python Programming.' என்ற வாக்கியத்தை Print செய்யும் Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Store the course name in a variable and use it inside print().",

      hintTamil:
        "Course பெயரை Variable-ல் சேமித்து, print() Statement-ல் பயன்படுத்துங்கள்.",

      expectedOutput: `I am learning Python Programming.`,

      expectedOutputTamil: `I am learning Python Programming.`,

      solution: `course = "Python Programming"

print("I am learning", course + ".")`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a Python program to create variables for a student's name, college, department, and favorite programming language. Print all the variables.",

      questionTamil:
        "ஒரு மாணவரின் பெயர், College, Department மற்றும் Favorite Programming Language ஆகியவற்றிற்கு Variables உருவாக்கி, அவற்றை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create four variables and print each one using print().",

      hintTamil:
        "நான்கு Variables உருவாக்கி, ஒவ்வொன்றையும் print() மூலம் Print செய்யுங்கள்.",

      expectedOutput: `Deepak
Don Bosco College
Computer Science
Python`,

      expectedOutputTamil: `Deepak
Don Bosco College
Computer Science
Python`,

      solution: `name = "Deepak"

college = "Don Bosco College"

department = "Computer Science"

language = "Python"

print(name)

print(college)

print(department)

print(language)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a Python program to create variables named 'student1' and 'student2'. Store 'Deepak' and 'Kathir' respectively, then print the sentence 'Deepak and Kathir are learning Python.' using the variables.",

      questionTamil:
        "'student1' மற்றும் 'student2' என்ற Variables-ஐ உருவாக்கி, அவற்றில் 'Deepak' மற்றும் 'Kathir' என்ற மதிப்புகளை சேமியுங்கள். பின்னர் Variables-ஐ பயன்படுத்தி 'Deepak and Kathir are learning Python.' என்ற வாக்கியத்தை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use variables inside the print() statement.",

      hintTamil:
        "print() Statement-ல் Variables-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Deepak and Kathir are learning Python.`,

      expectedOutputTamil: `Deepak and Kathir are learning Python.`,

      solution: `student1 = "Deepak"

student2 = "Kathir"

print(student1, "and", student2, "are learning Python.")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a Python program to create variables for your name, age, college, department, and city. Print all the values on separate lines.",

      questionTamil:
        "உங்கள் பெயர், வயது, College, Department மற்றும் City ஆகியவற்றிற்கு Variables உருவாக்கி, அனைத்து Values-ஐ தனித்தனி வரிகளில் Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create five variables and use five print() statements.",

      hintTamil:
        "ஐந்து Variables உருவாக்கி, ஐந்து print() Statements-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Deepak
20
Don Bosco College
Computer Science
Chennai`,

      expectedOutputTamil: `Deepak
20
Don Bosco College
Computer Science
Chennai`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a Python program to create variables for two students' names, one college name, one department, and one programming language. Print a meaningful message using all the variables.",

      questionTamil:
        "இரண்டு மாணவர்களின் பெயர்கள், ஒரு College பெயர், ஒரு Department மற்றும் ஒரு Programming Language ஆகியவற்றிற்கு Variables உருவாக்கி, அனைத்து Variables-ஐ பயன்படுத்தி ஒரு பொருத்தமான (Meaningful) செய்தியை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create five variables and use them inside one or more print() statements.",

      hintTamil:
        "ஐந்து Variables உருவாக்கி, அவற்றை print() Statements-ல் பயன்படுத்துங்கள்.",

      expectedOutput: `Deepak and Kathir are studying Computer Science at Don Bosco College and learning Python.`,

      expectedOutputTamil: `Deepak and Kathir are studying Computer Science at Don Bosco College and learning Python.`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
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

      questionEnglish:
        "Write a Python program to create an integer variable named 'age' with the value 20 and print it.",

      questionTamil:
        "'age' என்ற Integer Variable-ஐ உருவாக்கி அதில் 20 என்ற மதிப்பை சேமித்து Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create an integer variable and use print().",

      hintTamil:
        "ஒரு Integer Variable உருவாக்கி print() மூலம் Print செய்யுங்கள்.",

      expectedOutput: `20`,

      expectedOutputTamil: `20`,

      solution: `age = 20

print(age)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a Python program to create a float variable named 'cgpa' with the value 8.5 and print it.",

      questionTamil:
        "'cgpa' என்ற Float Variable-ஐ உருவாக்கி அதில் 8.5 என்ற மதிப்பை சேமித்து Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Store a decimal value in a variable and print it.",

      hintTamil:
        "ஒரு Decimal Value-ஐ Variable-ல் சேமித்து Print செய்யுங்கள்.",

      expectedOutput: `8.5`,

      expectedOutputTamil: `8.5`,

      solution: `cgpa = 8.5

print(cgpa)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a Python program to create a string variable named 'college' with the value 'Don Bosco College' and print it.",

      questionTamil:
        "'college' என்ற String Variable-ஐ உருவாக்கி அதில் 'Don Bosco College' என்ற மதிப்பை சேமித்து Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Store the text inside double quotes.",

      hintTamil:
        "Text-ஐ Double Quotes-க்குள் சேமியுங்கள்.",

      expectedOutput: `Don Bosco College`,

      expectedOutputTamil: `Don Bosco College`,

      solution: `college = "Don Bosco College"

print(college)`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a Python program to create a Boolean variable named 'isStudent' with the value True and print it.",

      questionTamil:
        "'isStudent' என்ற Boolean Variable-ஐ உருவாக்கி அதில் True என்ற மதிப்பை சேமித்து Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Store the value True in a variable and print it.",

      hintTamil:
        "True என்ற மதிப்பை Variable-ல் சேமித்து print() மூலம் Print செய்யுங்கள்.",

      expectedOutput: `True`,

      expectedOutputTamil: `True`,

      solution: `isStudent = True

print(isStudent)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a Python program to create four variables: an integer (age), a float (cgpa), a string (name), and a Boolean (isStudent). Print all the variables.",

      questionTamil:
        "ஒரு Integer (age), Float (cgpa), String (name) மற்றும் Boolean (isStudent) ஆகிய நான்கு Variables-ஐ உருவாக்கி, அனைத்தையும் Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create variables of different data types and print each one.",

      hintTamil:
        "வெவ்வேறு Data Types-இல் Variables உருவாக்கி ஒவ்வொன்றையும் Print செய்யுங்கள்.",

      expectedOutput: `20
8.5
Deepak
True`,

      expectedOutputTamil: `20
8.5
Deepak
True`,

      solution: `age = 20

cgpa = 8.5

name = "Deepak"

isStudent = True

print(age)

print(cgpa)

print(name)

print(isStudent)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a Python program to create variables for your name, age, CGPA, and whether you are a student. Print all the values.",

      questionTamil:
        "உங்கள் பெயர், வயது, CGPA மற்றும் நீங்கள் Student-ஆ இல்லையா என்பதற்கான Variables-ஐ உருவாக்கி, அனைத்து Values-ஐ Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use String, Integer, Float, and Boolean data types.",

      hintTamil:
        "String, Integer, Float மற்றும் Boolean Data Types-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Deepak
20
8.5
True`,

      expectedOutputTamil: `Deepak
20
8.5
True`,

      solution: `name = "Deepak"

age = 20

cgpa = 8.5

isStudent = True

print(name)

print(age)

print(cgpa)

print(isStudent)`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a Python program to create variables for your name (String), age (Integer), CGPA (Float), and whether you have completed Python (Boolean). Print all the values.",

      questionTamil:
        "உங்கள் பெயர் (String), வயது (Integer), CGPA (Float) மற்றும் Python முடித்துள்ளீர்களா (Boolean) என்பதற்கான Variables-ஐ உருவாக்கி, அனைத்து Values-ஐ Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use String, Integer, Float, and Boolean data types.",

      hintTamil:
        "String, Integer, Float மற்றும் Boolean Data Types-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Deepak
20
8.5
True`,

      expectedOutputTamil: `Deepak
20
8.5
True`,

      solution: `name = "Deepak"

age = 20

cgpa = 8.5

completedPython = True

print(name)

print(age)

print(cgpa)

print(completedPython)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a Python program to create variables for two students' names, one integer age, one float CGPA, and one Boolean value. Print all the variables.",

      questionTamil:
        "இரண்டு மாணவர்களின் பெயர்கள், ஒரு Integer வயது, ஒரு Float CGPA மற்றும் ஒரு Boolean Value ஆகியவற்றிற்கு Variables உருவாக்கி, அனைத்தையும் Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use different data types and print each variable.",

      hintTamil:
        "வெவ்வேறு Data Types-ஐ பயன்படுத்தி Variables உருவாக்கி, ஒவ்வொன்றையும் Print செய்யுங்கள்.",

      expectedOutput: `Deepak
Kathir
20
8.5
True`,

      expectedOutputTamil: `Deepak
Kathir
20
8.5
True`,

      solution: `student1 = "Deepak"

student2 = "Kathir"

age = 20

cgpa = 8.5

isStudent = True

print(student1)

print(student2)

print(age)

print(cgpa)

print(isStudent)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a Python program to create variables for your name, age, department, CGPA, college name, and whether you are placed. Print all the values on separate lines.",

      questionTamil:
        "உங்கள் பெயர், வயது, Department, CGPA, College பெயர் மற்றும் நீங்கள் Placed ஆக உள்ளீர்களா என்பதற்கான Variables-ஐ உருவாக்கி, அனைத்து Values-ஐ தனித்தனி வரிகளில் Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use String, Integer, Float, and Boolean data types.",

      hintTamil:
        "String, Integer, Float மற்றும் Boolean Data Types-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Deepak
20
Computer Science
8.5
Don Bosco College
False`,

      expectedOutputTamil: `Deepak
20
Computer Science
8.5
Don Bosco College
False`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a Python program to create variables for two students' names, one college name, one department, one CGPA, and one Boolean value indicating whether they completed Python. Print a meaningful message using all the variables.",

      questionTamil:
        "இரண்டு மாணவர்களின் பெயர்கள், ஒரு College பெயர், ஒரு Department, ஒரு CGPA மற்றும் அவர்கள் Python முடித்துள்ளார்களா என்பதை குறிக்கும் Boolean Variable ஆகியவற்றை உருவாக்கி, அனைத்து Variables-ஐ பயன்படுத்தி ஒரு பொருத்தமான (Meaningful) செய்தியை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create variables of different data types and use them inside one or more print() statements.",

      hintTamil:
        "வெவ்வேறு Data Types-இல் Variables உருவாக்கி, அவற்றை print() Statements-ல் பயன்படுத்துங்கள்.",

      expectedOutput: `Deepak and Kathir are studying Computer Science at Don Bosco College.
CGPA: 8.5
Python Completed: True`,

      expectedOutputTamil: `Deepak and Kathir are studying Computer Science at Don Bosco College.
CGPA: 8.5
Python Completed: True`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },
    
  ],
},
{
  topicId: 4,
  title: "Input and Output",

  questions: [
    {
      id: 1,
      title: "Question 1",

      questionEnglish:
        "Write a Python program to accept your name from the user and print it.",

      questionTamil:
        "பயனரிடமிருந்து உங்கள் பெயரை Input ஆக பெற்று அதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input() to get the name and print() to display it.",

      hintTamil:
        "பெயரை பெற input() மற்றும் காட்ட print() Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter your name: Deepak
Deepak`,

      expectedOutputTamil: `Enter your name: Deepak
Deepak`,

      solution: `name = input("Enter your name: ")

print(name)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a Python program to accept your college name from the user and print it.",

      questionTamil:
        "பயனரிடமிருந்து உங்கள் College பெயரை Input ஆக பெற்று அதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Store the input in a variable and print it.",

      hintTamil:
        "Input-ஐ ஒரு Variable-ல் சேமித்து Print செய்யுங்கள்.",

      expectedOutput: `Enter your college: Don Bosco College
Don Bosco College`,

      expectedOutputTamil: `Enter your college: Don Bosco College
Don Bosco College`,

      solution: `college = input("Enter your college: ")

print(college)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a Python program to accept your favorite programming language from the user and print it.",

      questionTamil:
        "பயனரிடமிருந்து உங்களுக்கு பிடித்த Programming Language-ஐ Input ஆக பெற்று அதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input() and print().",

      hintTamil:
        "input() மற்றும் print() Functions-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter your favorite language: Python
Python`,

      expectedOutputTamil: `Enter your favorite language: Python
Python`,

      solution: `language = input("Enter your favorite language: ")

print(language)`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a Python program to accept your age from the user and print it.",

      questionTamil:
        "பயனரிடமிருந்து உங்கள் வயதை Input ஆக பெற்று அதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input() to receive the age and print() to display it.",

      hintTamil:
        "வயதை பெற input() மற்றும் காட்ட print() Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter your age: 20
20`,

      expectedOutputTamil: `Enter your age: 20
20`,

      solution: `age = input("Enter your age: ")

print(age)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a Python program to accept your name and college name from the user, then print both values on separate lines.",

      questionTamil:
        "பயனரிடமிருந்து உங்கள் பெயர் மற்றும் College பெயரை Input ஆக பெற்று, அவற்றை தனித்தனி வரிகளில் Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use two input() statements and two print() statements.",

      hintTamil:
        "இரண்டு input() Statements மற்றும் இரண்டு print() Statements-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter your name: Deepak
Enter your college: Don Bosco College
Deepak
Don Bosco College`,

      expectedOutputTamil: `Enter your name: Deepak
Enter your college: Don Bosco College
Deepak
Don Bosco College`,

      solution: `name = input("Enter your name: ")

college = input("Enter your college: ")

print(name)

print(college)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a Python program to accept your name and favorite programming language from the user. Print the sentence '<name> is learning <language>.'",

      questionTamil:
        "பயனரிடமிருந்து உங்கள் பெயர் மற்றும் உங்களுக்கு பிடித்த Programming Language-ஐ Input ஆக பெற்று, '<பெயர்> is learning <Language>.' என்ற வாக்கியத்தை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Store both inputs in variables and use them inside print().",

      hintTamil:
        "இரண்டு Input-களையும் Variables-ல் சேமித்து print() Statement-ல் பயன்படுத்துங்கள்.",

      expectedOutput: `Enter your name: Deepak
Enter your favorite language: Python
Deepak is learning Python.`,

      expectedOutputTamil: `Enter your name: Deepak
Enter your favorite language: Python
Deepak is learning Python.`,

      solution: `name = input("Enter your name: ")

language = input("Enter your favorite language: ")

print(name, "is learning", language + ".")`,

      challenge: false,
      locked: false,
      completed: false,
    },  
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a Python program to accept your name, college name, and favorite programming language from the user. Print all the values on separate lines.",

      questionTamil:
        "பயனரிடமிருந்து உங்கள் பெயர், College பெயர் மற்றும் உங்களுக்கு பிடித்த Programming Language ஆகியவற்றை Input ஆக பெற்று, அவற்றை தனித்தனி வரிகளில் Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use three input() statements and three print() statements.",

      hintTamil:
        "மூன்று input() Statements மற்றும் மூன்று print() Statements-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter your name: Deepak
Enter your college: Don Bosco College
Enter your favorite language: Python
Deepak
Don Bosco College
Python`,

      expectedOutputTamil: `Enter your name: Deepak
Enter your college: Don Bosco College
Enter your favorite language: Python
Deepak
Don Bosco College
Python`,

      solution: `name = input("Enter your name: ")

college = input("Enter your college: ")

language = input("Enter your favorite language: ")

print(name)

print(college)

print(language)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a Python program to accept two student names from the user and print the sentence '<student1> and <student2> are learning Python.'",

      questionTamil:
        "பயனரிடமிருந்து இரண்டு மாணவர்களின் பெயர்களை Input ஆக பெற்று, '<student1> and <student2> are learning Python.' என்ற வாக்கியத்தை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use two input() statements and use both variables inside print().",

      hintTamil:
        "இரண்டு input() Statements-ஐ பயன்படுத்தி, இரண்டு Variables-ஐயும் print() Statement-ல் பயன்படுத்துங்கள்.",

      expectedOutput: `Enter first student: Deepak
Enter second student: Kathir
Deepak and Kathir are learning Python.`,

      expectedOutputTamil: `Enter first student: Deepak
Enter second student: Kathir
Deepak and Kathir are learning Python.`,

      solution: `student1 = input("Enter first student: ")

student2 = input("Enter second student: ")

print(student1, "and", student2, "are learning Python.")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a Python program to accept your name, age, college name, and department from the user. Print all the values on separate lines.",

      questionTamil:
        "பயனரிடமிருந்து உங்கள் பெயர், வயது, College பெயர் மற்றும் Department ஆகியவற்றை Input ஆக பெற்று, அனைத்து Values-ஐ தனித்தனி வரிகளில் Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use four input() statements and four print() statements.",

      hintTamil:
        "நான்கு input() Statements மற்றும் நான்கு print() Statements-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter your name: Deepak
Enter your age: 20
Enter your college: Don Bosco College
Enter your department: Computer Science
Deepak
20
Don Bosco College
Computer Science`,

      expectedOutputTamil: `Enter your name: Deepak
Enter your age: 20
Enter your college: Don Bosco College
Enter your department: Computer Science
Deepak
20
Don Bosco College
Computer Science`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a Python program to accept two student names, one college name, one department, and one favorite programming language from the user. Print a meaningful message using all the inputs.",

      questionTamil:
        "பயனரிடமிருந்து இரண்டு மாணவர்களின் பெயர்கள், ஒரு College பெயர், ஒரு Department மற்றும் ஒரு Favorite Programming Language ஆகியவற்றை Input ஆக பெற்று, அனைத்து Inputs-ஐ பயன்படுத்தி ஒரு பொருத்தமான (Meaningful) செய்தியை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use five input() statements and display the values in a meaningful sentence.",

      hintTamil:
        "ஐந்து input() Statements-ஐ பயன்படுத்தி, அனைத்து Values-ஐ ஒரு பொருத்தமான வாக்கியத்தில் Print செய்யுங்கள்.",

      expectedOutput: `Enter first student: Deepak
Enter second student: Kathir
Enter your college: Don Bosco College
Enter your department: Computer Science
Enter your favorite language: Python
Deepak and Kathir are studying Computer Science at Don Bosco College and learning Python.`,

      expectedOutputTamil: `Enter first student: Deepak
Enter second student: Kathir
Enter your college: Don Bosco College
Enter your department: Computer Science
Enter your favorite language: Python
Deepak and Kathir are studying Computer Science at Don Bosco College and learning Python.`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
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

      questionEnglish:
        "Write a Python program to add two numbers 10 and 20 using the addition operator and print the result.",

      questionTamil:
        "10 மற்றும் 20 ஆகிய இரண்டு எண்களை Addition Operator பயன்படுத்தி கூட்டி அதன் முடிவை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the '+' operator.",

      hintTamil:
        "'+' Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `30`,

      expectedOutputTamil: `30`,

      solution: `num1 = 10

num2 = 20

result = num1 + num2

print(result)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a Python program to subtract 15 from 50 and print the result.",

      questionTamil:
        "50-ல் இருந்து 15-ஐ Subtraction Operator பயன்படுத்தி கழித்து அதன் முடிவை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the '-' operator.",

      hintTamil:
        "'-' Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `35`,

      expectedOutputTamil: `35`,

      solution: `num1 = 50

num2 = 15

result = num1 - num2

print(result)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a Python program to multiply 8 and 6 using the multiplication operator and print the result.",

      questionTamil:
        "8 மற்றும் 6 ஆகிய எண்களை Multiplication Operator பயன்படுத்தி பெருக்கி அதன் முடிவை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the '*' operator.",

      hintTamil:
        "'*' Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `48`,

      expectedOutputTamil: `48`,

      solution: `num1 = 8

num2 = 6

result = num1 * num2

print(result)`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a Python program to divide 100 by 5 using the division operator and print the result.",

      questionTamil:
        "100-ஐ 5-ஆல் Division Operator பயன்படுத்தி வகுத்து அதன் முடிவை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the '/' operator.",

      hintTamil:
        "'/' Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `20.0`,

      expectedOutputTamil: `20.0`,

      solution: `num1 = 100

num2 = 5

result = num1 / num2

print(result)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a Python program to find the remainder when 17 is divided by 5 using the modulus operator and print the result.",

      questionTamil:
        "17-ஐ 5-ஆல் வகுத்த பிறகு கிடைக்கும் மீதியை Modulus Operator பயன்படுத்தி Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the '%' operator.",

      hintTamil:
        "'%' Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `2`,

      expectedOutputTamil: `2`,

      solution: `num1 = 17

num2 = 5

result = num1 % num2

print(result)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a Python program to compare two numbers 25 and 25 using the equality operator and print the result.",

      questionTamil:
        "25 மற்றும் 25 ஆகிய இரண்டு எண்களை Equality Operator பயன்படுத்தி ஒப்பிட்டு அதன் முடிவை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the '==' operator.",

      hintTamil:
        "'==' Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `True`,

      expectedOutputTamil: `True`,

      solution: `num1 = 25

num2 = 25

result = num1 == num2

print(result)`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a Python program to compare two numbers 15 and 25 using the less than operator and print the result.",

      questionTamil:
        "15 மற்றும் 25 ஆகிய இரண்டு எண்களை Less Than Operator பயன்படுத்தி ஒப்பிட்டு அதன் முடிவை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the '<' operator.",

      hintTamil:
        "'<' Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `True`,

      expectedOutputTamil: `True`,

      solution: `num1 = 15

num2 = 25

result = num1 < num2

print(result)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a Python program to compare two numbers 40 and 20 using the greater than operator and print the result.",

      questionTamil:
        "40 மற்றும் 20 ஆகிய இரண்டு எண்களை Greater Than Operator பயன்படுத்தி ஒப்பிட்டு அதன் முடிவை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the '>' operator.",

      hintTamil:
        "'>' Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `True`,

      expectedOutputTamil: `True`,

      solution: `num1 = 40

num2 = 20

result = num1 > num2

print(result)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a Python program to perform addition, subtraction, multiplication, division, and modulus on two numbers entered by the user and print all the results.",

      questionTamil:
        "பயனரிடமிருந்து இரண்டு எண்களை Input ஆக பெற்று, அவற்றின் Addition, Subtraction, Multiplication, Division மற்றும் Modulus ஆகியவற்றின் முடிவுகளை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the operators +, -, *, /, and %.",

      hintTamil:
        "+, -, *, / மற்றும் % Operators-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter first number: 20
Enter second number: 5
Addition: 25
Subtraction: 15
Multiplication: 100
Division: 4.0
Modulus: 0`,

      expectedOutputTamil: `Enter first number: 20
Enter second number: 5
Addition: 25
Subtraction: 15
Multiplication: 100
Division: 4.0
Modulus: 0`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a Python program to accept two numbers from the user and display the results of Arithmetic Operators (+, -, *, /), Comparison Operators (==, >, <), and Modulus Operator (%).",

      questionTamil:
        "பயனரிடமிருந்து இரண்டு எண்களை Input ஆக பெற்று, Arithmetic Operators (+, -, *, /), Comparison Operators (==, >, <) மற்றும் Modulus Operator (%) ஆகியவற்றின் முடிவுகளை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use all the operators learned in this topic.",

      hintTamil:
        "இந்த Topic-ல் கற்றுக்கொண்ட அனைத்து Operators-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter first number: 15
Enter second number: 5
Addition: 20
Subtraction: 10
Multiplication: 75
Division: 3.0
Modulus: 0
Equal: False
Greater: True
Less: False`,

      expectedOutputTamil: `Enter first number: 15
Enter second number: 5
Addition: 20
Subtraction: 10
Multiplication: 75
Division: 3.0
Modulus: 0
Equal: False
Greater: True
Less: False`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
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

      questionEnglish:
        "Write a Python program to print 'Pass' if the marks are greater than or equal to 50. Use marks = 75.",

      questionTamil:
        "marks = 75 பயன்படுத்தி, மதிப்பெண் 50 அல்லது அதற்கு மேல் இருந்தால் 'Pass' என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use an if statement with the '>=' operator.",

      hintTamil:
        "if Statement மற்றும் '>=' Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Pass`,

      expectedOutputTamil: `Pass`,

      solution: `marks = 75

if marks >= 50:
    print("Pass")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a Python program to print 'Eligible to Vote' if age is greater than or equal to 18. Use age = 20.",

      questionTamil:
        "age = 20 பயன்படுத்தி, வயது 18 அல்லது அதற்கு மேல் இருந்தால் 'Eligible to Vote' என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Check the age using an if statement.",

      hintTamil:
        "if Statement பயன்படுத்தி வயதை சரிபாருங்கள்.",

      expectedOutput: `Eligible to Vote`,

      expectedOutputTamil: `Eligible to Vote`,

      solution: `age = 20

if age >= 18:
    print("Eligible to Vote")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a Python program to print 'Welcome Deepak' if the variable name is 'Deepak'.",

      questionTamil:
        "name = 'Deepak' பயன்படுத்தி, பெயர் 'Deepak' ஆக இருந்தால் 'Welcome Deepak' என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the '==' operator inside the if statement.",

      hintTamil:
        "if Statement-ல் '==' Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Welcome Deepak`,

      expectedOutputTamil: `Welcome Deepak`,

      solution: `name = "Deepak"

if name == "Deepak":
    print("Welcome Deepak")`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a Python program to print 'Even Number' if number is equal to 10.",

      questionTamil:
        "number = 10 பயன்படுத்தி, எண் 10 ஆக இருந்தால் 'Even Number' என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use an if statement with the '==' operator.",

      hintTamil:
        "if Statement மற்றும் '==' Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Even Number`,

      expectedOutputTamil: `Even Number`,

      solution: `number = 10

if number == 10:
    print("Even Number")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a Python program to print 'Positive Number' if number is greater than 0. Use number = 25.",

      questionTamil:
        "number = 25 பயன்படுத்தி, எண் 0-வை விட பெரியதாக இருந்தால் 'Positive Number' என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the '>' operator inside the if statement.",

      hintTamil:
        "if Statement-ல் '>' Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Positive Number`,

      expectedOutputTamil: `Positive Number`,

      solution: `number = 25

if number > 0:
    print("Positive Number")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a Python program to accept a mark from the user and print 'Pass' if the mark is greater than or equal to 35.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு மதிப்பெண்ணை Input ஆக பெற்று, அது 35 அல்லது அதற்கு மேல் இருந்தால் 'Pass' என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input(), int(), and an if statement.",

      hintTamil:
        "input(), int() மற்றும் if Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter mark: 80
Pass`,

      expectedOutputTamil: `Enter mark: 80
Pass`,

      solution: `mark = int(input("Enter mark: "))

if mark >= 35:
    print("Pass")`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a Python program to accept the user's age. Print 'Eligible to Vote' if the age is greater than or equal to 18.",

      questionTamil:
        "பயனரிடமிருந்து வயதை Input ஆக பெற்று, அது 18 அல்லது அதற்கு மேல் இருந்தால் 'Eligible to Vote' என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input(), int(), and an if statement.",

      hintTamil:
        "input(), int() மற்றும் if Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter age: 20
Eligible to Vote`,

      expectedOutputTamil: `Enter age: 20
Eligible to Vote`,

      solution: `age = int(input("Enter age: "))

if age >= 18:
    print("Eligible to Vote")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a Python program to accept a number from the user. Print 'Positive Number' if the number is greater than 0.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, அது 0-வை விட பெரியதாக இருந்தால் 'Positive Number' என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input(), int(), and an if statement.",

      hintTamil:
        "input(), int() மற்றும் if Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter number: 25
Positive Number`,

      expectedOutputTamil: `Enter number: 25
Positive Number`,

      solution: `number = int(input("Enter number: "))

if number > 0:
    print("Positive Number")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a Python program to accept the student's mark from the user. Print 'Pass' if the mark is greater than or equal to 35.",

      questionTamil:
        "பயனரிடமிருந்து மாணவரின் மதிப்பெண்ணை Input ஆக பெற்று, அது 35 அல்லது அதற்கு மேல் இருந்தால் 'Pass' என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input(), int(), and an if statement.",

      hintTamil:
        "input(), int() மற்றும் if Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter mark: 60
Pass`,

      expectedOutputTamil: `Enter mark: 60
Pass`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a Python program to accept the user's age, mark, and name. Print 'Eligible' if the age is greater than or equal to 18, the mark is greater than or equal to 35, and the name is 'Deepak'.",

      questionTamil:
        "பயனரிடமிருந்து வயது, மதிப்பெண் மற்றும் பெயரை Input ஆக பெற்று, வயது 18 அல்லது அதற்கு மேல், மதிப்பெண் 35 அல்லது அதற்கு மேல், மேலும் பெயர் 'Deepak' ஆக இருந்தால் 'Eligible' என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use multiple input() statements and separate if statements.",

      hintTamil:
        "பல input() Statements மற்றும் தனித்தனி if Statements-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter name: Deepak
Enter age: 20
Enter mark: 75
Eligible`,

      expectedOutputTamil: `Enter name: Deepak
Enter age: 20
Enter mark: 75
Eligible`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
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

      questionEnglish:
        "Write a Python program to print 'Pass' if marks are greater than or equal to 35; otherwise print 'Fail'. Use marks = 60.",

      questionTamil:
        "marks = 60 பயன்படுத்தி, மதிப்பெண் 35 அல்லது அதற்கு மேல் இருந்தால் 'Pass', இல்லையெனில் 'Fail' என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use an if...else statement with the '>=' operator.",

      hintTamil:
        "if...else Statement மற்றும் '>=' Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Pass`,

      expectedOutputTamil: `Pass`,

      solution: `marks = 60

if marks >= 35:
    print("Pass")
else:
    print("Fail")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a Python program to print 'Eligible to Vote' if age is greater than or equal to 18; otherwise print 'Not Eligible'. Use age = 16.",

      questionTamil:
        "age = 16 பயன்படுத்தி, வயது 18 அல்லது அதற்கு மேல் இருந்தால் 'Eligible to Vote', இல்லையெனில் 'Not Eligible' என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use an if...else statement.",

      hintTamil:
        "if...else Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Not Eligible`,

      expectedOutputTamil: `Not Eligible`,

      solution: `age = 16

if age >= 18:
    print("Eligible to Vote")
else:
    print("Not Eligible")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a Python program to print 'Welcome Deepak' if the name is 'Deepak'; otherwise print 'Unknown User'.",

      questionTamil:
        "பெயர் 'Deepak' ஆக இருந்தால் 'Welcome Deepak', இல்லையெனில் 'Unknown User' என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the '==' operator inside an if...else statement.",

      hintTamil:
        "if...else Statement-ல் '==' Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Welcome Deepak`,

      expectedOutputTamil: `Welcome Deepak`,

      solution: `name = "Deepak"

if name == "Deepak":
    print("Welcome Deepak")
else:
    print("Unknown User")`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a Python program to print 'Even Number' if a number is even; otherwise print 'Odd Number'. Use number = 15.",

      questionTamil:
        "number = 15 பயன்படுத்தி, எண் Even ஆக இருந்தால் 'Even Number', இல்லையெனில் 'Odd Number' என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the modulus (%) operator with an if...else statement.",

      hintTamil:
        "if...else Statement மற்றும் Modulus (%) Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Odd Number`,

      expectedOutputTamil: `Odd Number`,

      solution: `number = 15

if number % 2 == 0:
    print("Even Number")
else:
    print("Odd Number")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a Python program to print 'Positive Number' if the number is greater than or equal to 0; otherwise print 'Negative Number'. Use number = -8.",

      questionTamil:
        "number = -8 பயன்படுத்தி, எண் 0 அல்லது அதற்கு மேல் இருந்தால் 'Positive Number', இல்லையெனில் 'Negative Number' என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the '>=' operator with an if...else statement.",

      hintTamil:
        "if...else Statement மற்றும் '>=' Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Negative Number`,

      expectedOutputTamil: `Negative Number`,

      solution: `number = -8

if number >= 0:
    print("Positive Number")
else:
    print("Negative Number")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a Python program to accept a mark from the user. Print 'Pass' if the mark is greater than or equal to 35; otherwise print 'Fail'.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு மதிப்பெண்ணை Input ஆக பெற்று, அது 35 அல்லது அதற்கு மேல் இருந்தால் 'Pass', இல்லையெனில் 'Fail' என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input(), int(), and an if...else statement.",

      hintTamil:
        "input(), int() மற்றும் if...else Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter mark: 30
Fail`,

      expectedOutputTamil: `Enter mark: 30
Fail`,

      solution: `mark = int(input("Enter mark: "))

if mark >= 35:
    print("Pass")
else:
    print("Fail")`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a Python program to accept the user's age. Print 'Eligible to Vote' if the age is greater than or equal to 18; otherwise print 'Not Eligible'.",

      questionTamil:
        "பயனரிடமிருந்து வயதை Input ஆக பெற்று, அது 18 அல்லது அதற்கு மேல் இருந்தால் 'Eligible to Vote', இல்லையெனில் 'Not Eligible' என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input(), int(), and an if...else statement.",

      hintTamil:
        "input(), int() மற்றும் if...else Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter age: 20
Eligible to Vote`,

      expectedOutputTamil: `Enter age: 20
Eligible to Vote`,

      solution: `age = int(input("Enter age: "))

if age >= 18:
    print("Eligible to Vote")
else:
    print("Not Eligible")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a Python program to accept a number from the user. Print 'Even Number' if the number is even; otherwise print 'Odd Number'.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, அது Even ஆக இருந்தால் 'Even Number', இல்லையெனில் 'Odd Number' என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the modulus (%) operator with an if...else statement.",

      hintTamil:
        "Modulus (%) Operator மற்றும் if...else Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter number: 8
Even Number`,

      expectedOutputTamil: `Enter number: 8
Even Number`,

      solution: `number = int(input("Enter number: "))

if number % 2 == 0:
    print("Even Number")
else:
    print("Odd Number")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a Python program to accept the user's mark. Print 'Pass' if the mark is greater than or equal to 35; otherwise print 'Fail'.",

      questionTamil:
        "பயனரிடமிருந்து மதிப்பெண்ணை Input ஆக பெற்று, அது 35 அல்லது அதற்கு மேல் இருந்தால் 'Pass', இல்லையெனில் 'Fail' என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input(), int(), and an if...else statement.",

      hintTamil:
        "input(), int() மற்றும் if...else Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter mark: 75
Pass`,

      expectedOutputTamil: `Enter mark: 75
Pass`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a Python program to accept a student's name and mark. Print 'Pass' if the mark is greater than or equal to 35; otherwise print 'Fail'. After that, print 'Welcome Deepak' if the name is 'Deepak'; otherwise print 'Welcome Student'.",

      questionTamil:
        "பயனரிடமிருந்து மாணவரின் பெயர் மற்றும் மதிப்பெண்ணை Input ஆக பெற்று, மதிப்பெண் 35 அல்லது அதற்கு மேல் இருந்தால் 'Pass', இல்லையெனில் 'Fail' என்பதை Print செய்யுங்கள். அதன் பிறகு, பெயர் 'Deepak' ஆக இருந்தால் 'Welcome Deepak', இல்லையெனில் 'Welcome Student' என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use two input() statements and two separate if...else statements.",

      hintTamil:
        "இரண்டு input() Statements மற்றும் இரண்டு தனித்தனி if...else Statements-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter name: Deepak
Enter mark: 80
Pass
Welcome Deepak`,

      expectedOutputTamil: `Enter name: Deepak
Enter mark: 80
Pass
Welcome Deepak`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
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

      questionEnglish:
        "Write a Python program to check if a student has passed. If the mark is greater than or equal to 35, then check if the mark is greater than or equal to 90 and print 'Excellent'. Use mark = 95.",

      questionTamil:
        "ஒரு மாணவர் தேர்ச்சி பெற்றுள்ளாரா என்பதை சரிபார்க்கும் Python Program-ஐ எழுதுங்கள். மதிப்பெண் 35 அல்லது அதற்கு மேல் இருந்தால், மீண்டும் அது 90 அல்லது அதற்கு மேல் உள்ளதா என்று சரிபார்த்து 'Excellent' என்பதை Print செய்யுங்கள். mark = 95 பயன்படுத்துங்கள்.",

      hintEnglish:
        "Use one if statement inside another if statement.",

      hintTamil:
        "ஒரு if Statement-க்குள் மற்றொரு if Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Excellent`,

      expectedOutputTamil: `Excellent`,

      solution: `mark = 95

if mark >= 35:
    if mark >= 90:
        print("Excellent")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a Python program to check whether a student is eligible for placement. If the CGPA is greater than or equal to 7.5, then check if the age is greater than or equal to 18 and print 'Eligible'. Use cgpa = 8.2 and age = 20.",

      questionTamil:
        "ஒரு மாணவர் Placement-க்கு தகுதியானவரா என்பதை சரிபார்க்கும் Python Program-ஐ எழுதுங்கள். CGPA 7.5 அல்லது அதற்கு மேல் இருந்தால், வயது 18 அல்லது அதற்கு மேல் உள்ளதா என்று சரிபார்த்து 'Eligible' என்பதை Print செய்யுங்கள். cgpa = 8.2 மற்றும் age = 20 பயன்படுத்துங்கள்.",

      hintEnglish:
        "Use nested if statements.",

      hintTamil:
        "Nested if Statements-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Eligible`,

      expectedOutputTamil: `Eligible`,

      solution: `cgpa = 8.2

age = 20

if cgpa >= 7.5:
    if age >= 18:
        print("Eligible")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a Python program to check whether the user is Deepak. If the name is 'Deepak', then check whether the password is 'python123' and print 'Login Successful'.",

      questionTamil:
        "பயனர் 'Deepak' தானா என்பதை சரிபார்க்கும் Python Program-ஐ எழுதுங்கள். பெயர் 'Deepak' ஆக இருந்தால், Password 'python123' ஆக உள்ளதா என்று சரிபார்த்து 'Login Successful' என்பதை Print செய்யுங்கள்.",

      hintEnglish:
        "Use two if statements, one inside another.",

      hintTamil:
        "ஒரு if Statement-க்குள் மற்றொரு if Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Login Successful`,

      expectedOutputTamil: `Login Successful`,

      solution: `name = "Deepak"

password = "python123"

if name == "Deepak":
    if password == "python123":
        print("Login Successful")`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a Python program to check whether a student has passed. If the mark is greater than or equal to 35, then check whether the attendance is greater than or equal to 75 and print 'Eligible for Exam'. Use mark = 80 and attendance = 90.",

      questionTamil:
        "ஒரு மாணவர் தேர்ச்சி பெற்றுள்ளாரா என்பதை சரிபார்க்கும் Python Program-ஐ எழுதுங்கள். மதிப்பெண் 35 அல்லது அதற்கு மேல் இருந்தால், Attendance 75 அல்லது அதற்கு மேல் உள்ளதா என்று சரிபார்த்து 'Eligible for Exam' என்பதை Print செய்யுங்கள். mark = 80 மற்றும் attendance = 90 பயன்படுத்துங்கள்.",

      hintEnglish:
        "Use one if statement inside another if statement.",

      hintTamil:
        "ஒரு if Statement-க்குள் மற்றொரு if Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Eligible for Exam`,

      expectedOutputTamil: `Eligible for Exam`,

      solution: `mark = 80

attendance = 90

if mark >= 35:
    if attendance >= 75:
        print("Eligible for Exam")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a Python program to check whether a user is eligible to register. If the age is greater than or equal to 18, then check whether the user has an Aadhaar card and print 'Registration Successful'. Use age = 20 and hasAadhaar = True.",

      questionTamil:
        "ஒரு பயனர் பதிவு செய்ய தகுதியானவரா என்பதை சரிபார்க்கும் Python Program-ஐ எழுதுங்கள். வயது 18 அல்லது அதற்கு மேல் இருந்தால், Aadhaar Card உள்ளதா என்று சரிபார்த்து 'Registration Successful' என்பதை Print செய்யுங்கள். age = 20 மற்றும் hasAadhaar = True பயன்படுத்துங்கள்.",

      hintEnglish:
        "Use nested if statements.",

      hintTamil:
        "Nested if Statements-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Registration Successful`,

      expectedOutputTamil: `Registration Successful`,

      solution: `age = 20

hasAadhaar = True

if age >= 18:
    if hasAadhaar:
        print("Registration Successful")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a Python program to accept the user's age and mark. If the age is greater than or equal to 18, then check whether the mark is greater than or equal to 35 and print 'Eligible'.",

      questionTamil:
        "பயனரிடமிருந்து வயது மற்றும் மதிப்பெண்ணை Input ஆக பெற்று, வயது 18 அல்லது அதற்கு மேல் இருந்தால், மதிப்பெண் 35 அல்லது அதற்கு மேல் உள்ளதா என்று சரிபார்த்து 'Eligible' என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input(), int(), and nested if statements.",

      hintTamil:
        "input(), int() மற்றும் Nested if Statements-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter age: 20
Enter mark: 75
Eligible`,

      expectedOutputTamil: `Enter age: 20
Enter mark: 75
Eligible`,

      solution: `age = int(input("Enter age: "))

mark = int(input("Enter mark: "))

if age >= 18:
    if mark >= 35:
        print("Eligible")`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a Python program to accept the user's name, age, and mark. If the name is 'Deepak', then check whether the mark is greater than or equal to 35 and print 'Pass'.",

      questionTamil:
        "பயனரிடமிருந்து பெயர், வயது மற்றும் மதிப்பெண்ணை Input ஆக பெற்று, பெயர் 'Deepak' ஆக இருந்தால், மதிப்பெண் 35 அல்லது அதற்கு மேல் உள்ளதா என்று சரிபார்த்து 'Pass' என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input(), int(), and nested if statements.",

      hintTamil:
        "input(), int() மற்றும் Nested if Statements-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter name: Deepak
Enter age: 20
Enter mark: 80
Pass`,

      expectedOutputTamil: `Enter name: Deepak
Enter age: 20
Enter mark: 80
Pass`,

      solution: `name = input("Enter name: ")

age = int(input("Enter age: "))

mark = int(input("Enter mark: "))

if name == "Deepak":
    if mark >= 35:
        print("Pass")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a Python program to accept a student's name and CGPA. If the name is 'Kathir', then check whether the CGPA is greater than or equal to 7.5 and print 'Placement Eligible'.",

      questionTamil:
        "பயனரிடமிருந்து மாணவரின் பெயர் மற்றும் CGPA-ஐ Input ஆக பெற்று, பெயர் 'Kathir' ஆக இருந்தால், CGPA 7.5 அல்லது அதற்கு மேல் உள்ளதா என்று சரிபார்த்து 'Placement Eligible' என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use nested if statements with input().",

      hintTamil:
        "input() மற்றும் Nested if Statements-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter name: Kathir
Enter CGPA: 8.4
Placement Eligible`,

      expectedOutputTamil: `Enter name: Kathir
Enter CGPA: 8.4
Placement Eligible`,

      solution: `name = input("Enter name: ")

cgpa = float(input("Enter CGPA: "))

if name == "Kathir":
    if cgpa >= 7.5:
        print("Placement Eligible")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a Python program to accept a student's name, age, and attendance. If the age is greater than or equal to 18, then check whether the attendance is greater than or equal to 75 and print 'Eligible for Placement Drive'.",

      questionTamil:
        "பயனரிடமிருந்து மாணவரின் பெயர், வயது மற்றும் Attendance-ஐ Input ஆக பெற்று, வயது 18 அல்லது அதற்கு மேல் இருந்தால், Attendance 75 அல்லது அதற்கு மேல் உள்ளதா என்று சரிபார்த்து 'Eligible for Placement Drive' என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use nested if statements with input() and int().",

      hintTamil:
        "input(), int() மற்றும் Nested if Statements-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter name: Deepak
Enter age: 20
Enter attendance: 90
Eligible for Placement Drive`,

      expectedOutputTamil: `Enter name: Deepak
Enter age: 20
Enter attendance: 90
Eligible for Placement Drive`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a Python program to accept the user's name, age, mark, and CGPA. If the age is greater than or equal to 18, then check whether the mark is greater than or equal to 35. If both conditions are true, print 'Eligible'.",

      questionTamil:
        "பயனரிடமிருந்து பெயர், வயது, மதிப்பெண் மற்றும் CGPA-ஐ Input ஆக பெற்று, வயது 18 அல்லது அதற்கு மேல் இருந்தால், மதிப்பெண் 35 அல்லது அதற்கு மேல் உள்ளதா என்று சரிபார்த்து, இரண்டு நிபந்தனைகளும் True ஆக இருந்தால் 'Eligible' என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use multiple input() statements and nested if statements.",

      hintTamil:
        "பல input() Statements மற்றும் Nested if Statements-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter name: Deepak
Enter age: 20
Enter mark: 75
Enter CGPA: 8.5
Eligible`,

      expectedOutputTamil: `Enter name: Deepak
Enter age: 20
Enter mark: 75
Enter CGPA: 8.5
Eligible`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },
  ],
},
];

export default questions;