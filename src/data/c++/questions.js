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
    
  ],
},
];

export default questions;