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
  },
  5: {
    "Research Methodology": {
      topics: [
        {
          name: "Scientific Research",
          importance: "Very High",
          keyPoints: [
            "Systematic, objective, and logical process of inquiry",
            "Steps: Identify problem → Literature review → Hypothesis → Data collection → Analysis → Conclusion",
            "Characteristics: Empirical, Replicable, Precise, Systematic, Valid",
            "Goal: Generate new knowledge or verify existing knowledge"
          ]
        },
        {
          name: "Applied vs Fundamental Research",
          importance: "High",
          keyPoints: [
            "Fundamental (Basic): Expands knowledge without immediate application. E.g., studying atomic structure",
            "Applied: Solves specific real-world problems. E.g., developing a vaccine",
            "Fundamental → theoretical; Applied → practical outcomes",
            "Applied uses findings of fundamental research"
          ]
        },
        {
          name: "Types of Research Design",
          importance: "High",
          keyPoints: [
            "Descriptive: Describes characteristics of a phenomenon. E.g., survey",
            "Exploratory: Investigates new areas with little prior info",
            "Experimental: Establishes cause-effect by manipulating variables",
            "Correlational: Finds relationship between two variables (no manipulation)",
            "Case Study: In-depth analysis of a single unit/group"
          ]
        },
        {
          name: "Sampling vs Non-Sampling Error",
          importance: "High",
          keyPoints: [
            "Sampling Error: Difference between sample result and true population value. Occurs due to incomplete representation",
            "Non-Sampling Error: Errors from data collection, processing, or measurement. E.g., respondent bias, data entry errors",
            "Sampling error can be reduced by increasing sample size",
            "Non-sampling errors are harder to control and can affect any study"
          ]
        },
        {
          name: "Parametric vs Non-Parametric Test",
          importance: "High",
          keyPoints: [
            "Parametric: Assumes data follows a specific distribution (usually normal). E.g., t-test, ANOVA, z-test",
            "Non-Parametric: No distribution assumption needed. E.g., Chi-square, Mann-Whitney, Kruskal-Wallis",
            "Parametric → interval/ratio data; Non-parametric → nominal/ordinal data",
            "Non-parametric used when sample is small or data is skewed"
          ]
        },
        {
          name: "Primary and Secondary Data",
          importance: "High",
          keyPoints: [
            "Primary Data: Collected firsthand by researcher. Sources: Surveys, Interviews, Experiments, Observations",
            "Secondary Data: Already collected by someone else. Sources: Books, Journals, Govt. reports, Websites, Census data",
            "Primary → more accurate but expensive; Secondary → less costly but may be outdated",
            "Secondary data reviewed before collecting primary data"
          ]
        },
        {
          name: "Procedure for Testing Population Mean",
          importance: "High",
          keyPoints: [
            "Step 1: State H₀ (null) and H₁ (alternate) hypothesis",
            "Step 2: Choose significance level (α = 0.05 or 0.01)",
            "Step 3: Select test statistic (z-test if n≥30, t-test if n<30)",
            "Step 4: Calculate test statistic: z = (x̄ - μ) / (σ/√n)",
            "Step 5: Find critical value from table",
            "Step 6: Compare → if |calculated| > |critical|, reject H₀"
          ]
        }
      ],
      theoryTopics: [
        "Snowball Sampling",
        "Abbreviations and Bibliography",
        "Report Writing and its importance",
        "Types of report  and importance of ethics in report" 
      ]
    },
    "Computer Graphics": {
      topics: [
        {
          name: "Applications of Computer Graphics",
          importance: "Very High",
          keyPoints: [
            "CAD/CAM: Designing mechanical parts, circuits (AutoCAD)",
            "Entertainment: Animation, movies, gaming (Maya, Blender)",
            "Medical Imaging: MRI, CT scan visualization",
            "Simulation: Flight simulators, weather modeling",
            "Education: Interactive e-learning, virtual labs",
            "GIS: Geographic Information Systems, maps",
            "UI/UX: Graphical interfaces of OS and apps"
          ]
        },
        {
          name: "Midpoint Line Drawing Algorithm",
          importance: "Very High",
          keyPoints: [
            "Based on implicit line equation: F(x,y) = dy·x - dx·y + c",
            "Decision parameter: p₀ = 2dy - dx",
            "If p < 0: plot (x+1, y), p_new = p + 2dy",
            "If p ≥ 0: plot (x+1, y+1), p_new = p + 2dy - 2dx",
            "Uses only integer arithmetic → fast and efficient",
            "Also called Bresenham's Line Algorithm"
          ],
          code: `// Midpoint Line Algorithm (Bresenham's)
void drawLine(int x1,int y1,int x2,int y2) {
  int dx = x2-x1, dy = y2-y1;
  int p = 2*dy - dx;
  int x = x1, y = y1;
  putpixel(x, y);
  while(x < x2) {
    x++;
    if(p < 0) p += 2*dy;
    else { y++; p += 2*(dy-dx); }
    putpixel(x, y);
  }
}`
        },
        {
          name: "Midpoint Ellipse Drawing Algorithm",
          importance: "Very High",
          keyPoints: [
            "Ellipse equation: (x/a)² + (y/b)² = 1",
            "Two regions: Region 1 (slope < -1) and Region 2 (slope > -1)",
            "Region 1 decision: p1 = b²- a²b + a²/4; step in x",
            "Region 2 decision: p2 = b²(x+½)² + a²(y-1)² - a²b²; step in y",
            "Uses 4-way symmetry to plot all quadrants simultaneously",
            "Incrementally computes next pixel without floating point"
          ]
        },
        {
          name: "Pivot Rotation and Fixed Point Scaling",
          importance: "Very High",
          keyPoints: [
            "Pivot Rotation: Rotate about an arbitrary point (px, py)",
            "  Steps: Translate pivot to origin → Rotate → Translate back",
            "  Matrix: T(-px,-py) · R(θ) · T(px,py)",
            "Fixed Point Scaling: Scale about a fixed point (fx, fy)",
            "  Steps: Translate fixed point to origin → Scale → Translate back",
            "  Matrix: T(-fx,-fy) · S(sx,sy) · T(fx,fy)",
            "Composite transformation = multiply matrices in sequence"
          ]
        },
        {
          name: "Window to Viewport Transformation",
          importance: "Very High",
          keyPoints: [
            "Window: Region in world coordinates selected for display",
            "Viewport: Region on screen (device coordinates) where window maps to",
            "Transformation formulas:",
            "  xv = (xw - xwmin)·(xvmax-xvmin)/(xwmax-xwmin) + xvmin",
            "  yv = (yw - ywmin)·(yvmax-yvmin)/(ywmax-ywmin) + yvmin",
            "Scaling factors: sx = (xvmax-xvmin)/(xwmax-xwmin), sy = (yvmax-yvmin)/(ywmax-ywmin)",
            "Allows zooming, panning, and multiple viewports"
          ]
        },
        {
          name: "Cohen-Sutherland Line Clipping",
          importance: "Very High",
          keyPoints: [
            "Divides 2D space into 9 regions using 4-bit region codes (TBRL)",
            "Top=1000, Bottom=0100, Right=0010, Left=0001, Inside=0000",
            "Trivially accept: both endpoints code = 0000",
            "Trivially reject: AND of both codes ≠ 0000",
            "Otherwise: find intersection with boundary, clip, repeat",
            "Efficient for scenes with many lines outside clip window"
          ]
        },
        {
          name: "Sutherland-Hodgman Polygon Clipping",
          importance: "Very High",
          keyPoints: [
            "Clips polygon against each boundary of clip window one at a time",
            "4 clip edges: Left, Right, Bottom, Top (applied sequentially)",
            "For each edge, tests each polygon vertex pair (inside/outside)",
            "4 cases: in→in (keep B), in→out (keep intersection), out→in (keep intersection+B), out→out (keep nothing)",
            "Output of one clip edge becomes input for next",
            "Handles concave polygons but may produce extra edges"
          ]
        },
        {
          name: "Hidden Surface Removal Techniques",
          importance: "Very High",
          keyPoints: [
            "Z-Buffer (Depth Buffer): Stores depth of nearest pixel for each screen point. Compare z-values, keep closest. Simple but memory-intensive",
            "Painter's Algorithm: Sort surfaces back-to-front, paint in order. Fails with cyclic overlaps",
            "Back-Face Culling: Removes faces whose normal points away from viewer. N·V < 0 → hidden",
            "Scan-Line: Process one scan line at a time, track active edges"
          ]
        }
      ],
      theoryTopics: [
        "2D and 3D Transformations (Translation, Rotation, Scaling)",
        "Need for machine independent graphical language",
        "Bezier and B-Spline Curves",
        "file formats (BMP, JPEG, PNG)",
        "Shading Models (Flat, Gouraud, Phong)"
      ]
    },
    "Cryptography and Network Security": {
      topics: [
        {
          name: "TLS/SSL Working",
          importance: "Very High",
          keyPoints: [
            "TLS (Transport Layer Security) is the successor to SSL",
            "Handshake Process: Client Hello → Server Hello + Certificate → Key Exchange → Finished",
            "Uses asymmetric encryption for key exchange, symmetric for data",
            "Certificate Authority (CA) verifies server identity",
            "Provides: Confidentiality (encryption), Integrity (MAC), Authentication",
            "TLS 1.3 removes weak ciphers, faster handshake (1-RTT)",
            "HTTPS = HTTP over TLS"
          ]
        },
        {
          name: "Network vs Cyber vs Information Security",
          importance: "High",
          keyPoints: [
            "Information Security: Protecting information in any form (digital or physical). CIA Triad: Confidentiality, Integrity, Availability",
            "Network Security: Protecting data during transmission over a network. Tools: Firewalls, IDS, VPN",
            "Cybersecurity: Protecting digital systems, networks, and data from cyberattacks. Broader than network security",
            "Relation: Cybersecurity ⊃ Network Security; Information Security is broader concept"
          ]
        },
        {
          name: "WAP, WAL, IEEE 802.11",
          importance: "Medium",
          keyPoints: [
            "WAP (Wireless Application Protocol): Protocol for accessing internet on mobile devices. Uses WML instead of HTML",
            "WAL (Wireless Application Layer): Top layer in WAP architecture handling application logic",
            "IEEE 802.11 Variants: 802.11a (5GHz, 54Mbps), 802.11b (2.4GHz, 11Mbps), 802.11g (2.4GHz, 54Mbps), 802.11n (dual-band, 600Mbps), 802.11ac (5GHz, 1Gbps+), 802.11ax = Wi-Fi 6",
            "Components: AP (Access Point), BSS (Basic Service Set), ESS (Extended SS), SSID"
          ]
        },
        {
          name: "Passive vs Active Attacks",
          importance: "High",
          keyPoints: [
            "Passive Attack: Eavesdropping without modifying data. Examples: Sniffing, Traffic Analysis, Wiretapping",
            "Active Attack: Modifies/disrupts data or systems. Examples: Man-in-the-Middle, Replay, DoS, Spoofing, Session Hijacking",
            "Passive → hard to detect, easy to prevent (encryption)",
            "Active → easier to detect, harder to prevent"
          ]
        },
        {
          name: "Need, Threat and Approach to Information Security",
          importance: "Medium",
          keyPoints: [
            "Need: Protect sensitive data, ensure business continuity, legal compliance, prevent financial loss",
            "Threats: Malware, Phishing, Insider Threats, DDoS, Social Engineering, Zero-day exploits",
            "Approach: Risk Assessment → Security Policy → Implementation (controls) → Monitoring → Review",
            "Security Controls: Technical (firewalls), Administrative (policies), Physical (locks)"
          ]
        },
        {
          name: "IDS and IPS: Classification and Difference",
          importance: "High",
          keyPoints: [
            "IDS (Intrusion Detection System): Monitors and alerts. Passive – does not block",
            "IPS (Intrusion Prevention System): Monitors and blocks in real-time. Active",
            "IDS Types: Network-based (NIDS), Host-based (HIDS)",
            "IPS Types: Network-based (NIPS), Host-based (HIPS), Wireless IPS",
            "Detection Methods: Signature-based (known attacks), Anomaly-based (deviation from normal), Heuristic",
            "Key Difference: IDS = detect & report; IPS = detect & prevent"
          ]
        },
        {
          name: "OSI vs TCP/IP Model",
          importance: "High",
          keyPoints: [
            "OSI (7 layers): Physical, Data Link, Network, Transport, Session, Presentation, Application",
            "TCP/IP (4 layers): Network Access, Internet, Transport, Application",
            "OSI is theoretical/reference model; TCP/IP is practical/implemented",
            "OSI separates Session and Presentation; TCP/IP merges them into Application layer",
            "Both use Transport and Network layers for core communication"
          ]
        }
      ],
      theoryTopics: [
        "Network Devices (Router, Switch, Hub, Bridge)",
        "Network Terminology (IP, MAC, Port, Protocol)",
        "Elementary Cryptography (Substitution, Transposition, Playfair, Vigenère Cipher)",
        "Threat to IS"
      ]
    },
    // Semester 5 - Web Technology Topics
  "Web Technology": {
    topics: [
      {
        name: "Event Handling",
        importance: "Very High",
        keyPoints: [
          "Events: user actions like click, keypress, mouseover, submit, load",
          "HTML inline: <button onclick='func()'>",
          "JS DOM: element.addEventListener('click', handler)",
          "Event Object: provides event details (target, type, key, etc.)",
          "Event Bubbling: event propagates from child to parent",
          "Event Capturing: parent handles before child",
          "stopPropagation() prevents bubbling; preventDefault() prevents default action"
        ],
        code: `// JS Event Handling
document.getElementById("btn").addEventListener("click", function(e) {
  alert("Clicked: " + e.target.id);
  e.stopPropagation();
});

// Keypress Event
document.addEventListener("keypress", function(e) {
  console.log("Key pressed: " + e.key);
});

// Mouseover Event
document.getElementById("box").addEventListener("mouseover", function() {
  this.style.backgroundColor = "yellow";
});`
      },
      {
        name: "Recursion in PHP: Factorial and Fibonacci",
        importance: "Very High",
        code: `<?php
// ---- FACTORIAL (Recursion) ----
function factorial($n) {
    if($n == 0 || $n == 1)   // Base case
        return 1;
    return $n * factorial($n - 1);  // Recursive call
}
echo "Factorial of 5 = " . factorial(5);  // Output: 120

/*
  How it works:
  factorial(5) = 5 * factorial(4)
               = 5 * 4 * factorial(3)
               = 5 * 4 * 3 * factorial(2)
               = 5 * 4 * 3 * 2 * factorial(1)
               = 5 * 4 * 3 * 2 * 1 = 120
*/

// ---- FIBONACCI (Recursion) ----
function fibonacci($n) {
    if($n == 0) return 0;   // Base case 1
    if($n == 1) return 1;   // Base case 2
    return fibonacci($n-1) + fibonacci($n-2);  // Recursive call
}

echo "\\nFibonacci Series: ";
for($i = 0; $i < 8; $i++) {
    echo fibonacci($i) . " ";
}
// Output: 0 1 1 2 3 5 8 13

/*
  How it works (n=5):
  fib(5) = fib(4) + fib(3)
         = (fib(3)+fib(2)) + (fib(2)+fib(1))
         = 3 + 2 = 5
*/
?>`,
        keyPoints: [
          "Base case is mandatory — stops infinite recursion",
          "Factorial: base case n==0 or n==1 → return 1",
          "Fibonacci: base cases n==0→0, n==1→1",
          "Each recursive call reduces problem toward base case",
          "Deep recursion can cause stack overflow for large n"
        ]
      },
      {
        name: "HTML Table Creation",
        importance: "High",
        code: `<!-- Basic HTML Table -->
<!DOCTYPE html>
<html>
<head>
  <style>
    table {
      width: 60%;
      border-collapse: collapse;
      font-family: Arial, sans-serif;
    }
    th, td {
      border: 1px solid #333;
      padding: 10px;
      text-align: center;
    }
    th {
      background-color: #4CAF50;
      color: white;
    }
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
    caption {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 8px;
    }
  </style>
</head>
<body>
  <table>
    <caption>Student Marks Table</caption>
    <thead>
      <tr>
        <th>Roll No</th>
        <th>Name</th>
        <th>Subject</th>
        <th>Marks</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>101</td>
        <td>Alice</td>
        <td>Web Tech</td>
        <td>88</td>
      </tr>
      <tr>
        <td>102</td>
        <td>Bob</td>
        <td>Web Tech</td>
        <td>75</td>
      </tr>
      <tr>
        <td colspan="3">Average</td>
        <td>81.5</td>
      </tr>
    </tbody>
  </table>
</body>
</html>`,
        keyPoints: [
          "<table>: container; <thead>: header section; <tbody>: body; <tfoot>: footer",
          "<tr>: table row; <th>: header cell (bold+center by default); <td>: data cell",
          "border-collapse: collapse — removes double borders",
          "colspan: merge columns; rowspan: merge rows",
          "<caption>: table title placed above table",
          "nth-child(even/odd) for zebra striping rows"
        ]
      },
      {
        name: "Selectors in JavaScript",
        importance: "High",
        code: `// ---- JS DOM Selectors ----

// 1. getElementById — selects by ID (returns single element)
let heading = document.getElementById("title");
heading.style.color = "red";

// 2. getElementsByClassName — returns HTMLCollection (array-like)
let items = document.getElementsByClassName("item");
for(let i = 0; i < items.length; i++) {
    items[i].style.color = "blue";
}

// 3. getElementsByTagName — selects all elements of a tag
let paras = document.getElementsByTagName("p");
console.log(paras.length);

// 4. querySelector — returns FIRST match (CSS selector syntax)
let firstBtn = document.querySelector(".btn");       // by class
let nav = document.querySelector("#navbar");         // by id
let input = document.querySelector("input[type='text']"); // attribute

// 5. querySelectorAll — returns ALL matches as NodeList
let allBtns = document.querySelectorAll(".btn");
allBtns.forEach(function(btn) {
    btn.style.backgroundColor = "green";
});

// 6. Chaining selectors
let listItem = document.querySelector("ul li:first-child");
listItem.textContent = "First Item Updated";`,
        keyPoints: [
          "getElementById: fastest, returns one element or null",
          "getElementsByClassName / TagName: returns live HTMLCollection",
          "querySelector: CSS-style selector, returns first match",
          "querySelectorAll: returns static NodeList (use forEach)",
          "HTMLCollection is live (auto-updates); NodeList is static",
          "Prefer querySelector/querySelectorAll for flexibility"
        ]
      },
      {
        name: "CSS and HTML Manipulation through JavaScript",
        importance: "High",
        code: `// ---- Manipulating HTML and CSS via JS ----

// 1. Change inner HTML content
document.getElementById("msg").innerHTML = "<b>Hello World!</b>";

// 2. Change text only (safer, no HTML parsing)
document.getElementById("msg").textContent = "Hello!";

// 3. Change CSS styles directly
let box = document.getElementById("box");
box.style.backgroundColor = "skyblue";
box.style.width = "200px";
box.style.border = "2px solid black";
box.style.fontSize = "18px";

// 4. Add / Remove CSS class
box.classList.add("highlight");      // adds class
box.classList.remove("highlight");   // removes class
box.classList.toggle("active");      // toggle on/off

// 5. Change attributes
document.getElementById("img1").setAttribute("src", "new.jpg");
document.getElementById("link").setAttribute("href", "https://google.com");

// 6. Create and append new element dynamically
let newPara = document.createElement("p");
newPara.textContent = "This paragraph was created by JS!";
newPara.style.color = "darkgreen";
document.body.appendChild(newPara);

// 7. Remove an element
let oldEl = document.getElementById("old");
oldEl.parentNode.removeChild(oldEl);
// OR: oldEl.remove();

// 8. Change multiple elements at once
document.querySelectorAll("li").forEach(function(li) {
    li.style.color = "purple";
    li.style.listStyleType = "square";
});`,
        keyPoints: [
          "innerHTML: sets/gets HTML content inside element (parses HTML tags)",
          "textContent: sets/gets plain text only (safer, no XSS risk)",
          "element.style.property = value — sets inline CSS",
          "classList.add/remove/toggle — better than modifying style directly",
          "createElement + appendChild — dynamically adds elements to DOM",
          "setAttribute(attr, value) — changes any HTML attribute"
        ]
      },
      {
        name: "Form Creation with CSS and JS Validation",
        importance: "Very High",
        code: `<!DOCTYPE html>
<html>
<head>
  <title>Registration Form</title>
  <style>
    body { font-family: Arial, sans-serif; background: #f0f0f0; }
    .form-container {
      width: 380px; margin: 40px auto;
      background: white; padding: 24px;
      border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    }
    h2 { text-align: center; color: #333; margin-bottom: 20px; }
    label { display: block; margin-bottom: 4px; font-weight: bold; color: #555; }
    input, select {
      width: 100%; padding: 9px; margin-bottom: 6px;
      border: 1px solid #ccc; border-radius: 4px;
      box-sizing: border-box; font-size: 14px;
    }
    input:focus { border-color: #4CAF50; outline: none; }
    .error { color: red; font-size: 12px; margin-bottom: 8px; display: block; }
    button {
      width: 100%; padding: 10px;
      background: #4CAF50; color: white;
      border: none; border-radius: 4px;
      font-size: 16px; cursor: pointer;
    }
    button:hover { background: #45a049; }
  </style>
</head>
<body>
<div class="form-container">
  <h2>Register</h2>
  <form id="regForm" onsubmit="return validateForm()">

    <label>Full Name:</label>
    <input type="text" id="name" placeholder="Enter your name">
    <span class="error" id="nameErr"></span>

    <label>Email:</label>
    <input type="email" id="email" placeholder="Enter your email">
    <span class="error" id="emailErr"></span>

    <label>Password:</label>
    <input type="password" id="password" placeholder="Min 6 characters">
    <span class="error" id="passErr"></span>

    <label>Age:</label>
    <input type="number" id="age" placeholder="Enter your age">
    <span class="error" id="ageErr"></span>

    <label>Gender:</label>
    <select id="gender">
      <option value="">-- Select --</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
    <span class="error" id="genderErr"></span>

    <button type="submit">Submit</button>
  </form>
</div>

<script>
function validateForm() {
  let valid = true;

  // Clear all errors
  document.querySelectorAll(".error").forEach(e => e.textContent = "");

  // Name validation
  let name = document.getElementById("name").value.trim();
  if(name === "") {
    document.getElementById("nameErr").textContent = "Name is required.";
    valid = false;
  }

  // Email validation
  let email = document.getElementById("email").value.trim();
  let emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if(email === "") {
    document.getElementById("emailErr").textContent = "Email is required.";
    valid = false;
  } else if(!emailRegex.test(email)) {
    document.getElementById("emailErr").textContent = "Enter a valid email.";
    valid = false;
  }

  // Password validation
  let pass = document.getElementById("password").value;
  if(pass.length < 6) {
    document.getElementById("passErr").textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  // Age validation
  let age = document.getElementById("age").value;
  if(age === "" || age < 1 || age > 120) {
    document.getElementById("ageErr").textContent = "Enter a valid age (1-120).";
    valid = false;
  }

  // Gender validation
  let gender = document.getElementById("gender").value;
  if(gender === "") {
    document.getElementById("genderErr").textContent = "Please select a gender.";
    valid = false;
  }

  if(valid) alert("Form submitted successfully!");
  return valid;  // false prevents form submission
}
</script>
</body>
</html>`,
        keyPoints: [
          "onsubmit='return validateForm()' — return false prevents submission",
          "trim() removes leading/trailing whitespace before validation",
          "Regex /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/ validates email format",
          "Show errors using span elements with class 'error'",
          "Clear previous errors before re-validating",
          "HTML5 types (email, number, password) provide basic browser validation too"
        ]
      },
      {
        name: "AJAX and its Working",
        importance: "High",
        keyPoints: [
          "AJAX = Asynchronous JavaScript and XML",
          "Allows web page to send/receive data from server without full page reload",
          "Steps: Create XMLHttpRequest → open(method, url) → send() → onreadystatechange callback",
          "readyState 4 + status 200 = success",
          "Modern alternative: fetch() API with Promises",
          "Data formats used: JSON (preferred), XML, plain text"
        ],
        code: `// Classic AJAX using XMLHttpRequest
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200) {
    document.getElementById("result").innerHTML = this.responseText;
  }
};
xhttp.open("GET", "data.php", true);
xhttp.send();

// Modern AJAX using fetch()
fetch("data.php")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.getElementById("result").innerHTML = data.message;
  })
  .catch(error => console.log("Error: " + error));`
      },
      {
        name: "Cookie vs Session",
        importance: "Very High",
        keyPoints: [
          "Cookie: Stored on client (browser). Set via setcookie() in PHP. Has expiry time. Accessible via $_COOKIE",
          "Session: Stored on server. Started with session_start(). Data in $_SESSION. Ends when browser closes or session_destroy() called",
          "Cookie → less secure (client-side); Session → more secure (server-side)",
          "Cookie used for: remembering preferences, auto-login",
          "Session used for: authentication, shopping cart"
        ],
        code: `<?php
// ---- COOKIE ----
setcookie("username", "John", time() + 3600);  // Expires in 1 hour
echo $_COOKIE["username"];   // Read cookie
setcookie("username", "", time() - 1);  // Delete cookie

// ---- SESSION ----
session_start();                        // Must be called first
$_SESSION["username"] = "John";        // Set session
echo $_SESSION["username"];            // Read session
session_destroy();                     // End session
?>`
      },
      {
        name: "Database Connectivity in PHP",
        importance: "High",
        code: `<?php
// ---- MySQLi Procedural ----
$conn = mysqli_connect("localhost", "root", "", "mydb");
if(!$conn) die("Connection failed: " . mysqli_connect_error());

// Insert
mysqli_query($conn, "INSERT INTO students(name,marks) VALUES('Alice',85)");

// Select
$result = mysqli_query($conn, "SELECT * FROM students");
while($row = mysqli_fetch_assoc($result)) {
    echo $row['name'] . " - " . $row['marks'] . "<br>";
}
mysqli_close($conn);

// ---- PDO with Prepared Statement (prevents SQL Injection) ----
$pdo = new PDO("mysql:host=localhost;dbname=mydb", "root", "");
$stmt = $pdo->prepare("SELECT * FROM students WHERE marks > ?");
$stmt->execute([80]);
while($row = $stmt->fetch()) {
    echo $row['name'];
}
?>`,
        keyPoints: [
          "Two methods: MySQLi (procedural/OOP) and PDO",
          "PDO supports multiple databases; MySQLi only MySQL",
          "Steps: Connect → Query → Fetch → Close",
          "Use prepared statements (?) to prevent SQL injection",
          "mysqli_fetch_assoc() returns row as associative array"
        ]
      },
      {
        name: "Smart Device and MVC Framework",
        importance: "Medium",
        keyPoints: [
          "Smart Device: Internet-connected device with computing capability. E.g., smartphone, smart TV, IoT sensors",
          "MVC (Model-View-Controller): Design pattern separating app logic",
          "Model: Data and business logic (database interaction)",
          "View: Presentation/UI (HTML, CSS)",
          "Controller: Handles user input, calls model, returns view",
          "Examples: Laravel (PHP), Django (Python), Spring (Java)",
          "Benefits: Separation of concerns, maintainability, testability"
        ]
      },
      {
        name: "Exception Handling in PHP",
        importance: "Medium",
        code: `<?php
// Built-in Exception
function divide($a, $b) {
    if($b == 0)
        throw new Exception("Cannot divide by zero!");
    return $a / $b;
}

try {
    echo divide(10, 0);
} catch(Exception $e) {
    echo "Error: " . $e->getMessage();
} finally {
    echo "\\nThis always executes.";
}

// Custom Exception
class AgeException extends Exception {}

function checkAge($age) {
    if($age < 18)
        throw new AgeException("Must be 18 or above!");
}

try {
    checkAge(15);
} catch(AgeException $e) {
    echo $e->getMessage();
}
?>`,
        keyPoints: [
          "try: Code that may throw exception",
          "catch(Exception $e): Handles the exception. $e->getMessage() gets message",
          "finally: Always executes (cleanup/log code)",
          "throw: Manually trigger an exception",
          "Custom exceptions: extend Exception class"
        ]
      },
      {
        name: "Data Types in PHP and JavaScript",
        importance: "Medium",
        keyPoints: [
          "PHP Types: int, float, string, bool, array, object, NULL, resource",
          "PHP is loosely typed; use gettype() or var_dump() to inspect type",
          "JS Types: Number, String, Boolean, Undefined, Null, Object, Symbol, BigInt",
          "JS typeof operator checks type. E.g., typeof 42 → 'number'",
          "Both support type coercion (automatic type conversion)",
          "PHP: $x = 5; JS: let x = 5; (no explicit type declaration)"
        ],
        code: `<?php
// PHP Data Types
$int   = 10;           // Integer
$float = 3.14;         // Float
$str   = "Hello";      // String
$bool  = true;         // Boolean
$arr   = [1, 2, 3];    // Array
$null  = NULL;         // Null
echo gettype($int);    // integer
var_dump($float);      // float(3.14)
?>

// JavaScript Data Types
let num  = 42;            // Number
let str  = "Hello";       // String
let bool = true;          // Boolean
let und  = undefined;     // Undefined
let nul  = null;          // Null
let obj  = {name:"John"}; // Object
let arr  = [1,2,3];       // Array (type: object)

console.log(typeof num);  // "number"
console.log(typeof str);  // "string"
console.log(typeof und);  // "undefined"`
      },
      {
        name: "Variables and Operators in PHP and JavaScript",
        importance: "Medium",
        keyPoints: [
          "PHP variables: start with $ sign. E.g., $name = 'John';",
          "JS variables: var (function scope), let (block scope), const (constant)",
          "PHP operators: Arithmetic (+,-,*,/,%), String (. for concat), Comparison (==, ===)",
          "JS operators: + used for both addition and string concat",
          "PHP === checks value AND type; == only value (loose)",
          "JS === strict; == allows type coercion (e.g. 0 == false → true)"
        ],
        code: `<?php
// PHP Variables
$name = "Alice";
$age  = 20;
$pi   = 3.14;

// Arithmetic
echo $age + 5;      // 25
echo $age % 3;      // 2

// String concat
echo $name . " is " . $age;  // Alice is 20

// Comparison
var_dump(0 == "0");   // true (loose)
var_dump(0 === "0");  // false (strict)
?>

// JavaScript Variables
var  x = 10;    // function scoped (old)
let  y = 20;    // block scoped (preferred)
const PI = 3.14; // constant

// Arithmetic & String
console.log(5 + 3);      // 8
console.log("5" + 3);    // "53" (concat!)
console.log("5" - 3);    // 2  (numeric)

// Comparison
console.log(0 == false);  // true  (loose)
console.log(0 === false); // false (strict)`
      },
      {
        name: "String Manipulation Functions in PHP",
        importance: "Medium",
        keyPoints: [
          "strlen($str) — returns length of string",
          "strtoupper() / strtolower() — case conversion",
          "substr($str, start, length) — extract substring",
          "str_replace(search, replace, str) — replace occurrences",
          "strpos($str, search) — position of first occurrence",
          "trim() / ltrim() / rtrim() — remove whitespace",
          "explode(delim, str) — split string → array",
          "implode(glue, arr) — join array → string",
          "str_repeat($str, n) — repeat string n times",
          "ucfirst() / ucwords() — capitalize first letter"
        ],
        code: `<?php
$str = "  Hello World  ";

echo strlen($str);                        // 15
echo strtoupper($str);                    // HELLO WORLD
echo strtolower($str);                    // hello world
echo trim($str);                          // "Hello World"
echo substr($str, 2, 5);                  // "Hello"
echo str_replace("World", "PHP", $str);   // Hello PHP
echo strpos("Hello", "l");               // 2

$arr = explode(",", "a,b,c");            // ["a","b","c"]
echo implode("-", $arr);                 // a-b-c

echo str_repeat("Ha", 3);               // HaHaHa
echo ucwords("hello world");            // Hello World
?>`
      },
      {
        name: "XML, JSON, and jQuery",
        importance: "Medium",
        keyPoints: [
          "XML Elements: Declaration <?xml version='1.0'?>, Root element, Child elements, Attributes, Text content",
          "XML is self-descriptive but verbose. Used in config files, RSS, SOAP",
          "JSON: Lightweight key-value format. Easier to parse in JS. Preferred over XML for APIs",
          "JSON.stringify(obj) → converts JS object to JSON string",
          "JSON.parse(str) → converts JSON string to JS object",
          "jQuery: JS library. Syntax: $(selector).action()",
          "jQuery simplifies DOM manipulation, AJAX, and event handling"
        ],
        code: `<!-- XML Example -->
<?xml version="1.0" encoding="UTF-8"?>
<students>
  <student id="1">
    <name>Alice</name>
    <marks>88</marks>
  </student>
  <student id="2">
    <name>Bob</name>
    <marks>75</marks>
  </student>
</students>

// JSON Example
let student = {
  "name": "Alice",
  "age": 20,
  "marks": [88, 75, 90]
};
let jsonStr = JSON.stringify(student);
console.log(jsonStr);
// {"name":"Alice","age":20,"marks":[88,75,90]}

let obj = JSON.parse(jsonStr);
console.log(obj.name);  // Alice

// jQuery Examples
// Include: <script src="jquery.min.js"></script>

$("#btn").click(function() {
  $("p").hide();           // Hide all <p>
});

$(".box").css("color", "red");       // Change CSS
$("ul li").addClass("active");       // Add class
$("#title").text("New Title");       // Change text
$("#img").attr("src", "new.jpg");    // Change attribute

// jQuery AJAX
$.get("data.php", function(data) {
  $("#result").html(data);
});`
      }
    ],
      theoryTopics: [
        "HTML5 vs HTML",
        "CSS box model",
        "Responsive Web Design strategies",
        "PHP OOP (Classes, Inheritance, Interfaces)",
        "REST API Concepts"
      ]
    },
    "Internet of Things (IoT)": {
      topics: [
        {
          name: "Vulnerabilities, Security Requirements and Challenges in IoT",
          importance: "Very High",
          keyPoints: [
            "Vulnerabilities: Weak/default passwords, Unpatched firmware, Insecure communication (no encryption), Physical access risks, Lack of security updates",
            "Security Requirements: Confidentiality (encrypt data), Integrity (no tampering), Availability (device uptime), Authentication (verify device/user), Authorization",
            "Challenges: Resource-constrained devices (low CPU/memory), Heterogeneous ecosystem (many protocols/platforms), Large attack surface, No standard security framework, Difficulty patching millions of deployed devices",
            "Common attacks on IoT: Botnet (Mirai), Man-in-the-Middle, Replay attacks, Side-channel attacks"
          ]
        },
        {
          name: "Raspberry Pi and Its Uses",
          importance: "High",
          keyPoints: [
            "Single-board computer developed by Raspberry Pi Foundation (UK)",
            "Runs Linux OS (Raspbian/Raspberry Pi OS)",
            "Features: GPIO pins, USB, HDMI, Wi-Fi, Bluetooth, camera interface",
            "Uses: Home automation, Robotics, Media center, IoT gateway/hub, Learning programming, Weather station, Retro gaming console",
            "Models: Pi 4 (most powerful), Pi Zero W (compact, Wi-Fi enabled), Pi Pico (microcontroller)"
          ]
        },
        {
          name: "Applications of IoT",
          importance: "High",
          keyPoints: [
            "Smart Home: Smart locks, automated lighting, thermostat (Nest)",
            "Healthcare: Remote patient monitoring, wearables, smart implants",
            "Agriculture: Soil moisture sensors, automated irrigation, drone monitoring",
            "Smart City: Traffic management, smart parking, waste management",
            "Industrial IoT (IIoT): Predictive maintenance, factory automation",
            "Transportation: Connected vehicles, fleet tracking",
            "Retail: Smart shelves, inventory tracking, customer analytics"
          ]
        },
        {
          name: "Architecture of IoT",
          importance: "High",
          keyPoints: [
            "3-Layer Architecture: Perception Layer (sensors/actuators) → Network Layer (transmission) → Application Layer (services)",
            "5-Layer Architecture adds: Processing Layer (data processing/cloud) and Business Layer (business models/reports)",
            "Perception Layer: Collects physical data (temperature, motion, etc.)",
            "Network Layer: Wi-Fi, Bluetooth, Zigbee, LoRa for data transfer",
            "Application Layer: Smart home app, healthcare dashboard, etc."
          ]
        },
        {
          name: "Structural Aspects of IoT",
          importance: "Medium",
          keyPoints: [
            "Things (Devices): Sensors and actuators that interact with physical world",
            "Connectivity: Wired (Ethernet) or wireless (Wi-Fi, BLE, Zigbee)",
            "Gateway: Bridges IoT devices and cloud/internet",
            "Cloud/Backend: Stores and processes data; provides APIs",
            "User Interface: Mobile app or web dashboard for control and monitoring",
            "Data Analytics: Processes IoT data for insights and automation"
          ]
        },
        {
          name: "Environment and Traffic Characteristics of IoT",
          importance: "Medium",
          keyPoints: [
            "Environment: IoT operates in diverse environments — industrial, home, outdoor, underwater",
            "Constrained environments: Low power, limited bandwidth, intermittent connectivity",
            "Traffic Characteristics: Small data packets sent frequently, Periodic/event-driven transmissions, Low latency requirements for real-time control",
            "Traffic types: Telemetry (device→cloud), Command (cloud→device), Alerts (event-triggered)",
            "QoS requirements vary: Medical IoT needs high reliability; Smart meters tolerate delay"
          ]
        },
        {
          name: "IoT Protocols: M2M, WSN, 6LoWPAN, Modbus, SCADA, RFID",
          importance: "High",
          keyPoints: [
            "M2M (Machine to Machine): Direct communication between devices without human intervention. E.g., smart meters reporting to utility servers",
            "WSN (Wireless Sensor Network): Network of spatially distributed sensors. Used in environment monitoring, military",
            "6LoWPAN: IPv6 over Low-Power Wireless Personal Area Networks. Enables IP connectivity for constrained devices",
            "Modbus: Serial communication protocol for connecting electronic devices. Common in industrial/SCADA systems",
            "SCADA (Supervisory Control and Data Acquisition): Industrial control system for monitoring and controlling infrastructure (power plants, pipelines)",
            "RFID (Radio Frequency Identification): Uses radio waves to identify/track tags. Passive (no battery) or Active (with battery). Used in inventory, access control, supply chain"
          ]
        }
      ],
      theoryTopics: [
        "MQTT and CoAP Protocols",
        "Edge Computing vs Cloud Computing in IoT",
        "IoT Standards (IEEE 802.15.4, Zigbee)",
        "Zigbee Architecture ",
        "Fog Computing in IoT"
      ]
    }
  }
};