console.log("Hello world");

const ageIn = document.getElementById("ageIn");
const mit = document.getElementById("mit");
const elTexto = document.getElementById("elTexto");
let age;

mit.addEventListener("click", function(){
    age = ageIn.value;
    age = Number(age);
    if(age<0){
        elTexto.textContent = `You haven't been born yet. Get out`
        console.log("")
    }
    else if(age<13){
        elTexto.textContent = `Who gave you internet access??`
    }
    else if(age<22){
        elTexto.textContent = `Stop procrastinating and get to work. You have school tomorrow`
    }
    else if(age<60){
        elTexto.textContent = `Get to work. You should be making money, not on a random website. (Unless you're Mr. Gardner, in which case, this is your job.)`
    }
    else{
        elTexto.textContent = `You must be retired. Congrats! Take a nap instead of being here`
    }
})