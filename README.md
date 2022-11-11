**JAVASCRIPT QUESTIONS**

---------
 **Question #1**

 ```sh
const msg1 = 1;
const msg2 = "2";
const msg3 = 3 + " go!";

const GenerateMessage = (n) => {
  return `${msg1}+${msg2}+${msg3}`;
};

GenerateMessage();
```

 What would be the output of the code?

-  A. 1+2+3 go!
-  B. 3 3 go!
-  C. 6 go!
-  D. 123 go!


---------



 **Question #2**
```sh
   
    const data = {
        user1: {
            name: "Jane Doe",
            age: 22,
            gender: "female",
        },
        user2: {
            name: "John Doe",
            age: 23,
            gender: "male",
        },
    };

    let output = "";

    data.forEach((data) => {
        output += data.name + " " + data.age;
    });

    console.log(output);

 ```

  What would be the output of the code?

-  A. error
-  B. Jane Doe 22 John Doe 23
-  C. John Doe 23 Jane Doe 22
-  D. null null

---------

 **Question #3**

```sh
    const array_1 = ["a", "b", "c", "d", "x", "y", "z"];
    const array_2 = ["b", "c", "d"];

    console.log(array_1.includes(array_2));
 ```

  What would be the output of the code?

-  A. error
-  B. undefined
-  C. true
-  D. false

---------
**Question #4**
```sh
   const arr = [1, 2, 3];
    const new_arr = [...arr];

    for (let x = 1; x < 5; x++) {
        arr.push(x);
    }

    console.log(arr.concat(new_arr));

 ```

  What would be the output of the code?

-  A. [1, 2, 3, 4, 3, 2, 1, 1, 2, 3]
-  B. [1, 2, 3, 4, 5, 1, 2, 3, 1, 2, 3]
-  C. [1, 2, 3, 1, 2, 3, 4, 1, 2, 3]
-  D. [1, 2, 3, 1, 2, 3, 4, 5, 1, 2, 3]


---------
**Question #5**
```sh
  let sum = 0;
    const a = [1, 2, 3, 4, 5];

    const getSum = (int) => {
        sum += int;
    };

    a.forEach(getSum);

    console.log(sum);
 ```

  What would be the output of the code?

-  A. 0
-  B. 15
-  C. 10
-  D. undefined