function  areaTriangulo (b,a){
return (a*b)/2;

}

function perimetroTriangulo(b,a,c){
    
    if (a===undefined) {
        
        alert("b"+b);
        alert("a: "+a);
        alert("c: "+c);
        perimetroTrianguloEquilatero(b);
        
    
    }else if(c===undefined){
        
       
        alert("b"+b);
        alert("a: "+a);
        alert("c: "+c);
        perimetroTrianguloIsosceles(b,a);
        
    }else{
        
        alert("b"+b);
        alert("a: "+a);
        alert("c: "+c);
        perimetroEscaleno(b,a,c);
        
    }
    
    
}

function perperímetroParalelogramo(a,b){
    
    if (b===undefined){
        
        alert(a);
        areaCuadrado(a);
    }else{
        
        alert(a,b);
        areaRectangulo(a,b);
    }
    
}

function areaPoligono(nlados,a,b){
    if(nlados===1){
        
        longitudCircunferencia(a);
        
    }else if (nlados===3){
        perimetroTrianguloIsosceles(a,b);
    }else if(nlados===4){
        
        if (b===undefined){
            
            areaCuadrado(a);
            
        }else{
            
            areaRectangulo(a,b);
        }
        
    }else{
        alert("Los lados solo pueden ser 1, 3 o 4");
        
    }
    
}


function perimetroTrianguloEquilatero(l){
return l*3;
}

function perimetroTrianguloIsosceles(l1, l2){

return 2*l1+l2;
}
function perimetroTrianguloEscaleno(l1,l2,l3){
return l1+l2+l3;
}
function areaCuadrado(l1){
return Math.pow(l1,2);
}
function perimetroCuadrado(l){
return 4*l;
}
function areaRectangulo(l1,l2){
return l1*l2;
}
function areaCirculo(r){
return Math.PI*Math.pow(r,2);
}
function longitudCircunferencia(r){
return 2*Math.PI*r;
}