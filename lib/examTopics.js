// Exam-focused Important Topics with Code Examples and Key Concepts

export const EXAM_TOPICS = {
  1: {
    "Programming in C": {
      topics: [
        {
          name: "Palindrome Program",
          importance: "High",
          code: `#include <stdio.h>
#include <string.h>

int main() {
    char str[100], rev[100];
    int i, j, len;
    
    printf("Enter a string: ");
    scanf("%s", str);
    
    len = strlen(str);
    
    // Reverse the string
    for(i = len - 1, j = 0; i >= 0; i--, j++) {
        rev[j] = str[i];
    }
    rev[j] = '\\0';
    
    // Check palindrome
    if(strcmp(str, rev) == 0)
        printf("Palindrome\\n");
    else
        printf("Not Palindrome\\n");
    
    return 0;
}`,
          keyPoints: [
            "String manipulation using arrays",
            "String reversal logic",
            "String comparison using strcmp()",
            "Loop iteration techniques"
          ]
        },
        {
          name: "Prime Number Check",
          importance: "High",
          code: `#include <stdio.h>

int isPrime(int n) {
    if(n <= 1) return 0;
    for(int i = 2; i * i <= n; i++) {
        if(n % i == 0) return 0;
    }
    return 1;
}

int main() {
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);
    
    if(isPrime(num))
        printf("%d is Prime\\n", num);
    else
        printf("%d is Not Prime\\n", num);
    
    return 0;
}`,
          keyPoints: [
            "Function implementation",
            "Efficient prime checking (√n optimization)",
            "Return value usage",
            "Conditional logic"
          ]
        },
        {
          name: "Fibonacci Series",
          importance: "High",
          code: `#include <stdio.h>

void fibonacci(int n) {
    int a = 0, b = 1, next;
    
    printf("Fibonacci Series: ");
    for(int i = 0; i < n; i++) {
        printf("%d ", a);
        next = a + b;
        a = b;
        b = next;
    }
    printf("\\n");
}

int main() {
    int terms;
    printf("Enter number of terms: ");
    scanf("%d", &terms);
    fibonacci(terms);
    return 0;
}`,
          keyPoints: [
            "Sequence generation",
            "Variable swapping technique",
            "Loop with multiple updates",
            "Function with parameters"
          ]
        },
        {
          name: "Matrix Operations",
          importance: "Medium",
          code: `#include <stdio.h>

#define MAX 10

void addMatrix(int a[][MAX], int b[][MAX], int result[][MAX], int r, int c) {
    for(int i = 0; i < r; i++) {
        for(int j = 0; j < c; j++) {
            result[i][j] = a[i][j] + b[i][j];
        }
    }
}

void displayMatrix(int mat[][MAX], int r, int c) {
    for(int i = 0; i < r; i++) {
        for(int j = 0; j < c; j++) {
            printf("%d ", mat[i][j]);
        }
        printf("\\n");
    }
}

int main() {
    int a[MAX][MAX], b[MAX][MAX], sum[MAX][MAX];
    int rows, cols;
    
    printf("Enter rows and columns: ");
    scanf("%d %d", &rows, &cols);
    
    printf("Enter matrix A:\\n");
    for(int i = 0; i < rows; i++)
        for(int j = 0; j < cols; j++)
            scanf("%d", &a[i][j]);
    
    printf("Enter matrix B:\\n");
    for(int i = 0; i < rows; i++)
        for(int j = 0; j < cols; j++)
            scanf("%d", &b[i][j]);
    
    addMatrix(a, b, sum, rows, cols);
    
    printf("Sum:\\n");
    displayMatrix(sum, rows, cols);
    
    return 0;
}`,
          keyPoints: [
            "2D array handling",
            "Multi-dimensional array as function parameter",
            "Nested loops",
            "Matrix operations"
          ]
        },
        {
          name: "Pointer Basics",
          importance: "Very High",
          code: `#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 10, y = 20;
    int *ptr;
    
    ptr = &x;
    printf("Value of x: %d\\n", *ptr);
    printf("Address of x: %p\\n", ptr);
    
    swap(&x, &y);
    printf("After swap: x = %d, y = %d\\n", x, y);
    
    return 0;
}`,
          keyPoints: [
            "Pointer declaration and initialization",
            "Address-of operator (&)",
            "Dereference operator (*)",
            "Call by reference using pointers"
          ]
        },
        {
          name: "File Handling",
          importance: "High",
          code: `#include <stdio.h>

int main() {
    FILE *fp;
    char ch;
    
    // Write to file
    fp = fopen("test.txt", "w");
    if(fp == NULL) {
        printf("Error opening file\\n");
        return 1;
    }
    fprintf(fp, "Hello, World!\\n");
    fclose(fp);
    
    // Read from file
    fp = fopen("test.txt", "r");
    while((ch = fgetc(fp)) != EOF) {
        printf("%c", ch);
    }
    fclose(fp);
    
    return 0;
}`,
          keyPoints: [
            "File pointer declaration",
            "File opening modes (r, w, a)",
            "Reading and writing operations",
            "Proper file closing"
          ]
        }
      ],
      theoryTopics: [
        "Difference between Call by Value and Call by Reference",
        "Storage Classes (auto, static, extern, register)",
        "Preprocessor Directives (#define, #include)",
        "Structure vs Union",
        "Dynamic Memory Allocation (malloc, calloc, free)"
      ]
    },
    "Mathematics-I": {
      topics: [
        {
          name: "Derivatives",
          importance: "Very High",
          keyPoints: [
            "Power rule: d/dx(x^n) = nx^(n-1)",
            "Product rule: d/dx(uv) = u(dv/dx) + v(du/dx)",
            "Quotient rule: d/dx(u/v) = [v(du/dx) - u(dv/dx)]/v²",
            "Chain rule: d/dx[f(g(x))] = f'(g(x)) * g'(x)"
          ],
          example: "Find derivative of y = 3x² + 2x + 1\nSolution: dy/dx = 6x + 2"
        },
        {
          name: "Integration",
          importance: "Very High",
          keyPoints: [
            "∫x^n dx = x^(n+1)/(n+1) + C",
            "∫e^x dx = e^x + C",
            "∫(1/x) dx = ln|x| + C",
            "Integration by parts: ∫u dv = uv - ∫v du"
          ],
          example: "∫(2x + 3)dx = x² + 3x + C"
        },
        {
          name: "Matrices",
          importance: "High",
          keyPoints: [
            "Matrix addition and multiplication",
            "Determinant calculation",
            "Inverse of matrix: A⁻¹ = adj(A)/|A|",
            "Cramer's Rule for solving equations"
          ],
          example: "Find determinant of 2x2 matrix:\n|a b|\n|c d| = ad - bc"
        }
      ],
      theoryTopics: [
        "Rolle's Theorem",
        "Mean Value Theorem",
        "Taylor and Maclaurin Series",
        "Maxima and Minima",
        "Partial Derivatives"
      ]
    },
    "Digital Logic": {
      topics: [
        {
          name: "Boolean Algebra",
          importance: "Very High",
          keyPoints: [
            "De Morgan's Laws: (A+B)' = A'B', (AB)' = A'+B'",
            "Absorption Law: A + AB = A",
            "Consensus Theorem: AB + A'C + BC = AB + A'C",
            "Distributive Law: A(B+C) = AB + AC"
          ],
          example: "Simplify: AB + AB' = A(B + B') = A"
        },
        {
          name: "K-Map Simplification",
          importance: "Very High",
          keyPoints: [
            "Group adjacent 1s in powers of 2",
            "Minimize number of groups",
            "Each group represents a product term",
            "Don't care conditions can be used"
          ],
          example: "3-variable K-Map for F(A,B,C) = Σm(0,1,2,5,6,7)"
        },
        {
          name: "Logic Gates",
          importance: "High",
          keyPoints: [
            "AND: Y = AB",
            "OR: Y = A+B",
            "NOT: Y = A'",
            "NAND: Y = (AB)'",
            "NOR: Y = (A+B)'",
            "XOR: Y = A⊕B = AB' + A'B",
            "XNOR: Y = AB + A'B'"
          ]
        }
      ],
      theoryTopics: [
        "Number System Conversions",
        "Half Adder and Full Adder",
        "Flip-Flops (SR, JK, D, T)",
        "Counters and Registers",
        "Multiplexer and Demultiplexer"
      ]
    }
  },
  2: {
    "OOP in C++": {
      topics: [
        {
          name: "Class and Object",
          importance: "Very High",
          code: `#include <iostream>
using namespace std;

class Student {
private:
    int id;
    string name;
    float marks;

public:
    // Constructor
    Student(int i, string n, float m) {
        id = i;
        name = n;
        marks = m;
    }
    
    // Member function
    void display() {
        cout << "ID: " << id << endl;
        cout << "Name: " << name << endl;
        cout << "Marks: " << marks << endl;
    }
    
    // Getter
    float getMarks() { return marks; }
};

int main() {
    Student s1(101, "John", 85.5);
    s1.display();
    return 0;
}`,
          keyPoints: [
            "Data encapsulation",
            "Access specifiers (private, public, protected)",
            "Constructor usage",
            "Member functions"
          ]
        },
        {
          name: "Inheritance",
          importance: "Very High",
          code: `#include <iostream>
using namespace std;

class Shape {
protected:
    float area;
public:
    virtual void calculateArea() = 0; // Pure virtual
    void display() {
        cout << "Area: " << area << endl;
    }
};

class Rectangle : public Shape {
private:
    float length, width;
public:
    Rectangle(float l, float w) : length(l), width(w) {}
    
    void calculateArea() override {
        area = length * width;
    }
};

class Circle : public Shape {
private:
    float radius;
public:
    Circle(float r) : radius(r) {}
    
    void calculateArea() override {
        area = 3.14 * radius * radius;
    }
};

int main() {
    Rectangle rect(5, 3);
    rect.calculateArea();
    rect.display();
    
    Circle circ(4);
    circ.calculateArea();
    circ.display();
    
    return 0;
}`,
          keyPoints: [
            "Types of inheritance (single, multiple, multilevel)",
            "Protected access specifier",
            "Virtual functions",
            "Function overriding"
          ]
        },
        {
          name: "Polymorphism",
          importance: "High",
          code: `#include <iostream>
using namespace std;

class Calculator {
public:
    // Function Overloading (Compile-time polymorphism)
    int add(int a, int b) {
        return a + b;
    }
    
    float add(float a, float b) {
        return a + b;
    }
    
    int add(int a, int b, int c) {
        return a + b + c;
    }
};

int main() {
    Calculator calc;
    cout << calc.add(5, 3) << endl;        // Calls int version
    cout << calc.add(5.5f, 3.2f) << endl;  // Calls float version
    cout << calc.add(1, 2, 3) << endl;     // Calls 3-parameter version
    return 0;
}`,
          keyPoints: [
            "Compile-time polymorphism (Function overloading)",
            "Runtime polymorphism (Virtual functions)",
            "Operator overloading",
            "Abstract classes"
          ]
        }
      ],
      theoryTopics: [
        "Friend Function and Friend Class",
        "Operator Overloading",
        "Exception Handling (try, catch, throw)",
        "Templates (Function and Class)",
        "STL (Vector, List, Map)"
      ]
    },
    "Data Structures": {
      topics: [
        {
          name: "Linked List Operations",
          importance: "Very High",
          code: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

class LinkedList {
private:
    Node* head;
public:
    LinkedList() : head(NULL) {}
    
    void insertAtBeginning(int value) {
        Node* newNode = new Node();
        newNode->data = value;
        newNode->next = head;
        head = newNode;
    }
    
    void display() {
        Node* temp = head;
        while(temp != NULL) {
            cout << temp->data << " -> ";
            temp = temp->next;
        }
        cout << "NULL" << endl;
    }
    
    void deleteNode(int value) {
        if(head == NULL) return;
        
        if(head->data == value) {
            Node* temp = head;
            head = head->next;
            delete temp;
            return;
        }
        
        Node* curr = head;
        while(curr->next != NULL && curr->next->data != value) {
            curr = curr->next;
        }
        
        if(curr->next != NULL) {
            Node* temp = curr->next;
            curr->next = curr->next->next;
            delete temp;
        }
    }
};

int main() {
    LinkedList list;
    list.insertAtBeginning(3);
    list.insertAtBeginning(2);
    list.insertAtBeginning(1);
    list.display();
    list.deleteNode(2);
    list.display();
    return 0;
}`,
          keyPoints: [
            "Dynamic memory allocation",
            "Node structure",
            "Insertion operations",
            "Deletion operations",
            "Traversal"
          ]
        }
      ],
      theoryTopics: [
        "Stack and Queue Implementation",
        "Binary Tree Traversals (Inorder, Preorder, Postorder)",
        "Binary Search Tree Operations",
        "Graph Traversals (BFS, DFS)",
        "Hashing and Collision Resolution"
      ]
    }
  },
  3: {
    "Microcontroller": {
      topics: [
        {
          name: "LED Blink Program (8051)",
          importance: "High",
          code: `#include <reg51.h>

sbit LED = P1^0;  // LED connected to P1.0

void delay(unsigned int time) {
    unsigned int i, j;
    for(i = 0; i < time; i++)
        for(j = 0; j < 1275; j++);
}

void main() {
    while(1) {
        LED = 1;        // Turn ON LED
        delay(1000);    // 1 second delay
        LED = 0;        // Turn OFF LED
        delay(1000);    // 1 second delay
    }
}`,
          keyPoints: [
            "Port configuration",
            "Bit manipulation using sbit",
            "Delay function implementation",
            "Infinite loop for continuous operation"
          ]
        },
        {
          name: "LCD Interfacing",
          importance: "Very High",
          code: `#include <reg51.h>

#define LCD_DATA P2
sbit RS = P3^0;
sbit RW = P3^1;
sbit EN = P3^2;

void lcd_cmd(unsigned char cmd) {
    LCD_DATA = cmd;
    RS = 0;
    RW = 0;
    EN = 1;
    delay(5);
    EN = 0;
}

void lcd_data(unsigned char dat) {
    LCD_DATA = dat;
    RS = 1;
    RW = 0;
    EN = 1;
    delay(5);
    EN = 0;
}

void lcd_init() {
    lcd_cmd(0x38);  // 8-bit mode, 2 lines
    lcd_cmd(0x0C);  // Display ON, cursor OFF
    lcd_cmd(0x01);  // Clear display
    lcd_cmd(0x80);  // Cursor at first line
}

void main() {
    lcd_init();
    lcd_data('H');
    lcd_data('E');
    lcd_data('L');
    lcd_data('L');
    lcd_data('O');
    while(1);
}`,
          keyPoints: [
            "LCD command and data modes",
            "RS, RW, EN pin control",
            "LCD initialization sequence",
            "Character display"
          ]
        }
      ],
      theoryTopics: [
        "8051 Architecture (Ports, Timers, Interrupts)",
        "Timer Programming (Mode 0, 1, 2)",
        "Serial Communication (UART)",
        "Interrupt Handling",
        "ADC and Sensor Interfacing"
      ]
    },
    "Database Management System": {
      topics: [
        {
          name: "SQL Queries",
          importance: "Very High",
          code: `-- Create Table
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(50),
    Age INT,
    Department VARCHAR(30),
    Marks FLOAT
);

-- Insert Data
INSERT INTO Students VALUES (1, 'John', 20, 'IT', 85.5);
INSERT INTO Students VALUES (2, 'Alice', 21, 'CS', 90.0);
INSERT INTO Students VALUES (3, 'Bob', 19, 'IT', 78.5);

-- Select Queries
SELECT * FROM Students;
SELECT Name, Marks FROM Students WHERE Department = 'IT';
SELECT * FROM Students WHERE Marks > 80;

-- Update
UPDATE Students SET Marks = 88.0 WHERE StudentID = 3;

-- Delete
DELETE FROM Students WHERE Age < 20;

-- Joins
SELECT s.Name, c.CourseName
FROM Students s
INNER JOIN Courses c ON s.StudentID = c.StudentID;

-- Aggregate Functions
SELECT Department, AVG(Marks) as AvgMarks
FROM Students
GROUP BY Department
HAVING AVG(Marks) > 80;`,
          keyPoints: [
            "DDL (CREATE, ALTER, DROP)",
            "DML (INSERT, UPDATE, DELETE)",
            "SELECT with WHERE, ORDER BY, GROUP BY",
            "Joins (INNER, LEFT, RIGHT)",
            "Aggregate functions (COUNT, AVG, SUM)"
          ]
        }
      ],
      theoryTopics: [
        "Normalization (1NF, 2NF, 3NF, BCNF)",
        "ER Diagrams",
        "ACID Properties",
        "Transaction Management",
        "Indexing and B-Trees"
      ]
    }
  },
  4: {
    "Operating System": {
      topics: [
        {
          name: "FCFS Scheduling",
          importance: "Very High",
          code: `#include <stdio.h>

struct Process {
    int pid;
    int burstTime;
    int waitingTime;
    int turnAroundTime;
};

void calculateTimes(struct Process p[], int n) {
    p[0].waitingTime = 0;
    
    for(int i = 1; i < n; i++) {
        p[i].waitingTime = p[i-1].waitingTime + p[i-1].burstTime;
    }
    
    for(int i = 0; i < n; i++) {
        p[i].turnAroundTime = p[i].waitingTime + p[i].burstTime;
    }
}

void display(struct Process p[], int n) {
    float totalWT = 0, totalTAT = 0;
    
    printf("PID\\tBT\\tWT\\tTAT\\n");
    for(int i = 0; i < n; i++) {
        printf("%d\\t%d\\t%d\\t%d\\n", 
               p[i].pid, p[i].burstTime, 
               p[i].waitingTime, p[i].turnAroundTime);
        totalWT += p[i].waitingTime;
        totalTAT += p[i].turnAroundTime;
    }
    
    printf("Average WT: %.2f\\n", totalWT/n);
    printf("Average TAT: %.2f\\n", totalTAT/n);
}

int main() {
    struct Process p[] = {{1, 5}, {2, 3}, {3, 8}, {4, 6}};
    int n = 4;
    
    calculateTimes(p, n);
    display(p, n);
    
    return 0;
}`,
          keyPoints: [
            "Non-preemptive scheduling",
            "Waiting time calculation",
            "Turnaround time = Waiting time + Burst time",
            "Average time calculations"
          ]
        }
      ],
      theoryTopics: [
        "Process States and PCB",
        "Scheduling Algorithms (SJF, Priority, Round Robin)",
        "Deadlock (Detection, Prevention, Avoidance)",
        "Memory Management (Paging, Segmentation)",
        "Page Replacement Algorithms (FIFO, LRU, Optimal)"
      ]
    },
    "JAVA Programming": {
      topics: [
        {
          name: "Exception Handling",
          importance: "Very High",
          code: `public class ExceptionDemo {
    public static void main(String[] args) {
        try {
            int a = 10;
            int b = 0;
            int result = a / b;  // ArithmeticException
        }
        catch(ArithmeticException e) {
            System.out.println("Cannot divide by zero");
            System.out.println("Error: " + e.getMessage());
        }
        finally {
            System.out.println("Finally block always executes");
        }
        
        // Custom exception
        try {
            checkAge(15);
        }
        catch(Exception e) {
            System.out.println(e.getMessage());
        }
    }
    
    static void checkAge(int age) throws Exception {
        if(age < 18) {
            throw new Exception("Age must be 18 or above");
        }
    }
}`,
          keyPoints: [
            "try-catch-finally blocks",
            "Multiple catch blocks",
            "throw keyword",
            "throws keyword",
            "Custom exceptions"
          ]
        }
      ],
      theoryTopics: [
        "Multithreading (Thread class, Runnable interface)",
        "Collections Framework (ArrayList, HashMap)",
        "Interface vs Abstract Class",
        "JDBC for Database Connectivity",
        "GUI using Swing/JavaFX"
      ]
    }
  }
};