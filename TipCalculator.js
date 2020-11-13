
// To get all the elements to add events 
var formElements = document.getElementsByClassName('getElement');


//To check id's which are present in the above collection and then call the function 
Object.values(formElements).forEach(val => {
    

    switch(val.id)
    {
        case formElements[0].id:val.onkeyup = perPerson; break;
        case formElements[2].id:val.onclick = decrement; break;
        case formElements[4].id:val.onclick = increment; break;
        case formElements[6].id:val.onclick = decrement; break;
        case formElements[8].id:val.onclick = increment; break;
        
    }
    
  });



// The function for the increment of the Tip%(by 1%) and Number of people(by 1) and calling the function perPerson() each time
function increment()
{
    
    if(this.id==formElements[4].id && parseInt(formElements[3].value)<100)
    {
        formElements[3].value = `${parseInt(formElements[3].value) + 1}%`;
        perPerson();
    }

    if(this.id==formElements[8].id && parseInt(formElements[7].value)<100)
    {
        formElements[7].value = parseInt(formElements[7].value)+1;
        perPerson();
    }
        
}


// The function for the decrement of the Tip%(by 1%) and Number of people(by 1) and calling the function perPerson() each time
function decrement()
{
    
    if(this.id==formElements[2].id && parseInt(formElements[3].value)>0)
    {
        formElements[3].value = `${parseInt(formElements[3].value) - 1}%`;
        perPerson();
    }

    if(this.id==formElements[6].id && parseInt(formElements[7].value)>1)
    {
        formElements[7].value = parseInt(formElements[7].value)-1;
        perPerson();
    }
        
}


// Function for the calculation of Tip per person and Total per person and handling Ecxeption for valid Bill Amount
function perPerson()
{
    var flag = true;
    try {
        
    validateBillAmount(formElements[0]);
    let tipPercent = formElements[3].value;
    let numberOfPeople = formElements[7].value;
    let bill = formElements[0].value;

    var tipPerPerson= `${((parseInt(tipPercent)*
                        parseFloat(bill))/
                        100)/parseInt(numberOfPeople)}`;
        

     var totalPerPerson= `${(parseFloat(bill)+
                            ((parseFloat(bill)*
                            parseInt(tipPercent))/100))/parseInt(numberOfPeople)}`;

     if(isNaN(tipPerPerson)){
                   formElements[1].value=0;
                   formElements[5].value=0;
                }else
                {
                    formElements[1].value=tipPerPerson;
                    formElements[5].value=totalPerPerson;
                }
             

    } 
    catch(e) {

            document.getElementById('error').innerHTML='Enter Positive Numeric Values Only !';
             flag = false;
            }

    finally{
        if(flag)
        {
        document.getElementById('error').innerHTML='';

        }
    }
    
}

// Function for the validation of Bill Amount
function validateBillAmount(bill)
{   
    billAmount=bill.value;
    
    if(isNaN(billAmount))
    {
        
        throw TypeError;
    }
    else if(billAmount<0){
        throw TypeError;
    }
}


