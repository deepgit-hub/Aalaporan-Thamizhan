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
];

export default questions;