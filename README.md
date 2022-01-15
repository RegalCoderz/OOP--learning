# OOP Read Me

### OOP

OOPS is abbreviated as Object Oriented Programming System in which programs are considered as a collection of objects. Each object is nothing but an instance of a class.

### Basic Concepts of OOPS

Following are the concepts of OOPS:

1. Abstraction
2. Encapsulation
3. Inheritance
4. Polymorphism

### Encapsulation

Encapsulation is an attribute of an object, and it contains all data which is hidden. That hidden data can be restricted to the members of that class.

Levels are Public, Protected, Private, Internal, and Protected Internal.

### Class

In classes, we group some data variables and functions. These functions normally manipulate these variables. Before going ahead, it is better to understand what a class is: 

“A class includes both data members as well as functions to manipulate that data”.

These functions are called ‘member functions’. We also call them methods. So a class has data (the variables) and functions to manipulate that data. A class is a ‘user defined’ data type. This way, we expand the language by creating a new data type. When we create variables of a class, a special name is used for them i.e. Objects.

### Object

An object is an instance of a class. It has its own state, behavior, and identity.

### Separation of Interface from the Implementation

To access the data members of the class, we will again use dot operator. Before going ahead, we will see what is the difference between struct and class. It is the visibility of the data members that differentiates between struct and class.


### Structure of a class

The default visibility for the data members of the class is called ‘private’. These can only be used within the class and are not visible outside.

“The default visibility of all the data members and member function of a class is hidden and private”

‘private’ is also a keyword. What will be the opposite of the private? What we will have to do to use the data members and manipulate them. The keyword for this purpose is public. In the class definition, if you do not mention the visibility and start defining the data and functions, these will be by default private.

As a good programmer, we should always write the keyword private with a colon as:

private: 

Now all the data and functions following this statement will have the private visibility. To define the public data, we need to write the keyword public with a colon as:

public:

Now all the data and functions following the public keyword will have the public visibility. These will be visible from outside the class. We can have multiple public and private parts in the class definition but it becomes confusing. So normally we have only one public and one private part.

Normally, the data in a class is kept private. If we make the data public, it is same as structure and anyone can access this data. On the other hand, the functions which we have written to manipulate this data, are kept as public. These methods can be called from outside the class i.e. from the main program. These are the member functions of the class.

The difference between these and the ordinary functions is that they are part of class. Moreover, they can see the private data members of the class and also manipulate them.

we want that only those things should be visible which we want to show and those things which we want to hide should not be visible We can get this by using the private and public in the classes. Public becomes the interface of the class, what we want to show to others. With the use of public interface, the objects can be manipulated. Private becomes the inside of the class i.e. the data members, the implementation. We don’t want to show the implementation of our classes to others. This is the concept of separation of interface from implementation. It is a crucially important concept in modern programming. We have separated the interface from the implementation. As long as the interface remains the same, the implementation can be changed.

