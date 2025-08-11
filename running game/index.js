const runner = document.getElementById("runner")

function jump_function(){
    runner.classList.add('after_jump')
    setInterval(reset_jump, 2000);
    console.log("clicked again");
    
}

function reset_jump(){
    runner.classList.remove('after_jump');
}
