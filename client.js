$(document).ready(function(){
   
    $("button").on("click",function(){
        var no1 = $("#no1").val();
        var no2 = $("#no2").val();
        if(no1!= "" && no2!= ""){
            calculate(no1,no2,this.id);
        }
        else{
            alert("Please enter numbers! :O");
        }

    });

});

function calculate(no1,no2,action){
    $.post("http://localhost:3000/"+action+"/"+no1+"/"+no2,
        function(data,status){
            if (status === "success"){
                var result = Number(data);
                //alert(data);
                document.getElementById("result").innerHTML = result;
            }
            else{
            alert("User Data Error! Check Server Connection");//Check Data validity, if not, no settings change
            }
    });
}