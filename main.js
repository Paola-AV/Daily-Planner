const input=document.querySelector(".input");
const input2=document.querySelector(".input2");
const addBtn=document.querySelector(".btn-add");
const addBtn2=document.querySelector(".btn-add2");
const ul=document.querySelector("ul");
const ul2=document.querySelector(".ul2");
const empty=document.querySelector(".empty");
const empty2=document.querySelector(".empty2");


function addingBtn (){
   
}
addBtn.addEventListener("click", (e)=>{ //primera
    e.preventDefault();
    const text= input.value;

    if (text!== ""){
        e.preventDefault();
        const li = document.createElement("li");
        const p=document.createElement("p");

        p.textContent=text;
        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);

        input.value="";
        empty.style.display = "none";
    }

})

/*
addBtn2.addEventListener("click", (e)=>{ //segunda
    e.preventDefault();
     

    const text= input2.value;

    if (text!== ""){
    const li = document.createElement("li");
    const p=document.createElement("p");

    p.textContent=text;
    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul2.appendChild(li);

    input2.value="";
    empty2.style.display = "none";

    }

    

})
*/
function addDeleteBtn (){//primera
    const deleteBtn =document.createElement('button');

    deleteBtn.textContent='X';
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener("click", (e)=> {
        const item=e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll('li');

        if(items.length === 0){
            empty.style.display = "block";
        }

    });
    return deleteBtn;
}