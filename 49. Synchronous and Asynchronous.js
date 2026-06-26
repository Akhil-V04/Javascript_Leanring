//synchronous =Execute sequentially in a sequential manner

//asynchronous = Alows multiple operations to run in parallel and not wait for each other to complete.
//asynchronous is Handled by = Promises,async/await/callbacks

//Callbacks

function func1(){
    setTimeout(()=>{
        console.log("Task 1"),func2()},3000);
    }

    function func2(){
        console.log("Task 2");
        console.log("Task 3");
        console.log("task 4");
    }

func1();