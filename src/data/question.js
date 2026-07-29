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

  hintEnglish:
    "Use the System.out.println() statement.",

  hintTamil:
    "System.out.println() Statement-ஐ பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use the System.out.println() statement.",

  hintTamil:
    "System.out.println() Statement-ஐ பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use two System.out.println() statements.",

  hintTamil:
    "இரண்டு System.out.println() Statements-ஐ பயன்படுத்துங்கள்.",

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

  questionEnglish:
    "Write a Java program to print your college name.",

  questionTamil:
    "உங்கள் கல்லூரியின் பெயரை Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

  hintEnglish:
    "Use one System.out.println() statement.",

  hintTamil:
    "ஒரு System.out.println() Statement-ஐ பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use two System.out.println() statements.",

  hintTamil:
    "இரண்டு System.out.println() Statements-ஐ பயன்படுத்துங்கள்.",

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

  questionEnglish:
    "Write a Java program to print the following output.",

  questionTamil:
    "கீழே கொடுக்கப்பட்டுள்ள Output-ஐ Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

  hintEnglish:
    "Use four System.out.println() statements.",

  hintTamil:
    "நான்கு System.out.println() Statements-ஐ பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use three System.out.println() statements.",

  hintTamil:
    "மூன்று System.out.println() Statements-ஐ பயன்படுத்துங்கள்.",

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

  questionEnglish:
    "Write a Java program to print the following output.",

  questionTamil:
    "கீழே கொடுக்கப்பட்டுள்ள Output-ஐ Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

  hintEnglish:
    "Print each line separately.",

  hintTamil:
    "ஒவ்வொரு வரியையும் தனித்தனியாக Print செய்யுங்கள்.",

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

  questionEnglish:
    "Write a Java program to print the following pattern.",

  questionTamil:
    "கீழே கொடுக்கப்பட்டுள்ள Pattern-ஐ Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

  hintEnglish:
    "Use multiple System.out.println() statements.",

  hintTamil:
    "பல System.out.println() Statements-ஐ பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use int age = 20; and System.out.println().",

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
    "Declare a String variable named name with the value \"Deepak\" and print it.",

  questionTamil:
    "\"Deepak\" என்ற மதிப்புடன் name என்ற String Variable-ஐ உருவாக்கி Print செய்யுங்கள்.",

  hintEnglish:
    "Use String name = \"Deepak\";",

  hintTamil:
    "String name = \"Deepak\"; பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use the double data type.",

  hintTamil:
    "double Data Type-ஐ பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use single quotes for char values.",

  hintTamil:
    "char மதிப்பிற்கு Single Quotes பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use boolean isPassed = true;",

  hintTamil:
    "boolean isPassed = true; பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Declare two variables and use two println statements.",

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

  hintEnglish:
    "Variables can store new values.",

  hintTamil:
    "Variable-இன் மதிப்பை மாற்றலாம்.",

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

  hintEnglish:
    "Use String and int variables.",

  hintTamil:
    "String மற்றும் int Variables பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use String and int variables.",

  hintTamil:
    "String மற்றும் int Variables பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use one variable for each data type.",

  hintTamil:
    "ஒவ்வொரு Data Type-க்கும் ஒரு Variable பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use the int data type.",

  hintTamil:
    "int Data Type-ஐ பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use the double data type.",

  hintTamil:
    "double Data Type-ஐ பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "A char stores only one character.",

  hintTamil:
    "char ஒரு எழுத்தை மட்டுமே சேமிக்கும்.",

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

  hintEnglish:
    "Use the boolean data type.",

  hintTamil:
    "boolean Data Type-ஐ பயன்படுத்துங்கள்.",

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
    "Declare a String variable named city with the value \"Chennai\" and print it.",

  questionTamil:
    "\"Chennai\" என்ற மதிப்புடன் city என்ற String Variable-ஐ உருவாக்கி Print செய்யுங்கள்.",

  hintEnglish:
    "Strings use double quotes.",

  hintTamil:
    "String மதிப்பிற்கு Double Quotes பயன்படுத்துங்கள்.",

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
    "Declare an int variable rollNo = 25 and a String variable name = \"Rahul\". Print both values on separate lines.",

  questionTamil:
    "rollNo = 25 என்ற int Variable மற்றும் name = \"Rahul\" என்ற String Variable-ஐ உருவாக்கி தனித்தனி வரிகளில் Print செய்யுங்கள்.",

  hintEnglish:
    "Use two different data types.",

  hintTamil:
    "இரண்டு வெவ்வேறு Data Types-ஐ பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use double and boolean.",

  hintTamil:
    "double மற்றும் boolean பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use one variable for each data type.",

  hintTamil:
    "ஒவ்வொரு Data Type-க்கும் ஒரு Variable உருவாக்குங்கள்.",

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

  hintEnglish:
    "Choose the correct data type for each value.",

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

  hintEnglish:
    "Use Scanner and nextInt().",

  hintTamil:
    "Scanner மற்றும் nextInt() பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use Scanner and nextLine().",

  hintTamil:
    "Scanner மற்றும் nextLine() பயன்படுத்துங்கள்.",

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

  questionEnglish:
    "Read a decimal number from the user and print it.",

  questionTamil:
    "பயனரிடமிருந்து ஒரு Decimal எண்ணை பெற்று அதை Print செய்யுங்கள்.",

  hintEnglish:
    "Use nextDouble().",

  hintTamil:
    "nextDouble() பயன்படுத்துங்கள்.",

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

  questionEnglish:
    "Read a character from the user and print it.",

  questionTamil:
    "பயனரிடமிருந்து ஒரு Character-ஐ பெற்று அதை Print செய்யுங்கள்.",

  hintEnglish:
    "Use next().charAt(0).",

  hintTamil:
    "next().charAt(0) பயன்படுத்துங்கள்.",

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

  questionEnglish:
    "Read a boolean value from the user and print it.",

  questionTamil:
    "பயனரிடமிருந்து ஒரு Boolean மதிப்பை பெற்று அதை Print செய்யுங்கள்.",

  hintEnglish:
    "Use nextBoolean().",

  hintTamil:
    "nextBoolean() பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use nextLine() and nextInt().",

  hintTamil:
    "nextLine() மற்றும் nextInt() பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use nextInt() twice.",

  hintTamil:
    "nextInt() இரண்டு முறை பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use nextLine(), nextInt(), and nextDouble().",

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

  hintEnglish:
    "Use String, double, and int input methods.",

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

  hintEnglish:
    "Use the + operator.",

  hintTamil:
    "+ Operator-ஐ பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use the - operator.",

  hintTamil:
    "- Operator-ஐ பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use the * operator.",

  hintTamil:
    "* Operator-ஐ பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use the / operator.",

  hintTamil:
    "/ Operator-ஐ பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use the % operator.",

  hintTamil:
    "% Operator-ஐ பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use the ++ operator.",

  hintTamil:
    "++ Operator-ஐ பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use the -- operator.",

  hintTamil:
    "-- Operator-ஐ பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use the += operator.",

  hintTamil:
    "+= Operator-ஐ பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use +, -, *, /, and % operators.",

  hintTamil:
    "+, -, *, / மற்றும் % Operators-ஐ பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Apply each operator in sequence.",

  hintTamil:
    "ஒவ்வொரு Operator-ஐ வரிசையாக பயன்படுத்துங்கள்.",

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
    "Write a Java program to check if a number is greater than 10. If it is, print \"Greater than 10\".",

  questionTamil:
    "ஒரு எண் 10-ஐ விட பெரியதாக இருந்தால் \"Greater than 10\" என்று Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

  hintEnglish:
    "Use an if statement with > operator.",

  hintTamil:
    "> Operator உடன் if Statement பயன்படுத்துங்கள்.",

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
    "Write a Java program to check if a number is less than 100. If it is, print \"Less than 100\".",

  questionTamil:
    "ஒரு எண் 100-ஐ விட சிறியதாக இருந்தால் \"Less than 100\" என்று Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

  hintEnglish:
    "Use the < operator.",

  hintTamil:
    "< Operator பயன்படுத்துங்கள்.",

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
    "Write a Java program to check if a number is equal to 25. If it is, print \"Equal\".",

  questionTamil:
    "ஒரு எண் 25-க்கு சமமாக இருந்தால் \"Equal\" என்று Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

  hintEnglish:
    "Use the == operator.",

  hintTamil:
    "== Operator பயன்படுத்துங்கள்.",

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
    "Write a Java program to check whether a number is even. If it is, print \"Even Number\".",

  questionTamil:
    "ஒரு எண் Even ஆக இருந்தால் \"Even Number\" என்று Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

  hintEnglish:
    "Use % operator with if.",

  hintTamil:
    "% Operator மற்றும் if Statement பயன்படுத்துங்கள்.",

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
    "Write a Java program to check whether a number is positive. If it is, print \"Positive Number\".",

  questionTamil:
    "ஒரு எண் Positive ஆக இருந்தால் \"Positive Number\" என்று Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

  hintEnglish:
    "Check if the number is greater than 0.",

  hintTamil:
    "எண் 0-ஐ விட பெரியதா என்று சரிபார்க்கவும்.",

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
},{
  id: 6,
  title: "Question 6",

  questionEnglish:
    "Write a Java program to check if a person's age is 18 or above. If it is, print \"Eligible to Vote\".",

  questionTamil:
    "ஒருவரின் வயது 18 அல்லது அதற்கு மேல் இருந்தால் \"Eligible to Vote\" என்று Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

  hintEnglish:
    "Use >= operator.",

  hintTamil:
    ">= Operator பயன்படுத்துங்கள்.",

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
},{
  id: 7,
  title: "Question 7",

  questionEnglish:
    "Write a Java program to check if a student's mark is 35 or above. If it is, print \"Pass\".",

  questionTamil:
    "மாணவரின் மதிப்பெண் 35 அல்லது அதற்கு மேல் இருந்தால் \"Pass\" என்று Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

  hintEnglish:
    "Use >= operator.",

  hintTamil:
    ">= Operator பயன்படுத்துங்கள்.",

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
    "Write a Java program to check if a salary is greater than 50000. If it is, print \"High Salary\".",

  questionTamil:
    "சம்பளம் 50000-ஐ விட அதிகமாக இருந்தால் \"High Salary\" என்று Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

  hintEnglish:
    "Use the > operator.",

  hintTamil:
    "> Operator பயன்படுத்துங்கள்.",

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
    "Write a Java program to check if a number is divisible by both 2 and 5. If it is, print \"Divisible by 2 and 5\".",

  questionTamil:
    "ஒரு எண் 2 மற்றும் 5 ஆகிய இரண்டாலும் வகுபட்டால் \"Divisible by 2 and 5\" என்று Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

  hintEnglish:
    "Use % operator and && operator.",

  hintTamil:
    "% மற்றும் && Operators பயன்படுத்துங்கள்.",

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
    "Write a Java program to check if a person is eligible for a driving license (age 18 or above) and print \"Eligible\".",

  questionTamil:
    "ஒருவரின் வயது 18 அல்லது அதற்கு மேல் இருந்தால் \"Eligible\" என்று Print செய்யும் Java Program-ஐ எழுதுங்கள்.",

  hintEnglish:
    "Use if statement and >= operator.",

  hintTamil:
    "if Statement மற்றும் >= Operator பயன்படுத்துங்கள்.",

  expectedOutput: `Eligible`,

  expectedOutputTamil: `Eligible`,

  solution: "NO SOLUTION!!!",

  challenge: true,
  locked: true,
  completed: false,
},    ],
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

  hintEnglish:
    "Use if-else with > 0.",

  hintTamil:
    "> 0 உடன் if-else பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use % 2 == 0.",

  hintTamil:
    "% 2 == 0 பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use >= 35.",

  hintTamil:
    ">= 35 பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use >= 18.",

  hintTamil:
    ">= 18 பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Compare two numbers using >.",

  hintTamil:
    "> Operator பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Adult age is 18 or above.",

  hintTamil:
    "18 அல்லது அதற்கு மேல் Adult.",

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

  hintTamil:
    "Selling Price > Cost Price என்றால் Profit.",

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

  hintEnglish:
    "Use % operator.",

  hintTamil:
    "% Operator பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use the % operator.",

  hintTamil:
    "% Operator பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use >= operator.",

  hintTamil:
    ">= Operator பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use one if statement inside another if statement.",

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

  hintEnglish:
    "First check Pass, then check mark > 90.",

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

  hintEnglish:
    "Use age >=18 and another if for age >=60.",

  hintTamil:
    "முதலில் age >=18, பிறகு age >=60 என்று சரிபார்க்கவும்.",

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

  hintEnglish:
    "Use two if statements with % operator.",

  hintTamil:
    "% Operator உடன் இரண்டு if Statements பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Check salary >30000, then salary >70000.",

  hintTamil:
    "முதலில் salary >30000, பிறகு salary >70000.",

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

  hintEnglish:
    "Use two nested conditions.",

  hintTamil:
    "Nested If பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use a boolean variable and nested if.",

  hintTamil:
    "Boolean Variable மற்றும் Nested If பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use one if inside another if.",

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

  hintEnglish:
    "Use nested if statements with two conditions.",

  hintTamil:
    "இரண்டு Nested If Conditions பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use nested if statements.",

  hintTamil:
    "Nested If Statements பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use switch with case values from 1 to 7.",

  hintTamil:
    "1 முதல் 7 வரை case-களை பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Create cases from 1 to 12.",

  hintTamil:
    "1 முதல் 12 வரை case-களை பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Use a character variable for the operator.",

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

  hintEnglish:
    "Use numbers 1, 2 and 3 in switch.",

  hintTamil:
    "1, 2, 3 ஆகிய case-களை பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Store the grade in a character variable.",

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

  hintEnglish:
    "Store the grade in a character variable.",

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

  hintEnglish:
    "Create four cases for the four seasons.",

  hintTamil:
    "நான்கு Seasons-க்கு நான்கு case-களை உருவாக்குங்கள்.",

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

  hintEnglish:
    "Use the department code in the switch statement.",

  hintTamil:
    "Department Code-ஐ Switch Statement-ல் பயன்படுத்துங்கள்.",

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
    "Use the condition (number > 0) ? \"Positive\" : \"Negative\".",

  hintTamil:
    "(number > 0) ? \"Positive\" : \"Negative\" என்ற வடிவத்தை பயன்படுத்துங்கள்.",

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

  hintEnglish:
    "Check the remainder using the modulus (%) operator.",

  hintTamil:
    "Modulus (%) Operator-ஐ பயன்படுத்தி மீதியை சரிபார்க்கவும்.",

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

  hintTamil:
    "(>) Operator-ஐ பயன்படுத்தி இரண்டு எண்களையும் ஒப்பிடுங்கள்.",

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

  hintEnglish:
    "Check whether the mark is greater than or equal to 35.",

  hintTamil:
    "Mark 35 அல்லது அதற்கு மேல் உள்ளதா என்று சரிபார்க்கவும்.",

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

  hintEnglish:
    "Check whether the age is greater than or equal to 18.",

  hintTamil:
    "Age 18 அல்லது அதற்கு மேல் உள்ளதா என்று சரிபார்க்கவும்.",

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

  hintEnglish:
    "Check whether the age is greater than or equal to 18.",

  hintTamil:
    "Age 18 அல்லது அதற்கு மேல் உள்ளதா என்று சரிபார்க்கவும்.",

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

  hintEnglish:
    "Check whether the purchase amount is greater than 1000.",

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

  hintTamil:
    "ஒரு Variable-ஐ 1-ல் தொடங்கி 5 வரை Increment செய்யுங்கள்.",

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

  hintTamil:
    "Variable-ஐ 5-ல் தொடங்கி 1 வரை Decrement செய்யுங்கள்.",

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

  hintEnglish:
    "Start from 2 and increase the value by 2 each time.",

  hintTamil:
    "2-ல் தொடங்கி ஒவ்வொரு முறையும் 2-ஆல் Increment செய்யுங்கள்.",

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

  hintEnglish:
    "Start from 1 and increase the value by 2 each time.",

  hintTamil:
    "1-ல் தொடங்கி ஒவ்வொரு முறையும் 2-ஆல் Increment செய்யுங்கள்.",

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

  hintEnglish:
    "Print the square of each number inside the while loop.",

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
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
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
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
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
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
    topicId: 14,
  title: "Nested Loops",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
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
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
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
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
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
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
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
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
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
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
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
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
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
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
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
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
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
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
    topicId: 24,
  title: "Object",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
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
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  {
    topicId: 26,
  title: "this Keyword",

    questions: [
      {
         id: 1,
         title: "Question 1", 
         locked: false, 
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
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
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
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
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
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
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
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
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
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
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
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
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
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
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
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
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
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
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
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
         completed: false 
        },
      {
        id: 2,
        title: "Question 2", 
        locked: false, 
        completed: false 
        },
      { 
        id: 3, 
        title: "Question 3", 
        locked: false, 
        completed: false 
        },
      { 
        id: 4,
        title: "Question 4",
        locked: false, 
        completed: false 
        },
      { 
        id: 5, 
        title: "Question 5", 
        locked: false, 
        completed: false 
        },
      { 
        id: 6, 
        title: "Question 6", 
        locked: false, 
        completed: false 
        },
      { 
        id: 7,
        title: "Question 7", 
        locked: false, 
        completed: false 
        },
      { 
        id: 8, 
        title: "Question 8", 
        locked: false, 
        completed: false 
        },
      { id: 9,
        title: "Challenge Question 9", 
        locked: true,
        completed: false 
        },
      { 
        id: 10, 
        title: "Challenge Question 10", 
        locked: true, 
        completed: false 
        },
    ],
  },
  
];

export default questions;