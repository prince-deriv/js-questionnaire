**JAVASCRIPT QUESTIONS**

---------
 **Question #1**

 ```sh
   const DisplayCustomMessage = (n) => {
        const is_even = n % 2 === 0;

        return is_even ? "Hello" : "World";
    };

    DisplayCustomMessage(3);
```

 What would be the output of the code?

-  A. Hello
-  B. World
-  C. Hello World
-  D. HelloWorld


---------



 **Question #2**
```sh
    let value = "";
        for (let x = 1; x <= 10; x++) {
        value += x;
    }

    console.log(value);

 ```

  What would be the output of the code?

-  A. 0123456789
-  B. 1234567890
-  C. 12345678910
-  D. 10987654321

---------

 **Question #3**

```sh
   const fruits = [
        "banana",
        "apple",
        "orange",
        "orange",
        "banana",
        "apple",
        "apple",
        "orange",
        "banana",
    ];

    const fruits_object = {};

    fruits.forEach((fruit) => {
        fruits_object[fruit] = "available";
    });

    console.log(Object.keys(fruits_object));

 ```

  What would be the output of the code?

-  A. ['apple', 'apple', 'banana']
-  B. ['banana', 'banana', 'orange']
-  C. ['orange', 'apple', 'banana']
-  D. ['banana', 'apple', 'orange']

---------
**Question #4**
```sh
   const user = {
        first_name: "John",
        last_name: "Doe",
        email: "john@doe.com",
    };

    const new_user = { ...user };

    delete new_user.email;

    console.log(user.email);

 ```

  What would be the output of the code?

-  A. john@doe.com
-  B. undefined
-  C. null
-  D. John Doe


---------
**Question #5**
```sh
  let foo = "My Foo"

  const getMyFoo = () => {
    const foo = "New Foo"

    return foo
  }

  getMyFoo()
 ```

  What would be the output of the code?

-  A. New Foo
-  B. My Foo
-  C. Error
-  D. undefined