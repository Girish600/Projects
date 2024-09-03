window.onload = function() {

    const greetingElement = document.getElementById('greet');
    const currentHour = new Date().getHours();
    let greetingMessage = '';

    if (currentHour < 12) {
        greetingMessage = 'Good Morning!';
    } else if (currentHour < 18) {
        greetingMessage = 'Good Afternoon!';
    } else {
        greetingMessage = 'Good Evening!';
    }

    greetingElement.textContent = greetingMessage;
};

let arr=[];
document.getElementById("btn").addEventListener("click", ()=>{
    let inputdata=document.getElementById("inputTask").value
    if(!inputdata){
        let error=document.getElementById("error");
        error.innerText="please enter your task";
        error.style.color="red";
        setTimeout(()=>{
            error.innerText="";
        },2000);
    }else{
        arr.unshift({task:inputdata, status:"pending", btn:"complete"});
        print();
        
        document.getElementById("inputTask").value="";
    }
});

function print(){
    console.log(arr);
    
    let list=document.getElementById("taskList");
    list.innerHTML=arr.map((ele,i)=>`<li><span>${ele.task}</span><span>${ele.status}</span> <button onclick="update(${i})">${ele.btn}</button><button onclick="deleteTask(${i})">delete</button></li>`).join(" ");
};
print();

function deleteTask(id){
    arr=arr.filter((ele,i)=>i!==id)
    print();
}

function update(id){
    arr=arr.map((ele,i)=>{
        if(i==id){
            return{
            ...ele,
            status:ele.status=="complete" ? "pending":"complete",
            btn:ele.btn=="pending" ? "complete":"pending"
            }
        }else{
            return ele
        }
    });
    print();
};