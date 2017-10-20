function loteria (){
 var loteria= new Array(5);
    
	for (i=0;i<loteria.length;i++){	
		loteria[i]= Math.floor((Math.random()*10));
		
       document.write(loteria[i]+" ");
		}
     
}

function primitiva(){
    
    var primitiva = new Array(6);
    var reintegro;
    
    for (i=0;i<primitiva.length;i++){	
		primitiva[i]= Math.floor((Math.random()*100/2));
    
      document.write(primitiva[i]+" ");
        
        
}
    
    reintegro = Math.floor(Math.random()*10);
    
    document.write("<p>Reintegro: "+reintegro);
}


function dato1X2()
        {
                var aleatorio,i;
                var signos = new Array('1', 'X', '2'); //valores posibles de la quiniela
                for (i=1; i <16; i++)
                {
                        aleatorio = signos[Math.floor(3 * Math.random())];
					document.write("<p>"+i+".- "+aleatorio+"</p>");
					
                }
               
        }
 
      