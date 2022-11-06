let merchantName, amount, classification, now, newDiv, newDivChild;
function addNew(){
    merchantName = document.getElementById('Mname_input').value.trim();
    amount = document.getElementById('amount_input').value.trim()+" $";
    classification = document.getElementById('calssification_input').value.trim();
    now = new Date();

    if(merchantName !== ''){
        newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'values');//<div class="values"></div>
        document.getElementById("main").appendChild(newDiv);

        produceNewDiv("expense_date_val", now);
        produceNewDiv("merchant_name_val", merchantName);
        produceNewDiv("amount_va", amount);
        produceNewDiv("classification_val", classification);
    }
    document.getElementById('Mname_input').value = '';
    document.getElementById('amount_input').value = 0;
    document.getElementById('calssification_input').value = '';
}

function produceNewDiv(className, input){
    newDivChild = document.createElement('div');
    newDivChild.setAttribute('class', className);
    newDiv.appendChild(newDivChild);
    newDivChild.innerText = input;
}