
var total_question_values ={};
document.getElementById("survey_click_button").addEventListener("click", () =>{

    var first_value = 0;
    var x = document.getElementsByClassName("first-question");
    for (var i = 0; i < x.length; i++) {
        if (x[i].checked) {
            first_value++;
        }
    }
    total_question_values.First = first_value;
 

    var second_value = 0;
    var y = document.getElementsByClassName("second-question");
    for (var i = 0; i < y.length; i++) {
        if (y[i].checked) {
            second_value++;
        }
    }
    total_question_values.Second = second_value;
    

    var third_value = 0;
    var z = document.getElementsByClassName("third-question");
    for (var i = 0; i < z.length; i++) {
        if (z[i].checked) {
            third_value++;
        }
    }
    total_question_values.Third = third_value;
   

    var fourth_value = 0;
    var a = document.getElementsByClassName("fourth-question");
    for (var i = 0; i < a.length; i++) {
        if (a[i].checked) {
            fourth_value++;
        }
    }
    total_question_values.Fourth = fourth_value;

    var fifth_value = 0;
    var b = document.getElementsByClassName("fifth-question");
    for (var i = 0; i < b.length; i++) {
        if (b[i].checked) {
            fifth_value++;
        }
    }
    total_question_values.Fifth =fifth_value;
    
   console.log(total_question_values);
    localStorage.setItem("servey",JSON.stringify(total_question_values));
    document.write("list",localStorage.getItem("servey"));
});




