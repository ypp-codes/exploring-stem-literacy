# I \- Rust Fundamentals Exploring STEM Literacy

![short line][image1]

# Summary

1. Subject(s): Variables, Mutability And Data Types  
2. Topic or Unit of Study: Rust Programming Language  
3. Grade/Level: High School  
4. Objective: Learn how to make variables, how to make variables mutable and what kinds of variables there are.  
5. Time Allotment: 1 Hour

# Setup

1. Log into [repl.it](https://repl.it/).  
2. Create a new Rust Repl (type rust into the search bar).  
3. Name your file with your initials followed by an underscore and the name of the lesson (ex. SA\_XLesson).

# Variables

## What is a variable?

## variable \- a placeholder that can hold data that is bound to it

## (Simplified: A box with a name, you can put “stuff” in the box.)

## Variable Examples:

| // Ex\_1: let x \= 10; // Ex\_2: let sharif \= “Abdullahi, Sharif A.”;println\!("{sharif}"); // Ex\_3:let pi \= 3.1415; // Ex\_4: let today\_is\_monday \= true;while today\_is \_monday {} // today\_is\_monday is the variable |
| :---- |

## How do you make a variable?

## Variable Syntax

## To create a variable, you must first use the keyword “let”.

Step 1: let

## Then you must name the variable.

Step 2: let var\_name

## Finally, you must bind some data to the variable.

Step 3: let var\_name \= data;

## (Example: let age \= 16;)

# Mutability

## What is ***mutability***?

## mutability \- the state of being able to change

## (Simplified: Whether or not a variable will allow you to change the data inside.)

## Why does ***mutability*** matter?

## For you, it means little outside of being able to change the data or not. For the computer it matters a lot because it has to hold that data somewhere on your computer. This involves two ideas called the stack and the heap.

## How to make a variable mutable\!

## While creating a variable, put the keyword “mut” after “let”.

Step 1: let mut var\_name \= data;

## What does this mean?

## You can now create a variable in one place.

Line 1: let mut age \= 16;

## Then change that variable’s value to something else later.

Line 27: age \= 22;

## (Notice the lack of “let” and “mut”.)

## 

# Basic Data Types

## You Can’t Make A Variable However YOU Want

## There are specific types of data you can bind your variables to.

## Integers

## Unsigned (can only be positive):

## u8, u16, u32, u64, u128

(Examples: \[x: u8 \= 10;\], \[ y: u64 \= 123456789;\], \[ z: u32 \= 258;\])

## Signed (can be positive  or negative w/ half the range each way):

## i8, i16, i32, i64, i128

(Examples: \[x: i8 \= \-10;\], \[ y: u128 \= 123456789;\], \[ z: i32 \= \-258;\])

## Floating Point type (decimals)

## f32, f64

(Examples: \[x: f32 \= 10.0;\], \[ y: f64 \= 12345.6789;\], \[ z: f32 \= 0.258;\])

## Booleans (true/false)

## true, false

(Example: \[x: bool \= true;\], \[y: bool \= false;\]

## Strings and String literals

## Strings and String literals are very special.

## They are both how  you hold “regular” words.

## String, \&str

(Example: \[let x: String \= String::from(“ Hello”);\], \[let y: \&str \= “ World”;\])

## However, you can add more words to Strings, but not string literals.

let z \= x \+ y; works because it’s basically adding “Word” the literal to “Hello” the String.

Making z basically,  z: String \= “Hello World”;

let z \= y \+ x; doesn’t because it’s basically adding “Hello” the String to ‘World’ the literal.

Trying to make z: \&str \= “ World Hello”; but you’re not allowed to because literals cannot be added to, just redefined.

## There are many more but these are fundamental.

# Task 1: Exploration

- ## For the next \~10 min., mess around with variables on [repl.it](http://repl.it).

# Task 2: Identification (in Groups)

- ## Identify the Data Types used in [this](https://replit.com/@SharifAbdullah3/qrgen#src/main.rs) program.

## (Hint: Pay attention to the teal words.)

|  |
| :---- |

# Finale: In English

- ## What did we do today?

  ### In your own words, describe what we worked on today.

## What went wrong, what went right?

## How did you feel at the end of it all?

|  |
| :---- |

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAGCAYAAABThMdSAAAAHklEQVR4XmOQW/Xx/1DFDOgCQwmPOn6g8KjjBwoDAOS8/s9EC0PsAAAAAElFTkSuQmCC>