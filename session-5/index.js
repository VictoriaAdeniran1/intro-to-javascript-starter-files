// Use this randomNumber inside of the while/for loops to generate a random number
let randomNumber = Math.round(Math.random() * 10);

function getGrade(total_mark){
    let grade = "Ungraded"

    if (total_mark > 90){
        grade = "A+";
    }

    else if (total_mark > 80 && total_mark <= 90 ){
            grade = "A";

        }



    console.log("You scored " + total_mark + " therefore your grade is " + grade)
    getGrade(91)
    
}
// ******************************** WHILE LOOPS **************************************















// ******************************** FOR LOOPS **************************************











