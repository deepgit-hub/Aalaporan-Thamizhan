const questions = [
  {
    topicId: 1,
    title: "Introduction to Programming",

    questions: [
      {
        id: 1,
        title: "Question 1",

        questionEnglish:
          'Write a Java program to print "Hello World" on the console.',

        questionTamil:
          '"Hello World" என்பதை Console-ல் Print செய்யும் Java Program-ஐ எழுதுங்கள்.',

        hintEnglish: "Use the System.out.println() statement.",

        hintTamil: "System.out.println() Statement-ஐ பயன்படுத்துங்கள்.",

        expectedOutput: `Hello World`,

        expectedOutputTamil: `Hello World`,

        solution: `public class Main {

    public static void main(String[] args) {

        System.out.println("Hello World");

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",

        questionEnglish:
          "Write a Java program to print your name on the console.",

        questionTamil:
          "உங்கள் பெயரை Console-ல் Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

        hintEnglish: "Use the System.out.println() statement.",

        hintTamil: "System.out.println() Statement-ஐ பயன்படுத்துங்கள்.",

        expectedOutput: `Deepak`,

        expectedOutputTamil: `Deepak`,

        solution: `public class Main {

    public static void main(String[] args) {

        System.out.println("Deepak");

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",

        questionEnglish:
          "Write a Java program to print your name and your goal on separate lines.",

        questionTamil:
          "உங்கள் பெயரையும் உங்கள் இலக்கையும் (Goal) தனித்தனி வரிகளில் Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

        hintEnglish: "Use two System.out.println() statements.",

        hintTamil: "இரண்டு System.out.println() Statements-ஐ பயன்படுத்துங்கள்.",

        expectedOutput: `Deepak
Cyber Security`,

        expectedOutputTamil: `Deepak
Cyber Security`,

        solution: `public class Main {

    public static void main(String[] args) {

        System.out.println("Deepak");
        System.out.println("Cyber Security");

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",

        questionEnglish: "Write a Java program to print your college name.",

        questionTamil:
          "உங்கள் கல்லூரியின் பெயரை Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

        hintEnglish: "Use one System.out.println() statement.",

        hintTamil: "ஒரு System.out.println() Statement-ஐ பயன்படுத்துங்கள்.",

        expectedOutput: `ABC Engineering College`,

        expectedOutputTamil: `ABC Engineering College`,

        solution: `public class Main {

    public static void main(String[] args) {

        System.out.println("ABC Engineering College");

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",

        questionEnglish:
          "Write a Java program to print your department and your favorite programming language.",

        questionTamil:
          "உங்கள் Department மற்றும் உங்களுக்கு பிடித்த Programming Language-ஐ Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

        hintEnglish: "Use two System.out.println() statements.",

        hintTamil: "இரண்டு System.out.println() Statements-ஐ பயன்படுத்துங்கள்.",

        expectedOutput: `Computer Science and Engineering
Java`,

        expectedOutputTamil: `Computer Science and Engineering
Java`,

        solution: `public class Main {

    public static void main(String[] args) {

        System.out.println("Computer Science and Engineering");
        System.out.println("Java");

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 6,
        title: "Question 6",

        questionEnglish: "Write a Java program to print the following output.",

        questionTamil:
          "கீழே கொடுக்கப்பட்டுள்ள Output-ஐ Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

        hintEnglish: "Use four System.out.println() statements.",

        hintTamil: "நான்கு System.out.println() Statements-ஐ பயன்படுத்துங்கள்.",

        expectedOutput: `Welcome
To
Java
Programming`,

        expectedOutputTamil: `Welcome
To
Java
Programming`,

        solution: `public class Main {

    public static void main(String[] args) {

        System.out.println("Welcome");
        System.out.println("To");
        System.out.println("Java");
        System.out.println("Programming");

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",

        questionEnglish:
          "Write a Java program to print your Name, Age, and Goal on separate lines.",

        questionTamil:
          "உங்கள் பெயர், வயது மற்றும் இலக்கை (Goal) தனித்தனி வரிகளில் Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

        hintEnglish: "Use three System.out.println() statements.",

        hintTamil: "மூன்று System.out.println() Statements-ஐ பயன்படுத்துங்கள்.",

        expectedOutput: `Deepak
20
Cyber Security`,

        expectedOutputTamil: `Deepak
20
Cyber Security`,

        solution: `public class Main {

    public static void main(String[] args) {

        System.out.println("Deepak");
        System.out.println("20");
        System.out.println("Cyber Security");

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",

        questionEnglish: "Write a Java program to print the following output.",

        questionTamil:
          "கீழே கொடுக்கப்பட்டுள்ள Output-ஐ Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

        hintEnglish: "Print each line separately.",

        hintTamil: "ஒவ்வொரு வரியையும் தனித்தனியாக Print செய்யுங்கள்.",

        expectedOutput: `************
Welcome to Java
************`,

        expectedOutputTamil: `************
Welcome to Java
************`,

        solution: `public class Main {

    public static void main(String[] args) {

        System.out.println("************");
        System.out.println("Welcome to Java");
        System.out.println("************");

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 9,
        title: "Challenge Question 9",

        questionEnglish: "Write a Java program to print the following pattern.",

        questionTamil:
          "கீழே கொடுக்கப்பட்டுள்ள Pattern-ஐ Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

        hintEnglish: "Use multiple System.out.println() statements.",

        hintTamil: "பல System.out.println() Statements-ஐ பயன்படுத்துங்கள்.",

        expectedOutput: `*
**
***
****
*****`,

        expectedOutputTamil: `*
**
***
****
*****`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
        completed: false,
      },
      {
        id: 10,
        title: "Challenge Question 10",

        questionEnglish:
          'Write a Java program to print "Java Programming is Fun" using only one System.out.println() statement.',

        questionTamil:
          '"Java Programming is Fun" என்பதை ஒரு System.out.println() Statement மட்டும் பயன்படுத்தி Print செய்யும் Java Program-ஐ எழுதுங்கள்.',

        hintEnglish:
          "Use newline characters (\\n) inside one System.out.println() statement.",

        hintTamil:
          "ஒரே System.out.println() Statement-ல் (\\n)-ஐ பயன்படுத்துங்கள்.",

        expectedOutput: `Java
Programming
is
Fun`,

        expectedOutputTamil: `Java
Programming
is
Fun`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
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
          "Declare an integer variable named age with the value 20 and print it.",

        questionTamil:
          "age என்ற Integer Variable-ஐ 20 என்ற மதிப்புடன் உருவாக்கி அதை Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

        hintEnglish: "Use int age = 20; and System.out.println().",

        hintTamil:
          "int age = 20; மற்றும் System.out.println() பயன்படுத்துங்கள்.",

        expectedOutput: `20`,

        expectedOutputTamil: `20`,

        solution: `public class Main {

    public static void main(String[] args) {

        int age = 20;

        System.out.println(age);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",

        questionEnglish:
          'Declare a String variable named name with the value "Deepak" and print it.',

        questionTamil:
          '"Deepak" என்ற மதிப்புடன் name என்ற String Variable-ஐ உருவாக்கி Print செய்யுங்கள்.',

        hintEnglish: 'Use String name = "Deepak";',

        hintTamil: 'String name = "Deepak"; பயன்படுத்துங்கள்.',

        expectedOutput: `Deepak`,

        expectedOutputTamil: `Deepak`,

        solution: `public class Main {

    public static void main(String[] args) {

        String name = "Deepak";

        System.out.println(name);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",

        questionEnglish:
          "Declare a double variable named salary with the value 25000.50 and print it.",

        questionTamil:
          "salary என்ற Double Variable-ஐ 25000.50 என்ற மதிப்புடன் உருவாக்கி Print செய்யுங்கள்.",

        hintEnglish: "Use the double data type.",

        hintTamil: "double Data Type-ஐ பயன்படுத்துங்கள்.",

        expectedOutput: `25000.5`,

        expectedOutputTamil: `25000.5`,

        solution: `public class Main {

    public static void main(String[] args) {

        double salary = 25000.50;

        System.out.println(salary);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",

        questionEnglish:
          "Declare a char variable named grade with the value 'A' and print it.",

        questionTamil:
          "grade என்ற char Variable-ஐ 'A' என்ற மதிப்புடன் உருவாக்கி Print செய்யுங்கள்.",

        hintEnglish: "Use single quotes for char values.",

        hintTamil: "char மதிப்பிற்கு Single Quotes பயன்படுத்துங்கள்.",

        expectedOutput: `A`,

        expectedOutputTamil: `A`,

        solution: `public class Main {

    public static void main(String[] args) {

        char grade = 'A';

        System.out.println(grade);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",

        questionEnglish:
          "Declare a boolean variable named isPassed with the value true and print it.",

        questionTamil:
          "isPassed என்ற boolean Variable-ஐ true என்ற மதிப்புடன் உருவாக்கி Print செய்யுங்கள்.",

        hintEnglish: "Use boolean isPassed = true;",

        hintTamil: "boolean isPassed = true; பயன்படுத்துங்கள்.",

        expectedOutput: `true`,

        expectedOutputTamil: `true`,

        solution: `public class Main {

    public static void main(String[] args) {

        boolean isPassed = true;

        System.out.println(isPassed);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 6,
        title: "Question 6",

        questionEnglish:
          "Declare two integer variables num1 = 10 and num2 = 20. Print both values on separate lines.",

        questionTamil:
          "num1 = 10 மற்றும் num2 = 20 என்ற இரண்டு Integer Variables-ஐ உருவாக்கி தனித்தனி வரிகளில் Print செய்யுங்கள்.",

        hintEnglish: "Declare two variables and use two println statements.",

        hintTamil:
          "இரண்டு Variables மற்றும் இரண்டு println Statements பயன்படுத்துங்கள்.",

        expectedOutput: `10
20`,

        expectedOutputTamil: `10
20`,

        solution: `public class Main {

    public static void main(String[] args) {

        int num1 = 10;
        int num2 = 20;

        System.out.println(num1);
        System.out.println(num2);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",

        questionEnglish:
          "Declare an integer variable score with the value 50. Change its value to 100 and print it.",

        questionTamil:
          "score என்ற Integer Variable-ஐ 50 என்ற மதிப்புடன் உருவாக்குங்கள். பின்னர் அதன் மதிப்பை 100 ஆக மாற்றி Print செய்யுங்கள்.",

        hintEnglish: "Variables can store new values.",

        hintTamil: "Variable-இன் மதிப்பை மாற்றலாம்.",

        expectedOutput: `100`,

        expectedOutputTamil: `100`,

        solution: `public class Main {

    public static void main(String[] args) {

        int score = 50;

        score = 100;

        System.out.println(score);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",

        questionEnglish:
          "Declare variables for your name and age, then print them on separate lines.",

        questionTamil:
          "உங்கள் பெயர் மற்றும் வயதிற்கான Variables-ஐ உருவாக்கி தனித்தனி வரிகளில் Print செய்யுங்கள்.",

        hintEnglish: "Use String and int variables.",

        hintTamil: "String மற்றும் int Variables பயன்படுத்துங்கள்.",

        expectedOutput: `Deepak
20`,

        expectedOutputTamil: `Deepak
20`,

        solution: `public class Main {

    public static void main(String[] args) {

        String name = "Deepak";
        int age = 20;

        System.out.println(name);
        System.out.println(age);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 9,
        title: "Challenge Question 9",

        questionEnglish:
          "Declare variables for your name, age, and department, then print all three values.",

        questionTamil:
          "உங்கள் பெயர், வயது மற்றும் Department-க்கான Variables-ஐ உருவாக்கி மூன்றையும் Print செய்யுங்கள்.",

        hintEnglish: "Use String and int variables.",

        hintTamil: "String மற்றும் int Variables பயன்படுத்துங்கள்.",

        expectedOutput: `Deepak
20
Computer Science and Engineering`,

        expectedOutputTamil: `Deepak
20
Computer Science and Engineering`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
        completed: false,
      },
      {
        id: 10,
        title: "Challenge Question 10",

        questionEnglish:
          "Declare variables of type int, double, char, boolean, and String. Print all the values on separate lines.",

        questionTamil:
          "int, double, char, boolean மற்றும் String வகைகளில் Variables உருவாக்கி அனைத்தையும் தனித்தனி வரிகளில் Print செய்யுங்கள்.",

        hintEnglish: "Use one variable for each data type.",

        hintTamil: "ஒவ்வொரு Data Type-க்கும் ஒரு Variable பயன்படுத்துங்கள்.",

        expectedOutput: `10
99.5
A
true
Java`,

        expectedOutputTamil: `10
99.5
A
true
Java`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
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
          "Declare an int variable named age with the value 20 and print it.",

        questionTamil:
          "20 என்ற மதிப்புடன் age என்ற int Variable-ஐ உருவாக்கி அதை Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

        hintEnglish: "Use the int data type.",

        hintTamil: "int Data Type-ஐ பயன்படுத்துங்கள்.",

        expectedOutput: `20`,

        expectedOutputTamil: `20`,

        solution: `public class Main {

    public static void main(String[] args) {

        int age = 20;

        System.out.println(age);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",

        questionEnglish:
          "Declare a double variable named price with the value 99.99 and print it.",

        questionTamil:
          "99.99 என்ற மதிப்புடன் price என்ற double Variable-ஐ உருவாக்கி Print செய்யுங்கள்.",

        hintEnglish: "Use the double data type.",

        hintTamil: "double Data Type-ஐ பயன்படுத்துங்கள்.",

        expectedOutput: `99.99`,

        expectedOutputTamil: `99.99`,

        solution: `public class Main {

    public static void main(String[] args) {

        double price = 99.99;

        System.out.println(price);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",

        questionEnglish:
          "Declare a char variable named grade with the value 'A' and print it.",

        questionTamil:
          "'A' என்ற மதிப்புடன் grade என்ற char Variable-ஐ உருவாக்கி Print செய்யுங்கள்.",

        hintEnglish: "A char stores only one character.",

        hintTamil: "char ஒரு எழுத்தை மட்டுமே சேமிக்கும்.",

        expectedOutput: `A`,

        expectedOutputTamil: `A`,

        solution: `public class Main {

    public static void main(String[] args) {

        char grade = 'A';

        System.out.println(grade);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",

        questionEnglish:
          "Declare a boolean variable named isStudent with the value true and print it.",

        questionTamil:
          "true என்ற மதிப்புடன் isStudent என்ற boolean Variable-ஐ உருவாக்கி Print செய்யுங்கள்.",

        hintEnglish: "Use the boolean data type.",

        hintTamil: "boolean Data Type-ஐ பயன்படுத்துங்கள்.",

        expectedOutput: `true`,

        expectedOutputTamil: `true`,

        solution: `public class Main {

    public static void main(String[] args) {

        boolean isStudent = true;

        System.out.println(isStudent);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",

        questionEnglish:
          'Declare a String variable named city with the value "Chennai" and print it.',

        questionTamil:
          '"Chennai" என்ற மதிப்புடன் city என்ற String Variable-ஐ உருவாக்கி Print செய்யுங்கள்.',

        hintEnglish: "Strings use double quotes.",

        hintTamil: "String மதிப்பிற்கு Double Quotes பயன்படுத்துங்கள்.",

        expectedOutput: `Chennai`,

        expectedOutputTamil: `Chennai`,

        solution: `public class Main {

    public static void main(String[] args) {

        String city = "Chennai";

        System.out.println(city);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 6,
        title: "Question 6",

        questionEnglish:
          'Declare an int variable rollNo = 25 and a String variable name = "Rahul". Print both values on separate lines.',

        questionTamil:
          'rollNo = 25 என்ற int Variable மற்றும் name = "Rahul" என்ற String Variable-ஐ உருவாக்கி தனித்தனி வரிகளில் Print செய்யுங்கள்.',

        hintEnglish: "Use two different data types.",

        hintTamil: "இரண்டு வெவ்வேறு Data Types-ஐ பயன்படுத்துங்கள்.",

        expectedOutput: `25
Rahul`,

        expectedOutputTamil: `25
Rahul`,

        solution: `public class Main {

    public static void main(String[] args) {

        int rollNo = 25;
        String name = "Rahul";

        System.out.println(rollNo);
        System.out.println(name);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",

        questionEnglish:
          "Declare a double variable temperature = 36.5 and a boolean variable isRaining = false. Print both values.",

        questionTamil:
          "temperature = 36.5 என்ற double Variable மற்றும் isRaining = false என்ற boolean Variable-ஐ உருவாக்கி Print செய்யுங்கள்.",

        hintEnglish: "Use double and boolean.",

        hintTamil: "double மற்றும் boolean பயன்படுத்துங்கள்.",

        expectedOutput: `36.5
false`,

        expectedOutputTamil: `36.5
false`,

        solution: `public class Main {

    public static void main(String[] args) {

        double temperature = 36.5;
        boolean isRaining = false;

        System.out.println(temperature);
        System.out.println(isRaining);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",

        questionEnglish:
          "Declare variables using all five data types (int, double, char, boolean, and String) and print each value on a separate line.",

        questionTamil:
          "int, double, char, boolean மற்றும் String ஆகிய ஐந்து Data Types-ஐ பயன்படுத்தி Variables உருவாக்கி ஒவ்வொன்றையும் தனித்தனி வரிகளில் Print செய்யுங்கள்.",

        hintEnglish: "Use one variable for each data type.",

        hintTamil: "ஒவ்வொரு Data Type-க்கும் ஒரு Variable உருவாக்குங்கள்.",

        expectedOutput: `10
99.5
A
true
Java`,

        expectedOutputTamil: `10
99.5
A
true
Java`,

        solution: `public class Main {

    public static void main(String[] args) {

        int number = 10;
        double value = 99.5;
        char grade = 'A';
        boolean status = true;
        String language = "Java";

        System.out.println(number);
        System.out.println(value);
        System.out.println(grade);
        System.out.println(status);
        System.out.println(language);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 9,
        title: "Challenge Question 9",

        questionEnglish:
          "Declare variables to store a student's name, age, percentage, grade, and pass status. Print all the values.",

        questionTamil:
          "ஒரு மாணவரின் பெயர், வயது, சதவீதம், Grade மற்றும் Pass Status ஆகியவற்றை சேமிக்க Variables உருவாக்கி அனைத்தையும் Print செய்யுங்கள்.",

        hintEnglish: "Choose the correct data type for each value.",

        hintTamil:
          "ஒவ்வொரு மதிப்பிற்கும் சரியான Data Type-ஐ தேர்வு செய்யுங்கள்.",

        expectedOutput: `Rahul
18
92.5
A
true`,

        expectedOutputTamil: `Rahul
18
92.5
A
true`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
        completed: false,
      },
      {
        id: 10,
        title: "Challenge Question 10",

        questionEnglish:
          "Create variables for a product's name, price, quantity, availability, and category code. Print all the values.",

        questionTamil:
          "ஒரு பொருளின் பெயர், விலை, அளவு, கிடைப்புநிலை மற்றும் Category Code ஆகியவற்றிற்கு Variables உருவாக்கி அனைத்தையும் Print செய்யுங்கள்.",

        hintEnglish:
          "Use String, double, int, boolean, and char appropriately.",

        hintTamil:
          "String, double, int, boolean மற்றும் char ஆகியவற்றை சரியாக பயன்படுத்துங்கள்.",

        expectedOutput: `Laptop
55000.0
5
true
E`,

        expectedOutputTamil: `Laptop
55000.0
5
true
E`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
        completed: false,
      },
    ],
  },
  {
    topicId: 4,
    title: "Input & Output",

    questions: [
      {
        id: 1,
        title: "Question 1",

        questionEnglish:
          "Write a Java program to read an integer from the user and print it.",

        questionTamil:
          "பயனரிடமிருந்து ஒரு Integer மதிப்பை பெற்று அதை Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

        hintEnglish: "Use Scanner and nextInt().",

        hintTamil: "Scanner மற்றும் nextInt() பயன்படுத்துங்கள்.",

        expectedOutput: `Enter a number:
25

You entered: 25`,

        expectedOutputTamil: `Enter a number:
25

You entered: 25`,

        solution: `import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.println("Enter a number:");

        int number = input.nextInt();

        System.out.println("You entered: " + number);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",

        questionEnglish:
          "Write a Java program to read a student's name and print it.",

        questionTamil:
          "ஒரு மாணவரின் பெயரை Input ஆக பெற்று அதை Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

        hintEnglish: "Use Scanner and nextLine().",

        hintTamil: "Scanner மற்றும் nextLine() பயன்படுத்துங்கள்.",

        expectedOutput: `Enter your name:
Deepak

Your name is: Deepak`,

        expectedOutputTamil: `Enter your name:
Deepak

Your name is: Deepak`,

        solution: `import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.println("Enter your name:");

        String name = input.nextLine();

        System.out.println("Your name is: " + name);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",

        questionEnglish: "Read a decimal number from the user and print it.",

        questionTamil:
          "பயனரிடமிருந்து ஒரு Decimal எண்ணை பெற்று அதை Print செய்யுங்கள்.",

        hintEnglish: "Use nextDouble().",

        hintTamil: "nextDouble() பயன்படுத்துங்கள்.",

        expectedOutput: `Enter price:
99.99

Price: 99.99`,

        expectedOutputTamil: `Enter price:
99.99

Price: 99.99`,

        solution: `import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.println("Enter price:");

        double price = input.nextDouble();

        System.out.println("Price: " + price);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",

        questionEnglish: "Read a character from the user and print it.",

        questionTamil:
          "பயனரிடமிருந்து ஒரு Character-ஐ பெற்று அதை Print செய்யுங்கள்.",

        hintEnglish: "Use next().charAt(0).",

        hintTamil: "next().charAt(0) பயன்படுத்துங்கள்.",

        expectedOutput: `Enter grade:
A

Grade: A`,

        expectedOutputTamil: `Enter grade:
A

Grade: A`,

        solution: `import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.println("Enter grade:");

        char grade = input.next().charAt(0);

        System.out.println("Grade: " + grade);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",

        questionEnglish: "Read a boolean value from the user and print it.",

        questionTamil:
          "பயனரிடமிருந்து ஒரு Boolean மதிப்பை பெற்று அதை Print செய்யுங்கள்.",

        hintEnglish: "Use nextBoolean().",

        hintTamil: "nextBoolean() பயன்படுத்துங்கள்.",

        expectedOutput: `Enter status:
true

Status: true`,

        expectedOutputTamil: `Enter status:
true

Status: true`,

        solution: `import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.println("Enter status:");

        boolean status = input.nextBoolean();

        System.out.println("Status: " + status);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 6,
        title: "Question 6",

        questionEnglish:
          "Read a student's name and age from the user and print both.",

        questionTamil:
          "பயனரிடமிருந்து மாணவரின் பெயர் மற்றும் வயதை பெற்று இரண்டையும் Print செய்யுங்கள்.",

        hintEnglish: "Use nextLine() and nextInt().",

        hintTamil: "nextLine() மற்றும் nextInt() பயன்படுத்துங்கள்.",

        expectedOutput: `Enter name:
Rahul
Enter age:
18

Rahul
18`,

        expectedOutputTamil: `Enter name:
Rahul
Enter age:
18

Rahul
18`,

        solution: `import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.println("Enter name:");

        String name = input.nextLine();

        System.out.println("Enter age:");

        int age = input.nextInt();

        System.out.println(name);

        System.out.println(age);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",

        questionEnglish:
          "Read two integers from the user and print them on separate lines.",

        questionTamil:
          "பயனரிடமிருந்து இரண்டு Integer எண்களை பெற்று தனித்தனி வரிகளில் Print செய்யுங்கள்.",

        hintEnglish: "Use nextInt() twice.",

        hintTamil: "nextInt() இரண்டு முறை பயன்படுத்துங்கள்.",

        expectedOutput: `Enter first number:
10
Enter second number:
20

10
20`,

        expectedOutputTamil: `Enter first number:
10
Enter second number:
20

10
20`,

        solution: `import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.println("Enter first number:");

        int first = input.nextInt();

        System.out.println("Enter second number:");

        int second = input.nextInt();

        System.out.println(first);

        System.out.println(second);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",

        questionEnglish:
          "Read a name, age, and percentage from the user and print all three values.",

        questionTamil:
          "பயனரிடமிருந்து பெயர், வயது மற்றும் சதவீதத்தை பெற்று மூன்றையும் Print செய்யுங்கள்.",

        hintEnglish: "Use nextLine(), nextInt(), and nextDouble().",

        hintTamil:
          "nextLine(), nextInt(), மற்றும் nextDouble() பயன்படுத்துங்கள்.",

        expectedOutput: `Deepak
20
92.5`,

        expectedOutputTamil: `Deepak
20
92.5`,

        solution: `import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.println("Enter your name:");

        String name = input.nextLine();

        System.out.println("Enter your age:");

        int age = input.nextInt();

        System.out.println("Enter your percentage:");

        double percentage = input.nextDouble();

        System.out.println(name);

        System.out.println(age);

        System.out.println(percentage);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 9,
        title: "Challenge Question 9",

        questionEnglish:
          "Read the product name, price, and quantity from the user and print all the values.",

        questionTamil:
          "பொருளின் பெயர், விலை மற்றும் அளவை Input ஆக பெற்று அனைத்தையும் Print செய்யுங்கள்.",

        hintEnglish: "Use String, double, and int input methods.",

        hintTamil:
          "String, double மற்றும் int Input Methods-ஐ பயன்படுத்துங்கள்.",

        expectedOutput: `Laptop
55000
5`,

        expectedOutputTamil: `Laptop
55000
5`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
        completed: false,
      },
      {
        id: 10,
        title: "Challenge Question 10",

        questionEnglish:
          "Read a student's name, age, percentage, grade, and pass status from the user and print all the values.",

        questionTamil:
          "மாணவரின் பெயர், வயது, சதவீதம், Grade மற்றும் Pass Status ஆகியவற்றை Input ஆக பெற்று அனைத்தையும் Print செய்யுங்கள்.",

        hintEnglish:
          "Use nextLine(), nextInt(), nextDouble(), next().charAt(0), and nextBoolean().",

        hintTamil:
          "nextLine(), nextInt(), nextDouble(), next().charAt(0), மற்றும் nextBoolean() பயன்படுத்துங்கள்.",

        expectedOutput: `Rahul
18
92.5
A
true`,

        expectedOutputTamil: `Rahul
18
92.5
A
true`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
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
          "Write a Java program to add two numbers and print the result.",

        questionTamil:
          "இரண்டு எண்களை கூட்டி அதன் முடிவை Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

        hintEnglish: "Use the + operator.",

        hintTamil: "+ Operator-ஐ பயன்படுத்துங்கள்.",

        expectedOutput: `Sum = 30`,

        expectedOutputTamil: `Sum = 30`,

        solution: `public class Main {

    public static void main(String[] args) {

        int a = 10;
        int b = 20;

        int sum = a + b;

        System.out.println("Sum = " + sum);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",

        questionEnglish:
          "Write a Java program to subtract two numbers and print the result.",

        questionTamil:
          "இரண்டு எண்களை கழித்து அதன் முடிவை Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

        hintEnglish: "Use the - operator.",

        hintTamil: "- Operator-ஐ பயன்படுத்துங்கள்.",

        expectedOutput: `Difference = 10`,

        expectedOutputTamil: `Difference = 10`,

        solution: `public class Main {

    public static void main(String[] args) {

        int a = 30;
        int b = 20;

        int difference = a - b;

        System.out.println("Difference = " + difference);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",

        questionEnglish:
          "Write a Java program to multiply two numbers and print the result.",

        questionTamil:
          "இரண்டு எண்களை பெருக்கி அதன் முடிவை Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

        hintEnglish: "Use the * operator.",

        hintTamil: "* Operator-ஐ பயன்படுத்துங்கள்.",

        expectedOutput: `Product = 50`,

        expectedOutputTamil: `Product = 50`,

        solution: `public class Main {

    public static void main(String[] args) {

        int a = 10;
        int b = 5;

        int product = a * b;

        System.out.println("Product = " + product);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",

        questionEnglish:
          "Write a Java program to divide two numbers and print the result.",

        questionTamil:
          "இரண்டு எண்களை வகுத்து அதன் முடிவை Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

        hintEnglish: "Use the / operator.",

        hintTamil: "/ Operator-ஐ பயன்படுத்துங்கள்.",

        expectedOutput: `Quotient = 5`,

        expectedOutputTamil: `Quotient = 5`,

        solution: `public class Main {

    public static void main(String[] args) {

        int a = 20;
        int b = 4;

        int quotient = a / b;

        System.out.println("Quotient = " + quotient);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",

        questionEnglish:
          "Write a Java program to find the remainder when 17 is divided by 5.",

        questionTamil:
          "17-ஐ 5-ஆல் வகுக்கும் போது கிடைக்கும் மீதியை Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

        hintEnglish: "Use the % operator.",

        hintTamil: "% Operator-ஐ பயன்படுத்துங்கள்.",

        expectedOutput: `Remainder = 2`,

        expectedOutputTamil: `Remainder = 2`,

        solution: `public class Main {

    public static void main(String[] args) {

        int remainder = 17 % 5;

        System.out.println("Remainder = " + remainder);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 6,
        title: "Question 6",

        questionEnglish:
          "Write a Java program to increase a variable by 1 using the ++ operator and print it.",

        questionTamil:
          "++ Operator-ஐ பயன்படுத்தி ஒரு Variable-ன் மதிப்பை 1 அதிகரித்து Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

        hintEnglish: "Use the ++ operator.",

        hintTamil: "++ Operator-ஐ பயன்படுத்துங்கள்.",

        expectedOutput: `11`,

        expectedOutputTamil: `11`,

        solution: `public class Main {

    public static void main(String[] args) {

        int number = 10;

        number++;

        System.out.println(number);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",

        questionEnglish:
          "Write a Java program to decrease a variable by 1 using the -- operator and print it.",

        questionTamil:
          "-- Operator-ஐ பயன்படுத்தி ஒரு Variable-ன் மதிப்பை 1 குறைத்து Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

        hintEnglish: "Use the -- operator.",

        hintTamil: "-- Operator-ஐ பயன்படுத்துங்கள்.",

        expectedOutput: `9`,

        expectedOutputTamil: `9`,

        solution: `public class Main {

    public static void main(String[] args) {

        int number = 10;

        number--;

        System.out.println(number);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",

        questionEnglish:
          "Write a Java program to add 5 to a variable using the += operator and print the result.",

        questionTamil:
          "+= Operator-ஐ பயன்படுத்தி ஒரு Variable-க்கு 5-ஐ சேர்த்து Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

        hintEnglish: "Use the += operator.",

        hintTamil: "+= Operator-ஐ பயன்படுத்துங்கள்.",

        expectedOutput: `15`,

        expectedOutputTamil: `15`,

        solution: `public class Main {

    public static void main(String[] args) {

        int number = 10;

        number += 5;

        System.out.println(number);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 9,
        title: "Challenge Question 9",

        questionEnglish:
          "Write a Java program to calculate the sum, difference, product, quotient, and remainder of two numbers and print all the results.",

        questionTamil:
          "இரண்டு எண்களின் கூட்டல், கழித்தல், பெருக்கல், வகுத்தல் மற்றும் மீதியை கணக்கிட்டு அனைத்தையும் Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

        hintEnglish: "Use +, -, *, /, and % operators.",

        hintTamil: "+, -, *, / மற்றும் % Operators-ஐ பயன்படுத்துங்கள்.",

        expectedOutput: `Sum = 30
Difference = 10
Product = 200
Quotient = 2
Remainder = 0`,

        expectedOutputTamil: `Sum = 30
Difference = 10
Product = 200
Quotient = 2
Remainder = 0`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
        completed: false,
      },
      {
        id: 10,
        title: "Challenge Question 10",

        questionEnglish:
          "Create a variable with the value 20. Apply +=, -=, ++, and -- operators one after another and print the final value.",

        questionTamil:
          "20 என்ற மதிப்புடன் ஒரு Variable உருவாக்குங்கள். அதில் +=, -=, ++ மற்றும் -- Operators-ஐ ஒன்றன் பின் ஒன்றாக பயன்படுத்தி இறுதி மதிப்பை Print செய்யுங்கள்.",

        hintEnglish: "Apply each operator in sequence.",

        hintTamil: "ஒவ்வொரு Operator-ஐ வரிசையாக பயன்படுத்துங்கள்.",

        expectedOutput: `22`,

        expectedOutputTamil: `22`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
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
          'Write a Java program to check if a number is greater than 10. If it is, print "Greater than 10".',

        questionTamil:
          'ஒரு எண் 10-ஐ விட பெரியதாக இருந்தால் "Greater than 10" என்று Print செய்யும் Java Program-ஐ எழுதுங்கள்.',

        hintEnglish: "Use an if statement with > operator.",

        hintTamil: "> Operator உடன் if Statement பயன்படுத்துங்கள்.",

        expectedOutput: `Greater than 10`,

        expectedOutputTamil: `Greater than 10`,

        solution: `public class Main {

    public static void main(String[] args) {

        int number = 15;

        if (number > 10) {

            System.out.println("Greater than 10");

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",

        questionEnglish:
          'Write a Java program to check if a number is less than 100. If it is, print "Less than 100".',

        questionTamil:
          'ஒரு எண் 100-ஐ விட சிறியதாக இருந்தால் "Less than 100" என்று Print செய்யும் Java Program-ஐ எழுதுங்கள்.',

        hintEnglish: "Use the < operator.",

        hintTamil: "< Operator பயன்படுத்துங்கள்.",

        expectedOutput: `Less than 100`,

        expectedOutputTamil: `Less than 100`,

        solution: `public class Main {

    public static void main(String[] args) {

        int number = 50;

        if (number < 100) {

            System.out.println("Less than 100");

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",

        questionEnglish:
          'Write a Java program to check if a number is equal to 25. If it is, print "Equal".',

        questionTamil:
          'ஒரு எண் 25-க்கு சமமாக இருந்தால் "Equal" என்று Print செய்யும் Java Program-ஐ எழுதுங்கள்.',

        hintEnglish: "Use the == operator.",

        hintTamil: "== Operator பயன்படுத்துங்கள்.",

        expectedOutput: `Equal`,

        expectedOutputTamil: `Equal`,

        solution: `public class Main {

    public static void main(String[] args) {

        int number = 25;

        if (number == 25) {

            System.out.println("Equal");

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",

        questionEnglish:
          'Write a Java program to check whether a number is even. If it is, print "Even Number".',

        questionTamil:
          'ஒரு எண் Even ஆக இருந்தால் "Even Number" என்று Print செய்யும் Java Program-ஐ எழுதுங்கள்.',

        hintEnglish: "Use % operator with if.",

        hintTamil: "% Operator மற்றும் if Statement பயன்படுத்துங்கள்.",

        expectedOutput: `Even Number`,

        expectedOutputTamil: `Even Number`,

        solution: `public class Main {

    public static void main(String[] args) {

        int number = 8;

        if (number % 2 == 0) {

            System.out.println("Even Number");

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",

        questionEnglish:
          'Write a Java program to check whether a number is positive. If it is, print "Positive Number".',

        questionTamil:
          'ஒரு எண் Positive ஆக இருந்தால் "Positive Number" என்று Print செய்யும் Java Program-ஐ எழுதுங்கள்.',

        hintEnglish: "Check if the number is greater than 0.",

        hintTamil: "எண் 0-ஐ விட பெரியதா என்று சரிபார்க்கவும்.",

        expectedOutput: `Positive Number`,

        expectedOutputTamil: `Positive Number`,

        solution: `public class Main {

    public static void main(String[] args) {

        int number = 20;

        if (number > 0) {

            System.out.println("Positive Number");

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 6,
        title: "Question 6",

        questionEnglish:
          'Write a Java program to check if a person\'s age is 18 or above. If it is, print "Eligible to Vote".',

        questionTamil:
          'ஒருவரின் வயது 18 அல்லது அதற்கு மேல் இருந்தால் "Eligible to Vote" என்று Print செய்யும் Java Program-ஐ எழுதுங்கள்.',

        hintEnglish: "Use >= operator.",

        hintTamil: ">= Operator பயன்படுத்துங்கள்.",

        expectedOutput: `Eligible to Vote`,

        expectedOutputTamil: `Eligible to Vote`,

        solution: `public class Main {

    public static void main(String[] args) {

        int age = 20;

        if (age >= 18) {

            System.out.println("Eligible to Vote");

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",

        questionEnglish:
          'Write a Java program to check if a student\'s mark is 35 or above. If it is, print "Pass".',

        questionTamil:
          'மாணவரின் மதிப்பெண் 35 அல்லது அதற்கு மேல் இருந்தால் "Pass" என்று Print செய்யும் Java Program-ஐ எழுதுங்கள்.',

        hintEnglish: "Use >= operator.",

        hintTamil: ">= Operator பயன்படுத்துங்கள்.",

        expectedOutput: `Pass`,

        expectedOutputTamil: `Pass`,

        solution: `public class Main {

    public static void main(String[] args) {

        int mark = 75;

        if (mark >= 35) {

            System.out.println("Pass");

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",

        questionEnglish:
          'Write a Java program to check if a salary is greater than 50000. If it is, print "High Salary".',

        questionTamil:
          'சம்பளம் 50000-ஐ விட அதிகமாக இருந்தால் "High Salary" என்று Print செய்யும் Java Program-ஐ எழுதுங்கள்.',

        hintEnglish: "Use the > operator.",

        hintTamil: "> Operator பயன்படுத்துங்கள்.",

        expectedOutput: `High Salary`,

        expectedOutputTamil: `High Salary`,

        solution: `public class Main {

    public static void main(String[] args) {

        int salary = 60000;

        if (salary > 50000) {

            System.out.println("High Salary");

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 9,
        title: "Challenge Question 9",

        questionEnglish:
          'Write a Java program to check if a number is divisible by both 2 and 5. If it is, print "Divisible by 2 and 5".',

        questionTamil:
          'ஒரு எண் 2 மற்றும் 5 ஆகிய இரண்டாலும் வகுபட்டால் "Divisible by 2 and 5" என்று Print செய்யும் Java Program-ஐ எழுதுங்கள்.',

        hintEnglish: "Use % operator and && operator.",

        hintTamil: "% மற்றும் && Operators பயன்படுத்துங்கள்.",

        expectedOutput: `Divisible by 2 and 5`,

        expectedOutputTamil: `Divisible by 2 and 5`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
        completed: false,
      },
      {
        id: 10,
        title: "Challenge Question 10",

        questionEnglish:
          'Write a Java program to check if a person is eligible for a driving license (age 18 or above) and print "Eligible".',

        questionTamil:
          'ஒருவரின் வயது 18 அல்லது அதற்கு மேல் இருந்தால் "Eligible" என்று Print செய்யும் Java Program-ஐ எழுதுங்கள்.',

        hintEnglish: "Use if statement and >= operator.",

        hintTamil: "if Statement மற்றும் >= Operator பயன்படுத்துங்கள்.",

        expectedOutput: `Eligible`,

        expectedOutputTamil: `Eligible`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
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
          "Write a Java program to check whether a number is positive or negative.",

        questionTamil:
          "ஒரு எண் Positive அல்லது Negative என்பதை if-else பயன்படுத்தி கண்டறியும் Java Program-ஐ எழுதுங்கள்.",

        hintEnglish: "Use if-else with > 0.",

        hintTamil: "> 0 உடன் if-else பயன்படுத்துங்கள்.",

        expectedOutput: `Positive Number`,

        expectedOutputTamil: `Positive Number`,

        solution: `public class Main {

    public static void main(String[] args) {

        int number = 10;

        if (number > 0) {

            System.out.println("Positive Number");

        } else {

            System.out.println("Negative Number");

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",

        questionEnglish:
          "Write a Java program to check whether a number is even or odd.",

        questionTamil:
          "ஒரு எண் Even அல்லது Odd என்பதை if-else பயன்படுத்தி கண்டறியும் Java Program-ஐ எழுதுங்கள்.",

        hintEnglish: "Use % 2 == 0.",

        hintTamil: "% 2 == 0 பயன்படுத்துங்கள்.",

        expectedOutput: `Even Number`,

        expectedOutputTamil: `Even Number`,

        solution: `public class Main {

    public static void main(String[] args) {

        int number = 8;

        if (number % 2 == 0) {

            System.out.println("Even Number");

        } else {

            System.out.println("Odd Number");

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",

        questionEnglish:
          "Write a Java program to check whether a student has passed or failed. Pass mark is 35.",

        questionTamil:
          "மாணவர் Pass அல்லது Fail என்பதை if-else பயன்படுத்தி கண்டறியும் Java Program-ஐ எழுதுங்கள். Pass Mark 35.",

        hintEnglish: "Use >= 35.",

        hintTamil: ">= 35 பயன்படுத்துங்கள்.",

        expectedOutput: `Pass`,

        expectedOutputTamil: `Pass`,

        solution: `public class Main {

    public static void main(String[] args) {

        int mark = 60;

        if (mark >= 35) {

            System.out.println("Pass");

        } else {

            System.out.println("Fail");

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",

        questionEnglish:
          "Write a Java program to check whether a person is eligible to vote.",

        questionTamil:
          "ஒருவர் வாக்களிக்க தகுதியானவரா என்பதை if-else பயன்படுத்தி கண்டறியும் Java Program-ஐ எழுதுங்கள்.",

        hintEnglish: "Use >= 18.",

        hintTamil: ">= 18 பயன்படுத்துங்கள்.",

        expectedOutput: `Eligible to Vote`,

        expectedOutputTamil: `Eligible to Vote`,

        solution: `public class Main {

    public static void main(String[] args) {

        int age = 20;

        if (age >= 18) {

            System.out.println("Eligible to Vote");

        } else {

            System.out.println("Not Eligible");

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",

        questionEnglish:
          "Write a Java program to find the greater of two numbers.",

        questionTamil:
          "இரண்டு எண்களில் பெரிய எண்ணை if-else பயன்படுத்தி கண்டறியும் Java Program-ஐ எழுதுங்கள்.",

        hintEnglish: "Compare two numbers using >.",

        hintTamil: "> Operator பயன்படுத்துங்கள்.",

        expectedOutput: `20 is Greater`,

        expectedOutputTamil: `20 is Greater`,

        solution: `public class Main {

    public static void main(String[] args) {

        int a = 20;
        int b = 10;

        if (a > b) {

            System.out.println(a + " is Greater");

        } else {

            System.out.println(b + " is Greater");

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 6,
        title: "Question 6",

        questionEnglish:
          "Write a Java program to check whether a person is an Adult or Minor.",

        questionTamil:
          "ஒருவர் Adult அல்லது Minor என்பதை if-else பயன்படுத்தி கண்டறியும் Java Program-ஐ எழுதுங்கள்.",

        hintEnglish: "Adult age is 18 or above.",

        hintTamil: "18 அல்லது அதற்கு மேல் Adult.",

        expectedOutput: `Adult`,

        expectedOutputTamil: `Adult`,

        solution: `public class Main {

    public static void main(String[] args) {

        int age = 22;

        if (age >= 18) {

            System.out.println("Adult");

        } else {

            System.out.println("Minor");

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",

        questionEnglish:
          "Write a Java program to check whether a business made a Profit or Loss.",

        questionTamil:
          "ஒரு வணிகத்தில் Profit அல்லது Loss என்பதை if-else பயன்படுத்தி கண்டறியும் Java Program-ஐ எழுதுங்கள்.",

        hintEnglish:
          "If selling price is greater than cost price, it is Profit.",

        hintTamil: "Selling Price > Cost Price என்றால் Profit.",

        expectedOutput: `Profit`,

        expectedOutputTamil: `Profit`,

        solution: `public class Main {

    public static void main(String[] args) {

        int costPrice = 500;
        int sellingPrice = 700;

        if (sellingPrice > costPrice) {

            System.out.println("Profit");

        } else {

            System.out.println("Loss");

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",

        questionEnglish:
          "Write a Java program to check whether a number is divisible by 5.",

        questionTamil:
          "ஒரு எண் 5-ஆல் வகுபடுகிறதா என்பதை if-else பயன்படுத்தி கண்டறியும் Java Program-ஐ எழுதுங்கள்.",

        hintEnglish: "Use % operator.",

        hintTamil: "% Operator பயன்படுத்துங்கள்.",

        expectedOutput: `Divisible by 5`,

        expectedOutputTamil: `Divisible by 5`,

        solution: `public class Main {

    public static void main(String[] args) {

        int number = 20;

        if (number % 5 == 0) {

            System.out.println("Divisible by 5");

        } else {

            System.out.println("Not Divisible by 5");

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 9,
        title: "Challenge Question 9",

        questionEnglish:
          "Write a Java program to check whether a year is a leap year or not.",

        questionTamil:
          "ஒரு ஆண்டு Leap Year ஆக உள்ளதா இல்லையா என்பதை if-else பயன்படுத்தி கண்டறியும் Java Program-ஐ எழுதுங்கள்.",

        hintEnglish: "Use the % operator.",

        hintTamil: "% Operator பயன்படுத்துங்கள்.",

        expectedOutput: `Leap Year`,

        expectedOutputTamil: `Leap Year`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
        completed: false,
      },
      {
        id: 10,
        title: "Challenge Question 10",

        questionEnglish:
          "Write a Java program to check whether a person is eligible for a senior citizen discount (age 60 or above).",

        questionTamil:
          "ஒருவரின் வயது 60 அல்லது அதற்கு மேல் இருந்தால் Senior Citizen Discount-க்கு தகுதியானவரா என்பதை if-else பயன்படுத்தி கண்டறியும் Java Program-ஐ எழுதுங்கள்.",

        hintEnglish: "Use >= operator.",

        hintTamil: ">= Operator பயன்படுத்துங்கள்.",

        expectedOutput: `Eligible for Discount`,

        expectedOutputTamil: `Eligible for Discount`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
        completed: false,
      },
    ],
  },
  {
    topicId: 8,
    title: "Nested If Statement",

    questions: [
      {
        id: 1,
        title: "Question 1",

        questionEnglish:
          "Write a Java program to check if a number is positive. If it is positive, then check whether it is even.",

        questionTamil:
          "ஒரு எண் Positive ஆக உள்ளதா என்று சரிபார்க்கவும். அது Positive என்றால் அது Even ஆக உள்ளதா என்றும் Nested If பயன்படுத்தி சரிபார்க்கவும்.",

        hintEnglish: "Use one if statement inside another if statement.",

        hintTamil:
          "ஒரு if Statement-க்குள் மற்றொரு if Statement பயன்படுத்துங்கள்.",

        expectedOutput: `Positive Number
Even Number`,

        expectedOutputTamil: `Positive Number
Even Number`,

        solution: `public class Main {

    public static void main(String[] args) {

        int number = 20;

        if (number > 0) {

            System.out.println("Positive Number");

            if (number % 2 == 0) {

                System.out.println("Even Number");

            }

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",

        questionEnglish:
          "Write a Java program to check if a student passed. If the student passed, then check whether the mark is above 90 and print 'Excellent'.",

        questionTamil:
          "மாணவர் Pass ஆனாரா என்பதை சரிபார்க்கவும். Pass ஆனால் மதிப்பெண் 90-க்கு மேல் உள்ளதா என்று Nested If பயன்படுத்தி 'Excellent' என்று Print செய்யுங்கள்.",

        hintEnglish: "First check Pass, then check mark > 90.",

        hintTamil:
          "முதலில் Pass என்பதை சரிபார்த்து, பிறகு Mark 90-க்கு மேல் உள்ளதா என்று சரிபார்க்கவும்.",

        expectedOutput: `Pass
Excellent`,

        expectedOutputTamil: `Pass
Excellent`,

        solution: `public class Main {

    public static void main(String[] args) {

        int mark = 95;

        if (mark >= 35) {

            System.out.println("Pass");

            if (mark > 90) {

                System.out.println("Excellent");

            }

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",

        questionEnglish:
          "Write a Java program to check if a person is eligible to vote. If eligible, then check if the age is above 60 and print 'Senior Citizen'.",

        questionTamil:
          "ஒருவர் Vote செய்ய தகுதியானவரா என்பதை சரிபார்க்கவும். தகுதி இருந்தால் வயது 60-க்கு மேல் உள்ளதா என்று Nested If பயன்படுத்தி 'Senior Citizen' என்று Print செய்யுங்கள்.",

        hintEnglish: "Use age >=18 and another if for age >=60.",

        hintTamil: "முதலில் age >=18, பிறகு age >=60 என்று சரிபார்க்கவும்.",

        expectedOutput: `Eligible to Vote
Senior Citizen`,

        expectedOutputTamil: `Eligible to Vote
Senior Citizen`,

        solution: `public class Main {

    public static void main(String[] args) {

        int age = 65;

        if (age >= 18) {

            System.out.println("Eligible to Vote");

            if (age >= 60) {

                System.out.println("Senior Citizen");

            }

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",

        questionEnglish:
          "Write a Java program to check if a number is divisible by 5. If it is divisible, then check whether it is also divisible by 10.",

        questionTamil:
          "ஒரு எண் 5-ஆல் வகுபடுகிறதா என்பதை சரிபார்க்கவும். வகுபட்டால் அது 10-ஆலும் வகுபடுகிறதா என்பதை Nested If பயன்படுத்தி சரிபார்க்கவும்.",

        hintEnglish: "Use two if statements with % operator.",

        hintTamil: "% Operator உடன் இரண்டு if Statements பயன்படுத்துங்கள்.",

        expectedOutput: `Divisible by 5
Divisible by 10`,

        expectedOutputTamil: `Divisible by 5
Divisible by 10`,

        solution: `public class Main {

    public static void main(String[] args) {

        int number = 20;

        if (number % 5 == 0) {

            System.out.println("Divisible by 5");

            if (number % 10 == 0) {

                System.out.println("Divisible by 10");

            }

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",

        questionEnglish:
          "Write a Java program to check if a salary is greater than 30000. If yes, then check whether it is greater than 70000 and print 'High Salary'.",

        questionTamil:
          "சம்பளம் 30000-ஐ விட அதிகமா என்பதை சரிபார்க்கவும். அதிகமாக இருந்தால் அது 70000-ஐ விட அதிகமா என்று Nested If பயன்படுத்தி 'High Salary' என்று Print செய்யுங்கள்.",

        hintEnglish: "Check salary >30000, then salary >70000.",

        hintTamil: "முதலில் salary >30000, பிறகு salary >70000.",

        expectedOutput: `Salary Eligible
High Salary`,

        expectedOutputTamil: `Salary Eligible
High Salary`,

        solution: `public class Main {

    public static void main(String[] args) {

        int salary = 80000;

        if (salary > 30000) {

            System.out.println("Salary Eligible");

            if (salary > 70000) {

                System.out.println("High Salary");

            }

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 6,
        title: "Question 6",

        questionEnglish:
          "Write a Java program to check if a student has attendance above 75%. If yes, then check whether the mark is above 50 and print 'Eligible for Exam'.",

        questionTamil:
          "மாணவரின் Attendance 75%-க்கு மேல் உள்ளதா என்பதை சரிபார்க்கவும். இருந்தால் மதிப்பெண் 50-க்கு மேல் உள்ளதா என்று Nested If பயன்படுத்தி 'Eligible for Exam' என்று Print செய்யுங்கள்.",

        hintEnglish: "Use two nested conditions.",

        hintTamil: "Nested If பயன்படுத்துங்கள்.",

        expectedOutput: `Attendance OK
Eligible for Exam`,

        expectedOutputTamil: `Attendance OK
Eligible for Exam`,

        solution: `public class Main {

    public static void main(String[] args) {

        int attendance = 80;

        int mark = 65;

        if (attendance > 75) {

            System.out.println("Attendance OK");

            if (mark > 50) {

                System.out.println("Eligible for Exam");

            }

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",

        questionEnglish:
          "Write a Java program to check if a person has a driving license. If yes, then check whether the person's age is above 18 and print 'Can Drive'.",

        questionTamil:
          "ஒருவரிடம் Driving License உள்ளதா என்பதை சரிபார்க்கவும். இருந்தால் வயது 18-க்கு மேல் உள்ளதா என்று Nested If பயன்படுத்தி 'Can Drive' என்று Print செய்யுங்கள்.",

        hintEnglish: "Use a boolean variable and nested if.",

        hintTamil: "Boolean Variable மற்றும் Nested If பயன்படுத்துங்கள்.",

        expectedOutput: `License Verified
Can Drive`,

        expectedOutputTamil: `License Verified
Can Drive`,

        solution: `public class Main {

    public static void main(String[] args) {

        boolean hasLicense = true;

        int age = 20;

        if (hasLicense) {

            System.out.println("License Verified");

            if (age >= 18) {

                System.out.println("Can Drive");

            }

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",

        questionEnglish:
          "Write a Java program to check if a customer purchased items worth more than $100. If yes, then check whether the customer is a premium member and print 'Discount Applied'.",

        questionTamil:
          "ஒரு Customer $100-க்கு மேல் பொருட்கள் வாங்கியுள்ளாரா என்பதை சரிபார்க்கவும். வாங்கியிருந்தால் அவர் Premium Member ஆவாரா என்பதை Nested If பயன்படுத்தி 'Discount Applied' என்று Print செய்யுங்கள்.",

        hintEnglish: "Use one if inside another if.",

        hintTamil:
          "ஒரு if Statement-க்குள் மற்றொரு if Statement பயன்படுத்துங்கள்.",

        expectedOutput: `Purchase Eligible
Discount Applied`,

        expectedOutputTamil: `Purchase Eligible
Discount Applied`,

        solution: `public class Main {

    public static void main(String[] args) {

        int purchaseAmount = 150;

        boolean isPremiumMember = true;

        if (purchaseAmount > 100) {

            System.out.println("Purchase Eligible");

            if (isPremiumMember) {

                System.out.println("Discount Applied");

            }

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 9,
        title: "Challenge Question 9",

        questionEnglish:
          "Write a Java program to check if a student passed all subjects. If yes, then check whether the average mark is above 85 and print 'Distinction'.",

        questionTamil:
          "மாணவர் அனைத்து பாடங்களிலும் Pass ஆனாரா என்பதை சரிபார்க்கவும். Pass ஆனால் Average Mark 85-க்கு மேல் உள்ளதா என்பதை Nested If பயன்படுத்தி 'Distinction' என்று Print செய்யுங்கள்.",

        hintEnglish: "Use nested if statements with two conditions.",

        hintTamil: "இரண்டு Nested If Conditions பயன்படுத்துங்கள்.",

        expectedOutput: `Passed All Subjects
Distinction`,

        expectedOutputTamil: `Passed All Subjects
Distinction`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
        completed: false,
      },
      {
        id: 10,
        title: "Challenge Question 10",

        questionEnglish:
          "Write a Java program to check if an employee has completed more than 5 years of service. If yes, then check whether the performance rating is above 4 and print 'Eligible for Promotion'.",

        questionTamil:
          "ஒரு Employee 5 ஆண்டுகளுக்கு மேல் வேலை செய்துள்ளாரா என்பதை சரிபார்க்கவும். இருந்தால் Performance Rating 4-க்கு மேல் உள்ளதா என்பதை Nested If பயன்படுத்தி 'Eligible for Promotion' என்று Print செய்யுங்கள்.",

        hintEnglish: "Use nested if statements.",

        hintTamil: "Nested If Statements பயன்படுத்துங்கள்.",

        expectedOutput: `Service Requirement Met
Eligible for Promotion`,

        expectedOutputTamil: `Service Requirement Met
Eligible for Promotion`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
        completed: false,
      },
    ],
  },
  {
    topicId: 9,
    title: "Switch Case",

    questions: [
      {
        id: 1,
        title: "Question 1",

        questionEnglish:
          "Write a Java program to print the day of the week based on a number (1-7) using switch case.",

        questionTamil:
          "1 முதல் 7 வரை உள்ள எண்ணை பயன்படுத்தி வாரத்தின் நாளை Switch Case மூலம் Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish: "Use switch with case values from 1 to 7.",

        hintTamil: "1 முதல் 7 வரை case-களை பயன்படுத்துங்கள்.",

        expectedOutput: `Monday`,

        expectedOutputTamil: `Monday`,

        solution: `public class Main {

    public static void main(String[] args) {

        int day = 1;

        switch (day) {

            case 1:
                System.out.println("Monday");
                break;

            case 2:
                System.out.println("Tuesday");
                break;

            case 3:
                System.out.println("Wednesday");
                break;

            case 4:
                System.out.println("Thursday");
                break;

            case 5:
                System.out.println("Friday");
                break;

            case 6:
                System.out.println("Saturday");
                break;

            case 7:
                System.out.println("Sunday");
                break;

            default:
                System.out.println("Invalid Day");

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",

        questionEnglish:
          "Write a Java program to print the month name based on a number (1-12) using switch case.",

        questionTamil:
          "1 முதல் 12 வரை உள்ள எண்ணை பயன்படுத்தி மாதத்தின் பெயரை Switch Case மூலம் Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish: "Create cases from 1 to 12.",

        hintTamil: "1 முதல் 12 வரை case-களை பயன்படுத்துங்கள்.",

        expectedOutput: `March`,

        expectedOutputTamil: `March`,

        solution: `public class Main {

    public static void main(String[] args) {

        int month = 3;

        switch (month) {

            case 1:
                System.out.println("January");
                break;

            case 2:
                System.out.println("February");
                break;

            case 3:
                System.out.println("March");
                break;

            case 4:
                System.out.println("April");
                break;

            case 5:
                System.out.println("May");
                break;

            case 6:
                System.out.println("June");
                break;

            case 7:
                System.out.println("July");
                break;

            case 8:
                System.out.println("August");
                break;

            case 9:
                System.out.println("September");
                break;

            case 10:
                System.out.println("October");
                break;

            case 11:
                System.out.println("November");
                break;

            case 12:
                System.out.println("December");
                break;

            default:
                System.out.println("Invalid Month");

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",

        questionEnglish:
          "Write a Java program to perform basic arithmetic operations (+, -, *, /) using switch case.",

        questionTamil:
          "Switch Case பயன்படுத்தி (+, -, *, /) கணித செயல்பாடுகளை செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish: "Use a character variable for the operator.",

        hintTamil:
          "Operator-ஐ Character Variable-ல் சேமித்து Switch பயன்படுத்துங்கள்.",

        expectedOutput: `Addition = 30`,

        expectedOutputTamil: `Addition = 30`,

        solution: `public class Main {

    public static void main(String[] args) {

        int a = 10;
        int b = 20;
        char operator = '+';

        switch (operator) {

            case '+':
                System.out.println("Addition = " + (a + b));
                break;

            case '-':
                System.out.println("Subtraction = " + (a - b));
                break;

            case '*':
                System.out.println("Multiplication = " + (a * b));
                break;

            case '/':
                System.out.println("Division = " + (a / b));
                break;

            default:
                System.out.println("Invalid Operator");

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",

        questionEnglish:
          "Write a Java program to print the name of a traffic signal color using switch case.",

        questionTamil:
          "Traffic Signal Number-ஐ பயன்படுத்தி அதன் நிறத்தை Switch Case மூலம் Print செய்யும் Java Program எழுதுங்கள். (1-Red, 2-Yellow, 3-Green)",

        hintEnglish: "Use numbers 1, 2 and 3 in switch.",

        hintTamil: "1, 2, 3 ஆகிய case-களை பயன்படுத்துங்கள்.",

        expectedOutput: `Green`,

        expectedOutputTamil: `Green`,

        solution: `public class Main {

    public static void main(String[] args) {

        int signal = 3;

        switch (signal) {

            case 1:
                System.out.println("Red");
                break;

            case 2:
                System.out.println("Yellow");
                break;

            case 3:
                System.out.println("Green");
                break;

            default:
                System.out.println("Invalid Signal");

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",

        questionEnglish:
          "Write a Java program to print a grade based on marks using switch case. (Use grade characters A, B, C and D)",

        questionTamil:
          "Grade Character (A, B, C, D)-ஐ பயன்படுத்தி அதற்கான செய்தியை Switch Case மூலம் Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish: "Store the grade in a character variable.",

        hintTamil:
          "Grade-ஐ Character Variable-ல் சேமித்து Switch பயன்படுத்துங்கள்.",

        expectedOutput: `Excellent`,

        expectedOutputTamil: `Excellent`,

        solution: `public class Main {

    public static void main(String[] args) {

        char grade = 'A';

        switch (grade) {

            case 'A':
                System.out.println("Excellent");
                break;

            case 'B':
                System.out.println("Very Good");
                break;

            case 'C':
                System.out.println("Good");
                break;

            case 'D':
                System.out.println("Pass");
                break;

            default:
                System.out.println("Invalid Grade");

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",

        questionEnglish:
          "Write a Java program to print a grade based on marks using switch case. (Use grade characters A, B, C and D)",

        questionTamil:
          "Grade Character (A, B, C, D)-ஐ பயன்படுத்தி அதற்கான செய்தியை Switch Case மூலம் Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish: "Store the grade in a character variable.",

        hintTamil:
          "Grade-ஐ Character Variable-ல் சேமித்து Switch பயன்படுத்துங்கள்.",

        expectedOutput: `Excellent`,

        expectedOutputTamil: `Excellent`,

        solution: `public class Main {

    public static void main(String[] args) {

        char grade = 'A';

        switch (grade) {

            case 'A':
                System.out.println("Excellent");
                break;

            case 'B':
                System.out.println("Very Good");
                break;

            case 'C':
                System.out.println("Good");
                break;

            case 'D':
                System.out.println("Pass");
                break;

            default:
                System.out.println("Invalid Grade");

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",

        questionEnglish:
          "Write a Java program to print the name of a season based on a number (1-4) using switch case.",

        questionTamil:
          "1 முதல் 4 வரை உள்ள எண்ணை பயன்படுத்தி பருவ காலத்தின் பெயரை Switch Case மூலம் Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish: "Create four cases for the four seasons.",

        hintTamil: "நான்கு Seasons-க்கு நான்கு case-களை உருவாக்குங்கள்.",

        expectedOutput: `Summer`,

        expectedOutputTamil: `Summer`,

        solution: `public class Main {

    public static void main(String[] args) {

        int season = 2;

        switch (season) {

            case 1:
                System.out.println("Winter");
                break;

            case 2:
                System.out.println("Summer");
                break;

            case 3:
                System.out.println("Rainy");
                break;

            case 4:
                System.out.println("Spring");
                break;

            default:
                System.out.println("Invalid Season");

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",

        questionEnglish:
          "Write a Java program to print the name of a department based on a department code using switch case. (1-CSE, 2-IT, 3-ECE, 4-MECH)",

        questionTamil:
          "Department Code-ஐ பயன்படுத்தி Department பெயரை Switch Case மூலம் Print செய்யும் Java Program எழுதுங்கள். (1-CSE, 2-IT, 3-ECE, 4-MECH)",

        hintEnglish: "Use the department code in the switch statement.",

        hintTamil: "Department Code-ஐ Switch Statement-ல் பயன்படுத்துங்கள்.",

        expectedOutput: `CSE`,

        expectedOutputTamil: `CSE`,

        solution: `public class Main {

    public static void main(String[] args) {

        int department = 1;

        switch (department) {

            case 1:
                System.out.println("CSE");
                break;

            case 2:
                System.out.println("IT");
                break;

            case 3:
                System.out.println("ECE");
                break;

            case 4:
                System.out.println("MECH");
                break;

            default:
                System.out.println("Invalid Department");

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 9,
        title: "Challenge Question 9",

        questionEnglish:
          "Write a Java program to build a simple calculator using switch case. Perform Addition, Subtraction, Multiplication and Division based on the operator entered by the user.",

        questionTamil:
          "பயனர் கொடுக்கும் Operator (+, -, *, /)-ஐ பயன்படுத்தி Switch Case மூலம் ஒரு Simple Calculator Program எழுதுங்கள்.",

        hintEnglish:
          "Use a character variable to represent the operator and create separate cases for '+', '-', '*', and '/'.",

        hintTamil:
          "Operator-ஐ Character Variable-ல் சேமித்து '+', '-', '*', '/' ஆகியவற்றிற்கு தனித்தனி Case-களை உருவாக்குங்கள்.",

        expectedOutput: `Addition = 30`,

        expectedOutputTamil: `Addition = 30`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
        completed: false,
      },
      {
        id: 10,
        title: "Challenge Question 10",

        questionEnglish:
          "Write a Java program to display a restaurant menu using switch case. Print the selected food item based on the menu number entered by the user.",

        questionTamil:
          "Menu Number-ஐ பயன்படுத்தி Restaurant Menu-வில் தேர்வு செய்யப்பட்ட உணவின் பெயரை Switch Case மூலம் Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create different cases for different menu numbers and print the corresponding food item.",

        hintTamil:
          "ஒவ்வொரு Menu Number-க்கும் தனித்தனி Case-ஐ உருவாக்கி அதற்கான Food Item-ஐ Print செய்யுங்கள்.",

        expectedOutput: `Selected Item: Dosa`,

        expectedOutputTamil: `Selected Item: Dosa`,

        solution: "",

        challenge: true,
        locked: true,
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
          "Write a Java program to check whether a number is positive or negative using the ternary operator.",

        questionTamil:
          "Ternary Operator-ஐ பயன்படுத்தி ஒரு எண் Positive அல்லது Negative என்பதை கண்டறியும் Java Program எழுதுங்கள்.",

        hintEnglish:
          'Use the condition (number > 0) ? "Positive" : "Negative".',

        hintTamil:
          '(number > 0) ? "Positive" : "Negative" என்ற வடிவத்தை பயன்படுத்துங்கள்.',

        expectedOutput: `Positive`,

        expectedOutputTamil: `Positive`,

        solution: `public class Main {

    public static void main(String[] args) {

        int number = 15;

        String result = (number > 0) ? "Positive" : "Negative";

        System.out.println(result);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",

        questionEnglish:
          "Write a Java program to check whether a number is even or odd using the ternary operator.",

        questionTamil:
          "Ternary Operator-ஐ பயன்படுத்தி ஒரு எண் Even அல்லது Odd என்பதை கண்டறியும் Java Program எழுதுங்கள்.",

        hintEnglish: "Check the remainder using the modulus (%) operator.",

        hintTamil: "Modulus (%) Operator-ஐ பயன்படுத்தி மீதியை சரிபார்க்கவும்.",

        expectedOutput: `Even`,

        expectedOutputTamil: `Even`,

        solution: `public class Main {

    public static void main(String[] args) {

        int number = 20;

        String result = (number % 2 == 0) ? "Even" : "Odd";

        System.out.println(result);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",

        questionEnglish:
          "Write a Java program to find the greater of two numbers using the ternary operator.",

        questionTamil:
          "Ternary Operator-ஐ பயன்படுத்தி இரண்டு எண்களில் பெரிய எண்ணை கண்டறியும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Compare the two numbers using the greater than (>) operator.",

        hintTamil: "(>) Operator-ஐ பயன்படுத்தி இரண்டு எண்களையும் ஒப்பிடுங்கள்.",

        expectedOutput: `Greater Number = 25`,

        expectedOutputTamil: `Greater Number = 25`,

        solution: `public class Main {

    public static void main(String[] args) {

        int a = 15;
        int b = 25;

        int greater = (a > b) ? a : b;

        System.out.println("Greater Number = " + greater);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",

        questionEnglish:
          "Write a Java program to check whether a student passed or failed using the ternary operator. (Pass mark is 35)",

        questionTamil:
          "Ternary Operator-ஐ பயன்படுத்தி மாணவர் Pass அல்லது Fail என்பதை கண்டறியும் Java Program எழுதுங்கள். (Pass Mark = 35)",

        hintEnglish: "Check whether the mark is greater than or equal to 35.",

        hintTamil: "Mark 35 அல்லது அதற்கு மேல் உள்ளதா என்று சரிபார்க்கவும்.",

        expectedOutput: `Pass`,

        expectedOutputTamil: `Pass`,

        solution: `public class Main {

    public static void main(String[] args) {

        int mark = 75;

        String result = (mark >= 35) ? "Pass" : "Fail";

        System.out.println(result);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",

        questionEnglish:
          "Write a Java program to check whether a person is eligible to vote using the ternary operator.",

        questionTamil:
          "Ternary Operator-ஐ பயன்படுத்தி ஒருவர் வாக்களிக்க தகுதியானவரா என்பதை கண்டறியும் Java Program எழுதுங்கள்.",

        hintEnglish: "Check whether the age is greater than or equal to 18.",

        hintTamil: "Age 18 அல்லது அதற்கு மேல் உள்ளதா என்று சரிபார்க்கவும்.",

        expectedOutput: `Eligible to Vote`,

        expectedOutputTamil: `Eligible to Vote`,

        solution: `public class Main {

    public static void main(String[] args) {

        int age = 20;

        String result = (age >= 18) ? "Eligible to Vote" : "Not Eligible to Vote";

        System.out.println(result);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",

        questionEnglish:
          "Write a Java program to check whether a person is eligible to vote using the ternary operator.",

        questionTamil:
          "Ternary Operator-ஐ பயன்படுத்தி ஒருவர் வாக்களிக்க தகுதியானவரா என்பதை கண்டறியும் Java Program எழுதுங்கள்.",

        hintEnglish: "Check whether the age is greater than or equal to 18.",

        hintTamil: "Age 18 அல்லது அதற்கு மேல் உள்ளதா என்று சரிபார்க்கவும்.",

        expectedOutput: `Eligible to Vote`,

        expectedOutputTamil: `Eligible to Vote`,

        solution: `public class Main {

    public static void main(String[] args) {

        int age = 20;

        String result = (age >= 18) ? "Eligible to Vote" : "Not Eligible to Vote";

        System.out.println(result);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",

        questionEnglish:
          "Write a Java program to check whether a year is a leap year or not using the ternary operator. (Assume the year is divisible by 4.)",

        questionTamil:
          "Ternary Operator-ஐ பயன்படுத்தி ஒரு ஆண்டு Leap Year ஆக உள்ளதா என்பதை கண்டறியும் Java Program எழுதுங்கள். (4-ஆல் வகுபடும் ஆண்டுகளை மட்டும் கருதுங்கள்.)",

        hintEnglish:
          "Check whether the year is divisible by 4 using the modulus (%) operator.",

        hintTamil:
          "Modulus (%) Operator-ஐ பயன்படுத்தி ஆண்டு 4-ஆல் வகுபடுகிறதா என்று சரிபார்க்கவும்.",

        expectedOutput: `Leap Year`,

        expectedOutputTamil: `Leap Year`,

        solution: `public class Main {

    public static void main(String[] args) {

        int year = 2024;

        String result = (year % 4 == 0) ? "Leap Year" : "Not a Leap Year";

        System.out.println(result);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",

        questionEnglish:
          "Write a Java program to check whether a customer is eligible for a discount. A customer is eligible if the purchase amount is greater than 1000.",

        questionTamil:
          "Ternary Operator-ஐ பயன்படுத்தி ஒரு Customer Discount பெற தகுதியானவரா என்பதை கண்டறியும் Java Program எழுதுங்கள். Purchase Amount 1000-க்கு மேல் இருந்தால் Discount கிடைக்கும்.",

        hintEnglish: "Check whether the purchase amount is greater than 1000.",

        hintTamil:
          "Purchase Amount 1000-க்கு மேல் உள்ளதா என்று சரிபார்க்கவும்.",

        expectedOutput: `Discount Eligible`,

        expectedOutputTamil: `Discount Eligible`,

        solution: `public class Main {

    public static void main(String[] args) {

        int purchaseAmount = 1500;

        String result = (purchaseAmount > 1000) ? "Discount Eligible" : "Discount Not Eligible";

        System.out.println(result);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 9,
        title: "Challenge Question 9",

        questionEnglish:
          "Write a Java program to find the largest of two numbers using the ternary operator and display the result.",

        questionTamil:
          "Ternary Operator-ஐ பயன்படுத்தி இரண்டு எண்களில் பெரிய எண்ணை கண்டறிந்து Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Use the ternary operator to compare the two numbers and store the larger value in a variable.",

        hintTamil:
          "Ternary Operator-ஐ பயன்படுத்தி இரண்டு எண்களையும் ஒப்பிட்டு பெரிய எண்ணை ஒரு Variable-ல் சேமிக்கவும்.",

        expectedOutput: `Largest Number = 50`,

        expectedOutputTamil: `Largest Number = 50`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
        completed: false,
      },
      {
        id: 10,
        title: "Challenge Question 10",

        questionEnglish:
          "Write a Java program to assign a grade using the ternary operator. Print 'Pass' if the mark is 35 or above; otherwise print 'Fail'.",

        questionTamil:
          "Ternary Operator-ஐ பயன்படுத்தி மாணவரின் மதிப்பெண்ணை அடிப்படையாகக் கொண்டு 'Pass' அல்லது 'Fail' என்பதை Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Use the ternary operator with the condition (mark >= 35).",

        hintTamil:
          "(mark >= 35) என்ற நிபந்தனையுடன் Ternary Operator-ஐ பயன்படுத்துங்கள்.",

        expectedOutput: `Pass`,

        expectedOutputTamil: `Pass`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
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
          "Write a Java program to print numbers from 1 to 5 using a while loop.",

        questionTamil:
          "While Loop-ஐ பயன்படுத்தி 1 முதல் 5 வரை உள்ள எண்களை Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Initialize a variable to 1 and increment it until it reaches 5.",

        hintTamil: "ஒரு Variable-ஐ 1-ல் தொடங்கி 5 வரை Increment செய்யுங்கள்.",

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

        solution: `public class Main {

    public static void main(String[] args) {

        int i = 1;

        while (i <= 5) {

            System.out.println(i);

            i++;

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",

        questionEnglish:
          "Write a Java program to print numbers from 5 to 1 using a while loop.",

        questionTamil:
          "While Loop-ஐ பயன்படுத்தி 5 முதல் 1 வரை உள்ள எண்களை Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Initialize the variable to 5 and decrement it until it reaches 1.",

        hintTamil: "Variable-ஐ 5-ல் தொடங்கி 1 வரை Decrement செய்யுங்கள்.",

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

        solution: `public class Main {

    public static void main(String[] args) {

        int i = 5;

        while (i >= 1) {

            System.out.println(i);

            i--;

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",

        questionEnglish:
          "Write a Java program to print all even numbers from 2 to 10 using a while loop.",

        questionTamil:
          "While Loop-ஐ பயன்படுத்தி 2 முதல் 10 வரை உள்ள அனைத்து Even எண்களையும் Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish: "Start from 2 and increase the value by 2 each time.",

        hintTamil: "2-ல் தொடங்கி ஒவ்வொரு முறையும் 2-ஆல் Increment செய்யுங்கள்.",

        expectedOutput: `2
4
6
8
10`,

        expectedOutputTamil: `2
4
6
8
10`,

        solution: `public class Main {

    public static void main(String[] args) {

        int i = 2;

        while (i <= 10) {

            System.out.println(i);

            i += 2;

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",

        questionEnglish:
          "Write a Java program to print all odd numbers from 1 to 9 using a while loop.",

        questionTamil:
          "While Loop-ஐ பயன்படுத்தி 1 முதல் 9 வரை உள்ள அனைத்து Odd எண்களையும் Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish: "Start from 1 and increase the value by 2 each time.",

        hintTamil: "1-ல் தொடங்கி ஒவ்வொரு முறையும் 2-ஆல் Increment செய்யுங்கள்.",

        expectedOutput: `1
3
5
7
9`,

        expectedOutputTamil: `1
3
5
7
9`,

        solution: `public class Main {

    public static void main(String[] args) {

        int i = 1;

        while (i <= 9) {

            System.out.println(i);

            i += 2;

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",

        questionEnglish:
          "Write a Java program to print the multiplication table of 5 using a while loop.",

        questionTamil:
          "While Loop-ஐ பயன்படுத்தி 5-ன் பெருக்கல் வாய்ப்பாட்டை Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Start from 1 and continue until 10. Multiply each value by 5.",

        hintTamil:
          "1 முதல் 10 வரை Loop செய்து ஒவ்வொரு எண்ணையும் 5-ஆல் பெருக்குங்கள்.",

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

        solution: `public class Main {

    public static void main(String[] args) {

        int i = 1;

        while (i <= 10) {

            System.out.println("5 x " + i + " = " + (5 * i));

            i++;

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 6,
        title: "Question 6",

        questionEnglish:
          "Write a Java program to find the sum of numbers from 1 to 10 using a while loop.",

        questionTamil:
          "While Loop-ஐ பயன்படுத்தி 1 முதல் 10 வரை உள்ள எண்களின் கூட்டுத்தொகையை கண்டறியும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Use a variable to store the sum and keep adding the current number inside the loop.",

        hintTamil:
          "கூட்டுத்தொகையை சேமிக்க ஒரு Variable பயன்படுத்தி, Loop-க்குள் ஒவ்வொரு எண்ணையும் சேர்க்கவும்.",

        expectedOutput: `Sum = 55`,

        expectedOutputTamil: `கூட்டுத்தொகை = 55`,

        solution: `public class Main {

    public static void main(String[] args) {

        int i = 1;
        int sum = 0;

        while (i <= 10) {

            sum = sum + i;
            i++;

        }

        System.out.println("Sum = " + sum);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",

        questionEnglish:
          "Write a Java program to find the factorial of a number using a while loop.",

        questionTamil:
          "While Loop-ஐ பயன்படுத்தி ஒரு எண்ணின் Factorial-ஐ கண்டறியும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Multiply the numbers from 1 to the given number using a while loop.",

        hintTamil:
          "1 முதல் கொடுக்கப்பட்ட எண் வரை உள்ள எண்களை While Loop மூலம் பெருக்குங்கள்.",

        expectedOutput: `Factorial = 120`,

        expectedOutputTamil: `Factorial = 120`,

        solution: `public class Main {

    public static void main(String[] args) {

        int number = 5;
        int i = 1;
        int factorial = 1;

        while (i <= number) {

            factorial = factorial * i;
            i++;

        }

        System.out.println("Factorial = " + factorial);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",

        questionEnglish:
          "Write a Java program to print the squares of numbers from 1 to 5 using a while loop.",

        questionTamil:
          "While Loop-ஐ பயன்படுத்தி 1 முதல் 5 வரை உள்ள எண்களின் Square-ஐ Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish: "Print the square of each number inside the while loop.",

        hintTamil:
          "While Loop-க்குள் ஒவ்வொரு எண்ணின் Square-ஐ Print செய்யுங்கள்.",

        expectedOutput: `1
4
9
16
25`,

        expectedOutputTamil: `1
4
9
16
25`,

        solution: `public class Main {

    public static void main(String[] args) {

        int i = 1;

        while (i <= 5) {

            System.out.println(i * i);
            i++;

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 9,
        title: "Challenge Question 9",

        questionEnglish:
          "Write a Java program to print the multiplication table of a given number using a while loop.",

        questionTamil:
          "While Loop-ஐ பயன்படுத்தி கொடுக்கப்பட்ட எண்ணின் பெருக்கல் வாய்ப்பாட்டை Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Use a counter from 1 to 10 and multiply it by the given number.",

        hintTamil:
          "1 முதல் 10 வரை Counter-ஐ பயன்படுத்தி கொடுக்கப்பட்ட எண்ணுடன் பெருக்குங்கள்.",

        expectedOutput: `7 x 1 = 7
7 x 2 = 14
...
7 x 10 = 70`,

        expectedOutputTamil: `7 x 1 = 7
7 x 2 = 14
...
7 x 10 = 70`,

        solution: "",

        challenge: true,
        locked: true,
        completed: false,
      },
      {
        id: 10,
        title: "Challenge Question 10",

        questionEnglish:
          "Write a Java program to reverse the digits of a given number using a while loop.",

        questionTamil:
          "While Loop-ஐ பயன்படுத்தி கொடுக்கப்பட்ட எண்ணின் இலக்கங்களை தலைகீழாக மாற்றி Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Use modulus (%) to get the last digit and division (/) to remove the last digit.",

        hintTamil:
          "கடைசி இலக்கத்தை பெற Modulus (%) மற்றும் அதை நீக்க Division (/) பயன்படுத்துங்கள்.",

        expectedOutput: `Reversed Number = 54321`,

        expectedOutputTamil: `தலைகீழ் எண் = 54321`,

        solution: "",

        challenge: true,
        locked: true,
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
          "Write a Java program to print numbers from 1 to 5 using a do while loop.",

        questionTamil:
          "Do While Loop-ஐ பயன்படுத்தி 1 முதல் 5 வரை உள்ள எண்களை Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Initialize the variable to 1 and use a do while loop to print the numbers.",

        hintTamil:
          "Variable-ஐ 1-ல் தொடங்கி Do While Loop பயன்படுத்தி Print செய்யுங்கள்.",

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

        solution: `public class Main {

    public static void main(String[] args) {

        int i = 1;

        do {

            System.out.println(i);

            i++;

        } while (i <= 5);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",

        questionEnglish:
          "Write a Java program to print numbers from 5 to 1 using a do while loop.",

        questionTamil:
          "Do While Loop-ஐ பயன்படுத்தி 5 முதல் 1 வரை உள்ள எண்களை Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Initialize the variable to 5 and decrement it inside the loop.",

        hintTamil:
          "Variable-ஐ 5-ல் தொடங்கி ஒவ்வொரு முறையும் Decrement செய்யுங்கள்.",

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

        solution: `public class Main {

    public static void main(String[] args) {

        int i = 5;

        do {

            System.out.println(i);

            i--;

        } while (i >= 1);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",

        questionEnglish:
          "Write a Java program to print all even numbers from 2 to 10 using a do while loop.",

        questionTamil:
          "Do While Loop-ஐ பயன்படுத்தி 2 முதல் 10 வரை உள்ள அனைத்து Even எண்களையும் Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish: "Start from 2 and increase the value by 2 each time.",

        hintTamil: "2-ல் தொடங்கி ஒவ்வொரு முறையும் 2-ஆல் Increment செய்யுங்கள்.",

        expectedOutput: `2
4
6
8
10`,

        expectedOutputTamil: `2
4
6
8
10`,

        solution: `public class Main {

    public static void main(String[] args) {

        int i = 2;

        do {

            System.out.println(i);

            i += 2;

        } while (i <= 10);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",

        questionEnglish:
          "Write a Java program to print all odd numbers from 1 to 9 using a do while loop.",

        questionTamil:
          "Do While Loop-ஐ பயன்படுத்தி 1 முதல் 9 வரை உள்ள அனைத்து Odd எண்களையும் Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish: "Start from 1 and increase the value by 2 each time.",

        hintTamil: "1-ல் தொடங்கி ஒவ்வொரு முறையும் 2-ஆல் Increment செய்யுங்கள்.",

        expectedOutput: `1
3
5
7
9`,

        expectedOutputTamil: `1
3
5
7
9`,

        solution: `public class Main {

    public static void main(String[] args) {

        int i = 1;

        do {

            System.out.println(i);

            i += 2;

        } while (i <= 9);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",

        questionEnglish:
          "Write a Java program to print the multiplication table of 5 using a do while loop.",

        questionTamil:
          "Do While Loop-ஐ பயன்படுத்தி 5-ன் பெருக்கல் வாய்ப்பாட்டை Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Start from 1 and continue until 10. Multiply each value by 5.",

        hintTamil:
          "1 முதல் 10 வரை Loop செய்து ஒவ்வொரு எண்ணையும் 5-ஆல் பெருக்குங்கள்.",

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

        solution: `public class Main {

    public static void main(String[] args) {

        int i = 1;

        do {

            System.out.println("5 x " + i + " = " + (5 * i));

            i++;

        } while (i <= 10);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 6,
        title: "Question 6",

        questionEnglish:
          "Write a Java program to find the sum of numbers from 1 to 10 using a do while loop.",

        questionTamil:
          "Do While Loop-ஐ பயன்படுத்தி 1 முதல் 10 வரை உள்ள எண்களின் கூட்டுத்தொகையை கண்டறியும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Use a variable to store the sum and add each number inside the loop.",

        hintTamil:
          "கூட்டுத்தொகையை சேமிக்க ஒரு Variable பயன்படுத்தி Loop-க்குள் ஒவ்வொரு எண்ணையும் சேர்க்கவும்.",

        expectedOutput: `Sum = 55`,

        expectedOutputTamil: `கூட்டுத்தொகை = 55`,

        solution: `public class Main {

    public static void main(String[] args) {

        int i = 1;
        int sum = 0;

        do {

            sum = sum + i;
            i++;

        } while (i <= 10);

        System.out.println("Sum = " + sum);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",

        questionEnglish:
          "Write a Java program to find the factorial of a number using a do while loop.",

        questionTamil:
          "Do While Loop-ஐ பயன்படுத்தி ஒரு எண்ணின் Factorial-ஐ கண்டறியும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Multiply the numbers from 1 to the given number using a do while loop.",

        hintTamil:
          "1 முதல் கொடுக்கப்பட்ட எண் வரை உள்ள எண்களை Do While Loop மூலம் பெருக்குங்கள்.",

        expectedOutput: `Factorial = 120`,

        expectedOutputTamil: `Factorial = 120`,

        solution: `public class Main {

    public static void main(String[] args) {

        int number = 5;
        int i = 1;
        int factorial = 1;

        do {

            factorial = factorial * i;
            i++;

        } while (i <= number);

        System.out.println("Factorial = " + factorial);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",

        questionEnglish:
          "Write a Java program to print the squares of numbers from 1 to 5 using a do while loop.",

        questionTamil:
          "Do While Loop-ஐ பயன்படுத்தி 1 முதல் 5 வரை உள்ள எண்களின் Square-ஐ Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Print the square of each number inside the do while loop.",

        hintTamil:
          "Do While Loop-க்குள் ஒவ்வொரு எண்ணின் Square-ஐ Print செய்யுங்கள்.",

        expectedOutput: `1
4
9
16
25`,

        expectedOutputTamil: `1
4
9
16
25`,

        solution: `public class Main {

    public static void main(String[] args) {

        int i = 1;

        do {

            System.out.println(i * i);

            i++;

        } while (i <= 5);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 9,
        title: "Challenge Question 9",

        questionEnglish:
          "Write a Java program to print the multiplication table of a given number using a do while loop.",

        questionTamil:
          "Do While Loop-ஐ பயன்படுத்தி கொடுக்கப்பட்ட எண்ணின் பெருக்கல் வாய்ப்பாட்டை Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Use a counter from 1 to 10 and multiply it by the given number.",

        hintTamil:
          "1 முதல் 10 வரை Counter-ஐ பயன்படுத்தி கொடுக்கப்பட்ட எண்ணுடன் பெருக்குங்கள்.",

        expectedOutput: `7 x 1 = 7
7 x 2 = 14
...
7 x 10 = 70`,

        expectedOutputTamil: `7 x 1 = 7
7 x 2 = 14
...
7 x 10 = 70`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
        completed: false,
      },
      {
        id: 10,
        title: "Challenge Question 10",

        questionEnglish:
          "Write a Java program to reverse the digits of a given number using a do while loop.",

        questionTamil:
          "Do While Loop-ஐ பயன்படுத்தி கொடுக்கப்பட்ட எண்ணின் இலக்கங்களை தலைகீழாக மாற்றி Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Use modulus (%) to get the last digit and division (/) to remove the last digit.",

        hintTamil:
          "கடைசி இலக்கத்தை பெற Modulus (%) மற்றும் அதை நீக்க Division (/) பயன்படுத்துங்கள்.",

        expectedOutput: `Reversed Number = 54321`,

        expectedOutputTamil: `தலைகீழ் எண் = 54321`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
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
          "Write a Java program to print numbers from 1 to 5 using a for loop.",

        questionTamil:
          "For Loop-ஐ பயன்படுத்தி 1 முதல் 5 வரை உள்ள எண்களை Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Initialize the loop variable to 1 and continue until it reaches 5.",

        hintTamil: "Loop Variable-ஐ 1-ல் தொடங்கி 5 வரை இயக்குங்கள்.",

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

        solution: `public class Main {

    public static void main(String[] args) {

        for (int i = 1; i <= 5; i++) {

            System.out.println(i);

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",

        questionEnglish:
          "Write a Java program to print numbers from 5 to 1 using a for loop.",

        questionTamil:
          "For Loop-ஐ பயன்படுத்தி 5 முதல் 1 வரை உள்ள எண்களை Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Start the loop from 5 and decrement the value until it reaches 1.",

        hintTamil:
          "Loop-ஐ 5-ல் தொடங்கி ஒவ்வொரு முறையும் 1-ஆல் குறையச் செய்யுங்கள்.",

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

        solution: `public class Main {

    public static void main(String[] args) {

        for (int i = 5; i >= 1; i--) {

            System.out.println(i);

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",

        questionEnglish:
          "Write a Java program to print all even numbers from 2 to 10 using a for loop.",

        questionTamil:
          "For Loop-ஐ பயன்படுத்தி 2 முதல் 10 வரை உள்ள அனைத்து Even எண்களையும் Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish: "Start from 2 and increment the loop variable by 2.",

        hintTamil: "2-ல் தொடங்கி ஒவ்வொரு முறையும் 2-ஆல் Increment செய்யுங்கள்.",

        expectedOutput: `2
4
6
8
10`,

        expectedOutputTamil: `2
4
6
8
10`,

        solution: `public class Main {

    public static void main(String[] args) {

        for (int i = 2; i <= 10; i += 2) {

            System.out.println(i);

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",

        questionEnglish:
          "Write a Java program to print all odd numbers from 1 to 9 using a for loop.",

        questionTamil:
          "For Loop-ஐ பயன்படுத்தி 1 முதல் 9 வரை உள்ள அனைத்து Odd எண்களையும் Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish: "Start from 1 and increment the loop variable by 2.",

        hintTamil: "1-ல் தொடங்கி ஒவ்வொரு முறையும் 2-ஆல் Increment செய்யுங்கள்.",

        expectedOutput: `1
3
5
7
9`,

        expectedOutputTamil: `1
3
5
7
9`,

        solution: `public class Main {

    public static void main(String[] args) {

        for (int i = 1; i <= 9; i += 2) {

            System.out.println(i);

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",

        questionEnglish:
          "Write a Java program to print the multiplication table of 5 using a for loop.",

        questionTamil:
          "For Loop-ஐ பயன்படுத்தி 5-ன் பெருக்கல் வாய்ப்பாட்டை Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish: "Run the loop from 1 to 10 and multiply each value by 5.",

        hintTamil:
          "Loop-ஐ 1 முதல் 10 வரை இயக்கி ஒவ்வொரு எண்ணையும் 5-ஆல் பெருக்குங்கள்.",

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

        solution: `public class Main {

    public static void main(String[] args) {

        for (int i = 1; i <= 10; i++) {

            System.out.println("5 x " + i + " = " + (5 * i));

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",

        questionEnglish:
          "Write a Java program to print the multiplication table of 5 using a for loop.",

        questionTamil:
          "For Loop-ஐ பயன்படுத்தி 5-ன் பெருக்கல் வாய்ப்பாட்டை Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish: "Run the loop from 1 to 10 and multiply each value by 5.",

        hintTamil:
          "Loop-ஐ 1 முதல் 10 வரை இயக்கி ஒவ்வொரு எண்ணையும் 5-ஆல் பெருக்குங்கள்.",

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

        solution: `public class Main {

    public static void main(String[] args) {

        for (int i = 1; i <= 10; i++) {

            System.out.println("5 x " + i + " = " + (5 * i));

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",

        questionEnglish:
          "Write a Java program to find the factorial of a number using a for loop.",

        questionTamil:
          "For Loop-ஐ பயன்படுத்தி ஒரு எண்ணின் Factorial-ஐ கண்டறியும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Multiply the numbers from 1 to the given number using a for loop.",

        hintTamil:
          "1 முதல் கொடுக்கப்பட்ட எண் வரை உள்ள எண்களை For Loop மூலம் பெருக்குங்கள்.",

        expectedOutput: `Factorial = 120`,

        expectedOutputTamil: `Factorial = 120`,

        solution: `public class Main {

    public static void main(String[] args) {

        int number = 5;
        int factorial = 1;

        for (int i = 1; i <= number; i++) {

            factorial = factorial * i;

        }

        System.out.println("Factorial = " + factorial);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",

        questionEnglish:
          "Write a Java program to print the squares of numbers from 1 to 5 using a for loop.",

        questionTamil:
          "For Loop-ஐ பயன்படுத்தி 1 முதல் 5 வரை உள்ள எண்களின் Square-ஐ Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish: "Print the square of each number inside the for loop.",

        hintTamil:
          "For Loop-க்குள் ஒவ்வொரு எண்ணின் Square-ஐ Print செய்யுங்கள்.",

        expectedOutput: `1
4
9
16
25`,

        expectedOutputTamil: `1
4
9
16
25`,

        solution: `public class Main {

    public static void main(String[] args) {

        for (int i = 1; i <= 5; i++) {

            System.out.println(i * i);

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 9,
        title: "Challenge Question 9",

        questionEnglish:
          "Write a Java program to print the multiplication table of a given number using a for loop.",

        questionTamil:
          "For Loop-ஐ பயன்படுத்தி கொடுக்கப்பட்ட எண்ணின் பெருக்கல் வாய்ப்பாட்டை Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Run the loop from 1 to 10 and multiply each value by the given number.",

        hintTamil:
          "Loop-ஐ 1 முதல் 10 வரை இயக்கி ஒவ்வொரு எண்ணையும் கொடுக்கப்பட்ட எண்ணுடன் பெருக்குங்கள்.",

        expectedOutput: `7 x 1 = 7
7 x 2 = 14
...
7 x 10 = 70`,

        expectedOutputTamil: `7 x 1 = 7
7 x 2 = 14
...
7 x 10 = 70`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
        completed: false,
      },
      {
        id: 10,
        title: "Challenge Question 10",

        questionEnglish:
          "Write a Java program to reverse the digits of a given number using a for loop.",

        questionTamil:
          "For Loop-ஐ பயன்படுத்தி கொடுக்கப்பட்ட எண்ணின் இலக்கங்களை தலைகீழாக மாற்றி Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Use modulus (%) to get the last digit and division (/) to remove the last digit inside the loop.",

        hintTamil:
          "Loop-க்குள் கடைசி இலக்கத்தை பெற Modulus (%) மற்றும் அதை நீக்க Division (/) பயன்படுத்துங்கள்.",

        expectedOutput: `Reversed Number = 54321`,

        expectedOutputTamil: `தலைகீழ் எண் = 54321`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
        completed: false,
      },
    ],
  },
  {
    topicId: 14,
    title: "Nested Loops",

    questions: [
      {
        id: 10,
        title: "Challenge Question 10",

        questionEnglish:
          "Write a Java program to reverse the digits of a given number using a for loop.",

        questionTamil:
          "For Loop-ஐ பயன்படுத்தி கொடுக்கப்பட்ட எண்ணின் இலக்கங்களை தலைகீழாக மாற்றி Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Use modulus (%) to get the last digit and division (/) to remove the last digit inside the loop.",

        hintTamil:
          "Loop-க்குள் கடைசி இலக்கத்தை பெற Modulus (%) மற்றும் அதை நீக்க Division (/) பயன்படுத்துங்கள்.",

        expectedOutput: `Reversed Number = 54321`,

        expectedOutputTamil: `தலைகீழ் எண் = 54321`,

        solution: "",

        challenge: true,
        locked: true,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",

        questionEnglish:
          "Write a Java program to print a 4 × 4 number pattern using nested for loops.",

        questionTamil:
          "Nested For Loop-ஐ பயன்படுத்தி 4 × 4 Number Pattern-ஐ Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish: "Print the number 1 in every column for each row.",

        hintTamil: "ஒவ்வொரு Row-விலும் Column-களில் 1-ஐ Print செய்யுங்கள்.",

        expectedOutput: `1 1 1 1
1 1 1 1
1 1 1 1
1 1 1 1`,

        expectedOutputTamil: `1 1 1 1
1 1 1 1
1 1 1 1
1 1 1 1`,

        solution: `public class Main {

    public static void main(String[] args) {

        for (int i = 1; i <= 4; i++) {

            for (int j = 1; j <= 4; j++) {

                System.out.print("1 ");

            }

            System.out.println();

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",

        questionEnglish:
          "Write a Java program to print the row number in each row using nested for loops.",

        questionTamil:
          "Nested For Loop-ஐ பயன்படுத்தி ஒவ்வொரு Row-விலும் அந்த Row Number-ஐ Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish: "Print the outer loop variable inside the inner loop.",

        hintTamil: "Inner Loop-க்குள் Outer Loop Variable-ஐ Print செய்யுங்கள்.",

        expectedOutput: `1 1 1
2 2 2
3 3 3`,

        expectedOutputTamil: `1 1 1
2 2 2
3 3 3`,

        solution: `public class Main {

    public static void main(String[] args) {

        for (int i = 1; i <= 3; i++) {

            for (int j = 1; j <= 3; j++) {

                System.out.print(i + " ");

            }

            System.out.println();

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",

        questionEnglish:
          "Write a Java program to print the column number in each row using nested for loops.",

        questionTamil:
          "Nested For Loop-ஐ பயன்படுத்தி ஒவ்வொரு Row-விலும் Column Number-ஐ Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish: "Print the inner loop variable.",

        hintTamil: "Inner Loop Variable-ஐ Print செய்யுங்கள்.",

        expectedOutput: `1 2 3
1 2 3
1 2 3`,

        expectedOutputTamil: `1 2 3
1 2 3
1 2 3`,

        solution: `public class Main {

    public static void main(String[] args) {

        for (int i = 1; i <= 3; i++) {

            for (int j = 1; j <= 3; j++) {

                System.out.print(j + " ");

            }

            System.out.println();

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",

        questionEnglish:
          "Write a Java program to print the following pattern using nested for loops.",

        questionTamil:
          "Nested For Loop-ஐ பயன்படுத்தி கீழே கொடுக்கப்பட்ட Pattern-ஐ Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "The inner loop should run only up to the current row number.",

        hintTamil: "Inner Loop தற்போதைய Row Number வரை மட்டுமே இயங்க வேண்டும்.",

        expectedOutput: `*
* *
* * *`,

        expectedOutputTamil: `*
* *
* * *`,

        solution: `public class Main {

    public static void main(String[] args) {

        for (int i = 1; i <= 3; i++) {

            for (int j = 1; j <= i; j++) {

                System.out.print("* ");

            }

            System.out.println();

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",

        questionEnglish:
          "Write a Java program to print the following pattern using nested for loops.",

        questionTamil:
          "Nested For Loop-ஐ பயன்படுத்தி கீழே கொடுக்கப்பட்ட Pattern-ஐ Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "The inner loop should run only up to the current row number.",

        hintTamil: "Inner Loop தற்போதைய Row Number வரை மட்டுமே இயங்க வேண்டும்.",

        expectedOutput: `*
* *
* * *`,

        expectedOutputTamil: `*
* *
* * *`,

        solution: `public class Main {

    public static void main(String[] args) {

        for (int i = 1; i <= 3; i++) {

            for (int j = 1; j <= i; j++) {

                System.out.print("* ");

            }

            System.out.println();

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",

        questionEnglish:
          "Write a Java program to print the following pattern using nested for loops.",

        questionTamil:
          "Nested For Loop-ஐ பயன்படுத்தி கீழே கொடுக்கப்பட்ட Pattern-ஐ Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Print the row number in each column. The inner loop should run up to the current row number.",

        hintTamil:
          "ஒவ்வொரு Column-லும் Row Number-ஐ Print செய்யுங்கள். Inner Loop தற்போதைய Row Number வரை இயங்க வேண்டும்.",

        expectedOutput: `1
2 2
3 3 3
4 4 4 4`,

        expectedOutputTamil: `1
2 2
3 3 3
4 4 4 4`,

        solution: `public class Main {

    public static void main(String[] args) {

        for (int i = 1; i <= 4; i++) {

            for (int j = 1; j <= i; j++) {

                System.out.print(i + " ");

            }

            System.out.println();

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",

        questionEnglish:
          "Write a Java program to print the following inverted star pattern using nested for loops.",

        questionTamil:
          "Nested For Loop-ஐ பயன்படுத்தி கீழே கொடுக்கப்பட்ட தலைகீழ் Star Pattern-ஐ Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Start the outer loop from 4 and decrease it. The inner loop should run up to the current row value.",

        hintTamil:
          "Outer Loop-ஐ 4-ல் தொடங்கி குறையச் செய்யுங்கள். Inner Loop தற்போதைய Row Value வரை இயங்க வேண்டும்.",

        expectedOutput: `* * * *
* * *
* *
*`,

        expectedOutputTamil: `* * * *
* * *
* *
*`,

        solution: `public class Main {

    public static void main(String[] args) {

        for (int i = 4; i >= 1; i--) {

            for (int j = 1; j <= i; j++) {

                System.out.print("* ");

            }

            System.out.println();

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 9,
        title: "Challenge Question 9",

        questionEnglish:
          "Write a Java program to print the following number triangle using nested for loops.",

        questionTamil:
          "Nested For Loop-ஐ பயன்படுத்தி கீழே கொடுக்கப்பட்ட Number Triangle-ஐ Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Use the row number as the upper limit for the inner loop and print the column number.",

        hintTamil:
          "Inner Loop-ன் Upper Limit-ஆக Row Number-ஐ பயன்படுத்தி Column Number-ஐ Print செய்யுங்கள்.",

        expectedOutput: `1
1 2
1 2 3
1 2 3 4
1 2 3 4 5`,

        expectedOutputTamil: `1
1 2
1 2 3
1 2 3 4
1 2 3 4 5`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
        completed: false,
      },
      {
        id: 10,
        title: "Challenge Question 10",

        questionEnglish:
          "Write a Java program to print the following star triangle using nested for loops.",

        questionTamil:
          "Nested For Loop-ஐ பயன்படுத்தி கீழே கொடுக்கப்பட்ட Star Triangle-ஐ Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "The inner loop should print stars up to the current row number.",

        hintTamil:
          "Inner Loop தற்போதைய Row Number வரை Star-களை Print செய்ய வேண்டும்.",

        expectedOutput: `*
* *
* * *
* * * *
* * * * *`,

        expectedOutputTamil: `*
* *
* * *
* * * *
* * * * *`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
        completed: false,
      },
    ],
  },
  {
    topicId: 15,
    title: "Break Statement",

    questions: [
      {
        id: 1,
        title: "Question 1",

        questionEnglish:
          "Write a Java program to print numbers from 1 to 10 using a for loop. Stop the loop when the number becomes 5 using the break statement.",

        questionTamil:
          "For Loop-ஐ பயன்படுத்தி 1 முதல் 10 வரை உள்ள எண்களை Print செய்யுங்கள். எண் 5 ஆனவுடன் Break Statement பயன்படுத்தி Loop-ஐ நிறுத்துங்கள்.",

        hintEnglish:
          "Use an if statement to check whether the number is 5. If true, use break.",

        hintTamil:
          "எண் 5 ஆக உள்ளதா என்று if Statement மூலம் சரிபார்த்து break பயன்படுத்துங்கள்.",

        expectedOutput: `1
2
3
4`,

        expectedOutputTamil: `1
2
3
4`,

        solution: `public class Main {

    public static void main(String[] args) {

        for (int i = 1; i <= 10; i++) {

            if (i == 5) {

                break;

            }

            System.out.println(i);

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",

        questionEnglish:
          "Write a Java program to print numbers from 10 to 1 using a for loop. Stop the loop when the number becomes 6 using the break statement.",

        questionTamil:
          "For Loop-ஐ பயன்படுத்தி 10 முதல் 1 வரை உள்ள எண்களை Print செய்யுங்கள். எண் 6 ஆனவுடன் Break Statement பயன்படுத்தி Loop-ஐ நிறுத்துங்கள்.",

        hintEnglish: "Check whether the number is 6 before printing it.",

        hintTamil:
          "Print செய்வதற்கு முன் எண் 6 ஆக உள்ளதா என்று சரிபார்க்கவும்.",

        expectedOutput: `10
9
8
7`,

        expectedOutputTamil: `10
9
8
7`,

        solution: `public class Main {

    public static void main(String[] args) {

        for (int i = 10; i >= 1; i--) {

            if (i == 6) {

                break;

            }

            System.out.println(i);

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",

        questionEnglish:
          "Write a Java program to print even numbers from 2 to 20. Stop the loop when the number becomes 12 using the break statement.",

        questionTamil:
          "2 முதல் 20 வரை உள்ள Even எண்களை Print செய்யுங்கள். எண் 12 ஆனவுடன் Break Statement பயன்படுத்தி Loop-ஐ நிறுத்துங்கள்.",

        hintEnglish:
          "Increment the loop variable by 2 and use break when the value becomes 12.",

        hintTamil:
          "Loop Variable-ஐ 2-ஆல் Increment செய்து, 12 ஆனவுடன் break பயன்படுத்துங்கள்.",

        expectedOutput: `2
4
6
8
10`,

        expectedOutputTamil: `2
4
6
8
10`,

        solution: `public class Main {

    public static void main(String[] args) {

        for (int i = 2; i <= 20; i += 2) {

            if (i == 12) {

                break;

            }

            System.out.println(i);

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",

        questionEnglish:
          "Write a Java program to print the multiplication table of 5. Stop printing when the multiplier becomes 6 using the break statement.",

        questionTamil:
          "5-ன் பெருக்கல் வாய்ப்பாட்டை Print செய்யுங்கள். Multiplier 6 ஆனவுடன் Break Statement பயன்படுத்தி Loop-ஐ நிறுத்துங்கள்.",

        hintEnglish: "Use break before printing when the multiplier reaches 6.",

        hintTamil:
          "Multiplier 6 ஆனவுடன் Print செய்வதற்கு முன் break பயன்படுத்துங்கள்.",

        expectedOutput: `5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25`,

        expectedOutputTamil: `5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25`,

        solution: `public class Main {

    public static void main(String[] args) {

        for (int i = 1; i <= 10; i++) {

            if (i == 6) {

                break;

            }

            System.out.println("5 x " + i + " = " + (5 * i));

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",

        questionEnglish:
          "Write a Java program to print numbers from 1 to 20 using a while loop. Stop the loop when the number becomes 11 using the break statement.",

        questionTamil:
          "While Loop-ஐ பயன்படுத்தி 1 முதல் 20 வரை உள்ள எண்களை Print செய்யுங்கள். எண் 11 ஆனவுடன் Break Statement பயன்படுத்தி Loop-ஐ நிறுத்துங்கள்.",

        hintEnglish:
          "Use an if statement inside the while loop to check whether the number is 11.",

        hintTamil:
          "While Loop-க்குள் if Statement பயன்படுத்தி எண் 11 ஆக உள்ளதா என்று சரிபார்க்கவும்.",

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

        solution: `public class Main {

    public static void main(String[] args) {

        int i = 1;

        while (i <= 20) {

            if (i == 11) {

                break;

            }

            System.out.println(i);

            i++;

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",

        questionEnglish:
          "Write a Java program to print numbers from 1 to 20 using a while loop. Stop the loop when the number becomes 11 using the break statement.",

        questionTamil:
          "While Loop-ஐ பயன்படுத்தி 1 முதல் 20 வரை உள்ள எண்களை Print செய்யுங்கள். எண் 11 ஆனவுடன் Break Statement பயன்படுத்தி Loop-ஐ நிறுத்துங்கள்.",

        hintEnglish:
          "Use an if statement inside the while loop to check whether the number is 11.",

        hintTamil:
          "While Loop-க்குள் if Statement பயன்படுத்தி எண் 11 ஆக உள்ளதா என்று சரிபார்க்கவும்.",

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

        solution: `public class Main {

    public static void main(String[] args) {

        int i = 1;

        while (i <= 20) {

            if (i == 11) {

                break;

            }

            System.out.println(i);

            i++;

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",

        questionEnglish:
          "Write a Java program to print numbers from 1 to 20 using a do while loop. Stop the loop when the number becomes 11 using the break statement.",

        questionTamil:
          "Do While Loop-ஐ பயன்படுத்தி 1 முதல் 20 வரை உள்ள எண்களை Print செய்யுங்கள். எண் 11 ஆனவுடன் Break Statement பயன்படுத்தி Loop-ஐ நிறுத்துங்கள்.",

        hintEnglish:
          "Use an if statement inside the do while loop to check whether the number is 11.",

        hintTamil:
          "Do While Loop-க்குள் if Statement பயன்படுத்தி எண் 11 ஆக உள்ளதா என்று சரிபார்க்கவும்.",

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

        solution: `public class Main {

    public static void main(String[] args) {

        int i = 1;

        do {

            if (i == 11) {

                break;

            }

            System.out.println(i);

            i++;

        } while (i <= 20);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",

        questionEnglish:
          "Write a Java program to search for the number 7 in an array. Stop searching when the number is found using the break statement.",

        questionTamil:
          "ஒரு Array-ல் 7 என்ற எண்ணை தேடுங்கள். அந்த எண் கிடைத்தவுடன் Break Statement பயன்படுத்தி Loop-ஐ நிறுத்துங்கள்.",

        hintEnglish:
          "Traverse the array using a loop. If the element is 7, print a message and use break.",

        hintTamil:
          "Loop மூலம் Array-ஐ Traverse செய்து, 7 கிடைத்தவுடன் Message-ஐ Print செய்து break பயன்படுத்துங்கள்.",

        expectedOutput: `Number Found`,

        expectedOutputTamil: `எண் கண்டுபிடிக்கப்பட்டது`,

        solution: `public class Main {

    public static void main(String[] args) {

        int[] numbers = {2, 4, 7, 9, 11};

        for (int i = 0; i < numbers.length; i++) {

            if (numbers[i] == 7) {

                System.out.println("Number Found");

                break;

            }

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 9,
        title: "Challenge Question 9",

        questionEnglish:
          "Write a Java program to search for a given number in an array. Stop searching immediately when the number is found using the break statement.",

        questionTamil:
          "ஒரு Array-ல் கொடுக்கப்பட்ட எண்ணை தேடுங்கள். அந்த எண் கிடைத்தவுடன் Break Statement பயன்படுத்தி Loop-ஐ உடனடியாக நிறுத்துங்கள்.",

        hintEnglish:
          "Use a loop to traverse the array and compare each element with the given number. Use break when a match is found.",

        hintTamil:
          "Loop மூலம் Array-ஐ Traverse செய்து ஒவ்வொரு Element-ஐயும் கொடுக்கப்பட்ட எண்ணுடன் ஒப்பிடுங்கள். பொருந்தினால் break பயன்படுத்துங்கள்.",

        expectedOutput: `Number Found`,

        expectedOutputTamil: `எண் கண்டுபிடிக்கப்பட்டது`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
        completed: false,
      },
      {
        id: 10,
        title: "Challenge Question 10",

        questionEnglish:
          "Write a Java program to display a menu repeatedly until the user selects the Exit option using the break statement.",

        questionTamil:
          "Break Statement-ஐ பயன்படுத்தி பயனர் Exit Option-ஐ தேர்வு செய்யும் வரை Menu-ஐ மீண்டும் மீண்டும் காட்டும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Use an infinite loop and stop it when the Exit option is selected using break.",

        hintTamil:
          "Infinite Loop-ஐ பயன்படுத்தி, Exit Option தேர்வு செய்யப்பட்டவுடன் break மூலம் Loop-ஐ நிறுத்துங்கள்.",

        expectedOutput: `Menu Displayed
Exit Selected`,

        expectedOutputTamil: `மெனு காட்டப்பட்டது
வெளியேறும் விருப்பம் தேர்வு செய்யப்பட்டது`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
        completed: false,
      },
    ],
  },
  {
    topicId: 16,
    title: "Continue Statement",

    questions: [
      {
        id: 1,
        title: "Question 1",

        questionEnglish:
          "Write a Java program to print numbers from 1 to 10 using a for loop. Skip the number 5 using the continue statement.",

        questionTamil:
          "For Loop-ஐ பயன்படுத்தி 1 முதல் 10 வரை உள்ள எண்களை Print செய்யுங்கள். Continue Statement-ஐ பயன்படுத்தி 5 என்ற எண்ணை Skip செய்யுங்கள்.",

        hintEnglish:
          "Use an if statement to check whether the number is 5. If true, use continue.",

        hintTamil:
          "எண் 5 ஆக உள்ளதா என்று if Statement மூலம் சரிபார்த்து continue பயன்படுத்துங்கள்.",

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

        solution: `public class Main {

    public static void main(String[] args) {

        for (int i = 1; i <= 10; i++) {

            if (i == 5) {

                continue;

            }

            System.out.println(i);

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",

        questionEnglish:
          "Write a Java program to print numbers from 1 to 20. Skip all even numbers using the continue statement.",

        questionTamil:
          "1 முதல் 20 வரை உள்ள எண்களை Print செய்யுங்கள். Continue Statement-ஐ பயன்படுத்தி அனைத்து Even எண்களையும் Skip செய்யுங்கள்.",

        hintEnglish:
          "Check whether the number is divisible by 2. If true, use continue.",

        hintTamil:
          "எண் 2-ஆல் வகுபடுகிறதா என்று சரிபார்த்து continue பயன்படுத்துங்கள்.",

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

        solution: `public class Main {

    public static void main(String[] args) {

        for (int i = 1; i <= 20; i++) {

            if (i % 2 == 0) {

                continue;

            }

            System.out.println(i);

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",

        questionEnglish:
          "Write a Java program to print numbers from 1 to 20. Skip all odd numbers using the continue statement.",

        questionTamil:
          "1 முதல் 20 வரை உள்ள எண்களை Print செய்யுங்கள். Continue Statement-ஐ பயன்படுத்தி அனைத்து Odd எண்களையும் Skip செய்யுங்கள்.",

        hintEnglish:
          "Check whether the number is not divisible by 2. If true, use continue.",

        hintTamil:
          "எண் 2-ஆல் வகுபடவில்லையா என்று சரிபார்த்து continue பயன்படுத்துங்கள்.",

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

        solution: `public class Main {

    public static void main(String[] args) {

        for (int i = 1; i <= 20; i++) {

            if (i % 2 != 0) {

                continue;

            }

            System.out.println(i);

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",

        questionEnglish:
          "Write a Java program to print numbers from 1 to 10 using a while loop. Skip the number 5 using the continue statement.",

        questionTamil:
          "While Loop-ஐ பயன்படுத்தி 1 முதல் 10 வரை உள்ள எண்களை Print செய்யுங்கள். Continue Statement-ஐ பயன்படுத்தி 5 என்ற எண்ணை Skip செய்யுங்கள்.",

        hintEnglish:
          "Remember to increment the variable before using continue to avoid an infinite loop.",

        hintTamil:
          "Infinite Loop வராமல் இருக்க continue பயன்படுத்துவதற்கு முன் Variable-ஐ Increment செய்ய நினைவில் கொள்ளுங்கள்.",

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

        solution: `public class Main {

    public static void main(String[] args) {

        int i = 1;

        while (i <= 10) {

            if (i == 5) {

                i++;
                continue;

            }

            System.out.println(i);
            i++;

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",

        questionEnglish:
          "Write a Java program to print the multiplication table of 5. Skip the multiplication by 6 using the continue statement.",

        questionTamil:
          "5-ன் பெருக்கல் வாய்ப்பாட்டை Print செய்யுங்கள். Continue Statement-ஐ பயன்படுத்தி 6-ஆல் பெருக்கப்படுவதை Skip செய்யுங்கள்.",

        hintEnglish: "When the multiplier becomes 6, use continue.",

        hintTamil: "Multiplier 6 ஆனவுடன் continue பயன்படுத்துங்கள்.",

        expectedOutput: `5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50`,

        expectedOutputTamil: `5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50`,

        solution: `public class Main {

    public static void main(String[] args) {

        for (int i = 1; i <= 10; i++) {

            if (i == 6) {

                continue;

            }

            System.out.println("5 x " + i + " = " + (5 * i));

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 6,
        title: "Question 6",

        questionEnglish:
          "Write a Java program to print numbers from 1 to 30. Skip all numbers that are divisible by 3 using the continue statement.",

        questionTamil:
          "1 முதல் 30 வரை உள்ள எண்களை Print செய்யுங்கள். 3-ஆல் வகுபடும் அனைத்து எண்களையும் Continue Statement-ஐ பயன்படுத்தி Skip செய்யுங்கள்.",

        hintEnglish:
          "Use the modulus (%) operator to check whether a number is divisible by 3.",

        hintTamil:
          "ஒரு எண் 3-ஆல் வகுபடுகிறதா என்பதை Modulus (%) Operator மூலம் சரிபார்க்கவும்.",

        expectedOutput: `1
2
4
5
7
8
10
11
13
14
16
17
19
20
22
23
25
26
28
29`,

        expectedOutputTamil: `1
2
4
5
7
8
10
11
13
14
16
17
19
20
22
23
25
26
28
29`,

        solution: `public class Main {

    public static void main(String[] args) {

        for (int i = 1; i <= 30; i++) {

            if (i % 3 == 0) {

                continue;

            }

            System.out.println(i);

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",

        questionEnglish:
          "Write a Java program to print numbers from 1 to 15 using a do while loop. Skip the number 8 using the continue statement.",

        questionTamil:
          "Do While Loop-ஐ பயன்படுத்தி 1 முதல் 15 வரை உள்ள எண்களை Print செய்யுங்கள். Continue Statement-ஐ பயன்படுத்தி 8 என்ற எண்ணை Skip செய்யுங்கள்.",

        hintEnglish: "Increment the variable before using continue.",

        hintTamil:
          "Continue பயன்படுத்துவதற்கு முன் Variable-ஐ Increment செய்யுங்கள்.",

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

        solution: `public class Main {

    public static void main(String[] args) {

        int i = 1;

        do {

            if (i == 8) {

                i++;
                continue;

            }

            System.out.println(i);

            i++;

        } while (i <= 15);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",

        questionEnglish:
          "Write a Java program to print all positive numbers from an array. Skip the negative numbers using the continue statement.",

        questionTamil:
          "ஒரு Array-ல் உள்ள அனைத்து Positive எண்களையும் Print செய்யுங்கள். Negative எண்களை Continue Statement-ஐ பயன்படுத்தி Skip செய்யுங்கள்.",

        hintEnglish:
          "Traverse the array. If an element is negative, use continue.",

        hintTamil:
          "Array-ஐ Traverse செய்யுங்கள். ஒரு Element Negative ஆக இருந்தால் continue பயன்படுத்துங்கள்.",

        expectedOutput: `5
8
12
7`,

        expectedOutputTamil: `5
8
12
7`,

        solution: `public class Main {

    public static void main(String[] args) {

        int[] numbers = {5, -2, 8, -6, 12, -1, 7};

        for (int i = 0; i < numbers.length; i++) {

            if (numbers[i] < 0) {

                continue;

            }

            System.out.println(numbers[i]);

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 9,
        title: "Challenge Question 9",

        questionEnglish:
          "Write a Java program to print all odd numbers from 1 to 50. Skip all even numbers using the continue statement.",

        questionTamil:
          "1 முதல் 50 வரை உள்ள அனைத்து Odd எண்களையும் Print செய்யுங்கள். அனைத்து Even எண்களையும் Continue Statement-ஐ பயன்படுத்தி Skip செய்யுங்கள்.",

        hintEnglish:
          "Use the modulus (%) operator to identify even numbers and skip them.",

        hintTamil:
          "Even எண்களை கண்டறிய Modulus (%) Operator-ஐ பயன்படுத்தி continue செய்யுங்கள்.",

        expectedOutput: `1
3
5
...
47
49`,

        expectedOutputTamil: `1
3
5
...
47
49`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
        completed: false,
      },
      {
        id: 10,
        title: "Challenge Question 10",

        questionEnglish:
          "Write a Java program to print all vowels from a string. Skip all consonants using the continue statement.",

        questionTamil:
          "ஒரு String-ல் உள்ள அனைத்து உயிரெழுத்துகளையும் (Vowels) Print செய்யுங்கள். மெய்யெழுத்துகளை (Consonants) Continue Statement-ஐ பயன்படுத்தி Skip செய்யுங்கள்.",

        hintEnglish:
          "Traverse each character of the string. If the character is not a vowel, use continue.",

        hintTamil:
          "String-ன் ஒவ்வொரு Character-ஐ Traverse செய்யுங்கள். அது Vowel இல்லையெனில் continue பயன்படுத்துங்கள்.",

        expectedOutput: `a
e
i
o
u`,

        expectedOutputTamil: `a
e
i
o
u`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
        completed: false,
      },
    ],
  },
  {
    topicId: 17,
    title: "One-Dimensional Array",

    questions: [
      {
        id: 1,
        title: "Question 1",

        questionEnglish:
          "Write a Java program to create an integer array with 5 elements and print the first element.",

        questionTamil:
          "5 Integer Elements கொண்ட ஒரு Array-ஐ உருவாக்கி, அதன் முதல் Element-ஐ Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create an array using curly braces {} and access the first element using index 0.",

        hintTamil:
          "{} பயன்படுத்தி Array-ஐ உருவாக்கி, முதல் Element-ஐ Index 0 மூலம் அணுகுங்கள்.",

        expectedOutput: `10`,

        expectedOutputTamil: `10`,

        solution: `public class Main {

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30, 40, 50};

        System.out.println(numbers[0]);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",

        questionEnglish:
          "Write a Java program to create an integer array with 5 elements and print the last element.",

        questionTamil:
          "5 Integer Elements கொண்ட ஒரு Array-ஐ உருவாக்கி, அதன் கடைசி Element-ஐ Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish: "The last element of a 5-element array is at index 4.",

        hintTamil: "5 Elements கொண்ட Array-இன் கடைசி Element-ன் Index 4 ஆகும்.",

        expectedOutput: `50`,

        expectedOutputTamil: `50`,

        solution: `public class Main {

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30, 40, 50};

        System.out.println(numbers[4]);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",

        questionEnglish:
          "Write a Java program to create an integer array with 5 elements and print all the elements using a for loop.",

        questionTamil:
          "5 Integer Elements கொண்ட ஒரு Array-ஐ உருவாக்கி, அனைத்து Elements-ஐயும் For Loop-ஐ பயன்படுத்தி Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish: "Use a for loop from index 0 to array length - 1.",

        hintTamil:
          "Index 0 முதல் Array Length - 1 வரை For Loop-ஐ பயன்படுத்துங்கள்.",

        expectedOutput: `10
20
30
40
50`,

        expectedOutputTamil: `10
20
30
40
50`,

        solution: `public class Main {

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30, 40, 50};

        for (int i = 0; i < numbers.length; i++) {

            System.out.println(numbers[i]);

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",

        questionEnglish:
          "Write a Java program to change the third element of an integer array to 100 and print all the elements.",

        questionTamil:
          "ஒரு Integer Array-இன் மூன்றாவது Element-ஐ 100 ஆக மாற்றி, அனைத்து Elements-ஐயும் Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "The third element is at index 2. Update it before printing the array.",

        hintTamil:
          "மூன்றாவது Element-ன் Index 2 ஆகும். அதை மாற்றிய பிறகு Array-ஐ Print செய்யுங்கள்.",

        expectedOutput: `10
20
100
40
50`,

        expectedOutputTamil: `10
20
100
40
50`,

        solution: `public class Main {

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30, 40, 50};

        numbers[2] = 100;

        for (int i = 0; i < numbers.length; i++) {

            System.out.println(numbers[i]);

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",

        questionEnglish:
          "Write a Java program to find and print the sum of all elements in an integer array.",

        questionTamil:
          "ஒரு Integer Array-ல் உள்ள அனைத்து Elements-இன் கூட்டுத்தொகையை கண்டறிந்து Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Use a variable to store the sum and add each array element inside a for loop.",

        hintTamil:
          "கூட்டுத்தொகையை சேமிக்க ஒரு Variable பயன்படுத்தி, For Loop-க்குள் ஒவ்வொரு Array Element-ஐயும் சேர்க்கவும்.",

        expectedOutput: `Sum = 150`,

        expectedOutputTamil: `கூட்டுத்தொகை = 150`,

        solution: `public class Main {

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30, 40, 50};

        int sum = 0;

        for (int i = 0; i < numbers.length; i++) {

            sum = sum + numbers[i];

        }

        System.out.println("Sum = " + sum);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 6,
        title: "Question 6",

        questionEnglish:
          "Write a Java program to find and print the largest element in an integer array.",

        questionTamil:
          "ஒரு Integer Array-ல் உள்ள மிகப்பெரிய Element-ஐ கண்டறிந்து Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Assume the first element is the largest. Compare it with the remaining elements using a for loop.",

        hintTamil:
          "முதல் Element-ஐ மிகப்பெரியது என்று எடுத்துக்கொண்டு, மீதமுள்ள Elements-உடன் For Loop மூலம் ஒப்பிடுங்கள்.",

        expectedOutput: `Largest Element = 50`,

        expectedOutputTamil: `மிகப்பெரிய Element = 50`,

        solution: `public class Main {

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30, 40, 50};

        int largest = numbers[0];

        for (int i = 1; i < numbers.length; i++) {

            if (numbers[i] > largest) {

                largest = numbers[i];

            }

        }

        System.out.println("Largest Element = " + largest);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",

        questionEnglish:
          "Write a Java program to find and print the smallest element in an integer array.",

        questionTamil:
          "ஒரு Integer Array-ல் உள்ள மிகச்சிறிய Element-ஐ கண்டறிந்து Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Assume the first element is the smallest. Compare it with the remaining elements using a for loop.",

        hintTamil:
          "முதல் Element-ஐ மிகச்சிறியது என்று எடுத்துக்கொண்டு, மீதமுள்ள Elements-உடன் For Loop மூலம் ஒப்பிடுங்கள்.",

        expectedOutput: `Smallest Element = 10`,

        expectedOutputTamil: `மிகச்சிறிய Element = 10`,

        solution: `public class Main {

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30, 40, 50};

        int smallest = numbers[0];

        for (int i = 1; i < numbers.length; i++) {

            if (numbers[i] < smallest) {

                smallest = numbers[i];

            }

        }

        System.out.println("Smallest Element = " + smallest);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",

        questionEnglish:
          "Write a Java program to find and print the average of all elements in an integer array.",

        questionTamil:
          "ஒரு Integer Array-ல் உள்ள அனைத்து Elements-இன் சராசரியை (Average) கண்டறிந்து Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "First find the sum of all elements, then divide it by the number of elements.",

        hintTamil:
          "முதலில் அனைத்து Elements-இன் கூட்டுத்தொகையை கண்டறிந்து, அதை Elements-இன் எண்ணிக்கையால் வகுக்கவும்.",

        expectedOutput: `Average = 30.0`,

        expectedOutputTamil: `சராசரி = 30.0`,

        solution: `public class Main {

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30, 40, 50};

        int sum = 0;

        for (int i = 0; i < numbers.length; i++) {

            sum = sum + numbers[i];

        }

        double average = (double) sum / numbers.length;

        System.out.println("Average = " + average);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 9,
        title: "Challenge Question 9",

        questionEnglish:
          "Write a Java program to search for a given element in an integer array and print 'Element Found' if it exists.",

        questionTamil:
          "ஒரு Integer Array-ல் கொடுக்கப்பட்ட Element-ஐ தேடி, அது இருந்தால் 'Element Found' என்று Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Traverse the array using a for loop and compare each element with the given value.",

        hintTamil:
          "For Loop மூலம் Array-ஐ Traverse செய்து ஒவ்வொரு Element-ஐயும் கொடுக்கப்பட்ட மதிப்புடன் ஒப்பிடுங்கள்.",

        expectedOutput: `Element Found`,

        expectedOutputTamil: `Element கண்டுபிடிக்கப்பட்டது`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
        completed: false,
      },
      {
        id: 10,
        title: "Challenge Question 10",

        questionEnglish:
          "Write a Java program to print the elements of an integer array in reverse order.",

        questionTamil:
          "ஒரு Integer Array-ல் உள்ள அனைத்து Elements-ஐ தலைகீழ் வரிசையில் (Reverse Order) Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Start the loop from the last index and move towards index 0.",

        hintTamil:
          "Loop-ஐ கடைசி Index-ல் இருந்து தொடங்கி, Index 0 வரை பின்னோக்கி இயக்குங்கள்.",

        expectedOutput: `50
40
30
20
10`,

        expectedOutputTamil: `50
40
30
20
10`,

        solution: "NO SOLTUION!!!",

        challenge: true,
        locked: true,
        completed: false,
      },
    ],
  },
  {
    topicId: 18,
    title: "Two-Dimensional Array",

    questions: [
      {
        id: 1,
        title: "Question 1",

        questionEnglish:
          "Write a Java program to create a 2 × 2 integer array and print the first element.",

        questionTamil:
          "2 × 2 Integer Array-ஐ உருவாக்கி, அதன் முதல் Element-ஐ Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create a 2D array using nested curly braces and access the first element using index [0][0].",

        hintTamil:
          "Nested Curly Braces பயன்படுத்தி 2D Array-ஐ உருவாக்கி, முதல் Element-ஐ [0][0] Index மூலம் அணுகுங்கள்.",

        expectedOutput: `10`,

        expectedOutputTamil: `10`,

        solution: `public class Main {

    public static void main(String[] args) {

        int[][] numbers = {
            {10, 20},
            {30, 40}
        };

        System.out.println(numbers[0][0]);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",

        questionEnglish:
          "Write a Java program to create a 2 × 2 integer array and print the last element.",

        questionTamil:
          "2 × 2 Integer Array-ஐ உருவாக்கி, அதன் கடைசி Element-ஐ Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish: "The last element of a 2 × 2 array is at index [1][1].",

        hintTamil: "2 × 2 Array-இன் கடைசி Element-ன் Index [1][1] ஆகும்.",

        expectedOutput: `40`,

        expectedOutputTamil: `40`,

        solution: `public class Main {

    public static void main(String[] args) {

        int[][] numbers = {
            {10, 20},
            {30, 40}
        };

        System.out.println(numbers[1][1]);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",

        questionEnglish:
          "Write a Java program to print all elements of a 2 × 2 integer array using nested for loops.",

        questionTamil:
          "Nested For Loop-ஐ பயன்படுத்தி 2 × 2 Integer Array-ல் உள்ள அனைத்து Elements-ஐ Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish: "Use one loop for rows and another loop for columns.",

        hintTamil:
          "ஒரு Loop-ஐ Row-க்கும் மற்றொரு Loop-ஐ Column-க்கும் பயன்படுத்துங்கள்.",

        expectedOutput: `10 20
30 40`,

        expectedOutputTamil: `10 20
30 40`,

        solution: `public class Main {

    public static void main(String[] args) {

        int[][] numbers = {
            {10, 20},
            {30, 40}
        };

        for (int i = 0; i < numbers.length; i++) {

            for (int j = 0; j < numbers[i].length; j++) {

                System.out.print(numbers[i][j] + " ");

            }

            System.out.println();

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",

        questionEnglish:
          "Write a Java program to change the element at index [1][0] to 100 and print the entire 2 × 2 array.",

        questionTamil:
          "2 × 2 Integer Array-ல் [1][0] Index-ல் உள்ள Element-ஐ 100 ஆக மாற்றி, முழு Array-ஐ Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Update the element before printing the array using nested loops.",

        hintTamil:
          "Nested Loop மூலம் Array-ஐ Print செய்வதற்கு முன் Element-ஐ மாற்றுங்கள்.",

        expectedOutput: `10 20
100 40`,

        expectedOutputTamil: `10 20
100 40`,

        solution: `public class Main {

    public static void main(String[] args) {

        int[][] numbers = {
            {10, 20},
            {30, 40}
        };

        numbers[1][0] = 100;

        for (int i = 0; i < numbers.length; i++) {

            for (int j = 0; j < numbers[i].length; j++) {

                System.out.print(numbers[i][j] + " ");

            }

            System.out.println();

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",

        questionEnglish:
          "Write a Java program to find and print the sum of all elements in a 2 × 2 integer array.",

        questionTamil:
          "2 × 2 Integer Array-ல் உள்ள அனைத்து Elements-இன் கூட்டுத்தொகையை கண்டறிந்து Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Use nested for loops to traverse the array and add each element to a sum variable.",

        hintTamil:
          "Nested For Loop-ஐ பயன்படுத்தி அனைத்து Elements-ஐ Traverse செய்து Sum Variable-ல் சேர்க்கவும்.",

        expectedOutput: `Sum = 100`,

        expectedOutputTamil: `கூட்டுத்தொகை = 100`,

        solution: `public class Main {

    public static void main(String[] args) {

        int[][] numbers = {
            {10, 20},
            {30, 40}
        };

        int sum = 0;

        for (int i = 0; i < numbers.length; i++) {

            for (int j = 0; j < numbers[i].length; j++) {

                sum = sum + numbers[i][j];

            }

        }

        System.out.println("Sum = " + sum);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 6,
        title: "Question 6",

        questionEnglish:
          "Write a Java program to find and print the largest element in a 2 × 2 integer array.",

        questionTamil:
          "2 × 2 Integer Array-ல் உள்ள மிகப்பெரிய Element-ஐ கண்டறிந்து Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Assume the first element is the largest. Compare it with every element using nested for loops.",

        hintTamil:
          "முதல் Element-ஐ மிகப்பெரியது என்று எடுத்துக்கொண்டு, Nested For Loop மூலம் அனைத்து Elements-உடனும் ஒப்பிடுங்கள்.",

        expectedOutput: `Largest Element = 40`,

        expectedOutputTamil: `மிகப்பெரிய Element = 40`,

        solution: `public class Main {

    public static void main(String[] args) {

        int[][] numbers = {
            {10, 20},
            {30, 40}
        };

        int largest = numbers[0][0];

        for (int i = 0; i < numbers.length; i++) {

            for (int j = 0; j < numbers[i].length; j++) {

                if (numbers[i][j] > largest) {

                    largest = numbers[i][j];

                }

            }

        }

        System.out.println("Largest Element = " + largest);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",

        questionEnglish:
          "Write a Java program to find and print the smallest element in a 2 × 2 integer array.",

        questionTamil:
          "2 × 2 Integer Array-ல் உள்ள மிகச்சிறிய Element-ஐ கண்டறிந்து Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Assume the first element is the smallest. Compare it with every element using nested for loops.",

        hintTamil:
          "முதல் Element-ஐ மிகச்சிறியது என்று எடுத்துக்கொண்டு, Nested For Loop மூலம் அனைத்து Elements-உடனும் ஒப்பிடுங்கள்.",

        expectedOutput: `Smallest Element = 10`,

        expectedOutputTamil: `மிகச்சிறிய Element = 10`,

        solution: `public class Main {

    public static void main(String[] args) {

        int[][] numbers = {
            {10, 20},
            {30, 40}
        };

        int smallest = numbers[0][0];

        for (int i = 0; i < numbers.length; i++) {

            for (int j = 0; j < numbers[i].length; j++) {

                if (numbers[i][j] < smallest) {

                    smallest = numbers[i][j];

                }

            }

        }

        System.out.println("Smallest Element = " + smallest);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",

        questionEnglish:
          "Write a Java program to find and print the average of all elements in a 2 × 2 integer array.",

        questionTamil:
          "2 × 2 Integer Array-ல் உள்ள அனைத்து Elements-இன் சராசரியை (Average) கண்டறிந்து Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Find the sum of all elements and divide it by the total number of elements.",

        hintTamil:
          "அனைத்து Elements-இன் கூட்டுத்தொகையை கண்டறிந்து, மொத்த Elements எண்ணிக்கையால் வகுக்கவும்.",

        expectedOutput: `Average = 25.0`,

        expectedOutputTamil: `சராசரி = 25.0`,

        solution: `public class Main {

    public static void main(String[] args) {

        int[][] numbers = {
            {10, 20},
            {30, 40}
        };

        int sum = 0;
        int count = 0;

        for (int i = 0; i < numbers.length; i++) {

            for (int j = 0; j < numbers[i].length; j++) {

                sum = sum + numbers[i][j];
                count++;

            }

        }

        double average = (double) sum / count;

        System.out.println("Average = " + average);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 9,
        title: "Challenge Question 9",

        questionEnglish:
          "Write a Java program to find and print the sum of each row in a 2 × 2 integer array.",

        questionTamil:
          "2 × 2 Integer Array-ல் உள்ள ஒவ்வொரு Row-வின் கூட்டுத்தொகையையும் கண்டறிந்து Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Use the outer loop for rows. Reset the sum variable for each row.",

        hintTamil:
          "Outer Loop-ஐ Row-களுக்குப் பயன்படுத்துங்கள். ஒவ்வொரு Row-க்கும் Sum Variable-ஐ மீண்டும் 0 ஆக மாற்றுங்கள்.",

        expectedOutput: `Row 1 Sum = 30
Row 2 Sum = 70`,

        expectedOutputTamil: `Row 1 கூட்டுத்தொகை = 30
Row 2 கூட்டுத்தொகை = 70`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
        completed: false,
      },
      {
        id: 10,
        title: "Challenge Question 10",

        questionEnglish:
          "Write a Java program to find and print the sum of each column in a 2 × 2 integer array.",

        questionTamil:
          "2 × 2 Integer Array-ல் உள்ள ஒவ்வொரு Column-ன் கூட்டுத்தொகையையும் கண்டறிந்து Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Use the outer loop for columns and the inner loop for rows.",

        hintTamil:
          "Outer Loop-ஐ Column-களுக்கும் Inner Loop-ஐ Row-களுக்கும் பயன்படுத்துங்கள்.",

        expectedOutput: `Column 1 Sum = 40
Column 2 Sum = 60`,

        expectedOutputTamil: `Column 1 கூட்டுத்தொகை = 40
Column 2 கூட்டுத்தொகை = 60`,

        solution: "",

        challenge: true,
        locked: true,
        completed: false,
      },
    ],
  },
  {
    topicId: 19,
    title: "Array Operations",

    questions: [
      {
        id: 1,
        title: "Question 1",

        questionEnglish:
          "Write a Java program to count the total number of elements in an integer array.",

        questionTamil:
          "ஒரு Integer Array-ல் உள்ள மொத்த Elements-இன் எண்ணிக்கையை கண்டறிந்து Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish: "Use the length property of the array.",

        hintTamil: "Array-ன் length Property-ஐ பயன்படுத்துங்கள்.",

        expectedOutput: `Total Elements = 5`,

        expectedOutputTamil: `மொத்த Elements = 5`,

        solution: `public class Main {

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30, 40, 50};

        System.out.println("Total Elements = " + numbers.length);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",

        questionEnglish:
          "Write a Java program to copy all elements from one integer array to another array.",

        questionTamil:
          "ஒரு Integer Array-ல் உள்ள அனைத்து Elements-ஐ மற்றொரு Array-க்கு Copy செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish: "Use a for loop to copy each element one by one.",

        hintTamil:
          "ஒவ்வொரு Element-ஐயும் For Loop மூலம் ஒன்றன்பின் ஒன்றாக Copy செய்யுங்கள்.",

        expectedOutput: `10
20
30
40
50`,

        expectedOutputTamil: `10
20
30
40
50`,

        solution: `public class Main {

    public static void main(String[] args) {

        int[] source = {10, 20, 30, 40, 50};
        int[] destination = new int[source.length];

        for (int i = 0; i < source.length; i++) {

            destination[i] = source[i];

        }

        for (int i = 0; i < destination.length; i++) {

            System.out.println(destination[i]);

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",

        questionEnglish:
          "Write a Java program to print the elements of an integer array in reverse order.",

        questionTamil:
          "ஒரு Integer Array-ல் உள்ள அனைத்து Elements-ஐ தலைகீழ் வரிசையில் (Reverse Order) Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Start the loop from the last index and move towards index 0.",

        hintTamil:
          "Loop-ஐ கடைசி Index-ல் இருந்து தொடங்கி Index 0 வரை பின்னோக்கி இயக்குங்கள்.",

        expectedOutput: `50
40
30
20
10`,

        expectedOutputTamil: `50
40
30
20
10`,

        solution: `public class Main {

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30, 40, 50};

        for (int i = numbers.length - 1; i >= 0; i--) {

            System.out.println(numbers[i]);

        }

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",

        questionEnglish:
          "Write a Java program to count the even numbers in an integer array.",

        questionTamil:
          "ஒரு Integer Array-ல் உள்ள Even எண்களின் எண்ணிக்கையை கண்டறிந்து Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Traverse the array and check whether each element is divisible by 2.",

        hintTamil:
          "Array-ஐ Traverse செய்து ஒவ்வொரு Element-மும் 2-ஆல் வகுபடுகிறதா என்று சரிபார்க்கவும்.",

        expectedOutput: `Even Count = 2`,

        expectedOutputTamil: `Even Count = 2`,

        solution: `public class Main {

    public static void main(String[] args) {

        int[] numbers = {10, 15, 20, 25, 31};

        int count = 0;

        for (int i = 0; i < numbers.length; i++) {

            if (numbers[i] % 2 == 0) {

                count++;

            }

        }

        System.out.println("Even Count = " + count);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",

        questionEnglish:
          "Write a Java program to count the odd numbers in an integer array.",

        questionTamil:
          "ஒரு Integer Array-ல் உள்ள Odd எண்களின் எண்ணிக்கையை கண்டறிந்து Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Traverse the array and check whether each element is not divisible by 2.",

        hintTamil:
          "Array-ஐ Traverse செய்து ஒவ்வொரு Element-மும் 2-ஆல் வகுபடவில்லையா என்று சரிபார்க்கவும்.",

        expectedOutput: `Odd Count = 3`,

        expectedOutputTamil: `Odd Count = 3`,

        solution: `public class Main {

    public static void main(String[] args) {

        int[] numbers = {10, 15, 20, 25, 31};

        int count = 0;

        for (int i = 0; i < numbers.length; i++) {

            if (numbers[i] % 2 != 0) {

                count++;

            }

        }

        System.out.println("Odd Count = " + count);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 6,
        title: "Question 6",

        questionEnglish:
          "Write a Java program to find and print the second largest element in an integer array.",

        questionTamil:
          "ஒரு Integer Array-ல் உள்ள இரண்டாவது மிகப்பெரிய Element-ஐ கண்டறிந்து Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "First find the largest element, then find the largest element smaller than it.",

        hintTamil:
          "முதலில் மிகப்பெரிய Element-ஐ கண்டறியுங்கள். பின்னர் அதைவிட சிறியவற்றில் மிகப்பெரிய Element-ஐ கண்டறியுங்கள்.",

        expectedOutput: `Second Largest Element = 40`,

        expectedOutputTamil: `இரண்டாவது மிகப்பெரிய Element = 40`,

        solution: `public class Main {

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30, 40, 50};

        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;

        for (int i = 0; i < numbers.length; i++) {

            if (numbers[i] > largest) {

                secondLargest = largest;
                largest = numbers[i];

            } else if (numbers[i] > secondLargest && numbers[i] != largest) {

                secondLargest = numbers[i];

            }

        }

        System.out.println("Second Largest Element = " + secondLargest);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",

        questionEnglish:
          "Write a Java program to find and print the second smallest element in an integer array.",

        questionTamil:
          "ஒரு Integer Array-ல் உள்ள இரண்டாவது மிகச்சிறிய Element-ஐ கண்டறிந்து Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "First find the smallest element, then find the smallest element greater than it.",

        hintTamil:
          "முதலில் மிகச்சிறிய Element-ஐ கண்டறியுங்கள். பின்னர் அதைவிட பெரியவற்றில் மிகச்சிறிய Element-ஐ கண்டறியுங்கள்.",

        expectedOutput: `Second Smallest Element = 20`,

        expectedOutputTamil: `இரண்டாவது மிகச்சிறிய Element = 20`,

        solution: `public class Main {

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30, 40, 50};

        int smallest = Integer.MAX_VALUE;
        int secondSmallest = Integer.MAX_VALUE;

        for (int i = 0; i < numbers.length; i++) {

            if (numbers[i] < smallest) {

                secondSmallest = smallest;
                smallest = numbers[i];

            } else if (numbers[i] < secondSmallest && numbers[i] != smallest) {

                secondSmallest = numbers[i];

            }

        }

        System.out.println("Second Smallest Element = " + secondSmallest);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",

        questionEnglish:
          "Write a Java program to count the positive and negative numbers in an integer array.",

        questionTamil:
          "ஒரு Integer Array-ல் உள்ள Positive மற்றும் Negative எண்களின் எண்ணிக்கையை கண்டறிந்து Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Use two variables to count positive and negative numbers while traversing the array.",

        hintTamil:
          "Array-ஐ Traverse செய்யும் போது Positive மற்றும் Negative எண்களை எண்ண இரண்டு Variables பயன்படுத்துங்கள்.",

        expectedOutput: `Positive Count = 3
Negative Count = 2`,

        expectedOutputTamil: `Positive Count = 3
Negative Count = 2`,

        solution: `public class Main {

    public static void main(String[] args) {

        int[] numbers = {10, -5, 20, -8, 30};

        int positive = 0;
        int negative = 0;

        for (int i = 0; i < numbers.length; i++) {

            if (numbers[i] >= 0) {

                positive++;

            } else {

                negative++;

            }

        }

        System.out.println("Positive Count = " + positive);
        System.out.println("Negative Count = " + negative);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 9,
        title: "Challenge Question 9",

        questionEnglish:
          "Write a Java program to merge two integer arrays into a single array.",

        questionTamil:
          "இரண்டு Integer Array-களை ஒன்றாக இணைத்து (Merge) ஒரு புதிய Array உருவாக்கும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create a new array with enough size to store both arrays and copy the elements one by one.",

        hintTamil:
          "இரண்டு Array-களின் Elements-ஐ சேமிக்க போதுமான அளவு கொண்ட புதிய Array உருவாக்கி, ஒவ்வொரு Element-ஐயும் Copy செய்யுங்கள்.",

        expectedOutput: `10
20
30
40
50
60`,

        expectedOutputTamil: `10
20
30
40
50
60`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
        completed: false,
      },
      {
        id: 10,
        title: "Challenge Question 10",

        questionEnglish:
          "Write a Java program to sort an integer array in ascending order.",

        questionTamil:
          "ஒரு Integer Array-ல் உள்ள Elements-ஐ ஏறுவரிசையில் (Ascending Order) Sort செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Use nested loops to compare and swap the elements whenever necessary.",

        hintTamil:
          "Nested Loop-ஐ பயன்படுத்தி Elements-ஐ ஒப்பிட்டு, தேவையான இடங்களில் Swap செய்யுங்கள்.",

        expectedOutput: `10
20
30
40
50`,

        expectedOutputTamil: `10
20
30
40
50`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
        completed: false,
      },
    ],
  },
  {
    topicId: 20,
    title: "Methods",

    questions: [
      {
        id: 1,
        title: "Question 1",

        questionEnglish:
          "Write a Java program to create a method named displayMessage() that prints 'Welcome to Java'. Call the method from the main method.",

        questionTamil:
          "displayMessage() என்ற Method-ஐ உருவாக்கி 'Welcome to Java' என்று Print செய்யுங்கள். அந்த Method-ஐ main Method-லிருந்து Call செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create a static method named displayMessage() and call it inside the main method.",

        hintTamil:
          "displayMessage() என்ற Static Method-ஐ உருவாக்கி, main Method-க்குள் Call செய்யுங்கள்.",

        expectedOutput: `Welcome to Java`,

        expectedOutputTamil: `Welcome to Java`,

        solution: `public class Main {

    static void displayMessage() {

        System.out.println("Welcome to Java");

    }

    public static void main(String[] args) {

        displayMessage();

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",

        questionEnglish:
          "Write a Java program to create a method that prints numbers from 1 to 5. Call the method from the main method.",

        questionTamil:
          "1 முதல் 5 வரை உள்ள எண்களை Print செய்யும் Method-ஐ உருவாக்கி, அதை main Method-லிருந்து Call செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Place the for loop inside a separate method and call it from main.",

        hintTamil:
          "For Loop-ஐ தனி Method-க்குள் எழுதி, அதை main Method-லிருந்து Call செய்யுங்கள்.",

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

        solution: `public class Main {

    static void printNumbers() {

        for (int i = 1; i <= 5; i++) {

            System.out.println(i);

        }

    }

    public static void main(String[] args) {

        printNumbers();

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",

        questionEnglish:
          "Write a Java program to create a method that accepts an integer parameter and prints its square.",

        questionTamil:
          "ஒரு Integer Parameter-ஐ பெறும் Method-ஐ உருவாக்கி, அந்த எண்ணின் Square-ஐ Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create a method with one integer parameter and print number * number.",

        hintTamil:
          "ஒரு Integer Parameter கொண்ட Method-ஐ உருவாக்கி number * number-ஐ Print செய்யுங்கள்.",

        expectedOutput: `Square = 25`,

        expectedOutputTamil: `Square = 25`,

        solution: `public class Main {

    static void findSquare(int number) {

        System.out.println("Square = " + (number * number));

    }

    public static void main(String[] args) {

        findSquare(5);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",

        questionEnglish:
          "Write a Java program to create a method that accepts two integer parameters and prints their sum.",

        questionTamil:
          "இரண்டு Integer Parameters-ஐ பெறும் Method-ஐ உருவாக்கி, அவற்றின் கூட்டுத்தொகையை Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create a method with two integer parameters and print their sum.",

        hintTamil:
          "இரண்டு Integer Parameters கொண்ட Method-ஐ உருவாக்கி, அவற்றின் கூட்டுத்தொகையை Print செய்யுங்கள்.",

        expectedOutput: `Sum = 30`,

        expectedOutputTamil: `கூட்டுத்தொகை = 30`,

        solution: `public class Main {

    static void addNumbers(int a, int b) {

        System.out.println("Sum = " + (a + b));

    }

    public static void main(String[] args) {

        addNumbers(10, 20);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",

        questionEnglish:
          "Write a Java program to create a method that returns the sum of two integers and print the returned value.",

        questionTamil:
          "இரண்டு Integer-களின் கூட்டுத்தொகையை Return செய்யும் Method-ஐ உருவாக்கி, Return செய்யப்பட்ட மதிப்பை Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Use the return keyword to return the sum and store it in a variable inside the main method.",

        hintTamil:
          "return Keyword-ஐ பயன்படுத்தி கூட்டுத்தொகையை Return செய்து, main Method-ல் ஒரு Variable-ல் சேமித்து Print செய்யுங்கள்.",

        expectedOutput: `Sum = 30`,

        expectedOutputTamil: `கூட்டுத்தொகை = 30`,

        solution: `public class Main {

    static int addNumbers(int a, int b) {

        return a + b;

    }

    public static void main(String[] args) {

        int sum = addNumbers(10, 20);

        System.out.println("Sum = " + sum);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 6,
        title: "Question 6",

        questionEnglish:
          "Write a Java program to create a method that returns the largest of two integers and print the returned value.",

        questionTamil:
          "இரண்டு Integer-களில் பெரிய எண்ணை Return செய்யும் Method-ஐ உருவாக்கி, Return செய்யப்பட்ட மதிப்பை Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Use an if-else statement inside the method and return the larger number.",

        hintTamil:
          "Method-க்குள் if-else Statement பயன்படுத்தி பெரிய எண்ணை Return செய்யுங்கள்.",

        expectedOutput: `Largest = 20`,

        expectedOutputTamil: `பெரிய எண் = 20`,

        solution: `public class Main {

    static int findLargest(int a, int b) {

        if (a > b) {

            return a;

        } else {

            return b;

        }

    }

    public static void main(String[] args) {

        int largest = findLargest(10, 20);

        System.out.println("Largest = " + largest);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",

        questionEnglish:
          "Write a Java program to create a method that returns the factorial of a given number.",

        questionTamil:
          "கொடுக்கப்பட்ட ஒரு எண்ணின் Factorial-ஐ Return செய்யும் Method-ஐ உருவாக்கி, Return செய்யப்பட்ட மதிப்பை Print செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Calculate the factorial inside the method and return the result.",

        hintTamil:
          "Method-க்குள் Factorial-ஐ கணக்கிட்டு அதன் மதிப்பை Return செய்யுங்கள்.",

        expectedOutput: `Factorial = 120`,

        expectedOutputTamil: `Factorial = 120`,

        solution: `public class Main {

    static int factorial(int number) {

        int fact = 1;

        for (int i = 1; i <= number; i++) {

            fact = fact * i;

        }

        return fact;

    }

    public static void main(String[] args) {

        int result = factorial(5);

        System.out.println("Factorial = " + result);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",

        questionEnglish:
          "Write a Java program to create a method that checks whether a number is even or odd and prints the result.",

        questionTamil:
          "ஒரு எண் Even அல்லது Odd என்பதை சரிபார்த்து முடிவை Print செய்யும் Method-ஐ உருவாக்கும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Pass the number as a parameter and use the modulus (%) operator inside the method.",

        hintTamil:
          "எண்ணை Parameter-ஆக அனுப்பி, Method-க்குள் Modulus (%) Operator-ஐ பயன்படுத்துங்கள்.",

        expectedOutput: `Even Number`,

        expectedOutputTamil: `Even எண்`,

        solution: `public class Main {

    static void checkEvenOdd(int number) {

        if (number % 2 == 0) {

            System.out.println("Even Number");

        } else {

            System.out.println("Odd Number");

        }

    }

    public static void main(String[] args) {

        checkEvenOdd(10);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 9,
        title: "Challenge Question 9",

        questionEnglish:
          "Write a Java program to create a method that checks whether a given number is prime and returns true or false.",

        questionTamil:
          "கொடுக்கப்பட்ட ஒரு எண் Prime Number ஆக உள்ளதா என்பதை சரிபார்த்து true அல்லது false Return செய்யும் Method-ஐ உருவாக்கும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Check divisibility from 2 to number / 2. Return false if any divisor is found; otherwise return true.",

        hintTamil:
          "2 முதல் number / 2 வரை வகுபடுகிறதா என்று சரிபார்க்கவும். வகுபட்டால் false இல்லையெனில் true Return செய்யுங்கள்.",

        expectedOutput: `true`,

        expectedOutputTamil: `true`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
        completed: false,
      },
      {
        id: 10,
        title: "Challenge Question 10",

        questionEnglish:
          "Write a Java program to create a method that accepts two integers and an operator (+, -, *, /) and returns the calculated result.",

        questionTamil:
          "இரண்டு Integer-களையும் ஒரு Operator (+, -, *, /)-ஐயும் Parameter-ஆக பெற்று, கணக்கிடப்பட்ட முடிவை Return செய்யும் Method-ஐ உருவாக்கும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Use a switch statement inside the method to perform the required operation and return the result.",

        hintTamil:
          "Method-க்குள் Switch Statement பயன்படுத்தி தேவையான கணக்கை செய்து அதன் முடிவை Return செய்யுங்கள்.",

        expectedOutput: `Result = 30`,

        expectedOutputTamil: `முடிவு = 30`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: true,
        completed: false,
      },
    ],
  },
  {
    topicId: 21,
    title: "Return Type",

    questions: [
      {
        id: 1,
        title: "Question 1",

        questionEnglish:
          "Write a Java program to create a method that returns the sum of two integers.",

        questionTamil:
          "இரண்டு Integer-களின் கூட்டுத்தொகையை Return செய்யும் Method-ஐ உருவாக்கும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create a method with return type int and use the return keyword to return the sum.",

        hintTamil:
          "int Return Type கொண்ட Method-ஐ உருவாக்கி, return Keyword-ஐ பயன்படுத்தி கூட்டுத்தொகையை Return செய்யுங்கள்.",

        expectedOutput: `Sum = 30`,

        expectedOutputTamil: `கூட்டுத்தொகை = 30`,

        solution: `public class Main {

    static int add(int a, int b) {

        return a + b;

    }

    public static void main(String[] args) {

        int sum = add(10, 20);

        System.out.println("Sum = " + sum);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",

        questionEnglish:
          "Write a Java program to create a method that returns the difference of two integers.",

        questionTamil:
          "இரண்டு Integer-களின் வித்தியாசத்தை Return செய்யும் Method-ஐ உருவாக்கும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create a method with return type int and return the difference of the two numbers.",

        hintTamil:
          "int Return Type கொண்ட Method-ஐ உருவாக்கி, இரண்டு எண்களின் வித்தியாசத்தை Return செய்யுங்கள்.",

        expectedOutput: `Difference = 10`,

        expectedOutputTamil: `வித்தியாசம் = 10`,

        solution: `public class Main {

    static int subtract(int a, int b) {

        return a - b;

    }

    public static void main(String[] args) {

        int difference = subtract(20, 10);

        System.out.println("Difference = " + difference);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",

        questionEnglish:
          "Write a Java program to create a method that returns the product of two integers.",

        questionTamil:
          "இரண்டு Integer-களின் பெருக்கல் மதிப்பை Return செய்யும் Method-ஐ உருவாக்கும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create a method with return type int and return the product of the two numbers.",

        hintTamil:
          "int Return Type கொண்ட Method-ஐ உருவாக்கி, இரண்டு எண்களின் பெருக்கல் மதிப்பை Return செய்யுங்கள்.",

        expectedOutput: `Product = 200`,

        expectedOutputTamil: `பெருக்கல் = 200`,

        solution: `public class Main {

    static int multiply(int a, int b) {

        return a * b;

    }

    public static void main(String[] args) {

        int product = multiply(10, 20);

        System.out.println("Product = " + product);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",

        questionEnglish:
          "Write a Java program to create a method that returns the average of two numbers.",

        questionTamil:
          "இரண்டு எண்களின் சராசரியை (Average) Return செய்யும் Method-ஐ உருவாக்கும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Use return type double and return the average of the two numbers.",

        hintTamil:
          "double Return Type பயன்படுத்தி இரண்டு எண்களின் சராசரியை Return செய்யுங்கள்.",

        expectedOutput: `Average = 15.0`,

        expectedOutputTamil: `சராசரி = 15.0`,

        solution: `public class Main {

    static double average(int a, int b) {

        return (a + b) / 2.0;

    }

    public static void main(String[] args) {

        double average = average(10, 20);

        System.out.println("Average = " + average);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",

        questionEnglish:
          "Write a Java program to create a method that returns the square of a given number.",

        questionTamil:
          "கொடுக்கப்பட்ட ஒரு எண்ணின் Square-ஐ Return செய்யும் Method-ஐ உருவாக்கும் Java Program எழுதுங்கள்.",

        hintEnglish: "Use return type int and return number * number.",

        hintTamil:
          "int Return Type பயன்படுத்தி number * number-ஐ Return செய்யுங்கள்.",

        expectedOutput: `Square = 25`,

        expectedOutputTamil: `Square = 25`,

        solution: `public class Main {

    static int square(int number) {

        return number * number;

    }

    public static void main(String[] args) {

        int result = square(5);

        System.out.println("Square = " + result);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 6,
        title: "Question 6",

        questionEnglish:
          "Write a Java program to create a method that returns the largest of two integers.",

        questionTamil:
          "இரண்டு Integer-களில் பெரிய எண்ணை Return செய்யும் Method-ஐ உருவாக்கும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Use an if-else statement inside the method and return the larger number.",

        hintTamil:
          "Method-க்குள் if-else Statement-ஐ பயன்படுத்தி பெரிய எண்ணை Return செய்யுங்கள்.",

        expectedOutput: `Largest = 20`,

        expectedOutputTamil: `பெரிய எண் = 20`,

        solution: `public class Main {

    static int largest(int a, int b) {

        if (a > b) {
            return a;
        } else {
            return b;
        }

    }

    public static void main(String[] args) {

        int result = largest(10, 20);

        System.out.println("Largest = " + result);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",

        questionEnglish:
          "Write a Java program to create a method that returns true if a number is even, otherwise returns false.",

        questionTamil:
          "ஒரு எண் Even ஆக இருந்தால் true-வும், இல்லையெனில் false-வும் Return செய்யும் Method-ஐ உருவாக்கும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Use a boolean return type and return the result of number % 2 == 0.",

        hintTamil:
          "boolean Return Type-ஐ பயன்படுத்தி number % 2 == 0 என்ற நிபந்தனையை Return செய்யுங்கள்.",

        expectedOutput: `true`,

        expectedOutputTamil: `true`,

        solution: `public class Main {

    static boolean isEven(int number) {

        return number % 2 == 0;

    }

    public static void main(String[] args) {

        System.out.println(isEven(10));

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",

        questionEnglish:
          "Write a Java program to create a method that returns the first character of a given string.",

        questionTamil:
          "கொடுக்கப்பட்ட String-இன் முதல் எழுத்தை Return செய்யும் Method-ஐ உருவாக்கும் Java Program எழுதுங்கள்.",

        hintEnglish: "Use a char return type and return text.charAt(0).",

        hintTamil:
          "char Return Type-ஐ பயன்படுத்தி text.charAt(0)-ஐ Return செய்யுங்கள்.",

        expectedOutput: `First Character = J`,

        expectedOutputTamil: `முதல் எழுத்து = J`,

        solution: `public class Main {

    static char firstCharacter(String text) {

        return text.charAt(0);

    }

    public static void main(String[] args) {

        char result = firstCharacter("Java");

        System.out.println("First Character = " + result);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 9,
        title: "Question 9",

        questionEnglish:
          "Create a method that returns true if a given number is prime; otherwise return false.",

        questionTamil:
          "கொடுக்கப்பட்ட எண் Prime Number ஆக இருந்தால் true-வும், இல்லையெனில் false-வும் Return செய்யும் Method-ஐ உருவாக்குங்கள்.",

        hintEnglish:
          "Use a boolean return type and a loop to check whether the number is prime.",

        hintTamil:
          "boolean Return Type மற்றும் Loop-ஐ பயன்படுத்தி Prime Number என்பதை சரிபார்க்குங்கள்.",

        expectedOutput: `true`,

        expectedOutputTamil: `true`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: false,
        completed: false,
      },
      {
        id: 10,
        title: "Question 10",

        questionEnglish:
          "Create a method that accepts two integers and an operator (+, -, *, /) and returns the calculated result.",

        questionTamil:
          "இரண்டு Integer-களையும் ஒரு Operator (+, -, *, /)-ஐயும் பெற்று, கணக்கிடப்பட்ட முடிவை Return செய்யும் Method-ஐ உருவாக்குங்கள்.",

        hintEnglish:
          "Use a switch statement inside the method and return the calculated value.",

        hintTamil:
          "Method-க்குள் switch Statement-ஐ பயன்படுத்தி கணக்கிடப்பட்ட மதிப்பை Return செய்யுங்கள்.",

        expectedOutput: `Result = 30`,

        expectedOutputTamil: `முடிவு = 30`,

        solution: "NO SOLUTION!!!",

        challenge: true,
        locked: false,
        completed: false,
      },
    ],
  },
  {
    topicId: 22,
    title: "Method Overloading",

    questions: [
      {
        id: 1,
        title: "Question 1",

        questionEnglish:
          "Write a Java program to create two methods with the same name to add two integers and three integers using method overloading.",

        questionTamil:
          "Method Overloading-ஐ பயன்படுத்தி இரண்டு Integer-களையும் மூன்று Integer-களையும் கூட்டும் ஒரே பெயருடைய இரண்டு Method-களை உருவாக்கும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create two methods with the same name but different number of parameters.",

        hintTamil:
          "ஒரே பெயருடன், வேறுபட்ட எண்ணிக்கையிலான Parameters கொண்ட இரண்டு Method-களை உருவாக்குங்கள்.",

        expectedOutput: `Sum of 2 Numbers = 30
Sum of 3 Numbers = 60`,

        expectedOutputTamil: `2 எண்களின் கூட்டுத்தொகை = 30
3 எண்களின் கூட்டுத்தொகை = 60`,

        solution: `public class Main {

    static int add(int a, int b) {
        return a + b;
    }

    static int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {

        System.out.println("Sum of 2 Numbers = " + add(10, 20));
        System.out.println("Sum of 3 Numbers = " + add(10, 20, 30));

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",

        questionEnglish:
          "Write a Java program to overload a method that calculates the area of a square and a rectangle.",

        questionTamil:
          "Method Overloading-ஐ பயன்படுத்தி Square மற்றும் Rectangle-இன் Area-வை கணக்கிடும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Use one method with one parameter and another with two parameters.",

        hintTamil:
          "ஒரு Method-ல் ஒரு Parameter மற்றும் மற்றொரு Method-ல் இரண்டு Parameters பயன்படுத்துங்கள்.",

        expectedOutput: `Square Area = 25
Rectangle Area = 50`,

        expectedOutputTamil: `சதுரத்தின் பரப்பளவு = 25
செவ்வகத்தின் பரப்பளவு = 50`,

        solution: `public class Main {

    static int area(int side) {
        return side * side;
    }

    static int area(int length, int width) {
        return length * width;
    }

    public static void main(String[] args) {

        System.out.println("Square Area = " + area(5));
        System.out.println("Rectangle Area = " + area(10, 5));

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",

        questionEnglish:
          "Write a Java program to overload a method that prints an integer and a double value.",

        questionTamil:
          "Method Overloading-ஐ பயன்படுத்தி ஒரு Integer மற்றும் ஒரு Double மதிப்பை அச்சிடும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create two methods with the same name but different parameter types.",

        hintTamil:
          "ஒரே பெயரில் வேறுபட்ட Parameter Type கொண்ட இரண்டு Method-களை உருவாக்குங்கள்.",

        expectedOutput: `Integer = 10
Double = 10.5`,

        expectedOutputTamil: `முழு எண் = 10
Double = 10.5`,

        solution: `public class Main {

    static void display(int number) {
        System.out.println("Integer = " + number);
    }

    static void display(double number) {
        System.out.println("Double = " + number);
    }

    public static void main(String[] args) {

        display(10);
        display(10.5);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",

        questionEnglish:
          "Write a Java program to overload a method that displays one name and another that displays first name and last name.",

        questionTamil:
          "Method Overloading-ஐ பயன்படுத்தி ஒரு பெயரையும், முதல் பெயர் மற்றும் கடைசி பெயரையும் காட்டும் Java Program எழுதுங்கள்.",

        hintEnglish: "Use methods with one and two String parameters.",

        hintTamil:
          "ஒரு String மற்றும் இரண்டு String Parameters கொண்ட Method-களை பயன்படுத்துங்கள்.",

        expectedOutput: `Name = Deepak
Full Name = Deepak Kumar`,

        expectedOutputTamil: `பெயர் = Deepak
முழுப் பெயர் = Deepak Kumar`,

        solution: `public class Main {

    static void display(String name) {
        System.out.println("Name = " + name);
    }

    static void display(String firstName, String lastName) {
        System.out.println("Full Name = " + firstName + " " + lastName);
    }

    public static void main(String[] args) {

        display("Deepak");
        display("Deepak", "Kumar");

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",

        questionEnglish:
          "Write a Java program to overload a method that finds the maximum of two numbers and three numbers.",

        questionTamil:
          "Method Overloading-ஐ பயன்படுத்தி இரண்டு எண்களிலும், மூன்று எண்களிலும் பெரிய எண்ணை கண்டறியும் Java Program எழுதுங்கள்.",

        hintEnglish: "Create two methods with different numbers of parameters.",

        hintTamil:
          "வேறுபட்ட எண்ணிக்கையிலான Parameters கொண்ட இரண்டு Method-களை உருவாக்குங்கள்.",

        expectedOutput: `Maximum of 2 Numbers = 20
Maximum of 3 Numbers = 30`,

        expectedOutputTamil: `2 எண்களில் பெரியது = 20
3 எண்களில் பெரியது = 30`,

        solution: `public class Main {

    static int maximum(int a, int b) {

        if (a > b) {
            return a;
        } else {
            return b;
        }

    }

    static int maximum(int a, int b, int c) {

        if (a > b && a > c) {
            return a;
        } else if (b > c) {
            return b;
        } else {
            return c;
        }

    }

    public static void main(String[] args) {

        System.out.println("Maximum of 2 Numbers = " + maximum(10, 20));
        System.out.println("Maximum of 3 Numbers = " + maximum(10, 20, 30));

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 6,
        title: "Question 6",

        questionEnglish:
          "Write a Java program to overload a method that calculates the square of an integer and the square of a double value.",

        questionTamil:
          "Method Overloading-ஐ பயன்படுத்தி ஒரு Integer மற்றும் ஒரு Double மதிப்பின் Square-ஐ கணக்கிடும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create two methods with the same name but different parameter types.",

        hintTamil:
          "ஒரே பெயருடன் வேறுபட்ட Parameter Type கொண்ட இரண்டு Method-களை உருவாக்குங்கள்.",

        expectedOutput: `Square of Integer = 25
Square of Double = 30.25`,

        expectedOutputTamil: `Integer-இன் Square = 25
Double-இன் Square = 30.25`,

        solution: `public class Main {

    static int square(int number) {
        return number * number;
    }

    static double square(double number) {
        return number * number;
    }

    public static void main(String[] args) {

        System.out.println("Square of Integer = " + square(5));
        System.out.println("Square of Double = " + square(5.5));

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",

        questionEnglish:
          "Write a Java program to overload a method that displays the details of a student with one parameter (name) and two parameters (name and age).",

        questionTamil:
          "Method Overloading-ஐ பயன்படுத்தி ஒரு Parameter (பெயர்) மற்றும் இரண்டு Parameters (பெயர் மற்றும் வயது) கொண்டு மாணவர் விவரங்களை காட்டும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create two display() methods with different numbers of parameters.",

        hintTamil:
          "வேறுபட்ட எண்ணிக்கையிலான Parameters கொண்ட இரண்டு display() Method-களை உருவாக்குங்கள்.",

        expectedOutput: `Student Name = Deepak
Student Name = Deepak
Age = 20`,

        expectedOutputTamil: `மாணவர் பெயர் = Deepak
மாணவர் பெயர் = Deepak
வயது = 20`,

        solution: `public class Main {

    static void display(String name) {

        System.out.println("Student Name = " + name);

    }

    static void display(String name, int age) {

        System.out.println("Student Name = " + name);
        System.out.println("Age = " + age);

    }

    public static void main(String[] args) {

        display("Deepak");
        display("Deepak", 20);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",

        questionEnglish:
          "Write a Java program to overload a method that calculates the salary of an employee with basic salary only and with basic salary plus bonus.",

        questionTamil:
          "Method Overloading-ஐ பயன்படுத்தி அடிப்படை சம்பளம் மட்டும் மற்றும் அடிப்படை சம்பளம் + Bonus ஆகியவற்றின் மொத்த சம்பளத்தை கணக்கிடும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create two salary() methods with different numbers of parameters.",

        hintTamil:
          "வேறுபட்ட எண்ணிக்கையிலான Parameters கொண்ட இரண்டு salary() Method-களை உருவாக்குங்கள்.",

        expectedOutput: `Salary = 25000
Salary = 30000`,

        expectedOutputTamil: `சம்பளம் = 25000
சம்பளம் = 30000`,

        solution: `public class Main {

    static int salary(int basicSalary) {

        return basicSalary;

    }

    static int salary(int basicSalary, int bonus) {

        return basicSalary + bonus;

    }

    public static void main(String[] args) {

        System.out.println("Salary = " + salary(25000));
        System.out.println("Salary = " + salary(25000, 5000));

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 9,
        title: "Question 9",

        questionEnglish:
          "Write a Java program to overload a method that finds the minimum of two integers and three integers.",

        questionTamil:
          "Method Overloading-ஐ பயன்படுத்தி இரண்டு Integer-களிலும் மூன்று Integer-களிலும் சிறிய எண்ணை கண்டறியும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create two methods with different numbers of parameters and return the smallest value.",

        hintTamil:
          "வேறுபட்ட எண்ணிக்கையிலான Parameters கொண்ட இரண்டு Method-களை உருவாக்கி சிறிய மதிப்பை Return செய்யுங்கள்.",

        expectedOutput: `Minimum of 2 Numbers = 10
Minimum of 3 Numbers = 10`,

        expectedOutputTamil: `2 எண்களில் சிறியது = 10
3 எண்களில் சிறியது = 10`,

        solution: ``,

        challenge: true,
        locked: false,
        completed: false,
      },
      {
        id: 10,
        title: "Question 10",

        questionEnglish:
          "Write a Java program to overload a method that calculates the power of a number using one parameter (square) and two parameters (base and exponent).",

        questionTamil:
          "Method Overloading-ஐ பயன்படுத்தி ஒரு Parameter (Square) மற்றும் இரண்டு Parameters (Base மற்றும் Exponent) கொண்டு ஒரு எண்ணின் Power-ஐ கணக்கிடும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create two methods with the same name but different numbers of parameters.",

        hintTamil:
          "ஒரே பெயருடன் வேறுபட்ட எண்ணிக்கையிலான Parameters கொண்ட இரண்டு Method-களை உருவாக்குங்கள்.",

        expectedOutput: `Square = 25
Power = 125`,

        expectedOutputTamil: `Square = 25
Power = 125`,

        solution: ``,

        challenge: true,
        locked: false,
        completed: false,
      },
    ],
  },
  {
    topicId: 23,
    title: "Class",

    questions: [
      {
        id: 1,
        title: "Question 1",

        questionEnglish:
          "Write a Java program to create a class named Student with a variable studentName and display its value.",

        questionTamil:
          "studentName என்ற Variable-ஐ கொண்ட Student என்ற Class-ஐ உருவாக்கி அதன் மதிப்பை காட்டும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create a class named Student with a String variable and access it using an object.",

        hintTamil:
          "Student என்ற Class-ஐ உருவாக்கி, ஒரு String Variable-ஐ அறிவித்து Object மூலம் அணுகுங்கள்.",

        expectedOutput: `Student Name = Deepak`,

        expectedOutputTamil: `மாணவர் பெயர் = Deepak`,

        solution: `class Student {

    String studentName = "Deepak";

}

public class Main {

    public static void main(String[] args) {

        Student student = new Student();

        System.out.println("Student Name = " + student.studentName);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",

        questionEnglish:
          "Write a Java program to create a class named Student with two variables studentName and studentAge, and display their values.",

        questionTamil:
          "studentName மற்றும் studentAge என்ற இரண்டு Variable-களைக் கொண்ட Student என்ற Class-ஐ உருவாக்கி அதன் மதிப்புகளை காட்டும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create a class with two variables and access them using an object.",

        hintTamil:
          "இரண்டு Variable-களுடன் ஒரு Class-ஐ உருவாக்கி, Object மூலம் அவற்றை அணுகுங்கள்.",

        expectedOutput: `Student Name = Deepak
Student Age = 20`,

        expectedOutputTamil: `மாணவர் பெயர் = Deepak
மாணவர் வயது = 20`,

        solution: `class Student {

    String studentName = "Deepak";
    int studentAge = 20;

}

public class Main {

    public static void main(String[] args) {

        Student student = new Student();

        System.out.println("Student Name = " + student.studentName);
        System.out.println("Student Age = " + student.studentAge);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",

        questionEnglish:
          "Write a Java program to create a class named Employee with variables employeeName, employeeId, and salary, and display their values.",

        questionTamil:
          "employeeName, employeeId மற்றும் salary என்ற Variable-களைக் கொண்ட Employee என்ற Class-ஐ உருவாக்கி அதன் மதிப்புகளை காட்டும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create an Employee class with three variables and access them using an object.",

        hintTamil:
          "மூன்று Variable-களுடன் Employee Class-ஐ உருவாக்கி Object மூலம் அணுகுங்கள்.",

        expectedOutput: `Employee Name = Arun
Employee ID = 101
Salary = 30000.0`,

        expectedOutputTamil: `பணியாளர் பெயர் = Arun
பணியாளர் ஐடி = 101
சம்பளம் = 30000.0`,

        solution: `class Employee {

    String employeeName = "Arun";
    int employeeId = 101;
    double salary = 30000.0;

}

public class Main {

    public static void main(String[] args) {

        Employee employee = new Employee();

        System.out.println("Employee Name = " + employee.employeeName);
        System.out.println("Employee ID = " + employee.employeeId);
        System.out.println("Salary = " + employee.salary);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",

        questionEnglish:
          "Write a Java program to create a class named Car with variables brand and model, and display their values.",

        questionTamil:
          "brand மற்றும் model என்ற Variable-களைக் கொண்ட Car என்ற Class-ஐ உருவாக்கி அதன் மதிப்புகளை காட்டும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create a Car class with two String variables and access them using an object.",

        hintTamil:
          "இரண்டு String Variable-களுடன் Car Class-ஐ உருவாக்கி Object மூலம் அணுகுங்கள்.",

        expectedOutput: `Brand = Toyota
Model = Fortuner`,

        expectedOutputTamil: `பிராண்ட் = Toyota
மாடல் = Fortuner`,

        solution: `class Car {

    String brand = "Toyota";
    String model = "Fortuner";

}

public class Main {

    public static void main(String[] args) {

        Car car = new Car();

        System.out.println("Brand = " + car.brand);
        System.out.println("Model = " + car.model);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",

        questionEnglish:
          "Write a Java program to create a class named Book with variables title, author, and price, and display their values.",

        questionTamil:
          "title, author மற்றும் price என்ற Variable-களைக் கொண்ட Book என்ற Class-ஐ உருவாக்கி அதன் மதிப்புகளை காட்டும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create a Book class with three variables and access them using an object.",

        hintTamil:
          "மூன்று Variable-களுடன் Book Class-ஐ உருவாக்கி Object மூலம் அணுகுங்கள்.",

        expectedOutput: `Title = Java Programming
Author = James Gosling
Price = 499.0`,

        expectedOutputTamil: `தலைப்பு = Java Programming
ஆசிரியர் = James Gosling
விலை = 499.0`,

        solution: `class Book {

    String title = "Java Programming";
    String author = "James Gosling";
    double price = 499.0;

}

public class Main {

    public static void main(String[] args) {

        Book book = new Book();

        System.out.println("Title = " + book.title);
        System.out.println("Author = " + book.author);
        System.out.println("Price = " + book.price);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 6,
        title: "Question 6",

        questionEnglish:
          "Write a Java program to create a class named Mobile with variables brand, model, and price, and display their values.",

        questionTamil:
          "brand, model மற்றும் price என்ற Variable-களைக் கொண்ட Mobile என்ற Class-ஐ உருவாக்கி அதன் மதிப்புகளை காட்டும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create a Mobile class with three variables and access them using an object.",

        hintTamil:
          "மூன்று Variable-களுடன் Mobile Class-ஐ உருவாக்கி Object மூலம் அணுகுங்கள்.",

        expectedOutput: `Brand = Samsung
Model = Galaxy S24
Price = 79999.0`,

        expectedOutputTamil: `பிராண்ட் = Samsung
மாடல் = Galaxy S24
விலை = 79999.0`,

        solution: `class Mobile {

    String brand = "Samsung";
    String model = "Galaxy S24";
    double price = 79999.0;

}

public class Main {

    public static void main(String[] args) {

        Mobile mobile = new Mobile();

        System.out.println("Brand = " + mobile.brand);
        System.out.println("Model = " + mobile.model);
        System.out.println("Price = " + mobile.price);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",

        questionEnglish:
          "Write a Java program to create a class named College with variables collegeName, location, and university, and display their values.",

        questionTamil:
          "collegeName, location மற்றும் university என்ற Variable-களைக் கொண்ட College என்ற Class-ஐ உருவாக்கி அதன் மதிப்புகளை காட்டும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create a College class with three variables and access them using an object.",

        hintTamil:
          "மூன்று Variable-களுடன் College Class-ஐ உருவாக்கி Object மூலம் அணுகுங்கள்.",

        expectedOutput: `College Name = ABC College
Location = Chennai
University = Anna University`,

        expectedOutputTamil: `கல்லூரி பெயர் = ABC College
இடம் = Chennai
பல்கலைக்கழகம் = Anna University`,

        solution: `class College {

    String collegeName = "ABC College";
    String location = "Chennai";
    String university = "Anna University";

}

public class Main {

    public static void main(String[] args) {

        College college = new College();

        System.out.println("College Name = " + college.collegeName);
        System.out.println("Location = " + college.location);
        System.out.println("University = " + college.university);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",

        questionEnglish:
          "Write a Java program to create a class named BankAccount with variables accountHolder, accountNumber, and balance, and display their values.",

        questionTamil:
          "accountHolder, accountNumber மற்றும் balance என்ற Variable-களைக் கொண்ட BankAccount என்ற Class-ஐ உருவாக்கி அதன் மதிப்புகளை காட்டும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create a BankAccount class with three variables and access them using an object.",

        hintTamil:
          "மூன்று Variable-களுடன் BankAccount Class-ஐ உருவாக்கி Object மூலம் அணுகுங்கள்.",

        expectedOutput: `Account Holder = Deepak
Account Number = 123456789
Balance = 50000.0`,

        expectedOutputTamil: `கணக்கு வைத்திருப்பவர் = Deepak
கணக்கு எண் = 123456789
இருப்பு = 50000.0`,

        solution: `class BankAccount {

    String accountHolder = "Deepak";
    long accountNumber = 123456789;
    double balance = 50000.0;

}

public class Main {

    public static void main(String[] args) {

        BankAccount account = new BankAccount();

        System.out.println("Account Holder = " + account.accountHolder);
        System.out.println("Account Number = " + account.accountNumber);
        System.out.println("Balance = " + account.balance);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 9,
        title: "Question 9",

        questionEnglish:
          "Write a Java program to create a class named Laptop with variables brand, processor, RAM, and price, then display their values.",

        questionTamil:
          "brand, processor, RAM மற்றும் price என்ற Variable-களைக் கொண்ட Laptop என்ற Class-ஐ உருவாக்கி அதன் மதிப்புகளை காட்டும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create a Laptop class with four variables and access them using an object.",

        hintTamil:
          "நான்கு Variable-களுடன் Laptop Class-ஐ உருவாக்கி Object மூலம் அணுகுங்கள்.",

        expectedOutput: `Brand = Dell
Processor = Intel i5
RAM = 16 GB
Price = 65000.0`,

        expectedOutputTamil: `பிராண்ட் = Dell
Processor = Intel i5
RAM = 16 GB
விலை = 65000.0`,

        solution: ``,

        challenge: true,
        locked: false,
        completed: false,
      },
      {
        id: 10,
        title: "Question 10",

        questionEnglish:
          "Write a Java program to create a class named Hospital with variables hospitalName, doctorName, and numberOfPatients, then display their values.",

        questionTamil:
          "hospitalName, doctorName மற்றும் numberOfPatients என்ற Variable-களைக் கொண்ட Hospital என்ற Class-ஐ உருவாக்கி அதன் மதிப்புகளை காட்டும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create a Hospital class with three variables and access them using an object.",

        hintTamil:
          "மூன்று Variable-களுடன் Hospital Class-ஐ உருவாக்கி Object மூலம் அணுகுங்கள்.",

        expectedOutput: `Hospital Name = City Hospital
Doctor Name = Dr. Kumar
Number of Patients = 120`,

        expectedOutputTamil: `மருத்துவமனை பெயர் = City Hospital
மருத்துவர் பெயர் = Dr. Kumar
நோயாளிகளின் எண்ணிக்கை = 120`,

        solution: ``,

        challenge: true,
        locked: false,
        completed: false,
      },
    ],
  },
  {
    topicId: 24,
    title: "Object",

    questions: [
      {
        id: 10,
        title: "Question 10",

        questionEnglish:
          "Write a Java program to create a class named Hospital with variables hospitalName, doctorName, and numberOfPatients, then display their values.",

        questionTamil:
          "hospitalName, doctorName மற்றும் numberOfPatients என்ற Variable-களைக் கொண்ட Hospital என்ற Class-ஐ உருவாக்கி அதன் மதிப்புகளை காட்டும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create a Hospital class with three variables and access them using an object.",

        hintTamil:
          "மூன்று Variable-களுடன் Hospital Class-ஐ உருவாக்கி Object மூலம் அணுகுங்கள்.",

        expectedOutput: `Hospital Name = City Hospital
Doctor Name = Dr. Kumar
Number of Patients = 120`,

        expectedOutputTamil: `மருத்துவமனை பெயர் = City Hospital
மருத்துவர் பெயர் = Dr. Kumar
நோயாளிகளின் எண்ணிக்கை = 120`,

        solution: ``,

        challenge: true,
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",

        questionEnglish:
          "Write a Java program to create two objects of the Student class and display their names.",

        questionTamil:
          "Student Class-இன் இரண்டு Object-களை உருவாக்கி அவற்றின் பெயர்களை காட்டும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create two objects and assign different values using the object names.",

        hintTamil:
          "இரண்டு Object-களை உருவாக்கி Object பெயர்களைப் பயன்படுத்தி வெவ்வேறு மதிப்புகளை வழங்குங்கள்.",

        expectedOutput: `Student 1 = Deepak
Student 2 = Arun`,

        expectedOutputTamil: `மாணவர் 1 = Deepak
மாணவர் 2 = Arun`,

        solution: `class Student {

    String studentName;

}

public class Main {

    public static void main(String[] args) {

        Student student1 = new Student();
        Student student2 = new Student();

        student1.studentName = "Deepak";
        student2.studentName = "Arun";

        System.out.println("Student 1 = " + student1.studentName);
        System.out.println("Student 2 = " + student2.studentName);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",

        questionEnglish:
          "Write a Java program to create an object of the Car class and display the brand and model.",

        questionTamil:
          "Car Class-இன் ஒரு Object-ஐ உருவாக்கி Brand மற்றும் Model-ஐ காட்டும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create an object and assign values to the variables using the object.",

        hintTamil:
          "Object-ஐ உருவாக்கி அதன் மூலம் Variable-களுக்கு மதிப்புகளை வழங்குங்கள்.",

        expectedOutput: `Brand = Toyota
Model = Fortuner`,

        expectedOutputTamil: `பிராண்ட் = Toyota
மாடல் = Fortuner`,

        solution: `class Car {

    String brand;
    String model;

}

public class Main {

    public static void main(String[] args) {

        Car car = new Car();

        car.brand = "Toyota";
        car.model = "Fortuner";

        System.out.println("Brand = " + car.brand);
        System.out.println("Model = " + car.model);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",

        questionEnglish:
          "Write a Java program to create two objects of the Car class and display their details.",

        questionTamil:
          "Car Class-இன் இரண்டு Object-களை உருவாக்கி அவற்றின் விவரங்களை காட்டும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create two objects and assign different values to each object.",

        hintTamil:
          "இரண்டு Object-களை உருவாக்கி ஒவ்வொன்றிற்கும் வெவ்வேறு மதிப்புகளை வழங்குங்கள்.",

        expectedOutput: `Car 1 = Toyota Fortuner
Car 2 = Hyundai Creta`,

        expectedOutputTamil: `கார் 1 = Toyota Fortuner
கார் 2 = Hyundai Creta`,

        solution: `class Car {

    String brand;
    String model;

}

public class Main {

    public static void main(String[] args) {

        Car car1 = new Car();
        Car car2 = new Car();

        car1.brand = "Toyota";
        car1.model = "Fortuner";

        car2.brand = "Hyundai";
        car2.model = "Creta";

        System.out.println("Car 1 = " + car1.brand + " " + car1.model);
        System.out.println("Car 2 = " + car2.brand + " " + car2.model);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",

        questionEnglish:
          "Write a Java program to create an object of the Employee class and display the employee's name, ID, and salary.",

        questionTamil:
          "Employee Class-இன் ஒரு Object-ஐ உருவாக்கி பணியாளரின் பெயர், ஐடி மற்றும் சம்பளத்தை காட்டும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create an object and assign values to all the variables using the object.",

        hintTamil:
          "Object-ஐ உருவாக்கி அனைத்து Variable-களுக்கும் Object மூலம் மதிப்புகளை வழங்குங்கள்.",

        expectedOutput: `Employee Name = Arun
Employee ID = 101
Salary = 30000.0`,

        expectedOutputTamil: `பணியாளர் பெயர் = Arun
பணியாளர் ஐடி = 101
சம்பளம் = 30000.0`,

        solution: `class Employee {

    String employeeName;
    int employeeId;
    double salary;

}

public class Main {

    public static void main(String[] args) {

        Employee employee = new Employee();

        employee.employeeName = "Arun";
        employee.employeeId = 101;
        employee.salary = 30000.0;

        System.out.println("Employee Name = " + employee.employeeName);
        System.out.println("Employee ID = " + employee.employeeId);
        System.out.println("Salary = " + employee.salary);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 6,
        title: "Question 6",

        questionEnglish:
          "Write a Java program to create two objects of the Book class and display their details.",

        questionTamil:
          "Book Class-இன் இரண்டு Object-களை உருவாக்கி அவற்றின் விவரங்களை காட்டும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create two Book objects and assign different values using the object names.",

        hintTamil:
          "இரண்டு Book Object-களை உருவாக்கி Object பெயர்களைப் பயன்படுத்தி வெவ்வேறு மதிப்புகளை வழங்குங்கள்.",

        expectedOutput: `Book 1
Title = Java Programming
Author = James Gosling
Price = 499.0

Book 2
Title = Python Basics
Author = Guido van Rossum
Price = 399.0`,

        expectedOutputTamil: `புத்தகம் 1
தலைப்பு = Java Programming
ஆசிரியர் = James Gosling
விலை = 499.0

புத்தகம் 2
தலைப்பு = Python Basics
ஆசிரியர் = Guido van Rossum
விலை = 399.0`,

        solution: `class Book {

    String title;
    String author;
    double price;

}

public class Main {

    public static void main(String[] args) {

        Book book1 = new Book();
        Book book2 = new Book();

        book1.title = "Java Programming";
        book1.author = "James Gosling";
        book1.price = 499.0;

        book2.title = "Python Basics";
        book2.author = "Guido van Rossum";
        book2.price = 399.0;

        System.out.println("Book 1");
        System.out.println("Title = " + book1.title);
        System.out.println("Author = " + book1.author);
        System.out.println("Price = " + book1.price);

        System.out.println();

        System.out.println("Book 2");
        System.out.println("Title = " + book2.title);
        System.out.println("Author = " + book2.author);
        System.out.println("Price = " + book2.price);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",

        questionEnglish:
          "Write a Java program to create two objects of the Mobile class and display their details.",

        questionTamil:
          "Mobile Class-இன் இரண்டு Object-களை உருவாக்கி அவற்றின் விவரங்களை காட்டும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create two Mobile objects and assign different values to each object.",

        hintTamil:
          "இரண்டு Mobile Object-களை உருவாக்கி ஒவ்வொரு Object-க்கும் வெவ்வேறு மதிப்புகளை வழங்குங்கள்.",

        expectedOutput: `Mobile 1
Brand = Samsung
Model = Galaxy S24

Mobile 2
Brand = Apple
Model = iPhone 16`,

        expectedOutputTamil: `மொபைல் 1
பிராண்ட் = Samsung
மாடல் = Galaxy S24

மொபைல் 2
பிராண்ட் = Apple
மாடல் = iPhone 16`,

        solution: `class Mobile {

    String brand;
    String model;

}

public class Main {

    public static void main(String[] args) {

        Mobile mobile1 = new Mobile();
        Mobile mobile2 = new Mobile();

        mobile1.brand = "Samsung";
        mobile1.model = "Galaxy S24";

        mobile2.brand = "Apple";
        mobile2.model = "iPhone 16";

        System.out.println("Mobile 1");
        System.out.println("Brand = " + mobile1.brand);
        System.out.println("Model = " + mobile1.model);

        System.out.println();

        System.out.println("Mobile 2");
        System.out.println("Brand = " + mobile2.brand);
        System.out.println("Model = " + mobile2.model);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",

        questionEnglish:
          "Write a Java program to create two objects of the BankAccount class and display their details.",

        questionTamil:
          "BankAccount Class-இன் இரண்டு Object-களை உருவாக்கி அவற்றின் விவரங்களை காட்டும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create two BankAccount objects and assign different values using the object names.",

        hintTamil:
          "இரண்டு BankAccount Object-களை உருவாக்கி Object பெயர்களைப் பயன்படுத்தி வெவ்வேறு மதிப்புகளை வழங்குங்கள்.",

        expectedOutput: `Account 1
Holder = Deepak
Balance = 50000.0

Account 2
Holder = Arun
Balance = 35000.0`,

        expectedOutputTamil: `கணக்கு 1
கணக்கு வைத்திருப்பவர் = Deepak
இருப்பு = 50000.0

கணக்கு 2
கணக்கு வைத்திருப்பவர் = Arun
இருப்பு = 35000.0`,

        solution: `class BankAccount {

    String accountHolder;
    double balance;

}

public class Main {

    public static void main(String[] args) {

        BankAccount account1 = new BankAccount();
        BankAccount account2 = new BankAccount();

        account1.accountHolder = "Deepak";
        account1.balance = 50000.0;

        account2.accountHolder = "Arun";
        account2.balance = 35000.0;

        System.out.println("Account 1");
        System.out.println("Holder = " + account1.accountHolder);
        System.out.println("Balance = " + account1.balance);

        System.out.println();

        System.out.println("Account 2");
        System.out.println("Holder = " + account2.accountHolder);
        System.out.println("Balance = " + account2.balance);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 9,
        title: "Question 9",

        questionEnglish:
          "Write a Java program to create two objects of the Laptop class and display their details.",

        questionTamil:
          "Laptop Class-இன் இரண்டு Object-களை உருவாக்கி அவற்றின் விவரங்களை காட்டும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create two Laptop objects and assign different values to each object.",

        hintTamil:
          "இரண்டு Laptop Object-களை உருவாக்கி ஒவ்வொரு Object-க்கும் வெவ்வேறு மதிப்புகளை வழங்குங்கள்.",

        expectedOutput: `Laptop 1
Brand = Dell
RAM = 16 GB

Laptop 2
Brand = HP
RAM = 8 GB`,

        expectedOutputTamil: `மடிக்கணினி 1
பிராண்ட் = Dell
RAM = 16 GB

மடிக்கணினி 2
பிராண்ட் = HP
RAM = 8 GB`,

        solution: ``,

        challenge: true,
        locked: false,
        completed: false,
      },
      {
        id: 10,
        title: "Question 10",

        questionEnglish:
          "Write a Java program to create three objects of the Student class and display their names and ages.",

        questionTamil:
          "Student Class-இன் மூன்று Object-களை உருவாக்கி அவற்றின் பெயர் மற்றும் வயதை காட்டும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create three Student objects and assign different values to each object.",

        hintTamil:
          "மூன்று Student Object-களை உருவாக்கி ஒவ்வொன்றிற்கும் வெவ்வேறு மதிப்புகளை வழங்குங்கள்.",

        expectedOutput: `Student 1 = Deepak, Age = 20
Student 2 = Arun, Age = 21
Student 3 = Kumar, Age = 22`,

        expectedOutputTamil: `மாணவர் 1 = Deepak, வயது = 20
மாணவர் 2 = Arun, வயது = 21
மாணவர் 3 = Kumar, வயது = 22`,

        solution: ``,

        challenge: true,
        locked: false,
        completed: false,
      },
    ],
  },
  {
    topicId: 25,
    title: "Constructor",

    questions: [
      {
        id: 1,
        title: "Question 1",

        questionEnglish:
          "Write a Java program to create a constructor in the Student class that displays 'Constructor Called'.",

        questionTamil:
          "Student Class-இல் 'Constructor Called' என்று காட்டும் Constructor-ஐ உருவாக்கும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create a constructor with the same name as the class. It has no return type.",

        hintTamil:
          "Class பெயரிலேயே Constructor-ஐ உருவாக்குங்கள். Constructor-க்கு Return Type இருக்காது.",

        expectedOutput: `Constructor Called`,

        expectedOutputTamil: `Constructor Called`,

        solution: `class Student {

    Student() {

        System.out.println("Constructor Called");

    }

}

public class Main {

    public static void main(String[] args) {

        Student student = new Student();

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",

        questionEnglish:
          "Write a Java program to create a constructor that initializes and displays the student's name.",

        questionTamil:
          "மாணவரின் பெயரை Initialize செய்து காட்டும் Constructor-ஐ உருவாக்கும் Java Program எழுதுங்கள்.",

        hintEnglish: "Assign a value to the variable inside the constructor.",

        hintTamil:
          "Constructor-க்குள் Variable-க்கு ஒரு மதிப்பை Assign செய்யுங்கள்.",

        expectedOutput: `Student Name = Deepak`,

        expectedOutputTamil: `மாணவர் பெயர் = Deepak`,

        solution: `class Student {

    String studentName;

    Student() {

        studentName = "Deepak";

    }

}

public class Main {

    public static void main(String[] args) {

        Student student = new Student();

        System.out.println("Student Name = " + student.studentName);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",

        questionEnglish:
          "Write a Java program to create a constructor that initializes the employee's name and salary, then display them.",

        questionTamil:
          "பணியாளரின் பெயர் மற்றும் சம்பளத்தை Initialize செய்யும் Constructor-ஐ உருவாக்கி அவற்றை காட்டும் Java Program எழுதுங்கள்.",

        hintEnglish: "Initialize multiple variables inside the constructor.",

        hintTamil:
          "Constructor-க்குள் பல Variable-களுக்கு மதிப்புகளை Assign செய்யுங்கள்.",

        expectedOutput: `Employee Name = Arun
Salary = 30000.0`,

        expectedOutputTamil: `பணியாளர் பெயர் = Arun
சம்பளம் = 30000.0`,

        solution: `class Employee {

    String employeeName;
    double salary;

    Employee() {

        employeeName = "Arun";
        salary = 30000.0;

    }

}

public class Main {

    public static void main(String[] args) {

        Employee employee = new Employee();

        System.out.println("Employee Name = " + employee.employeeName);
        System.out.println("Salary = " + employee.salary);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",

        questionEnglish:
          "Write a Java program to create a parameterized constructor that initializes the student's name.",

        questionTamil:
          "மாணவரின் பெயரை Initialize செய்யும் Parameterized Constructor-ஐ உருவாக்கும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Pass the student's name as a parameter to the constructor.",

        hintTamil: "Constructor-க்கு மாணவரின் பெயரை Parameter ஆக அனுப்புங்கள்.",

        expectedOutput: `Student Name = Deepak`,

        expectedOutputTamil: `மாணவர் பெயர் = Deepak`,

        solution: `class Student {

    String studentName;

    Student(String name) {

        studentName = name;

    }

}

public class Main {

    public static void main(String[] args) {

        Student student = new Student("Deepak");

        System.out.println("Student Name = " + student.studentName);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",

        questionEnglish:
          "Write a Java program to create a parameterized constructor that initializes the product name and price.",

        questionTamil:
          "Product-இன் பெயர் மற்றும் விலையை Initialize செய்யும் Parameterized Constructor-ஐ உருவாக்கும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Pass two parameters to the constructor and assign them to the variables.",

        hintTamil:
          "Constructor-க்கு இரண்டு Parameters அனுப்பி அவற்றை Variable-களுக்கு Assign செய்யுங்கள்.",

        expectedOutput: `Product Name = Laptop
Price = 65000.0`,

        expectedOutputTamil: `பொருளின் பெயர் = Laptop
விலை = 65000.0`,

        solution: `class Product {

    String productName;
    double price;

    Product(String name, double amount) {

        productName = name;
        price = amount;

    }

}

public class Main {

    public static void main(String[] args) {

        Product product = new Product("Laptop", 65000.0);

        System.out.println("Product Name = " + product.productName);
        System.out.println("Price = " + product.price);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 6,
        title: "Question 6",

        questionEnglish:
          "Write a Java program to create a parameterized constructor that initializes the brand and model of a car.",

        questionTamil:
          "Car-இன் Brand மற்றும் Model-ஐ Initialize செய்யும் Parameterized Constructor-ஐ உருவாக்கும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Pass two String values to the constructor and assign them to the variables.",

        hintTamil:
          "Constructor-க்கு இரண்டு String Parameters-ஐ அனுப்பி அவற்றை Variable-களுக்கு Assign செய்யுங்கள்.",

        expectedOutput: `Brand = Toyota
Model = Fortuner`,

        expectedOutputTamil: `பிராண்ட் = Toyota
மாடல் = Fortuner`,

        solution: `class Car {

    String brand;
    String model;

    Car(String brand, String model) {

        this.brand = brand;
        this.model = model;

    }

}

public class Main {

    public static void main(String[] args) {

        Car car = new Car("Toyota", "Fortuner");

        System.out.println("Brand = " + car.brand);
        System.out.println("Model = " + car.model);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",

        questionEnglish:
          "Write a Java program to create two objects using a parameterized constructor and display their details.",

        questionTamil:
          "Parameterized Constructor-ஐ பயன்படுத்தி இரண்டு Object-களை உருவாக்கி அவற்றின் விவரங்களை காட்டும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create two objects by passing different values to the constructor.",

        hintTamil:
          "Constructor-க்கு வெவ்வேறு மதிப்புகளை அனுப்பி இரண்டு Object-களை உருவாக்குங்கள்.",

        expectedOutput: `Student 1 = Deepak
Student 2 = Arun`,

        expectedOutputTamil: `மாணவர் 1 = Deepak
மாணவர் 2 = Arun`,

        solution: `class Student {

    String studentName;

    Student(String studentName) {

        this.studentName = studentName;

    }

}

public class Main {

    public static void main(String[] args) {

        Student student1 = new Student("Deepak");
        Student student2 = new Student("Arun");

        System.out.println("Student 1 = " + student1.studentName);
        System.out.println("Student 2 = " + student2.studentName);

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",

        questionEnglish:
          "Write a Java program to create constructor overloading with one constructor having no parameters and another having one parameter.",

        questionTamil:
          "ஒரு Parameter இல்லாத Constructor மற்றும் ஒரு Parameter கொண்ட Constructor ஆகியவற்றைப் பயன்படுத்தி Constructor Overloading செய்யும் Java Program எழுதுங்கள்.",

        hintEnglish: "Create two constructors with different parameter lists.",

        hintTamil:
          "வேறுபட்ட Parameter-களுடன் இரண்டு Constructor-களை உருவாக்குங்கள்.",

        expectedOutput: `Default Constructor
Student Name = Deepak`,

        expectedOutputTamil: `இயல்புநிலை Constructor
மாணவர் பெயர் = Deepak`,

        solution: `class Student {

    Student() {

        System.out.println("Default Constructor");

    }

    Student(String name) {

        System.out.println("Student Name = " + name);

    }

}

public class Main {

    public static void main(String[] args) {

        Student student1 = new Student();
        Student student2 = new Student("Deepak");

    }

}`,

        challenge: false,
        locked: false,
        completed: false,
      },
      {
        id: 9,
        title: "Question 9",

        questionEnglish:
          "Write a Java program to create constructor overloading with constructors having one, two, and three parameters.",

        questionTamil:
          "ஒரு, இரண்டு மற்றும் மூன்று Parameters கொண்ட Constructor Overloading-ஐ உருவாக்கும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create three constructors with different numbers of parameters.",

        hintTamil:
          "வேறுபட்ட எண்ணிக்கையிலான Parameters கொண்ட மூன்று Constructor-களை உருவாக்குங்கள்.",

        expectedOutput: `Name = Deepak
Name = Deepak Age = 20
Name = Deepak Age = 20 Department = CSE`,

        expectedOutputTamil: `பெயர் = Deepak
பெயர் = Deepak வயது = 20
பெயர் = Deepak வயது = 20 துறை = CSE`,

        solution: ``,

        challenge: true,
        locked: false,
        completed: false,
      },
      {
        id: 10,
        title: "Question 10",

        questionEnglish:
          "Write a Java program to create two Employee objects using a parameterized constructor and display their details.",

        questionTamil:
          "Parameterized Constructor-ஐ பயன்படுத்தி இரண்டு Employee Object-களை உருவாக்கி அவற்றின் விவரங்களை காட்டும் Java Program எழுதுங்கள்.",

        hintEnglish:
          "Create two Employee objects by passing different values to the constructor.",

        hintTamil:
          "Constructor-க்கு வெவ்வேறு மதிப்புகளை அனுப்பி இரண்டு Employee Object-களை உருவாக்குங்கள்.",

        expectedOutput: `Employee 1
Name = Arun
Salary = 30000.0

Employee 2
Name = Kumar
Salary = 45000.0`,

        expectedOutputTamil: `பணியாளர் 1
பெயர் = Arun
சம்பளம் = 30000.0

பணியாளர் 2
பெயர் = Kumar
சம்பளம் = 45000.0`,

        solution: ``,

        challenge: true,
        locked: false,
        completed: false,
      },
    ],
  },
  {
    topicId: 26,
    title: "this Keyword",

    questions: [
      {
  id: 10,
  title: "Question 10",

  questionEnglish:
    "Write a Java program to create two Employee objects using a parameterized constructor and display their details.",

  questionTamil:
    "Parameterized Constructor-ஐ பயன்படுத்தி இரண்டு Employee Object-களை உருவாக்கி அவற்றின் விவரங்களை காட்டும் Java Program எழுதுங்கள்.",

  hintEnglish:
    "Create two Employee objects by passing different values to the constructor.",

  hintTamil:
    "Constructor-க்கு வெவ்வேறு மதிப்புகளை அனுப்பி இரண்டு Employee Object-களை உருவாக்குங்கள்.",

  expectedOutput: `Employee 1
Name = Arun
Salary = 30000.0

Employee 2
Name = Kumar
Salary = 45000.0`,

  expectedOutputTamil: `பணியாளர் 1
பெயர் = Arun
சம்பளம் = 30000.0

பணியாளர் 2
பெயர் = Kumar
சம்பளம் = 45000.0`,

  solution: ``,

  challenge: true,
  locked: false,
  completed: false,
},
      {
  id: 2,
  title: "Question 2",

  questionEnglish:
    "Write a Java program to use the this keyword to initialize the name and age of a student.",

  questionTamil:
    "மாணவரின் பெயர் மற்றும் வயதை Initialize செய்ய this Keyword-ஐ பயன்படுத்தும் Java Program எழுதுங்கள்.",

  hintEnglish:
    "Use this keyword to assign both constructor parameters to instance variables.",

  hintTamil:
    "Constructor Parameters-ஐ Instance Variables-க்கு Assign செய்ய this Keyword-ஐ பயன்படுத்துங்கள்.",

  expectedOutput: `Student Name = Deepak
Student Age = 20`,

  expectedOutputTamil: `மாணவர் பெயர் = Deepak
மாணவர் வயது = 20`,

  solution: `class Student {

    String studentName;
    int studentAge;

    Student(String studentName, int studentAge) {

        this.studentName = studentName;
        this.studentAge = studentAge;

    }

    public static void main(String[] args) {

        Student student = new Student("Deepak", 20);

        System.out.println("Student Name = " + student.studentName);
        System.out.println("Student Age = " + student.studentAge);

    }

}`,

  challenge: false,
  locked: false,
  completed: false,
},
      {
  id: 3,
  title: "Question 3",

  questionEnglish:
    "Write a Java program to use the this keyword to initialize the brand and model of a car.",

  questionTamil:
    "Car-இன் Brand மற்றும் Model-ஐ Initialize செய்ய this Keyword-ஐ பயன்படுத்தும் Java Program எழுதுங்கள்.",

  hintEnglish:
    "Assign the constructor parameters to instance variables using this keyword.",

  hintTamil:
    "Constructor Parameters-ஐ Instance Variables-க்கு Assign செய்ய this Keyword-ஐ பயன்படுத்துங்கள்.",

  expectedOutput: `Brand = Toyota
Model = Fortuner`,

  expectedOutputTamil: `பிராண்ட் = Toyota
மாடல் = Fortuner`,

  solution: `class Car {

    String brand;
    String model;

    Car(String brand, String model) {

        this.brand = brand;
        this.model = model;

    }

}

public class Main {

    public static void main(String[] args) {

        Car car = new Car("Toyota", "Fortuner");

        System.out.println("Brand = " + car.brand);
        System.out.println("Model = " + car.model);

    }

}`,

  challenge: false,
  locked: false,
  completed: false,
},
      {
  id: 4,
  title: "Question 4",

  questionEnglish:
    "Write a Java program to use the this keyword to initialize the employee's name and salary.",

  questionTamil:
    "பணியாளரின் பெயர் மற்றும் சம்பளத்தை Initialize செய்ய this Keyword-ஐ பயன்படுத்தும் Java Program எழுதுங்கள்.",

  hintEnglish:
    "Use this keyword to assign constructor parameters to instance variables.",

  hintTamil:
    "Constructor Parameters-ஐ Instance Variables-க்கு Assign செய்ய this Keyword-ஐ பயன்படுத்துங்கள்.",

  expectedOutput: `Employee Name = Arun
Salary = 30000.0`,

  expectedOutputTamil: `பணியாளர் பெயர் = Arun
சம்பளம் = 30000.0`,

  solution: `class Employee {

    String employeeName;
    double salary;

    Employee(String employeeName, double salary) {

        this.employeeName = employeeName;
        this.salary = salary;

    }

}

public class Main {

    public static void main(String[] args) {

        Employee employee = new Employee("Arun", 30000.0);

        System.out.println("Employee Name = " + employee.employeeName);
        System.out.println("Salary = " + employee.salary);

    }

}`,

  challenge: false,
  locked: false,
  completed: false,
},
      {
        id: 5,
        title: "Question 5",
        locked: false,
        completed: false,
      },
      {
        id: 6,
        title: "Question 6",
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",
        locked: false,
        completed: false,
      },
      { id: 9, title: "Challenge Question 9", locked: true, completed: false },
      {
        id: 10,
        title: "Challenge Question 10",
        locked: true,
        completed: false,
      },
    ],
  },

  {
    topicId: 27,
    title: "Inheritance",

    questions: [
      {
        id: 1,
        title: "Question 1",
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",
        locked: false,
        completed: false,
      },
      {
        id: 6,
        title: "Question 6",
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",
        locked: false,
        completed: false,
      },
      { id: 9, title: "Challenge Question 9", locked: true, completed: false },
      {
        id: 10,
        title: "Challenge Question 10",
        locked: true,
        completed: false,
      },
    ],
  },
  {
    topicId: 28,
    title: "Single Inheritance",

    questions: [
      {
        id: 1,
        title: "Question 1",
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",
        locked: false,
        completed: false,
      },
      {
        id: 6,
        title: "Question 6",
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",
        locked: false,
        completed: false,
      },
      { id: 9, title: "Challenge Question 9", locked: true, completed: false },
      {
        id: 10,
        title: "Challenge Question 10",
        locked: true,
        completed: false,
      },
    ],
  },
  {
    topicId: 29,
    title: "Multilevel Inheritance",

    questions: [
      {
        id: 1,
        title: "Question 1",
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",
        locked: false,
        completed: false,
      },
      {
        id: 6,
        title: "Question 6",
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",
        locked: false,
        completed: false,
      },
      { id: 9, title: "Challenge Question 9", locked: true, completed: false },
      {
        id: 10,
        title: "Challenge Question 10",
        locked: true,
        completed: false,
      },
    ],
  },
  {
    topicId: 30,
    title: "Hierarchical Inheritance",

    questions: [
      {
        id: 1,
        title: "Question 1",
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",
        locked: false,
        completed: false,
      },
      {
        id: 6,
        title: "Question 6",
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",
        locked: false,
        completed: false,
      },
      { id: 9, title: "Challenge Question 9", locked: true, completed: false },
      {
        id: 10,
        title: "Challenge Question 10",
        locked: true,
        completed: false,
      },
    ],
  },
  {
    topicId: 31,
    title: "Multiple Inheritance",

    questions: [
      {
        id: 1,
        title: "Question 1",
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",
        locked: false,
        completed: false,
      },
      {
        id: 6,
        title: "Question 6",
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",
        locked: false,
        completed: false,
      },
      { id: 9, title: "Challenge Question 9", locked: true, completed: false },
      {
        id: 10,
        title: "Challenge Question 10",
        locked: true,
        completed: false,
      },
    ],
  },
  {
    topicId: 32,
    title: "Hybrid Inheritance",

    questions: [
      {
        id: 1,
        title: "Question 1",
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",
        locked: false,
        completed: false,
      },
      {
        id: 6,
        title: "Question 6",
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",
        locked: false,
        completed: false,
      },
      { id: 9, title: "Challenge Question 9", locked: true, completed: false },
      {
        id: 10,
        title: "Challenge Question 10",
        locked: true,
        completed: false,
      },
    ],
  },
  {
    topicId: 33,
    title: "Exception Handling",

    questions: [
      {
        id: 1,
        title: "Question 1",
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",
        locked: false,
        completed: false,
      },
      {
        id: 6,
        title: "Question 6",
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",
        locked: false,
        completed: false,
      },
      { id: 9, title: "Challenge Question 9", locked: true, completed: false },
      {
        id: 10,
        title: "Challenge Question 10",
        locked: true,
        completed: false,
      },
    ],
  },
  {
    topicId: 34,
    title: "Try Catch",

    questions: [
      {
        id: 1,
        title: "Question 1",
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",
        locked: false,
        completed: false,
      },
      {
        id: 6,
        title: "Question 6",
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",
        locked: false,
        completed: false,
      },
      { id: 9, title: "Challenge Question 9", locked: true, completed: false },
      {
        id: 10,
        title: "Challenge Question 10",
        locked: true,
        completed: false,
      },
    ],
  },
  {
    topicId: 35,
    title: "Finally Block",

    questions: [
      {
        id: 1,
        title: "Question 1",
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",
        locked: false,
        completed: false,
      },
      {
        id: 6,
        title: "Question 6",
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",
        locked: false,
        completed: false,
      },
      { id: 9, title: "Challenge Question 9", locked: true, completed: false },
      {
        id: 10,
        title: "Challenge Question 10",
        locked: true,
        completed: false,
      },
    ],
  },
  {
    topicId: 36,
    title: "Throw Keyword",

    questions: [
      {
        id: 1,
        title: "Question 1",
        locked: false,
        completed: false,
      },
      {
        id: 2,
        title: "Question 2",
        locked: false,
        completed: false,
      },
      {
        id: 3,
        title: "Question 3",
        locked: false,
        completed: false,
      },
      {
        id: 4,
        title: "Question 4",
        locked: false,
        completed: false,
      },
      {
        id: 5,
        title: "Question 5",
        locked: false,
        completed: false,
      },
      {
        id: 6,
        title: "Question 6",
        locked: false,
        completed: false,
      },
      {
        id: 7,
        title: "Question 7",
        locked: false,
        completed: false,
      },
      {
        id: 8,
        title: "Question 8",
        locked: false,
        completed: false,
      },
      { id: 9, title: "Challenge Question 9", locked: true, completed: false },
      {
        id: 10,
        title: "Challenge Question 10",
        locked: true,
        completed: false,
      },
    ],
  },
];

export default questions;
