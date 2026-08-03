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

];

export default questions;