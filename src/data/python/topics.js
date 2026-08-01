const topics = [
{
  id: 1,

  title: "Introduction to Python",

  englishDefinition:
    "Python is a high-level, interpreted, and easy-to-learn programming language. It is known for its simple syntax and readability, making it one of the best programming languages for beginners. Python is widely used in Web Development, Artificial Intelligence, Data Science, Automation, Cybersecurity, Machine Learning, and Software Development.",

  tamilDefinition:
    "Python என்பது High-Level, Interpreted மற்றும் கற்றுக்கொள்ள மிகவும் எளிதான Programming Language ஆகும். இதன் எளிமையான Syntax மற்றும் Readability காரணமாக இது Beginner-களுக்கான சிறந்த Programming Language-களில் ஒன்றாக கருதப்படுகிறது. Python, Web Development, Artificial Intelligence, Data Science, Automation, Cybersecurity, Machine Learning மற்றும் Software Development போன்ற பல துறைகளில் பரவலாக பயன்படுத்தப்படுகிறது.",

  realWorldUsage:
    "Python is used by many of the world's leading companies. For example, Instagram uses Python for its backend services, Netflix uses it for recommendations, Spotify uses it for data analysis, and cybersecurity professionals use Python to automate security tasks and penetration testing.",

  realWorldUsageTamil:
    "Python உலகின் முன்னணி நிறுவனங்களால் பயன்படுத்தப்படுகிறது. உதாரணமாக, Instagram தனது Backend Services-க்கு Python-ஐ பயன்படுத்துகிறது. Netflix Recommendation System-ல், Spotify Data Analysis-ல், மேலும் Cybersecurity Engineers Automation மற்றும் Penetration Testing-க்காக Python-ஐ பயன்படுத்துகின்றனர்.",

  syntax: `print("Hello, World!")`,

  syntaxExplanationEnglish: [
    "print() is a built-in Python function used to display output on the screen.",
    "The text to be displayed is written inside quotation marks.",
    "Parentheses () are used to pass the message to the print() function.",
    "Every Python statement is executed from top to bottom.",
    "Python does not require a semicolon (;) at the end of each statement."
  ],

  syntaxExplanationTamil: [
    "print() என்பது Python-இல் Output-ஐ திரையில் காட்ட பயன்படும் Built-in Function ஆகும்.",
    "காட்ட வேண்டிய Text, Quotation Marks-க்குள் எழுதப்படுகிறது.",
    "Parentheses () மூலம் print() Function-க்கு Message அனுப்பப்படுகிறது.",
    "Python Program-ல் Statements மேலிருந்து கீழாக (Top to Bottom) இயக்கப்படுகின்றன.",
    "Python-ல் ஒவ்வொரு Statement-ன் முடிவிலும் Semicolon (;) எழுத வேண்டிய அவசியமில்லை."
  ],

  exampleProgram: `print("Welcome to Alaporan Tamilan!")

print("Python Programming")

print("Created by Deepak")`,

  programExplanationEnglish: [
    "Line 1: print() displays the welcome message 'Welcome to Alaporan Tamilan!' on the screen.",
    "Line 3: print() displays the text 'Python Programming'.",
    "Line 5: print() displays the text 'Created by Deepak'.",
    "The program executes each print() statement sequentially from top to bottom.",
    "After executing all the statements, the program terminates successfully."
  ],

  programExplanationTamil: [
    "வரி 1: print() மூலம் 'Welcome to Alaporan Tamilan!' என்ற வரவேற்பு செய்தி திரையில் காட்டப்படுகிறது.",
    "வரி 3: print() மூலம் 'Python Programming' என்ற வாசகம் திரையில் காட்டப்படுகிறது.",
    "வரி 5: print() மூலம் 'Created by Deepak' என்ற வாசகம் திரையில் காட்டப்படுகிறது.",
    "Program-ல் உள்ள அனைத்து print() Statements-மும் மேலிருந்து கீழாக ஒன்றன் பின் ஒன்றாக இயக்கப்படுகின்றன.",
    "அனைத்து Statements-மும் இயக்கப்பட்ட பிறகு Program வெற்றிகரமாக முடிவடைகிறது."
  ],

  output: `Welcome to Alaporan Tamilan!
Python Programming
Created by Deepak`,

  locked: false,

  completed: false,
},
{
  id: 2,

  title: "Variables",

  englishDefinition:
    "A Variable is a named memory location used to store data in a program. The value stored in a variable can be changed during program execution. Unlike many programming languages, Python automatically determines the data type of a variable based on the value assigned to it.",

  tamilDefinition:
    "Variable என்பது Program-ல் Data-வை சேமிக்க பயன்படுத்தப்படும் பெயரிடப்பட்ட (Named) Memory Location ஆகும். Program இயங்கும் போது Variable-ல் உள்ள மதிப்பை மாற்றலாம். மற்ற பல Programming Languages-ஐ விட Python-ல் Variable-ன் Data Type-ஐ தனியாக குறிப்பிட தேவையில்லை. Assign செய்யப்படும் Value-ஐ வைத்து Python தானாகவே Data Type-ஐ கண்டறிகிறது.",

  realWorldUsage:
    "Variables are used in every software application. For example, an online shopping website stores the customer's name, total bill amount, and delivery address in variables. Similarly, a college management system stores a student's name, roll number, and marks using variables.",

  realWorldUsageTamil:
    "Variables அனைத்து Software Applications-லிலும் பயன்படுத்தப்படுகின்றன. உதாரணமாக, Online Shopping Website-ல் Customer Name, Total Bill Amount மற்றும் Delivery Address ஆகியவை Variables-ல் சேமிக்கப்படுகின்றன. அதேபோல் College Management System-ல் Student Name, Roll Number மற்றும் Marks போன்ற தகவல்கள் Variables மூலம் சேமிக்கப்படுகின்றன.",

  syntax: `variableName = value

name = "Deepak"
age = 20`,

  syntaxExplanationEnglish: [
    "variableName is the name used to identify the stored data.",
    "The assignment operator (=) assigns a value to the variable.",
    "Python automatically identifies the data type of the assigned value.",
    "String values are written inside quotation marks.",
    "Variable names should be meaningful and easy to understand."
  ],

  syntaxExplanationTamil: [
    "variableName என்பது Data-வை அடையாளம் காண பயன்படுத்தப்படும் பெயராகும்.",
    "Assignment Operator (=) மூலம் Variable-க்கு Value வழங்கப்படுகிறது.",
    "Assign செய்யப்பட்ட Value-ன் அடிப்படையில் Python தானாகவே Data Type-ஐ கண்டறிகிறது.",
    "String Values எப்போதும் Quotation Marks-க்குள் எழுதப்படுகின்றன.",
    "Variable Names எளிதில் புரியும் வகையில் Meaningful ஆக இருக்க வேண்டும்."
  ],

  exampleProgram: `name = "Deepak"

college = "Alaporan Tamilan Academy"

age = 20

print("Student Name :", name)

print("College :", college)

print("Age :", age)`,

  programExplanationEnglish: [
    "Line 1: A variable named 'name' is created and assigned the value 'Deepak'.",
    "Line 3: A variable named 'college' is created and assigned the value 'Alaporan Tamilan Academy'.",
    "Line 5: A variable named 'age' is created and assigned the value 20.",
    "Line 7: print() displays the student's name stored in the variable 'name'.",
    "Line 9: print() displays the college name stored in the variable 'college'.",
    "Line 11: print() displays the age stored in the variable 'age'.",
    "The program reads the values from the variables and displays them on the screen."
  ],

  programExplanationTamil: [
    "வரி 1: 'name' என்ற Variable உருவாக்கப்பட்டு அதில் 'Deepak' என்ற Value சேமிக்கப்படுகிறது.",
    "வரி 3: 'college' என்ற Variable உருவாக்கப்பட்டு 'Alaporan Tamilan Academy' என்ற Value சேமிக்கப்படுகிறது.",
    "வரி 5: 'age' என்ற Variable உருவாக்கப்பட்டு 20 என்ற Value சேமிக்கப்படுகிறது.",
    "வரி 7: print() மூலம் 'name' Variable-ல் உள்ள Student Name திரையில் காட்டப்படுகிறது.",
    "வரி 9: print() மூலம் 'college' Variable-ல் உள்ள College Name திரையில் காட்டப்படுகிறது.",
    "வரி 11: print() மூலம் 'age' Variable-ல் உள்ள வயது திரையில் காட்டப்படுகிறது.",
    "Program, Variables-ல் சேமிக்கப்பட்டுள்ள Values-ஐ படித்து திரையில் காட்டுகிறது."
  ],

  output: `Student Name : Deepak
College : Alaporan Tamilan Academy
Age : 20`,

  locked: false,

  completed: false,
},

];

export default topics;