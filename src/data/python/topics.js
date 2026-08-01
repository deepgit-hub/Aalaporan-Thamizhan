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
{
  id: 3,

  title: "Data Types",

  englishDefinition:
    "A Data Type specifies the type of data that a variable can store. Python automatically determines the data type based on the value assigned to the variable. Some of the most commonly used data types in Python are int, float, str, and bool.",

  tamilDefinition:
    "Data Type என்பது ஒரு Variable எந்த வகையான Data-வை சேமிக்கிறது என்பதை குறிக்கிறது. Python-ல் Variable-க்கு வழங்கப்படும் Value-ஐ அடிப்படையாகக் கொண்டு Data Type தானாகவே (Automatically) கண்டறியப்படுகிறது. Python-ல் அதிகமாக பயன்படுத்தப்படும் Data Types-ல் int, float, str மற்றும் bool ஆகியவை முக்கியமானவை.",

  realWorldUsage:
    "Data Types are used in every software application. For example, a student's age is stored as an integer (int), CGPA as a float, name as a string (str), and attendance status as a boolean (bool).",

  realWorldUsageTamil:
    "Data Types அனைத்து Software Applications-லிலும் பயன்படுத்தப்படுகின்றன. உதாரணமாக, மாணவரின் வயது Integer (int), CGPA Float, பெயர் String (str), மற்றும் Attendance Status Boolean (bool) ஆக சேமிக்கப்படுகிறது.",

  syntax: `age = 20

cgpa = 8.75

name = "Deepak"

isStudent = True`,

  syntaxExplanationEnglish: [
    "Python automatically determines the data type from the assigned value.",
    "int is used to store whole numbers.",
    "float is used to store decimal numbers.",
    "str is used to store text values.",
    "bool is used to store either True or False."
  ],

  syntaxExplanationTamil: [
    "Assign செய்யப்பட்ட Value-ஐ வைத்து Python தானாகவே Data Type-ஐ கண்டறிகிறது.",
    "int என்பது முழு எண்களை (Whole Numbers) சேமிக்க பயன்படுகிறது.",
    "float என்பது Decimal Numbers-ஐ சேமிக்க பயன்படுகிறது.",
    "str என்பது Text அல்லது Characters-ஐ சேமிக்க பயன்படுகிறது.",
    "bool என்பது True அல்லது False ஆகிய Logical Values-ஐ சேமிக்க பயன்படுகிறது."
  ],

  exampleProgram: `age = 20

cgpa = 8.75

name = "Deepak"

isStudent = True

print("Age :", age)

print("CGPA :", cgpa)

print("Name :", name)

print("Student :", isStudent)`,

  programExplanationEnglish: [
    "Line 1: A variable named 'age' is created and stores the integer value 20.",
    "Line 3: A variable named 'cgpa' is created and stores the float value 8.75.",
    "Line 5: A variable named 'name' is created and stores the string value 'Deepak'.",
    "Line 7: A variable named 'isStudent' is created and stores the boolean value True.",
    "Line 9: print() displays the integer value stored in 'age'.",
    "Line 11: print() displays the float value stored in 'cgpa'.",
    "Line 13: print() displays the string value stored in 'name'.",
    "Line 15: print() displays the boolean value stored in 'isStudent'.",
    "The program displays variables of different data types on the screen."
  ],

  programExplanationTamil: [
    "வரி 1: 'age' என்ற Variable உருவாக்கப்பட்டு அதில் Integer Value 20 சேமிக்கப்படுகிறது.",
    "வரி 3: 'cgpa' என்ற Variable உருவாக்கப்பட்டு அதில் Float Value 8.75 சேமிக்கப்படுகிறது.",
    "வரி 5: 'name' என்ற Variable உருவாக்கப்பட்டு அதில் String Value 'Deepak' சேமிக்கப்படுகிறது.",
    "வரி 7: 'isStudent' என்ற Variable உருவாக்கப்பட்டு அதில் Boolean Value True சேமிக்கப்படுகிறது.",
    "வரி 9: print() மூலம் 'age' Variable-ல் உள்ள Integer Value திரையில் காட்டப்படுகிறது.",
    "வரி 11: print() மூலம் 'cgpa' Variable-ல் உள்ள Float Value திரையில் காட்டப்படுகிறது.",
    "வரி 13: print() மூலம் 'name' Variable-ல் உள்ள String Value திரையில் காட்டப்படுகிறது.",
    "வரி 15: print() மூலம் 'isStudent' Variable-ல் உள்ள Boolean Value திரையில் காட்டப்படுகிறது.",
    "Program, வெவ்வேறு Data Types-ல் உள்ள Values-ஐ திரையில் காட்டுகிறது."
  ],

  output: `Age : 20
CGPA : 8.75
Name : Deepak
Student : True`,

  locked: false,

  completed: false,
},
{
  id: 4,

  title: "Input and Output",

  englishDefinition:
    "Input and Output are fundamental operations in Python programming. Input allows the user to provide data to a program, while Output displays the processed information on the screen. Python uses the input() function to receive input and the print() function to display output.",

  tamilDefinition:
    "Input மற்றும் Output என்பது Python Programming-இன் அடிப்படை செயல்பாடுகளாகும். Input மூலம் பயனர் Program-க்கு தேவையான தகவல்களை வழங்குகிறார். Output மூலம் Program செயல்படுத்திய முடிவுகள் திரையில் காட்டப்படுகின்றன. Python-ல் Input பெற input() Function மற்றும் Output காட்ட print() Function பயன்படுத்தப்படுகிறது.",

  realWorldUsage:
    "Input and Output are used in every software application. For example, a login page accepts the user's username and password as input, while the welcome message or login status is displayed as output. Similarly, ATM machines receive the PIN as input and display the account balance as output.",

  realWorldUsageTamil:
    "Input மற்றும் Output அனைத்து Software Applications-லிலும் பயன்படுத்தப்படுகின்றன. உதாரணமாக, Login Page-ல் Username மற்றும் Password Input ஆக பெறப்படுகிறது. பின்னர் Welcome Message அல்லது Login Status Output ஆக காட்டப்படுகிறது. அதேபோல் ATM-ல் PIN Input ஆக பெறப்பட்டு Account Balance Output ஆக காட்டப்படுகிறது.",

  syntax: `name = input("Enter your name: ")

print(name)`,

  syntaxExplanationEnglish: [
    "input() is a built-in Python function used to receive input from the user.",
    "The message inside input() is called a prompt and guides the user.",
    "The entered value is stored in a variable.",
    "print() is used to display the value stored in the variable.",
    "By default, input() returns the entered value as a string."
  ],

  syntaxExplanationTamil: [
    "input() என்பது பயனரிடமிருந்து தகவல்களை பெற பயன்படுத்தப்படும் Built-in Function ஆகும்.",
    "input() Function-க்குள் எழுதப்படும் Message Prompt எனப்படும். இது பயனருக்கு வழிகாட்டுகிறது.",
    "பயனர் உள்ளிடும் தகவல் ஒரு Variable-ல் சேமிக்கப்படுகிறது.",
    "print() மூலம் Variable-ல் உள்ள தகவல் திரையில் காட்டப்படுகிறது.",
    "இயல்பாக (Default), input() Function பெறும் Value String ஆக சேமிக்கப்படுகிறது."
  ],

  exampleProgram: `name = input("Enter your name: ")

college = input("Enter your college: ")

print()

print("Welcome", name)

print("College :", college)

print("Keep Learning with Alaporan Thamizhan!")`,

  programExplanationEnglish: [
    "Line 1: input() asks the user to enter their name and stores it in the variable 'name'.",
    "Line 3: input() asks the user to enter their college name and stores it in the variable 'college'.",
    "Line 5: print() displays a blank line to improve the readability of the output.",
    "Line 7: print() displays a welcome message along with the user's name.",
    "Line 9: print() displays the college name entered by the user.",
    "Line 11: print() displays the motivational message 'Keep Learning with Alaporan Thamizhan!'.",
    "The program receives input from the user and displays the entered information on the screen."
  ],

  programExplanationTamil: [
    "வரி 1: input() மூலம் பயனரின் பெயர் பெறப்பட்டு 'name' என்ற Variable-ல் சேமிக்கப்படுகிறது.",
    "வரி 3: input() மூலம் பயனரின் College Name பெறப்பட்டு 'college' என்ற Variable-ல் சேமிக்கப்படுகிறது.",
    "வரி 5: print() மூலம் ஒரு காலி வரி (Blank Line) காட்டப்பட்டு Output படிக்க எளிதாக மாற்றப்படுகிறது.",
    "வரி 7: print() மூலம் பயனரின் பெயருடன் Welcome Message திரையில் காட்டப்படுகிறது.",
    "வரி 9: print() மூலம் பயனர் உள்ளிட்ட College Name திரையில் காட்டப்படுகிறது.",
    "வரி 11: print() மூலம் 'Keep Learning with Alaporan Thamizhan!' என்ற ஊக்கமளிக்கும் செய்தி திரையில் காட்டப்படுகிறது.",
    "Program, பயனரிடமிருந்து Input பெற்று, அந்த தகவல்களை Output ஆக திரையில் காட்டுகிறது."
  ],

  output: `Enter your name: Deepak
Enter your college: Don Bosco College

Welcome Deepak
College : Don Bosco College
Keep Learning with Alaporan Thamizhan!`,

  locked: false,

  completed: false,
},
{
  id: 5,

  title: "Operators",

  englishDefinition:
    "Operators are special symbols used to perform operations on variables and values. Python provides different types of operators such as Arithmetic, Comparison, Logical, Assignment, and Membership Operators. They help perform calculations, comparisons, and decision-making in programs.",

  tamilDefinition:
    "Operators என்பது Variables மற்றும் Values மீது பல்வேறு செயல்பாடுகளை செய்ய பயன்படும் சிறப்பு குறியீடுகள் (Special Symbols) ஆகும். Python-ல் Arithmetic, Comparison, Logical, Assignment மற்றும் Membership போன்ற பல வகையான Operators உள்ளன. இவை கணக்கீடுகள், ஒப்பீடுகள் மற்றும் முடிவெடுக்கும் செயல்பாடுகளுக்கு பயன்படுத்தப்படுகின்றன.",

  realWorldUsage:
    "Operators are used in every software application. For example, an online shopping website uses arithmetic operators to calculate the total bill, comparison operators to check discounts, and logical operators to verify multiple conditions before processing an order.",

  realWorldUsageTamil:
    "Operators அனைத்து Software Applications-லிலும் பயன்படுத்தப்படுகின்றன. உதாரணமாக, Online Shopping Website-ல் மொத்த Bill-ஐ கணக்கிட Arithmetic Operators, Discount வழங்க Comparison Operators மற்றும் Order Process செய்வதற்கு முன் பல நிபந்தனைகளை சரிபார்க்க Logical Operators பயன்படுத்தப்படுகின்றன.",

  syntax: `a = 20

b = 10

print(a + b)

print(a > b)

print(a == b)`,

  syntaxExplanationEnglish: [
    "Variables 'a' and 'b' store numeric values.",
    "The '+' operator performs addition.",
    "The '>' operator compares whether the first value is greater than the second value.",
    "The '==' operator checks whether two values are equal.",
    "Python evaluates the expression first and then displays the result using print()."
  ],

  syntaxExplanationTamil: [
    "'a' மற்றும் 'b' Variables எண் மதிப்புகளை (Numeric Values) சேமிக்கின்றன.",
    "'+' Operator இரண்டு எண்களை கூட்ட பயன்படுகிறது.",
    "'>' Operator முதல் மதிப்பு இரண்டாவது மதிப்பை விட பெரியதா என்பதை சரிபார்க்கிறது.",
    "'==' Operator இரண்டு மதிப்புகளும் சமமா என்பதை சரிபார்க்கிறது.",
    "Python முதலில் Expression-ஐ Evaluate செய்து பின்னர் print() மூலம் முடிவை திரையில் காட்டுகிறது."
  ],

  exampleProgram: `python_course_fee = 2500

discount = 500

final_fee = python_course_fee - discount

print("Original Fee :", python_course_fee)

print("Discount :", discount)

print("Final Fee :", final_fee)

print("Is Final Fee less than Original Fee?", final_fee < python_course_fee)`,

  programExplanationEnglish: [
    "Line 1: A variable named 'python_course_fee' is created and assigned the value 2500.",
    "Line 3: A variable named 'discount' is created and assigned the value 500.",
    "Line 5: The subtraction operator (-) calculates the final fee after discount and stores it in 'final_fee'.",
    "Line 7: print() displays the original course fee.",
    "Line 9: print() displays the discount amount.",
    "Line 11: print() displays the final course fee after applying the discount.",
    "Line 13: The comparison operator (<) checks whether the final fee is less than the original fee and displays the result.",
    "The program demonstrates both arithmetic and comparison operators."
  ],

  programExplanationTamil: [
    "வரி 1: 'python_course_fee' என்ற Variable உருவாக்கப்பட்டு அதில் 2500 என்ற மதிப்பு சேமிக்கப்படுகிறது.",
    "வரி 3: 'discount' என்ற Variable உருவாக்கப்பட்டு அதில் 500 என்ற மதிப்பு சேமிக்கப்படுகிறது.",
    "வரி 5: கழித்தல் Operator (-) பயன்படுத்தி Discount கழிக்கப்பட்ட Final Fee 'final_fee' என்ற Variable-ல் சேமிக்கப்படுகிறது.",
    "வரி 7: print() மூலம் Original Course Fee திரையில் காட்டப்படுகிறது.",
    "வரி 9: print() மூலம் Discount Amount திரையில் காட்டப்படுகிறது.",
    "வரி 11: print() மூலம் Discount கழித்த பிறகான Final Fee திரையில் காட்டப்படுகிறது.",
    "வரி 13: Comparison Operator (<) பயன்படுத்தி Final Fee, Original Fee-ஐ விட குறைவா என்பதை சரிபார்த்து முடிவை காட்டுகிறது.",
    "இந்த Program Arithmetic மற்றும் Comparison Operators பயன்பாட்டை விளக்குகிறது."
  ],

  output: `Original Fee : 2500
Discount : 500
Final Fee : 2000
Is Final Fee less than Original Fee? True`,

  locked: false,

  completed: false,
},
{
  id: 6,

  title: "If Statement",

  englishDefinition:
    "An If Statement is a decision-making statement used to execute a block of code only when a specified condition is True. If the condition is False, the statements inside the if block are skipped.",

  tamilDefinition:
    "If Statement என்பது ஒரு Decision-Making Statement ஆகும். கொடுக்கப்பட்டுள்ள Condition உண்மையாக (True) இருந்தால் மட்டுமே அதன் உள்ளே உள்ள Statements இயக்கப்படும். Condition False ஆக இருந்தால் அந்த Statements இயக்கப்படாது.",

  realWorldUsage:
    "If Statements are used in every software application. For example, an ATM allows cash withdrawal only if the entered PIN is correct. Similarly, an online shopping website applies a discount only if the purchase amount satisfies the required condition.",

  realWorldUsageTamil:
    "If Statement அனைத்து Software Applications-லிலும் பயன்படுத்தப்படுகிறது. உதாரணமாக, ATM-ல் சரியான PIN கொடுக்கப்பட்டால் மட்டுமே பணம் எடுக்க அனுமதிக்கப்படும். அதேபோல் Online Shopping Website-ல் குறிப்பிட்ட தொகைக்கு மேல் வாங்கினால் மட்டுமே Discount வழங்கப்படும்.",

  syntax: `if condition:
    # Statements`,

  syntaxExplanationEnglish: [
    "The 'if' keyword is used to make decisions.",
    "The condition is written after the 'if' keyword.",
    "A colon (:) must be placed at the end of the condition.",
    "The statements inside the if block must be properly indented.",
    "The statements execute only if the condition evaluates to True."
  ],

  syntaxExplanationTamil: [
    "'if' Keyword முடிவெடுக்கும் செயல்பாட்டிற்கு பயன்படுத்தப்படுகிறது.",
    "'if' Keyword-க்கு பிறகு Condition எழுதப்படுகிறது.",
    "Condition-ன் முடிவில் Colon (:) கட்டாயமாக இட வேண்டும்.",
    "if Block-க்குள் உள்ள Statements சரியான Indentation-உடன் எழுதப்பட வேண்டும்.",
    "Condition True ஆக இருந்தால் மட்டுமே அந்த Statements இயக்கப்படும்."
  ],

  exampleProgram: `python_marks = 95

if python_marks >= 50:
    print("Congratulations Deepak!")

    print("You Passed the Python Exam.")

print("Keep Learning with Alaporan Thamizhan!")`,

  programExplanationEnglish: [
    "Line 1: A variable named 'python_marks' is created and assigned the value 95.",
    "Line 3: The if statement checks whether the value of 'python_marks' is greater than or equal to 50.",
    "Line 4: Since the condition is True, the first print() statement is executed.",
    "Line 6: The second print() statement inside the if block is also executed.",
    "Line 8: This print() statement is outside the if block, so it always executes.",
    "The program demonstrates how an if statement executes code only when the condition is True."
  ],

  programExplanationTamil: [
    "வரி 1: 'python_marks' என்ற Variable உருவாக்கப்பட்டு அதில் 95 என்ற மதிப்பு சேமிக்கப்படுகிறது.",
    "வரி 3: if Statement, 'python_marks' 50 அல்லது அதற்கு மேல் உள்ளதா என்பதை சரிபார்க்கிறது.",
    "வரி 4: Condition True என்பதால் முதல் print() Statement இயக்கப்படுகிறது.",
    "வரி 6: if Block-க்குள் உள்ள இரண்டாவது print() Statement-மும் இயக்கப்படுகிறது.",
    "வரி 8: இந்த print() Statement if Block-க்கு வெளியே இருப்பதால் எப்போதும் இயக்கப்படும்.",
    "இந்த Program, Condition True ஆக இருக்கும் போது மட்டும் if Block இயங்குவதை விளக்குகிறது."
  ],

  output: `Congratulations Deepak!
You Passed the Python Exam.
Keep Learning with Alaporan Thamizhan!`,

  locked: false,

  completed: false,
},

];

export default topics;