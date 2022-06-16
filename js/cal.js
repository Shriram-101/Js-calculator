

let count = 0;
const arrTemp = [1];
let delStore;
dec = 0;
c=0;
intial = 0;
x = document.getElementById('input1')


function typer(i){
console.log('type of i - ', typeof i);
  console.log('x value - ', x.value);
  c=1; 

  // if (count == 0 && dec != 1){
  //   document.getElementById('input1').value='';
    
  // }

  if (intial ==0 && i == 0 ){
    console.log('dont start from 0');
    document.getElementById('input1').value='';
  }
 
  val = x.value += i;
  console.log('before ',count);
  arrTemp [count] = i;
  count++;
  console.log(count);
  console.log(arrTemp);
  r =10+3;
  intial = 1;
}

function equal(){
  
   console.log(typeof r);
   sum= eval(val);
   x.value = sum;
   arrTemp.length = 0;
   count = 0;
   arrTemp [++count-1] = sum;

   if (sum ==0){
      dec =0;
  }
}



function ac(){
    document.getElementById('input1').value = '';
    arrTemp.length = 0;
    count = 0;
}

function del(){

  if(count >0){

  count--;
  delStore='';
  console.log('del pressed before array length -1 ',arrTemp);
  arrTemp.length = (arrTemp.length)-1;
  console.log('del pressed - ',arrTemp);

  for (i=0; i<arrTemp.length; i++){ 
    delStore += arrTemp[i];
    }

  x.value =delStore;
  }
else if (c==1){
console.log('No digit to delete..');
intial = 0;
dec=0;
document.getElementById('input1').value = ''
  }
}

function deci(d){
for (i=0; i<=arrTemp.length; i++){
      if ( arrTemp[i]!= '.' && dec == 0){
        console.log('inside deci');
        val = x.value += d;
        arrTemp [count++] = d;
        dec = 1;
      }
  }
}


function spec(s){


  if (s == 'log'){
 x.value = eval(Math.log10(x.value));
  }

  else if (s == 'square'){
    x.value = eval(Math.sqrt(x.value));
  }

  else if(s == '1/x'){
    x.value = eval(1/x.value);
  }
 arrTemp.length = 0;
 count=0;
 arrTemp[count++] = x.value;
}