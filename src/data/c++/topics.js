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
];

export default topics;