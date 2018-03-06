

document
    .getElementById("confirm")
    .addEventListener("click", function( e ){ //e => event
        if(!confirm("Do you really want to do this?") ){
            e.preventDefault(); // ! => don't want to do this
        } else {
            //want to do this! => maybe do something about it?
            alert('Ok, lets do this!');
        }
    });
