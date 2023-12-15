var  fristName=document.getElementById('fristName');
var  lastName=document.getElementById('lastName');
var  lastName=document.getElementById('productPrice');

var fristName = [];


if(localStorage.getItem('fristName') !== null)  {
    
   var product = {
      name: fristName.value,
      price: lastName.value , 
       
  };

 
    productList.push(Name);
    console.log(productList);
 

 
    localStorage.setItem('fristName' , JSON.stringify(productDesc))
 
    disp();
   


 }

 
 
  

function clearInputs() {
   fristName.value = "";
   lastName .value = "";
 
}

function disp(){
   var xc = ``;
   for(var i = 0 ;i < productList.length;i++) {

   xc += ` <tr>
   <td>${productDesc[i].name}</td>
   <td>${productDesc[i].price}</td>
    
   <td><button class="btn btn-info">update</button></td>
   <td><button class="btn btn-danger" onclick="deleteProduct(${i})">delete</button></td>
</tr>`

   }
   document.getElementById('ghh').innerHTML=xc ;
}
 
function deleteProduct(index) {
    
   productDesc.splice(index , 1);
   console.log(productDesc);
 
   disp()
}

