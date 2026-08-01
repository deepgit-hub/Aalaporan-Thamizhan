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
{
  id: 7,

  title: "If-Else Statement",

  englishDefinition:
    "An If-Else Statement is a decision-making statement used to execute one block of code when a condition is True and another block of code when the condition is False. It helps a program choose between two possible actions.",

  tamilDefinition:
    "If-Else Statement என்பது ஒரு Decision-Making Statement ஆகும். கொடுக்கப்பட்டுள்ள Condition True ஆக இருந்தால் ஒரு Block இயக்கப்படும். Condition False ஆக இருந்தால் மற்றொரு Block இயக்கப்படும். இதன் மூலம் Program இரண்டு செயல்களில் ஒன்றை தேர்வு செய்ய முடியும்.",

  realWorldUsage:
    "If-Else Statements are widely used in software applications. For example, a login system displays 'Login Successful' if the username and password are correct; otherwise, it displays 'Invalid Credentials'. Similarly, an online exam portal displays 'Pass' or 'Fail' based on the student's marks.",

  realWorldUsageTamil:
    "If-Else Statement அனைத்து Software Applications-லிலும் அதிகமாக பயன்படுத்தப்படுகிறது. உதாரணமாக, Login System-ல் சரியான Username மற்றும் Password கொடுக்கப்பட்டால் 'Login Successful' என்று காட்டப்படும். இல்லையெனில் 'Invalid Credentials' என்று காட்டப்படும். அதேபோல் Online Exam Portal-ல் மாணவரின் மதிப்பெண்ணைப் பொறுத்து 'Pass' அல்லது 'Fail' என்று காட்டப்படுகிறது.",

  syntax: `if condition:
    # Statements if condition is True
else:
    # Statements if condition is False`,

  syntaxExplanationEnglish: [
    "The 'if' keyword checks the specified condition.",
    "If the condition is True, the statements inside the if block are executed.",
    "If the condition is False, the statements inside the else block are executed.",
    "A colon (:) must be placed after both the if and else statements.",
    "Proper indentation is mandatory for both blocks."
  ],

  syntaxExplanationTamil: [
    "'if' Keyword கொடுக்கப்பட்டுள்ள Condition-ஐ சரிபார்க்கிறது.",
    "Condition True ஆக இருந்தால் if Block-க்குள் உள்ள Statements இயக்கப்படும்.",
    "Condition False ஆக இருந்தால் else Block-க்குள் உள்ள Statements இயக்கப்படும்.",
    "if மற்றும் else Statements-ன் முடிவில் Colon (:) கட்டாயமாக இட வேண்டும்.",
    "இரண்டு Blocks-க்கும் சரியான Indentation அவசியம்."
  ],

  exampleProgram: `python_marks = 42

if python_marks >= 50:
    print("Congratulations Deepak!")

    print("You Passed the Python Exam.")
else:
    print("Don't Give Up Deepak!")

    print("Practice More and Try Again.")

print("Keep Learning with Alaporan Thamizhan!")`,

  programExplanationEnglish: [
    "Line 1: A variable named 'python_marks' is created and assigned the value 42.",
    "Line 3: The if statement checks whether 'python_marks' is greater than or equal to 50.",
    "Line 4-6: These statements execute only if the condition is True.",
    "Line 7: The else block begins.",
    "Line 8-10: Since the condition is False, these statements are executed.",
    "Line 12: This print() statement is outside the if-else block, so it always executes.",
    "The program demonstrates how if-else selects one of two possible execution paths."
  ],

  programExplanationTamil: [
    "வரி 1: 'python_marks' என்ற Variable உருவாக்கப்பட்டு அதில் 42 என்ற மதிப்பு சேமிக்கப்படுகிறது.",
    "வரி 3: if Statement, 'python_marks' 50 அல்லது அதற்கு மேல் உள்ளதா என்பதை சரிபார்க்கிறது.",
    "வரி 4-6: Condition True ஆக இருந்தால் மட்டுமே இந்த Statements இயக்கப்படும்.",
    "வரி 7: else Block தொடங்குகிறது.",
    "வரி 8-10: Condition False என்பதால் இந்த Statements இயக்கப்படுகின்றன.",
    "வரி 12: இந்த print() Statement if-else Block-க்கு வெளியே இருப்பதால் எப்போதும் இயக்கப்படும்.",
    "இந்த Program, Condition-ஐ பொறுத்து if அல்லது else Block-ல் ஒன்றை மட்டும் இயக்குவதை விளக்குகிறது."
  ],

  output: `Don't Give Up Deepak!
Practice More and Try Again.
Keep Learning with Alaporan Thamizhan!`,

  locked: false,

  completed: false,
},
{
  id: 8,

  title: "Nested If Statement",

  englishDefinition:
    "A Nested If Statement is an if statement placed inside another if statement. The inner if statement is executed only if the outer if condition is True. It is used when multiple conditions need to be checked one after another.",

  tamilDefinition:
    "Nested If Statement என்பது ஒரு if Statement-க்குள் மற்றொரு if Statement இருப்பதாகும். வெளிப்புற (Outer) if Condition True ஆக இருந்தால் மட்டுமே உள்ளே இருக்கும் (Inner) if Statement இயக்கப்படும். பல நிபந்தனைகளை (Conditions) ஒன்றன் பின் ஒன்றாக சரிபார்க்க இது பயன்படுத்தப்படுகிறது.",

  realWorldUsage:
    "Nested If Statements are commonly used in software applications. For example, a college portal first checks whether a student has logged in successfully. If the login is successful, it then checks whether the student has paid the examination fee before allowing hall ticket download.",

  realWorldUsageTamil:
    "Nested If Statement பல Software Applications-லிலும் பயன்படுத்தப்படுகிறது. உதாரணமாக, College Portal முதலில் மாணவர் Login செய்துள்ளாரா என்பதை சரிபார்க்கும். Login வெற்றிகரமாக இருந்தால், மாணவர் Examination Fee செலுத்தியுள்ளாரா என்பதை சரிபார்த்து Hall Ticket Download செய்ய அனுமதிக்கும்.",

  syntax: `if condition1:
    if condition2:
        # Statements`,

  syntaxExplanationEnglish: [
    "The outer if statement checks the first condition.",
    "The inner if statement is executed only if the outer condition is True.",
    "Each if statement must end with a colon (:).",
    "Proper indentation is required for every block.",
    "Nested If Statements help check multiple conditions step by step."
  ],

  syntaxExplanationTamil: [
    "வெளிப்புற (Outer) if Statement முதல் Condition-ஐ சரிபார்க்கிறது.",
    "Outer Condition True ஆக இருந்தால் மட்டுமே Inner if Statement இயக்கப்படும்.",
    "ஒவ்வொரு if Statement-ன் முடிவிலும் Colon (:) கட்டாயமாக இட வேண்டும்.",
    "ஒவ்வொரு Block-க்கும் சரியான Indentation அவசியம்.",
    "Nested If Statement பல Conditions-ஐ படிப்படியாக (Step by Step) சரிபார்க்க உதவுகிறது."
  ],

  exampleProgram: `logged_in = True

fee_paid = True

if logged_in:
    print("Login Successful")

    if fee_paid:
        print("Hall Ticket Download Allowed")

print("Welcome to Alaporan Thamizhan!")`,

  programExplanationEnglish: [
    "Line 1: A variable named 'logged_in' is created and assigned the value True.",
    "Line 3: A variable named 'fee_paid' is created and assigned the value True.",
    "Line 5: The outer if statement checks whether the student has logged in successfully.",
    "Line 6: Since the condition is True, 'Login Successful' is displayed.",
    "Line 8: The inner if statement checks whether the examination fee has been paid.",
    "Line 9: Since this condition is also True, 'Hall Ticket Download Allowed' is displayed.",
    "Line 11: This print() statement is outside the Nested If block, so it always executes.",
    "The program demonstrates how one condition is checked only after another condition becomes True."
  ],

  programExplanationTamil: [
    "வரி 1: 'logged_in' என்ற Variable உருவாக்கப்பட்டு அதில் True என்ற மதிப்பு சேமிக்கப்படுகிறது.",
    "வரி 3: 'fee_paid' என்ற Variable உருவாக்கப்பட்டு அதில் True என்ற மதிப்பு சேமிக்கப்படுகிறது.",
    "வரி 5: வெளிப்புற if Statement, மாணவர் Login செய்துள்ளாரா என்பதை சரிபார்க்கிறது.",
    "வரி 6: Condition True என்பதால் 'Login Successful' என்ற செய்தி காட்டப்படுகிறது.",
    "வரி 8: உள்ளே இருக்கும் if Statement, Examination Fee செலுத்தப்பட்டுள்ளதா என்பதை சரிபார்க்கிறது.",
    "வரி 9: இந்த Condition-மும் True என்பதால் 'Hall Ticket Download Allowed' என்ற செய்தி காட்டப்படுகிறது.",
    "வரி 11: இந்த print() Statement Nested If Block-க்கு வெளியே இருப்பதால் எப்போதும் இயக்கப்படும்.",
    "இந்த Program, முதல் Condition True ஆன பிறகே இரண்டாவது Condition சரிபார்க்கப்படுவதை விளக்குகிறது."
  ],

  output: `Login Successful
Hall Ticket Download Allowed
Welcome to Alaporan Thamizhan!`,

  locked: false,

  completed: false,
},
{
  id: 9,

  title: "Type Casting",

  englishDefinition:
    "Type Casting is the process of converting one data type into another. In Python, functions like int(), float(), str(), and bool() are used to convert values from one data type to another. Type Casting is commonly used when taking input from users because input() always returns a string.",

  tamilDefinition:
    "Type Casting என்பது ஒரு Data Type-ல் உள்ள Value-ஐ மற்றொரு Data Type-ஆக மாற்றும் செயல்முறையாகும். Python-ல் int(), float(), str(), மற்றும் bool() போன்ற Functions பயன்படுத்தி Data Types மாற்றப்படுகின்றன. குறிப்பாக input() Function எப்போதும் String-ஆக Value-ஐ Return செய்வதால் Type Casting அதிகமாக பயன்படுத்தப்படுகிறது.",

  realWorldUsage:
    "Type Casting is used in almost every Python application. For example, when a user enters their age on a registration form, the value is received as a string. It must be converted into an integer before performing calculations or checking eligibility.",

  realWorldUsageTamil:
    "Type Casting அனைத்து Python Applications-லிலும் பயன்படுத்தப்படுகிறது. உதாரணமாக, Registration Form-ல் பயனர் தனது வயதை உள்ளிடும்போது அது String ஆக பெறப்படுகிறது. பின்னர் கணக்கீடுகள் செய்வதற்கும் அல்லது Eligibility சரிபார்ப்பதற்கும் அது Integer ஆக மாற்றப்படுகிறது.",

  syntax: `number = int(input("Enter a number: "))

price = float(input("Enter price: "))

name = str(100)

status = bool(1)`,

  syntaxExplanationEnglish: [
    "int() converts a value into an integer.",
    "float() converts a value into a decimal number.",
    "str() converts a value into a string.",
    "bool() converts a value into either True or False.",
    "Type Casting is mainly used after receiving user input."
  ],

  syntaxExplanationTamil: [
    "int() ஒரு Value-ஐ Integer ஆக மாற்றுகிறது.",
    "float() ஒரு Value-ஐ Decimal Number ஆக மாற்றுகிறது.",
    "str() ஒரு Value-ஐ String ஆக மாற்றுகிறது.",
    "bool() ஒரு Value-ஐ True அல்லது False ஆக மாற்றுகிறது.",
    "Type Casting பெரும்பாலும் User Input பெற்ற பிறகு பயன்படுத்தப்படுகிறது."
  ],

  exampleProgram: `age = int(input("Enter your age: "))

next_age = age + 1

print()

print("Current Age :", age)

print("Next Year Age :", next_age)

print("Keep Learning with Alaporan Thamizhan!")`,

  programExplanationEnglish: [
    "Line 1: input() receives the user's age as a string and int() converts it into an integer.",
    "Line 3: The value of 'age' is increased by 1 and stored in the variable 'next_age'.",
    "Line 5: print() displays a blank line for better readability.",
    "Line 7: print() displays the current age entered by the user.",
    "Line 9: print() displays the age for the next year.",
    "Line 11: print() displays a motivational message.",
    "The program demonstrates how Type Casting allows mathematical operations on user input."
  ],

  programExplanationTamil: [
    "வரி 1: input() மூலம் பெறப்பட்ட வயது முதலில் String ஆக இருக்கும். int() பயன்படுத்தி அது Integer ஆக மாற்றப்படுகிறது.",
    "வரி 3: 'age' Variable-ன் மதிப்புடன் 1 சேர்த்து 'next_age' என்ற Variable-ல் சேமிக்கப்படுகிறது.",
    "வரி 5: print() மூலம் ஒரு காலி வரி (Blank Line) காட்டப்படுகிறது.",
    "வரி 7: print() மூலம் பயனர் உள்ளிட்ட தற்போதைய வயது திரையில் காட்டப்படுகிறது.",
    "வரி 9: print() மூலம் அடுத்த வருட வயது திரையில் காட்டப்படுகிறது.",
    "வரி 11: print() மூலம் ஊக்கமளிக்கும் செய்தி திரையில் காட்டப்படுகிறது.",
    "இந்த Program, Type Casting பயன்படுத்தி User Input-ஐ கணக்கீட்டிற்கு பயன்படுத்துவது எப்படி என்பதை விளக்குகிறது."
  ],

  output: `Enter your age: 20

Current Age : 20
Next Year Age : 21
Keep Learning with Alaporan Thamizhan!`,

  locked: false,

  completed: false,
},
{
  id: 10,

  title: "Match-Case Statement",

  englishDefinition:
    "The Match-Case Statement is a decision-making statement introduced in Python 3.10. It allows a program to compare a value against multiple cases and execute the matching block of code. It works similarly to the Switch Statement in languages like C++ and Java.",

  tamilDefinition:
    "Match-Case Statement என்பது Python 3.10-ல் அறிமுகப்படுத்தப்பட்ட ஒரு Decision-Making Statement ஆகும். இது ஒரு Value-ஐ பல்வேறு Cases-உடன் ஒப்பிட்டு, பொருந்தும் (Matching) Case-ன் Code Block-ஐ இயக்குகிறது. இது C++ மற்றும் Java-வில் உள்ள Switch Statement போல செயல்படுகிறது.",

  realWorldUsage:
    "Match-Case Statements are useful when a program needs to handle multiple options. For example, an ATM system can display different services based on the user's choice, or a restaurant ordering system can display different menus based on the selected category.",

  realWorldUsageTamil:
    "Match-Case Statement ஒரு Program பல்வேறு தேர்வுகளை (Options) கையாள வேண்டிய சூழலில் பயன்படுத்தப்படுகிறது. உதாரணமாக, ATM-ல் பயனர் தேர்வு செய்யும் Option-ஐ பொறுத்து சேவைகள் காட்டப்படுகின்றன. அதேபோல் Restaurant Ordering System-ல் தேர்வு செய்யப்பட்ட Category-க்கு ஏற்ப Menu காட்டப்படுகிறது.",

  syntax: `match variable:
    case value1:
        # Statements

    case value2:
        # Statements

    case _:
        # Default Statements`,

  syntaxExplanationEnglish: [
    "The 'match' keyword specifies the value to be checked.",
    "Each 'case' represents one possible value.",
    "The statements inside the matching case are executed.",
    "The underscore (_) acts as the default case when no match is found.",
    "Proper indentation is required for every case block."
  ],

  syntaxExplanationTamil: [
    "'match' Keyword எந்த Value-ஐ சரிபார்க்க வேண்டும் என்பதை குறிப்பிடுகிறது.",
    "ஒவ்வொரு 'case' ஒரு சாத்தியமான Value-ஐ குறிக்கிறது.",
    "பொருந்தும் Case-க்குள் இருக்கும் Statements மட்டும் இயக்கப்படும்.",
    "Underscore (_) என்பது Default Case ஆக செயல்படுகிறது.",
    "ஒவ்வொரு Case Block-க்கும் சரியான Indentation அவசியம்."
  ],

  exampleProgram: `day = 2

match day:
    case 1:
        print("Monday")

    case 2:
        print("Tuesday")

    case 3:
        print("Wednesday")

    case _:
        print("Invalid Day")

print("Keep Learning with Alaporan Thamizhan!")`,

  programExplanationEnglish: [
    "Line 1: A variable named 'day' is created and assigned the value 2.",
    "Line 3: The match statement checks the value of 'day'.",
    "Line 4-5: Case 1 is skipped because the value is not 1.",
    "Line 7-8: Case 2 matches the value, so 'Tuesday' is displayed.",
    "Line 10-11: Case 3 is skipped because a matching case has already been found.",
    "Line 13-14: The default case (_) is skipped because a match already exists.",
    "Line 16: print() displays the motivational message.",
    "The program demonstrates how Match-Case selects one matching block among multiple cases."
  ],

  programExplanationTamil: [
    "வரி 1: 'day' என்ற Variable உருவாக்கப்பட்டு அதில் 2 என்ற மதிப்பு சேமிக்கப்படுகிறது.",
    "வரி 3: match Statement, 'day' Variable-ன் மதிப்பை சரிபார்க்கிறது.",
    "வரி 4-5: Value 1 இல்லாததால் முதல் Case இயக்கப்படவில்லை.",
    "வரி 7-8: Value 2 பொருந்துவதால் 'Tuesday' திரையில் காட்டப்படுகிறது.",
    "வரி 10-11: ஏற்கனவே பொருந்தும் Case கிடைத்ததால் Case 3 இயக்கப்படவில்லை.",
    "வரி 13-14: பொருந்தும் Case கிடைத்ததால் Default Case (_) இயக்கப்படவில்லை.",
    "வரி 16: print() மூலம் 'Keep Learning with Alaporan Thamizhan!' என்ற செய்தி காட்டப்படுகிறது.",
    "இந்த Program, பல்வேறு Cases-ல் பொருந்தும் ஒன்றை மட்டும் Match-Case Statement எப்படி தேர்வு செய்கிறது என்பதை விளக்குகிறது."
  ],

  output: `Tuesday
Keep Learning with Alaporan Thamizhan!`,

  locked: false,

  completed: false,
},
{
  id: 11,

  title: "Ternary Operator",

  englishDefinition:
    "The Ternary Operator is a shorthand way of writing an if-else statement in Python. It allows you to assign or display a value based on a condition using a single line of code. It makes the code shorter and easier to read for simple decisions.",

  tamilDefinition:
    "Ternary Operator என்பது Python-ல் If-Else Statement-ஐ ஒரே வரியில் (Single Line) எழுத பயன்படும் ஒரு சுருக்கமான (Shorthand) முறையாகும். ஒரு Condition-ஐ அடிப்படையாகக் கொண்டு ஒரு Value-ஐ Assign செய்யவோ அல்லது Display செய்யவோ இது பயன்படுகிறது. எளிய முடிவெடுக்கும் செயல்பாடுகளில் இது Code-ஐ சுருக்கமாகவும் படிக்க எளிதாகவும் மாற்றுகிறது.",

  realWorldUsage:
    "The Ternary Operator is commonly used in software applications for simple decisions. For example, an online examination system displays 'Pass' or 'Fail' based on a student's marks. Similarly, an e-commerce website can display 'In Stock' or 'Out of Stock' depending on product availability.",

  realWorldUsageTamil:
    "Ternary Operator எளிய முடிவெடுக்கும் செயல்பாடுகளுக்கு Software Applications-ல் அதிகமாக பயன்படுத்தப்படுகிறது. உதாரணமாக, Online Examination System-ல் மாணவரின் மதிப்பெண்ணை பொறுத்து 'Pass' அல்லது 'Fail' என்று காட்டலாம். அதேபோல் E-commerce Website-ல் பொருள் கிடைக்கிறதா என்பதை பொறுத்து 'In Stock' அல்லது 'Out of Stock' என்று காட்டலாம்.",

  syntax: `result = "Value if True" if condition else "Value if False"`,

  syntaxExplanationEnglish: [
    "The condition is evaluated first.",
    "If the condition is True, the first value is selected.",
    "If the condition is False, the value after 'else' is selected.",
    "The result is stored in a variable or displayed directly.",
    "The Ternary Operator is suitable for simple if-else conditions."
  ],

  syntaxExplanationTamil: [
    "முதலில் Condition சரிபார்க்கப்படுகிறது.",
    "Condition True ஆக இருந்தால் முதல் Value தேர்வு செய்யப்படுகிறது.",
    "Condition False ஆக இருந்தால் 'else'க்கு பிறகு உள்ள Value தேர்வு செய்யப்படுகிறது.",
    "தேர்வு செய்யப்பட்ட Value ஒரு Variable-ல் சேமிக்கப்படலாம் அல்லது நேரடியாக Display செய்யப்படலாம்.",
    "எளிய If-Else Conditions-க்கு மட்டுமே Ternary Operator பயன்படுத்துவது சிறந்தது."
  ],

  exampleProgram: `python_marks = 82

result = "Pass" if python_marks >= 50 else "Fail"

print("Student : Deepak")

print("Result :", result)

print("Keep Learning with Alaporan Thamizhan!")`,

  programExplanationEnglish: [
    "Line 1: A variable named 'python_marks' is created and assigned the value 82.",
    "Line 3: The Ternary Operator checks whether 'python_marks' is greater than or equal to 50. Since the condition is True, 'Pass' is stored in the variable 'result'.",
    "Line 5: print() displays the student's name.",
    "Line 7: print() displays the result stored in the variable 'result'.",
    "Line 9: print() displays the motivational message.",
    "The program demonstrates how the Ternary Operator performs an if-else decision in a single line."
  ],

  programExplanationTamil: [
    "வரி 1: 'python_marks' என்ற Variable உருவாக்கப்பட்டு அதில் 82 என்ற மதிப்பு சேமிக்கப்படுகிறது.",
    "வரி 3: Ternary Operator, 'python_marks' 50 அல்லது அதற்கு மேல் உள்ளதா என்பதை சரிபார்க்கிறது. Condition True என்பதால் 'Pass' என்ற Value, 'result' Variable-ல் சேமிக்கப்படுகிறது.",
    "வரி 5: print() மூலம் மாணவரின் பெயர் திரையில் காட்டப்படுகிறது.",
    "வரி 7: print() மூலம் 'result' Variable-ல் சேமிக்கப்பட்டுள்ள முடிவு (Result) திரையில் காட்டப்படுகிறது.",
    "வரி 9: print() மூலம் 'Keep Learning with Alaporan Thamizhan!' என்ற ஊக்கமளிக்கும் செய்தி திரையில் காட்டப்படுகிறது.",
    "இந்த Program, ஒரே வரியில் If-Else முடிவை Ternary Operator மூலம் எப்படி எடுக்கலாம் என்பதை விளக்குகிறது."
  ],

  output: `Student : Deepak
Result : Pass
Keep Learning with Alaporan Thamizhan!`,

  locked: false,

  completed: false,
},
{
  id: 12,

  title: "While Loop",

  englishDefinition:
    "A While Loop is a looping statement used to execute a block of code repeatedly as long as a specified condition is True. The loop stops automatically when the condition becomes False.",

  tamilDefinition:
    "While Loop என்பது ஒரு குறிப்பிட்ட Condition True ஆக இருக்கும் வரை ஒரு Code Block-ஐ மீண்டும் மீண்டும் (Repeatedly) இயக்க பயன்படும் Looping Statement ஆகும். Condition False ஆனவுடன் Loop தானாகவே நிறுத்தப்படுகிறது.",

  realWorldUsage:
    "While Loops are used in many software applications. For example, an ATM repeatedly asks the user to enter the correct PIN until the correct PIN is entered. Similarly, a login page keeps asking for the password until the user enters the correct one.",

  realWorldUsageTamil:
    "While Loop பல Software Applications-லிலும் பயன்படுத்தப்படுகிறது. உதாரணமாக, ATM-ல் சரியான PIN உள்ளிடும் வரை மீண்டும் மீண்டும் PIN கேட்கப்படுகிறது. அதேபோல் Login Page-ல் சரியான Password வழங்கும் வரை பயனரிடம் Password கேட்கப்படுகிறது.",

  syntax: `while condition:
    # Statements

    # Update Variable`,

  syntaxExplanationEnglish: [
    "The 'while' keyword starts the loop.",
    "The condition is checked before every iteration.",
    "A colon (:) must be placed at the end of the condition.",
    "The statements inside the loop must be properly indented.",
    "The loop variable should be updated inside the loop to avoid an infinite loop."
  ],

  syntaxExplanationTamil: [
    "'while' Keyword Loop-ஐ தொடங்க பயன்படுத்தப்படுகிறது.",
    "ஒவ்வொரு முறையும் Loop இயக்கப்படுவதற்கு முன் Condition சரிபார்க்கப்படுகிறது.",
    "Condition-ன் முடிவில் Colon (:) கட்டாயமாக இட வேண்டும்.",
    "Loop-க்குள் உள்ள Statements சரியான Indentation-உடன் எழுதப்பட வேண்டும்.",
    "Infinite Loop ஏற்படாமல் இருக்க Loop Variable-ஐ Loop-க்குள் Update செய்ய வேண்டும்."
  ],

  exampleProgram: `count = 1

while count <= 5:
    print("Welcome to Alaporan Thamizhan")

    count = count + 1

print("Loop Completed Successfully!")`,

  programExplanationEnglish: [
    "Line 1: A variable named 'count' is created and assigned the value 1.",
    "Line 3: The while loop checks whether 'count' is less than or equal to 5.",
    "Line 4: Since the condition is True, the message is displayed.",
    "Line 6: The value of 'count' is increased by 1.",
    "Line 3: The condition is checked again after updating the value.",
    "The loop continues until 'count' becomes 6.",
    "Line 8: Once the condition becomes False, the loop ends and this statement is executed.",
    "The program demonstrates how a while loop repeats a block of code based on a condition."
  ],

  programExplanationTamil: [
    "வரி 1: 'count' என்ற Variable உருவாக்கப்பட்டு அதில் 1 என்ற மதிப்பு சேமிக்கப்படுகிறது.",
    "வரி 3: While Loop, 'count' 5 அல்லது அதற்கு குறைவா என்பதை சரிபார்க்கிறது.",
    "வரி 4: Condition True என்பதால் 'Welcome to Alaporan Thamizhan' என்ற செய்தி திரையில் காட்டப்படுகிறது.",
    "வரி 6: 'count' Variable-ன் மதிப்பு 1 அதிகரிக்கப்படுகிறது.",
    "வரி 3: புதிய மதிப்புடன் Condition மீண்டும் சரிபார்க்கப்படுகிறது.",
    "'count' மதிப்பு 6 ஆகும் வரை Loop தொடர்ந்து இயக்கப்படுகிறது.",
    "வரி 8: Condition False ஆனவுடன் Loop முடிந்து இந்த Statement இயக்கப்படுகிறது.",
    "இந்த Program, Condition True ஆக இருக்கும் வரை While Loop எப்படி மீண்டும் மீண்டும் இயக்கப்படுகிறது என்பதை விளக்குகிறது."
  ],

  output: `Welcome to Alaporan Thamizhan
Welcome to Alaporan Thamizhan
Welcome to Alaporan Thamizhan
Welcome to Alaporan Thamizhan
Welcome to Alaporan Thamizhan
Loop Completed Successfully!`,

  locked: false,

  completed: false,
},
{
  id: 13,

  title: "For Loop",

  englishDefinition:
    "A For Loop is a looping statement used to execute a block of code a specific number of times. In Python, the range() function is commonly used with the for loop to control how many times the loop executes.",

  tamilDefinition:
    "For Loop என்பது ஒரு குறிப்பிட்ட எண்ணிக்கையிலான (Specific Number of Times) முறை ஒரு Code Block-ஐ மீண்டும் மீண்டும் இயக்க பயன்படும் Looping Statement ஆகும். Python-ல் பொதுவாக range() Function, For Loop-உடன் சேர்த்து Loop எத்தனை முறை இயக்கப்பட வேண்டும் என்பதை நிர்ணயிக்க பயன்படுத்தப்படுகிறது.",

  realWorldUsage:
    "For Loops are used in many software applications. For example, displaying the names of all students in a class, generating monthly reports, sending notifications to multiple users, and printing product details in an online shopping website.",

  realWorldUsageTamil:
    "For Loop பல Software Applications-லிலும் பயன்படுத்தப்படுகிறது. உதாரணமாக, ஒரு வகுப்பில் உள்ள அனைத்து மாணவர்களின் பெயர்களையும் காட்டுவது, Monthly Reports உருவாக்குவது, பல பயனர்களுக்கு Notifications அனுப்புவது மற்றும் Online Shopping Website-ல் அனைத்து Product Details-ஐ காட்டுவது போன்ற இடங்களில் பயன்படுத்தப்படுகிறது.",

  syntax: `for variable in range(start, end):
    # Statements`,

  syntaxExplanationEnglish: [
    "The 'for' keyword starts the loop.",
    "The loop variable stores the current value during each iteration.",
    "The range() function generates a sequence of numbers.",
    "The end value is not included in the sequence.",
    "The statements inside the loop execute once for every value generated by range()."
  ],

  syntaxExplanationTamil: [
    "'for' Keyword Loop-ஐ தொடங்க பயன்படுத்தப்படுகிறது.",
    "Loop Variable ஒவ்வொரு Iteration-லும் தற்போதைய மதிப்பை சேமிக்கிறது.",
    "range() Function தொடர்ச்சியான எண்களை உருவாக்குகிறது.",
    "range()-ல் குறிப்பிடப்படும் End Value கணக்கில் எடுத்துக்கொள்ளப்படாது.",
    "range() உருவாக்கும் ஒவ்வொரு மதிப்பிற்கும் Loop-க்குள் உள்ள Statements ஒருமுறை இயக்கப்படும்."
  ],

  exampleProgram: `for count in range(1, 6):
    print("Welcome to Alaporan Thamizhan")

print("Loop Completed Successfully!")`,

  programExplanationEnglish: [
    "Line 1: The for loop starts and the range() function generates the numbers 1 to 5.",
    "Line 2: The message 'Welcome to Alaporan Thamizhan' is displayed once for every iteration.",
    "Line 1: After each iteration, the loop automatically moves to the next value generated by range().",
    "The loop stops automatically after the value 5 is processed.",
    "Line 4: Once the loop ends, this statement is executed.",
    "The program demonstrates how a for loop repeats a block of code a fixed number of times."
  ],

  programExplanationTamil: [
    "வரி 1: For Loop தொடங்கப்பட்டு range() Function 1 முதல் 5 வரை எண்களை உருவாக்குகிறது.",
    "வரி 2: ஒவ்வொரு Iteration-லும் 'Welcome to Alaporan Thamizhan' என்ற செய்தி திரையில் காட்டப்படுகிறது.",
    "வரி 1: ஒவ்வொரு Iteration முடிந்ததும் range() வழங்கும் அடுத்த மதிப்பிற்கு Loop தானாக செல்கிறது.",
    "5 வரை அனைத்து மதிப்புகளும் முடிந்ததும் Loop தானாக நிறுத்தப்படுகிறது.",
    "வரி 4: Loop முடிந்த பிறகு இந்த Statement இயக்கப்படுகிறது.",
    "இந்த Program, For Loop ஒரு குறிப்பிட்ட எண்ணிக்கையிலான முறை Code-ஐ எப்படி இயக்குகிறது என்பதை விளக்குகிறது."
  ],

  output: `Welcome to Alaporan Thamizhan
Welcome to Alaporan Thamizhan
Welcome to Alaporan Thamizhan
Welcome to Alaporan Thamizhan
Welcome to Alaporan Thamizhan
Loop Completed Successfully!`,

  locked: false,

  completed: false,
},
{
  id: 14,

  title: "Nested Loop",

  englishDefinition:
    "A Nested Loop is a loop placed inside another loop. The inner loop executes completely for every iteration of the outer loop. Nested Loops are commonly used to work with patterns, tables, and two-dimensional data.",

  tamilDefinition:
    "Nested Loop என்பது ஒரு Loop-க்குள் மற்றொரு Loop இருப்பதாகும். Outer Loop ஒவ்வொரு முறை இயங்கும் போதும், Inner Loop முழுமையாக இயக்கப்படும். Pattern Printing, Tables மற்றும் Two-Dimensional Data போன்றவற்றில் Nested Loop அதிகமாக பயன்படுத்தப்படுகிறது.",

  realWorldUsage:
    "Nested Loops are used in many software applications. For example, displaying seats in a cinema hall, creating multiplication tables, processing rows and columns in spreadsheets, and displaying products in an online shopping website.",

  realWorldUsageTamil:
    "Nested Loop பல Software Applications-லிலும் பயன்படுத்தப்படுகிறது. உதாரணமாக, Cinema Hall Seat Arrangement, Multiplication Tables உருவாக்குவது, Spreadsheet-ல் Rows மற்றும் Columns-ஐ செயல்படுத்துவது மற்றும் Online Shopping Website-ல் Products-ஐ Grid வடிவில் காட்டுவது போன்ற இடங்களில் பயன்படுத்தப்படுகிறது.",

  syntax: `for i in range(rows):
    for j in range(columns):
        # Statements`,

  syntaxExplanationEnglish: [
    "The outer loop controls the number of rows.",
    "The inner loop controls the number of columns.",
    "The inner loop executes completely for every iteration of the outer loop.",
    "Proper indentation is required for both loops.",
    "Nested Loops are mainly used for patterns and two-dimensional data."
  ],

  syntaxExplanationTamil: [
    "Outer Loop, Rows-ன் எண்ணிக்கையை கட்டுப்படுத்துகிறது.",
    "Inner Loop, Columns-ன் எண்ணிக்கையை கட்டுப்படுத்துகிறது.",
    "Outer Loop ஒவ்வொரு முறை இயங்கும் போதும் Inner Loop முழுமையாக இயக்கப்படும்.",
    "இரண்டு Loops-க்கும் சரியான Indentation அவசியம்.",
    "Nested Loops பெரும்பாலும் Pattern Printing மற்றும் Two-Dimensional Data-க்கு பயன்படுத்தப்படுகின்றன."
  ],

  exampleProgram: `for row in range(3):
    for column in range(4):
        print("*", end=" ")

    print()`,

  programExplanationEnglish: [
    "Line 1: The outer loop executes 3 times to create 3 rows.",
    "Line 2: The inner loop executes 4 times for every row.",
    "Line 3: print() displays '*' without moving to the next line because of end=' '.",
    "Line 5: print() moves the cursor to the next line after completing one row.",
    "The process repeats until all rows are printed.",
    "The program demonstrates how Nested Loops are used to create patterns."
  ],

  programExplanationTamil: [
    "வரி 1: Outer Loop, 3 Rows உருவாக்குவதற்காக மூன்று முறை இயக்கப்படுகிறது.",
    "வரி 2: ஒவ்வொரு Row-க்கும் Inner Loop நான்கு முறை இயக்கப்படுகிறது.",
    "வரி 3: end=' ' பயன்படுத்தப்பட்டதால் '*' ஒரே வரியில் இடைவெளியுடன் காட்டப்படுகிறது.",
    "வரி 5: ஒரு Row முடிந்த பிறகு print() அடுத்த வரிக்கு செல்கிறது.",
    "அனைத்து Rows-மும் முடியும் வரை இந்த செயல்முறை தொடர்கிறது.",
    "இந்த Program, Pattern உருவாக்க Nested Loop எப்படி பயன்படுத்தப்படுகிறது என்பதை விளக்குகிறது."
  ],

  output: `* * * *
* * * *
* * * *`,

  locked: false,

  completed: false,
},
{
  id: 15,

  title: "Break Statement",

  englishDefinition:
    "The Break Statement is used to immediately terminate a loop before it finishes all its iterations. When the break statement is executed, the control exits the loop and continues with the next statement after the loop.",

  tamilDefinition:
    "Break Statement என்பது ஒரு Loop முழுமையாக முடிவடைவதற்கு முன்பே அதை உடனடியாக (Immediately) நிறுத்த பயன்படுத்தப்படுகிறது. Break Statement இயக்கப்பட்டவுடன் Loop-ல் இருந்து வெளியேறி, அதற்கு அடுத்துள்ள Statement இயக்கப்படும்.",

  realWorldUsage:
    "The Break Statement is used in many software applications. For example, when searching for a student's roll number in a database, the search stops immediately after finding the correct record instead of checking the remaining records.",

  realWorldUsageTamil:
    "Break Statement பல Software Applications-லிலும் பயன்படுத்தப்படுகிறது. உதாரணமாக, ஒரு Database-ல் மாணவரின் Roll Number-ஐ தேடும் போது, சரியான Record கிடைத்தவுடன் மீதமுள்ள Records-ஐ தேடாமல் Search உடனடியாக நிறுத்தப்படுகிறது.",

  syntax: `for variable in range(start, end):
    if condition:
        break`,

  syntaxExplanationEnglish: [
    "The loop starts normally.",
    "The if statement checks a specified condition.",
    "If the condition becomes True, the break statement is executed.",
    "The loop immediately terminates.",
    "Program execution continues with the statement after the loop."
  ],

  syntaxExplanationTamil: [
    "Loop வழக்கம்போல் தொடங்குகிறது.",
    "if Statement ஒரு குறிப்பிட்ட Condition-ஐ சரிபார்க்கிறது.",
    "Condition True ஆனால் break Statement இயக்கப்படுகிறது.",
    "Loop உடனடியாக நிறுத்தப்படுகிறது.",
    "Program, Loop-க்கு அடுத்துள்ள Statement-ஐ இயக்கத் தொடங்குகிறது."
  ],

  exampleProgram: `for number in range(1, 11):
    if number == 6:
        break

    print(number)

print("Loop Stopped Successfully!")`,

  programExplanationEnglish: [
    "Line 1: The for loop generates numbers from 1 to 10.",
    "Line 2: The if statement checks whether the value of 'number' is equal to 6.",
    "Line 3: When 'number' becomes 6, the break statement terminates the loop immediately.",
    "Line 5: Numbers from 1 to 5 are displayed before the loop stops.",
    "Line 7: After the loop terminates, this statement is executed.",
    "The program demonstrates how the break statement exits a loop before all iterations are completed."
  ],

  programExplanationTamil: [
    "வரி 1: For Loop, 1 முதல் 10 வரை எண்களை உருவாக்குகிறது.",
    "வரி 2: 'number' 6-க்கு சமமா என்பதை if Statement சரிபார்க்கிறது.",
    "வரி 3: 'number' 6 ஆனவுடன் break Statement Loop-ஐ உடனடியாக நிறுத்துகிறது.",
    "வரி 5: Loop நிறுத்தப்படுவதற்கு முன் 1 முதல் 5 வரை உள்ள எண்கள் திரையில் காட்டப்படுகின்றன.",
    "வரி 7: Loop முடிந்த பிறகு இந்த Statement இயக்கப்படுகிறது.",
    "இந்த Program, அனைத்து Iterations முடிவதற்கு முன்பே break Statement Loop-ஐ எப்படி நிறுத்துகிறது என்பதை விளக்குகிறது."
  ],

  output: `1
2
3
4
5
Loop Stopped Successfully!`,

  locked: false,

  completed: false,
},
{
  id: 16,

  title: "Continue Statement",

  englishDefinition:
    "The Continue Statement is used to skip the current iteration of a loop and continue with the next iteration. Unlike the break statement, continue does not terminate the loop; it simply skips the remaining statements of the current iteration.",

  tamilDefinition:
    "Continue Statement என்பது Loop-இன் தற்போதைய Iteration-ஐ (Current Iteration) மட்டும் தவிர்த்து (Skip செய்து), அடுத்த Iteration-க்கு செல்ல பயன்படுத்தப்படுகிறது. Break Statement போல Loop-ஐ முழுவதுமாக நிறுத்தாது. தற்போதைய Iteration-ல் மீதமுள்ள Statements மட்டும் தவிர்க்கப்பட்டு Loop தொடர்ந்து இயக்கப்படும்.",

  realWorldUsage:
    "The Continue Statement is used in many software applications. For example, while processing student records, a program can skip absent students and continue processing the remaining students. Similarly, an online shopping system can skip unavailable products while displaying the available ones.",

  realWorldUsageTamil:
    "Continue Statement பல Software Applications-லிலும் பயன்படுத்தப்படுகிறது. உதாரணமாக, மாணவர்களின் பதிவுகளை (Student Records) செயல்படுத்தும் போது, வராத (Absent) மாணவர்களை Skip செய்து மற்ற மாணவர்களை தொடர்ந்து செயல்படுத்தலாம். அதேபோல் Online Shopping Website-ல் கிடைக்காத (Unavailable) Products-ஐ தவிர்த்து மற்ற பொருட்களை காட்ட பயன்படுத்தப்படுகிறது.",

  syntax: `for variable in range(start, end):
    if condition:
        continue

    # Statements`,

  syntaxExplanationEnglish: [
    "The loop starts normally.",
    "The if statement checks a specified condition.",
    "If the condition becomes True, the continue statement is executed.",
    "The remaining statements of the current iteration are skipped.",
    "The loop immediately moves to the next iteration."
  ],

  syntaxExplanationTamil: [
    "Loop வழக்கம்போல் தொடங்குகிறது.",
    "if Statement ஒரு குறிப்பிட்ட Condition-ஐ சரிபார்க்கிறது.",
    "Condition True ஆனால் continue Statement இயக்கப்படுகிறது.",
    "தற்போதைய Iteration-ல் உள்ள மீதமுள்ள Statements Skip செய்யப்படுகின்றன.",
    "Loop உடனடியாக அடுத்த Iteration-க்கு செல்கிறது."
  ],

  exampleProgram: `for number in range(1, 11):
    if number == 6:
        continue

    print(number)

print("Loop Completed Successfully!")`,

  programExplanationEnglish: [
    "Line 1: The for loop generates numbers from 1 to 10.",
    "Line 2: The if statement checks whether the value of 'number' is equal to 6.",
    "Line 3: When 'number' becomes 6, the continue statement skips the current iteration.",
    "Line 5: All numbers except 6 are displayed on the screen.",
    "Line 7: After completing all iterations, this statement is executed.",
    "The program demonstrates how the continue statement skips only one iteration without stopping the loop."
  ],

  programExplanationTamil: [
    "வரி 1: For Loop, 1 முதல் 10 வரை எண்களை உருவாக்குகிறது.",
    "வரி 2: 'number' 6-க்கு சமமா என்பதை if Statement சரிபார்க்கிறது.",
    "வரி 3: 'number' 6 ஆனவுடன் continue Statement தற்போதைய Iteration-ஐ மட்டும் Skip செய்கிறது.",
    "வரி 5: 6-ஐ தவிர மற்ற அனைத்து எண்களும் திரையில் காட்டப்படுகின்றன.",
    "வரி 7: அனைத்து Iterations-மும் முடிந்த பிறகு இந்த Statement இயக்கப்படுகிறது.",
    "இந்த Program, Continue Statement Loop-ஐ நிறுத்தாமல் தற்போதைய Iteration-ஐ மட்டும் Skip செய்வதை விளக்குகிறது."
  ],

  output: `1
2
3
4
5
7
8
9
10
Loop Completed Successfully!`,

  locked: false,

  completed: false,
},
{
  id: 17,

  title: "Lists",

  englishDefinition:
    "A List is an ordered and mutable collection in Python that can store multiple values in a single variable. Lists can contain elements of different data types and allow adding, removing, and modifying elements.",

  tamilDefinition:
    "List என்பது Python-ல் பல Values-ஐ ஒரே Variable-ல் சேமிக்க பயன்படும் Ordered மற்றும் Mutable Collection ஆகும். List-ல் வெவ்வேறு Data Types-ஐ சேர்ந்த Values-ஐ சேமிக்கலாம். மேலும் Elements-ஐ Add, Remove மற்றும் Modify செய்ய முடியும்.",

  realWorldUsage:
    "Lists are widely used in software applications. For example, an online shopping website stores product names in a list, a music application stores playlists, and a college management system stores the names of students in a class.",

  realWorldUsageTamil:
    "List பல Software Applications-லிலும் பயன்படுத்தப்படுகிறது. உதாரணமாக, Online Shopping Website-ல் Product Names, Music Application-ல் Playlist Songs மற்றும் College Management System-ல் ஒரு வகுப்பில் உள்ள மாணவர்களின் பெயர்கள் List-ல் சேமிக்கப்படுகின்றன.",

  syntax: `list_name = [value1, value2, value3]`,

  syntaxExplanationEnglish: [
    "Square brackets [] are used to create a list.",
    "Multiple elements are separated using commas.",
    "A list can store different types of values.",
    "Elements are stored in the order they are added.",
    "List elements can be accessed using their index."
  ],

  syntaxExplanationTamil: [
    "Square Brackets [] பயன்படுத்தி List உருவாக்கப்படுகிறது.",
    "ஒவ்வொரு Element-மும் Comma (,) மூலம் பிரிக்கப்படுகிறது.",
    "ஒரே List-ல் வெவ்வேறு Data Types-ஐ சேமிக்கலாம்.",
    "Elements சேர்க்கப்பட்ட வரிசைப்படியே (Order) சேமிக்கப்படுகின்றன.",
    "Index பயன்படுத்தி List Elements-ஐ அணுகலாம்."
  ],

  exampleProgram: `students = ["Deepak", "Arun", "Kavin", "Priya"]

print("First Student :", students[0])

print("Second Student :", students[1])

print("Total Students :", len(students))

print("Keep Learning with Alaporan Thamizhan!")`,

  programExplanationEnglish: [
    "Line 1: A list named 'students' is created with four student names.",
    "Line 3: The first element of the list is accessed using index 0 and displayed.",
    "Line 5: The second element of the list is accessed using index 1 and displayed.",
    "Line 7: len() returns the total number of elements in the list.",
    "Line 9: print() displays a motivational message.",
    "The program demonstrates how to create a list and access its elements using indexes."
  ],

  programExplanationTamil: [
    "வரி 1: 'students' என்ற List உருவாக்கப்பட்டு அதில் நான்கு மாணவர்களின் பெயர்கள் சேமிக்கப்படுகின்றன.",
    "வரி 3: Index 0 பயன்படுத்தி முதல் Element திரையில் காட்டப்படுகிறது.",
    "வரி 5: Index 1 பயன்படுத்தி இரண்டாவது Element திரையில் காட்டப்படுகிறது.",
    "வரி 7: len() Function List-ல் உள்ள மொத்த Elements எண்ணிக்கையை காட்டுகிறது.",
    "வரி 9: print() மூலம் 'Keep Learning with Alaporan Thamizhan!' என்ற ஊக்கமளிக்கும் செய்தி காட்டப்படுகிறது.",
    "இந்த Program, List உருவாக்குவது மற்றும் Index மூலம் Elements-ஐ அணுகுவது எப்படி என்பதை விளக்குகிறது."
  ],

  output: `First Student : Deepak
Second Student : Arun
Total Students : 4
Keep Learning with Alaporan Thamizhan!`,

  locked: false,

  completed: false,
},
{
  id: 18,

  title: "Tuples",

  englishDefinition:
    "A Tuple is an ordered and immutable collection in Python that stores multiple values in a single variable. Once a tuple is created, its elements cannot be added, removed, or modified.",

  tamilDefinition:
    "Tuple என்பது Python-ல் பல Values-ஐ ஒரே Variable-ல் சேமிக்க பயன்படும் Ordered மற்றும் Immutable Collection ஆகும். ஒரு Tuple உருவாக்கப்பட்ட பிறகு அதிலுள்ள Elements-ஐ மாற்றவோ, நீக்கவோ அல்லது புதிதாக சேர்க்கவோ முடியாது.",

  realWorldUsage:
    "Tuples are used to store data that should not be changed. For example, storing the days of the week, months of the year, RGB color values, or a student's date of birth.",

  realWorldUsageTamil:
    "Tuple மாற்றக்கூடாத (Fixed) தகவல்களை சேமிக்க பயன்படுத்தப்படுகிறது. உதாரணமாக, வார நாட்கள், ஆண்டின் மாதங்கள், RGB Color Values அல்லது மாணவரின் பிறந்த தேதி போன்ற தகவல்கள் Tuple-ல் சேமிக்கப்படுகின்றன.",

  syntax: `tuple_name = (value1, value2, value3)`,

  syntaxExplanationEnglish: [
    "Parentheses () are used to create a tuple.",
    "Multiple elements are separated using commas.",
    "Tuple elements are stored in order.",
    "Tuple elements cannot be modified after creation.",
    "Elements can be accessed using their index."
  ],

  syntaxExplanationTamil: [
    "Parentheses () பயன்படுத்தி Tuple உருவாக்கப்படுகிறது.",
    "ஒவ்வொரு Element-மும் Comma (,) மூலம் பிரிக்கப்படுகிறது.",
    "Elements சேர்க்கப்பட்ட வரிசைப்படியே சேமிக்கப்படுகின்றன.",
    "Tuple உருவாக்கப்பட்ட பிறகு அதன் Elements-ஐ மாற்ற முடியாது.",
    "Index பயன்படுத்தி Tuple Elements-ஐ அணுகலாம்."
  ],

  exampleProgram: `students = ("Deepak", "Kathir", "Priya")

print("First Student :", students[0])

print("Second Student :", students[1])

print("Total Students :", len(students))

print("Keep Learning with Alaporan Thamizhan!")`,

  programExplanationEnglish: [
    "Line 1: A tuple named 'students' is created with three student names.",
    "Line 3: The first element of the tuple is accessed using index 0.",
    "Line 5: The second element of the tuple is accessed using index 1.",
    "Line 7: len() returns the total number of elements in the tuple.",
    "Line 9: print() displays a motivational message.",
    "The program demonstrates how to create a tuple and access its elements."
  ],

  programExplanationTamil: [
    "வரி 1: 'students' என்ற Tuple உருவாக்கப்பட்டு அதில் மூன்று மாணவர்களின் பெயர்கள் சேமிக்கப்படுகின்றன.",
    "வரி 3: Index 0 பயன்படுத்தி முதல் Element திரையில் காட்டப்படுகிறது.",
    "வரி 5: Index 1 பயன்படுத்தி இரண்டாவது Element திரையில் காட்டப்படுகிறது.",
    "வரி 7: len() Function Tuple-ல் உள்ள மொத்த Elements எண்ணிக்கையை காட்டுகிறது.",
    "வரி 9: print() மூலம் 'Keep Learning with Alaporan Thamizhan!' என்ற ஊக்கமளிக்கும் செய்தி காட்டப்படுகிறது.",
    "இந்த Program, Tuple உருவாக்குவது மற்றும் அதன் Elements-ஐ Index மூலம் அணுகுவது எப்படி என்பதை விளக்குகிறது."
  ],

  output: `First Student : Deepak
Second Student : Kathir
Total Students : 3
Keep Learning with Alaporan Thamizhan!`,

  locked: false,

  completed: false,
},
{
  id: 19,

  title: "Sets",

  englishDefinition:
    "A Set is an unordered and mutable collection in Python that stores unique elements. Duplicate values are automatically removed, making sets useful when only distinct values are needed.",

  tamilDefinition:
    "Set என்பது Python-ல் Unique (தனித்துவமான) Values-ஐ மட்டும் சேமிக்கும் Unordered மற்றும் Mutable Collection ஆகும். ஒரே Value பலமுறை கொடுத்தாலும், Set அதனை ஒரே முறை மட்டுமே சேமிக்கும். எனவே Duplicate Values தானாகவே நீக்கப்படும்.",

  realWorldUsage:
    "Sets are used in many software applications where duplicate values are not allowed. For example, storing unique student IDs, unique email addresses, unique course names, or unique usernames in a website.",

  realWorldUsageTamil:
    "Duplicate Values அனுமதிக்கப்படாத Software Applications-ல் Set பயன்படுத்தப்படுகிறது. உதாரணமாக, Unique Student IDs, Unique Email Addresses, Unique Course Names மற்றும் Website-ல் Unique Usernames போன்றவற்றை சேமிக்க Set பயன்படுத்தப்படுகிறது.",

  syntax: `set_name = {value1, value2, value3}`,

  syntaxExplanationEnglish: [
    "Curly braces {} are used to create a set.",
    "Elements are separated using commas.",
    "Duplicate values are automatically removed.",
    "Sets are unordered, so elements may not appear in the order they were inserted.",
    "Sets are mutable, which means elements can be added or removed."
  ],

  syntaxExplanationTamil: [
    "Curly Braces {} பயன்படுத்தி Set உருவாக்கப்படுகிறது.",
    "ஒவ்வொரு Element-மும் Comma (,) மூலம் பிரிக்கப்படுகிறது.",
    "Duplicate Values தானாகவே நீக்கப்படும்.",
    "Set என்பது Unordered Collection ஆகும். எனவே Elements சேர்க்கப்பட்ட வரிசையில் காட்டப்பட வேண்டிய அவசியமில்லை.",
    "Set Mutable Collection என்பதால் புதிய Elements-ஐ சேர்க்கவும் நீக்கவும் முடியும்."
  ],

  exampleProgram: `students = {"Deepak", "Kathir", "Deepak", "Priya"}

print("Students :", students)

print("Total Unique Students :", len(students))

print("Keep Learning with Alaporan Thamizhan!")`,

  programExplanationEnglish: [
    "Line 1: A set named 'students' is created. The duplicate value 'Deepak' is automatically removed.",
    "Line 3: print() displays all the unique elements stored in the set.",
    "Line 5: len() returns the total number of unique elements in the set.",
    "Line 7: print() displays the motivational message.",
    "The program demonstrates how a set stores only unique values."
  ],

  programExplanationTamil: [
    "வரி 1: 'students' என்ற Set உருவாக்கப்படுகிறது. இதில் உள்ள Duplicate Value 'Deepak' தானாகவே நீக்கப்படுகிறது.",
    "வரி 3: print() மூலம் Set-ல் உள்ள Unique Elements திரையில் காட்டப்படுகின்றன.",
    "வரி 5: len() Function Set-ல் உள்ள மொத்த Unique Elements எண்ணிக்கையை காட்டுகிறது.",
    "வரி 7: print() மூலம் 'Keep Learning with Alaporan Thamizhan!' என்ற ஊக்கமளிக்கும் செய்தி காட்டப்படுகிறது.",
    "இந்த Program, Set Duplicate Values-ஐ சேமிக்காது என்பதை விளக்குகிறது."
  ],

  output: `Students : {'Deepak', 'Kathir', 'Priya'}
Total Unique Students : 3
Keep Learning with Alaporan Thamizhan!`,

  locked: false,

  completed: false,
},
{
  id: 20,

  title: "Dictionaries",

  englishDefinition:
    "A Dictionary is a mutable collection in Python that stores data in the form of key-value pairs. Each key is unique and is used to access its corresponding value. Dictionaries are useful for storing related information together.",

  tamilDefinition:
    "Dictionary என்பது Python-ல் Key-Value Pair வடிவில் தகவல்களை சேமிக்கும் Mutable Collection ஆகும். ஒவ்வொரு Key-மும் தனித்துவமானதாக (Unique) இருக்கும். அந்த Key-ஐ பயன்படுத்தி அதனுடன் தொடர்புடைய Value-ஐ அணுகலாம். தொடர்புடைய தகவல்களை ஒன்றாக சேமிக்க Dictionary மிகவும் பயனுள்ளதாகும்.",

  realWorldUsage:
    "Dictionaries are widely used in software applications. For example, a college management system stores a student's name, department, age, and CGPA using keys and values. Similarly, an online shopping website stores product details such as name, price, and stock in a dictionary.",

  realWorldUsageTamil:
    "Dictionary பல Software Applications-லிலும் பயன்படுத்தப்படுகிறது. உதாரணமாக, College Management System-ல் ஒரு மாணவரின் பெயர், துறை, வயது மற்றும் CGPA போன்ற தகவல்கள் Key-Value Pair வடிவில் சேமிக்கப்படுகின்றன. அதேபோல் Online Shopping Website-ல் Product Name, Price மற்றும் Stock போன்ற விவரங்களும் Dictionary-ல் சேமிக்கப்படுகின்றன.",

  syntax: `dictionary_name = {
    "key1": value1,
    "key2": value2
}`,

  syntaxExplanationEnglish: [
    "Curly braces {} are used to create a dictionary.",
    "Each item consists of a key and a value.",
    "A colon (:) separates the key and value.",
    "Each key must be unique within the dictionary.",
    "Values are accessed using their corresponding keys."
  ],

  syntaxExplanationTamil: [
    "Curly Braces {} பயன்படுத்தி Dictionary உருவாக்கப்படுகிறது.",
    "ஒவ்வொரு Item-மும் ஒரு Key மற்றும் ஒரு Value-ஐ கொண்டிருக்கும்.",
    "Key மற்றும் Value ஆகியவற்றை Colon (:) பிரிக்கிறது.",
    "ஒரே Dictionary-ல் ஒவ்வொரு Key-மும் Unique ஆக இருக்க வேண்டும்.",
    "Keys பயன்படுத்தி அதற்குரிய Values-ஐ அணுகலாம்."
  ],

  exampleProgram: `student = {
    "name": "Deepak",
    "friend": "Kathir",
    "college": "Don Bosco College",
    "course": "Python"
}

print("Student Name :", student["name"])

print("Friend :", student["friend"])

print("College :", student["college"])

print("Course :", student["course"])

print("Keep Learning with Alaporan Thamizhan!")`,

  programExplanationEnglish: [
    "Line 1: A dictionary named 'student' is created.",
    "Line 2: The key 'name' stores the value 'Deepak'.",
    "Line 3: The key 'friend' stores the value 'Kathir'.",
    "Line 4: The key 'college' stores the value 'Don Bosco College'.",
    "Line 5: The key 'course' stores the value 'Python'.",
    "Line 8: The value of the key 'name' is displayed.",
    "Line 10: The value of the key 'friend' is displayed.",
    "Line 12: The value of the key 'college' is displayed.",
    "Line 14: The value of the key 'course' is displayed.",
    "Line 16: print() displays the motivational message.",
    "The program demonstrates how to create a dictionary and access values using keys."
  ],

  programExplanationTamil: [
    "வரி 1: 'student' என்ற Dictionary உருவாக்கப்படுகிறது.",
    "வரி 2: 'name' என்ற Key-ல் 'Deepak' என்ற Value சேமிக்கப்படுகிறது.",
    "வரி 3: 'friend' என்ற Key-ல் 'Kathir' என்ற Value சேமிக்கப்படுகிறது.",
    "வரி 4: 'college' என்ற Key-ல் 'Don Bosco College' என்ற Value சேமிக்கப்படுகிறது.",
    "வரி 5: 'course' என்ற Key-ல் 'Python' என்ற Value சேமிக்கப்படுகிறது.",
    "வரி 8: 'name' என்ற Key-க்கு உரிய Value திரையில் காட்டப்படுகிறது.",
    "வரி 10: 'friend' என்ற Key-க்கு உரிய Value திரையில் காட்டப்படுகிறது.",
    "வரி 12: 'college' என்ற Key-க்கு உரிய Value திரையில் காட்டப்படுகிறது.",
    "வரி 14: 'course' என்ற Key-க்கு உரிய Value திரையில் காட்டப்படுகிறது.",
    "வரி 16: print() மூலம் 'Keep Learning with Alaporan Thamizhan!' என்ற ஊக்கமளிக்கும் செய்தி காட்டப்படுகிறது.",
    "இந்த Program, Dictionary உருவாக்குவது மற்றும் Keys பயன்படுத்தி Values-ஐ அணுகுவது எப்படி என்பதை விளக்குகிறது."
  ],

  output: `Student Name : Deepak
Friend : Kathir
College : Don Bosco College
Course : Python
Keep Learning with Alaporan Thamizhan!`,

  locked: false,

  completed: false,
},
{
  id: 21,

  title: "Functions",

  englishDefinition:
    "A Function is a reusable block of code that performs a specific task. Instead of writing the same code multiple times, a function allows you to write it once and call it whenever needed. Functions improve code readability, reduce duplication, and make programs easier to maintain.",

  tamilDefinition:
    "Function என்பது ஒரு குறிப்பிட்ட பணியை (Specific Task) செய்ய உருவாக்கப்படும் Reusable Code Block ஆகும். ஒரே Code-ஐ பலமுறை எழுதுவதற்கு பதிலாக, Function-ஐ ஒருமுறை உருவாக்கி தேவையான இடங்களில் பலமுறை அழைக்கலாம். இதனால் Code படிக்க எளிதாகவும், மீண்டும் எழுத வேண்டிய அவசியம் இல்லாமலும், Program-ஐ பராமரிக்க (Maintain) எளிதாகவும் இருக்கும்.",

  realWorldUsage:
    "Functions are used in almost every software application. For example, an online shopping website has separate functions for user login, payment processing, and order confirmation. Similarly, a college management system uses different functions to add students, calculate marks, and generate reports.",

  realWorldUsageTamil:
    "Functions அனைத்து Software Applications-லிலும் பயன்படுத்தப்படுகின்றன. உதாரணமாக, Online Shopping Website-ல் User Login, Payment Processing மற்றும் Order Confirmation ஆகியவற்றிற்கு தனித்தனி Functions பயன்படுத்தப்படுகின்றன. அதேபோல் College Management System-ல் Student சேர்ப்பது, Marks கணக்கிடுவது மற்றும் Reports உருவாக்குவது போன்ற பணிகளுக்கு Functions பயன்படுத்தப்படுகின்றன.",

  syntax: `def function_name():
    # Statements

function_name()`,

  syntaxExplanationEnglish: [
    "The 'def' keyword is used to define a function.",
    "function_name is the name of the function.",
    "Parentheses () can contain parameters if required.",
    "The function body must be properly indented.",
    "The function is executed only when it is called."
  ],

  syntaxExplanationTamil: [
    "'def' Keyword Function உருவாக்க பயன்படுத்தப்படுகிறது.",
    "function_name என்பது Function-ன் பெயராகும்.",
    "தேவைப்பட்டால் Parentheses()-க்குள் Parameters கொடுக்கலாம்.",
    "Function-க்குள் உள்ள Statements சரியான Indentation-உடன் எழுதப்பட வேண்டும்.",
    "Function உருவாக்கப்பட்டாலும் Call செய்த பிறகே அது இயக்கப்படும்."
  ],

  exampleProgram: `def welcome():
    print("Welcome Deepak!")

    print("Welcome to Alaporan Thamizhan!")

welcome()

print("Keep Practicing Python!")`,

  programExplanationEnglish: [
    "Line 1: A function named 'welcome' is created using the def keyword.",
    "Line 2: The first print() statement is placed inside the function.",
    "Line 4: The second print() statement is also placed inside the function.",
    "Line 6: The function 'welcome()' is called, so the statements inside it are executed.",
    "Line 8: This print() statement is outside the function and executes after the function call.",
    "The program demonstrates how to create and call a function in Python."
  ],

  programExplanationTamil: [
    "வரி 1: 'def' Keyword பயன்படுத்தி 'welcome' என்ற Function உருவாக்கப்படுகிறது.",
    "வரி 2: முதல் print() Statement Function-க்குள் எழுதப்பட்டுள்ளது.",
    "வரி 4: இரண்டாவது print() Statement-மும் Function-க்குள் உள்ளது.",
    "வரி 6: welcome() Function Call செய்யப்படுவதால் அதன் உள்ளே உள்ள Statements இயக்கப்படுகின்றன.",
    "வரி 8: இந்த print() Statement Function-க்கு வெளியே இருப்பதால் Function முடிந்த பிறகு இயக்கப்படுகிறது.",
    "இந்த Program, Python-ல் Function உருவாக்குவது மற்றும் Call செய்வது எப்படி என்பதை விளக்குகிறது."
  ],

  output: `Welcome Deepak!
Welcome to Alaporan Thamizhan!
Keep Practicing Python!`,

  locked: false,

  completed: false,
},
{
  id: 22,

  title: "Lambda Functions",

  englishDefinition:
    "A Lambda Function is a small anonymous function in Python that can have any number of arguments but only one expression. It is mainly used to write short functions without using the def keyword.",

  tamilDefinition:
    "Lambda Function என்பது Python-ல் பெயரில்லாத (Anonymous) சிறிய Function ஆகும். இது எத்தனை Arguments வேண்டுமானாலும் ஏற்க முடியும். ஆனால் ஒரே ஒரு Expression மட்டும் கொண்டிருக்கும். சிறிய Functions-ஐ def Keyword பயன்படுத்தாமல் சுருக்கமாக எழுத Lambda Function பயன்படுத்தப்படுகிறது.",

  realWorldUsage:
    "Lambda Functions are commonly used in software applications for short operations such as sorting data, filtering records, and performing simple calculations. They are frequently used with functions like map(), filter(), and sorted().",

  realWorldUsageTamil:
    "Lambda Function சிறிய செயல்பாடுகளுக்கு Software Applications-ல் அதிகமாக பயன்படுத்தப்படுகிறது. உதாரணமாக, Data Sorting, Records Filtering மற்றும் எளிய கணக்கீடுகள் செய்ய Lambda Function பயன்படுகிறது. குறிப்பாக map(), filter() மற்றும் sorted() போன்ற Functions-உடன் அதிகமாக பயன்படுத்தப்படுகிறது.",

  syntax: `function_name = lambda arguments: expression`,

  syntaxExplanationEnglish: [
    "The 'lambda' keyword is used to create an anonymous function.",
    "Arguments are written before the colon (:).",
    "The expression is written after the colon.",
    "The expression is automatically returned.",
    "Lambda Functions are suitable for simple one-line operations."
  ],

  syntaxExplanationTamil: [
    "'lambda' Keyword பயன்படுத்தி Anonymous Function உருவாக்கப்படுகிறது.",
    "Arguments Colon (:) முன் எழுதப்படுகின்றன.",
    "Expression Colon (:) பிறகு எழுதப்படுகிறது.",
    "Expression-ன் Result தானாகவே Return செய்யப்படுகிறது.",
    "Lambda Function எளிய ஒரு வரி (Single Line) செயல்பாடுகளுக்கு மிகவும் பொருத்தமானது."
  ],

  exampleProgram: `square = lambda number: number * number

result = square(5)

print("Square :", result)

print("Keep Learning with Alaporan Thamizhan!")`,

  programExplanationEnglish: [
    "Line 1: A Lambda Function named 'square' is created to calculate the square of a number.",
    "Line 3: The Lambda Function is called with the value 5, and the result is stored in the variable 'result'.",
    "Line 5: print() displays the square of the given number.",
    "Line 7: print() displays the motivational message.",
    "The program demonstrates how to create and use a simple Lambda Function."
  ],

  programExplanationTamil: [
    "வரி 1: ஒரு எண்ணின் Square-ஐ கணக்கிட 'square' என்ற Lambda Function உருவாக்கப்படுகிறது.",
    "வரி 3: Lambda Function-க்கு 5 அனுப்பப்பட்டு அதன் முடிவு 'result' என்ற Variable-ல் சேமிக்கப்படுகிறது.",
    "வரி 5: print() மூலம் எண்ணின் Square திரையில் காட்டப்படுகிறது.",
    "வரி 7: print() மூலம் 'Keep Learning with Alaporan Thamizhan!' என்ற ஊக்கமளிக்கும் செய்தி காட்டப்படுகிறது.",
    "இந்த Program, Lambda Function உருவாக்குவது மற்றும் பயன்படுத்துவது எப்படி என்பதை விளக்குகிறது."
  ],

  output: `Square : 25
Keep Learning with Alaporan Thamizhan!`,

  locked: false,

  completed: false,
},
{
  id: 23,

  title: "Classes",

  englishDefinition:
    "A Class is a blueprint or template used to create objects in Python. It defines the properties (attributes) and behaviors (methods) that an object will have. A class helps organize related data and functions into a single unit.",

  tamilDefinition:
    "Class என்பது Python-ல் Objects உருவாக்க பயன்படும் Blueprint அல்லது Template ஆகும். ஒரு Object-க்கு தேவையான Properties (Attributes) மற்றும் Behaviors (Methods) ஆகியவற்றை Class வரையறுக்கிறது. தொடர்புடைய Data மற்றும் Functions-ஐ ஒரே இடத்தில் ஒழுங்காக அமைக்க Class பயன்படுகிறது.",

  realWorldUsage:
    "Classes are used in almost every software application. For example, a College Management System can have a Student class containing student details and functions. Similarly, an E-commerce website can have a Product class to manage product information.",

  realWorldUsageTamil:
    "Class அனைத்து Software Applications-லிலும் பயன்படுத்தப்படுகிறது. உதாரணமாக, College Management System-ல் மாணவர்களின் தகவல்களை நிர்வகிக்க Student Class பயன்படுத்தப்படுகிறது. அதேபோல் E-commerce Website-ல் Product Details-ஐ நிர்வகிக்க Product Class பயன்படுத்தப்படுகிறது.",

  syntax: `class ClassName:
    # Attributes

    # Methods`,

  syntaxExplanationEnglish: [
    "The 'class' keyword is used to create a class.",
    "ClassName represents the name of the class.",
    "Attributes store the data of the class.",
    "Methods define the actions performed by the class.",
    "Proper indentation is required inside the class."
  ],

  syntaxExplanationTamil: [
    "'class' Keyword பயன்படுத்தி Class உருவாக்கப்படுகிறது.",
    "ClassName என்பது Class-ன் பெயராகும்.",
    "Attributes என்பது Class-ன் Data-வை சேமிக்க பயன்படுகிறது.",
    "Methods என்பது Class செய்யும் செயல்களை வரையறுக்கிறது.",
    "Class-க்குள் உள்ள அனைத்து Statements-க்கும் சரியான Indentation அவசியம்."
  ],

  exampleProgram: `class Student:
    college = "Don Bosco College"

    def welcome(self):
        print("Welcome to Alaporan Thamizhan!")

student = Student()

print("College :", student.college)

student.welcome()`,

  programExplanationEnglish: [
    "Line 1: A class named 'Student' is created.",
    "Line 2: A class attribute named 'college' is created.",
    "Line 4: A method named 'welcome()' is created inside the class.",
    "Line 5: The method displays a welcome message.",
    "Line 7: An object named 'student' is created from the Student class.",
    "Line 9: The class attribute is accessed using the object.",
    "Line 11: The welcome() method is called using the object.",
    "The program demonstrates how to create and use a class."
  ],

  programExplanationTamil: [
    "வரி 1: 'Student' என்ற Class உருவாக்கப்படுகிறது.",
    "வரி 2: 'college' என்ற Class Attribute உருவாக்கப்படுகிறது.",
    "வரி 4: Class-க்குள் 'welcome()' என்ற Method உருவாக்கப்படுகிறது.",
    "வரி 5: இந்த Method ஒரு வரவேற்பு செய்தியை திரையில் காட்டுகிறது.",
    "வரி 7: Student Class-இல் இருந்து 'student' என்ற Object உருவாக்கப்படுகிறது.",
    "வரி 9: Object பயன்படுத்தி Class Attribute அணுகப்படுகிறது.",
    "வரி 11: Object பயன்படுத்தி welcome() Method அழைக்கப்படுகிறது.",
    "இந்த Program, Python-ல் Class உருவாக்குவது மற்றும் பயன்படுத்துவது எப்படி என்பதை விளக்குகிறது."
  ],

  output: `College : Don Bosco College
Welcome to Alaporan Thamizhan!`,

  locked: false,

  completed: false,
},
{
  id: 24,

  title: "Objects",

  englishDefinition:
    "An Object is an instance of a class. It is created from a class and is used to access the attributes and methods defined inside the class. A single class can be used to create multiple objects.",

  tamilDefinition:
    "Object என்பது ஒரு Class-இன் Instance ஆகும். Class-இல் இருந்து Object உருவாக்கப்படுகிறது. Class-க்குள் உள்ள Attributes மற்றும் Methods-ஐ அணுக Object பயன்படுத்தப்படுகிறது. ஒரு Class-இல் இருந்து பல Objects உருவாக்க முடியும்.",

  realWorldUsage:
    "Objects are used in every Object-Oriented software application. For example, in a College Management System, each student can be represented as an object created from the Student class. Similarly, in an E-commerce website, every product is an object created from the Product class.",

  realWorldUsageTamil:
    "Objects அனைத்து Object-Oriented Software Applications-லிலும் பயன்படுத்தப்படுகின்றன. உதாரணமாக, College Management System-ல் ஒவ்வொரு மாணவரும் Student Class-இல் இருந்து உருவாக்கப்பட்ட ஒரு Object ஆக இருக்கும். அதேபோல் E-commerce Website-ல் ஒவ்வொரு Product-மும் Product Class-இல் இருந்து உருவாக்கப்பட்ட Object ஆகும்.",

  syntax: `object_name = ClassName()`,

  syntaxExplanationEnglish: [
    "An object is created using the class name followed by parentheses ().",
    "The object can access all public attributes of the class.",
    "The object can also call all public methods of the class.",
    "Multiple objects can be created from the same class.",
    "Each object works independently."
  ],

  syntaxExplanationTamil: [
    "Class Name-க்கு பிறகு Parentheses () பயன்படுத்தி Object உருவாக்கப்படுகிறது.",
    "Object மூலம் Class-ன் அனைத்து Public Attributes-ஐ அணுகலாம்.",
    "Object மூலம் Class-ன் அனைத்து Public Methods-ஐ அழைக்கலாம்.",
    "ஒரே Class-இல் இருந்து பல Objects உருவாக்க முடியும்.",
    "ஒவ்வொரு Object-மும் தனித்தனியாக செயல்படும்."
  ],

  exampleProgram: `class Student:
    college = "Don Bosco College"

    def welcome(self):
        print("Welcome to Alaporan Thamizhan!")

deepak = Student()

kathir = Student()

print("Deepak's College :", deepak.college)

print("Kathir's College :", kathir.college)

deepak.welcome()

kathir.welcome()`,

  programExplanationEnglish: [
    "Line 1: A class named 'Student' is created.",
    "Line 2: A class attribute named 'college' is created.",
    "Line 4: A method named 'welcome()' is created inside the class.",
    "Line 7: An object named 'deepak' is created from the Student class.",
    "Line 9: Another object named 'kathir' is created from the same Student class.",
    "Line 11: The 'college' attribute is accessed using the object 'deepak'.",
    "Line 13: The 'college' attribute is accessed using the object 'kathir'.",
    "Line 15: The welcome() method is called using the object 'deepak'.",
    "Line 17: The welcome() method is called using the object 'kathir'.",
    "The program demonstrates how multiple objects can be created from a single class."
  ],

  programExplanationTamil: [
    "வரி 1: 'Student' என்ற Class உருவாக்கப்படுகிறது.",
    "வரி 2: 'college' என்ற Class Attribute உருவாக்கப்படுகிறது.",
    "வரி 4: Class-க்குள் 'welcome()' என்ற Method உருவாக்கப்படுகிறது.",
    "வரி 7: Student Class-இல் இருந்து 'deepak' என்ற Object உருவாக்கப்படுகிறது.",
    "வரி 9: அதே Student Class-இல் இருந்து 'kathir' என்ற மற்றொரு Object உருவாக்கப்படுகிறது.",
    "வரி 11: 'deepak' Object பயன்படுத்தி 'college' Attribute அணுகப்படுகிறது.",
    "வரி 13: 'kathir' Object பயன்படுத்தி 'college' Attribute அணுகப்படுகிறது.",
    "வரி 15: 'deepak' Object மூலம் welcome() Method அழைக்கப்படுகிறது.",
    "வரி 17: 'kathir' Object மூலம் welcome() Method அழைக்கப்படுகிறது.",
    "இந்த Program, ஒரே Class-இல் இருந்து பல Objects உருவாக்கி பயன்படுத்துவது எப்படி என்பதை விளக்குகிறது."
  ],

  output: `Deepak's College : Don Bosco College
Kathir's College : Don Bosco College
Welcome to Alaporan Thamizhan!
Welcome to Alaporan Thamizhan!`,

  locked: false,

  completed: false,
},
{
  id: 25,

  title: "Constructors",

  englishDefinition:
    "A Constructor is a special method in Python that is automatically executed when an object is created. It is used to initialize the object's attributes with initial values. In Python, the constructor is created using the __init__() method.",

  tamilDefinition:
    "Constructor என்பது Python-ல் ஒரு Object உருவாக்கப்படும் போது தானாகவே (Automatically) இயக்கப்படும் சிறப்பு Method ஆகும். இது Object-ன் Attributes-க்கு ஆரம்ப (Initial) மதிப்புகளை வழங்க பயன்படுத்தப்படுகிறது. Python-ல் Constructor, __init__() Method மூலம் உருவாக்கப்படுகிறது.",

  realWorldUsage:
    "Constructors are used in almost every Object-Oriented software application. For example, when a student registers in a College Management System, the constructor automatically initializes the student's name, roll number, and department. Similarly, in an E-commerce website, a Product object is initialized with its name, price, and stock quantity.",

  realWorldUsageTamil:
    "Constructors அனைத்து Object-Oriented Software Applications-லிலும் பயன்படுத்தப்படுகின்றன. உதாரணமாக, College Management System-ல் ஒரு மாணவர் பதிவு செய்யும்போது, Constructor அவரது பெயர், Roll Number மற்றும் Department ஆகியவற்றை தானாகவே Initialize செய்கிறது. அதேபோல் E-commerce Website-ல் Product Name, Price மற்றும் Stock போன்ற தகவல்கள் Constructor மூலம் Initialize செய்யப்படுகின்றன.",

  syntax: `class ClassName:
    def __init__(self):
        # Initialization Statements`,

  syntaxExplanationEnglish: [
    "__init__() is the constructor method in Python.",
    "The constructor is automatically called whenever an object is created.",
    "The 'self' parameter refers to the current object.",
    "The constructor is mainly used to initialize object attributes.",
    "Every object gets initialized automatically when it is created."
  ],

  syntaxExplanationTamil: [
    "__init__() என்பது Python-ல் Constructor Method ஆகும்.",
    "Object உருவாக்கப்படும் போது Constructor தானாகவே அழைக்கப்படுகிறது.",
    "'self' என்பது தற்போதைய Object-ஐ குறிக்கிறது.",
    "Constructor, Object-ன் Attributes-ஐ Initialize செய்ய பயன்படுகிறது.",
    "ஒவ்வொரு Object-மும் உருவாக்கப்படும் போதே தானாக Initialize செய்யப்படுகிறது."
  ],

  exampleProgram: `class Student:

    def __init__(self):
        self.name = "Deepak"

        self.college = "Don Bosco College"

        print("Student Object Created Successfully!")

student = Student()

print("Student Name :", student.name)

print("College :", student.college)

print("Keep Learning with Alaporan Thamizhan!")`,

  programExplanationEnglish: [
    "Line 1: A class named 'Student' is created.",
    "Line 3: The constructor __init__() is defined.",
    "Line 4: The attribute 'name' is initialized with the value 'Deepak'.",
    "Line 6: The attribute 'college' is initialized with the value 'Don Bosco College'.",
    "Line 8: A message is displayed when the constructor executes.",
    "Line 10: An object named 'student' is created, automatically calling the constructor.",
    "Line 12: The value of the 'name' attribute is displayed.",
    "Line 14: The value of the 'college' attribute is displayed.",
    "Line 16: A motivational message is displayed.",
    "The program demonstrates how a constructor automatically initializes object data."
  ],

  programExplanationTamil: [
    "வரி 1: 'Student' என்ற Class உருவாக்கப்படுகிறது.",
    "வரி 3: __init__() என்ற Constructor உருவாக்கப்படுகிறது.",
    "வரி 4: 'name' Attribute-க்கு 'Deepak' என்ற ஆரம்ப மதிப்பு வழங்கப்படுகிறது.",
    "வரி 6: 'college' Attribute-க்கு 'Don Bosco College' என்ற ஆரம்ப மதிப்பு வழங்கப்படுகிறது.",
    "வரி 8: Constructor இயக்கப்படும் போது ஒரு செய்தி திரையில் காட்டப்படுகிறது.",
    "வரி 10: 'student' என்ற Object உருவாக்கப்படும்போது Constructor தானாகவே அழைக்கப்படுகிறது.",
    "வரி 12: 'name' Attribute-ன் மதிப்பு திரையில் காட்டப்படுகிறது.",
    "வரி 14: 'college' Attribute-ன் மதிப்பு திரையில் காட்டப்படுகிறது.",
    "வரி 16: 'Keep Learning with Alaporan Thamizhan!' என்ற ஊக்கமளிக்கும் செய்தி காட்டப்படுகிறது.",
    "இந்த Program, Constructor மூலம் Object உருவாக்கப்படும் போதே Attributes எப்படி Initialize செய்யப்படுகின்றன என்பதை விளக்குகிறது."
  ],

  output: `Student Object Created Successfully!
Student Name : Deepak
College : Don Bosco College
Keep Learning with Alaporan Thamizhan!`,

  locked: false,

  completed: false,
},
{
  id: 26,

  title: "Single Inheritance",

  englishDefinition:
    "Single Inheritance is a type of inheritance in which one child class inherits the properties and methods of one parent class. It allows code reusability by enabling the child class to use the features of the parent class.",

  tamilDefinition:
    "Single Inheritance என்பது ஒரு Child Class, ஒரு Parent Class-இன் Properties மற்றும் Methods-ஐ பெறும் Inheritance வகையாகும். இதன் மூலம் Parent Class-ல் உள்ள Code-ஐ மீண்டும் பயன்படுத்த (Code Reusability) முடியும்.",

  realWorldUsage:
    "Single Inheritance is used in many software applications. For example, in a College Management System, a Student class can inherit common information such as college name and welcome message from a Person class. This avoids writing the same code multiple times.",

  realWorldUsageTamil:
    "Single Inheritance பல Software Applications-லிலும் பயன்படுத்தப்படுகிறது. உதாரணமாக, College Management System-ல் Student Class, Person Class-இல் இருந்து College Name மற்றும் Welcome Message போன்ற பொதுவான தகவல்களை பெறலாம். இதனால் ஒரே Code-ஐ மீண்டும் மீண்டும் எழுத வேண்டிய அவசியம் இருக்காது.",

  syntax: `class Parent:
    # Parent Members

class Child(Parent):
    # Child Members`,

  syntaxExplanationEnglish: [
    "The parent class contains common attributes and methods.",
    "The child class is created by passing the parent class name inside parentheses.",
    "The child class automatically inherits the parent class members.",
    "The child class can also have its own attributes and methods.",
    "Single Inheritance involves only one parent class and one child class."
  ],

  syntaxExplanationTamil: [
    "Parent Class பொதுவான Attributes மற்றும் Methods-ஐ கொண்டிருக்கும்.",
    "Parent Class பெயரை Parentheses()-க்குள் கொடுத்து Child Class உருவாக்கப்படுகிறது.",
    "Child Class, Parent Class-இன் Members-ஐ தானாகவே பெறுகிறது.",
    "Child Class-க்கு தனிப்பட்ட Attributes மற்றும் Methods இருக்கலாம்.",
    "Single Inheritance-ல் ஒரு Parent Class மற்றும் ஒரு Child Class மட்டுமே இருக்கும்."
  ],

  exampleProgram: `class Person:

    def welcome(self):
        print("Welcome to Alaporan Thamizhan!")

class Student(Person):

    def study(self):
        print("Deepak is learning Python.")

student = Student()

student.welcome()

student.study()`,

  programExplanationEnglish: [
    "Line 1: A parent class named 'Person' is created.",
    "Line 3: The welcome() method is defined inside the Person class.",
    "Line 6: A child class named 'Student' inherits from the Person class.",
    "Line 8: The study() method is defined inside the Student class.",
    "Line 11: An object named 'student' is created from the Student class.",
    "Line 13: The inherited welcome() method is called using the child object.",
    "Line 15: The study() method of the Student class is called.",
    "The program demonstrates how a child class inherits the methods of its parent class."
  ],

  programExplanationTamil: [
    "வரி 1: 'Person' என்ற Parent Class உருவாக்கப்படுகிறது.",
    "வரி 3: Person Class-க்குள் welcome() Method உருவாக்கப்படுகிறது.",
    "வரி 6: 'Student' என்ற Child Class, Person Class-இல் இருந்து Inherit செய்கிறது.",
    "வரி 8: Student Class-க்குள் study() Method உருவாக்கப்படுகிறது.",
    "வரி 11: Student Class-இல் இருந்து 'student' என்ற Object உருவாக்கப்படுகிறது.",
    "வரி 13: Parent Class-இல் இருந்து பெறப்பட்ட welcome() Method அழைக்கப்படுகிறது.",
    "வரி 15: Student Class-இன் study() Method அழைக்கப்படுகிறது.",
    "இந்த Program, Child Class எப்படி Parent Class-இன் Methods-ஐ பெறுகிறது என்பதை விளக்குகிறது."
  ],

  output: `Welcome to Alaporan Thamizhan!
Deepak is learning Python.`,

  locked: false,

  completed: false,
},
{
  id: 27,

  title: "Multiple Inheritance",

  englishDefinition:
    "Multiple Inheritance is a type of inheritance in which one child class inherits the properties and methods of two or more parent classes. This allows the child class to use the features of all its parent classes, promoting code reusability.",

  tamilDefinition:
    "Multiple Inheritance என்பது ஒரு Child Class, இரண்டு அல்லது அதற்கு மேற்பட்ட Parent Classes-இன் Properties மற்றும் Methods-ஐ பெறும் Inheritance வகையாகும். இதன் மூலம் Child Class அனைத்து Parent Classes-இன் அம்சங்களையும் பயன்படுத்தி Code Reusability-ஐ அதிகரிக்க முடியும்.",

  realWorldUsage:
    "Multiple Inheritance is used in complex software applications. For example, in a College Management System, a Student class can inherit personal information from a Person class and login features from an Account class. This combines the functionalities of multiple parent classes into a single child class.",

  realWorldUsageTamil:
    "Multiple Inheritance சிக்கலான Software Applications-ல் பயன்படுத்தப்படுகிறது. உதாரணமாக, College Management System-ல் Student Class, Person Class-இல் இருந்து Personal Details-ஐயும், Account Class-இல் இருந்து Login வசதிகளையும் பெறலாம். இதன் மூலம் பல Parent Classes-இன் அம்சங்களை ஒரே Child Class பயன்படுத்த முடியும்.",

  syntax: `class Parent1:
    # Parent1 Members

class Parent2:
    # Parent2 Members

class Child(Parent1, Parent2):
    # Child Members`,

  syntaxExplanationEnglish: [
    "Multiple parent classes are created first.",
    "The child class inherits from all parent classes by listing them inside parentheses.",
    "The child class can access the members of every parent class.",
    "The child class can also have its own methods and attributes.",
    "Multiple Inheritance improves code reusability by combining features from multiple classes."
  ],

  syntaxExplanationTamil: [
    "முதலில் பல Parent Classes உருவாக்கப்படுகின்றன.",
    "Parentheses()-க்குள் Parent Class பெயர்களை கொடுத்து Child Class உருவாக்கப்படுகிறது.",
    "Child Class அனைத்து Parent Classes-இன் Members-ஐ அணுக முடியும்.",
    "Child Class-க்கு தனிப்பட்ட Methods மற்றும் Attributes இருக்கலாம்.",
    "Multiple Inheritance பல Classes-இன் அம்சங்களை இணைத்து Code Reusability-ஐ அதிகரிக்கிறது."
  ],

  exampleProgram: `class Person:

    def welcome(self):
        print("Welcome to Alaporan Thamizhan!")

class Account:

    def login(self):
        print("Login Successful!")

class Student(Person, Account):

    def study(self):
        print("Deepak and Kathir are learning Python.")

student = Student()

student.welcome()

student.login()

student.study()`,

  programExplanationEnglish: [
    "Line 1: A parent class named 'Person' is created.",
    "Line 3: The welcome() method is defined inside the Person class.",
    "Line 6: Another parent class named 'Account' is created.",
    "Line 8: The login() method is defined inside the Account class.",
    "Line 11: The Student class inherits from both Person and Account classes.",
    "Line 13: The study() method is created inside the Student class.",
    "Line 16: An object named 'student' is created.",
    "Line 18: The inherited welcome() method is called.",
    "Line 20: The inherited login() method is called.",
    "Line 22: The study() method of the Student class is called.",
    "The program demonstrates how one child class inherits methods from multiple parent classes."
  ],

  programExplanationTamil: [
    "வரி 1: 'Person' என்ற Parent Class உருவாக்கப்படுகிறது.",
    "வரி 3: Person Class-க்குள் welcome() Method உருவாக்கப்படுகிறது.",
    "வரி 6: 'Account' என்ற மற்றொரு Parent Class உருவாக்கப்படுகிறது.",
    "வரி 8: Account Class-க்குள் login() Method உருவாக்கப்படுகிறது.",
    "வரி 11: Student Class, Person மற்றும் Account ஆகிய இரண்டு Parent Classes-இல் இருந்தும் Inherit செய்கிறது.",
    "வரி 13: Student Class-க்குள் study() Method உருவாக்கப்படுகிறது.",
    "வரி 16: 'student' என்ற Object உருவாக்கப்படுகிறது.",
    "வரி 18: Person Class-இன் welcome() Method அழைக்கப்படுகிறது.",
    "வரி 20: Account Class-இன் login() Method அழைக்கப்படுகிறது.",
    "வரி 22: Student Class-இன் study() Method அழைக்கப்படுகிறது.",
    "இந்த Program, ஒரு Child Class பல Parent Classes-இன் Methods-ஐ எப்படி பயன்படுத்துகிறது என்பதை விளக்குகிறது."
  ],

  output: `Welcome to Alaporan Thamizhan!
Login Successful!
Deepak and Kathir are learning Python.`,

  locked: false,

  completed: false,
},

];

export default topics;