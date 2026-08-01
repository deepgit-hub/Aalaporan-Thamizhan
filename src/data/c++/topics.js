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
];

export default topics;