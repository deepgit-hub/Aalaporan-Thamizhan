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
{
  topicId: 9,
  title: "Type Casting",

  questions: [
    {
      id: 1,
      title: "Question 1",

      questionEnglish:
        "Write a Python program to convert the string '25' into an integer and print the result.",

      questionTamil:
        "'25' என்ற String-ஐ Integer-ஆக மாற்றி அதன் மதிப்பை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the int() function.",

      hintTamil:
        "int() Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `25`,

      expectedOutputTamil: `25`,

      solution: `number = "25"

number = int(number)

print(number)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a Python program to convert the integer 50 into a float and print the result.",

      questionTamil:
        "50 என்ற Integer-ஐ Float-ஆக மாற்றி அதன் மதிப்பை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the float() function.",

      hintTamil:
        "float() Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `50.0`,

      expectedOutputTamil: `50.0`,

      solution: `number = 50

number = float(number)

print(number)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a Python program to convert the integer 100 into a string and print the result.",

      questionTamil:
        "100 என்ற Integer-ஐ String-ஆக மாற்றி அதன் மதிப்பை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the str() function.",

      hintTamil:
        "str() Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `100`,

      expectedOutputTamil: `100`,

      solution: `number = 100

number = str(number)

print(number)`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a Python program to convert the float value 8.5 into an integer and print the result.",

      questionTamil:
        "8.5 என்ற Float Value-ஐ Integer-ஆக மாற்றி அதன் மதிப்பை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the int() function.",

      hintTamil:
        "int() Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `8`,

      expectedOutputTamil: `8`,

      solution: `cgpa = 8.5

cgpa = int(cgpa)

print(cgpa)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a Python program to convert the string '95.5' into a float and print the result.",

      questionTamil:
        "'95.5' என்ற String-ஐ Float-ஆக மாற்றி அதன் மதிப்பை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the float() function.",

      hintTamil:
        "float() Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `95.5`,

      expectedOutputTamil: `95.5`,

      solution: `mark = "95.5"

mark = float(mark)

print(mark)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a Python program to accept the user's age as input, convert it into an integer, and print the age after type casting.",

      questionTamil:
        "பயனரிடமிருந்து வயதை Input ஆக பெற்று, அதை Integer-ஆக மாற்றி (Type Casting) Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input() with int().",

      hintTamil:
        "input() மற்றும் int() Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter age: 20
20`,

      expectedOutputTamil: `Enter age: 20
20`,

      solution: `age = int(input("Enter age: "))

print(age)`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a Python program to accept the user's CGPA as input, convert it into a float, and print the value.",

      questionTamil:
        "பயனரிடமிருந்து CGPA-வை Input ஆக பெற்று, அதை Float-ஆக மாற்றி Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input() with float().",

      hintTamil:
        "input() மற்றும் float() Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter CGPA: 8.7
8.7`,

      expectedOutputTamil: `Enter CGPA: 8.7
8.7`,

      solution: `cgpa = float(input("Enter CGPA: "))

print(cgpa)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a Python program to accept a number as input, convert it into a float, then convert it into an integer and print both values.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, முதலில் அதை Float-ஆகவும், பின்னர் Integer-ஆகவும் மாற்றி இரண்டு மதிப்புகளையும் Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use float() first, then int().",

      hintTamil:
        "முதலில் float(), பின்னர் int() Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter number: 25
25.0
25`,

      expectedOutputTamil: `Enter number: 25
25.0
25`,

      solution: `number = input("Enter number: ")

floatNumber = float(number)

intNumber = int(floatNumber)

print(floatNumber)

print(intNumber)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a Python program to accept the user's age and CGPA as input. Convert the age into an integer and the CGPA into a float. Print both values.",

      questionTamil:
        "பயனரிடமிருந்து வயது மற்றும் CGPA-வை Input ஆக பெற்று, வயதை Integer-ஆகவும், CGPA-வை Float-ஆகவும் மாற்றி Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use int() for age and float() for CGPA.",

      hintTamil:
        "வயதிற்கு int() மற்றும் CGPA-க்கு float() Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter age: 20
Enter CGPA: 8.5
20
8.5`,

      expectedOutputTamil: `Enter age: 20
Enter CGPA: 8.5
20
8.5`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a Python program to accept a mark as input, convert it into an integer, convert the integer into a string, and print the final value.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு மதிப்பெண்ணை Input ஆக பெற்று, அதை Integer-ஆக மாற்றி, பின்னர் அந்த Integer-ஐ String-ஆக மாற்றி இறுதி மதிப்பை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use int() and then str().",

      hintTamil:
        "முதலில் int(), பின்னர் str() Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter mark: 95
95`,

      expectedOutputTamil: `Enter mark: 95
95`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },
  ],
},
{
  topicId: 10,
  title: "Match Case",

  questions: [
    {
      id: 1,
      title: "Question 1",

      questionEnglish:
        "Write a Python program to print 'Monday' when the value of day is 1 using the match-case statement.",

      questionTamil:
        "match-case Statement பயன்படுத்தி day = 1 ஆக இருந்தால் 'Monday' என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the match and case keywords.",

      hintTamil:
        "match மற்றும் case Keywords-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Monday`,

      expectedOutputTamil: `Monday`,

      solution: `day = 1

match day:
    case 1:
        print("Monday")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a Python program to print 'Tuesday' when the value of day is 2 using the match-case statement.",

      questionTamil:
        "match-case Statement பயன்படுத்தி day = 2 ஆக இருந்தால் 'Tuesday' என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create a case for the value 2.",

      hintTamil:
        "2 என்ற Value-க்கு ஒரு case உருவாக்குங்கள்.",

      expectedOutput: `Tuesday`,

      expectedOutputTamil: `Tuesday`,

      solution: `day = 2

match day:
    case 2:
        print("Tuesday")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a Python program to print 'Welcome Deepak' when the value is 'Deepak' using the match-case statement.",

      questionTamil:
        "match-case Statement பயன்படுத்தி Value 'Deepak' ஆக இருந்தால் 'Welcome Deepak' என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a string value inside the case.",

      hintTamil:
        "case-க்குள் String Value-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Welcome Deepak`,

      expectedOutputTamil: `Welcome Deepak`,

      solution: `name = "Deepak"

match name:
    case "Deepak":
        print("Welcome Deepak")`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a Python program to print the name of the month using the match-case statement. Use month = 3 to print 'March'.",

      questionTamil:
        "match-case Statement பயன்படுத்தி month = 3 ஆக இருந்தால் 'March' என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create a case for the value 3.",

      hintTamil:
        "3 என்ற Value-க்கு ஒரு case உருவாக்குங்கள்.",

      expectedOutput: `March`,

      expectedOutputTamil: `March`,

      solution: `month = 3

match month:
    case 3:
        print("March")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a Python program to print your favorite programming language using the match-case statement. Use language = 'Python'.",

      questionTamil:
        "match-case Statement பயன்படுத்தி language = 'Python' ஆக இருந்தால் 'Python is my favorite language' என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a string inside the case statement.",

      hintTamil:
        "case Statement-ல் String Value-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Python is my favorite language`,

      expectedOutputTamil: `Python is my favorite language`,

      solution: `language = "Python"

match language:
    case "Python":
        print("Python is my favorite language")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a Python program to accept a number from the user and print the corresponding day using the match-case statement (1 = Monday, 2 = Tuesday).",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, match-case Statement பயன்படுத்தி அதற்கான நாளை Print செய்யும் Python Program-ஐ எழுதுங்கள். (1 = Monday, 2 = Tuesday)",

      hintEnglish:
        "Use input(), int(), and match-case.",

      hintTamil:
        "input(), int() மற்றும் match-case Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter day number: 2
Tuesday`,

      expectedOutputTamil: `Enter day number: 2
Tuesday`,

      solution: `day = int(input("Enter day number: "))

match day:
    case 1:
        print("Monday")
    case 2:
        print("Tuesday")`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a Python program to accept a number from the user and print the corresponding month using the match-case statement (1 = January, 2 = February, 3 = March).",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, match-case Statement பயன்படுத்தி அதற்கான மாதத்தை Print செய்யும் Python Program-ஐ எழுதுங்கள். (1 = January, 2 = February, 3 = March)",

      hintEnglish:
        "Use input(), int(), and match-case.",

      hintTamil:
        "input(), int() மற்றும் match-case Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter month number: 3
March`,

      expectedOutputTamil: `Enter month number: 3
March`,

      solution: `month = int(input("Enter month number: "))

match month:
    case 1:
        print("January")
    case 2:
        print("February")
    case 3:
        print("March")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a Python program to accept a student's name from the user and print a welcome message using the match-case statement.",

      questionTamil:
        "பயனரிடமிருந்து மாணவரின் பெயரை Input ஆக பெற்று, match-case Statement பயன்படுத்தி ஒரு Welcome Message-ஐ Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a string inside the case statement.",

      hintTamil:
        "case Statement-ல் String Value-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter name: Deepak
Welcome Deepak`,

      expectedOutputTamil: `Enter name: Deepak
Welcome Deepak`,

      solution: `name = input("Enter name: ")

match name:
    case "Deepak":
        print("Welcome Deepak")
    case "Kathir":
        print("Welcome Kathir")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a Python program to accept a number from the user and display the corresponding weekday using the match-case statement for values 1 to 5.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, 1 முதல் 5 வரை உள்ள Values-க்கு பொருத்தமான Weekday-ஐ match-case Statement பயன்படுத்தி Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create separate case blocks for each weekday.",

      hintTamil:
        "ஒவ்வொரு Weekday-க்கும் தனித்தனி case Blocks உருவாக்குங்கள்.",

      expectedOutput: `Enter day number: 5
Friday`,

      expectedOutputTamil: `Enter day number: 5
Friday`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a Python program to accept a user's choice (1-4) and display the selected programming language using the match-case statement. (1 = Python, 2 = Java, 3 = C++, 4 = JavaScript)",

      questionTamil:
        "பயனரிடமிருந்து 1 முதல் 4 வரை ஒரு Choice-ஐ Input ஆக பெற்று, match-case Statement பயன்படுத்தி அதற்கான Programming Language-ஐ Print செய்யும் Python Program-ஐ எழுதுங்கள். (1 = Python, 2 = Java, 3 = C++, 4 = JavaScript)",

      hintEnglish:
        "Create four case blocks for the four programming languages.",

      hintTamil:
        "நான்கு Programming Languages-க்கும் தனித்தனி case Blocks உருவாக்குங்கள்.",

      expectedOutput: `Enter your choice: 2
Java`,

      expectedOutputTamil: `Enter your choice: 2
Java`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },
  ],
},
{
  topicId: 11,
  title: "Ternary Operator",

  questions: [
    {
      id: 1,
      title: "Question 1",

      questionEnglish:
        "Write a Python program to print 'Pass' if marks are greater than or equal to 35; otherwise print 'Fail' using the ternary operator. Use marks = 80.",

      questionTamil:
        "marks = 80 பயன்படுத்தி, மதிப்பெண் 35 அல்லது அதற்கு மேல் இருந்தால் 'Pass', இல்லையெனில் 'Fail' என்பதை Ternary Operator பயன்படுத்தி Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the syntax: value_if_true if condition else value_if_false.",

      hintTamil:
        "'value_if_true if condition else value_if_false' என்ற Syntax-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Pass`,

      expectedOutputTamil: `Pass`,

      solution: `marks = 80

result = "Pass" if marks >= 35 else "Fail"

print(result)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a Python program to print 'Eligible' if age is greater than or equal to 18; otherwise print 'Not Eligible' using the ternary operator. Use age = 16.",

      questionTamil:
        "age = 16 பயன்படுத்தி, வயது 18 அல்லது அதற்கு மேல் இருந்தால் 'Eligible', இல்லையெனில் 'Not Eligible' என்பதை Ternary Operator பயன்படுத்தி Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the ternary operator with the '>=' operator.",

      hintTamil:
        "Ternary Operator மற்றும் '>=' Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Not Eligible`,

      expectedOutputTamil: `Not Eligible`,

      solution: `age = 16

result = "Eligible" if age >= 18 else "Not Eligible"

print(result)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a Python program to print 'Welcome Deepak' if the name is 'Deepak'; otherwise print 'Unknown User' using the ternary operator.",

      questionTamil:
        "பெயர் 'Deepak' ஆக இருந்தால் 'Welcome Deepak', இல்லையெனில் 'Unknown User' என்பதை Ternary Operator பயன்படுத்தி Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the '==' operator with the ternary operator.",

      hintTamil:
        "'==' Operator மற்றும் Ternary Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Welcome Deepak`,

      expectedOutputTamil: `Welcome Deepak`,

      solution: `name = "Deepak"

result = "Welcome Deepak" if name == "Deepak" else "Unknown User"

print(result)`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a Python program to print 'Even Number' if the number is even; otherwise print 'Odd Number' using the ternary operator. Use number = 15.",

      questionTamil:
        "number = 15 பயன்படுத்தி, எண் Even ஆக இருந்தால் 'Even Number', இல்லையெனில் 'Odd Number' என்பதை Ternary Operator பயன்படுத்தி Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the modulus (%) operator with the ternary operator.",

      hintTamil:
        "Modulus (%) Operator மற்றும் Ternary Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Odd Number`,

      expectedOutputTamil: `Odd Number`,

      solution: `number = 15

result = "Even Number" if number % 2 == 0 else "Odd Number"

print(result)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a Python program to print 'Positive Number' if the number is greater than or equal to 0; otherwise print 'Negative Number' using the ternary operator. Use number = -10.",

      questionTamil:
        "number = -10 பயன்படுத்தி, எண் 0 அல்லது அதற்கு மேல் இருந்தால் 'Positive Number', இல்லையெனில் 'Negative Number' என்பதை Ternary Operator பயன்படுத்தி Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the '>=' operator with the ternary operator.",

      hintTamil:
        "'>=' Operator மற்றும் Ternary Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Negative Number`,

      expectedOutputTamil: `Negative Number`,

      solution: `number = -10

result = "Positive Number" if number >= 0 else "Negative Number"

print(result)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a Python program to accept a mark from the user and print 'Pass' if the mark is greater than or equal to 35; otherwise print 'Fail' using the ternary operator.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு மதிப்பெண்ணை Input ஆக பெற்று, அது 35 அல்லது அதற்கு மேல் இருந்தால் 'Pass', இல்லையெனில் 'Fail' என்பதை Ternary Operator பயன்படுத்தி Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input(), int(), and the ternary operator.",

      hintTamil:
        "input(), int() மற்றும் Ternary Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter mark: 75
Pass`,

      expectedOutputTamil: `Enter mark: 75
Pass`,

      solution: `mark = int(input("Enter mark: "))

result = "Pass" if mark >= 35 else "Fail"

print(result)`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a Python program to accept the user's age and print 'Eligible to Vote' if the age is greater than or equal to 18; otherwise print 'Not Eligible' using the ternary operator.",

      questionTamil:
        "பயனரிடமிருந்து வயதை Input ஆக பெற்று, அது 18 அல்லது அதற்கு மேல் இருந்தால் 'Eligible to Vote', இல்லையெனில் 'Not Eligible' என்பதை Ternary Operator பயன்படுத்தி Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input(), int(), and the ternary operator.",

      hintTamil:
        "input(), int() மற்றும் Ternary Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter age: 20
Eligible to Vote`,

      expectedOutputTamil: `Enter age: 20
Eligible to Vote`,

      solution: `age = int(input("Enter age: "))

result = "Eligible to Vote" if age >= 18 else "Not Eligible"

print(result)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a Python program to accept a number from the user and print 'Even Number' if the number is even; otherwise print 'Odd Number' using the ternary operator.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, அது Even ஆக இருந்தால் 'Even Number', இல்லையெனில் 'Odd Number' என்பதை Ternary Operator பயன்படுத்தி Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input(), int(), modulus (%) operator, and the ternary operator.",

      hintTamil:
        "input(), int(), Modulus (%) Operator மற்றும் Ternary Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter number: 12
Even Number`,

      expectedOutputTamil: `Enter number: 12
Even Number`,

      solution: `number = int(input("Enter number: "))

result = "Even Number" if number % 2 == 0 else "Odd Number"

print(result)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a Python program to accept the user's mark and print 'Pass' if the mark is greater than or equal to 35; otherwise print 'Fail' using the ternary operator.",

      questionTamil:
        "பயனரிடமிருந்து மதிப்பெண்ணை Input ஆக பெற்று, அது 35 அல்லது அதற்கு மேல் இருந்தால் 'Pass', இல்லையெனில் 'Fail' என்பதை Ternary Operator பயன்படுத்தி Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input(), int(), and the ternary operator.",

      hintTamil:
        "input(), int() மற்றும் Ternary Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter mark: 80
Pass`,

      expectedOutputTamil: `Enter mark: 80
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
        "Write a Python program to accept the user's age, mark, and a number. Using the ternary operator, display whether the user is eligible to vote, whether the student passed, and whether the number is even or odd.",

      questionTamil:
        "பயனரிடமிருந்து வயது, மதிப்பெண் மற்றும் ஒரு எண்ணை Input ஆக பெற்று, Ternary Operator பயன்படுத்தி வாக்களிக்க தகுதியானவரா, மாணவர் தேர்ச்சி பெற்றாரா மற்றும் அந்த எண் Even அல்லது Odd என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use three separate ternary operators.",

      hintTamil:
        "மூன்று தனித்தனி Ternary Operators-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter age: 20
Enter mark: 75
Enter number: 9
Eligible to Vote
Pass
Odd Number`,

      expectedOutputTamil: `Enter age: 20
Enter mark: 75
Enter number: 9
Eligible to Vote
Pass
Odd Number`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },
  ],
},
{
  topicId: 12,
  title: "While Loop",

  questions: [
    {
      id: 1,
      title: "Question 1",

      questionEnglish:
        "Write a Python program to print numbers from 1 to 5 using a while loop.",

      questionTamil:
        "While Loop பயன்படுத்தி 1 முதல் 5 வரை உள்ள எண்களை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Initialize a variable with 1 and increment it until 5.",

      hintTamil:
        "ஒரு Variable-ஐ 1-ல் தொடங்கி, 5 வரை Increment செய்யுங்கள்.",

      expectedOutput: `1
2
3
4
5`,

      expectedOutputTamil: `1
2
3
4
5`,

      solution: `i = 1

while i <= 5:
    print(i)
    i += 1`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a Python program to print numbers from 5 to 1 using a while loop.",

      questionTamil:
        "While Loop பயன்படுத்தி 5 முதல் 1 வரை உள்ள எண்களை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Start from 5 and decrement the variable.",

      hintTamil:
        "5-ல் தொடங்கி Variable-ஐ Decrement செய்யுங்கள்.",

      expectedOutput: `5
4
3
2
1`,

      expectedOutputTamil: `5
4
3
2
1`,

      solution: `i = 5

while i >= 1:
    print(i)
    i -= 1`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a Python program to print 'Hello Python' five times using a while loop.",

      questionTamil:
        "While Loop பயன்படுத்தி 'Hello Python' என்பதை 5 முறை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a counter variable and a while loop.",

      hintTamil:
        "Counter Variable மற்றும் While Loop-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Hello Python
Hello Python
Hello Python
Hello Python
Hello Python`,

      expectedOutputTamil: `Hello Python
Hello Python
Hello Python
Hello Python
Hello Python`,

      solution: `i = 1

while i <= 5:
    print("Hello Python")
    i += 1`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a Python program to print all even numbers from 2 to 10 using a while loop.",

      questionTamil:
        "While Loop பயன்படுத்தி 2 முதல் 10 வரை உள்ள அனைத்து Even எண்களையும் Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Start from 2 and increment the variable by 2.",

      hintTamil:
        "2-ல் தொடங்கி Variable-ஐ 2-ஆக Increment செய்யுங்கள்.",

      expectedOutput: `2
4
6
8
10`,

      expectedOutputTamil: `2
4
6
8
10`,

      solution: `i = 2

while i <= 10:
    print(i)
    i += 2`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a Python program to print all odd numbers from 1 to 9 using a while loop.",

      questionTamil:
        "While Loop பயன்படுத்தி 1 முதல் 9 வரை உள்ள அனைத்து Odd எண்களையும் Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Start from 1 and increment the variable by 2.",

      hintTamil:
        "1-ல் தொடங்கி Variable-ஐ 2-ஆக Increment செய்யுங்கள்.",

      expectedOutput: `1
3
5
7
9`,

      expectedOutputTamil: `1
3
5
7
9`,

      solution: `i = 1

while i <= 9:
    print(i)
    i += 2`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a Python program to accept a number from the user and print numbers from 1 to that number using a while loop.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, While Loop பயன்படுத்தி 1 முதல் அந்த எண் வரை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input(), int(), and a while loop.",

      hintTamil:
        "input(), int() மற்றும் While Loop-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 5
1
2
3
4
5`,

      expectedOutputTamil: `Enter a number: 5
1
2
3
4
5`,

      solution: `number = int(input("Enter a number: "))

i = 1

while i <= number:
    print(i)
    i += 1`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a Python program to accept a number from the user and print all even numbers from 2 to that number using a while loop.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, While Loop பயன்படுத்தி 2 முதல் அந்த எண் வரை உள்ள அனைத்து Even எண்களையும் Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Start from 2 and increment the variable by 2.",

      hintTamil:
        "2-ல் தொடங்கி Variable-ஐ 2-ஆக Increment செய்யுங்கள்.",

      expectedOutput: `Enter a number: 10
2
4
6
8
10`,

      expectedOutputTamil: `Enter a number: 10
2
4
6
8
10`,

      solution: `number = int(input("Enter a number: "))

i = 2

while i <= number:
    print(i)
    i += 2`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a Python program to accept a number from the user and print its multiplication table from 1 to 10 using a while loop.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, While Loop பயன்படுத்தி அதன் பெருக்கல் வாய்ப்பாட்டை (1 முதல் 10 வரை) Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a counter from 1 to 10 inside the while loop.",

      hintTamil:
        "While Loop-ல் 1 முதல் 10 வரை Counter Variable-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50`,

      expectedOutputTamil: `Enter a number: 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50`,

      solution: `number = int(input("Enter a number: "))

i = 1

while i <= 10:
    print(number, "x", i, "=", number * i)
    i += 1`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a Python program to accept a number from the user and print all odd numbers from 1 to that number using a while loop.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, While Loop பயன்படுத்தி 1 முதல் அந்த எண் வரை உள்ள அனைத்து Odd எண்களையும் Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Start from 1 and increment the variable by 2.",

      hintTamil:
        "1-ல் தொடங்கி Variable-ஐ 2-ஆக Increment செய்யுங்கள்.",

      expectedOutput: `Enter a number: 9
1
3
5
7
9`,

      expectedOutputTamil: `Enter a number: 9
1
3
5
7
9`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a Python program to accept a number from the user and print the multiplication table from 1 to 20 using a while loop.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, While Loop பயன்படுத்தி அதன் பெருக்கல் வாய்ப்பாட்டை (1 முதல் 20 வரை) Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a while loop with a counter from 1 to 20.",

      hintTamil:
        "1 முதல் 20 வரை Counter Variable-உடன் While Loop-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 3
3 x 1 = 3
3 x 2 = 6
...
3 x 20 = 60`,

      expectedOutputTamil: `Enter a number: 3
3 x 1 = 3
3 x 2 = 6
...
3 x 20 = 60`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
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

      questionEnglish:
        "Write a Python program to print numbers from 1 to 5 using a for loop.",

      questionTamil:
        "For Loop பயன்படுத்தி 1 முதல் 5 வரை உள்ள எண்களை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the range() function from 1 to 5.",

      hintTamil:
        "1 முதல் 5 வரை range() Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `1
2
3
4
5`,

      expectedOutputTamil: `1
2
3
4
5`,

      solution: `for i in range(1, 6):
    print(i)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a Python program to print numbers from 5 to 1 using a for loop.",

      questionTamil:
        "For Loop பயன்படுத்தி 5 முதல் 1 வரை உள்ள எண்களை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use range() with a negative step value.",

      hintTamil:
        "Negative Step Value-உடன் range() Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `5
4
3
2
1`,

      expectedOutputTamil: `5
4
3
2
1`,

      solution: `for i in range(5, 0, -1):
    print(i)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a Python program to print 'Hello Python' five times using a for loop.",

      questionTamil:
        "For Loop பயன்படுத்தி 'Hello Python' என்பதை 5 முறை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use range(5) inside the for loop.",

      hintTamil:
        "For Loop-ல் range(5)-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Hello Python
Hello Python
Hello Python
Hello Python
Hello Python`,

      expectedOutputTamil: `Hello Python
Hello Python
Hello Python
Hello Python
Hello Python`,

      solution: `for i in range(5):
    print("Hello Python")`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a Python program to print all even numbers from 2 to 10 using a for loop.",

      questionTamil:
        "For Loop பயன்படுத்தி 2 முதல் 10 வரை உள்ள அனைத்து Even எண்களையும் Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use range() with a step value of 2.",

      hintTamil:
        "Step Value 2-உடன் range() Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `2
4
6
8
10`,

      expectedOutputTamil: `2
4
6
8
10`,

      solution: `for i in range(2, 11, 2):
    print(i)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a Python program to print all odd numbers from 1 to 9 using a for loop.",

      questionTamil:
        "For Loop பயன்படுத்தி 1 முதல் 9 வரை உள்ள அனைத்து Odd எண்களையும் Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use range() with a step value of 2.",

      hintTamil:
        "Step Value 2-உடன் range() Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `1
3
5
7
9`,

      expectedOutputTamil: `1
3
5
7
9`,

      solution: `for i in range(1, 10, 2):
    print(i)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a Python program to accept a number from the user and print numbers from 1 to that number using a for loop.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, For Loop பயன்படுத்தி 1 முதல் அந்த எண் வரை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input(), int(), and range().",

      hintTamil:
        "input(), int() மற்றும் range() Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 5
1
2
3
4
5`,

      expectedOutputTamil: `Enter a number: 5
1
2
3
4
5`,

      solution: `number = int(input("Enter a number: "))

for i in range(1, number + 1):
    print(i)`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a Python program to accept a number from the user and print all even numbers from 2 to that number using a for loop.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, For Loop பயன்படுத்தி 2 முதல் அந்த எண் வரை உள்ள அனைத்து Even எண்களையும் Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use range() with a step value of 2.",

      hintTamil:
        "Step Value 2-உடன் range() Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 10
2
4
6
8
10`,

      expectedOutputTamil: `Enter a number: 10
2
4
6
8
10`,

      solution: `number = int(input("Enter a number: "))

for i in range(2, number + 1, 2):
    print(i)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a Python program to accept a number from the user and print its multiplication table from 1 to 10 using a for loop.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, For Loop பயன்படுத்தி அதன் பெருக்கல் வாய்ப்பாட்டை (1 முதல் 10 வரை) Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use range(1, 11) inside the for loop.",

      hintTamil:
        "For Loop-ல் range(1, 11)-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50`,

      expectedOutputTamil: `Enter a number: 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50`,

      solution: `number = int(input("Enter a number: "))

for i in range(1, 11):
    print(number, "x", i, "=", number * i)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a Python program to accept a number from the user and print all odd numbers from 1 to that number using a for loop.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, For Loop பயன்படுத்தி 1 முதல் அந்த எண் வரை உள்ள அனைத்து Odd எண்களையும் Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use range() starting from 1 with a step value of 2.",

      hintTamil:
        "1-ல் தொடங்கி Step Value 2-உடன் range() Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 9
1
3
5
7
9`,

      expectedOutputTamil: `Enter a number: 9
1
3
5
7
9`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a Python program to accept a number from the user and print its multiplication table from 1 to 20 using a for loop.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, For Loop பயன்படுத்தி அதன் பெருக்கல் வாய்ப்பாட்டை (1 முதல் 20 வரை) Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use range(1, 21) inside the for loop.",

      hintTamil:
        "For Loop-ல் range(1, 21)-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 3
3 x 1 = 3
3 x 2 = 6
...
3 x 20 = 60`,

      expectedOutputTamil: `Enter a number: 3
3 x 1 = 3
3 x 2 = 6
...
3 x 20 = 60`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },
  ],
},
{
  topicId: 14,
  title: "Nested Loop",

  questions: [
    {
      id: 1,
      title: "Question 1",

      questionEnglish:
        "Write a Python program to print the following pattern using nested for loops.\n*\n*\n*",

      questionTamil:
        "Nested For Loop பயன்படுத்தி கீழே கொடுக்கப்பட்டுள்ள Pattern-ஐ Print செய்யும் Python Program-ஐ எழுதுங்கள்.\n*\n*\n*",

      hintEnglish:
        "Use one outer loop and one inner loop.",

      hintTamil:
        "ஒரு Outer Loop மற்றும் ஒரு Inner Loop-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `*
*
*`,

      expectedOutputTamil: `*
*
*`,

      solution: `for i in range(3):
    for j in range(1):
        print("*")
`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a Python program to print a 3 × 3 square star pattern using nested for loops.",

      questionTamil:
        "Nested For Loop பயன்படுத்தி 3 × 3 Star Square Pattern-ஐ Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use two for loops. Print '*' with end=' '.",

      hintTamil:
        "இரண்டு For Loops-ஐ பயன்படுத்தி end=' ' உடன் '*'-ஐ Print செய்யுங்கள்.",

      expectedOutput: `* * *
* * *
* * *`,

      expectedOutputTamil: `* * *
* * *
* * *`,

      solution: `for i in range(3):
    for j in range(3):
        print("*", end=" ")
    print()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a Python program to print the following number pattern using nested for loops.\n1 2 3\n1 2 3\n1 2 3",

      questionTamil:
        "Nested For Loop பயன்படுத்தி கீழே கொடுக்கப்பட்டுள்ள Number Pattern-ஐ Print செய்யும் Python Program-ஐ எழுதுங்கள்.\n1 2 3\n1 2 3\n1 2 3",

      hintEnglish:
        "Use two for loops and print the inner loop variable.",

      hintTamil:
        "இரண்டு For Loops-ஐ பயன்படுத்தி Inner Loop Variable-ஐ Print செய்யுங்கள்.",

      expectedOutput: `1 2 3
1 2 3
1 2 3`,

      expectedOutputTamil: `1 2 3
1 2 3
1 2 3`,

      solution: `for i in range(3):
    for j in range(1, 4):
        print(j, end=" ")
    print()`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a Python program to print the following pattern using nested for loops.\n1 1 1\n2 2 2\n3 3 3",

      questionTamil:
        "Nested For Loop பயன்படுத்தி கீழே கொடுக்கப்பட்டுள்ள Pattern-ஐ Print செய்யும் Python Program-ஐ எழுதுங்கள்.\n1 1 1\n2 2 2\n3 3 3",

      hintEnglish:
        "Print the outer loop variable inside the inner loop.",

      hintTamil:
        "Inner Loop-ல் Outer Loop Variable-ஐ Print செய்யுங்கள்.",

      expectedOutput: `1 1 1
2 2 2
3 3 3`,

      expectedOutputTamil: `1 1 1
2 2 2
3 3 3`,

      solution: `for i in range(1, 4):
    for j in range(3):
        print(i, end=" ")
    print()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a Python program to print the following pattern using nested for loops.\nA A A\nB B B\nC C C",

      questionTamil:
        "Nested For Loop பயன்படுத்தி கீழே கொடுக்கப்பட்டுள்ள Pattern-ஐ Print செய்யும் Python Program-ஐ எழுதுங்கள்.\nA A A\nB B B\nC C C",

      hintEnglish:
        "Store the letters in a list and print each letter three times.",

      hintTamil:
        "எழுத்துக்களை ஒரு List-ல் சேமித்து, ஒவ்வொரு எழுத்தையும் மூன்று முறை Print செய்யுங்கள்.",

      expectedOutput: `A A A
B B B
C C C`,

      expectedOutputTamil: `A A A
B B B
C C C`,

      solution: `letters = ["A", "B", "C"]

for i in letters:
    for j in range(3):
        print(i, end=" ")
    print()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a Python program to print the multiplication table from 1 to 3 using nested for loops.",

      questionTamil:
        "Nested For Loop பயன்படுத்தி 1 முதல் 3 வரை உள்ள பெருக்கல் வாய்ப்பாட்டை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use one loop for the table number and another loop for the multiplier.",

      hintTamil:
        "ஒரு Loop-ஐ Table Number-க்கும், மற்றொரு Loop-ஐ Multiplier-க்கும் பயன்படுத்துங்கள்.",

      expectedOutput: `1 x 1 = 1
1 x 2 = 2
1 x 3 = 3

2 x 1 = 2
2 x 2 = 4
2 x 3 = 6

3 x 1 = 3
3 x 2 = 6
3 x 3 = 9`,

      expectedOutputTamil: `1 x 1 = 1
1 x 2 = 2
1 x 3 = 3

2 x 1 = 2
2 x 2 = 4
2 x 3 = 6

3 x 1 = 3
3 x 2 = 6
3 x 3 = 9`,

      solution: `for i in range(1, 4):
    for j in range(1, 4):
        print(i, "x", j, "=", i * j)
    print()`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a Python program to print the following pattern using nested for loops.\n1 2 3 4\n1 2 3 4\n1 2 3 4\n1 2 3 4",

      questionTamil:
        "Nested For Loop பயன்படுத்தி கீழே கொடுக்கப்பட்டுள்ள Pattern-ஐ Print செய்யும் Python Program-ஐ எழுதுங்கள்.\n1 2 3 4\n1 2 3 4\n1 2 3 4\n1 2 3 4",

      hintEnglish:
        "Use two for loops. Print the inner loop variable.",

      hintTamil:
        "இரண்டு For Loops-ஐ பயன்படுத்தி Inner Loop Variable-ஐ Print செய்யுங்கள்.",

      expectedOutput: `1 2 3 4
1 2 3 4
1 2 3 4
1 2 3 4`,

      expectedOutputTamil: `1 2 3 4
1 2 3 4
1 2 3 4
1 2 3 4`,

      solution: `for i in range(4):
    for j in range(1, 5):
        print(j, end=" ")
    print()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a Python program to print the following pattern using nested for loops.\n*\n* *\n* * *\n* * * *",

      questionTamil:
        "Nested For Loop பயன்படுத்தி கீழே கொடுக்கப்பட்டுள்ள Pattern-ஐ Print செய்யும் Python Program-ஐ எழுதுங்கள்.\n*\n* *\n* * *\n* * * *",

      hintEnglish:
        "The inner loop should run from 1 to the outer loop variable.",

      hintTamil:
        "Inner Loop, Outer Loop Variable வரை இயங்க வேண்டும்.",

      expectedOutput: `*
* *
* * *
* * * *`,

      expectedOutputTamil: `*
* *
* * *
* * * *`,

      solution: `for i in range(1, 5):
    for j in range(i):
        print("*", end=" ")
    print()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a Python program to print a 5 × 5 star square pattern using nested for loops.",

      questionTamil:
        "Nested For Loop பயன்படுத்தி 5 × 5 Star Square Pattern-ஐ Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use one outer loop for rows and one inner loop for columns.",

      hintTamil:
        "Rows-க்கு ஒரு Outer Loop மற்றும் Columns-க்கு ஒரு Inner Loop-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `* * * * *
* * * * *
* * * * *
* * * * *
* * * * *`,

      expectedOutputTamil: `* * * * *
* * * * *
* * * * *
* * * * *
* * * * *`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a Python program to print the following number triangle using nested for loops.\n1\n1 2\n1 2 3\n1 2 3 4\n1 2 3 4 5",

      questionTamil:
        "Nested For Loop பயன்படுத்தி கீழே கொடுக்கப்பட்டுள்ள Number Triangle Pattern-ஐ Print செய்யும் Python Program-ஐ எழுதுங்கள்.\n1\n1 2\n1 2 3\n1 2 3 4\n1 2 3 4 5",

      hintEnglish:
        "The inner loop should print numbers from 1 to the outer loop variable.",

      hintTamil:
        "Inner Loop, 1 முதல் Outer Loop Variable வரை எண்களை Print செய்ய வேண்டும்.",

      expectedOutput: `1
1 2
1 2 3
1 2 3 4
1 2 3 4 5`,

      expectedOutputTamil: `1
1 2
1 2 3
1 2 3 4
1 2 3 4 5`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
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

      questionEnglish:
        "Write a Python program to print numbers from 1 to 10 using a for loop. Stop the loop when the number becomes 5 using the break statement.",

      questionTamil:
        "For Loop பயன்படுத்தி 1 முதல் 10 வரை உள்ள எண்களை Print செய்யுங்கள். எண் 5 ஆனவுடன் break Statement பயன்படுத்தி Loop-ஐ நிறுத்தும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use an if statement with break inside the for loop.",

      hintTamil:
        "For Loop-க்குள் if Statement மற்றும் break-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `1
2
3
4`,

      expectedOutputTamil: `1
2
3
4`,

      solution: `for i in range(1, 11):
    if i == 5:
        break
    print(i)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a Python program to print numbers from 10 to 1 using a while loop. Stop the loop when the number becomes 6 using the break statement.",

      questionTamil:
        "While Loop பயன்படுத்தி 10 முதல் 1 வரை உள்ள எண்களை Print செய்யுங்கள். எண் 6 ஆனவுடன் break Statement பயன்படுத்தி Loop-ஐ நிறுத்தும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a while loop with an if statement and break.",

      hintTamil:
        "While Loop-ல் if Statement மற்றும் break-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `10
9
8
7`,

      expectedOutputTamil: `10
9
8
7`,

      solution: `i = 10

while i >= 1:
    if i == 6:
        break
    print(i)
    i -= 1`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a Python program to print numbers from 1 to 20. Stop the loop when the number becomes 11 using the break statement.",

      questionTamil:
        "1 முதல் 20 வரை உள்ள எண்களை Print செய்யுங்கள். எண் 11 ஆனவுடன் break Statement பயன்படுத்தி Loop-ஐ நிறுத்தும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a for loop with an if statement and break.",

      hintTamil:
        "For Loop-ல் if Statement மற்றும் break-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `1
2
3
4
5
6
7
8
9
10`,

      expectedOutputTamil: `1
2
3
4
5
6
7
8
9
10`,

      solution: `for i in range(1, 21):
    if i == 11:
        break
    print(i)`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a Python program to print the multiplication table of 5 using a for loop. Stop the loop when the multiplier becomes 6 using the break statement.",

      questionTamil:
        "For Loop பயன்படுத்தி 5-ன் பெருக்கல் வாய்ப்பாட்டை Print செய்யுங்கள். Multiplier 6 ஆனவுடன் break Statement பயன்படுத்தி Loop-ஐ நிறுத்தும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a for loop with an if statement and break.",

      hintTamil:
        "For Loop-ல் if Statement மற்றும் break-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25`,

      expectedOutputTamil: `5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25`,

      solution: `for i in range(1, 11):
    if i == 6:
        break
    print("5 x", i, "=", 5 * i)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a Python program to print numbers from 1 to 10 using a while loop. Stop the loop when the number becomes 8 using the break statement.",

      questionTamil:
        "While Loop பயன்படுத்தி 1 முதல் 10 வரை உள்ள எண்களை Print செய்யுங்கள். எண் 8 ஆனவுடன் break Statement பயன்படுத்தி Loop-ஐ நிறுத்தும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a while loop with an if statement and break.",

      hintTamil:
        "While Loop-ல் if Statement மற்றும் break-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `1
2
3
4
5
6
7`,

      expectedOutputTamil: `1
2
3
4
5
6
7`,

      solution: `i = 1

while i <= 10:
    if i == 8:
        break
    print(i)
    i += 1`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a Python program to accept a number from the user. Print numbers from 1 to that number, but stop when the number becomes 5 using the break statement.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, 1 முதல் அந்த எண் வரை Print செய்யுங்கள். எண் 5 ஆனவுடன் break Statement பயன்படுத்தி Loop-ஐ நிறுத்தும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input(), int(), a for loop, and break.",

      hintTamil:
        "input(), int(), For Loop மற்றும் break Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 10
1
2
3
4`,

      expectedOutputTamil: `Enter a number: 10
1
2
3
4`,

      solution: `number = int(input("Enter a number: "))

for i in range(1, number + 1):
    if i == 5:
        break
    print(i)`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a Python program to print the multiplication table of a number entered by the user. Stop printing when the multiplier becomes 8 using the break statement.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, அதன் பெருக்கல் வாய்ப்பாட்டை Print செய்யுங்கள். Multiplier 8 ஆனவுடன் break Statement பயன்படுத்தி Loop-ஐ நிறுத்தும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input(), int(), a for loop, and break.",

      hintTamil:
        "input(), int(), For Loop மற்றும் break Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35`,

      expectedOutputTamil: `Enter a number: 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35`,

      solution: `number = int(input("Enter a number: "))

for i in range(1, 11):
    if i == 8:
        break
    print(number, "x", i, "=", number * i)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a Python program to accept numbers continuously from the user. Stop the loop when the user enters 0 using the break statement.",

      questionTamil:
        "பயனரிடமிருந்து தொடர்ந்து எண்களை Input ஆக பெறுங்கள். பயனர் 0 கொடுத்தவுடன் break Statement பயன்படுத்தி Loop-ஐ நிறுத்தும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a while loop with input() and break.",

      hintTamil:
        "While Loop, input() மற்றும் break Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 10
Enter a number: 25
Enter a number: 8
Enter a number: 0`,

      expectedOutputTamil: `Enter a number: 10
Enter a number: 25
Enter a number: 8
Enter a number: 0`,

      solution: `while True:
    number = int(input("Enter a number: "))

    if number == 0:
        break`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a Python program to print numbers from 1 to 100. Stop the loop when the number becomes 50 using the break statement.",

      questionTamil:
        "1 முதல் 100 வரை உள்ள எண்களை Print செய்யுங்கள். எண் 50 ஆனவுடன் break Statement பயன்படுத்தி Loop-ஐ நிறுத்தும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a for loop with an if statement and break.",

      hintTamil:
        "For Loop, if Statement மற்றும் break Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `1
2
3
...
48
49`,

      expectedOutputTamil: `1
2
3
...
48
49`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a Python program to continuously accept numbers from the user and stop the loop when the user enters a negative number using the break statement.",

      questionTamil:
        "பயனரிடமிருந்து தொடர்ந்து எண்களை Input ஆக பெறுங்கள். பயனர் Negative Number கொடுத்தவுடன் break Statement பயன்படுத்தி Loop-ஐ நிறுத்தும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a while loop with input() and break.",

      hintTamil:
        "While Loop, input() மற்றும் break Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 15
Enter a number: 28
Enter a number: 9
Enter a number: -1`,

      expectedOutputTamil: `Enter a number: 15
Enter a number: 28
Enter a number: 9
Enter a number: -1`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
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

      questionEnglish:
        "Write a Python program to print numbers from 1 to 5 using a for loop. Skip the number 3 using the continue statement.",

      questionTamil:
        "For Loop பயன்படுத்தி 1 முதல் 5 வரை உள்ள எண்களை Print செய்யுங்கள். 3 என்ற எண்ணை continue Statement பயன்படுத்தி Skip செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use an if statement with continue inside the for loop.",

      hintTamil:
        "For Loop-க்குள் if Statement மற்றும் continue-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `1
2
4
5`,

      expectedOutputTamil: `1
2
4
5`,

      solution: `for i in range(1, 6):
    if i == 3:
        continue
    print(i)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a Python program to print numbers from 1 to 10 using a while loop. Skip the number 6 using the continue statement.",

      questionTamil:
        "While Loop பயன்படுத்தி 1 முதல் 10 வரை உள்ள எண்களை Print செய்யுங்கள். 6 என்ற எண்ணை continue Statement பயன்படுத்தி Skip செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Increment the variable before using continue.",

      hintTamil:
        "continue பயன்படுத்துவதற்கு முன் Variable-ஐ Increment செய்யுங்கள்.",

      expectedOutput: `1
2
3
4
5
7
8
9
10`,

      expectedOutputTamil: `1
2
3
4
5
7
8
9
10`,

      solution: `i = 1

while i <= 10:
    if i == 6:
        i += 1
        continue

    print(i)
    i += 1`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a Python program to print numbers from 1 to 10. Skip all even numbers using the continue statement.",

      questionTamil:
        "1 முதல் 10 வரை உள்ள எண்களை Print செய்யுங்கள். அனைத்து Even எண்களையும் continue Statement பயன்படுத்தி Skip செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the modulus (%) operator with continue.",

      hintTamil:
        "Modulus (%) Operator மற்றும் continue Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `1
3
5
7
9`,

      expectedOutputTamil: `1
3
5
7
9`,

      solution: `for i in range(1, 11):
    if i % 2 == 0:
        continue
    print(i)`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a Python program to print numbers from 1 to 15. Skip the numbers that are divisible by 3 using the continue statement.",

      questionTamil:
        "1 முதல் 15 வரை உள்ள எண்களை Print செய்யுங்கள். 3-ஆல் வகுபடும் எண்களை continue Statement பயன்படுத்தி Skip செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the modulus (%) operator with continue.",

      hintTamil:
        "Modulus (%) Operator மற்றும் continue Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `1
2
4
5
7
8
10
11
13
14`,

      expectedOutputTamil: `1
2
4
5
7
8
10
11
13
14`,

      solution: `for i in range(1, 16):
    if i % 3 == 0:
        continue
    print(i)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a Python program to print numbers from 1 to 10. Skip the number 5 using the continue statement.",

      questionTamil:
        "1 முதல் 10 வரை உள்ள எண்களை Print செய்யுங்கள். 5 என்ற எண்ணை continue Statement பயன்படுத்தி Skip செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use an if statement with continue.",

      hintTamil:
        "if Statement மற்றும் continue Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `1
2
3
4
6
7
8
9
10`,

      expectedOutputTamil: `1
2
3
4
6
7
8
9
10`,

      solution: `for i in range(1, 11):
    if i == 5:
        continue
    print(i)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a Python program to accept a number from the user and print numbers from 1 to that number. Skip the number 4 using the continue statement.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, 1 முதல் அந்த எண் வரை Print செய்யுங்கள். 4 என்ற எண்ணை continue Statement பயன்படுத்தி Skip செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input(), int(), a for loop, and continue.",

      hintTamil:
        "input(), int(), For Loop மற்றும் continue Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 8
1
2
3
5
6
7
8`,

      expectedOutputTamil: `Enter a number: 8
1
2
3
5
6
7
8`,

      solution: `number = int(input("Enter a number: "))

for i in range(1, number + 1):
    if i == 4:
        continue
    print(i)`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a Python program to accept a number from the user and print numbers from 1 to that number. Skip all even numbers using the continue statement.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, 1 முதல் அந்த எண் வரை Print செய்யுங்கள். அனைத்து Even எண்களையும் continue Statement பயன்படுத்தி Skip செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the modulus (%) operator with continue.",

      hintTamil:
        "Modulus (%) Operator மற்றும் continue Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 10
1
3
5
7
9`,

      expectedOutputTamil: `Enter a number: 10
1
3
5
7
9`,

      solution: `number = int(input("Enter a number: "))

for i in range(1, number + 1):
    if i % 2 == 0:
        continue
    print(i)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a Python program to print the multiplication table of a number entered by the user from 1 to 10. Skip the multiplication when the multiplier is 5 using the continue statement.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, 1 முதல் 10 வரை அதன் பெருக்கல் வாய்ப்பாட்டை Print செய்யுங்கள். Multiplier 5 ஆக இருக்கும் போது continue Statement பயன்படுத்தி அந்த வரியை Skip செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a for loop with continue.",

      hintTamil:
        "For Loop மற்றும் continue Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 3
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 6 = 18
3 x 7 = 21
3 x 8 = 24
3 x 9 = 27
3 x 10 = 30`,

      expectedOutputTamil: `Enter a number: 3
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 6 = 18
3 x 7 = 21
3 x 8 = 24
3 x 9 = 27
3 x 10 = 30`,

      solution: `number = int(input("Enter a number: "))

for i in range(1, 11):
    if i == 5:
        continue
    print(number, "x", i, "=", number * i)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a Python program to print numbers from 1 to 20. Skip all numbers that are divisible by 4 using the continue statement.",

      questionTamil:
        "1 முதல் 20 வரை உள்ள எண்களை Print செய்யுங்கள். 4-ஆல் வகுபடும் அனைத்து எண்களையும் continue Statement பயன்படுத்தி Skip செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the modulus (%) operator with continue inside a loop.",

      hintTamil:
        "Loop-க்குள் Modulus (%) Operator மற்றும் continue Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `1
2
3
5
6
7
9
10
11
13
14
15
17
18
19`,

      expectedOutputTamil: `1
2
3
5
6
7
9
10
11
13
14
15
17
18
19`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a Python program to accept a number from the user and print numbers from 1 to that number. Skip all numbers that are multiples of 5 using the continue statement.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, 1 முதல் அந்த எண் வரை Print செய்யுங்கள். 5-ன் மடங்குகளான அனைத்து எண்களையும் continue Statement பயன்படுத்தி Skip செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the modulus (%) operator with continue.",

      hintTamil:
        "Modulus (%) Operator மற்றும் continue Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 20
1
2
3
4
6
7
8
9
11
12
13
14
16
17
18
19`,

      expectedOutputTamil: `Enter a number: 20
1
2
3
4
6
7
8
9
11
12
13
14
16
17
18
19`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },
  ],
},
{
  topicId: 17,
  title: "Lists",

  questions: [
    {
      id: 1,
      title: "Question 1",

      questionEnglish:
        "Write a Python program to create a list containing the numbers 10, 20, 30, 40, and 50. Print the list.",

      questionTamil:
        "10, 20, 30, 40 மற்றும் 50 ஆகிய எண்களைக் கொண்ட ஒரு List-ஐ உருவாக்கி அதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Store the values inside square brackets [].",

      hintTamil:
        "Values-ஐ Square Brackets []-க்குள் சேமியுங்கள்.",

      expectedOutput: `[10, 20, 30, 40, 50]`,

      expectedOutputTamil: `[10, 20, 30, 40, 50]`,

      solution: `numbers = [10, 20, 30, 40, 50]

print(numbers)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a Python program to create a list containing the names 'Deepak', 'Kathir', and 'Rahul'. Print the list.",

      questionTamil:
        "'Deepak', 'Kathir' மற்றும் 'Rahul' ஆகிய பெயர்களைக் கொண்ட ஒரு List-ஐ உருவாக்கி அதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Store the names inside a list.",

      hintTamil:
        "பெயர்களை ஒரு List-க்குள் சேமியுங்கள்.",

      expectedOutput: `['Deepak', 'Kathir', 'Rahul']`,

      expectedOutputTamil: `['Deepak', 'Kathir', 'Rahul']`,

      solution: `students = ["Deepak", "Kathir", "Rahul"]

print(students)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a Python program to create a list of programming languages containing 'Python', 'Java', and 'C++'. Print the list.",

      questionTamil:
        "'Python', 'Java' மற்றும் 'C++' ஆகிய Programming Languages-ஐ கொண்ட ஒரு List-ஐ உருவாக்கி அதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create a list of strings and print it.",

      hintTamil:
        "String Values-ஐ கொண்டு ஒரு List உருவாக்கி Print செய்யுங்கள்.",

      expectedOutput: `['Python', 'Java', 'C++']`,

      expectedOutputTamil: `['Python', 'Java', 'C++']`,

      solution: `languages = ["Python", "Java", "C++"]

print(languages)`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a Python program to create a list containing the numbers 5, 10, 15, 20, and 25. Print the first element of the list.",

      questionTamil:
        "5, 10, 15, 20 மற்றும் 25 ஆகிய எண்களைக் கொண்ட ஒரு List-ஐ உருவாக்கி, அதன் முதல் Element-ஐ Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Access the first element using index 0.",

      hintTamil:
        "முதல் Element-ஐ Index 0 பயன்படுத்தி Access செய்யுங்கள்.",

      expectedOutput: `5`,

      expectedOutputTamil: `5`,

      solution: `numbers = [5, 10, 15, 20, 25]

print(numbers[0])`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a Python program to create a list of fruits containing 'Apple', 'Banana', 'Orange', and 'Mango'. Print the last element of the list.",

      questionTamil:
        "'Apple', 'Banana', 'Orange' மற்றும் 'Mango' ஆகியவற்றைக் கொண்ட ஒரு List-ஐ உருவாக்கி, அதன் கடைசி Element-ஐ Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use index -1 to access the last element.",

      hintTamil:
        "கடைசி Element-ஐ Access செய்ய Index -1-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Mango`,

      expectedOutputTamil: `Mango`,

      solution: `fruits = ["Apple", "Banana", "Orange", "Mango"]

print(fruits[-1])`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a Python program to accept five numbers from the user, store them in a list, and print the complete list.",

      questionTamil:
        "பயனரிடமிருந்து ஐந்து எண்களை Input ஆக பெற்று, அவற்றை ஒரு List-ல் சேமித்து முழு List-ஐ Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input(), int(), and append() to add elements to the list.",

      hintTamil:
        "input(), int() மற்றும் append() Method-ஐ பயன்படுத்தி List-ல் Elements-ஐ சேருங்கள்.",

      expectedOutput: `Enter number 1: 10
Enter number 2: 20
Enter number 3: 30
Enter number 4: 40
Enter number 5: 50
[10, 20, 30, 40, 50]`,

      expectedOutputTamil: `Enter number 1: 10
Enter number 2: 20
Enter number 3: 30
Enter number 4: 40
Enter number 5: 50
[10, 20, 30, 40, 50]`,

      solution: `numbers = []

for i in range(5):
    number = int(input("Enter number " + str(i + 1) + ": "))
    numbers.append(number)

print(numbers)`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a Python program to accept five student names from the user, store them in a list, and print all the names.",

      questionTamil:
        "பயனரிடமிருந்து ஐந்து மாணவர்களின் பெயர்களை Input ஆக பெற்று, அவற்றை ஒரு List-ல் சேமித்து அனைத்து பெயர்களையும் Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input() and append() to store the names in a list.",

      hintTamil:
        "input() மற்றும் append() Method-ஐ பயன்படுத்தி பெயர்களை List-ல் சேமியுங்கள்.",

      expectedOutput: `Enter student 1: Deepak
Enter student 2: Kathir
Enter student 3: Rahul
Enter student 4: Kavin
Enter student 5: Arun
['Deepak', 'Kathir', 'Rahul', 'Kavin', 'Arun']`,

      expectedOutputTamil: `Enter student 1: Deepak
Enter student 2: Kathir
Enter student 3: Rahul
Enter student 4: Kavin
Enter student 5: Arun
['Deepak', 'Kathir', 'Rahul', 'Kavin', 'Arun']`,

      solution: `students = []

for i in range(5):
    name = input("Enter student " + str(i + 1) + ": ")
    students.append(name)

print(students)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a Python program to create a list containing five numbers and print each element using a for loop.",

      questionTamil:
        "ஐந்து எண்களைக் கொண்ட ஒரு List-ஐ உருவாக்கி, For Loop பயன்படுத்தி ஒவ்வொரு Element-ஐயும் Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a for loop to iterate through the list.",

      hintTamil:
        "List-ஐ Traverse செய்ய For Loop-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `10
20
30
40
50`,

      expectedOutputTamil: `10
20
30
40
50`,

      solution: `numbers = [10, 20, 30, 40, 50]

for number in numbers:
    print(number)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a Python program to accept five numbers from the user, store them in a list, and print the largest number.",

      questionTamil:
        "பயனரிடமிருந்து ஐந்து எண்களை Input ஆக பெற்று, அவற்றை ஒரு List-ல் சேமித்து, அதில் உள்ள மிகப்பெரிய எண்ணை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Store the numbers in a list and use the max() function.",

      hintTamil:
        "எண்களை List-ல் சேமித்து max() Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter number 1: 12
Enter number 2: 45
Enter number 3: 8
Enter number 4: 32
Enter number 5: 25
45`,

      expectedOutputTamil: `Enter number 1: 12
Enter number 2: 45
Enter number 3: 8
Enter number 4: 32
Enter number 5: 25
45`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a Python program to accept five student names from the user, store them in a list, and print the first and last names.",

      questionTamil:
        "பயனரிடமிருந்து ஐந்து மாணவர்களின் பெயர்களை Input ஆக பெற்று, அவற்றை ஒரு List-ல் சேமித்து, முதல் மற்றும் கடைசி பெயர்களை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Store the names in a list and use index 0 and -1.",

      hintTamil:
        "பெயர்களை List-ல் சேமித்து Index 0 மற்றும் -1-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter student 1: Deepak
Enter student 2: Kathir
Enter student 3: Rahul
Enter student 4: Kavin
Enter student 5: Arun
Deepak
Arun`,

      expectedOutputTamil: `Enter student 1: Deepak
Enter student 2: Kathir
Enter student 3: Rahul
Enter student 4: Kavin
Enter student 5: Arun
Deepak
Arun`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },
  ],
},
{
  topicId: 18,
  title: "Tuples",

  questions: [
    {
      id: 1,
      title: "Question 1",

      questionEnglish:
        "Write a Python program to create a tuple containing the numbers 10, 20, 30, 40, and 50. Print the tuple.",

      questionTamil:
        "10, 20, 30, 40 மற்றும் 50 ஆகிய எண்களைக் கொண்ட ஒரு Tuple-ஐ உருவாக்கி அதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Store the values inside parentheses ().",

      hintTamil:
        "Values-ஐ Parentheses ()-க்குள் சேமியுங்கள்.",

      expectedOutput: `(10, 20, 30, 40, 50)`,

      expectedOutputTamil: `(10, 20, 30, 40, 50)`,

      solution: `numbers = (10, 20, 30, 40, 50)

print(numbers)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a Python program to create a tuple containing the names 'Deepak', 'Kathir', and 'Rahul'. Print the tuple.",

      questionTamil:
        "'Deepak', 'Kathir' மற்றும் 'Rahul' ஆகிய பெயர்களைக் கொண்ட ஒரு Tuple-ஐ உருவாக்கி அதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Store the names inside parentheses ().",

      hintTamil:
        "பெயர்களை Parentheses ()-க்குள் சேமியுங்கள்.",

      expectedOutput: `('Deepak', 'Kathir', 'Rahul')`,

      expectedOutputTamil: `('Deepak', 'Kathir', 'Rahul')`,

      solution: `students = ("Deepak", "Kathir", "Rahul")

print(students)`,

      challenge: false,
      locked: false,
     completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a Python program to create a tuple containing 'Python', 'Java', and 'C++'. Print the tuple.",

      questionTamil:
        "'Python', 'Java' மற்றும் 'C++' ஆகியவற்றைக் கொண்ட ஒரு Tuple-ஐ உருவாக்கி அதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create a tuple of strings and print it.",

      hintTamil:
        "String Values-ஐ கொண்டு ஒரு Tuple உருவாக்கி Print செய்யுங்கள்.",

      expectedOutput: `('Python', 'Java', 'C++')`,

      expectedOutputTamil: `('Python', 'Java', 'C++')`,

      solution: `languages = ("Python", "Java", "C++")

print(languages)`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a Python program to create a tuple containing the numbers 5, 10, 15, 20, and 25. Print the first element of the tuple.",

      questionTamil:
        "5, 10, 15, 20 மற்றும் 25 ஆகிய எண்களைக் கொண்ட ஒரு Tuple-ஐ உருவாக்கி, அதன் முதல் Element-ஐ Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Access the first element using index 0.",

      hintTamil:
        "முதல் Element-ஐ Index 0 பயன்படுத்தி Access செய்யுங்கள்.",

      expectedOutput: `5`,

      expectedOutputTamil: `5`,

      solution: `numbers = (5, 10, 15, 20, 25)

print(numbers[0])`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a Python program to create a tuple containing 'Apple', 'Banana', 'Orange', and 'Mango'. Print the last element of the tuple.",

      questionTamil:
        "'Apple', 'Banana', 'Orange' மற்றும் 'Mango' ஆகியவற்றைக் கொண்ட ஒரு Tuple-ஐ உருவாக்கி, அதன் கடைசி Element-ஐ Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use index -1 to access the last element.",

      hintTamil:
        "கடைசி Element-ஐ Access செய்ய Index -1-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Mango`,

      expectedOutputTamil: `Mango`,

      solution: `fruits = ("Apple", "Banana", "Orange", "Mango")

print(fruits[-1])`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a Python program to create a tuple containing five student names and print each name using a for loop.",

      questionTamil:
        "ஐந்து மாணவர்களின் பெயர்களைக் கொண்ட ஒரு Tuple-ஐ உருவாக்கி, For Loop பயன்படுத்தி ஒவ்வொரு பெயரையும் Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create a tuple and iterate through it using a for loop.",

      hintTamil:
        "ஒரு Tuple உருவாக்கி, அதை For Loop பயன்படுத்தி Traverse செய்யுங்கள்.",

      expectedOutput: `Deepak
Kathir
Rahul
Kavin
Arun`,

      expectedOutputTamil: `Deepak
Kathir
Rahul
Kavin
Arun`,

      solution: `students = ("Deepak", "Kathir", "Rahul", "Kavin", "Arun")

for student in students:
    print(student)`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a Python program to create a tuple containing five numbers and print each element using a for loop.",

      questionTamil:
        "ஐந்து எண்களைக் கொண்ட ஒரு Tuple-ஐ உருவாக்கி, For Loop பயன்படுத்தி ஒவ்வொரு Element-ஐயும் Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create a tuple and iterate through it using a for loop.",

      hintTamil:
        "ஒரு Tuple உருவாக்கி, அதை For Loop பயன்படுத்தி Traverse செய்யுங்கள்.",

      expectedOutput: `10
20
30
40
50`,

      expectedOutputTamil: `10
20
30
40
50`,

      solution: `numbers = (10, 20, 30, 40, 50)

for number in numbers:
    print(number)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a Python program to create a tuple containing five fruits and print the total number of elements in the tuple.",

      questionTamil:
        "'Apple', 'Banana', 'Orange', 'Mango', 'Grapes' ஆகியவற்றைக் கொண்ட ஒரு Tuple-ஐ உருவாக்கி, அதில் உள்ள மொத்த Elements எண்ணிக்கையை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the len() function.",

      hintTamil:
        "len() Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `5`,

      expectedOutputTamil: `5`,

      solution: `fruits = ("Apple", "Banana", "Orange", "Mango", "Grapes")

print(len(fruits))`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a Python program to create a tuple containing five student names and print the first and last names.",

      questionTamil:
        "ஐந்து மாணவர்களின் பெயர்களைக் கொண்ட ஒரு Tuple-ஐ உருவாக்கி, முதல் மற்றும் கடைசி பெயர்களை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use index 0 and -1 to access the elements.",

      hintTamil:
        "Index 0 மற்றும் -1-ஐ பயன்படுத்தி Elements-ஐ Access செய்யுங்கள்.",

      expectedOutput: `Deepak
Arun`,

      expectedOutputTamil: `Deepak
Arun`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a Python program to create a tuple containing five numbers and print the largest and smallest numbers.",

      questionTamil:
        "ஐந்து எண்களைக் கொண்ட ஒரு Tuple-ஐ உருவாக்கி, அதில் உள்ள மிகப்பெரிய மற்றும் மிகச்சிறிய எண்ணை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the max() and min() functions.",

      hintTamil:
        "max() மற்றும் min() Functions-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `50
10`,

      expectedOutputTamil: `50
10`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },
  ],
},
{
  topicId: 19,
  title: "Sets",

  questions: [
    {
      id: 1,
      title: "Question 1",

      questionEnglish:
        "Write a Python program to create a set containing the numbers 10, 20, 30, 40, and 50. Print the set.",

      questionTamil:
        "10, 20, 30, 40 மற்றும் 50 ஆகிய எண்களைக் கொண்ட ஒரு Set-ஐ உருவாக்கி அதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Store the values inside curly braces {}.",

      hintTamil:
        "Values-ஐ Curly Braces {}-க்குள் சேமியுங்கள்.",

      expectedOutput: `{10, 20, 30, 40, 50}`,

      expectedOutputTamil: `{10, 20, 30, 40, 50}`,

      solution: `numbers = {10, 20, 30, 40, 50}

print(numbers)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a Python program to create a set containing the names 'Deepak', 'Kathir', and 'Rahul'. Print the set.",

      questionTamil:
        "'Deepak', 'Kathir' மற்றும் 'Rahul' ஆகிய பெயர்களைக் கொண்ட ஒரு Set-ஐ உருவாக்கி அதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Store the names inside a set.",

      hintTamil:
        "பெயர்களை ஒரு Set-க்குள் சேமியுங்கள்.",

      expectedOutput: `{'Deepak', 'Kathir', 'Rahul'}`,

      expectedOutputTamil: `{'Deepak', 'Kathir', 'Rahul'}`,

      solution: `students = {"Deepak", "Kathir", "Rahul"}

print(students)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a Python program to create a set containing duplicate values 10, 20, 20, 30, 30, 40. Print the set.",

      questionTamil:
        "10, 20, 20, 30, 30, 40 என்ற Duplicate Values கொண்ட ஒரு Set-ஐ உருவாக்கி அதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Observe how sets automatically remove duplicate values.",

      hintTamil:
        "Set-ல் Duplicate Values தானாக நீக்கப்படுவதை கவனியுங்கள்.",

      expectedOutput: `{10, 20, 30, 40}`,

      expectedOutputTamil: `{10, 20, 30, 40}`,

      solution: `numbers = {10, 20, 20, 30, 30, 40}

print(numbers)`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a Python program to create a set containing the numbers 5, 10, 15, 20, and 25. Print the total number of elements in the set.",

      questionTamil:
        "5, 10, 15, 20 மற்றும் 25 ஆகிய எண்களைக் கொண்ட ஒரு Set-ஐ உருவாக்கி, அதில் உள்ள மொத்த Elements எண்ணிக்கையை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the len() function.",

      hintTamil:
        "len() Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `5`,

      expectedOutputTamil: `5`,

      solution: `numbers = {5, 10, 15, 20, 25}

print(len(numbers))`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a Python program to create a set containing 'Apple', 'Banana', 'Orange', and 'Mango'. Print each element using a for loop.",

      questionTamil:
        "'Apple', 'Banana', 'Orange' மற்றும் 'Mango' ஆகியவற்றைக் கொண்ட ஒரு Set-ஐ உருவாக்கி, For Loop பயன்படுத்தி ஒவ்வொரு Element-ஐயும் Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a for loop to iterate through the set.",

      hintTamil:
        "Set-ஐ Traverse செய்ய For Loop-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Apple
Banana
Orange
Mango`,

      expectedOutputTamil: `Apple
Banana
Orange
Mango`,

      solution: `fruits = {"Apple", "Banana", "Orange", "Mango"}

for fruit in fruits:
    print(fruit)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a Python program to create a set containing the numbers 10, 20, 30. Add the number 40 to the set and print the updated set.",

      questionTamil:
        "10, 20 மற்றும் 30 ஆகிய எண்களைக் கொண்ட ஒரு Set-ஐ உருவாக்கி, அதில் 40 என்ற எண்ணை Add செய்து Updated Set-ஐ Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the add() method.",

      hintTamil:
        "add() Method-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `{10, 20, 30, 40}`,

      expectedOutputTamil: `{10, 20, 30, 40}`,

      solution: `numbers = {10, 20, 30}

numbers.add(40)

print(numbers)`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a Python program to create a set containing five student names and print each name using a for loop.",

      questionTamil:
        "ஐந்து மாணவர்களின் பெயர்களைக் கொண்ட ஒரு Set-ஐ உருவாக்கி, For Loop பயன்படுத்தி ஒவ்வொரு பெயரையும் Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a for loop to iterate through the set.",

      hintTamil:
        "Set-ஐ Traverse செய்ய For Loop-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Deepak
Kathir
Rahul
Kavin
Arun`,

      expectedOutputTamil: `Deepak
Kathir
Rahul
Kavin
Arun`,

      solution: `students = {"Deepak", "Kathir", "Rahul", "Kavin", "Arun"}

for student in students:
    print(student)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a Python program to create a set containing the numbers 10, 20, 30, 40, and 50. Remove the number 30 from the set and print the updated set.",

      questionTamil:
        "10, 20, 30, 40 மற்றும் 50 ஆகிய எண்களைக் கொண்ட ஒரு Set-ஐ உருவாக்கி, அதிலிருந்து 30 என்ற எண்ணை Remove செய்து Updated Set-ஐ Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the remove() method.",

      hintTamil:
        "remove() Method-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `{10, 20, 40, 50}`,

      expectedOutputTamil: `{10, 20, 40, 50}`,

      solution: `numbers = {10, 20, 30, 40, 50}

numbers.remove(30)

print(numbers)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a Python program to create a set containing five numbers and print the largest number in the set.",

      questionTamil:
        "ஐந்து எண்களைக் கொண்ட ஒரு Set-ஐ உருவாக்கி, அதில் உள்ள மிகப்பெரிய எண்ணை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the max() function.",

      hintTamil:
        "max() Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `50`,

      expectedOutputTamil: `50`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a Python program to create two sets containing numbers. Find and print the common elements between the two sets.",

      questionTamil:
        "இரண்டு Set-களை உருவாக்கி, அவற்றில் பொதுவாக உள்ள Elements-ஐ (Common Elements) Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the intersection() method or '&' operator.",

      hintTamil:
        "intersection() Method அல்லது '&' Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `{30, 40}`,

      expectedOutputTamil: `{30, 40}`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },
  ],
},
{
  topicId: 20,
  title: "Dictionaries",

  questions: [
    {
      id: 1,
      title: "Question 1",

      questionEnglish:
        "Write a Python program to create a dictionary containing a student's name, age, and department. Print the dictionary.",

      questionTamil:
        "மாணவரின் Name, Age மற்றும் Department ஆகியவற்றைக் கொண்ட ஒரு Dictionary-ஐ உருவாக்கி அதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use key-value pairs inside curly braces {}.",

      hintTamil:
        "Curly Braces {}-க்குள் Key-Value Pairs-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `{'name': 'Deepak', 'age': 20, 'department': 'Computer Science'}`,

      expectedOutputTamil: `{'name': 'Deepak', 'age': 20, 'department': 'Computer Science'}`,

      solution: `student = {
    "name": "Deepak",
    "age": 20,
    "department": "Computer Science"
}

print(student)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a Python program to create a dictionary containing a book's title, author, and price. Print the dictionary.",

      questionTamil:
        "ஒரு புத்தகத்தின் Title, Author மற்றும் Price ஆகியவற்றைக் கொண்ட ஒரு Dictionary-ஐ உருவாக்கி அதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Store the details as key-value pairs.",

      hintTamil:
        "விவரங்களை Key-Value Pairs ஆக சேமியுங்கள்.",

      expectedOutput: `{'title': 'Python Basics', 'author': 'Kathir', 'price': 450}`,

      expectedOutputTamil: `{'title': 'Python Basics', 'author': 'Kathir', 'price': 450}`,

      solution: `book = {
    "title": "Python Basics",
    "author": "Kathir",
    "price": 450
}

print(book)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a Python program to create a dictionary containing your favorite programming language and version. Print the dictionary.",

      questionTamil:
        "உங்களுக்கு பிடித்த Programming Language மற்றும் அதன் Version ஆகியவற்றைக் கொண்ட ஒரு Dictionary-ஐ உருவாக்கி அதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create a dictionary using key-value pairs.",

      hintTamil:
        "Key-Value Pairs பயன்படுத்தி ஒரு Dictionary உருவாக்குங்கள்.",

      expectedOutput: `{'language': 'Python', 'version': '3.13'}`,

      expectedOutputTamil: `{'language': 'Python', 'version': '3.13'}`,

      solution: `programming = {
    "language": "Python",
    "version": "3.13"
}

print(programming)`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a Python program to create a dictionary containing a student's name, age, and department. Print only the student's name.",

      questionTamil:
        "மாணவரின் Name, Age மற்றும் Department ஆகியவற்றைக் கொண்ட ஒரு Dictionary-ஐ உருவாக்கி, மாணவரின் பெயரை மட்டும் Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Access the value using its key.",

      hintTamil:
        "Key-ஐ பயன்படுத்தி Value-ஐ Access செய்யுங்கள்.",

      expectedOutput: `Deepak`,

      expectedOutputTamil: `Deepak`,

      solution: `student = {
    "name": "Deepak",
    "age": 20,
    "department": "Computer Science"
}

print(student["name"])`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a Python program to create a dictionary containing a book's title, author, and price. Print only the price.",

      questionTamil:
        "ஒரு புத்தகத்தின் Title, Author மற்றும் Price ஆகியவற்றைக் கொண்ட ஒரு Dictionary-ஐ உருவாக்கி, Price-ஐ மட்டும் Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the key to access the price.",

      hintTamil:
        "Price-ஐ Access செய்ய அதற்கான Key-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `450`,

      expectedOutputTamil: `450`,

      solution: `book = {
    "title": "Python Basics",
    "author": "Kathir",
    "price": 450
}

print(book["price"])`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a Python program to create a dictionary containing a student's name and age. Add a new key 'college' with the value 'Don Bosco College' and print the updated dictionary.",

      questionTamil:
        "மாணவரின் Name மற்றும் Age ஆகியவற்றைக் கொண்ட ஒரு Dictionary-ஐ உருவாக்கி, அதில் 'college' என்ற புதிய Key-ஐ 'Don Bosco College' என்ற Value-உடன் சேர்த்து Updated Dictionary-ஐ Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Add a new key using dictionary[key] = value.",

      hintTamil:
        "dictionary[key] = value பயன்படுத்தி புதிய Key-ஐ சேருங்கள்.",

      expectedOutput: `{'name': 'Deepak', 'age': 20, 'college': 'Don Bosco College'}`,

      expectedOutputTamil: `{'name': 'Deepak', 'age': 20, 'college': 'Don Bosco College'}`,

      solution: `student = {
    "name": "Deepak",
    "age": 20
}

student["college"] = "Don Bosco College"

print(student)`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a Python program to create a dictionary containing a student's name, age, and department. Print all the values using a for loop.",

      questionTamil:
        "மாணவரின் Name, Age மற்றும் Department ஆகியவற்றைக் கொண்ட ஒரு Dictionary-ஐ உருவாக்கி, For Loop பயன்படுத்தி அனைத்து Values-ஐ Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the values() method with a for loop.",

      hintTamil:
        "values() Method மற்றும் For Loop-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Deepak
20
Computer Science`,

      expectedOutputTamil: `Deepak
20
Computer Science`,

      solution: `student = {
    "name": "Deepak",
    "age": 20,
    "department": "Computer Science"
}

for value in student.values():
    print(value)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a Python program to create a dictionary containing a student's name and age. Update the age to 21 and print the updated dictionary.",

      questionTamil:
        "மாணவரின் Name மற்றும் Age ஆகியவற்றைக் கொண்ட ஒரு Dictionary-ஐ உருவாக்கி, Age-ஐ 21 ஆக Update செய்து Updated Dictionary-ஐ Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Update the value using dictionary[key] = value.",

      hintTamil:
        "dictionary[key] = value பயன்படுத்தி Value-ஐ Update செய்யுங்கள்.",

      expectedOutput: `{'name': 'Deepak', 'age': 21}`,

      expectedOutputTamil: `{'name': 'Deepak', 'age': 21}`,

      solution: `student = {
    "name": "Deepak",
    "age": 20
}

student["age"] = 21

print(student)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a Python program to create a dictionary containing five student names as keys and their marks as values. Print the student who scored the highest mark.",

      questionTamil:
        "ஐந்து மாணவர்களின் பெயர்களை Keys ஆகவும், அவர்களின் மதிப்பெண்களை Values ஆகவும் கொண்ட ஒரு Dictionary-ஐ உருவாக்கி, அதிக மதிப்பெண் பெற்ற மாணவரின் பெயரை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the max() function with the dictionary.",

      hintTamil:
        "Dictionary-உடன் max() Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Kathir`,

      expectedOutputTamil: `Kathir`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a Python program to create two dictionaries containing student information. Print the name and department from both dictionaries.",

      questionTamil:
        "மாணவர்களின் விவரங்களைக் கொண்ட இரண்டு Dictionary-களை உருவாக்கி, இரண்டு Dictionary-களிலிருந்தும் Name மற்றும் Department-ஐ Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create two dictionaries and access their values using keys.",

      hintTamil:
        "இரண்டு Dictionary-களை உருவாக்கி, Keys பயன்படுத்தி Values-ஐ Access செய்யுங்கள்.",

      expectedOutput: `Deepak
Computer Science
Kathir
Information Technology`,

      expectedOutputTamil: `Deepak
Computer Science
Kathir
Information Technology`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },
  ],
},
{
  topicId: 21,
  title: "Functions",

  questions: [
    {
      id: 1,
      title: "Question 1",

      questionEnglish:
        "Write a Python program to create a function named greet() that prints 'Hello Python'. Call the function.",

      questionTamil:
        "'greet()' என்ற Function-ஐ உருவாக்கி, அது 'Hello Python' என்பதை Print செய்ய வேண்டும். அந்த Function-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the def keyword and call the function.",

      hintTamil:
        "def Keyword பயன்படுத்தி Function-ஐ உருவாக்கி Call செய்யுங்கள்.",

      expectedOutput: `Hello Python`,

      expectedOutputTamil: `Hello Python`,

      solution: `def greet():
    print("Hello Python")

greet()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a Python program to create a function named displayName() that prints 'Deepak'. Call the function.",

      questionTamil:
        "'displayName()' என்ற Function-ஐ உருவாக்கி, அது 'Deepak' என்பதை Print செய்ய வேண்டும். அந்த Function-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create a function using def and call it.",

      hintTamil:
        "def பயன்படுத்தி Function-ஐ உருவாக்கி Call செய்யுங்கள்.",

      expectedOutput: `Deepak`,

      expectedOutputTamil: `Deepak`,

      solution: `def displayName():
    print("Deepak")

displayName()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a Python program to create a function named showCollege() that prints 'Don Bosco College'. Call the function.",

      questionTamil:
        "'showCollege()' என்ற Function-ஐ உருவாக்கி, அது 'Don Bosco College' என்பதை Print செய்ய வேண்டும். அந்த Function-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the def keyword and call the function.",

      hintTamil:
        "def Keyword பயன்படுத்தி Function-ஐ உருவாக்கி Call செய்யுங்கள்.",

      expectedOutput: `Don Bosco College`,

      expectedOutputTamil: `Don Bosco College`,

      solution: `def showCollege():
    print("Don Bosco College")

showCollege()`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a Python program to create a function named add() that prints the sum of 10 and 20. Call the function.",

      questionTamil:
        "'add()' என்ற Function-ஐ உருவாக்கி, 10 மற்றும் 20 ஆகிய எண்களின் கூட்டுத்தொகையை Print செய்ய வேண்டும். அந்த Function-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create a function using def and perform the addition inside it.",

      hintTamil:
        "def பயன்படுத்தி Function-ஐ உருவாக்கி, அதன் உள்ளே கூட்டலை செய்யுங்கள்.",

      expectedOutput: `30`,

      expectedOutputTamil: `30`,

      solution: `def add():
    print(10 + 20)

add()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a Python program to create a function named evenOdd() that checks whether the number 15 is even or odd and prints the result. Call the function.",

      questionTamil:
        "'evenOdd()' என்ற Function-ஐ உருவாக்கி, 15 என்பது Even அல்லது Odd என்பதை சரிபார்த்து Print செய்ய வேண்டும். அந்த Function-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use an if...else statement inside the function.",

      hintTamil:
        "Function-க்குள் if...else Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Odd`,

      expectedOutputTamil: `Odd`,

      solution: `def evenOdd():
    if 15 % 2 == 0:
        print("Even")
    else:
        print("Odd")

evenOdd()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a Python program to create a function named welcome() that accepts a name as input and prints 'Welcome <name>'. Call the function.",

      questionTamil:
        "'welcome()' என்ற Function-ஐ உருவாக்கி, பயனரிடமிருந்து பெயரை Input ஆக பெற்று 'Welcome <name>' என்பதை Print செய்ய வேண்டும். அந்த Function-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input() inside the function and call the function.",

      hintTamil:
        "Function-க்குள் input() பயன்படுத்தி, Function-ஐ Call செய்யுங்கள்.",

      expectedOutput: `Enter your name: Deepak
Welcome Deepak`,

      expectedOutputTamil: `Enter your name: Deepak
Welcome Deepak`,

      solution: `def welcome():
    name = input("Enter your name: ")
    print("Welcome", name)

welcome()`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a Python program to create a function named square() that accepts a number as input and prints its square. Call the function.",

      questionTamil:
        "'square()' என்ற Function-ஐ உருவாக்கி, பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று அதன் Square-ஐ Print செய்ய வேண்டும். அந்த Function-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input(), int(), and multiply the number by itself.",

      hintTamil:
        "input(), int() பயன்படுத்தி, எண்ணை அதே எண்ணால் பெருக்குங்கள்.",

      expectedOutput: `Enter a number: 5
25`,

      expectedOutputTamil: `Enter a number: 5
25`,

      solution: `def square():
    number = int(input("Enter a number: "))
    print(number * number)

square()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a Python program to create a function named multiplicationTable() that accepts a number as input and prints its multiplication table from 1 to 10. Call the function.",

      questionTamil:
        "'multiplicationTable()' என்ற Function-ஐ உருவாக்கி, பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று அதன் பெருக்கல் வாய்ப்பாட்டை (1 முதல் 10 வரை) Print செய்ய வேண்டும். அந்த Function-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a for loop inside the function.",

      hintTamil:
        "Function-க்குள் For Loop-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50`,

      expectedOutputTamil: `Enter a number: 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50`,

      solution: `def multiplicationTable():
    number = int(input("Enter a number: "))

    for i in range(1, 11):
        print(number, "x", i, "=", number * i)

multiplicationTable()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a Python program to create a function named largest() that accepts three numbers as input and prints the largest number. Call the function.",

      questionTamil:
        "'largest()' என்ற Function-ஐ உருவாக்கி, பயனரிடமிருந்து மூன்று எண்களை Input ஆக பெற்று, அவற்றில் மிகப்பெரிய எண்ணை Print செய்ய வேண்டும். அந்த Function-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input(), int(), and the max() function.",

      hintTamil:
        "input(), int() மற்றும் max() Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter first number: 10
Enter second number: 35
Enter third number: 25
35`,

      expectedOutputTamil: `Enter first number: 10
Enter second number: 35
Enter third number: 25
35`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a Python program to create a function named studentDetails() that accepts a student's name, age, and department as input and prints all the details. Call the function.",

      questionTamil:
        "'studentDetails()' என்ற Function-ஐ உருவாக்கி, பயனரிடமிருந்து மாணவரின் பெயர், வயது மற்றும் Department-ஐ Input ஆக பெற்று, அனைத்து விவரங்களையும் Print செய்ய வேண்டும். அந்த Function-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use multiple input() statements inside the function.",

      hintTamil:
        "Function-க்குள் பல input() Statements-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter name: Deepak
Enter age: 20
Enter department: Computer Science
Name: Deepak
Age: 20
Department: Computer Science`,

      expectedOutputTamil: `Enter name: Deepak
Enter age: 20
Enter department: Computer Science
Name: Deepak
Age: 20
Department: Computer Science`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },
  ],
},
{
  topicId: 22,
  title: "Lambda Functions",

  questions: [
    {
      id: 1,
      title: "Question 1",

      questionEnglish:
        "Write a Python program to create a lambda function that adds two numbers (10 and 20) and prints the result.",

      questionTamil:
        "10 மற்றும் 20 ஆகிய இரண்டு எண்களை கூட்டும் Lambda Function-ஐ உருவாக்கி அதன் முடிவை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use lambda with two parameters.",

      hintTamil:
        "இரண்டு Parameters உடன் lambda-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `30`,

      expectedOutputTamil: `30`,

      solution: `add = lambda a, b: a + b

print(add(10, 20))`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a Python program to create a lambda function that finds the square of a number. Print the square of 5.",

      questionTamil:
        "ஒரு எண்ணின் Square-ஐ கண்டறியும் Lambda Function-ஐ உருவாக்கி, 5-ன் Square-ஐ Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use one parameter in the lambda function.",

      hintTamil:
        "Lambda Function-ல் ஒரு Parameter-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `25`,

      expectedOutputTamil: `25`,

      solution: `square = lambda x: x * x

print(square(5))`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a Python program to create a lambda function that checks whether a number is even. Print the result for 8.",

      questionTamil:
        "ஒரு எண் Even ஆக உள்ளதா என்பதை சரிபார்க்கும் Lambda Function-ஐ உருவாக்கி, 8-க்கான முடிவை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the modulus (%) operator inside the lambda function.",

      hintTamil:
        "Lambda Function-க்குள் Modulus (%) Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `True`,

      expectedOutputTamil: `True`,

      solution: `isEven = lambda x: x % 2 == 0

print(isEven(8))`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a Python program to create a lambda function that finds the larger of two numbers (25 and 40) and prints the result.",

      questionTamil:
        "25 மற்றும் 40 ஆகிய இரண்டு எண்களில் பெரிய எண்ணை கண்டறியும் Lambda Function-ஐ உருவாக்கி அதன் முடிவை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a conditional expression inside the lambda function.",

      hintTamil:
        "Lambda Function-க்குள் Conditional Expression-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `40`,

      expectedOutputTamil: `40`,

      solution: `largest = lambda a, b: a if a > b else b

print(largest(25, 40))`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a Python program to create a lambda function that converts a string to uppercase. Print the result for 'python'.",

      questionTamil:
        "'python' என்ற String-ஐ Uppercase-ஆக மாற்றும் Lambda Function-ஐ உருவாக்கி அதன் முடிவை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the upper() method inside the lambda function.",

      hintTamil:
        "Lambda Function-க்குள் upper() Method-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `PYTHON`,

      expectedOutputTamil: `PYTHON`,

      solution: `uppercase = lambda text: text.upper()

print(uppercase("python"))`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a Python program to accept two numbers from the user and use a lambda function to print their product.",

      questionTamil:
        "பயனரிடமிருந்து இரண்டு எண்களை Input ஆக பெற்று, Lambda Function பயன்படுத்தி அவற்றின் பெருக்கலை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input(), int(), and a lambda function with two parameters.",

      hintTamil:
        "input(), int() மற்றும் இரண்டு Parameters கொண்ட Lambda Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter first number: 5
Enter second number: 6
30`,

      expectedOutputTamil: `Enter first number: 5
Enter second number: 6
30`,

      solution: `multiply = lambda a, b: a * b

num1 = int(input("Enter first number: "))

num2 = int(input("Enter second number: "))

print(multiply(num1, num2))`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a Python program to accept a number from the user and use a lambda function to determine whether the number is positive or negative.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, Lambda Function பயன்படுத்தி அந்த எண் Positive அல்லது Negative என்பதை கண்டறியும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a conditional expression inside the lambda function.",

      hintTamil:
        "Lambda Function-க்குள் Conditional Expression-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: -5
Negative`,

      expectedOutputTamil: `Enter a number: -5
Negative`,

      solution: `check = lambda x: "Positive" if x >= 0 else "Negative"

number = int(input("Enter a number: "))

print(check(number))`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a Python program to create a lambda function that returns the length of a string. Print the length of 'Python'.",

      questionTamil:
        "'Python' என்ற String-ன் Length-ஐ Return செய்யும் Lambda Function-ஐ உருவாக்கி அதன் முடிவை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the len() function inside the lambda function.",

      hintTamil:
        "Lambda Function-க்குள் len() Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `6`,

      expectedOutputTamil: `6`,

      solution: `length = lambda text: len(text)

print(length("Python"))`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a Python program to accept three numbers from the user and use a lambda function to print the largest number.",

      questionTamil:
        "பயனரிடமிருந்து மூன்று எண்களை Input ஆக பெற்று, Lambda Function பயன்படுத்தி மிகப்பெரிய எண்ணை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a lambda function with three parameters and conditional expressions.",

      hintTamil:
        "மூன்று Parameters மற்றும் Conditional Expressions கொண்ட Lambda Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter first number: 15
Enter second number: 30
Enter third number: 25
30`,

      expectedOutputTamil: `Enter first number: 15
Enter second number: 30
Enter third number: 25
30`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a Python program to accept two numbers from the user and use separate lambda functions to print their sum, difference, product, and quotient.",

      questionTamil:
        "பயனரிடமிருந்து இரண்டு எண்களை Input ஆக பெற்று, தனித்தனி Lambda Functions பயன்படுத்தி அவற்றின் கூட்டல், கழித்தல், பெருக்கல் மற்றும் வகுத்தல் முடிவுகளை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create four separate lambda functions for +, -, *, and /.",

      hintTamil:
        "கூட்டல், கழித்தல், பெருக்கல் மற்றும் வகுத்தலுக்கு நான்கு தனித்தனி Lambda Functions-ஐ உருவாக்குங்கள்.",

      expectedOutput: `Enter first number: 20
Enter second number: 5
Addition: 25
Subtraction: 15
Multiplication: 100
Division: 4.0`,

      expectedOutputTamil: `Enter first number: 20
Enter second number: 5
Addition: 25
Subtraction: 15
Multiplication: 100
Division: 4.0`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },
  ],
},
{
  topicId: 23,
  title: "Classes and Objects",

  questions: [
    {
      id: 1,
      title: "Question 1",

      questionEnglish:
        "Write a Python program to create a class named Student. Create an object of the class and print 'Student Object Created'.",

      questionTamil:
        "'Student' என்ற Class-ஐ உருவாக்கி, அதன் ஒரு Object-ஐ உருவாக்கி 'Student Object Created' என்பதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the class keyword and create an object.",

      hintTamil:
        "class Keyword-ஐ பயன்படுத்தி Class மற்றும் Object-ஐ உருவாக்குங்கள்.",

      expectedOutput: `Student Object Created`,

      expectedOutputTamil: `Student Object Created`,

      solution: `class Student:
    pass

student = Student()

print("Student Object Created")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a Python program to create a class named Student with a method display() that prints 'Hello Student'. Create an object and call the method.",

      questionTamil:
        "'Student' என்ற Class-ஐ உருவாக்கி, அதில் 'display()' என்ற Method-ஐ உருவாக்குங்கள். அது 'Hello Student' என்பதை Print செய்ய வேண்டும். Object உருவாக்கி அந்த Method-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create a method using self and call it using the object.",

      hintTamil:
        "self பயன்படுத்தி Method உருவாக்கி, Object மூலம் Call செய்யுங்கள்.",

      expectedOutput: `Hello Student`,

      expectedOutputTamil: `Hello Student`,

      solution: `class Student:
    def display(self):
        print("Hello Student")

student = Student()

student.display()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a Python program to create a class named College with a method showCollege() that prints 'Don Bosco College'. Create an object and call the method.",

      questionTamil:
        "'College' என்ற Class-ஐ உருவாக்கி, அதில் 'showCollege()' என்ற Method-ஐ உருவாக்குங்கள். அது 'Don Bosco College' என்பதை Print செய்ய வேண்டும். Object உருவாக்கி அந்த Method-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the class keyword, create an object, and call the method.",

      hintTamil:
        "class Keyword பயன்படுத்தி Class உருவாக்கி, Object மூலம் Method-ஐ Call செய்யுங்கள்.",

      expectedOutput: `Don Bosco College`,

      expectedOutputTamil: `Don Bosco College`,

      solution: `class College:
    def showCollege(self):
        print("Don Bosco College")

college = College()

college.showCollege()`,

      challenge: false,
      locked: false,
      completed: false,
    },
          {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a Python program to create a class named Student with a method displayName() that prints 'Deepak'. Create an object and call the method.",

      questionTamil:
        "'Student' என்ற Class-ஐ உருவாக்கி, அதில் 'displayName()' என்ற Method-ஐ உருவாக்குங்கள். அது 'Deepak' என்பதை Print செய்ய வேண்டும். Object உருவாக்கி அந்த Method-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create a method inside the class and call it using the object.",

      hintTamil:
        "Class-க்குள் Method உருவாக்கி, Object மூலம் Call செய்யுங்கள்.",

      expectedOutput: `Deepak`,

      expectedOutputTamil: `Deepak`,

      solution: `class Student:
    def displayName(self):
        print("Deepak")

student = Student()

student.displayName()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a Python program to create a class named Calculator with a method add() that prints the sum of 10 and 20. Create an object and call the method.",

      questionTamil:
        "'Calculator' என்ற Class-ஐ உருவாக்கி, அதில் 'add()' என்ற Method-ஐ உருவாக்குங்கள். அது 10 மற்றும் 20-ன் கூட்டுத்தொகையை Print செய்ய வேண்டும். Object உருவாக்கி அந்த Method-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Perform the addition inside the class method.",

      hintTamil:
        "Class Method-க்குள் கூட்டலை செய்து, Object மூலம் Call செய்யுங்கள்.",

      expectedOutput: `30`,

      expectedOutputTamil: `30`,

      solution: `class Calculator:
    def add(self):
        print(10 + 20)

calculator = Calculator()

calculator.add()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a Python program to create a class named Student with a method welcome() that accepts the user's name as input and prints 'Welcome <name>'. Create an object and call the method.",

      questionTamil:
        "'Student' என்ற Class-ஐ உருவாக்கி, அதில் 'welcome()' என்ற Method-ஐ உருவாக்குங்கள். பயனரிடமிருந்து பெயரை Input ஆக பெற்று 'Welcome <name>' என்பதை Print செய்ய வேண்டும். Object உருவாக்கி அந்த Method-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input() inside the class method.",

      hintTamil:
        "Class Method-க்குள் input() பயன்படுத்துங்கள்.",

      expectedOutput: `Enter your name: Deepak
Welcome Deepak`,

      expectedOutputTamil: `Enter your name: Deepak
Welcome Deepak`,

      solution: `class Student:
    def welcome(self):
        name = input("Enter your name: ")
        print("Welcome", name)

student = Student()

student.welcome()`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a Python program to create a class named Square with a method findSquare() that accepts a number from the user and prints its square. Create an object and call the method.",

      questionTamil:
        "'Square' என்ற Class-ஐ உருவாக்கி, அதில் 'findSquare()' என்ற Method-ஐ உருவாக்குங்கள். பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று அதன் Square-ஐ Print செய்ய வேண்டும். Object உருவாக்கி அந்த Method-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input(), int(), and a class method.",

      hintTamil:
        "input(), int() மற்றும் Class Method-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 6
36`,

      expectedOutputTamil: `Enter a number: 6
36`,

      solution: `class Square:
    def findSquare(self):
        number = int(input("Enter a number: "))
        print(number * number)

square = Square()

square.findSquare()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a Python program to create a class named Table with a method multiplicationTable() that accepts a number from the user and prints its multiplication table from 1 to 10. Create an object and call the method.",

      questionTamil:
        "'Table' என்ற Class-ஐ உருவாக்கி, அதில் 'multiplicationTable()' என்ற Method-ஐ உருவாக்குங்கள். பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று அதன் பெருக்கல் வாய்ப்பாட்டை (1 முதல் 10 வரை) Print செய்ய வேண்டும். Object உருவாக்கி அந்த Method-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a for loop inside the class method.",

      hintTamil:
        "Class Method-க்குள் For Loop-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50`,

      expectedOutputTamil: `Enter a number: 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50`,

      solution: `class Table:
    def multiplicationTable(self):
        number = int(input("Enter a number: "))

        for i in range(1, 11):
            print(number, "x", i, "=", number * i)

table = Table()

table.multiplicationTable()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a Python program to create a class named Calculator with a method largest() that accepts three numbers from the user and prints the largest number. Create an object and call the method.",

      questionTamil:
        "'Calculator' என்ற Class-ஐ உருவாக்கி, அதில் 'largest()' என்ற Method-ஐ உருவாக்குங்கள். பயனரிடமிருந்து மூன்று எண்களை Input ஆக பெற்று, மிகப்பெரிய எண்ணை Print செய்ய வேண்டும். Object உருவாக்கி அந்த Method-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input(), int(), and the max() function inside the class method.",

      hintTamil:
        "Class Method-க்குள் input(), int() மற்றும் max() Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter first number: 10
Enter second number: 35
Enter third number: 25
35`,

      expectedOutputTamil: `Enter first number: 10
Enter second number: 35
Enter third number: 25
35`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a Python program to create a class named Student with a method studentDetails() that accepts a student's name, age, and department from the user and prints all the details. Create an object and call the method.",

      questionTamil:
        "'Student' என்ற Class-ஐ உருவாக்கி, அதில் 'studentDetails()' என்ற Method-ஐ உருவாக்குங்கள். பயனரிடமிருந்து மாணவரின் பெயர், வயது மற்றும் Department-ஐ Input ஆக பெற்று, அனைத்து விவரங்களையும் Print செய்ய வேண்டும். Object உருவாக்கி அந்த Method-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use multiple input() statements inside the class method.",

      hintTamil:
        "Class Method-க்குள் பல input() Statements-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter name: Deepak
Enter age: 20
Enter department: Computer Science
Name: Deepak
Age: 20
Department: Computer Science`,

      expectedOutputTamil: `Enter name: Deepak
Enter age: 20
Enter department: Computer Science
Name: Deepak
Age: 20
Department: Computer Science`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },
  ],
},
{
  topicId: 24,
  title: "Objects",

  questions: [
    {
      id: 1,
      title: "Question 1",

      questionEnglish:
        "Write a Python program to create a class named Student. Create an object named student and print the object.",

      questionTamil:
        "'Student' என்ற Class-ஐ உருவாக்கி, 'student' என்ற Object-ஐ உருவாக்கி அதை Print செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create an object using the class name.",

      hintTamil:
        "Class பெயரை பயன்படுத்தி ஒரு Object-ஐ உருவாக்குங்கள்.",

      expectedOutput: `<__main__.Student object at ...>`,

      expectedOutputTamil: `<__main__.Student object at ...>`,

      solution: `class Student:
    pass

student = Student()

print(student)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a Python program to create a class named Student with a method display(). Create an object and call the display() method.",

      questionTamil:
        "'Student' என்ற Class-ஐ உருவாக்கி, அதில் display() என்ற Method-ஐ உருவாக்குங்கள். Object-ஐ உருவாக்கி display() Method-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Call the method using the object.",

      hintTamil:
        "Object பயன்படுத்தி Method-ஐ Call செய்யுங்கள்.",

      expectedOutput: `Hello Student`,

      expectedOutputTamil: `Hello Student`,

      solution: `class Student:
    def display(self):
        print("Hello Student")

student = Student()

student.display()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a Python program to create a class named Calculator with a method add(). Create two objects and call the add() method using both objects.",

      questionTamil:
        "'Calculator' என்ற Class-ஐ உருவாக்கி, அதில் add() என்ற Method-ஐ உருவாக்குங்கள். இரண்டு Objects-ஐ உருவாக்கி, இரண்டிலும் add() Method-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create two objects from the same class.",

      hintTamil:
        "ஒரே Class-இல் இருந்து இரண்டு Objects-ஐ உருவாக்குங்கள்.",

      expectedOutput: `30
30`,

      expectedOutputTamil: `30
30`,

      solution: `class Calculator:
    def add(self):
        print(10 + 20)

obj1 = Calculator()
obj2 = Calculator()

obj1.add()
obj2.add()`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a Python program to create a class named Student with a method displayName() that prints 'Deepak'. Create two objects and call the method using both objects.",

      questionTamil:
        "'Student' என்ற Class-ஐ உருவாக்கி, அதில் displayName() என்ற Method-ஐ உருவாக்குங்கள். இரண்டு Objects-ஐ உருவாக்கி, இரண்டிலும் displayName() Method-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create two objects from the same class and call the method.",

      hintTamil:
        "ஒரே Class-இல் இருந்து இரண்டு Objects-ஐ உருவாக்கி Method-ஐ Call செய்யுங்கள்.",

      expectedOutput: `Deepak
Deepak`,

      expectedOutputTamil: `Deepak
Deepak`,

      solution: `class Student:
    def displayName(self):
        print("Deepak")

student1 = Student()
student2 = Student()

student1.displayName()
student2.displayName()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a Python program to create a class named College with a method showCollege() that prints 'Don Bosco College'. Create an object and call the method twice.",

      questionTamil:
        "'College' என்ற Class-ஐ உருவாக்கி, அதில் showCollege() என்ற Method-ஐ உருவாக்குங்கள். ஒரு Object-ஐ உருவாக்கி அந்த Method-ஐ இரண்டு முறை Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Call the same method twice using the same object.",

      hintTamil:
        "ஒரே Object பயன்படுத்தி Method-ஐ இரண்டு முறை Call செய்யுங்கள்.",

      expectedOutput: `Don Bosco College
Don Bosco College`,

      expectedOutputTamil: `Don Bosco College
Don Bosco College`,

      solution: `class College:
    def showCollege(self):
        print("Don Bosco College")

college = College()

college.showCollege()
college.showCollege()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a Python program to create a class named Square with a method findSquare() that accepts a number from the user and prints its square. Create an object and call the method.",

      questionTamil:
        "'Square' என்ற Class-ஐ உருவாக்கி, அதில் findSquare() என்ற Method-ஐ உருவாக்குங்கள். பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று அதன் Square-ஐ Print செய்ய வேண்டும். Object-ஐ உருவாக்கி அந்த Method-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input(), int(), and call the method using the object.",

      hintTamil:
        "input(), int() பயன்படுத்தி Object மூலம் Method-ஐ Call செய்யுங்கள்.",

      expectedOutput: `Enter a number: 6
36`,

      expectedOutputTamil: `Enter a number: 6
36`,

      solution: `class Square:
    def findSquare(self):
        number = int(input("Enter a number: "))
        print(number * number)

square = Square()

square.findSquare()`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a Python program to create a class named Table with a method multiplicationTable() that accepts a number from the user and prints its multiplication table from 1 to 10. Create two objects and call the method using both objects.",

      questionTamil:
        "'Table' என்ற Class-ஐ உருவாக்கி, அதில் multiplicationTable() என்ற Method-ஐ உருவாக்குங்கள். பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று அதன் பெருக்கல் வாய்ப்பாட்டை (1 முதல் 10 வரை) Print செய்ய வேண்டும். இரண்டு Objects-ஐ உருவாக்கி, இரண்டிலும் அந்த Method-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create two objects from the same class and call the method using both objects.",

      hintTamil:
        "ஒரே Class-இல் இருந்து இரண்டு Objects-ஐ உருவாக்கி, Method-ஐ இரண்டிலும் Call செய்யுங்கள்.",

      expectedOutput: `Enter a number: 5
5 x 1 = 5
...
5 x 10 = 50

Enter a number: 3
3 x 1 = 3
...
3 x 10 = 30`,

      expectedOutputTamil: `Enter a number: 5
5 x 1 = 5
...
5 x 10 = 50

Enter a number: 3
3 x 1 = 3
...
3 x 10 = 30`,

      solution: `class Table:
    def multiplicationTable(self):
        number = int(input("Enter a number: "))

        for i in range(1, 11):
            print(number, "x", i, "=", number * i)

table1 = Table()
table2 = Table()

table1.multiplicationTable()
table2.multiplicationTable()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a Python program to create a class named Student with a method welcome() that accepts a name from the user and prints 'Welcome <name>'. Create two objects and call the method using both objects.",

      questionTamil:
        "'Student' என்ற Class-ஐ உருவாக்கி, அதில் welcome() என்ற Method-ஐ உருவாக்குங்கள். பயனரிடமிருந்து பெயரை Input ஆக பெற்று 'Welcome <name>' என்பதை Print செய்ய வேண்டும். இரண்டு Objects-ஐ உருவாக்கி, இரண்டிலும் அந்த Method-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input() inside the method and create two objects.",

      hintTamil:
        "Method-க்குள் input() பயன்படுத்தி, இரண்டு Objects-ஐ உருவாக்குங்கள்.",

      expectedOutput: `Enter your name: Deepak
Welcome Deepak

Enter your name: Kathir
Welcome Kathir`,

      expectedOutputTamil: `Enter your name: Deepak
Welcome Deepak

Enter your name: Kathir
Welcome Kathir`,

      solution: `class Student:
    def welcome(self):
        name = input("Enter your name: ")
        print("Welcome", name)

student1 = Student()
student2 = Student()

student1.welcome()
student2.welcome()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a Python program to create a class named Calculator with a method largest() that accepts three numbers from the user and prints the largest number. Create an object and call the method.",

      questionTamil:
        "'Calculator' என்ற Class-ஐ உருவாக்கி, அதில் largest() என்ற Method-ஐ உருவாக்குங்கள். பயனரிடமிருந்து மூன்று எண்களை Input ஆக பெற்று மிகப்பெரிய எண்ணை Print செய்ய வேண்டும். Object-ஐ உருவாக்கி அந்த Method-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use input(), int(), and max() inside the class method.",

      hintTamil:
        "Class Method-க்குள் input(), int() மற்றும் max() Function-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter first number: 10
Enter second number: 45
Enter third number: 30
45`,

      expectedOutputTamil: `Enter first number: 10
Enter second number: 45
Enter third number: 30
45`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a Python program to create a class named Student with a method studentDetails() that accepts a student's name, age, and department from the user and prints all the details. Create an object and call the method.",

      questionTamil:
        "'Student' என்ற Class-ஐ உருவாக்கி, அதில் studentDetails() என்ற Method-ஐ உருவாக்குங்கள். பயனரிடமிருந்து மாணவரின் பெயர், வயது மற்றும் Department-ஐ Input ஆக பெற்று அனைத்து விவரங்களையும் Print செய்ய வேண்டும். Object-ஐ உருவாக்கி அந்த Method-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use multiple input() statements inside the class method.",

      hintTamil:
        "Class Method-க்குள் பல input() Statements-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter name: Deepak
Enter age: 20
Enter department: Computer Science
Name: Deepak
Age: 20
Department: Computer Science`,

      expectedOutputTamil: `Enter name: Deepak
Enter age: 20
Enter department: Computer Science
Name: Deepak
Age: 20
Department: Computer Science`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },
  ],
},
{
  topicId: 25,
  title: "Constructors",

  questions: [
    {
      id: 1,
      title: "Question 1",

      questionEnglish:
        "Write a Python program to create a class named Student with a constructor that prints 'Student Object Created'. Create an object.",

      questionTamil:
        "'Student' என்ற Class-ஐ உருவாக்கி, அதில் Constructor-ஐ பயன்படுத்தி 'Student Object Created' என்பதை Print செய்ய வேண்டும். பின்னர் ஒரு Object-ஐ உருவாக்கும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the __init__() constructor.",

      hintTamil:
        "__init__() Constructor-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Student Object Created`,

      expectedOutputTamil: `Student Object Created`,

      solution: `class Student:
    def __init__(self):
        print("Student Object Created")

student = Student()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a Python program to create a class named Student with a constructor that prints 'Welcome Deepak'. Create an object.",

      questionTamil:
        "'Student' என்ற Class-ஐ உருவாக்கி, அதில் Constructor பயன்படுத்தி 'Welcome Deepak' என்பதை Print செய்ய வேண்டும். பின்னர் ஒரு Object-ஐ உருவாக்கும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the __init__() constructor.",

      hintTamil:
        "__init__() Constructor-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Welcome Deepak`,

      expectedOutputTamil: `Welcome Deepak`,

      solution: `class Student:
    def __init__(self):
        print("Welcome Deepak")

student = Student()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a Python program to create a class named College with a constructor that prints 'Don Bosco College'. Create an object.",

      questionTamil:
        "'College' என்ற Class-ஐ உருவாக்கி, அதில் Constructor பயன்படுத்தி 'Don Bosco College' என்பதை Print செய்ய வேண்டும். பின்னர் ஒரு Object-ஐ உருவாக்கும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the __init__() method.",

      hintTamil:
        "__init__() Method-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Don Bosco College`,

      expectedOutputTamil: `Don Bosco College`,

      solution: `class College:
    def __init__(self):
        print("Don Bosco College")

college = College()`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a Python program to create a class named Student with a constructor that accepts a student's name and prints 'Welcome <name>'. Create an object.",

      questionTamil:
        "'Student' என்ற Class-ஐ உருவாக்கி, Constructor-ல் மாணவரின் பெயரை Parameter ஆக பெற்று 'Welcome <name>' என்பதை Print செய்ய வேண்டும். பின்னர் ஒரு Object-ஐ உருவாக்கும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Pass the name as an argument while creating the object.",

      hintTamil:
        "Object உருவாக்கும் போது பெயரை Argument ஆக அனுப்புங்கள்.",

      expectedOutput: `Welcome Deepak`,

      expectedOutputTamil: `Welcome Deepak`,

      solution: `class Student:
    def __init__(self, name):
        print("Welcome", name)

student = Student("Deepak")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a Python program to create a class named Student with a constructor that accepts a name and age and prints both values. Create an object.",

      questionTamil:
        "'Student' என்ற Class-ஐ உருவாக்கி, Constructor-ல் பெயர் மற்றும் வயதை Parameter-ஆக பெற்று இரண்டையும் Print செய்ய வேண்டும். பின்னர் ஒரு Object-ஐ உருவாக்கும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Pass two arguments while creating the object.",

      hintTamil:
        "Object உருவாக்கும் போது இரண்டு Arguments-ஐ அனுப்புங்கள்.",

      expectedOutput: `Name: Deepak
Age: 20`,

      expectedOutputTamil: `Name: Deepak
Age: 20`,

      solution: `class Student:
    def __init__(self, name, age):
        print("Name:", name)
        print("Age:", age)

student = Student("Deepak", 20)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a Python program to create a class named Rectangle with a constructor that accepts length and width and prints the area. Create an object.",

      questionTamil:
        "'Rectangle' என்ற Class-ஐ உருவாக்கி, Constructor-ல் Length மற்றும் Width-ஐ Parameter-ஆக பெற்று அதன் Area-ஐ Print செய்ய வேண்டும். பின்னர் ஒரு Object-ஐ உருவாக்கும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Multiply the length and width inside the constructor.",

      hintTamil:
        "Constructor-க்குள் Length மற்றும் Width-ஐ பெருக்குங்கள்.",

      expectedOutput: `Area: 50`,

      expectedOutputTamil: `Area: 50`,

      solution: `class Rectangle:
    def __init__(self, length, width):
        print("Area:", length * width)

rectangle = Rectangle(10, 5)`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a Python program to create a class named Student with a constructor that accepts a student's name, age, and department and prints all the details. Create an object.",

      questionTamil:
        "'Student' என்ற Class-ஐ உருவாக்கி, Constructor-ல் மாணவரின் பெயர், வயது மற்றும் Department-ஐ Parameter-ஆக பெற்று அனைத்து விவரங்களையும் Print செய்ய வேண்டும். பின்னர் ஒரு Object-ஐ உருவாக்கும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Pass three arguments while creating the object.",

      hintTamil:
        "Object உருவாக்கும் போது மூன்று Arguments-ஐ அனுப்புங்கள்.",

      expectedOutput: `Name: Deepak
Age: 20
Department: Computer Science`,

      expectedOutputTamil: `Name: Deepak
Age: 20
Department: Computer Science`,

      solution: `class Student:
    def __init__(self, name, age, department):
        print("Name:", name)
        print("Age:", age)
        print("Department:", department)

student = Student("Deepak", 20, "Computer Science")`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a Python program to create a class named Calculator with a constructor that accepts two numbers and prints their sum. Create an object.",

      questionTamil:
        "'Calculator' என்ற Class-ஐ உருவாக்கி, Constructor-ல் இரண்டு எண்களை Parameter-ஆக பெற்று அவற்றின் கூட்டுத்தொகையை Print செய்ய வேண்டும். பின்னர் ஒரு Object-ஐ உருவாக்கும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Add the two numbers inside the constructor.",

      hintTamil:
        "Constructor-க்குள் இரண்டு எண்களையும் கூட்டுங்கள்.",

      expectedOutput: `Sum: 30`,

      expectedOutputTamil: `Sum: 30`,

      solution: `class Calculator:
    def __init__(self, a, b):
        print("Sum:", a + b)

calculator = Calculator(10, 20)`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a Python program to create a class named Employee with a constructor that accepts an employee's name, salary, and department and prints all the details. Create an object.",

      questionTamil:
        "'Employee' என்ற Class-ஐ உருவாக்கி, Constructor-ல் பணியாளரின் பெயர், சம்பளம் மற்றும் Department-ஐ Parameter-ஆக பெற்று அனைத்து விவரங்களையும் Print செய்ய வேண்டும். பின்னர் ஒரு Object-ஐ உருவாக்கும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Pass three arguments to the constructor and print all the values.",

      hintTamil:
        "Constructor-க்கு மூன்று Arguments அனுப்பி அனைத்து Values-ஐ Print செய்யுங்கள்.",

      expectedOutput: `Name: Kathir
Salary: 30000
Department: IT`,

      expectedOutputTamil: `Name: Kathir
Salary: 30000
Department: IT`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a Python program to create a class named Rectangle with a constructor that accepts length and width and prints the area and perimeter. Create an object.",

      questionTamil:
        "'Rectangle' என்ற Class-ஐ உருவாக்கி, Constructor-ல் Length மற்றும் Width-ஐ Parameter-ஆக பெற்று அதன் Area மற்றும் Perimeter-ஐ Print செய்ய வேண்டும். பின்னர் ஒரு Object-ஐ உருவாக்கும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Calculate both the area and perimeter inside the constructor.",

      hintTamil:
        "Constructor-க்குள் Area மற்றும் Perimeter இரண்டையும் கணக்கிடுங்கள்.",

      expectedOutput: `Area: 50
Perimeter: 30`,

      expectedOutputTamil: `Area: 50
Perimeter: 30`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },
  ],
},
{
  topicId: 26,
  title: "Single Inheritance",

  questions: [
    {
      id: 1,
      title: "Question 1",

      questionEnglish:
        "Write a Python program to create a class named Person with a method displayName() that prints 'Deepak'. Create another class Student that inherits from Person. Create an object of Student and call the displayName() method.",

      questionTamil:
        "'Person' என்ற Class-ஐ உருவாக்கி, அதில் displayName() என்ற Method-ஐ உருவாக்குங்கள். அது 'Deepak' என்பதை Print செய்ய வேண்டும். பின்னர் Person Class-ஐ Inherit செய்யும் Student Class-ஐ உருவாக்கி, Student Object மூலம் displayName() Method-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use class Student(Person).",

      hintTamil:
        "class Student(Person) என்பதை பயன்படுத்துங்கள்.",

      expectedOutput: `Deepak`,

      expectedOutputTamil: `Deepak`,

      solution: `class Person:
    def displayName(self):
        print("Deepak")

class Student(Person):
    pass

student = Student()

student.displayName()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a Python program to create a class named Animal with a method sound() that prints 'Animal Sound'. Create a class Dog that inherits from Animal. Create an object of Dog and call the sound() method.",

      questionTamil:
        "'Animal' என்ற Class-ஐ உருவாக்கி, அதில் sound() என்ற Method-ஐ உருவாக்குங்கள். அது 'Animal Sound' என்பதை Print செய்ய வேண்டும். பின்னர் Animal Class-ஐ Inherit செய்யும் Dog Class-ஐ உருவாக்கி, Dog Object மூலம் sound() Method-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create the child class using inheritance.",

      hintTamil:
        "Inheritance பயன்படுத்தி Child Class-ஐ உருவாக்குங்கள்.",

      expectedOutput: `Animal Sound`,

      expectedOutputTamil: `Animal Sound`,

      solution: `class Animal:
    def sound(self):
        print("Animal Sound")

class Dog(Animal):
    pass

dog = Dog()

dog.sound()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a Python program to create a class named College with a method showCollege() that prints 'Don Bosco College'. Create a class Department that inherits from College. Create an object of Department and call the showCollege() method.",

      questionTamil:
        "'College' என்ற Class-ஐ உருவாக்கி, அதில் showCollege() என்ற Method-ஐ உருவாக்குங்கள். அது 'Don Bosco College' என்பதை Print செய்ய வேண்டும். பின்னர் College Class-ஐ Inherit செய்யும் Department Class-ஐ உருவாக்கி, Department Object மூலம் showCollege() Method-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create a child class and access the parent method.",

      hintTamil:
        "Child Class உருவாக்கி Parent Method-ஐ Access செய்யுங்கள்.",

      expectedOutput: `Don Bosco College`,

      expectedOutputTamil: `Don Bosco College`,

      solution: `class College:
    def showCollege(self):
        print("Don Bosco College")

class Department(College):
    pass

department = Department()

department.showCollege()`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a Python program to create a class named Person with a method displayName() that prints 'Kathir'. Create a class Student that inherits from Person. Create an object of Student and call the displayName() method twice.",

      questionTamil:
        "'Person' என்ற Class-ஐ உருவாக்கி, அதில் displayName() என்ற Method-ஐ உருவாக்குங்கள். அது 'Kathir' என்பதை Print செய்ய வேண்டும். பின்னர் Person Class-ஐ Inherit செய்யும் Student Class-ஐ உருவாக்கி, Student Object மூலம் displayName() Method-ஐ இரண்டு முறை Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create the child class using inheritance and call the parent method twice.",

      hintTamil:
        "Inheritance பயன்படுத்தி Child Class-ஐ உருவாக்கி Parent Method-ஐ இரண்டு முறை Call செய்யுங்கள்.",

      expectedOutput: `Kathir
Kathir`,

      expectedOutputTamil: `Kathir
Kathir`,

      solution: `class Person:
    def displayName(self):
        print("Kathir")

class Student(Person):
    pass

student = Student()

student.displayName()
student.displayName()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a Python program to create a class named Shape with a method area() that prints 'Area Calculated'. Create a class Rectangle that inherits from Shape. Create an object of Rectangle and call the area() method.",

      questionTamil:
        "'Shape' என்ற Class-ஐ உருவாக்கி, அதில் area() என்ற Method-ஐ உருவாக்குங்கள். அது 'Area Calculated' என்பதை Print செய்ய வேண்டும். பின்னர் Shape Class-ஐ Inherit செய்யும் Rectangle Class-ஐ உருவாக்கி, Rectangle Object மூலம் area() Method-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Access the parent method through the child object.",

      hintTamil:
        "Child Object மூலம் Parent Method-ஐ Access செய்யுங்கள்.",

      expectedOutput: `Area Calculated`,

      expectedOutputTamil: `Area Calculated`,

      solution: `class Shape:
    def area(self):
        print("Area Calculated")

class Rectangle(Shape):
    pass

rectangle = Rectangle()

rectangle.area()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a Python program to create a class named Vehicle with a method start() that prints 'Vehicle Started'. Create a class Car that inherits from Vehicle. Create an object of Car and call the start() method.",

      questionTamil:
        "'Vehicle' என்ற Class-ஐ உருவாக்கி, அதில் start() என்ற Method-ஐ உருவாக்குங்கள். அது 'Vehicle Started' என்பதை Print செய்ய வேண்டும். பின்னர் Vehicle Class-ஐ Inherit செய்யும் Car Class-ஐ உருவாக்கி, Car Object மூலம் start() Method-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use inheritance to access the parent class method.",

      hintTamil:
        "Parent Class Method-ஐ Access செய்ய Inheritance-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Vehicle Started`,

      expectedOutputTamil: `Vehicle Started`,

      solution: `class Vehicle:
    def start(self):
        print("Vehicle Started")

class Car(Vehicle):
    pass

car = Car()

car.start()`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a Python program to create a class named Employee with a method showDetails() that prints 'Employee Details'. Create a class Manager that inherits from Employee. Create an object of Manager and call the showDetails() method.",

      questionTamil:
        "'Employee' என்ற Class-ஐ உருவாக்கி, அதில் showDetails() என்ற Method-ஐ உருவாக்குங்கள். அது 'Employee Details' என்பதை Print செய்ய வேண்டும். பின்னர் Employee Class-ஐ Inherit செய்யும் Manager Class-ஐ உருவாக்கி, Manager Object மூலம் showDetails() Method-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create the child class using inheritance and call the parent method.",

      hintTamil:
        "Inheritance பயன்படுத்தி Child Class-ஐ உருவாக்கி Parent Method-ஐ Call செய்யுங்கள்.",

      expectedOutput: `Employee Details`,

      expectedOutputTamil: `Employee Details`,

      solution: `class Employee:
    def showDetails(self):
        print("Employee Details")

class Manager(Employee):
    pass

manager = Manager()

manager.showDetails()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a Python program to create a class named Person with a method greet() that prints 'Hello'. Create a class Student that inherits from Person. Create two objects of Student and call the greet() method using both objects.",

      questionTamil:
        "'Person' என்ற Class-ஐ உருவாக்கி, அதில் greet() என்ற Method-ஐ உருவாக்குங்கள். அது 'Hello' என்பதை Print செய்ய வேண்டும். பின்னர் Person Class-ஐ Inherit செய்யும் Student Class-ஐ உருவாக்கி, இரண்டு Student Objects உருவாக்கி greet() Method-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create two child objects and call the inherited method.",

      hintTamil:
        "இரண்டு Child Objects உருவாக்கி Inherited Method-ஐ Call செய்யுங்கள்.",

      expectedOutput: `Hello
Hello`,

      expectedOutputTamil: `Hello
Hello`,

      solution: `class Person:
    def greet(self):
        print("Hello")

class Student(Person):
    pass

student1 = Student()
student2 = Student()

student1.greet()
student2.greet()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a Python program to create a class named Person with a method displayName() that prints a name. Create a class Student that inherits from Person and call the inherited method using a Student object.",

      questionTamil:
        "'Person' என்ற Class-ஐ உருவாக்கி, அதில் displayName() என்ற Method-ஐ உருவாக்குங்கள். பின்னர் Person Class-ஐ Inherit செய்யும் Student Class-ஐ உருவாக்கி, Student Object மூலம் Inherited Method-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create a parent class, child class, and call the inherited method.",

      hintTamil:
        "Parent Class, Child Class உருவாக்கி Inherited Method-ஐ Call செய்யுங்கள்.",

      expectedOutput: `Deepak`,

      expectedOutputTamil: `Deepak`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a Python program to create a class named Vehicle with a method start() and a class Bike that inherits from Vehicle. Create an object of Bike and call the inherited method.",

      questionTamil:
        "'Vehicle' என்ற Class-ஐ உருவாக்கி, அதில் start() என்ற Method-ஐ உருவாக்குங்கள். பின்னர் Vehicle Class-ஐ Inherit செய்யும் Bike Class-ஐ உருவாக்கி, Bike Object மூலம் Inherited Method-ஐ Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create a child class and access the parent method.",

      hintTamil:
        "Child Class உருவாக்கி Parent Method-ஐ Access செய்யுங்கள்.",

      expectedOutput: `Vehicle Started`,

      expectedOutputTamil: `Vehicle Started`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },
  ],
},
{
  topicId: 27,
  title: "Multiple Inheritance",

  questions: [
    {
      id: 1,
      title: "Question 1",

      questionEnglish:
        "Write a Python program to create two classes named Father and Mother with methods fatherName() and motherName(). Create a class Child that inherits from both classes. Create an object of Child and call both methods.",

      questionTamil:
        "'Father' மற்றும் 'Mother' என்ற இரண்டு Classes-ஐ உருவாக்கி, அவற்றில் fatherName() மற்றும் motherName() என்ற Methods-ஐ உருவாக்குங்கள். பின்னர் இரண்டு Classes-யையும் Inherit செய்யும் Child Class-ஐ உருவாக்கி, Child Object மூலம் இரண்டு Methods-ஐயும் Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use class Child(Father, Mother).",

      hintTamil:
        "class Child(Father, Mother) என்பதை பயன்படுத்துங்கள்.",

      expectedOutput: `Father
Mother`,

      expectedOutputTamil: `Father
Mother`,

      solution: `class Father:
    def fatherName(self):
        print("Father")

class Mother:
    def motherName(self):
        print("Mother")

class Child(Father, Mother):
    pass

child = Child()

child.fatherName()
child.motherName()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a Python program to create two classes named Student and Sports with methods study() and play(). Create a class School that inherits from both classes. Create an object and call both methods.",

      questionTamil:
        "'Student' மற்றும் 'Sports' என்ற இரண்டு Classes-ஐ உருவாக்கி, அவற்றில் study() மற்றும் play() என்ற Methods-ஐ உருவாக்குங்கள். பின்னர் இரண்டு Classes-யையும் Inherit செய்யும் School Class-ஐ உருவாக்கி, Object மூலம் இரண்டு Methods-ஐயும் Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use multiple inheritance with two parent classes.",

      hintTamil:
        "இரண்டு Parent Classes உடன் Multiple Inheritance-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Studying
Playing`,

      expectedOutputTamil: `Studying
Playing`,

      solution: `class Student:
    def study(self):
        print("Studying")

class Sports:
    def play(self):
        print("Playing")

class School(Student, Sports):
    pass

school = School()

school.study()
school.play()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a Python program to create two classes named Calculator and Display with methods add() and show(). Create a class Result that inherits from both classes. Create an object and call both methods.",

      questionTamil:
        "'Calculator' மற்றும் 'Display' என்ற இரண்டு Classes-ஐ உருவாக்கி, அவற்றில் add() மற்றும் show() என்ற Methods-ஐ உருவாக்குங்கள். பின்னர் இரண்டு Classes-யையும் Inherit செய்யும் Result Class-ஐ உருவாக்கி, Object மூலம் இரண்டு Methods-ஐயும் Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create a child class that inherits from both parent classes.",

      hintTamil:
        "இரண்டு Parent Classes-ஐ Inherit செய்யும் Child Class-ஐ உருவாக்குங்கள்.",

      expectedOutput: `30
Result Displayed`,

      expectedOutputTamil: `30
Result Displayed`,

      solution: `class Calculator:
    def add(self):
        print(10 + 20)

class Display:
    def show(self):
        print("Result Displayed")

class Result(Calculator, Display):
    pass

result = Result()

result.add()
result.show()`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a Python program to create two classes named Person and Employee with methods showName() and showSalary(). Create a class Manager that inherits from both classes. Create an object and call both methods.",

      questionTamil:
        "'Person' மற்றும் 'Employee' என்ற இரண்டு Classes-ஐ உருவாக்கி, அவற்றில் showName() மற்றும் showSalary() என்ற Methods-ஐ உருவாக்குங்கள். பின்னர் இரண்டு Classes-யையும் Inherit செய்யும் Manager Class-ஐ உருவாக்கி, Object மூலம் இரண்டு Methods-ஐயும் Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use multiple inheritance with two parent classes.",

      hintTamil:
        "இரண்டு Parent Classes உடன் Multiple Inheritance-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Kathir
30000`,

      expectedOutputTamil: `Kathir
30000`,

      solution: `class Person:
    def showName(self):
        print("Kathir")

class Employee:
    def showSalary(self):
        print(30000)

class Manager(Person, Employee):
    pass

manager = Manager()

manager.showName()
manager.showSalary()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a Python program to create two classes named College and Department with methods collegeName() and departmentName(). Create a class Student that inherits from both classes. Create an object and call both methods.",

      questionTamil:
        "'College' மற்றும் 'Department' என்ற இரண்டு Classes-ஐ உருவாக்கி, அவற்றில் collegeName() மற்றும் departmentName() என்ற Methods-ஐ உருவாக்குங்கள். பின்னர் இரண்டு Classes-யையும் Inherit செய்யும் Student Class-ஐ உருவாக்கி, Object மூலம் இரண்டு Methods-ஐயும் Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create a child class that inherits from both parent classes.",

      hintTamil:
        "இரண்டு Parent Classes-ஐ Inherit செய்யும் Child Class-ஐ உருவாக்குங்கள்.",

      expectedOutput: `Don Bosco College
Computer Science`,

      expectedOutputTamil: `Don Bosco College
Computer Science`,

      solution: `class College:
    def collegeName(self):
        print("Don Bosco College")

class Department:
    def departmentName(self):
        print("Computer Science")

class Student(College, Department):
    pass

student = Student()

student.collegeName()
student.departmentName()`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a Python program to create two classes named Teacher and Student with methods teach() and study(). Create a class Classroom that inherits from both classes. Create an object and call both methods.",

      questionTamil:
        "'Teacher' மற்றும் 'Student' என்ற இரண்டு Classes-ஐ உருவாக்கி, அவற்றில் teach() மற்றும் study() என்ற Methods-ஐ உருவாக்குங்கள். பின்னர் இரண்டு Classes-யையும் Inherit செய்யும் Classroom Class-ஐ உருவாக்கி, Object மூலம் இரண்டு Methods-ஐயும் Call செய்யும் Python Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use multiple inheritance and access methods from both parent classes.",

      hintTamil:
        "Multiple Inheritance பயன்படுத்தி இரண்டு Parent Classes-இன் Methods-ஐ Access செய்யுங்கள்.",

      expectedOutput: `Teaching
Studying`,

      expectedOutputTamil: `Teaching
Studying`,

      solution: `class Teacher:
    def teach(self):
        print("Teaching")

class Student:
    def study(self):
        print("Studying")

class Classroom(Teacher, Student):
    pass

classroom = Classroom()

classroom.teach()
classroom.study()`,

      challenge: false,
      locked: false,
      completed: false,
    },
  ],
},
];

export default questions;