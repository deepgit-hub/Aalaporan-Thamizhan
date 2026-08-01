const topics = [
    {
   
    id: 1,

    title: "Introduction to C++",

    englishDefinition:
      "C++ is a powerful, general-purpose programming language developed by Bjarne Stroustrup in 1979. It is an extension of the C programming language that supports both procedural programming and Object-Oriented Programming (OOP). C++ is widely used for developing operating systems, games, desktop applications, embedded systems, and high-performance software.",

    tamilDefinition:
      "C++ என்பது Bjarne Stroustrup அவர்களால் 1979 ஆம் ஆண்டு உருவாக்கப்பட்ட சக்திவாய்ந்த பொது பயன்பாட்டு நிரலாக்க மொழியாகும். இது C மொழியின் மேம்பட்ட வடிவமாகும். Procedural Programming மற்றும் Object-Oriented Programming (OOP) ஆகிய இரண்டையும் ஆதரிக்கிறது. Operating Systems, Games, Desktop Applications, Embedded Systems மற்றும் High Performance Software போன்றவற்றை உருவாக்க C++ பரவலாக பயன்படுத்தப்படுகிறது.",

    realWorldUsage:
      "C++ is used in game development (Unreal Engine), operating systems, web browsers, database systems, robotics, embedded systems, and applications where high performance and speed are required.",

    realWorldUsageTamil:
      "C++ மொழி Game Development (Unreal Engine), Operating Systems, Web Browsers, Database Systems, Robotics, Embedded Systems மற்றும் அதிக வேகத்தில் செயல்பட வேண்டிய மென்பொருட்களை உருவாக்க பயன்படுத்தப்படுகிறது.",

    syntax: `#include <iostream>

using namespace std;

int main()
{
    cout << "Hello, World!";

    return 0;
}`,

    syntaxExplanationEnglish: [
      "#include <iostream> includes the input and output library.",
      "using namespace std; allows us to use cout and cin without writing std::.",
      "int main() is the starting point of every C++ program.",
      "cout is used to display output on the screen.",
      "return 0; indicates that the program executed successfully."
    ],

    syntaxExplanationTamil: [
      "#include <iostream> என்பது Input மற்றும் Output Library-ஐ இணைக்கிறது.",
      "using namespace std; பயன்படுத்துவதால் std:: என்று எழுத வேண்டியதில்லை.",
      "int main() என்பது ஒவ்வொரு C++ Program-இன் ஆரம்ப இடமாகும்.",
      "cout மூலம் திரையில் Output காட்டப்படுகிறது.",
      "return 0; Program வெற்றிகரமாக முடிந்ததை Operating System-க்கு தெரிவிக்கிறது."
    ],

    exampleProgram: `#include <iostream>

using namespace std;

int main()
{
    cout << "Welcome to Alaporan Tamilan!";

    return 0;
}`,

    programExplanationEnglish: [
      "The program starts execution from the main() function.",
      "cout displays the given text on the console.",
      "The program ends after executing return 0."
    ],

    programExplanationTamil: [
      "Program ஆனது main() Function-இல் இருந்து தொடங்குகிறது.",
      "cout கொடுக்கப்பட்டுள்ள உரையை Console-இல் காட்டுகிறது.",
      "return 0; மூலம் Program வெற்றிகரமாக முடிவடைகிறது."
    ],

    output: `Welcome to Alaporan Tamilan!`,

    locked: false,

    completed: false,
  },
  {
  id: 2,

  title: "Variables",

  englishDefinition:
    "A variable is a named memory location used to store data. The value stored in a variable can be changed during program execution. Variables make it easy to store, retrieve, and manipulate data in a C++ program.",

  tamilDefinition:
    "Variable என்பது தரவுகளை (Data) சேமிக்க பயன்படும் பெயரிடப்பட்ட நினைவக இடமாகும். Program இயங்கும் போது அதில் இருக்கும் மதிப்பை மாற்றலாம். Variable-கள் தரவுகளை சேமிக்கவும், பயன்படுத்தவும், மாற்றவும் உதவுகின்றன.",

  realWorldUsage:
    "Variables are used in almost every software application. For example, a banking system stores the account balance in a variable, a game stores the player's score in a variable, and an e-commerce website stores the quantity of products selected by the user in variables.",

  realWorldUsageTamil:
    "Variable-கள் அனைத்து Software-களிலும் பயன்படுத்தப்படுகின்றன. உதாரணமாக, Banking Application-ல் Account Balance, Game-ல் Player Score, E-commerce Website-ல் Product Quantity போன்ற தகவல்கள் Variable-களில் சேமிக்கப்படுகின்றன.",

  syntax: `dataType variableName = value;`,

  syntaxExplanationEnglish: [
    "dataType specifies the type of data to be stored, such as int, float, char, or bool.",
    "variableName is the name given to the variable.",
    "The assignment operator (=) stores the value into the variable.",
    "The value must be compatible with the specified data type.",
    "Each variable declaration ends with a semicolon (;)."
  ],

  syntaxExplanationTamil: [
    "dataType என்பது எந்த வகையான தரவு சேமிக்கப்படுகிறது என்பதை குறிப்பிடுகிறது. (int, float, char, bool போன்றவை).",
    "variableName என்பது Variable-க்கு கொடுக்கப்படும் பெயராகும்.",
    "= Operator மூலம் Value Variable-இல் சேமிக்கப்படுகிறது.",
    "கொடுக்கப்படும் Value, குறிப்பிடப்பட்ட Data Type-க்கு பொருத்தமானதாக இருக்க வேண்டும்.",
    "ஒவ்வொரு Variable Declaration-மும் Semicolon (;) மூலம் முடிவடைகிறது."
  ],

  exampleProgram: `#include <iostream>

using namespace std;

int main()
{
    int age = 20;

    cout << "Age = " << age;

    return 0;
}`,

  programExplanationEnglish: [
    "The variable 'age' of type int is created.",
    "The value 20 is stored in the variable.",
    "cout displays the text 'Age =' followed by the value stored in the variable.",
    "Finally, the program ends successfully."
  ],

  programExplanationTamil: [
    "'age' என்ற Integer Variable உருவாக்கப்படுகிறது.",
    "அதில் 20 என்ற மதிப்பு சேமிக்கப்படுகிறது.",
    "cout மூலம் 'Age =' மற்றும் Variable-இல் இருக்கும் மதிப்பு திரையில் காட்டப்படுகிறது.",
    "இறுதியாக Program வெற்றிகரமாக முடிகிறது."
  ],

  output: `Age = 20`,

  locked: false,

  completed: false,
},
{
  id: 3,

  title: "Data Types",

  englishDefinition:
    "A data type specifies the type of data that a variable can store. Different data types occupy different amounts of memory and are used for different kinds of values such as numbers, characters, decimal values, and true or false.",

  tamilDefinition:
    "Data Type என்பது ஒரு Variable எந்த வகையான தரவை சேமிக்க முடியும் என்பதை குறிப்பிடுகிறது. ஒவ்வொரு Data Type-க்கும் தனித்தனி Memory அளவு இருக்கும். முழு எண்கள், தசம எண்கள், எழுத்துக்கள் மற்றும் True அல்லது False போன்ற மதிப்புகளை சேமிக்க வெவ்வேறு Data Types பயன்படுத்தப்படுகின்றன.",

  realWorldUsage:
    "Data types are used in every software application. For example, a student's age is stored as an integer, percentage as a float, grade as a character, and whether a student has paid the fees as a boolean value.",

  realWorldUsageTamil:
    "அனைத்து Software-களிலும் Data Types பயன்படுத்தப்படுகின்றன. உதாரணமாக, மாணவரின் வயது Integer ஆகவும், மதிப்பெண் சதவீதம் Float ஆகவும், Grade Character ஆகவும், Fees செலுத்தியுள்ளாரா என்பதை Boolean ஆகவும் சேமிக்கப்படுகிறது.",

  syntax: `int age = 20;
float percentage = 95.5;
char grade = 'A';
bool isPlaced = true;`,

  syntaxExplanationEnglish: [
    "int stores whole numbers.",
    "float stores decimal numbers.",
    "char stores a single character enclosed in single quotes.",
    "bool stores either true or false values.",
    "Each variable must be declared using an appropriate data type."
  ],

  syntaxExplanationTamil: [
    "int முழு எண்களை (Whole Numbers) சேமிக்கிறது.",
    "float தசம எண்களை (Decimal Numbers) சேமிக்கிறது.",
    "char ஒரு எழுத்தை மட்டும் Single Quotes (' ') உள்ளே சேமிக்கிறது.",
    "bool true அல்லது false என்ற இரண்டு மதிப்புகளை மட்டும் சேமிக்கிறது.",
    "ஒவ்வொரு Variable-க்கும் சரியான Data Type பயன்படுத்த வேண்டும்."
  ],

  exampleProgram: `#include <iostream>

using namespace std;

int main()
{
    string name = "Deepak";

    int age = 20;

    float cgpa = 9.2;

    char grade = 'A';

    bool isProgrammer = true;

    cout << "Name : " << name << endl;

    cout << "Age : " << age << endl;

    cout << "CGPA : " << cgpa << endl;

    cout << "Grade : " << grade << endl;

    cout << "Programmer : " << isProgrammer << endl;

    return 0;
}`,

  programExplanationEnglish: [
     "Line 1: #include <iostream> includes the input and output library.",
  "Line 3: using namespace std; allows us to use cout without writing std::.",
  "Line 5: int main() is the starting point of the program.",
  "Line 7: A string variable named 'name' is created and stores 'Deepak'.",
  "Line 9: An integer variable named 'age' stores the value 20.",
  "Line 11: A float variable named 'cgpa' stores the decimal value 9.2.",
  "Line 13: A character variable named 'grade' stores the character 'A'.",
  "Line 15: A boolean variable named 'isProgrammer' stores the value true.",
  "Line 17: cout displays the student's name.",
  "Line 19: cout displays the student's age.",
  "Line 21: cout displays the student's CGPA.",
  "Line 23: cout displays the student's grade.",
  "Line 25: cout displays whether the student is a programmer.",
  "Line 27: return 0; ends the program successfully."
  ],

  programExplanationTamil: [
     "வரி 1: #include <iostream> என்பது Input மற்றும் Output Library-ஐ இணைக்கிறது.",
  "வரி 3: using namespace std; பயன்படுத்துவதால் std:: என்று எழுத வேண்டியதில்லை.",
  "வரி 5: int main() என்பது Program தொடங்கும் இடமாகும்.",
  "வரி 7: 'name' என்ற String Variable உருவாக்கப்பட்டு 'Deepak' சேமிக்கப்படுகிறது.",
  "வரி 9: 'age' என்ற Integer Variable-ல் 20 சேமிக்கப்படுகிறது.",
  "வரி 11: 'cgpa' என்ற Float Variable-ல் 9.2 சேமிக்கப்படுகிறது.",
  "வரி 13: 'grade' என்ற Character Variable-ல் 'A' சேமிக்கப்படுகிறது.",
  "வரி 15: 'isProgrammer' என்ற Boolean Variable-ல் true சேமிக்கப்படுகிறது.",
  "வரி 17: cout மாணவரின் பெயரை திரையில் காட்டுகிறது.",
  "வரி 19: cout மாணவரின் வயதை திரையில் காட்டுகிறது.",
  "வரி 21: cout CGPA-வை திரையில் காட்டுகிறது.",
  "வரி 23: cout Grade-ஐ திரையில் காட்டுகிறது.",
  "வரி 25: cout Programmer தகவலை திரையில் காட்டுகிறது.",
  "வரி 27: return 0; Program-ஐ வெற்றிகரமாக முடிக்கிறது."
  ],

  output: `Name : Deepak
Age : 20
CGPA : 9.2
Grade : A
Programmer : 1`,

  locked: false,

  completed: false,
},
{
  id: 4,

  title: "Input and Output",

  englishDefinition:
    "Input and Output (I/O) are used to interact with the user. In C++, 'cin' is used to receive input from the user, and 'cout' is used to display output on the screen.",

  tamilDefinition:
    "Input மற்றும் Output (I/O) என்பது பயனருடன் தொடர்பு கொள்ள பயன்படுகிறது. C++-ல் 'cin' என்பது பயனரிடமிருந்து Input பெற பயன்படுத்தப்படுகிறது. 'cout' என்பது Output-ஐ திரையில் காட்ட பயன்படுத்தப்படுகிறது.",

  realWorldUsage:
    "Input and Output are used in almost every software application. For example, ATM machines ask users to enter their PIN, online shopping websites ask users to enter delivery details, and college portals ask students to enter their registration number.",

  realWorldUsageTamil:
    "Input மற்றும் Output அனைத்து Software-களிலும் பயன்படுத்தப்படுகின்றன. உதாரணமாக, ATM-ல் PIN Number கேட்பது, Online Shopping Website-ல் Address பெறுவது, College Portal-ல் Register Number பெறுவது ஆகியவை Input மற்றும் Output பயன்பாடுகளாகும்.",

  syntax: `cout << "Message";

cin >> variableName;`,

  syntaxExplanationEnglish: [
    "cout is used to display output on the screen.",
    "<< is called the insertion operator.",
    "cin is used to receive input from the user.",
    ">> is called the extraction operator.",
    "The value entered by the user is stored in the specified variable."
  ],

  syntaxExplanationTamil: [
    "cout என்பது Output-ஐ திரையில் காட்ட பயன்படுத்தப்படுகிறது.",
    "<< என்பது Insertion Operator எனப்படுகிறது.",
    "cin என்பது பயனரிடமிருந்து Input பெற பயன்படுத்தப்படுகிறது.",
    ">> என்பது Extraction Operator எனப்படுகிறது.",
    "பயனர் கொடுக்கும் மதிப்பு குறிப்பிடப்பட்ட Variable-ல் சேமிக்கப்படுகிறது."
  ],

  exampleProgram: `#include <iostream>

using namespace std;

int main()
{
    string name;

    int age;

    cout << "Enter your name: ";

    cin >> name;

    cout << "Enter your age: ";

    cin >> age;

    cout << endl;

    cout << "Welcome " << name << "!" << endl;

    cout << "Age : " << age << endl;

    cout << "Keep Learning with Deepak!" << endl;

    return 0;
}`,

  programExplanationEnglish: [
    "Line 1: #include <iostream> includes the input and output library.",
    "Line 3: using namespace std; allows us to use cin and cout without writing std::.",
    "Line 5: int main() is the starting point of the program.",
    "Line 7: A string variable named 'name' is declared.",
    "Line 9: An integer variable named 'age' is declared.",
    "Line 11: cout asks the user to enter their name.",
    "Line 13: cin receives the user's name and stores it in the variable 'name'.",
    "Line 15: cout asks the user to enter their age.",
    "Line 17: cin receives the user's age and stores it in the variable 'age'.",
    "Line 19: cout << endl; moves the cursor to the next line.",
    "Line 21: Displays a welcome message with the user's name.",
    "Line 23: Displays the user's age.",
    "Line 25: Displays a motivational message.",
    "Line 27: return 0; ends the program successfully."
  ],

  programExplanationTamil: [
    "வரி 1: #include <iostream> என்பது Input மற்றும் Output Library-ஐ இணைக்கிறது.",
    "வரி 3: using namespace std; பயன்படுத்துவதால் std:: என்று எழுத வேண்டியதில்லை.",
    "வரி 5: int main() என்பது Program தொடங்கும் இடமாகும்.",
    "வரி 7: 'name' என்ற String Variable உருவாக்கப்படுகிறது.",
    "வரி 9: 'age' என்ற Integer Variable உருவாக்கப்படுகிறது.",
    "வரி 11: cout மூலம் பயனரின் பெயர் கேட்கப்படுகிறது.",
    "வரி 13: cin மூலம் பயனர் உள்ளிடும் பெயர் 'name' Variable-ல் சேமிக்கப்படுகிறது.",
    "வரி 15: cout மூலம் பயனரின் வயது கேட்கப்படுகிறது.",
    "வரி 17: cin மூலம் பயனர் உள்ளிடும் வயது 'age' Variable-ல் சேமிக்கப்படுகிறது.",
    "வரி 19: endl அடுத்த வரிக்கு Cursor-ஐ நகர்த்துகிறது.",
    "வரி 21: பயனரின் பெயருடன் வரவேற்பு செய்தி காட்டப்படுகிறது.",
    "வரி 23: பயனரின் வயது திரையில் காட்டப்படுகிறது.",
    "வரி 25: ஒரு ஊக்கமளிக்கும் செய்தி திரையில் காட்டப்படுகிறது.",
    "வரி 27: return 0; Program-ஐ வெற்றிகரமாக முடிக்கிறது."
  ],

  output: `Enter your name: Deepak
Enter your age: 20

Welcome Deepak!
Age : 20
Keep Learning with Deepak!`,

  locked: false,

  completed: false,
},
{
  id: 5,

  title: "Operators",

  englishDefinition:
    "Operators are special symbols used to perform operations on variables and values. They help us perform arithmetic calculations, compare values, assign values, and make logical decisions in a C++ program.",

  tamilDefinition:
    "Operators என்பது Variables மற்றும் Values மீது செயல்பாடுகளை செய்ய பயன்படும் சிறப்பு குறியீடுகள் (Symbols) ஆகும். C++ Program-இல் கணிதக் கணக்குகள் செய்வது, மதிப்புகளை ஒப்பிடுவது, மதிப்புகளை Assign செய்வது மற்றும் Logical முடிவுகளை எடுப்பது போன்ற செயல்களுக்கு Operators பயன்படுத்தப்படுகின்றன.",

  realWorldUsage:
    "Operators are used in every software application. For example, a calculator uses arithmetic operators, an ATM compares the entered PIN using comparison operators, and an e-commerce website calculates the total bill using arithmetic operators.",

  realWorldUsageTamil:
    "Operators அனைத்து Software-களிலும் பயன்படுத்தப்படுகின்றன. உதாரணமாக, Calculator-ல் Arithmetic Operators, ATM-ல் PIN சரிபார்க்க Comparison Operators, E-commerce Website-ல் Bill கணக்கிட Arithmetic Operators பயன்படுத்தப்படுகின்றன.",

  syntax: `int a = 10;
int b = 5;

cout << a + b;
cout << a - b;
cout << a * b;
cout << a / b;
cout << a % b;`,

  syntaxExplanationEnglish: [
    "+ is the Addition Operator.",
    "- is the Subtraction Operator.",
    "* is the Multiplication Operator.",
    "/ is the Division Operator.",
    "% is the Modulus Operator that returns the remainder after division."
  ],

  syntaxExplanationTamil: [
    "+ என்பது கூட்டல் (Addition) Operator ஆகும்.",
    "- என்பது கழித்தல் (Subtraction) Operator ஆகும்.",
    "* என்பது பெருக்கல் (Multiplication) Operator ஆகும்.",
    "/ என்பது வகுத்தல் (Division) Operator ஆகும்.",
    "% என்பது Modulus Operator ஆகும். இது வகுத்த பிறகு மீதமுள்ள மதிப்பை (Remainder) வழங்குகிறது."
  ],

  exampleProgram: `#include <iostream>

using namespace std;

int main()
{
    int deepakMarks = 90;

    int practicalMarks = 10;

    int total = deepakMarks + practicalMarks;

    cout << "Theory Marks : " << deepakMarks << endl;

    cout << "Practical Marks : " << practicalMarks << endl;

    cout << "Total Marks : " << total << endl;

    return 0;
}`,

  programExplanationEnglish: [
    "Line 1: #include <iostream> includes the input and output library.",
    "Line 3: using namespace std; allows us to use cout without writing std::.",
    "Line 5: int main() is the starting point of the program.",
    "Line 7: An integer variable 'deepakMarks' is created and stores 90.",
    "Line 9: An integer variable 'practicalMarks' is created and stores 10.",
    "Line 11: The Addition Operator (+) adds both marks and stores the result in 'total'.",
    "Line 13: Displays the theory marks.",
    "Line 15: Displays the practical marks.",
    "Line 17: Displays the total marks.",
    "Line 19: return 0; ends the program successfully."
  ],

  programExplanationTamil: [
    "வரி 1: #include <iostream> என்பது Input மற்றும் Output Library-ஐ இணைக்கிறது.",
    "வரி 3: using namespace std; பயன்படுத்துவதால் std:: என்று எழுத வேண்டியதில்லை.",
    "வரி 5: int main() என்பது Program தொடங்கும் இடமாகும்.",
    "வரி 7: 'deepakMarks' என்ற Integer Variable-ல் 90 சேமிக்கப்படுகிறது.",
    "வரி 9: 'practicalMarks' என்ற Integer Variable-ல் 10 சேமிக்கப்படுகிறது.",
    "வரி 11: Addition Operator (+) இரண்டு மதிப்புகளையும் கூட்டி 'total' Variable-ல் சேமிக்கிறது.",
    "வரி 13: Theory Marks திரையில் காட்டப்படுகிறது.",
    "வரி 15: Practical Marks திரையில் காட்டப்படுகிறது.",
    "வரி 17: Total Marks திரையில் காட்டப்படுகிறது.",
    "வரி 19: return 0; Program-ஐ வெற்றிகரமாக முடிக்கிறது."
  ],

  output: `Theory Marks : 90
Practical Marks : 10
Total Marks : 100`,

  locked: false,

  completed: false,
},
{
  id: 6,

  title: "If Statement",

  englishDefinition:
    "The if statement is a decision-making statement used to execute a block of code only when a specified condition is true. If the condition is false, the block of code inside the if statement is skipped.",

  tamilDefinition:
    "If Statement என்பது ஒரு Decision Making Statement ஆகும். கொடுக்கப்பட்டுள்ள Condition உண்மையாக (True) இருந்தால் மட்டுமே அதன் உள்ளே உள்ள Code இயங்கும். Condition தவறாக (False) இருந்தால் அந்த Code இயக்கப்படாது.",

  realWorldUsage:
    "If statements are used in almost every software application. For example, an ATM checks whether the entered PIN is correct, a college portal verifies whether attendance is above 75%, and an e-commerce website checks whether a product is in stock before allowing a purchase.",

  realWorldUsageTamil:
    "If Statement அனைத்து Software-களிலும் பயன்படுத்தப்படுகிறது. உதாரணமாக, ATM-ல் PIN சரியானதா என்பதை சரிபார்ப்பது, College Portal-ல் Attendance 75% மேல் உள்ளதா என்பதை சரிபார்ப்பது, E-commerce Website-ல் Product Stock உள்ளதா என்பதை சரிபார்ப்பது போன்ற இடங்களில் பயன்படுத்தப்படுகிறது.",

  syntax: `if(condition)
{
    // Code to execute if the condition is true
}`,

  syntaxExplanationEnglish: [
    "The keyword 'if' starts the conditional statement.",
    "The condition is written inside parentheses ().",
    "If the condition is true, the code inside the curly braces {} executes.",
    "If the condition is false, the code inside the curly braces is skipped."
  ],

  syntaxExplanationTamil: [
    "'if' என்பது Conditional Statement-ஐ தொடங்கும் Keyword ஆகும்.",
    "Condition எப்போதும் Parentheses () உள்ளே எழுதப்படுகிறது.",
    "Condition True ஆக இருந்தால் Curly Braces {} உள்ளே இருக்கும் Code இயக்கப்படும்.",
    "Condition False ஆக இருந்தால் Curly Braces உள்ளே இருக்கும் Code இயக்கப்படாது."
  ],

  exampleProgram: `#include <iostream>

using namespace std;

int main()
{
    int deepakMarks = 95;

    if(deepakMarks >= 50)
    {
        cout << "Congratulations Deepak! You Passed.";
    }

    return 0;
}`,

  programExplanationEnglish: [
    "Line 1: #include <iostream> includes the input and output library.",
    "Line 3: using namespace std; allows us to use cout without writing std::.",
    "Line 5: int main() is the starting point of the program.",
    "Line 7: An integer variable 'deepakMarks' is created and stores the value 95.",
    "Line 9: The if statement checks whether deepakMarks is greater than or equal to 50.",
    "Line 10: Since the condition is true, the code inside the if block executes.",
    "Line 11: cout displays the message 'Congratulations Deepak! You Passed.'",
    "Line 14: return 0; ends the program successfully."
  ],

  programExplanationTamil: [
    "வரி 1: #include <iostream> என்பது Input மற்றும் Output Library-ஐ இணைக்கிறது.",
    "வரி 3: using namespace std; பயன்படுத்துவதால் std:: என்று எழுத வேண்டியதில்லை.",
    "வரி 5: int main() என்பது Program தொடங்கும் இடமாகும்.",
    "வரி 7: 'deepakMarks' என்ற Integer Variable-ல் 95 சேமிக்கப்படுகிறது.",
    "வரி 9: if Statement, deepakMarks 50-க்கு சமமா அல்லது அதைவிட பெரியதா என்பதை சரிபார்க்கிறது.",
    "வரி 10: Condition True ஆக இருப்பதால் if Block உள்ளே இருக்கும் Code இயக்கப்படுகிறது.",
    "வரி 11: cout மூலம் 'Congratulations Deepak! You Passed.' என்ற செய்தி திரையில் காட்டப்படுகிறது.",
    "வரி 14: return 0; Program-ஐ வெற்றிகரமாக முடிக்கிறது."
  ],

  output: `Congratulations Deepak! You Passed.`,

  locked: false,

  completed: false,
},
{
  id: 7,

  title: "If-Else Statement",

  englishDefinition:
    "The if-else statement is a decision-making statement used to execute one block of code when a condition is true and another block of code when the condition is false. It allows a program to choose between two different actions.",

  tamilDefinition:
    "If-Else Statement என்பது ஒரு Decision Making Statement ஆகும். கொடுக்கப்பட்டுள்ள Condition உண்மையாக (True) இருந்தால் if Block-இல் உள்ள Code இயங்கும். Condition தவறாக (False) இருந்தால் else Block-இல் உள்ள Code இயங்கும். இதன் மூலம் Program இரண்டு செயல்களில் ஒன்றை தேர்வு செய்து இயக்க முடியும்.",

  realWorldUsage:
    "If-Else statements are used in many real-world applications. For example, a login system checks whether the username and password are correct, an ATM verifies whether the entered PIN is valid, and an online shopping website checks whether a product is available before allowing a purchase.",

  realWorldUsageTamil:
    "If-Else Statement பல Software-களில் பயன்படுத்தப்படுகிறது. உதாரணமாக, Login System-ல் Username மற்றும் Password சரியானதா என்பதை சரிபார்ப்பது, ATM-ல் PIN சரியானதா என்பதை சரிபார்ப்பது, Online Shopping Website-ல் Product கிடைக்கிறதா என்பதை சரிபார்ப்பது போன்ற இடங்களில் பயன்படுத்தப்படுகிறது.",

  syntax: `if(condition)
{
    // Executes if the condition is true
}
else
{
    // Executes if the condition is false
}`,

  syntaxExplanationEnglish: [
    "The 'if' keyword checks the given condition.",
    "If the condition is true, the code inside the if block executes.",
    "The 'else' keyword executes when the condition is false.",
    "Only one block (if or else) executes at a time.",
    "Curly braces {} contain the statements to be executed."
  ],

  syntaxExplanationTamil: [
    "'if' Keyword கொடுக்கப்பட்டுள்ள Condition-ஐ சரிபார்க்கிறது.",
    "Condition True ஆக இருந்தால் if Block உள்ளே இருக்கும் Code இயக்கப்படும்.",
    "'else' Keyword, Condition False ஆக இருந்தால் இயக்கப்படும்.",
    "ஒரே நேரத்தில் if அல்லது else ஆகியவற்றில் ஒன்று மட்டுமே இயக்கப்படும்.",
    "Curly Braces {} உள்ளே இயக்க வேண்டிய Statements எழுதப்படுகின்றன."
  ],

  exampleProgram: `#include <iostream>

using namespace std;

int main()
{
    int deepakMarks = 45;

    if(deepakMarks >= 50)
    {
        cout << "Congratulations Deepak! You Passed.";
    }
    else
    {
        cout << "Don't Give Up Deepak! Better Luck Next Time.";
    }

    return 0;
}`,

  programExplanationEnglish: [
    "Line 1: #include <iostream> includes the input and output library.",
    "Line 3: using namespace std; allows us to use cout without writing std::.",
    "Line 5: int main() is the starting point of the program.",
    "Line 7: An integer variable 'deepakMarks' is created and stores the value 45.",
    "Line 9: The if statement checks whether deepakMarks is greater than or equal to 50.",
    "Line 10: Since the condition is false, the if block is skipped.",
    "Line 13: The else block executes because the condition is false.",
    "Line 15: cout displays the message 'Don't Give Up Deepak! Better Luck Next Time.'",
    "Line 18: return 0; ends the program successfully."
  ],

  programExplanationTamil: [
    "வரி 1: #include <iostream> என்பது Input மற்றும் Output Library-ஐ இணைக்கிறது.",
    "வரி 3: using namespace std; பயன்படுத்துவதால் std:: என்று எழுத வேண்டியதில்லை.",
    "வரி 5: int main() என்பது Program தொடங்கும் இடமாகும்.",
    "வரி 7: 'deepakMarks' என்ற Integer Variable-ல் 45 சேமிக்கப்படுகிறது.",
    "வரி 9: if Statement, deepakMarks 50-க்கு சமமா அல்லது அதைவிட பெரியதா என்பதை சரிபார்க்கிறது.",
    "வரி 10: Condition False ஆக இருப்பதால் if Block இயக்கப்படாது.",
    "வரி 13: Condition False என்பதால் else Block இயக்கப்படுகிறது.",
    "வரி 15: cout மூலம் 'Don't Give Up Deepak! Better Luck Next Time.' என்ற செய்தி திரையில் காட்டப்படுகிறது.",
    "வரி 18: return 0; Program-ஐ வெற்றிகரமாக முடிக்கிறது."
  ],

  output: `Don't Give Up Deepak! Better Luck Next Time.`,

  locked: false,

  completed: false,
},
{
  id: 9,

  title: "Switch Statement",

  englishDefinition:
    "The Switch Statement is a decision-making statement used to execute one block of code from multiple available choices. It is a better alternative to multiple if-else statements when checking the value of a single variable.",

  tamilDefinition:
    "Switch Statement என்பது பல தேர்வுகளில் (Choices) ஒன்றை தேர்ந்தெடுத்து அதற்கான Code-ஐ இயக்க பயன்படும் ஒரு Decision Making Statement ஆகும். ஒரு Variable-ன் மதிப்பை பல முறை ஒப்பிட வேண்டிய சூழலில், பல if-else Statement-களுக்கு பதிலாக Switch Statement பயன்படுத்தப்படுகிறது.",

  realWorldUsage:
    "Switch Statements are widely used in menu-driven applications. For example, ATM machines allow users to select options like Balance Enquiry, Cash Withdrawal, Deposit, and Mini Statement. Based on the selected option, the corresponding operation is executed.",

  realWorldUsageTamil:
    "Switch Statement Menu Driven Software-களில் அதிகமாக பயன்படுத்தப்படுகிறது. உதாரணமாக, ATM-ல் Balance Enquiry, Cash Withdrawal, Deposit, Mini Statement போன்ற விருப்பங்களில் ஒன்றை தேர்வு செய்யும்போது, தேர்வு செய்யப்பட்ட Option-க்கு ஏற்ப Program செயல்படுகிறது.",

  syntax: `switch(expression)
{
    case value1:
        // Code
        break;

    case value2:
        // Code
        break;

    default:
        // Default Code
}`,

  syntaxExplanationEnglish: [
    "switch checks the value of an expression.",
    "Each case represents one possible value of the expression.",
    "The break statement stops the execution after a matching case.",
    "The default block executes when no case matches.",
    "Switch statements improve readability when multiple choices are available."
  ],

  syntaxExplanationTamil: [
    "switch என்பது Expression-ன் மதிப்பை சரிபார்க்கிறது.",
    "ஒவ்வொரு case-மும் Expression-க்கு ஒரு சாத்தியமான மதிப்பைக் குறிக்கிறது.",
    "break Statement, பொருந்திய Case முடிந்தவுடன் Switch Statement-இல் இருந்து வெளியேற உதவுகிறது.",
    "எந்த Case-மும் பொருந்தவில்லை என்றால் default Block இயக்கப்படும்.",
    "பல தேர்வுகள் இருக்கும் போது Switch Statement Program-ஐ எளிதாக புரிந்துகொள்ள உதவுகிறது."
  ],

  exampleProgram: `#include <iostream>

using namespace std;

int main()
{
    int choice = 2;

    switch(choice)
    {
        case 1:
            cout << "Java";
            break;

        case 2:
            cout << "C++";
            break;

        case 3:
            cout << "Python";
            break;

        default:
            cout << "Invalid Choice";
    }

    return 0;
}`,

  programExplanationEnglish: [
    "Line 1: #include <iostream> includes the input and output library.",
    "Line 3: using namespace std; allows us to use cout without writing std::.",
    "Line 5: int main() is the starting point of the program.",
    "Line 7: An integer variable 'choice' is created and stores the value 2.",
    "Line 9: The switch statement checks the value stored in 'choice'.",
    "Line 11: Case 1 is skipped because the value is not 1.",
    "Line 15: Case 2 matches the value 2.",
    "Line 17: cout displays 'C++'.",
    "Line 19: break stops the execution of the switch statement.",
    "Line 27: return 0; ends the program successfully."
  ],

  programExplanationTamil: [
    "வரி 1: #include <iostream> என்பது Input மற்றும் Output Library-ஐ இணைக்கிறது.",
    "வரி 3: using namespace std; பயன்படுத்துவதால் std:: என்று எழுத வேண்டியதில்லை.",
    "வரி 5: int main() என்பது Program தொடங்கும் இடமாகும்.",
    "வரி 7: 'choice' என்ற Integer Variable-ல் 2 சேமிக்கப்படுகிறது.",
    "வரி 9: switch Statement, 'choice' Variable-ன் மதிப்பை சரிபார்க்கிறது.",
    "வரி 11: மதிப்பு 1 இல்லாததால் Case 1 இயக்கப்படாது.",
    "வரி 15: மதிப்பு 2 என்பதால் Case 2 இயக்கப்படுகிறது.",
    "வரி 17: cout மூலம் 'C++' திரையில் காட்டப்படுகிறது.",
    "வரி 19: break Statement Switch Statement-இல் இருந்து வெளியேறுகிறது.",
    "வரி 27: return 0; Program-ஐ வெற்றிகரமாக முடிக்கிறது."
  ],

  output: `C++`,

  locked: false,

  completed: false,
},
{
  id: 10,

  title: "Ternary Operator",

  englishDefinition:
    "The Ternary Operator is a shorthand way of writing an if-else statement. It checks a condition and returns one value if the condition is true and another value if the condition is false. It makes simple decision-making statements shorter and easier to read.",

  tamilDefinition:
    "Ternary Operator என்பது If-Else Statement-ன் சுருக்கமான (Short Form) வடிவமாகும். இது ஒரு Condition-ஐ சரிபார்த்து, அது True ஆக இருந்தால் ஒரு மதிப்பையும், False ஆக இருந்தால் மற்றொரு மதிப்பையும் வழங்குகிறது. எளிய Decision Making Program-களை குறுகிய வடிவில் எழுத இது பயன்படுகிறது.",

  realWorldUsage:
    "The Ternary Operator is used in software applications where a simple decision is required. For example, displaying 'Pass' or 'Fail' based on marks, showing 'Online' or 'Offline' status, and checking whether a user is eligible for a service.",

  realWorldUsageTamil:
    "Ternary Operator எளிய முடிவுகளை எடுக்க வேண்டிய Software-களில் பயன்படுத்தப்படுகிறது. உதாரணமாக, மாணவர் Pass அல்லது Fail என்பதை காட்டுவது, User Online அல்லது Offline என்பதை காட்டுவது, மற்றும் ஒரு சேவைக்கு தகுதியானவரா என்பதை சரிபார்ப்பது போன்ற இடங்களில் பயன்படுத்தப்படுகிறது.",

  syntax: `variable = (condition) ? value_if_true : value_if_false;`,

  syntaxExplanationEnglish: [
    "The condition is written inside parentheses ().",
    "The '?' symbol separates the condition from the true value.",
    "If the condition is true, the value before ':' is selected.",
    "If the condition is false, the value after ':' is selected.",
    "The selected value is stored in the specified variable."
  ],

  syntaxExplanationTamil: [
    "Condition எப்போதும் Parentheses () உள்ளே எழுதப்படுகிறது.",
    "'?' Symbol என்பது Condition மற்றும் True Value-ஐ பிரிக்கிறது.",
    "Condition True ஆக இருந்தால் ':'-க்கு முன் இருக்கும் Value தேர்வு செய்யப்படும்.",
    "Condition False ஆக இருந்தால் ':'-க்கு பின் இருக்கும் Value தேர்வு செய்யப்படும்.",
    "தேர்வு செய்யப்பட்ட Value குறிப்பிடப்பட்ட Variable-ல் சேமிக்கப்படுகிறது."
  ],

  exampleProgram: `#include <iostream>

using namespace std;

int main()
{
    int marks = 82;

    string result = (marks >= 50) ? "Pass" : "Fail";

    cout << "Result : " << result << endl;

    cout << "Excellent Work Deepak!" << endl;

    return 0;
}`,

  programExplanationEnglish: [
    "Line 1: #include <iostream> includes the input and output library.",
    "Line 3: using namespace std; allows us to use cout without writing std::.",
    "Line 5: int main() is the starting point of the program.",
    "Line 7: An integer variable 'marks' is created and stores the value 82.",
    "Line 9: The Ternary Operator checks whether marks are greater than or equal to 50.",
    "Line 9: Since the condition is true, 'Pass' is stored in the variable 'result'.",
    "Line 11: cout displays the student's result.",
    "Line 13: cout displays a motivational message.",
    "Line 15: return 0; ends the program successfully."
  ],

  programExplanationTamil: [
    "வரி 1: #include <iostream> என்பது Input மற்றும் Output Library-ஐ இணைக்கிறது.",
    "வரி 3: using namespace std; பயன்படுத்துவதால் std:: என்று எழுத வேண்டியதில்லை.",
    "வரி 5: int main() என்பது Program தொடங்கும் இடமாகும்.",
    "வரி 7: 'marks' என்ற Integer Variable-ல் 82 சேமிக்கப்படுகிறது.",
    "வரி 9: Ternary Operator, Marks 50 அல்லது அதற்கு மேல் உள்ளதா என்பதை சரிபார்க்கிறது.",
    "வரி 9: Condition True ஆக இருப்பதால் 'Pass' என்ற மதிப்பு 'result' Variable-ல் சேமிக்கப்படுகிறது.",
    "வரி 11: cout மூலம் Result திரையில் காட்டப்படுகிறது.",
    "வரி 13: cout மூலம் ஒரு ஊக்கமளிக்கும் செய்தி திரையில் காட்டப்படுகிறது.",
    "வரி 15: return 0; Program-ஐ வெற்றிகரமாக முடிக்கிறது."
  ],

  output: `Result : Pass
Excellent Work Deepak!`,

  locked: false,

  completed: false,
},
{
  id: 11,

  title: "While Loop",

  englishDefinition:
    "A While Loop is a looping statement that repeatedly executes a block of code as long as the given condition is true. It is mainly used when the number of iterations is not known in advance.",

  tamilDefinition:
    "While Loop என்பது ஒரு Looping Statement ஆகும். கொடுக்கப்பட்டுள்ள Condition True ஆக இருக்கும் வரை, அதற்குள் இருக்கும் Code மீண்டும் மீண்டும் இயக்கப்படும். எத்தனை முறை Loop இயங்க வேண்டும் என்பது முன்கூட்டியே தெரியாத போது While Loop பயன்படுத்தப்படுகிறது.",

  realWorldUsage:
    "While Loops are used in many real-world applications. For example, an ATM repeatedly asks the user to enter the correct PIN until it is valid, a login page continues asking for credentials until the correct username and password are entered, and a game keeps running until the player quits.",

  realWorldUsageTamil:
    "While Loop பல Software-களில் பயன்படுத்தப்படுகிறது. உதாரணமாக, ATM-ல் சரியான PIN உள்ளிடும் வரை மீண்டும் கேட்பது, Login System-ல் சரியான Username மற்றும் Password கிடைக்கும் வரை கேட்பது, மற்றும் Game-ல் Player வெளியேறும் வரை Game இயங்குவது போன்ற இடங்களில் பயன்படுத்தப்படுகிறது.",

  syntax: `while(condition)
{
    // Code to execute
}`,

  syntaxExplanationEnglish: [
    "The keyword 'while' starts the loop.",
    "The condition is written inside parentheses ().",
    "The loop continues executing as long as the condition is true.",
    "When the condition becomes false, the loop stops.",
    "The loop variable should be updated inside the loop to avoid an infinite loop."
  ],

  syntaxExplanationTamil: [
    "'while' என்பது Loop-ஐ தொடங்கும் Keyword ஆகும்.",
    "Condition எப்போதும் Parentheses () உள்ளே எழுதப்படுகிறது.",
    "Condition True ஆக இருக்கும் வரை Loop தொடர்ந்து இயக்கப்படும்.",
    "Condition False ஆனவுடன் Loop நிறுத்தப்படும்.",
    "Infinite Loop ஏற்படாமல் இருக்க Loop Variable-ஐ Loop-க்குள் Update செய்ய வேண்டும்."
  ],

  exampleProgram: `#include <iostream>

using namespace std;

int main()
{
    int day = 1;

    while(day <= 5)
    {
        cout << "Day " << day << " : Deepak practiced C++." << endl;

        day++;
    }

    return 0;
}`,

  programExplanationEnglish: [
    "Line 1: #include <iostream> includes the input and output library.",
    "Line 3: using namespace std; allows us to use cout without writing std::.",
    "Line 5: int main() is the starting point of the program.",
    "Line 7: An integer variable 'day' is created and initialized with 1.",
    "Line 9: The while loop checks whether day is less than or equal to 5.",
    "Line 11: cout displays the current day and the practice message.",
    "Line 13: day++ increases the value of day by 1.",
    "Line 9: The condition is checked again after every iteration.",
    "Line 9: When day becomes 6, the condition becomes false and the loop stops.",
    "Line 16: return 0; ends the program successfully."
  ],

  programExplanationTamil: [
    "வரி 1: #include <iostream> என்பது Input மற்றும் Output Library-ஐ இணைக்கிறது.",
    "வரி 3: using namespace std; பயன்படுத்துவதால் std:: என்று எழுத வேண்டியதில்லை.",
    "வரி 5: int main() என்பது Program தொடங்கும் இடமாகும்.",
    "வரி 7: 'day' என்ற Integer Variable உருவாக்கப்பட்டு 1 சேமிக்கப்படுகிறது.",
    "வரி 9: while Loop, day 5-க்கு சமமா அல்லது அதைவிட குறைவா என்பதை சரிபார்க்கிறது.",
    "வரி 11: தற்போதைய நாளும் Practice Message-உம் திரையில் காட்டப்படுகிறது.",
    "வரி 13: day++ மூலம் day-ன் மதிப்பு 1 அதிகரிக்கப்படுகிறது.",
    "வரி 9: ஒவ்வொரு Iteration-க்கும் பிறகு Condition மீண்டும் சரிபார்க்கப்படுகிறது.",
    "வரி 9: day-ன் மதிப்பு 6 ஆனவுடன் Condition False ஆகி Loop நிறுத்தப்படுகிறது.",
    "வரி 16: return 0; Program-ஐ வெற்றிகரமாக முடிக்கிறது."
  ],

  output: `Day 1 : Deepak practiced C++.
Day 2 : Deepak practiced C++.
Day 3 : Deepak practiced C++.
Day 4 : Deepak practiced C++.
Day 5 : Deepak practiced C++.`,

  locked: false,

  completed: false,
},
{
  id: 12,

  title: "Do-While Loop",

  englishDefinition:
    "A Do-While Loop is a looping statement that executes a block of code at least once before checking the condition. After the first execution, the condition is evaluated. If the condition is true, the loop continues; otherwise, it stops.",

  tamilDefinition:
    "Do-While Loop என்பது ஒரு Looping Statement ஆகும். இது முதலில் ஒரு முறை Code-ஐ இயக்கி, அதன் பிறகே Condition-ஐ சரிபார்க்கும். Condition True ஆக இருந்தால் Loop தொடர்ந்து இயங்கும். இல்லையெனில் Loop நிறுத்தப்படும்.",

  realWorldUsage:
    "The Do-While Loop is used when a task must be performed at least once. For example, an ATM displays the menu once before asking the user whether they want to perform another transaction, and a game menu is shown at least once before checking whether the player wants to continue.",

  realWorldUsageTamil:
    "Do-While Loop ஒரு செயலை குறைந்தது ஒரு முறை செய்ய வேண்டிய சூழலில் பயன்படுத்தப்படுகிறது. உதாரணமாக, ATM-ல் Menu முதலில் ஒரு முறை காட்டப்பட்ட பிறகு, மற்றொரு Transaction செய்ய வேண்டுமா என்று கேட்கப்படுகிறது. அதுபோல் Game Menu-வும் குறைந்தது ஒரு முறை காட்டப்படுகிறது.",

  syntax: `do
{
    // Code to execute
}
while(condition);`,

  syntaxExplanationEnglish: [
    "The keyword 'do' starts the loop.",
    "The statements inside the do block execute first.",
    "After executing the block, the condition inside while() is checked.",
    "If the condition is true, the loop executes again.",
    "If the condition is false, the loop terminates."
  ],

  syntaxExplanationTamil: [
    "'do' என்பது Loop-ஐ தொடங்கும் Keyword ஆகும்.",
    "do Block-க்குள் இருக்கும் Statements முதலில் இயக்கப்படும்.",
    "அதன் பிறகு while() உள்ளே இருக்கும் Condition சரிபார்க்கப்படும்.",
    "Condition True ஆக இருந்தால் Loop மீண்டும் இயக்கப்படும்.",
    "Condition False ஆக இருந்தால் Loop நிறுத்தப்படும்."
  ],

  exampleProgram: `#include <iostream>

using namespace std;

int main()
{
    int day = 1;

    do
    {
        cout << "Day " << day << " : Deepak practiced C++." << endl;

        day++;
    }
    while(day <= 5);

    return 0;
}`,

  programExplanationEnglish: [
    "Line 1: #include <iostream> includes the input and output library.",
    "Line 3: using namespace std; allows us to use cout without writing std::.",
    "Line 5: int main() is the starting point of the program.",
    "Line 7: An integer variable 'day' is created and initialized with 1.",
    "Line 9: The do block starts.",
    "Line 11: cout displays the current day and the practice message.",
    "Line 13: day++ increases the value of day by 1.",
    "Line 15: The while condition checks whether day is less than or equal to 5.",
    "Line 15: If the condition is true, the loop executes again; otherwise, it stops.",
    "Line 17: return 0; ends the program successfully."
  ],

  programExplanationTamil: [
    "வரி 1: #include <iostream> என்பது Input மற்றும் Output Library-ஐ இணைக்கிறது.",
    "வரி 3: using namespace std; பயன்படுத்துவதால் std:: என்று எழுத வேண்டியதில்லை.",
    "வரி 5: int main() என்பது Program தொடங்கும் இடமாகும்.",
    "வரி 7: 'day' என்ற Integer Variable உருவாக்கப்பட்டு 1 சேமிக்கப்படுகிறது.",
    "வரி 9: do Block தொடங்குகிறது.",
    "வரி 11: தற்போதைய நாளும் Practice Message-உம் திரையில் காட்டப்படுகிறது.",
    "வரி 13: day++ மூலம் day-ன் மதிப்பு 1 அதிகரிக்கப்படுகிறது.",
    "வரி 15: while Condition, day 5-க்கு சமமா அல்லது அதைவிட குறைவா என்பதை சரிபார்க்கிறது.",
    "வரி 15: Condition True ஆக இருந்தால் Loop மீண்டும் இயக்கப்படும். இல்லையெனில் Loop நிறுத்தப்படும்.",
    "வரி 17: return 0; Program-ஐ வெற்றிகரமாக முடிக்கிறது."
  ],

  output: `Day 1 : Deepak practiced C++.
Day 2 : Deepak practiced C++.
Day 3 : Deepak practiced C++.
Day 4 : Deepak practiced C++.
Day 5 : Deepak practiced C++.`,

  locked: false,

  completed: false,
},
{
  id: 13,

  title: "For Loop",

  englishDefinition:
    "A For Loop is a looping statement used to execute a block of code repeatedly for a specified number of times. It is mainly used when the number of iterations is known in advance.",

  tamilDefinition:
    "For Loop என்பது ஒரு Looping Statement ஆகும். குறிப்பிட்ட எண்ணிக்கையிலான முறை ஒரு Code Block-ஐ மீண்டும் மீண்டும் இயக்க பயன்படுத்தப்படுகிறது. Loop எத்தனை முறை இயங்க வேண்டும் என்பது முன்கூட்டியே தெரிந்தால் For Loop பயன்படுத்தப்படுகிறது.",

  realWorldUsage:
    "For Loops are used in many software applications. For example, displaying a list of students, printing product details in an online shopping website, generating reports, and processing records in a database.",

  realWorldUsageTamil:
    "For Loop பல Software-களில் பயன்படுத்தப்படுகிறது. உதாரணமாக, மாணவர்களின் பட்டியலை காட்டுவது, Online Shopping Website-ல் Product List-ஐ காட்டுவது, Reports உருவாக்குவது மற்றும் Database Records-ஐ Process செய்வது போன்ற இடங்களில் பயன்படுத்தப்படுகிறது.",

  syntax: `for(initialization; condition; increment/decrement)
{
    // Code to execute
}`,

  syntaxExplanationEnglish: [
    "Initialization executes only once before the loop starts.",
    "The condition is checked before every iteration.",
    "If the condition is true, the code inside the loop executes.",
    "After each iteration, the increment or decrement statement updates the loop variable.",
    "The loop stops when the condition becomes false."
  ],

  syntaxExplanationTamil: [
    "Initialization என்பது Loop தொடங்குவதற்கு முன் ஒரே ஒரு முறை மட்டுமே இயக்கப்படும்.",
    "ஒவ்வொரு Iteration-க்கும் முன் Condition சரிபார்க்கப்படும்.",
    "Condition True ஆக இருந்தால் Loop உள்ளே இருக்கும் Code இயக்கப்படும்.",
    "ஒவ்வொரு Iteration முடிந்ததும் Increment அல்லது Decrement மூலம் Loop Variable Update செய்யப்படும்.",
    "Condition False ஆனவுடன் Loop நிறுத்தப்படும்."
  ],

  exampleProgram: `#include <iostream>

using namespace std;

int main()
{
    for(int day = 1; day <= 5; day++)
    {
        cout << "Day " << day << " : Deepak practiced C++." << endl;
    }

    return 0;
}`,

  programExplanationEnglish: [
    "Line 1: #include <iostream> includes the input and output library.",
    "Line 3: using namespace std; allows us to use cout without writing std::.",
    "Line 5: int main() is the starting point of the program.",
    "Line 7: The for loop is initialized by creating the variable 'day' with the value 1.",
    "Line 7: The condition 'day <= 5' is checked before every iteration.",
    "Line 9: cout displays the current day along with the practice message.",
    "Line 7: After every iteration, day++ increases the value of 'day' by 1.",
    "Line 7: The loop continues until the condition becomes false.",
    "Line 12: return 0; ends the program successfully."
  ],

  programExplanationTamil: [
    "வரி 1: #include <iostream> என்பது Input மற்றும் Output Library-ஐ இணைக்கிறது.",
    "வரி 3: using namespace std; பயன்படுத்துவதால் std:: என்று எழுத வேண்டியதில்லை.",
    "வரி 5: int main() என்பது Program தொடங்கும் இடமாகும்.",
    "வரி 7: For Loop-ல் 'day' என்ற Variable உருவாக்கப்பட்டு 1 என்ற மதிப்பு கொடுக்கப்படுகிறது.",
    "வரி 7: ஒவ்வொரு Iteration-க்கும் முன் 'day <= 5' என்ற Condition சரிபார்க்கப்படுகிறது.",
    "வரி 9: தற்போதைய நாளும் Practice Message-உம் திரையில் காட்டப்படுகிறது.",
    "வரி 7: ஒவ்வொரு Iteration முடிந்ததும் day++ மூலம் day-ன் மதிப்பு 1 அதிகரிக்கப்படுகிறது.",
    "வரி 7: Condition False ஆகும் வரை Loop தொடர்ந்து இயங்கும்.",
    "வரி 12: return 0; Program-ஐ வெற்றிகரமாக முடிக்கிறது."
  ],

  output: `Day 1 : Deepak practiced C++.
Day 2 : Deepak practiced C++.
Day 3 : Deepak practiced C++.
Day 4 : Deepak practiced C++.
Day 5 : Deepak practiced C++.`,

  locked: false,

  completed: false,
},
{
  id: 14,

  title: "Nested Loops",

  englishDefinition:
    "A Nested Loop is a loop inside another loop. The inner loop executes completely for every single iteration of the outer loop. Nested loops are commonly used for pattern printing, tables, matrices, and multidimensional data.",

  tamilDefinition:
    "Nested Loop என்பது ஒரு Loop-க்குள் மற்றொரு Loop இருப்பதாகும். Outer Loop ஒரு முறை இயங்கும் ஒவ்வொரு முறையும், Inner Loop முழுமையாக இயங்கும். Pattern Printing, Tables, Matrix மற்றும் பல பரிமாண (Multidimensional) தரவுகளை செயல்படுத்த Nested Loop பயன்படுத்தப்படுகிறது.",

  realWorldUsage:
    "Nested Loops are used in many real-world applications. For example, displaying rows and columns in an Excel sheet, processing seats in a theatre, printing calendars, and working with matrices in image processing.",

  realWorldUsageTamil:
    "Nested Loop பல Software-களில் பயன்படுத்தப்படுகிறது. உதாரணமாக, Excel Sheet-ல் Rows மற்றும் Columns-ஐ செயல்படுத்துவது, Theatre Seat Arrangement, Calendar Printing மற்றும் Image Processing-ல் Matrix Data-வை செயல்படுத்துவது போன்ற இடங்களில் பயன்படுத்தப்படுகிறது.",

  syntax: `for(initialization; condition; increment)
{
    for(initialization; condition; increment)
    {
        // Code to execute
    }
}`,

  syntaxExplanationEnglish: [
    "The outer loop controls the number of rows.",
    "The inner loop controls the number of columns.",
    "For every iteration of the outer loop, the inner loop executes completely.",
    "Nested loops are mainly used for pattern printing and matrix operations.",
    "The outer loop finishes only after the inner loop completes all its iterations."
  ],

  syntaxExplanationTamil: [
    "Outer Loop என்பது Rows-ஐ கட்டுப்படுத்துகிறது.",
    "Inner Loop என்பது Columns-ஐ கட்டுப்படுத்துகிறது.",
    "Outer Loop ஒரு முறை இயங்கும் ஒவ்வொரு முறையும் Inner Loop முழுமையாக இயக்கப்படும்.",
    "Nested Loop முக்கியமாக Pattern Printing மற்றும் Matrix Operations-க்கு பயன்படுத்தப்படுகிறது.",
    "Inner Loop முழுவதும் முடிந்த பிறகே Outer Loop அடுத்த Iteration-க்கு செல்லும்."
  ],

  exampleProgram: `#include <iostream>

using namespace std;

int main()
{
    for(int row = 1; row <= 3; row++)
    {
        for(int column = 1; column <= 4; column++)
        {
            cout << "* ";
        }

        cout << endl;
    }

    return 0;
}`,

  programExplanationEnglish: [
    "Line 1: #include <iostream> includes the input and output library.",
    "Line 3: using namespace std; allows us to use cout without writing std::.",
    "Line 5: int main() is the starting point of the program.",
    "Line 7: The outer loop controls the number of rows and runs 3 times.",
    "Line 9: The inner loop controls the number of columns and runs 4 times for every row.",
    "Line 11: cout prints '* ' on the same line.",
    "Line 14: cout << endl; moves the cursor to the next line after completing one row.",
    "Line 7: The process repeats until all rows are printed.",
    "Line 17: return 0; ends the program successfully."
  ],

  programExplanationTamil: [
    "வரி 1: #include <iostream> என்பது Input மற்றும் Output Library-ஐ இணைக்கிறது.",
    "வரி 3: using namespace std; பயன்படுத்துவதால் std:: என்று எழுத வேண்டியதில்லை.",
    "வரி 5: int main() என்பது Program தொடங்கும் இடமாகும்.",
    "வரி 7: Outer Loop, 3 Rows உருவாக்குகிறது.",
    "வரி 9: ஒவ்வொரு Row-க்கும் Inner Loop, 4 Columns உருவாக்குகிறது.",
    "வரி 11: cout மூலம் '* ' திரையில் அச்சிடப்படுகிறது.",
    "வரி 14: cout << endl; ஒரு Row முடிந்த பிறகு அடுத்த வரிக்கு Cursor-ஐ நகர்த்துகிறது.",
    "வரி 7: அனைத்து Rows முடியும் வரை இந்த செயல்முறை தொடர்கிறது.",
    "வரி 17: return 0; Program-ஐ வெற்றிகரமாக முடிக்கிறது."
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
    "The Break Statement is used to immediately terminate a loop or switch statement. When the break statement is encountered, the control exits the loop or switch and continues with the next statement after it.",

  tamilDefinition:
    "Break Statement என்பது Loop அல்லது Switch Statement-ஐ உடனடியாக நிறுத்த பயன்படுத்தப்படுகிறது. Program-ல் break Statement வந்தவுடன் Loop அல்லது Switch-இல் இருந்து வெளியேறி, அதற்கு அடுத்துள்ள Statement இயக்கப்படும்.",

  realWorldUsage:
    "The Break Statement is used in many real-world applications. For example, an ATM stops asking for the PIN once the correct PIN is entered, a search operation stops when the required record is found, and a game exits a level when the player wins.",

  realWorldUsageTamil:
    "Break Statement பல Software-களில் பயன்படுத்தப்படுகிறது. உதாரணமாக, ATM-ல் சரியான PIN உள்ளிடப்பட்டவுடன் மீண்டும் PIN கேட்பதை நிறுத்துவது, Search Operation-ல் தேவையான Record கிடைத்தவுடன் Search-ஐ நிறுத்துவது, மற்றும் Game-ல் Player வெற்றி பெற்றவுடன் அந்த Level-ஐ முடிப்பது போன்ற இடங்களில் பயன்படுத்தப்படுகிறது.",

  syntax: `break;`,

  syntaxExplanationEnglish: [
    "The 'break' keyword immediately exits the current loop or switch statement.",
    "It is usually used inside an if statement within a loop.",
    "After break executes, the remaining loop iterations are skipped.",
    "Program execution continues with the statement after the loop or switch."
  ],

  syntaxExplanationTamil: [
    "'break' Keyword தற்போதைய Loop அல்லது Switch Statement-இல் இருந்து உடனடியாக வெளியேறுகிறது.",
    "இது பொதுவாக Loop-க்குள் உள்ள if Statement-இல் பயன்படுத்தப்படுகிறது.",
    "break இயக்கப்பட்ட பிறகு மீதமுள்ள Loop Iteration-கள் இயக்கப்படாது.",
    "அதன் பிறகு Program, Loop அல்லது Switch-க்கு அடுத்துள்ள Statement-ஐ இயக்கும்."
  ],

  exampleProgram: `#include <iostream>

using namespace std;

int main()
{
    for(int day = 1; day <= 10; day++)
    {
        if(day == 6)
        {
            break;
        }

        cout << "Day " << day << " : Deepak practiced C++." << endl;
    }

    return 0;
}`,

  programExplanationEnglish: [
    "Line 1: #include <iostream> includes the input and output library.",
    "Line 3: using namespace std; allows us to use cout without writing std::.",
    "Line 5: int main() is the starting point of the program.",
    "Line 7: The for loop starts from day 1 and is set to run until day 10.",
    "Line 9: The if statement checks whether the value of day is equal to 6.",
    "Line 11: When day becomes 6, the break statement immediately terminates the loop.",
    "Line 14: cout displays the practice message for days 1 to 5 only.",
    "Line 17: return 0; ends the program successfully."
  ],

  programExplanationTamil: [
    "வரி 1: #include <iostream> என்பது Input மற்றும் Output Library-ஐ இணைக்கிறது.",
    "வரி 3: using namespace std; பயன்படுத்துவதால் std:: என்று எழுத வேண்டியதில்லை.",
    "வரி 5: int main() என்பது Program தொடங்கும் இடமாகும்.",
    "வரி 7: For Loop, day = 1 முதல் day = 10 வரை இயக்கப்படுமாறு தொடங்குகிறது.",
    "வரி 9: if Statement, day-ன் மதிப்பு 6 ஆக உள்ளதா என்பதை சரிபார்க்கிறது.",
    "வரி 11: day 6 ஆனவுடன் break Statement Loop-ஐ உடனடியாக நிறுத்துகிறது.",
    "வரி 14: cout மூலம் Day 1 முதல் Day 5 வரை மட்டுமே Practice Message திரையில் காட்டப்படுகிறது.",
    "வரி 17: return 0; Program-ஐ வெற்றிகரமாக முடிக்கிறது."
  ],

  output: `Day 1 : Deepak practiced C++.
Day 2 : Deepak practiced C++.
Day 3 : Deepak practiced C++.
Day 4 : Deepak practiced C++.
Day 5 : Deepak practiced C++.`,

  locked: false,

  completed: false,
},
{
  id: 16,

  title: "Continue Statement",

  englishDefinition:
    "The Continue Statement is used to skip the current iteration of a loop and move directly to the next iteration. Unlike the break statement, it does not terminate the loop; instead, it continues executing the remaining iterations.",

  tamilDefinition:
    "Continue Statement என்பது Loop-இன் தற்போதைய Iteration-ஐ தவிர்த்து (Skip செய்து), அடுத்த Iteration-க்கு நேரடியாக செல்ல பயன்படுத்தப்படுகிறது. இது Break Statement போல Loop-ஐ நிறுத்தாது. அதற்கு பதிலாக, மீதமுள்ள Iteration-களை தொடர்ந்து இயக்கும்.",

  realWorldUsage:
    "The Continue Statement is used in many real-world applications. For example, while processing student records, invalid records can be skipped without stopping the entire process. Similarly, while filtering products in an online shopping website, unavailable products can be skipped while displaying the remaining products.",

  realWorldUsageTamil:
    "Continue Statement பல Software-களில் பயன்படுத்தப்படுகிறது. உதாரணமாக, மாணவர்களின் தகவல்களை செயல்படுத்தும் போது தவறான பதிவுகளை மட்டும் Skip செய்து, மற்ற பதிவுகளை தொடர்ந்து செயல்படுத்தலாம். அதேபோல் Online Shopping Website-ல் Stock இல்லாத பொருட்களை Skip செய்து, மற்ற பொருட்களை மட்டும் காட்டலாம்.",

  syntax: `continue;`,

  syntaxExplanationEnglish: [
    "The 'continue' keyword skips the current iteration of a loop.",
    "It is generally used inside an if statement.",
    "The remaining statements of the current iteration are skipped.",
    "The loop immediately proceeds to the next iteration."
  ],

  syntaxExplanationTamil: [
    "'continue' Keyword தற்போதைய Iteration-ஐ Skip செய்கிறது.",
    "இது பொதுவாக Loop-க்குள் உள்ள if Statement-இல் பயன்படுத்தப்படுகிறது.",
    "தற்போதைய Iteration-ல் மீதமுள்ள Statements இயக்கப்படாது.",
    "Loop உடனடியாக அடுத்த Iteration-க்கு செல்கிறது."
  ],

  exampleProgram: `#include <iostream>

using namespace std;

int main()
{
    for(int day = 1; day <= 5; day++)
    {
        if(day == 3)
        {
            continue;
        }

        cout << "Day " << day << " : Deepak practiced C++." << endl;
    }

    return 0;
}`,

  programExplanationEnglish: [
    "Line 1: #include <iostream> includes the input and output library.",
    "Line 3: using namespace std; allows us to use cout without writing std::.",
    "Line 5: int main() is the starting point of the program.",
    "Line 7: The for loop starts from day 1 and continues until day 5.",
    "Line 9: The if statement checks whether the value of day is equal to 3.",
    "Line 11: When day becomes 3, the continue statement skips the current iteration.",
    "Line 14: Therefore, the cout statement is not executed for day 3.",
    "Line 14: The loop continues with day 4 and day 5.",
    "Line 17: return 0; ends the program successfully."
  ],

  programExplanationTamil: [
    "வரி 1: #include <iostream> என்பது Input மற்றும் Output Library-ஐ இணைக்கிறது.",
    "வரி 3: using namespace std; பயன்படுத்துவதால் std:: என்று எழுத வேண்டியதில்லை.",
    "வரி 5: int main() என்பது Program தொடங்கும் இடமாகும்.",
    "வரி 7: For Loop, day = 1 முதல் day = 5 வரை இயக்கப்படுகிறது.",
    "வரி 9: if Statement, day-ன் மதிப்பு 3 ஆக உள்ளதா என்பதை சரிபார்க்கிறது.",
    "வரி 11: day 3 ஆனவுடன் continue Statement தற்போதைய Iteration-ஐ Skip செய்கிறது.",
    "வரி 14: அதனால் Day 3-க்கான cout Statement இயக்கப்படாது.",
    "வரி 14: Loop தொடர்ந்து Day 4 மற்றும் Day 5-ஐ இயக்குகிறது.",
    "வரி 17: return 0; Program-ஐ வெற்றிகரமாக முடிக்கிறது."
  ],

  output: `Day 1 : Deepak practiced C++.
Day 2 : Deepak practiced C++.
Day 4 : Deepak practiced C++.
Day 5 : Deepak practiced C++.`,

  locked: false,

  completed: false,
},
{
  id: 17,

  title: "One-Dimensional Array",

  englishDefinition:
    "A One-Dimensional Array is a collection of elements of the same data type stored in contiguous memory locations. Each element is accessed using an index, which starts from 0. Arrays are used to store multiple values using a single variable name.",

  tamilDefinition:
    "One-Dimensional Array என்பது ஒரே Data Type-ஐ சேர்ந்த பல மதிப்புகளை (Values) தொடர்ச்சியான Memory Locations-ல் சேமிக்கும் ஒரு Data Structure ஆகும். Array-இல் உள்ள ஒவ்வொரு Element-மும் Index மூலம் அணுகப்படுகிறது. Index எப்போதும் 0-இல் இருந்து தொடங்கும். பல மதிப்புகளை ஒரே Variable Name மூலம் நிர்வகிக்க Array பயன்படுத்தப்படுகிறது.",

  realWorldUsage:
    "One-Dimensional Arrays are used in many software applications. For example, storing students' marks, daily temperatures, product prices, employee salaries, and monthly sales data.",

  realWorldUsageTamil:
    "One-Dimensional Array பல Software-களில் பயன்படுத்தப்படுகிறது. உதாரணமாக, மாணவர்களின் மதிப்பெண்கள், தினசரி வெப்பநிலை, பொருட்களின் விலை, ஊழியர்களின் சம்பளம் மற்றும் மாதாந்திர விற்பனை தகவல்களை சேமிக்க பயன்படுத்தப்படுகிறது.",

  syntax: `dataType arrayName[size];

Example:
int marks[5];`,

  syntaxExplanationEnglish: [
    "dataType specifies the type of values stored in the array.",
    "arrayName is the name of the array.",
    "size specifies the maximum number of elements the array can store.",
    "Array indexing starts from 0.",
    "Elements are accessed using arrayName[index]."
  ],

  syntaxExplanationTamil: [
    "dataType என்பது Array-ல் சேமிக்கப்படும் Data Type-ஐ குறிப்பிடுகிறது.",
    "arrayName என்பது Array-க்கு கொடுக்கப்படும் பெயராகும்.",
    "size என்பது Array-ல் எத்தனை Elements சேமிக்க முடியும் என்பதை குறிப்பிடுகிறது.",
    "Array Index எப்போதும் 0-இல் இருந்து தொடங்கும்.",
    "Elements-ஐ arrayName[index] மூலம் அணுகலாம்."
  ],

  exampleProgram: `#include <iostream>

using namespace std;

int main()
{
    int marks[5] = {85, 90, 78, 95, 88};

    for(int i = 0; i < 5; i++)
    {
        cout << "Deepak's Subject " << i + 1 << " Marks : " << marks[i] << endl;
    }

    return 0;
}`,

  programExplanationEnglish: [
    "Line 1: #include <iostream> includes the input and output library.",
    "Line 3: using namespace std; allows us to use cout without writing std::.",
    "Line 5: int main() is the starting point of the program.",
    "Line 7: An integer array named 'marks' is created with 5 elements.",
    "Line 9: The for loop starts with i = 0.",
    "Line 9: The loop continues until i becomes less than 5.",
    "Line 11: cout displays the subject number and the corresponding mark stored in the array.",
    "Line 11: marks[i] accesses each element of the array using its index.",
    "Line 9: After every iteration, i is incremented by 1.",
    "Line 14: return 0; ends the program successfully."
  ],

  programExplanationTamil: [
    "வரி 1: #include <iostream> என்பது Input மற்றும் Output Library-ஐ இணைக்கிறது.",
    "வரி 3: using namespace std; பயன்படுத்துவதால் std:: என்று எழுத வேண்டியதில்லை.",
    "வரி 5: int main() என்பது Program தொடங்கும் இடமாகும்.",
    "வரி 7: 'marks' என்ற Integer Array 5 Elements-உடன் உருவாக்கப்படுகிறது.",
    "வரி 9: For Loop, i = 0-இல் இருந்து தொடங்குகிறது.",
    "வரி 9: i < 5 இருக்கும் வரை Loop இயக்கப்படுகிறது.",
    "வரி 11: cout மூலம் Subject Number மற்றும் அதற்கான Mark திரையில் காட்டப்படுகிறது.",
    "வரி 11: marks[i] மூலம் Array-இன் ஒவ்வொரு Element-மும் Index பயன்படுத்தி அணுகப்படுகிறது.",
    "வரி 9: ஒவ்வொரு Iteration-க்கும் பிறகு i-ன் மதிப்பு 1 அதிகரிக்கப்படுகிறது.",
    "வரி 14: return 0; Program-ஐ வெற்றிகரமாக முடிக்கிறது."
  ],

  output: `Deepak's Subject 1 Marks : 85
Deepak's Subject 2 Marks : 90
Deepak's Subject 3 Marks : 78
Deepak's Subject 4 Marks : 95
Deepak's Subject 5 Marks : 88`,

  locked: false,

  completed: false,
},
];

export default topics;