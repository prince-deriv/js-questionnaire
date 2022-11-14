**JAVASCRIPT QUESTIONS**

---------
 **Question #1**

 ```sh
    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1);
    }
```

 What would be the output of the code?

-  A. 333
-  B. 123
-  C. 321
-  D. 111


---------



 **Question #2**
```sh
   
   const OutputDifferentTypes = (number, type) => {
        return type === 1 ? number + "" : number;
   };

   const x = OutputDifferentTypes(1, 1);
   const y = OutputDifferentTypes(1, 0);

   console.log(x == y);

 ```

  What would be the output of the code?

-  A. false
-  B. true
-  C. null
-  D. undefined

---------

 **Question #3**

```sh
    const my_array = [1, 2, 3, 4];

    my_array.push(5);

    my_array.length = 3;

    console.log(my_array);
 ```

  What would be the output of the code?

-  A. error
-  B. [1,2,3,4,5]
-  C. [1,2,3]
-  D. [3,2,1]

---------
**Question #4**
```sh
   let lucky_number = 1 + 2 + "3" + 4 + "5" + 6 + parseInt(7);

   console.log(lucky_number)

 ```

  What would be the output of the code?

-  A. 28
-  B. 388
-  C. 33463
-  D. 334567


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
-  B. undefined
-  C. 10
-  D. 15