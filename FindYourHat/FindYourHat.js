const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field){
    this.field = field;
  }
  print(){
    this.field.forEach(item=>console.log(item.join('')))
  }
  static generateField(hi,wi){
    let arrSamp =['░', 'O'];
let arr = new Array(hi); // create an empty array of length n
for (var i = 0; i < hi; i++) {
  arr[i] = new Array(wi); // make each element an array
}
    let ranHi = Math.floor(Math.random()*hi);
    let ranWi = Math.floor(Math.random()*wi);
    for(let i = 0;i<hi;i++){
      for(let j=0;j<wi;j++){
        let ran = Math.floor(Math.random()*2);
        //rconsole.log(arrSamp[ran]);
        arr[i][j] = arrSamp[ran];
      }
      
    }
    arr[0][0]='*';
    arr[ranHi][ranWi] = '^';
    return arr;
  }
}

const ranField = Field.generateField(5,5);
const myField = new Field(ranField);
myField.print();

//const myField2 = new Field(ranField);
//myField2.print();
//const prompt = require('prompt-sync')({sigint: true});
let posMan = [0,0];
//const message = prompt('which direction to move?')
//console.log(message)
//console.log(myField.field[0][0])
while(1){
  const message = prompt('which direction to move?')
  if(message === 'r'){
  posMan[1]+=1;
  if(myField.field[posMan[0]][posMan[1]]==='O'){
    console.log('you fell down');
    break;
  } else if(myField.field[posMan[0]][posMan[1]]==='^'){
    console.log('you found the hat');
    break;
  }
  try{
    myField.field[posMan[0]][posMan[1]]='*';
  } catch(e){
    console.log('you fell down')
    break;
  }
  
  myField.print();
}
if(message === 'd'){
  posMan[0]+=1;
  try{
    if(myField.field[posMan[0]][posMan[1]]==='O'){
    console.log('you fell down');
    break;
  } else if(myField.field[posMan[0]][posMan[1]]==='^'){
    console.log('you found the hat');
    break;
  }
 } catch(e){
   console.log('you fell down')
    break;
 }
  
  try{
    myField.field[posMan[0]][posMan[1]]='*';
  } catch(e){
    console.log('you fell down')
    break;
  }
  
  myField.print();
}

}
