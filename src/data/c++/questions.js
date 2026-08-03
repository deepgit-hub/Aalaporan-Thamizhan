const questions = [
    {
  topicId: 1,
  title: "Introduction to C++",

  questions: [
    {
      id: 1,
      title: "Question 1",

      questionEnglish:
        'Write a C++ program to print "Hello World" on the console.',

      questionTamil:
        '"Hello World" என்பதை Console-ல் Print செய்யும் C++ Program-ஐ எழுதுங்கள்.',

      hintEnglish:
        "Use the cout statement with the << operator.",

      hintTamil:
        "cout Statement மற்றும் << Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Hello World`,

      expectedOutputTamil: `Hello World`,

      solution: `#include <iostream>
using namespace std;

int main() {

    cout << "Hello World";

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a C++ program to print your name on the console.",

      questionTamil:
        "உங்கள் பெயரை Console-ல் Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the cout statement to display the text.",

      hintTamil:
        "Text-ஐ Display செய்ய cout Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Deepak`,

      expectedOutputTamil: `Deepak`,

      solution: `#include <iostream>
using namespace std;

int main() {

    cout << "Deepak";

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a C++ program to print 'Welcome to C++ Programming' on the console.",

      questionTamil:
        "'Welcome to C++ Programming' என்பதை Console-ல் Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use cout to print the given message.",

      hintTamil:
        "கொடுக்கப்பட்ட Message-ஐ Print செய்ய cout-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Welcome to C++ Programming`,

      expectedOutputTamil: `Welcome to C++ Programming`,

      solution: `#include <iostream>
using namespace std;

int main() {

    cout << "Welcome to C++ Programming";

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a C++ program to print 'C++ is a Powerful Programming Language' on the console.",

      questionTamil:
        "'C++ is a Powerful Programming Language' என்பதை Console-ல் Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the cout statement to display the message.",

      hintTamil:
        "Message-ஐ Display செய்ய cout Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `C++ is a Powerful Programming Language`,

      expectedOutputTamil: `C++ is a Powerful Programming Language`,

      solution: `#include <iostream>
using namespace std;

int main() {

    cout << "C++ is a Powerful Programming Language";

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a C++ program to print your college name on the console.",

      questionTamil:
        "உங்கள் கல்லூரியின் பெயரை Console-ல் Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the cout statement to display the college name.",

      hintTamil:
        "கல்லூரியின் பெயரை Display செய்ய cout Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Don Bosco College`,

      expectedOutputTamil: `Don Bosco College`,

      solution: `#include <iostream>
using namespace std;

int main() {

    cout << "Don Bosco College";

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a C++ program to print two lines: 'Good Morning' and 'Have a Nice Day'.",

      questionTamil:
        "'Good Morning' மற்றும் 'Have a Nice Day' ஆகிய இரண்டு வரிகளை Console-ல் Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use two cout statements or use endl for a new line.",

      hintTamil:
        "இரண்டு cout Statements அல்லது புதிய வரிக்கு endl-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Good Morning
Have a Nice Day`,

      expectedOutputTamil: `Good Morning
Have a Nice Day`,

      solution: `#include <iostream>
using namespace std;

int main() {

    cout << "Good Morning" << endl;
    cout << "Have a Nice Day";

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a C++ program to print your name, college name, and department on separate lines.",

      questionTamil:
        "உங்கள் பெயர், கல்லூரியின் பெயர் மற்றும் துறையின் பெயரை தனித்தனி வரிகளில் Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use multiple cout statements or endl to print each item on a new line.",

      hintTamil:
        "ஒவ்வொரு தகவலையும் புதிய வரியில் Print செய்ய பல cout Statements அல்லது endl-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Deepak
Don Bosco College
Computer Science`,

      expectedOutputTamil: `Deepak
Don Bosco College
Computer Science`,

      solution: `#include <iostream>
using namespace std;

int main() {

    cout << "Deepak" << endl;
    cout << "Don Bosco College" << endl;
    cout << "Computer Science";

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a C++ program to print the following pattern using cout statements only.\n*\n**\n***",

      questionTamil:
        "cout Statements மட்டும் பயன்படுத்தி கீழே கொடுக்கப்பட்டுள்ள Pattern-ஐ Print செய்யும் C++ Program-ஐ எழுதுங்கள்.\n*\n**\n***",

      hintEnglish:
        "Use three separate cout statements with endl.",

      hintTamil:
        "மூன்று தனித்தனி cout Statements மற்றும் endl-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `*
**
***`,

      expectedOutputTamil: `*
**
***`,

      solution: `#include <iostream>
using namespace std;

int main() {

    cout << "*" << endl;
    cout << "**" << endl;
    cout << "***";

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a C++ program to print your name, city, and country on separate lines using cout statements.",

      questionTamil:
        "cout Statements பயன்படுத்தி உங்கள் பெயர், நகரம் மற்றும் நாட்டின் பெயரை தனித்தனி வரிகளில் Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use three cout statements with endl.",

      hintTamil:
        "மூன்று cout Statements மற்றும் endl-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Deepak
Vaniyambadi
India`,

      expectedOutputTamil: `Deepak
Vaniyambadi
India`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a C++ program to print the following pattern using cout statements only.\n####\n####\n####",

      questionTamil:
        "cout Statements மட்டும் பயன்படுத்தி கீழே கொடுக்கப்பட்டுள்ள Pattern-ஐ Print செய்யும் C++ Program-ஐ எழுதுங்கள்.\n####\n####\n####",

      hintEnglish:
        "Print each row using a separate cout statement.",

      hintTamil:
        "ஒவ்வொரு வரியையும் தனித்தனி cout Statement மூலம் Print செய்யுங்கள்.",

      expectedOutput: `####
####
####`,

      expectedOutputTamil: `####
####
####`,

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
        "Write a C++ program to declare an integer variable named age, assign the value 20, and print it.",

      questionTamil:
        "'age' என்ற Integer Variable-ஐ உருவாக்கி, அதற்கு 20 என்ற மதிப்பை Assign செய்து அதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Declare an int variable and use cout to print it.",

      hintTamil:
        "int Variable-ஐ Declare செய்து cout மூலம் Print செய்யுங்கள்.",

      expectedOutput: `20`,

      expectedOutputTamil: `20`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int age = 20;

    cout << age;

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a C++ program to declare a float variable named price, assign the value 99.99, and print it.",

      questionTamil:
        "'price' என்ற Float Variable-ஐ உருவாக்கி, அதற்கு 99.99 என்ற மதிப்பை Assign செய்து அதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the float data type.",

      hintTamil:
        "float Data Type-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `99.99`,

      expectedOutputTamil: `99.99`,

      solution: `#include <iostream>
using namespace std;

int main() {

    float price = 99.99;

    cout << price;

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a C++ program to declare a character variable named grade, assign the value 'A', and print it.",

      questionTamil:
        "'grade' என்ற Character Variable-ஐ உருவாக்கி, அதற்கு 'A' என்ற மதிப்பை Assign செய்து அதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the char data type.",

      hintTamil:
        "char Data Type-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `A`,

      expectedOutputTamil: `A`,

      solution: `#include <iostream>
using namespace std;

int main() {

    char grade = 'A';

    cout << grade;

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a C++ program to declare a string variable named name, assign the value 'Deepak', and print it.",

      questionTamil:
        "'name' என்ற String Variable-ஐ உருவாக்கி, அதற்கு 'Deepak' என்ற மதிப்பை Assign செய்து அதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Include the string library and use the string data type.",

      hintTamil:
        "string Data Type-ஐ பயன்படுத்த <string> Header File-ஐ Include செய்யுங்கள்.",

      expectedOutput: `Deepak`,

      expectedOutputTamil: `Deepak`,

      solution: `#include <iostream>
#include <string>
using namespace std;

int main() {

    string name = "Deepak";

    cout << name;

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a C++ program to declare two integer variables num1 and num2, assign the values 10 and 20, and print both values.",

      questionTamil:
        "'num1' மற்றும் 'num2' என்ற இரண்டு Integer Variables-ஐ உருவாக்கி, அவற்றிற்கு 10 மற்றும் 20 என்ற மதிப்புகளை Assign செய்து Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Declare two int variables and print them using cout.",

      hintTamil:
        "இரண்டு int Variables-ஐ Declare செய்து cout மூலம் Print செய்யுங்கள்.",

      expectedOutput: `10 20`,

      expectedOutputTamil: `10 20`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int num1 = 10;
    int num2 = 20;

    cout << num1 << " " << num2;

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a C++ program to declare variables for a student's name, age, and percentage. Assign suitable values and print them.",

      questionTamil:
        "ஒரு மாணவரின் பெயர், வயது மற்றும் சதவீதத்திற்கு Variables-ஐ உருவாக்கி, பொருத்தமான மதிப்புகளை Assign செய்து Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use string, int, and float variables.",

      hintTamil:
        "string, int மற்றும் float Variables-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Name: Deepak
Age: 20
Percentage: 89.5`,

      expectedOutputTamil: `Name: Deepak
Age: 20
Percentage: 89.5`,

      solution: `#include <iostream>
#include <string>
using namespace std;

int main() {

    string name = "Deepak";
    int age = 20;
    float percentage = 89.5;

    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    cout << "Percentage: " << percentage;

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a C++ program to declare an integer variable rollNumber, assign the value 101, and print it.",

      questionTamil:
        "'rollNumber' என்ற Integer Variable-ஐ உருவாக்கி, அதற்கு 101 என்ற மதிப்பை Assign செய்து அதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Declare an int variable and use cout to display its value.",

      hintTamil:
        "int Variable-ஐ Declare செய்து cout மூலம் அதன் மதிப்பை Print செய்யுங்கள்.",

      expectedOutput: `101`,

      expectedOutputTamil: `101`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int rollNumber = 101;

    cout << rollNumber;

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a C++ program to declare variables for productName, quantity, and price. Assign suitable values and print them.",

      questionTamil:
        "'productName', 'quantity', மற்றும் 'price' ஆகியவற்றிற்கு Variables-ஐ உருவாக்கி, பொருத்தமான மதிப்புகளை Assign செய்து Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use string, int, and float variables.",

      hintTamil:
        "string, int மற்றும் float Variables-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Product: Laptop
Quantity: 2
Price: 55000`,

      expectedOutputTamil: `Product: Laptop
Quantity: 2
Price: 55000`,

      solution: `#include <iostream>
#include <string>
using namespace std;

int main() {

    string productName = "Laptop";
    int quantity = 2;
    float price = 55000;

    cout << "Product: " << productName << endl;
    cout << "Quantity: " << quantity << endl;
    cout << "Price: " << price;

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a C++ program to declare variables for an employee's name, ID, and salary. Assign suitable values and print them.",

      questionTamil:
        "ஒரு பணியாளரின் பெயர், ID மற்றும் சம்பளத்திற்கு Variables-ஐ உருவாக்கி, பொருத்தமான மதிப்புகளை Assign செய்து Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use string, int, and float variables.",

      hintTamil:
        "string, int மற்றும் float Variables-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Name: Kathir
ID: 501
Salary: 35000`,

      expectedOutputTamil: `Name: Kathir
ID: 501
Salary: 35000`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a C++ program to declare variables for a book's title, author, and price. Assign suitable values and print them.",

      questionTamil:
        "ஒரு புத்தகத்தின் Title, Author மற்றும் Price-க்கு Variables-ஐ உருவாக்கி, பொருத்தமான மதிப்புகளை Assign செய்து Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use string and float variables to store the details.",

      hintTamil:
        "விவரங்களை சேமிக்க string மற்றும் float Variables-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Title: C++ Programming
Author: Bjarne Stroustrup
Price: 799`,

      expectedOutputTamil: `Title: C++ Programming
Author: Bjarne Stroustrup
Price: 799`,

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
        "Write a C++ program to declare an int variable with the value 25 and print it.",

      questionTamil:
        "25 என்ற மதிப்புடன் ஒரு int Variable-ஐ உருவாக்கி அதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the int data type and cout statement.",

      hintTamil:
        "int Data Type மற்றும் cout Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `25`,

      expectedOutputTamil: `25`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int number = 25;

    cout << number;

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a C++ program to declare a float variable with the value 45.75 and print it.",

      questionTamil:
        "45.75 என்ற மதிப்புடன் ஒரு float Variable-ஐ உருவாக்கி அதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the float data type.",

      hintTamil:
        "float Data Type-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `45.75`,

      expectedOutputTamil: `45.75`,

      solution: `#include <iostream>
using namespace std;

int main() {

    float marks = 45.75;

    cout << marks;

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a C++ program to declare a char variable with the value 'A' and print it.",

      questionTamil:
        "'A' என்ற மதிப்புடன் ஒரு char Variable-ஐ உருவாக்கி அதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the char data type and single quotes.",

      hintTamil:
        "char Data Type மற்றும் Single Quotes-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `A`,

      expectedOutputTamil: `A`,

      solution: `#include <iostream>
using namespace std;

int main() {

    char grade = 'A';

    cout << grade;

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a C++ program to declare a bool variable with the value true and print it.",

      questionTamil:
        "true என்ற மதிப்புடன் ஒரு bool Variable-ஐ உருவாக்கி அதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the bool data type and cout statement.",

      hintTamil:
        "bool Data Type மற்றும் cout Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `1`,

      expectedOutputTamil: `1`,

      solution: `#include <iostream>
using namespace std;

int main() {

    bool isPassed = true;

    cout << isPassed;

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a C++ program to declare a double variable with the value 12345.6789 and print it.",

      questionTamil:
        "12345.6789 என்ற மதிப்புடன் ஒரு double Variable-ஐ உருவாக்கி அதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the double data type.",

      hintTamil:
        "double Data Type-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `12345.6789`,

      expectedOutputTamil: `12345.6789`,

      solution: `#include <iostream>
using namespace std;

int main() {

    double value = 12345.6789;

    cout << value;

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a C++ program to declare variables of int, float, char, bool, and double data types. Assign suitable values and print them.",

      questionTamil:
        "int, float, char, bool மற்றும் double Data Types-க்கு Variables-ஐ உருவாக்கி, பொருத்தமான மதிப்புகளை Assign செய்து Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Declare one variable for each data type and print all of them.",

      hintTamil:
        "ஒவ்வொரு Data Type-க்கும் ஒரு Variable உருவாக்கி அனைத்தையும் Print செய்யுங்கள்.",

      expectedOutput: `25
45.5
A
1
12345.6789`,

      expectedOutputTamil: `25
45.5
A
1
12345.6789`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int number = 25;
    float marks = 45.5;
    char grade = 'A';
    bool isPassed = true;
    double value = 12345.6789;

    cout << number << endl;
    cout << marks << endl;
    cout << grade << endl;
    cout << isPassed << endl;
    cout << value;

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a C++ program to declare a string variable named city with the value 'Vaniyambadi' and print it.",

      questionTamil:
        "'city' என்ற String Variable-ஐ உருவாக்கி, அதற்கு 'Vaniyambadi' என்ற மதிப்பை Assign செய்து அதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Include the <string> header file and use the string data type.",

      hintTamil:
        "<string> Header File-ஐ Include செய்து string Data Type-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Vaniyambadi`,

      expectedOutputTamil: `Vaniyambadi`,

      solution: `#include <iostream>
#include <string>
using namespace std;

int main() {

    string city = "Vaniyambadi";

    cout << city;

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a C++ program to declare variables of char, int, float, and bool data types. Assign suitable values and print them.",

      questionTamil:
        "char, int, float மற்றும் bool Data Types-க்கு Variables-ஐ உருவாக்கி, பொருத்தமான மதிப்புகளை Assign செய்து Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Declare one variable for each data type and print all of them.",

      hintTamil:
        "ஒவ்வொரு Data Type-க்கும் ஒரு Variable உருவாக்கி அனைத்தையும் Print செய்யுங்கள்.",

      expectedOutput: `B
100
99.5
0`,

      expectedOutputTamil: `B
100
99.5
0`,

      solution: `#include <iostream>
using namespace std;

int main() {

    char grade = 'B';
    int marks = 100;
    float percentage = 99.5;
    bool isAbsent = false;

    cout << grade << endl;
    cout << marks << endl;
    cout << percentage << endl;
    cout << isAbsent;

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a C++ program to declare variables of int, double, char, and string data types. Assign suitable values and print them.",

      questionTamil:
        "int, double, char மற்றும் string Data Types-க்கு Variables-ஐ உருவாக்கி, பொருத்தமான மதிப்புகளை Assign செய்து Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use one variable for each data type and display all values.",

      hintTamil:
        "ஒவ்வொரு Data Type-க்கும் ஒரு Variable உருவாக்கி அனைத்து Values-ஐ Print செய்யுங்கள்.",

      expectedOutput: `101
4567.89
A
Deepak`,

      expectedOutputTamil: `101
4567.89
A
Deepak`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a C++ program to declare variables for a student's name (string), roll number (int), grade (char), percentage (float), and result (bool). Assign suitable values and print them.",

      questionTamil:
        "மாணவரின் பெயர் (string), Roll Number (int), Grade (char), Percentage (float), மற்றும் Result (bool) ஆகியவற்றிற்கு Variables-ஐ உருவாக்கி, பொருத்தமான மதிப்புகளை Assign செய்து Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use all five data types and print each value on a new line.",

      hintTamil:
        "ஐந்து Data Types-ஐ பயன்படுத்தி ஒவ்வொரு Value-ஐயும் புதிய வரியில் Print செய்யுங்கள்.",

      expectedOutput: `Deepak
101
A
92.5
1`,

      expectedOutputTamil: `Deepak
101
A
92.5
1`,

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
        "Write a C++ program to accept an integer from the user and print it.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு Integer எண்ணை Input ஆக பெற்று அதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use cin to get input and cout to display it.",

      hintTamil:
        "Input பெற cin மற்றும் Print செய்ய cout-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 25
25`,

      expectedOutputTamil: `Enter a number: 25
25`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int number;

    cout << "Enter a number: ";
    cin >> number;

    cout << number;

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a C++ program to accept the user's name and print 'Welcome <name>'.",

      questionTamil:
        "பயனரிடமிருந்து பெயரை Input ஆக பெற்று 'Welcome <name>' என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use string and cin to accept the name.",

      hintTamil:
        "பெயரை பெற string மற்றும் cin-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter your name: Deepak
Welcome Deepak`,

      expectedOutputTamil: `Enter your name: Deepak
Welcome Deepak`,

      solution: `#include <iostream>
#include <string>
using namespace std;

int main() {

    string name;

    cout << "Enter your name: ";
    cin >> name;

    cout << "Welcome " << name;

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a C++ program to accept two integers from the user and print both numbers.",

      questionTamil:
        "பயனரிடமிருந்து இரண்டு Integer எண்களை Input ஆக பெற்று அவற்றை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use two int variables with cin.",

      hintTamil:
        "இரண்டு int Variables மற்றும் cin-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter first number: 10
Enter second number: 20
10 20`,

      expectedOutputTamil: `Enter first number: 10
Enter second number: 20
10 20`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int num1, num2;

    cout << "Enter first number: ";
    cin >> num1;

    cout << "Enter second number: ";
    cin >> num2;

    cout << num1 << " " << num2;

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a C++ program to accept a character from the user and print it.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு Character-ஐ Input ஆக பெற்று அதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a char variable with cin and cout.",

      hintTamil:
        "char Variable, cin மற்றும் cout-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a character: A
A`,

      expectedOutputTamil: `Enter a character: A
A`,

      solution: `#include <iostream>
using namespace std;

int main() {

    char ch;

    cout << "Enter a character: ";
    cin >> ch;

    cout << ch;

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a C++ program to accept a float value from the user and print it.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு Float மதிப்பை Input ஆக பெற்று அதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a float variable with cin.",

      hintTamil:
        "float Variable மற்றும் cin-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a float value: 45.75
45.75`,

      expectedOutputTamil: `Enter a float value: 45.75
45.75`,

      solution: `#include <iostream>
using namespace std;

int main() {

    float number;

    cout << "Enter a float value: ";
    cin >> number;

    cout << number;

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a C++ program to accept a student's name, age, and percentage from the user and print all the details.",

      questionTamil:
        "பயனரிடமிருந்து மாணவரின் பெயர், வயது மற்றும் சதவீதத்தை Input ஆக பெற்று அனைத்து விவரங்களையும் Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use string, int, float, cin, and cout.",

      hintTamil:
        "string, int, float, cin மற்றும் cout-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter name: Deepak
Enter age: 20
Enter percentage: 89.5
Name: Deepak
Age: 20
Percentage: 89.5`,

      expectedOutputTamil: `Enter name: Deepak
Enter age: 20
Enter percentage: 89.5
Name: Deepak
Age: 20
Percentage: 89.5`,

      solution: `#include <iostream>
#include <string>
using namespace std;

int main() {

    string name;
    int age;
    float percentage;

    cout << "Enter name: ";
    cin >> name;

    cout << "Enter age: ";
    cin >> age;

    cout << "Enter percentage: ";
    cin >> percentage;

    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    cout << "Percentage: " << percentage;

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a C++ program to accept two float values from the user and print them.",

      questionTamil:
        "பயனரிடமிருந்து இரண்டு Float மதிப்புகளை Input ஆக பெற்று அவற்றை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use two float variables with cin and cout.",

      hintTamil:
        "இரண்டு float Variables, cin மற்றும் cout-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter first number: 12.5
Enter second number: 45.8
12.5 45.8`,

      expectedOutputTamil: `Enter first number: 12.5
Enter second number: 45.8
12.5 45.8`,

      solution: `#include <iostream>
using namespace std;

int main() {

    float num1, num2;

    cout << "Enter first number: ";
    cin >> num1;

    cout << "Enter second number: ";
    cin >> num2;

    cout << num1 << " " << num2;

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a C++ program to accept a student's name, roll number, and department from the user and print all the details.",

      questionTamil:
        "பயனரிடமிருந்து மாணவரின் பெயர், Roll Number மற்றும் Department-ஐ Input ஆக பெற்று அனைத்து விவரங்களையும் Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use string and int variables with cin and cout.",

      hintTamil:
        "string, int Variables, cin மற்றும் cout-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter name: Deepak
Enter roll number: 101
Enter department: ComputerScience
Name: Deepak
Roll Number: 101
Department: ComputerScience`,

      expectedOutputTamil: `Enter name: Deepak
Enter roll number: 101
Enter department: ComputerScience
Name: Deepak
Roll Number: 101
Department: ComputerScience`,

      solution: `#include <iostream>
#include <string>
using namespace std;

int main() {

    string name, department;
    int rollNumber;

    cout << "Enter name: ";
    cin >> name;

    cout << "Enter roll number: ";
    cin >> rollNumber;

    cout << "Enter department: ";
    cin >> department;

    cout << "Name: " << name << endl;
    cout << "Roll Number: " << rollNumber << endl;
    cout << "Department: " << department;

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a C++ program to accept an employee's name, ID, and salary from the user and print all the details.",

      questionTamil:
        "பயனரிடமிருந்து பணியாளரின் பெயர், ID மற்றும் Salary-ஐ Input ஆக பெற்று அனைத்து விவரங்களையும் Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use string, int, float, cin, and cout.",

      hintTamil:
        "string, int, float, cin மற்றும் cout-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter name: Kathir
Enter ID: 501
Enter salary: 35000
Name: Kathir
ID: 501
Salary: 35000`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a C++ program to accept a product name, quantity, and price from the user and print all the details.",

      questionTamil:
        "பயனரிடமிருந்து Product Name, Quantity மற்றும் Price-ஐ Input ஆக பெற்று அனைத்து விவரங்களையும் Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use string, int, float, cin, and cout.",

      hintTamil:
        "string, int, float, cin மற்றும் cout-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter product name: Laptop
Enter quantity: 2
Enter price: 55000
Product: Laptop
Quantity: 2
Price: 55000`,

      expectedOutputTamil: `Enter product name: Laptop
Enter quantity: 2
Enter price: 55000
Product: Laptop
Quantity: 2
Price: 55000`,

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
        "Write a C++ program to accept two integers from the user and print their sum.",

      questionTamil:
        "பயனரிடமிருந்து இரண்டு Integer எண்களை Input ஆக பெற்று அவற்றின் கூட்டுத்தொகையை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the + operator.",

      hintTamil:
        "கூட்டலுக்கு + Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter first number: 10
Enter second number: 20
Sum = 30`,

      expectedOutputTamil: `Enter first number: 10
Enter second number: 20
Sum = 30`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int num1, num2;

    cout << "Enter first number: ";
    cin >> num1;

    cout << "Enter second number: ";
    cin >> num2;

    cout << "Sum = " << num1 + num2;

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a C++ program to accept two integers from the user and print their difference.",

      questionTamil:
        "பயனரிடமிருந்து இரண்டு Integer எண்களை Input ஆக பெற்று அவற்றின் வித்தியாசத்தை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the - operator.",

      hintTamil:
        "கழித்தலுக்கு - Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter first number: 30
Enter second number: 10
Difference = 20`,

      expectedOutputTamil: `Enter first number: 30
Enter second number: 10
Difference = 20`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int num1, num2;

    cout << "Enter first number: ";
    cin >> num1;

    cout << "Enter second number: ";
    cin >> num2;

    cout << "Difference = " << num1 - num2;

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a C++ program to accept two integers from the user and print their product.",

      questionTamil:
        "பயனரிடமிருந்து இரண்டு Integer எண்களை Input ஆக பெற்று அவற்றின் பெருக்கலை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the * operator.",

      hintTamil:
        "பெருக்கலுக்கு * Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter first number: 5
Enter second number: 6
Product = 30`,

      expectedOutputTamil: `Enter first number: 5
Enter second number: 6
Product = 30`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int num1, num2;

    cout << "Enter first number: ";
    cin >> num1;

    cout << "Enter second number: ";
    cin >> num2;

    cout << "Product = " << num1 * num2;

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a C++ program to accept two integers from the user and check whether they are equal or not.",

      questionTamil:
        "பயனரிடமிருந்து இரண்டு Integer எண்களை Input ஆக பெற்று அவை சமமா இல்லையா என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the == operator.",

      hintTamil:
        "== Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter first number: 10
Enter second number: 10
Equal`,

      expectedOutputTamil: `Enter first number: 10
Enter second number: 10
Equal`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int num1, num2;

    cout << "Enter first number: ";
    cin >> num1;

    cout << "Enter second number: ";
    cin >> num2;

    if (num1 == num2)
        cout << "Equal";
    else
        cout << "Not Equal";

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a C++ program to accept two integers from the user and check whether the first number is greater than the second number.",

      questionTamil:
        "பயனரிடமிருந்து இரண்டு Integer எண்களை Input ஆக பெற்று, முதல் எண் இரண்டாவது எண்ணை விட பெரியதா என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the > operator with an if statement.",

      hintTamil:
        "> Operator மற்றும் if Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter first number: 20
Enter second number: 10
First number is greater`,

      expectedOutputTamil: `Enter first number: 20
Enter second number: 10
First number is greater`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int num1, num2;

    cout << "Enter first number: ";
    cin >> num1;

    cout << "Enter second number: ";
    cin >> num2;

    if (num1 > num2)
        cout << "First number is greater";
    else
        cout << "First number is not greater";

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a C++ program to accept two integers from the user and print the larger number using comparison operators.",

      questionTamil:
        "பயனரிடமிருந்து இரண்டு Integer எண்களை Input ஆக பெற்று, Comparison Operators பயன்படுத்தி பெரிய எண்ணை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the > operator with an if-else statement.",

      hintTamil:
        "> Operator மற்றும் if-else Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter first number: 15
Enter second number: 30
Largest Number = 30`,

      expectedOutputTamil: `Enter first number: 15
Enter second number: 30
Largest Number = 30`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a C++ program to accept two integers from the user and check whether they are different.",

      questionTamil:
        "பயனரிடமிருந்து இரண்டு Integer எண்களை Input ஆக பெற்று, அவை வெவ்வேறானவையா என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the != operator.",

      hintTamil:
        "!= Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter first number: 25
Enter second number: 10
Different`,

      expectedOutputTamil: `Enter first number: 25
Enter second number: 10
Different`,

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
        "Write a C++ program to accept an integer from the user and print 'Positive Number' if the number is positive.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு Integer எண்ணை Input ஆக பெற்று, அந்த எண் Positive ஆக இருந்தால் 'Positive Number' என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use an if statement with the > operator.",

      hintTamil:
        "if Statement மற்றும் > Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 10
Positive Number`,

      expectedOutputTamil: `Enter a number: 10
Positive Number`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int number;

    cout << "Enter a number: ";
    cin >> number;

    if (number > 0) {
        cout << "Positive Number";
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a C++ program to accept a number from the user and print 'Even Number' if the number is even.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, அந்த எண் Even ஆக இருந்தால் 'Even Number' என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the % operator with an if statement.",

      hintTamil:
        "% Operator மற்றும் if Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 8
Even Number`,

      expectedOutputTamil: `Enter a number: 8
Even Number`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int number;

    cout << "Enter a number: ";
    cin >> number;

    if (number % 2 == 0) {
        cout << "Even Number";
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a C++ program to accept a student's mark from the user and print 'Pass' if the mark is greater than or equal to 35.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு மாணவரின் மதிப்பெண்ணை Input ஆக பெற்று, அது 35 அல்லது அதற்கு மேல் இருந்தால் 'Pass' என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the >= operator with an if statement.",

      hintTamil:
        ">= Operator மற்றும் if Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter mark: 75
Pass`,

      expectedOutputTamil: `Enter mark: 75
Pass`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int mark;

    cout << "Enter mark: ";
    cin >> mark;

    if (mark >= 35) {
        cout << "Pass";
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a C++ program to accept a number from the user and print 'Negative Number' if the number is negative.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, அந்த எண் Negative ஆக இருந்தால் 'Negative Number' என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the < operator with an if statement.",

      hintTamil:
        "< Operator மற்றும் if Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: -8
Negative Number`,

      expectedOutputTamil: `Enter a number: -8
Negative Number`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int number;

    cout << "Enter a number: ";
    cin >> number;

    if (number < 0) {
        cout << "Negative Number";
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a C++ program to accept a character from the user and print 'Uppercase Letter' if the character is an uppercase alphabet.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு Character-ஐ Input ஆக பெற்று, அது Uppercase Alphabet ஆக இருந்தால் 'Uppercase Letter' என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Check whether the character is between 'A' and 'Z'.",

      hintTamil:
        "Character 'A' மற்றும் 'Z' இடையே உள்ளதா என்பதை சரிபார்க்கவும்.",

      expectedOutput: `Enter a character: A
Uppercase Letter`,

      expectedOutputTamil: `Enter a character: A
Uppercase Letter`,

      solution: `#include <iostream>
using namespace std;

int main() {

    char ch;

    cout << "Enter a character: ";
    cin >> ch;

    if (ch >= 'A' && ch <= 'Z') {
        cout << "Uppercase Letter";
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a C++ program to accept a person's age from the user and print 'Eligible to Vote' if the age is 18 or above.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு நபரின் வயதை Input ஆக பெற்று, அது 18 அல்லது அதற்கு மேல் இருந்தால் 'Eligible to Vote' என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the >= operator with an if statement.",

      hintTamil:
        ">= Operator மற்றும் if Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter age: 20
Eligible to Vote`,

      expectedOutputTamil: `Enter age: 20
Eligible to Vote`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int age;

    cout << "Enter age: ";
    cin >> age;

    if (age >= 18) {
        cout << "Eligible to Vote";
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a C++ program to accept a number from the user and print 'Divisible by 5' if the number is divisible by 5.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, அது 5-ஆல் வகுபட்டால் 'Divisible by 5' என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the % operator with an if statement.",

      hintTamil:
        "% Operator மற்றும் if Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 25
Divisible by 5`,

      expectedOutputTamil: `Enter a number: 25
Divisible by 5`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int number;

    cout << "Enter a number: ";
    cin >> number;

    if (number % 5 == 0) {
        cout << "Divisible by 5";
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a C++ program to accept a number from the user and print 'Three Digit Number' if the number is between 100 and 999.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, அது 100 முதல் 999 வரை இருந்தால் 'Three Digit Number' என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the >= and <= operators with an if statement.",

      hintTamil:
        ">= மற்றும் <= Operators-ஐ if Statement உடன் பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 456
Three Digit Number`,

      expectedOutputTamil: `Enter a number: 456
Three Digit Number`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int number;

    cout << "Enter a number: ";
    cin >> number;

    if (number >= 100 && number <= 999) {
        cout << "Three Digit Number";
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a C++ program to accept a number from the user and print 'Positive Number' if the number is greater than zero.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, அது 0-ஐ விட பெரியதாக இருந்தால் 'Positive Number' என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the > operator with an if statement.",

      hintTamil:
        "> Operator மற்றும் if Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 18
Positive Number`,

      expectedOutputTamil: `Enter a number: 18
Positive Number`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a C++ program to accept a student's mark from the user and print 'Excellent' if the mark is greater than or equal to 90.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு மாணவரின் மதிப்பெண்ணை Input ஆக பெற்று, அது 90 அல்லது அதற்கு மேல் இருந்தால் 'Excellent' என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the >= operator with an if statement.",

      hintTamil:
        ">= Operator மற்றும் if Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter mark: 95
Excellent`,

      expectedOutputTamil: `Enter mark: 95
Excellent`,

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
        "Write a C++ program to accept a number from the user and print 'Even Number' if the number is even, otherwise print 'Odd Number'.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, அது Even ஆக இருந்தால் 'Even Number', இல்லையெனில் 'Odd Number' என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the % operator with an if-else statement.",

      hintTamil:
        "% Operator மற்றும் if-else Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 7
Odd Number`,

      expectedOutputTamil: `Enter a number: 7
Odd Number`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int number;

    cout << "Enter a number: ";
    cin >> number;

    if (number % 2 == 0) {
        cout << "Even Number";
    }
    else {
        cout << "Odd Number";
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a C++ program to accept a number from the user and print 'Positive Number' if the number is positive, otherwise print 'Negative Number'.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, அது Positive ஆக இருந்தால் 'Positive Number', இல்லையெனில் 'Negative Number' என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the > operator with an if-else statement.",

      hintTamil:
        "> Operator மற்றும் if-else Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: -15
Negative Number`,

      expectedOutputTamil: `Enter a number: -15
Negative Number`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int number;

    cout << "Enter a number: ";
    cin >> number;

    if (number > 0) {
        cout << "Positive Number";
    }
    else {
        cout << "Negative Number";
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a C++ program to accept a student's mark from the user and print 'Pass' if the mark is greater than or equal to 35, otherwise print 'Fail'.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு மாணவரின் மதிப்பெண்ணை Input ஆக பெற்று, அது 35 அல்லது அதற்கு மேல் இருந்தால் 'Pass', இல்லையெனில் 'Fail' என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the >= operator with an if-else statement.",

      hintTamil:
        ">= Operator மற்றும் if-else Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter mark: 28
Fail`,

      expectedOutputTamil: `Enter mark: 28
Fail`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int mark;

    cout << "Enter mark: ";
    cin >> mark;

    if (mark >= 35) {
        cout << "Pass";
    }
    else {
        cout << "Fail";
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a C++ program to accept two integers from the user and print 'Equal' if both numbers are equal, otherwise print 'Not Equal'.",

      questionTamil:
        "பயனரிடமிருந்து இரண்டு Integer எண்களை Input ஆக பெற்று, அவை சமமாக இருந்தால் 'Equal', இல்லையெனில் 'Not Equal' என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the == operator with an if-else statement.",

      hintTamil:
        "== Operator மற்றும் if-else Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter first number: 15
Enter second number: 20
Not Equal`,

      expectedOutputTamil: `Enter first number: 15
Enter second number: 20
Not Equal`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int num1, num2;

    cout << "Enter first number: ";
    cin >> num1;

    cout << "Enter second number: ";
    cin >> num2;

    if (num1 == num2) {
        cout << "Equal";
    }
    else {
        cout << "Not Equal";
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a C++ program to accept a person's age from the user and print 'Eligible to Vote' if the age is 18 or above, otherwise print 'Not Eligible to Vote'.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு நபரின் வயதை Input ஆக பெற்று, அது 18 அல்லது அதற்கு மேல் இருந்தால் 'Eligible to Vote', இல்லையெனில் 'Not Eligible to Vote' என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the >= operator with an if-else statement.",

      hintTamil:
        ">= Operator மற்றும் if-else Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter age: 16
Not Eligible to Vote`,

      expectedOutputTamil: `Enter age: 16
Not Eligible to Vote`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int age;

    cout << "Enter age: ";
    cin >> age;

    if (age >= 18) {
        cout << "Eligible to Vote";
    }
    else {
        cout << "Not Eligible to Vote";
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a C++ program to accept a character from the user and print 'Uppercase Letter' if it is an uppercase letter, otherwise print 'Not an Uppercase Letter'.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு Character-ஐ Input ஆக பெற்று, அது Uppercase Letter ஆக இருந்தால் 'Uppercase Letter', இல்லையெனில் 'Not an Uppercase Letter' என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Check whether the character is between 'A' and 'Z' using an if-else statement.",

      hintTamil:
        "'A' மற்றும் 'Z' இடையே உள்ளதா என்பதை if-else Statement மூலம் சரிபார்க்குங்கள்.",

      expectedOutput: `Enter a character: b
Not an Uppercase Letter`,

      expectedOutputTamil: `Enter a character: b
Not an Uppercase Letter`,

      solution: `#include <iostream>
using namespace std;

int main() {

    char ch;

    cout << "Enter a character: ";
    cin >> ch;

    if (ch >= 'A' && ch <= 'Z') {
        cout << "Uppercase Letter";
    }
    else {
        cout << "Not an Uppercase Letter";
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a C++ program to accept two integers from the user and print 'First Number is Greater' if the first number is greater than the second number, otherwise print 'Second Number is Greater or Equal'.",

      questionTamil:
        "பயனரிடமிருந்து இரண்டு Integer எண்களை Input ஆக பெற்று, முதல் எண் இரண்டாவது எண்ணை விட பெரியதாக இருந்தால் 'First Number is Greater', இல்லையெனில் 'Second Number is Greater or Equal' என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the > operator with an if-else statement.",

      hintTamil:
        "> Operator மற்றும் if-else Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter first number: 15
Enter second number: 30
Second Number is Greater or Equal`,

      expectedOutputTamil: `Enter first number: 15
Enter second number: 30
Second Number is Greater or Equal`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int num1, num2;

    cout << "Enter first number: ";
    cin >> num1;

    cout << "Enter second number: ";
    cin >> num2;

    if (num1 > num2) {
        cout << "First Number is Greater";
    }
    else {
        cout << "Second Number is Greater or Equal";
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a C++ program to accept a number from the user and print 'Divisible by 5' if the number is divisible by 5, otherwise print 'Not Divisible by 5'.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, அது 5-ஆல் வகுபட்டால் 'Divisible by 5', இல்லையெனில் 'Not Divisible by 5' என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the % operator with an if-else statement.",

      hintTamil:
        "% Operator மற்றும் if-else Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 17
Not Divisible by 5`,

      expectedOutputTamil: `Enter a number: 17
Not Divisible by 5`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int number;

    cout << "Enter a number: ";
    cin >> number;

    if (number % 5 == 0) {
        cout << "Divisible by 5";
    }
    else {
        cout << "Not Divisible by 5";
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a C++ program to accept a number from the user and print 'Even Number' if it is even, otherwise print 'Odd Number'.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, அது Even ஆக இருந்தால் 'Even Number', இல்லையெனில் 'Odd Number' என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the % operator with an if-else statement.",

      hintTamil:
        "% Operator மற்றும் if-else Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 11
Odd Number`,

      expectedOutputTamil: `Enter a number: 11
Odd Number`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a C++ program to accept a student's mark from the user and print 'Pass' if the mark is greater than or equal to 35, otherwise print 'Fail'.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு மாணவரின் மதிப்பெண்ணை Input ஆக பெற்று, அது 35 அல்லது அதற்கு மேல் இருந்தால் 'Pass', இல்லையெனில் 'Fail' என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the >= operator with an if-else statement.",

      hintTamil:
        ">= Operator மற்றும் if-else Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter mark: 25
Fail`,

      expectedOutputTamil: `Enter mark: 25
Fail`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },
  ],
},
{
  topicId: 8,
  title: "Nested If",

  questions: [
    {
      id: 1,
      title: "Question 1",

      questionEnglish:
        "Write a C++ program to accept a person's age and whether they have an ID card. Print 'Entry Allowed' if the age is 18 or above and the person has an ID card.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு நபரின் வயது மற்றும் அவரிடம் ID Card உள்ளதா என்பதை Input ஆக பெற்று, வயது 18 அல்லது அதற்கு மேல் இருந்தும் ID Card இருந்தும் 'Entry Allowed' என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a nested if statement. Check the age first, then check the ID.",

      hintTamil:
        "Nested if Statement-ஐ பயன்படுத்துங்கள். முதலில் வயதை சரிபார்த்து, பின்னர் ID-ஐ சரிபார்க்குங்கள்.",

      expectedOutput: `Enter age: 20
Has ID (1/0): 1
Entry Allowed`,

      expectedOutputTamil: `Enter age: 20
Has ID (1/0): 1
Entry Allowed`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int age;
    bool hasID;

    cout << "Enter age: ";
    cin >> age;

    cout << "Has ID (1/0): ";
    cin >> hasID;

    if (age >= 18) {
        if (hasID) {
            cout << "Entry Allowed";
        }
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a C++ program to accept a username and password. Print 'Login Successful' only if the username is 'admin' and the password is '1234'.",

      questionTamil:
        "பயனரிடமிருந்து Username மற்றும் Password-ஐ Input ஆக பெற்று, Username 'admin' மற்றும் Password '1234' ஆக இருந்தால் மட்டும் 'Login Successful' என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use nested if statements to validate the username and password.",

      hintTamil:
        "Username மற்றும் Password-ஐ சரிபார்க்க Nested if Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter username: admin
Enter password: 1234
Login Successful`,

      expectedOutputTamil: `Enter username: admin
Enter password: 1234
Login Successful`,

      solution: `#include <iostream>
#include <string>
using namespace std;

int main() {

    string username, password;

    cout << "Enter username: ";
    cin >> username;

    cout << "Enter password: ";
    cin >> password;

    if (username == "admin") {
        if (password == "1234") {
            cout << "Login Successful";
        }
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a C++ program to accept a student's mark and attendance percentage. Print 'Eligible for Exam' if the mark is greater than or equal to 35 and the attendance is 75 or above.",

      questionTamil:
        "பயனரிடமிருந்து மாணவரின் மதிப்பெண் மற்றும் Attendance சதவீதத்தை Input ஆக பெற்று, மதிப்பெண் 35 அல்லது அதற்கு மேல் மற்றும் Attendance 75 அல்லது அதற்கு மேல் இருந்தால் 'Eligible for Exam' என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Check the mark first, then check the attendance using nested if.",

      hintTamil:
        "முதலில் Mark-ஐ சரிபார்த்து, பின்னர் Attendance-ஐ Nested if மூலம் சரிபார்க்குங்கள்.",

      expectedOutput: `Enter mark: 80
Enter attendance: 90
Eligible for Exam`,

      expectedOutputTamil: `Enter mark: 80
Enter attendance: 90
Eligible for Exam`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int mark, attendance;

    cout << "Enter mark: ";
    cin >> mark;

    cout << "Enter attendance: ";
    cin >> attendance;

    if (mark >= 35) {
        if (attendance >= 75) {
            cout << "Eligible for Exam";
        }
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a C++ program to accept a person's age and whether they have a driving license. Print 'Can Drive' if the age is 18 or above and the person has a driving license.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு நபரின் வயது மற்றும் அவரிடம் Driving License உள்ளதா என்பதை Input ஆக பெற்று, வயது 18 அல்லது அதற்கு மேல் இருந்தும் Driving License இருந்தும் 'Can Drive' என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a nested if statement. Check the age first, then check the driving license.",

      hintTamil:
        "Nested if Statement-ஐ பயன்படுத்துங்கள். முதலில் வயதை சரிபார்த்து, பின்னர் Driving License-ஐ சரிபார்க்குங்கள்.",

      expectedOutput: `Enter age: 22
Has Driving License (1/0): 1
Can Drive`,

      expectedOutputTamil: `Enter age: 22
Has Driving License (1/0): 1
Can Drive`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int age;
    bool hasLicense;

    cout << "Enter age: ";
    cin >> age;

    cout << "Has Driving License (1/0): ";
    cin >> hasLicense;

    if (age >= 18) {
        if (hasLicense) {
            cout << "Can Drive";
        }
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a C++ program to accept a username and OTP. Print 'Verification Successful' if the username is 'deepak' and the OTP is '5678'.",

      questionTamil:
        "பயனரிடமிருந்து Username மற்றும் OTP-ஐ Input ஆக பெற்று, Username 'deepak' மற்றும் OTP '5678' ஆக இருந்தால் மட்டும் 'Verification Successful' என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Check the username first, then verify the OTP using nested if.",

      hintTamil:
        "முதலில் Username-ஐ சரிபார்த்து, பின்னர் Nested if மூலம் OTP-ஐ சரிபார்க்குங்கள்.",

      expectedOutput: `Enter username: deepak
Enter OTP: 5678
Verification Successful`,

      expectedOutputTamil: `Enter username: deepak
Enter OTP: 5678
Verification Successful`,

      solution: `#include <iostream>
#include <string>
using namespace std;

int main() {

    string username;
    int otp;

    cout << "Enter username: ";
    cin >> username;

    cout << "Enter OTP: ";
    cin >> otp;

    if (username == "deepak") {
        if (otp == 5678) {
            cout << "Verification Successful";
        }
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a C++ program to accept an employee's experience and performance rating. Print 'Promotion Eligible' if the experience is 5 years or more and the performance rating is 8 or above.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு பணியாளரின் Experience மற்றும் Performance Rating-ஐ Input ஆக பெற்று, Experience 5 ஆண்டுகள் அல்லது அதற்கு மேல் மற்றும் Performance Rating 8 அல்லது அதற்கு மேல் இருந்தால் 'Promotion Eligible' என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use nested if statements. Check the experience first, then check the performance rating.",

      hintTamil:
        "Nested if Statement-ஐ பயன்படுத்துங்கள். முதலில் Experience-ஐ சரிபார்த்து, பின்னர் Performance Rating-ஐ சரிபார்க்குங்கள்.",

      expectedOutput: `Enter experience: 6
Enter performance rating: 9
Promotion Eligible`,

      expectedOutputTamil: `Enter experience: 6
Enter performance rating: 9
Promotion Eligible`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int experience, rating;

    cout << "Enter experience: ";
    cin >> experience;

    cout << "Enter performance rating: ";
    cin >> rating;

    if (experience >= 5) {
        if (rating >= 8) {
            cout << "Promotion Eligible";
        }
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a C++ program to accept a person's age and whether they have a passport. Print 'Eligible to Travel' if the age is 18 or above and the person has a passport.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு நபரின் வயது மற்றும் அவரிடம் Passport உள்ளதா என்பதை Input ஆக பெற்று, வயது 18 அல்லது அதற்கு மேல் இருந்தும் Passport இருந்தும் 'Eligible to Travel' என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use nested if statements. Check the age first, then check the passport.",

      hintTamil:
        "Nested if Statement-ஐ பயன்படுத்துங்கள். முதலில் வயதை சரிபார்த்து, பின்னர் Passport-ஐ சரிபார்க்குங்கள்.",

      expectedOutput: `Enter age: 21
Has Passport (1/0): 1
Eligible to Travel`,

      expectedOutputTamil: `Enter age: 21
Has Passport (1/0): 1
Eligible to Travel`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int age;
    bool hasPassport;

    cout << "Enter age: ";
    cin >> age;

    cout << "Has Passport (1/0): ";
    cin >> hasPassport;

    if (age >= 18) {
        if (hasPassport) {
            cout << "Eligible to Travel";
        }
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a C++ program to accept a student's mark and project status. Print 'Certificate Awarded' if the mark is greater than or equal to 50 and the project is completed.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு மாணவரின் மதிப்பெண் மற்றும் Project முடித்துள்ளாரா என்பதை Input ஆக பெற்று, மதிப்பெண் 50 அல்லது அதற்கு மேல் மற்றும் Project முடித்திருந்தால் 'Certificate Awarded' என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use nested if statements. Check the mark first, then check the project status.",

      hintTamil:
        "Nested if Statement-ஐ பயன்படுத்துங்கள். முதலில் Mark-ஐ சரிபார்த்து, பின்னர் Project Status-ஐ சரிபார்க்குங்கள்.",

      expectedOutput: `Enter mark: 85
Project Completed (1/0): 1
Certificate Awarded`,

      expectedOutputTamil: `Enter mark: 85
Project Completed (1/0): 1
Certificate Awarded`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int mark;
    bool projectCompleted;

    cout << "Enter mark: ";
    cin >> mark;

    cout << "Project Completed (1/0): ";
    cin >> projectCompleted;

    if (mark >= 50) {
        if (projectCompleted) {
            cout << "Certificate Awarded";
        }
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a C++ program to accept a username and password. Print 'Login Successful' only if the username is 'admin' and the password is '1234'.",

      questionTamil:
        "பயனரிடமிருந்து Username மற்றும் Password-ஐ Input ஆக பெற்று, Username 'admin' மற்றும் Password '1234' ஆக இருந்தால் மட்டும் 'Login Successful' என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use nested if statements to validate the username and password.",

      hintTamil:
        "Username மற்றும் Password-ஐ Nested if Statement மூலம் சரிபார்க்குங்கள்.",

      expectedOutput: `Enter username: admin
Enter password: 1234
Login Successful`,

      expectedOutputTamil: `Enter username: admin
Enter password: 1234
Login Successful`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a C++ program to accept a person's age and whether they have a driving license. Print 'Can Drive' if the age is 18 or above and the person has a driving license.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு நபரின் வயது மற்றும் அவரிடம் Driving License உள்ளதா என்பதை Input ஆக பெற்று, வயது 18 அல்லது அதற்கு மேல் மற்றும் Driving License இருந்தால் 'Can Drive' என்பதை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use nested if statements. Check the age first, then check the driving license.",

      hintTamil:
        "Nested if Statement-ஐ பயன்படுத்துங்கள். முதலில் வயதை சரிபார்த்து, பின்னர் Driving License-ஐ சரிபார்க்குங்கள்.",

      expectedOutput: `Enter age: 20
Has Driving License (1/0): 1
Can Drive`,

      expectedOutputTamil: `Enter age: 20
Has Driving License (1/0): 1
Can Drive`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },
  ],
},
{
  topicId: 9,
  title: "Switch Statement",

  questions: [
    {
      id: 1,
      title: "Question 1",

      questionEnglish:
        "Write a C++ program to accept a number between 1 and 3 from the user and display the corresponding programming language using a switch statement (1-Java, 2-C++, 3-Python).",

      questionTamil:
        "பயனரிடமிருந்து 1 முதல் 3 வரை ஒரு எண்ணை Input ஆக பெற்று, Switch Statement பயன்படுத்தி அதற்கான Programming Language-ஐ (1-Java, 2-C++, 3-Python) Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a switch statement with case 1, case 2, and case 3.",

      hintTamil:
        "case 1, case 2 மற்றும் case 3 உடன் Switch Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter your choice: 2
C++`,

      expectedOutputTamil: `Enter your choice: 2
C++`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int choice;

    cout << "Enter your choice: ";
    cin >> choice;

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

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a C++ program to accept a number between 1 and 7 and display the corresponding day of the week using a switch statement.",

      questionTamil:
        "பயனரிடமிருந்து 1 முதல் 7 வரை ஒரு எண்ணை Input ஆக பெற்று, Switch Statement பயன்படுத்தி அதற்கான வார நாளை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create cases for numbers 1 to 7.",

      hintTamil:
        "1 முதல் 7 வரை Case-களை உருவாக்குங்கள்.",

      expectedOutput: `Enter day number: 5
Friday`,

      expectedOutputTamil: `Enter day number: 5
Friday`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int day;

    cout << "Enter day number: ";
    cin >> day;

    switch(day)
    {
        case 1:
            cout << "Monday";
            break;

        case 2:
            cout << "Tuesday";
            break;

        case 3:
            cout << "Wednesday";
            break;

        case 4:
            cout << "Thursday";
            break;

        case 5:
            cout << "Friday";
            break;

        case 6:
            cout << "Saturday";
            break;

        case 7:
            cout << "Sunday";
            break;

        default:
            cout << "Invalid Day";
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a C++ program to accept a number between 1 and 4 and display the corresponding arithmetic operator name using a switch statement.",

      questionTamil:
        "பயனரிடமிருந்து 1 முதல் 4 வரை ஒரு எண்ணை Input ஆக பெற்று, Switch Statement பயன்படுத்தி அதற்கான Arithmetic Operator பெயரை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use switch with four cases.",

      hintTamil:
        "நான்கு Case-களுடன் Switch Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter choice: 3
Multiplication`,

      expectedOutputTamil: `Enter choice: 3
Multiplication`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int choice;

    cout << "Enter choice: ";
    cin >> choice;

    switch(choice)
    {
        case 1:
            cout << "Addition";
            break;

        case 2:
            cout << "Subtraction";
            break;

        case 3:
            cout << "Multiplication";
            break;

        case 4:
            cout << "Division";
            break;

        default:
            cout << "Invalid Choice";
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a C++ program to accept a month number (1–12) from the user and display the corresponding month name using a switch statement.",

      questionTamil:
        "பயனரிடமிருந்து 1 முதல் 12 வரை ஒரு மாத எண்ணை Input ஆக பெற்று, Switch Statement பயன்படுத்தி அதற்கான மாதத்தின் பெயரை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create cases for month numbers 1 to 12.",

      hintTamil:
        "1 முதல் 12 வரை Case-களை உருவாக்குங்கள்.",

      expectedOutput: `Enter month number: 8
August`,

      expectedOutputTamil: `Enter month number: 8
August`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int month;

    cout << "Enter month number: ";
    cin >> month;

    switch(month)
    {
        case 1:
            cout << "January";
            break;
        case 2:
            cout << "February";
            break;
        case 3:
            cout << "March";
            break;
        case 4:
            cout << "April";
            break;
        case 5:
            cout << "May";
            break;
        case 6:
            cout << "June";
            break;
        case 7:
            cout << "July";
            break;
        case 8:
            cout << "August";
            break;
        case 9:
            cout << "September";
            break;
        case 10:
            cout << "October";
            break;
        case 11:
            cout << "November";
            break;
        case 12:
            cout << "December";
            break;
        default:
            cout << "Invalid Month";
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a C++ program to accept a number between 1 and 5 from the user and display the corresponding fruit name using a switch statement.",

      questionTamil:
        "பயனரிடமிருந்து 1 முதல் 5 வரை ஒரு எண்ணை Input ஆக பெற்று, Switch Statement பயன்படுத்தி அதற்கான பழத்தின் பெயரை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use switch with five cases.",

      hintTamil:
        "ஐந்து Case-களுடன் Switch Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter choice: 2
Banana`,

      expectedOutputTamil: `Enter choice: 2
Banana`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int choice;

    cout << "Enter choice: ";
    cin >> choice;

    switch(choice)
    {
        case 1:
            cout << "Apple";
            break;
        case 2:
            cout << "Banana";
            break;
        case 3:
            cout << "Orange";
            break;
        case 4:
            cout << "Mango";
            break;
        case 5:
            cout << "Grapes";
            break;
        default:
            cout << "Invalid Choice";
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a C++ program to accept a number between 1 and 4 from the user and display the corresponding season using a switch statement.",

      questionTamil:
        "பயனரிடமிருந்து 1 முதல் 4 வரை ஒரு எண்ணை Input ஆக பெற்று, Switch Statement பயன்படுத்தி அதற்கான பருவ காலத்தின் பெயரை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create four cases for the seasons.",

      hintTamil:
        "நான்கு பருவ காலங்களுக்கான Case-களை உருவாக்குங்கள்.",

      expectedOutput: `Enter choice: 3
Rainy`,

      expectedOutputTamil: `Enter choice: 3
Rainy`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int choice;

    cout << "Enter choice: ";
    cin >> choice;

    switch(choice)
    {
        case 1:
            cout << "Summer";
            break;
        case 2:
            cout << "Winter";
            break;
        case 3:
            cout << "Rainy";
            break;
        case 4:
            cout << "Spring";
            break;
        default:
            cout << "Invalid Choice";
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a C++ program to accept a number between 1 and 4 from the user and display the corresponding geometric shape using a switch statement.",

      questionTamil:
        "பயனரிடமிருந்து 1 முதல் 4 வரை ஒரு எண்ணை Input ஆக பெற்று, Switch Statement பயன்படுத்தி அதற்கான வடிவத்தின் (Shape) பெயரை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use switch with four cases.",

      hintTamil:
        "நான்கு Case-களுடன் Switch Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter choice: 2
Square`,

      expectedOutputTamil: `Enter choice: 2
Square`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int choice;

    cout << "Enter choice: ";
    cin >> choice;

    switch(choice)
    {
        case 1:
            cout << "Circle";
            break;

        case 2:
            cout << "Square";
            break;

        case 3:
            cout << "Triangle";
            break;

        case 4:
            cout << "Rectangle";
            break;

        default:
            cout << "Invalid Choice";
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a C++ program to accept a number between 1 and 5 from the user and display the corresponding color using a switch statement.",

      questionTamil:
        "பயனரிடமிருந்து 1 முதல் 5 வரை ஒரு எண்ணை Input ஆக பெற்று, Switch Statement பயன்படுத்தி அதற்கான நிறத்தின் (Color) பெயரை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Create five cases using a switch statement.",

      hintTamil:
        "Switch Statement-ல் ஐந்து Case-களை உருவாக்குங்கள்.",

      expectedOutput: `Enter choice: 4
Yellow`,

      expectedOutputTamil: `Enter choice: 4
Yellow`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int choice;

    cout << "Enter choice: ";
    cin >> choice;

    switch(choice)
    {
        case 1:
            cout << "Red";
            break;

        case 2:
            cout << "Green";
            break;

        case 3:
            cout << "Blue";
            break;

        case 4:
            cout << "Yellow";
            break;

        case 5:
            cout << "Black";
            break;

        default:
            cout << "Invalid Choice";
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a C++ program to accept a number between 1 and 7 from the user and display the corresponding day of the week using a switch statement.",

      questionTamil:
        "பயனரிடமிருந்து 1 முதல் 7 வரை ஒரு எண்ணை Input ஆக பெற்று, Switch Statement பயன்படுத்தி அதற்கான வார நாளை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a switch statement with cases 1 to 7.",

      hintTamil:
        "1 முதல் 7 வரை உள்ள Case-களுடன் Switch Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter day number: 1
Monday`,

      expectedOutputTamil: `Enter day number: 1
Monday`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a C++ program to accept a number between 1 and 3 from the user and display the corresponding programming language using a switch statement.",

      questionTamil:
        "பயனரிடமிருந்து 1 முதல் 3 வரை ஒரு எண்ணை Input ஆக பெற்று, Switch Statement பயன்படுத்தி அதற்கான Programming Language-ஐ Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use switch with three cases.",

      hintTamil:
        "மூன்று Case-களுடன் Switch Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter choice: 3
Python`,

      expectedOutputTamil: `Enter choice: 3
Python`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },
  ],
},
{
  topicId: 10,
  title: "Ternary Operator",

  questions: [
    {
      id: 1,
      title: "Question 1",

      questionEnglish:
        "Write a C++ program to accept a number from the user and print 'Even Number' if the number is even, otherwise print 'Odd Number' using the ternary operator.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, அது Even ஆக இருந்தால் 'Even Number', இல்லையெனில் 'Odd Number' என்பதை Ternary Operator பயன்படுத்தி Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the ternary operator (condition ? true : false).",

      hintTamil:
        "Ternary Operator (condition ? true : false)-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 15
Odd Number`,

      expectedOutputTamil: `Enter a number: 15
Odd Number`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int number;

    cout << "Enter a number: ";
    cin >> number;

    cout << (number % 2 == 0 ? "Even Number" : "Odd Number");

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a C++ program to accept two integers from the user and print the greater number using the ternary operator.",

      questionTamil:
        "பயனரிடமிருந்து இரண்டு Integer எண்களை Input ஆக பெற்று, பெரிய எண்ணை Ternary Operator பயன்படுத்தி Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Compare the two numbers using the > operator.",

      hintTamil:
        "> Operator மற்றும் Ternary Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter first number: 20
Enter second number: 35
Greater Number = 35`,

      expectedOutputTamil: `Enter first number: 20
Enter second number: 35
Greater Number = 35`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int num1, num2;

    cout << "Enter first number: ";
    cin >> num1;

    cout << "Enter second number: ";
    cin >> num2;

    cout << "Greater Number = " << (num1 > num2 ? num1 : num2);

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a C++ program to accept a student's mark and print 'Pass' if the mark is greater than or equal to 35, otherwise print 'Fail' using the ternary operator.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு மாணவரின் மதிப்பெண்ணை Input ஆக பெற்று, அது 35 அல்லது அதற்கு மேல் இருந்தால் 'Pass', இல்லையெனில் 'Fail' என்பதை Ternary Operator பயன்படுத்தி Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the >= operator with the ternary operator.",

      hintTamil:
        ">= Operator மற்றும் Ternary Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter mark: 28
Fail`,

      expectedOutputTamil: `Enter mark: 28
Fail`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int mark;

    cout << "Enter mark: ";
    cin >> mark;

    cout << (mark >= 35 ? "Pass" : "Fail");

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a C++ program to accept a person's age and print 'Eligible to Vote' if the age is 18 or above, otherwise print 'Not Eligible to Vote' using the ternary operator.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு நபரின் வயதை Input ஆக பெற்று, அது 18 அல்லது அதற்கு மேல் இருந்தால் 'Eligible to Vote', இல்லையெனில் 'Not Eligible to Vote' என்பதை Ternary Operator பயன்படுத்தி Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the >= operator with the ternary operator.",

      hintTamil:
        ">= Operator மற்றும் Ternary Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter age: 16
Not Eligible to Vote`,

      expectedOutputTamil: `Enter age: 16
Not Eligible to Vote`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int age;

    cout << "Enter age: ";
    cin >> age;

    cout << (age >= 18 ? "Eligible to Vote" : "Not Eligible to Vote");

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a C++ program to accept two integers from the user and print 'Equal' if both numbers are equal, otherwise print 'Not Equal' using the ternary operator.",

      questionTamil:
        "பயனரிடமிருந்து இரண்டு Integer எண்களை Input ஆக பெற்று, அவை சமமாக இருந்தால் 'Equal', இல்லையெனில் 'Not Equal' என்பதை Ternary Operator பயன்படுத்தி Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the == operator with the ternary operator.",

      hintTamil:
        "== Operator மற்றும் Ternary Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter first number: 15
Enter second number: 20
Not Equal`,

      expectedOutputTamil: `Enter first number: 15
Enter second number: 20
Not Equal`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int num1, num2;

    cout << "Enter first number: ";
    cin >> num1;

    cout << "Enter second number: ";
    cin >> num2;

    cout << (num1 == num2 ? "Equal" : "Not Equal");

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a C++ program to accept a number from the user and print 'Positive Number' if the number is positive, otherwise print 'Negative Number' using the ternary operator.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, அது Positive ஆக இருந்தால் 'Positive Number', இல்லையெனில் 'Negative Number' என்பதை Ternary Operator பயன்படுத்தி Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the > operator with the ternary operator.",

      hintTamil:
        "> Operator மற்றும் Ternary Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: -10
Negative Number`,

      expectedOutputTamil: `Enter a number: -10
Negative Number`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int number;

    cout << "Enter a number: ";
    cin >> number;

    cout << (number > 0 ? "Positive Number" : "Negative Number");

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a C++ program to accept a number from the user and print 'Divisible by 5' if the number is divisible by 5, otherwise print 'Not Divisible by 5' using the ternary operator.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, அது 5-ஆல் வகுபட்டால் 'Divisible by 5', இல்லையெனில் 'Not Divisible by 5' என்பதை Ternary Operator பயன்படுத்தி Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the % operator with the ternary operator.",

      hintTamil:
        "% Operator மற்றும் Ternary Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 17
Not Divisible by 5`,

      expectedOutputTamil: `Enter a number: 17
Not Divisible by 5`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int number;

    cout << "Enter a number: ";
    cin >> number;

    cout << (number % 5 == 0 ? "Divisible by 5" : "Not Divisible by 5");

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a C++ program to accept two integers from the user and print the smaller number using the ternary operator.",

      questionTamil:
        "பயனரிடமிருந்து இரண்டு Integer எண்களை Input ஆக பெற்று, சிறிய எண்ணை Ternary Operator பயன்படுத்தி Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the < operator with the ternary operator.",

      hintTamil:
        "< Operator மற்றும் Ternary Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter first number: 25
Enter second number: 10
Smaller Number = 10`,

      expectedOutputTamil: `Enter first number: 25
Enter second number: 10
Smaller Number = 10`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int num1, num2;

    cout << "Enter first number: ";
    cin >> num1;

    cout << "Enter second number: ";
    cin >> num2;

    cout << "Smaller Number = " << (num1 < num2 ? num1 : num2);

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a C++ program to accept a person's age and print 'Eligible to Vote' if the age is 18 or above, otherwise print 'Not Eligible to Vote' using the ternary operator.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு நபரின் வயதை Input ஆக பெற்று, அது 18 அல்லது அதற்கு மேல் இருந்தால் 'Eligible to Vote', இல்லையெனில் 'Not Eligible to Vote' என்பதை Ternary Operator பயன்படுத்தி Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the >= operator with the ternary operator.",

      hintTamil:
        ">= Operator மற்றும் Ternary Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter age: 21
Eligible to Vote`,

      expectedOutputTamil: `Enter age: 21
Eligible to Vote`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a C++ program to accept a student's mark and print 'Pass' if the mark is greater than or equal to 35, otherwise print 'Fail' using the ternary operator.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு மாணவரின் மதிப்பெண்ணை Input ஆக பெற்று, அது 35 அல்லது அதற்கு மேல் இருந்தால் 'Pass', இல்லையெனில் 'Fail' என்பதை Ternary Operator பயன்படுத்தி Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use the >= operator with the ternary operator.",

      hintTamil:
        ">= Operator மற்றும் Ternary Operator-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter mark: 30
Fail`,

      expectedOutputTamil: `Enter mark: 30
Fail`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },
  ],
},
{
  topicId: 11,
  title: "While Loop",

  questions: [
    {
      id: 1,
      title: "Question 1",

      questionEnglish:
        "Write a C++ program to print numbers from 1 to 5 using a while loop.",

      questionTamil:
        "While Loop பயன்படுத்தி 1 முதல் 5 வரை உள்ள எண்களை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Initialize a variable with 1 and increment it until it becomes 5.",

      hintTamil:
        "Variable-ஐ 1-ல் Initialize செய்து, 5 வரை Increment செய்யுங்கள்.",

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

      solution: `#include <iostream>
using namespace std;

int main() {

    int i = 1;

    while (i <= 5) {
        cout << i << endl;
        i++;
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a C++ program to print numbers from 5 to 1 using a while loop.",

      questionTamil:
        "While Loop பயன்படுத்தி 5 முதல் 1 வரை உள்ள எண்களை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Initialize a variable with 5 and decrement it until it becomes 1.",

      hintTamil:
        "Variable-ஐ 5-ல் Initialize செய்து, 1 வரை Decrement செய்யுங்கள்.",

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

      solution: `#include <iostream>
using namespace std;

int main() {

    int i = 5;

    while (i >= 1) {
        cout << i << endl;
        i--;
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a C++ program to print the first 10 natural numbers using a while loop.",

      questionTamil:
        "While Loop பயன்படுத்தி முதல் 10 இயல் எண்களை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Start from 1 and continue until 10.",

      hintTamil:
        "1-ல் தொடங்கி 10 வரை Print செய்யுங்கள்.",

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

      solution: `#include <iostream>
using namespace std;

int main() {

    int i = 1;

    while (i <= 10) {
        cout << i << endl;
        i++;
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a C++ program to print all even numbers from 2 to 20 using a while loop.",

      questionTamil:
        "While Loop பயன்படுத்தி 2 முதல் 20 வரை உள்ள அனைத்து Even எண்களையும் Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Start from 2 and increment the variable by 2.",

      hintTamil:
        "2-ல் தொடங்கி ஒவ்வொரு முறையும் Variable-ஐ 2-ஆல் Increment செய்யுங்கள்.",

      expectedOutput: `2
4
6
8
10
12
14
16
18
20`,

      expectedOutputTamil: `2
4
6
8
10
12
14
16
18
20`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int i = 2;

    while (i <= 20) {
        cout << i << endl;
        i += 2;
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a C++ program to print all odd numbers from 1 to 19 using a while loop.",

      questionTamil:
        "While Loop பயன்படுத்தி 1 முதல் 19 வரை உள்ள அனைத்து Odd எண்களையும் Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Start from 1 and increment the variable by 2.",

      hintTamil:
        "1-ல் தொடங்கி ஒவ்வொரு முறையும் Variable-ஐ 2-ஆல் Increment செய்யுங்கள்.",

      expectedOutput: `1
3
5
7
9
11
13
15
17
19`,

      expectedOutputTamil: `1
3
5
7
9
11
13
15
17
19`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int i = 1;

    while (i <= 19) {
        cout << i << endl;
        i += 2;
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a C++ program to print the multiplication table of 5 using a while loop.",

      questionTamil:
        "While Loop பயன்படுத்தி 5-ன் பெருக்கல் வாய்ப்பாட்டை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Start from 1 and continue until 10.",

      hintTamil:
        "1-ல் தொடங்கி 10 வரை Loop-ஐ இயக்குங்கள்.",

      expectedOutput: `5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50`,

      expectedOutputTamil: `5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int i = 1;

    while (i <= 10) {
        cout << "5 x " << i << " = " << 5 * i << endl;
        i++;
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a C++ program to accept a number from the user and print its multiplication table using a while loop.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, அதன் பெருக்கல் வாய்ப்பாட்டை While Loop பயன்படுத்தி Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a while loop from 1 to 10.",

      hintTamil:
        "1 முதல் 10 வரை While Loop-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 3
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
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
3 x 5 = 15
3 x 6 = 18
3 x 7 = 21
3 x 8 = 24
3 x 9 = 27
3 x 10 = 30`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int number, i = 1;

    cout << "Enter a number: ";
    cin >> number;

    while (i <= 10) {
        cout << number << " x " << i << " = " << number * i << endl;
        i++;
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a C++ program to print numbers from 10 to 1 using a while loop.",

      questionTamil:
        "While Loop பயன்படுத்தி 10 முதல் 1 வரை உள்ள எண்களை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Initialize the variable with 10 and decrement it until it reaches 1.",

      hintTamil:
        "Variable-ஐ 10-ல் Initialize செய்து, 1 வரை Decrement செய்யுங்கள்.",

      expectedOutput: `10
9
8
7
6
5
4
3
2
1`,

      expectedOutputTamil: `10
9
8
7
6
5
4
3
2
1`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int i = 10;

    while (i >= 1) {
        cout << i << endl;
        i--;
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a C++ program to print all even numbers from 2 to 50 using a while loop.",

      questionTamil:
        "While Loop பயன்படுத்தி 2 முதல் 50 வரை உள்ள அனைத்து Even எண்களையும் Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Start from 2 and increment the variable by 2.",

      hintTamil:
        "2-ல் தொடங்கி ஒவ்வொரு முறையும் Variable-ஐ 2-ஆல் Increment செய்யுங்கள்.",

      expectedOutput: `2
4
6
8
10
12
14
16
18
20
22
24
26
28
30
32
34
36
38
40
42
44
46
48
50`,

      expectedOutputTamil: `2
4
6
8
10
12
14
16
18
20
22
24
26
28
30
32
34
36
38
40
42
44
46
48
50`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a C++ program to print the multiplication table of 8 using a while loop.",

      questionTamil:
        "While Loop பயன்படுத்தி 8-ன் பெருக்கல் வாய்ப்பாட்டை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a while loop from 1 to 10.",

      hintTamil:
        "1 முதல் 10 வரை While Loop-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `8 x 1 = 8
8 x 2 = 16
8 x 3 = 24
8 x 4 = 32
8 x 5 = 40
8 x 6 = 48
8 x 7 = 56
8 x 8 = 64
8 x 9 = 72
8 x 10 = 80`,

      expectedOutputTamil: `8 x 1 = 8
8 x 2 = 16
8 x 3 = 24
8 x 4 = 32
8 x 5 = 40
8 x 6 = 48
8 x 7 = 56
8 x 8 = 64
8 x 9 = 72
8 x 10 = 80`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },
  ],
},
{
  topicId: 12,
  title: "Do While Loop",

  questions: [
    {
      id: 1,
      title: "Question 1",

      questionEnglish:
        "Write a C++ program to print numbers from 1 to 5 using a do while loop.",

      questionTamil:
        "Do While Loop பயன்படுத்தி 1 முதல் 5 வரை உள்ள எண்களை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Initialize the variable with 1 and use a do while loop until it reaches 5.",

      hintTamil:
        "Variable-ஐ 1-ல் Initialize செய்து, 5 வரை Do While Loop-ஐ பயன்படுத்துங்கள்.",

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

      solution: `#include <iostream>
using namespace std;

int main() {

    int i = 1;

    do {
        cout << i << endl;
        i++;
    } while (i <= 5);

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a C++ program to print numbers from 5 to 1 using a do while loop.",

      questionTamil:
        "Do While Loop பயன்படுத்தி 5 முதல் 1 வரை உள்ள எண்களை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Initialize the variable with 5 and decrement it until it reaches 1.",

      hintTamil:
        "Variable-ஐ 5-ல் Initialize செய்து, 1 வரை Decrement செய்யுங்கள்.",

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

      solution: `#include <iostream>
using namespace std;

int main() {

    int i = 5;

    do {
        cout << i << endl;
        i--;
    } while (i >= 1);

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a C++ program to print the first 10 natural numbers using a do while loop.",

      questionTamil:
        "Do While Loop பயன்படுத்தி முதல் 10 இயல் எண்களை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Start from 1 and continue until 10.",

      hintTamil:
        "1-ல் தொடங்கி 10 வரை Do While Loop-ஐ பயன்படுத்துங்கள்.",

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

      solution: `#include <iostream>
using namespace std;

int main() {

    int i = 1;

    do {
        cout << i << endl;
        i++;
    } while (i <= 10);

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a C++ program to print all even numbers from 2 to 20 using a do while loop.",

      questionTamil:
        "Do While Loop பயன்படுத்தி 2 முதல் 20 வரை உள்ள அனைத்து Even எண்களையும் Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Start from 2 and increment the variable by 2.",

      hintTamil:
        "2-ல் தொடங்கி ஒவ்வொரு முறையும் Variable-ஐ 2-ஆல் Increment செய்யுங்கள்.",

      expectedOutput: `2
4
6
8
10
12
14
16
18
20`,

      expectedOutputTamil: `2
4
6
8
10
12
14
16
18
20`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int i = 2;

    do {
        cout << i << endl;
        i += 2;
    } while (i <= 20);

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a C++ program to print all odd numbers from 1 to 19 using a do while loop.",

      questionTamil:
        "Do While Loop பயன்படுத்தி 1 முதல் 19 வரை உள்ள அனைத்து Odd எண்களையும் Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Start from 1 and increment the variable by 2.",

      hintTamil:
        "1-ல் தொடங்கி ஒவ்வொரு முறையும் Variable-ஐ 2-ஆல் Increment செய்யுங்கள்.",

      expectedOutput: `1
3
5
7
9
11
13
15
17
19`,

      expectedOutputTamil: `1
3
5
7
9
11
13
15
17
19`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int i = 1;

    do {
        cout << i << endl;
        i += 2;
    } while (i <= 19);

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a C++ program to print the multiplication table of 5 using a do while loop.",

      questionTamil:
        "Do While Loop பயன்படுத்தி 5-ன் பெருக்கல் வாய்ப்பாட்டை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Start from 1 and continue until 10.",

      hintTamil:
        "1-ல் தொடங்கி 10 வரை Do While Loop-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50`,

      expectedOutputTamil: `5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int i = 1;

    do {
        cout << "5 x " << i << " = " << 5 * i << endl;
        i++;
    } while (i <= 10);

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a C++ program to accept a number from the user and print its multiplication table using a do while loop.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, அதன் பெருக்கல் வாய்ப்பாட்டை Do While Loop பயன்படுத்தி Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a do while loop from 1 to 10.",

      hintTamil:
        "1 முதல் 10 வரை Do While Loop-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 4
4 x 1 = 4
4 x 2 = 8
4 x 3 = 12
4 x 4 = 16
4 x 5 = 20
4 x 6 = 24
4 x 7 = 28
4 x 8 = 32
4 x 9 = 36
4 x 10 = 40`,

      expectedOutputTamil: `Enter a number: 4
4 x 1 = 4
4 x 2 = 8
4 x 3 = 12
4 x 4 = 16
4 x 5 = 20
4 x 6 = 24
4 x 7 = 28
4 x 8 = 32
4 x 9 = 36
4 x 10 = 40`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int number, i = 1;

    cout << "Enter a number: ";
    cin >> number;

    do {
        cout << number << " x " << i << " = " << number * i << endl;
        i++;
    } while (i <= 10);

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a C++ program to print numbers from 10 to 1 using a do while loop.",

      questionTamil:
        "Do While Loop பயன்படுத்தி 10 முதல் 1 வரை உள்ள எண்களை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Initialize the variable with 10 and decrement it until it reaches 1.",

      hintTamil:
        "Variable-ஐ 10-ல் Initialize செய்து, 1 வரை Decrement செய்யுங்கள்.",

      expectedOutput: `10
9
8
7
6
5
4
3
2
1`,

      expectedOutputTamil: `10
9
8
7
6
5
4
3
2
1`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int i = 10;

    do {
        cout << i << endl;
        i--;
    } while (i >= 1);

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a C++ program to print all odd numbers from 1 to 25 using a do while loop.",

      questionTamil:
        "Do While Loop பயன்படுத்தி 1 முதல் 25 வரை உள்ள அனைத்து Odd எண்களையும் Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Start from 1 and increment the variable by 2.",

      hintTamil:
        "1-ல் தொடங்கி ஒவ்வொரு முறையும் Variable-ஐ 2-ஆல் Increment செய்யுங்கள்.",

      expectedOutput: `1
3
5
7
9
11
13
15
17
19
21
23
25`,

      expectedOutputTamil: `1
3
5
7
9
11
13
15
17
19
21
23
25`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a C++ program to print the multiplication table of 8 using a do while loop.",

      questionTamil:
        "Do While Loop பயன்படுத்தி 8-ன் பெருக்கல் வாய்ப்பாட்டை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a do while loop from 1 to 10.",

      hintTamil:
        "1 முதல் 10 வரை Do While Loop-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `8 x 1 = 8
8 x 2 = 16
8 x 3 = 24
8 x 4 = 32
8 x 5 = 40
8 x 6 = 48
8 x 7 = 56
8 x 8 = 64
8 x 9 = 72
8 x 10 = 80`,

      expectedOutputTamil: `8 x 1 = 8
8 x 2 = 16
8 x 3 = 24
8 x 4 = 32
8 x 5 = 40
8 x 6 = 48
8 x 7 = 56
8 x 8 = 64
8 x 9 = 72
8 x 10 = 80`,

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
        "Write a C++ program to print numbers from 1 to 5 using a for loop.",

      questionTamil:
        "For Loop பயன்படுத்தி 1 முதல் 5 வரை உள்ள எண்களை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Initialize the loop variable with 1 and continue until it reaches 5.",

      hintTamil:
        "Loop Variable-ஐ 1-ல் Initialize செய்து, 5 வரை இயக்குங்கள்.",

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

      solution: `#include <iostream>
using namespace std;

int main() {

    for (int i = 1; i <= 5; i++) {
        cout << i << endl;
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a C++ program to print numbers from 5 to 1 using a for loop.",

      questionTamil:
        "For Loop பயன்படுத்தி 5 முதல் 1 வரை உள்ள எண்களை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Initialize the loop variable with 5 and decrement it until it reaches 1.",

      hintTamil:
        "Loop Variable-ஐ 5-ல் Initialize செய்து, 1 வரை Decrement செய்யுங்கள்.",

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

      solution: `#include <iostream>
using namespace std;

int main() {

    for (int i = 5; i >= 1; i--) {
        cout << i << endl;
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a C++ program to print the first 10 natural numbers using a for loop.",

      questionTamil:
        "For Loop பயன்படுத்தி முதல் 10 இயல் எண்களை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Start the loop from 1 and continue until 10.",

      hintTamil:
        "Loop-ஐ 1-ல் தொடங்கி 10 வரை இயக்குங்கள்.",

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

      solution: `#include <iostream>
using namespace std;

int main() {

    for (int i = 1; i <= 10; i++) {
        cout << i << endl;
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a C++ program to print all even numbers from 2 to 20 using a for loop.",

      questionTamil:
        "For Loop பயன்படுத்தி 2 முதல் 20 வரை உள்ள அனைத்து Even எண்களையும் Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Initialize the loop variable with 2 and increment it by 2.",

      hintTamil:
        "Loop Variable-ஐ 2-ல் Initialize செய்து, ஒவ்வொரு முறையும் 2-ஆல் Increment செய்யுங்கள்.",

      expectedOutput: `2
4
6
8
10
12
14
16
18
20`,

      expectedOutputTamil: `2
4
6
8
10
12
14
16
18
20`,

      solution: `#include <iostream>
using namespace std;

int main() {

    for (int i = 2; i <= 20; i += 2) {
        cout << i << endl;
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a C++ program to print all odd numbers from 1 to 19 using a for loop.",

      questionTamil:
        "For Loop பயன்படுத்தி 1 முதல் 19 வரை உள்ள அனைத்து Odd எண்களையும் Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Initialize the loop variable with 1 and increment it by 2.",

      hintTamil:
        "Loop Variable-ஐ 1-ல் Initialize செய்து, ஒவ்வொரு முறையும் 2-ஆல் Increment செய்யுங்கள்.",

      expectedOutput: `1
3
5
7
9
11
13
15
17
19`,

      expectedOutputTamil: `1
3
5
7
9
11
13
15
17
19`,

      solution: `#include <iostream>
using namespace std;

int main() {

    for (int i = 1; i <= 19; i += 2) {
        cout << i << endl;
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a C++ program to print the multiplication table of 5 using a for loop.",

      questionTamil:
        "For Loop பயன்படுத்தி 5-ன் பெருக்கல் வாய்ப்பாட்டை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a for loop from 1 to 10.",

      hintTamil:
        "1 முதல் 10 வரை For Loop-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50`,

      expectedOutputTamil: `5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50`,

      solution: `#include <iostream>
using namespace std;

int main() {

    for (int i = 1; i <= 10; i++) {
        cout << "5 x " << i << " = " << 5 * i << endl;
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a C++ program to accept a number from the user and print its multiplication table using a for loop.",

      questionTamil:
        "பயனரிடமிருந்து ஒரு எண்ணை Input ஆக பெற்று, அதன் பெருக்கல் வாய்ப்பாட்டை For Loop பயன்படுத்தி Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a for loop from 1 to 10.",

      hintTamil:
        "1 முதல் 10 வரை For Loop-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `Enter a number: 7
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70`,

      expectedOutputTamil: `Enter a number: 7
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int number;

    cout << "Enter a number: ";
    cin >> number;

    for (int i = 1; i <= 10; i++) {
        cout << number << " x " << i << " = " << number * i << endl;
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a C++ program to print numbers from 10 to 1 using a for loop.",

      questionTamil:
        "For Loop பயன்படுத்தி 10 முதல் 1 வரை உள்ள எண்களை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Initialize the loop variable with 10 and decrement it until it reaches 1.",

      hintTamil:
        "Loop Variable-ஐ 10-ல் Initialize செய்து, 1 வரை Decrement செய்யுங்கள்.",

      expectedOutput: `10
9
8
7
6
5
4
3
2
1`,

      expectedOutputTamil: `10
9
8
7
6
5
4
3
2
1`,

      solution: `#include <iostream>
using namespace std;

int main() {

    for (int i = 10; i >= 1; i--) {
        cout << i << endl;
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a C++ program to print all even numbers from 2 to 50 using a for loop.",

      questionTamil:
        "For Loop பயன்படுத்தி 2 முதல் 50 வரை உள்ள அனைத்து Even எண்களையும் Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Start from 2 and increment the loop variable by 2.",

      hintTamil:
        "2-ல் தொடங்கி ஒவ்வொரு முறையும் Loop Variable-ஐ 2-ஆல் Increment செய்யுங்கள்.",

      expectedOutput: `2
4
6
8
10
12
14
16
18
20
22
24
26
28
30
32
34
36
38
40
42
44
46
48
50`,

      expectedOutputTamil: `2
4
6
8
10
12
14
16
18
20
22
24
26
28
30
32
34
36
38
40
42
44
46
48
50`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a C++ program to print the multiplication table of 8 using a for loop.",

      questionTamil:
        "For Loop பயன்படுத்தி 8-ன் பெருக்கல் வாய்ப்பாட்டை Print செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a for loop from 1 to 10.",

      hintTamil:
        "1 முதல் 10 வரை For Loop-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `8 x 1 = 8
8 x 2 = 16
8 x 3 = 24
8 x 4 = 32
8 x 5 = 40
8 x 6 = 48
8 x 7 = 56
8 x 8 = 64
8 x 9 = 72
8 x 10 = 80`,

      expectedOutputTamil: `8 x 1 = 8
8 x 2 = 16
8 x 3 = 24
8 x 4 = 32
8 x 5 = 40
8 x 6 = 48
8 x 7 = 56
8 x 8 = 64
8 x 9 = 72
8 x 10 = 80`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },
  ],
},
{
  topicId: 14,
  title: "Break Statement",

  questions: [
    {
      id: 1,
      title: "Question 1",

      questionEnglish:
        "Write a C++ program to print numbers from 1 to 10 using a for loop, but stop the loop when the number becomes 5 using the break statement.",

      questionTamil:
        "For Loop பயன்படுத்தி 1 முதல் 10 வரை உள்ள எண்களை Print செய்யுங்கள். ஆனால் எண் 5 ஆனவுடன் Break Statement பயன்படுத்தி Loop-ஐ நிறுத்தும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use an if statement to check if the number is 5, then use break.",

      hintTamil:
        "எண் 5 ஆக உள்ளதா என்பதை if Statement மூலம் சரிபார்த்து break-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `1
2
3
4`,

      expectedOutputTamil: `1
2
3
4`,

      solution: `#include <iostream>
using namespace std;

int main() {

    for (int i = 1; i <= 10; i++) {

        if (i == 5) {
            break;
        }

        cout << i << endl;
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a C++ program to print numbers from 10 to 1 using a while loop, but stop the loop when the number becomes 6 using the break statement.",

      questionTamil:
        "While Loop பயன்படுத்தி 10 முதல் 1 வரை உள்ள எண்களை Print செய்யுங்கள். ஆனால் எண் 6 ஆனவுடன் Break Statement பயன்படுத்தி Loop-ஐ நிறுத்தும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use an if statement inside the while loop and apply break.",

      hintTamil:
        "While Loop-க்குள் if Statement பயன்படுத்தி break-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `10
9
8
7`,

      expectedOutputTamil: `10
9
8
7`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int i = 10;

    while (i >= 1) {

        if (i == 6) {
            break;
        }

        cout << i << endl;
        i--;
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a C++ program to print the multiplication table of 7 using a for loop, but stop after printing 7 × 5 using the break statement.",

      questionTamil:
        "For Loop பயன்படுத்தி 7-ன் பெருக்கல் வாய்ப்பாட்டை Print செய்யுங்கள். ஆனால் 7 × 5 வரை Print செய்த பிறகு Break Statement பயன்படுத்தி Loop-ஐ நிறுத்தும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use an if statement to check when the loop variable becomes 6.",

      hintTamil:
        "Loop Variable 6 ஆகும்போது if Statement மூலம் break-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35`,

      expectedOutputTamil: `7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35`,

      solution: `#include <iostream>
using namespace std;

int main() {

    for (int i = 1; i <= 10; i++) {

        if (i == 6) {
            break;
        }

        cout << "7 x " << i << " = " << 7 * i << endl;
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 4,
      title: "Question 4",

      questionEnglish:
        "Write a C++ program to print numbers from 1 to 20 using a while loop, but stop the loop when the number becomes 11 using the break statement.",

      questionTamil:
        "While Loop பயன்படுத்தி 1 முதல் 20 வரை உள்ள எண்களை Print செய்யுங்கள். ஆனால் எண் 11 ஆனவுடன் Break Statement பயன்படுத்தி Loop-ஐ நிறுத்தும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use an if statement inside the while loop and apply break when the number becomes 11.",

      hintTamil:
        "While Loop-க்குள் if Statement பயன்படுத்தி, எண் 11 ஆனவுடன் break-ஐ பயன்படுத்துங்கள்.",

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

      solution: `#include <iostream>
using namespace std;

int main() {

    int i = 1;

    while (i <= 20) {

        if (i == 11) {
            break;
        }

        cout << i << endl;
        i++;
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 5,
      title: "Question 5",

      questionEnglish:
        "Write a C++ program to print the multiplication table of 9 using a for loop, but stop after printing 9 × 6 using the break statement.",

      questionTamil:
        "For Loop பயன்படுத்தி 9-ன் பெருக்கல் வாய்ப்பாட்டை Print செய்யுங்கள். ஆனால் 9 × 6 வரை Print செய்த பிறகு Break Statement பயன்படுத்தி Loop-ஐ நிறுத்தும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use an if statement to stop the loop when the loop variable becomes 7.",

      hintTamil:
        "Loop Variable 7 ஆனவுடன் if Statement மூலம் break-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `9 x 1 = 9
9 x 2 = 18
9 x 3 = 27
9 x 4 = 36
9 x 5 = 45
9 x 6 = 54`,

      expectedOutputTamil: `9 x 1 = 9
9 x 2 = 18
9 x 3 = 27
9 x 4 = 36
9 x 5 = 45
9 x 6 = 54`,

      solution: `#include <iostream>
using namespace std;

int main() {

    for (int i = 1; i <= 10; i++) {

        if (i == 7) {
            break;
        }

        cout << "9 x " << i << " = " << 9 * i << endl;
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 6,
      title: "Question 6",

      questionEnglish:
        "Write a C++ program to print numbers from 1 to 15 using a do while loop, but stop the loop when the number becomes 8 using the break statement.",

      questionTamil:
        "Do While Loop பயன்படுத்தி 1 முதல் 15 வரை உள்ள எண்களை Print செய்யுங்கள். ஆனால் எண் 8 ஆனவுடன் Break Statement பயன்படுத்தி Loop-ஐ நிறுத்தும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use an if statement inside the do while loop and apply break.",

      hintTamil:
        "Do While Loop-க்குள் if Statement பயன்படுத்தி break-ஐ பயன்படுத்துங்கள்.",

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

      solution: `#include <iostream>
using namespace std;

int main() {

    int i = 1;

    do {

        if (i == 8) {
            break;
        }

        cout << i << endl;
        i++;

    } while (i <= 15);

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },
        {
      id: 7,
      title: "Question 7",

      questionEnglish:
        "Write a C++ program to print numbers from 1 to 20 using a for loop, but stop the loop when the number becomes 15 using the break statement.",

      questionTamil:
        "For Loop பயன்படுத்தி 1 முதல் 20 வரை உள்ள எண்களை Print செய்யுங்கள். ஆனால் எண் 15 ஆனவுடன் Break Statement பயன்படுத்தி Loop-ஐ நிறுத்தும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use an if statement inside the for loop and apply break when the number becomes 15.",

      hintTamil:
        "For Loop-க்குள் if Statement பயன்படுத்தி, எண் 15 ஆனவுடன் break-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `1
2
3
4
5
6
7
8
9
10
11
12
13
14`,

      expectedOutputTamil: `1
2
3
4
5
6
7
8
9
10
11
12
13
14`,

      solution: `#include <iostream>
using namespace std;

int main() {

    for (int i = 1; i <= 20; i++) {

        if (i == 15) {
            break;
        }

        cout << i << endl;
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 8,
      title: "Question 8",

      questionEnglish:
        "Write a C++ program to print the multiplication table of 6 using a while loop, but stop after printing 6 × 7 using the break statement.",

      questionTamil:
        "While Loop பயன்படுத்தி 6-ன் பெருக்கல் வாய்ப்பாட்டை Print செய்யுங்கள். ஆனால் 6 × 7 வரை Print செய்த பிறகு Break Statement பயன்படுத்தி Loop-ஐ நிறுத்தும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a while loop and stop when the loop variable becomes 8.",

      hintTamil:
        "While Loop பயன்படுத்தி, Loop Variable 8 ஆனவுடன் break-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `6 x 1 = 6
6 x 2 = 12
6 x 3 = 18
6 x 4 = 24
6 x 5 = 30
6 x 6 = 36
6 x 7 = 42`,

      expectedOutputTamil: `6 x 1 = 6
6 x 2 = 12
6 x 3 = 18
6 x 4 = 24
6 x 5 = 30
6 x 6 = 36
6 x 7 = 42`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int i = 1;

    while (i <= 10) {

        if (i == 8) {
            break;
        }

        cout << "6 x " << i << " = " << 6 * i << endl;
        i++;
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 9,
      title: "Question 9",

      questionEnglish:
        "Write a C++ program to print numbers from 1 to 30 using a for loop, but stop the loop when the number becomes 18 using the break statement.",

      questionTamil:
        "For Loop பயன்படுத்தி 1 முதல் 30 வரை உள்ள எண்களை Print செய்யுங்கள். ஆனால் எண் 18 ஆனவுடன் Break Statement பயன்படுத்தி Loop-ஐ நிறுத்தும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use an if statement with the break statement.",

      hintTamil:
        "if Statement மற்றும் break Statement-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17`,

      expectedOutputTamil: `1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },

    {
      id: 10,
      title: "Question 10",

      questionEnglish:
        "Write a C++ program to print the multiplication table of 10 using a do while loop, but stop after printing 10 × 5 using the break statement.",

      questionTamil:
        "Do While Loop பயன்படுத்தி 10-ன் பெருக்கல் வாய்ப்பாட்டை Print செய்யுங்கள். ஆனால் 10 × 5 வரை Print செய்த பிறகு Break Statement பயன்படுத்தி Loop-ஐ நிறுத்தும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use a do while loop and stop when the loop variable becomes 6.",

      hintTamil:
        "Do While Loop பயன்படுத்தி, Loop Variable 6 ஆனவுடன் break-ஐ பயன்படுத்துங்கள்.",

      expectedOutput: `10 x 1 = 10
10 x 2 = 20
10 x 3 = 30
10 x 4 = 40
10 x 5 = 50`,

      expectedOutputTamil: `10 x 1 = 10
10 x 2 = 20
10 x 3 = 30
10 x 4 = 40
10 x 5 = 50`,

      solution: ``,

      challenge: true,
      locked: false,
      completed: false,
    },
  ],
},
{
  topicId: 15,
  title: "Continue Statement",

  questions: [
    {
      id: 1,
      title: "Question 1",

      questionEnglish:
        "Write a C++ program to print numbers from 1 to 10 using a for loop, but skip printing the number 5 using the continue statement.",

      questionTamil:
        "For Loop பயன்படுத்தி 1 முதல் 10 வரை உள்ள எண்களை Print செய்யுங்கள். ஆனால் 5 என்ற எண்ணை மட்டும் Continue Statement பயன்படுத்தி Skip செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Use an if statement to check if the number is 5, then use continue.",

      hintTamil:
        "எண் 5 ஆக உள்ளதா என்பதை if Statement மூலம் சரிபார்த்து continue-ஐ பயன்படுத்துங்கள்.",

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

      solution: `#include <iostream>
using namespace std;

int main() {

    for (int i = 1; i <= 10; i++) {

        if (i == 5) {
            continue;
        }

        cout << i << endl;
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 2,
      title: "Question 2",

      questionEnglish:
        "Write a C++ program to print numbers from 1 to 10 using a while loop, but skip printing the number 6 using the continue statement.",

      questionTamil:
        "While Loop பயன்படுத்தி 1 முதல் 10 வரை உள்ள எண்களை Print செய்யுங்கள். ஆனால் 6 என்ற எண்ணை மட்டும் Continue Statement பயன்படுத்தி Skip செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Increment the variable before using continue to avoid an infinite loop.",

      hintTamil:
        "Infinite Loop வராமல் இருக்க continue பயன்படுத்தும் முன் Variable-ஐ Increment செய்யுங்கள்.",

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

      solution: `#include <iostream>
using namespace std;

int main() {

    int i = 1;

    while (i <= 10) {

        if (i == 6) {
            i++;
            continue;
        }

        cout << i << endl;
        i++;
    }

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },

    {
      id: 3,
      title: "Question 3",

      questionEnglish:
        "Write a C++ program to print numbers from 1 to 15 using a do while loop, but skip printing the number 8 using the continue statement.",

      questionTamil:
        "Do While Loop பயன்படுத்தி 1 முதல் 15 வரை உள்ள எண்களை Print செய்யுங்கள். ஆனால் 8 என்ற எண்ணை மட்டும் Continue Statement பயன்படுத்தி Skip செய்யும் C++ Program-ஐ எழுதுங்கள்.",

      hintEnglish:
        "Increment the variable before using continue.",

      hintTamil:
        "continue பயன்படுத்தும் முன் Variable-ஐ Increment செய்யுங்கள்.",

      expectedOutput: `1
2
3
4
5
6
7
9
10
11
12
13
14
15`,

      expectedOutputTamil: `1
2
3
4
5
6
7
9
10
11
12
13
14
15`,

      solution: `#include <iostream>
using namespace std;

int main() {

    int i = 1;

    do {

        if (i == 8) {
            i++;
            continue;
        }

        cout << i << endl;
        i++;

    } while (i <= 15);

    return 0;
}`,

      challenge: false,
      locked: false,
      completed: false,
    },
    
  ],
},
];

export default questions;