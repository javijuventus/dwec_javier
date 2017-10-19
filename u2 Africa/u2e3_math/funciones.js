function loteria (){
 var loteria= new Array(5);
    
	for (i=0;i<loteria.length;i++){	
		loteria[i]= Math.floor((Math.random()*10));
		
       document.write(loteria[i]+" ");
		}
     
}

function quiniela(){
    
    var quiniela = new Array(6);
    var reintegro;
    
    for (i=0;i<quiniela.length;i++){	
		quiniela[i]= Math.floor((Math.random()*100/2));
    
      document.write(quiniela[i]+" ");
        
        
}
    
    reintegro = Math.floor(Math.random()*10);
    
    document.write("<p>Reintegro: "+reintegro);
}


/*** ESTE EJERCICIO NO LE HE ECHO YO , PERO COMO NO SABIA NI SIQUIERA COMO SE JUEGA A UNA QUINIELA BUSQUE INFORMACION DE COMO SE HACE Y ENCONTRÉ ESTE MARAVILLOSO EJERCICIO YA ECHO, AUNQUE AHORA NO ME VEO MUY CAPAZ DE HACERLO HE DECIDIDO DEJARLO AQUI PARA ECHARLE UN OJO MÁS ADELANTE.ESPERO QUE NO TE MOLESTE**/
function dato1X2()
        {
                var aleatorio,i;
                var signos = new Array('1', 'X', '2'); //valores posibles de la quiniela
                for (i=1; i <15; i++)
                {
                        aleatorio = signos[Math.floor(3 * Math.random())];
                }
                return aleatorio;
        }
 
        function equipo1()
        {
                var equipo1,i,equ,aleatorio;
 
                var local = new Array('EXquizofrenicos S.A.', 'Peces de colores SL', 'Sopicaldos JSA','Ranas con lentejuelas SA','Zernicalos CDA','Eptospirosis SL','Sincamiles 100%','SaposCentricos SIU','Squalidos SDU','Broncospasmos SML','Limitaditos C.F.','Zapatillas cojas','E3 SA','Salamandros CFD','Raninculos Acelerados','Roptospitolisiosicos','Calandricos CFS','Septategesuionarios','Sapicaldos Saladetes','Actimeles','Contricos SAQ','Epicondriacosiscos','Lentejuelicos FC','Fronciospilaticos ML','Musticos CFP','Riptilositicos CSD','Estepharios CF','Calindromos'); //valores posibles de la quiniela); //valores posibles de la quiniela
               
               
               
                for (i=1; i <local.length-1; i++)
                {
                        aleatorio=Math.floor((local.length-2)*Math.random(28));
                        equipo1 = local[aleatorio];
 
                }
                return equipo1;
        }