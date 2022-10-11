// book class : represents a book 
function GeneratePdf( ) { 
    const element = document.getElementById("student-list") ; 
    
    html2pdf( )
     
    .from(element)
    .save( ) ;
}
class Stu { 
    constructor(name  , rollNum ){
        this.name = name ; 
        this.rollNum = rollNum ; 
    }
}

// ui class : handle ui tasks 

class UI { 
    static displayStudents ( ) {
        const Stud  = [
          
            {
                name : "Navneet" ,  
                rollNum : "093"
            }
            
        ];
        const students = Stud ;
        students.forEach((student) => UI.addStudentToList(student))
     }
     static addStudentToList(student) { 
        
        const list = document.getElementById("student-list") ; 

        const row = document.createElement('tr') ; 

        row.innerHTML = `
        <td class= "text-info"> ${student.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td> 
        <td class = "text-warning"> ${student.rollNum} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td> 
        <td><a href ="#" class = "btn btn-warning btn-sm delete">      X       </a></td> 
        `;

        list.appendChild(row) ; 
     }
     static clear( ) { 
        document.querySelector('#name').value ='' ; 
        document.querySelector('#rollNum').value ='' ; 

     }
     static deleteStudent( el )  { 
        if ( el.classList.contains('delete')) { 
            el.parentElement.parentElement.remove() ; 
        }
     }
}



// store class : handles storage 



// events : display books 
document.addEventListener('DOMContentLoaded' , UI.displayStudents) ; 

// events : add a book 

document.getElementById("student-form").addEventListener('submit', function (event) { 
     // get form values 
     // 
     event.preventDefault(  ); 
     const form = event.target ; 
     var  name  = form.name.value ; 
     var  roll = form.rollNum.value ; 
     

     /////////////////////////////////////////////
    //  making a field 
    if ( name  == '' || roll == '') { 
        alert("please fill in  all  fields")
    }
    // console.log(name ) ; 
    // console.log(roll) ;  
    else{  
    const student = new Stu(name , roll ) ; 
    UI.addStudentToList(student) ; 
    //
    UI.clear() ; 
    } 
}) ; 

// event  : remove a books 
document.querySelector('#student-list').addEventListener('click' , function ( e ) { 
    console.log(e.target) ; 
    UI.deleteStudent(e.target) ;
})