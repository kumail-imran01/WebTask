"use strict"

    //TODO Task 2
    //Write some gloabla code to setInterval and call updateTime() function to display time
    //Write some global code to call displaySessionList

function updateTime()
{
    //TODO Task 2
    //Write code to display time	
}


function displaySessionList() 
    { 
       //TODO Task 2
        //Write some code to iterate over all sessions and display them on the page
        //Write code to dynamically generate HTMl table to display session data 

   } 

    //sample code to generate HTML table

        let myTable="<table>";
        myTable+="<tr>"
        myTable+="<td>"+"Mandeep"+"</td>";
        myTable+="<td>"+100+"</td>";
        myTable+="<td>"+"Tuesday 11:00 am"+"</td>";
        myTable+="<td>"+100+"</td>";
        myTable+="<td>"+0+"</td>";
        myTable+="</tr>";
     
       myTable+="</table>";
        //let tableData=document.createElement("tbody");
        let tableData=document.getElementById("tbody");
        tableData.innerHTML=myTable;       