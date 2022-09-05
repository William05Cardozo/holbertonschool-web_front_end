/* Compose the code:

Write the function inception within inner
Write the function inner within outer
Call the function outer in the main code (outside any function)
Call the function inner within outer
Call the function inception within inner */


globalVariable = "Welcome";

function outer() {
    alert(globalVariable);
    let course = "Holberton";

    function inner(){
        alert(globalVariable + " " + course)
        let exclamation = "!";

        function inception(){
            alert(globalVariable + " " + course + exclamation);
            inception();
        }

        inception();
    }
    inner();
}

outer();
