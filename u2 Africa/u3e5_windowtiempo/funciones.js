function cronometro(){
    
    
    reloj++;
    
   document.getElementById("reloj").innerHTML = reloj;
    
    
 
    
}
    
function resetear(){
    
    reloj=0;
    
}

function escribe(){
    
    
    document.getElementById("escribe").innerHTML += num+".- "+reloj+"<br>";
    
    num++;
    
}
    
    