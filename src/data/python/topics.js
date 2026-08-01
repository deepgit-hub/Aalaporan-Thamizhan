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
];

export default topics;