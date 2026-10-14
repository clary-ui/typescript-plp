# typescript-plp
plp for cs 330

# History 
TypeScript was created by Anders Hejlsberg and released by Microsoft in 2012. It works with JavaScript, so it is most commonly used for websites and applications, but it can do anything JavaScript can do. It was created to add types to JavaScript and to help programmers catch errors earlier. TypeScript is ultimately compiled into JavaScript and run as JavaScript after it is checked. The base of what I'm learning will be JavaScript, which I will use a lot of W3Schools for (https://www.w3schools.com/js/default.asp). From there, I will use the TypeScript Handbook (https://www.typescriptlang.org/docs/handbook/?utm_source=chatgpt.com) and more W3Schools (https://www.w3schools.com/typescript/index.php).

# Getting Started 
To set up TypeScript, you'll first need to install Node.js. It does not have a set programming environment. I will be using VS Code, which is a common option. Once you have Node.js and an environment, TypeScript can be installed in the command prompt with "npm install -g typescript". When you're ready to run your code, you will open the terminal, type "tsc " and then your file name. In your VS Code folder, a new file will appear with your code translated into JavaScript. You will then type "node " with the name of your .js file, and your code will run. You can add single-line comments to your code by starting with "//" and multi-line comments by starting with "/\*" and ending with  "*\/".

Here is Hello World: HelloWorld.ts

# Naming Conventions
TypeScript (like JavaScript) is case-sensitive. Any change in case creates a different identifier. Variable names can contain letters, numbers, underscores, and dollar signs, but cannot begin with a number. Variable names also cannot be reserved words. Community standards favor camel case.

# Reserved Words 
JavaScript has keywords and reserved words. Common examples include let, const, if, function, and return. These words serve set purposes and cannot be used as variable names. JavaScript has 35 words that cannot be used as identifiers anywhere in the language. There are also context-dependent reserved words, so the total counts can vary.

TypeScript also adds keywords for its type system, such as interface and type. The exact number of keywords depends on the language version and whether contextual and future reserved words are included, so there is also not one clear count. TypeScript more heavily restricts the use of contextual and future reserved words for naming. 

# More on Data Types

TypeScript is a statically typed language. The compiler checks types before the program runs. JavaScript is dynamically typed and types of values are determined at runtime. TypeScript is ultimately always compiled into JavaScript, so its type annotations do not remain in the resulting code.

TypeScript has stricter type checking than JavaScript and is considered strongly typed. JavaScript allows implicit type conversions in some operations. TypeScript catches many type errors before execution but still allows valid JavaScript operations when compiled.

In TypeScript, some variables are mutable while others are immutable. TypeScript uses let, const, and var to declare variables with different reassignment rules. Variables declared with let and var can be reassigned, while const variables cannot be reassigned after initialization. However, objects and arrays declared with const can still have their contents changed.

TypeScript uses JavaScript's operators, including arithmetic operators such as +, -, *, and /, comparison operators such as ==, === and !==, and logical operators such as &&, ||, and !. Strings can be combined using +, arrays can be accessed using indexes and modified with methods, and objects allow properties to be accessed and changed. TypeScript checks whether many operations are compatible with the types involved.

Mixed-type operations are allowed. JavaScript allows some operations between different types through implicit conversion. For example, "5" + 6 produces the string "56", while "5" - 6 produces the number -1. TypeScript follows these JavaScript rules for valid operations but checks type compatibility before execution. It also supports explicit conversions using functions such as Number() and String().

TypeScript checks identifiers, declarations, and type compatibility during compilation. JavaScript establishes variable bindings and performs operations at runtime. Operators have defined rules, but their behavior can depend on the values involved. For example, + performs arithmetic addition with numbers and string concatenation when a string is involved.

TypeScript supports both explicit typing and type inference. Programmers can explicitly declare a type or let TypeScript infer the type from an assigned value. JavaScript does not use TypeScript's type annotations and determines value types at runtime.
