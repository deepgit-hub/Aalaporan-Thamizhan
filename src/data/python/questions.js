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
    
  ],
},
];

export default questions;