let merchantName, amount, classification, now, newDiv, newDivChild;
function addNew(){
    merchantName = document.getElementById('Mname_input').value.trim();
    amount = document.getElementById('amount_input').value.trim()+" $";
    classification = document.getElementById('calssification_input').value.trim();
    if(classification === ''){classification = 'Personal'}//default parameter for classification
    now = new Date();

    if(merchantName !== ''){//you should enter sth!
        newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'values');//<div class="values"></div>
        document.getElementById("main").appendChild(newDiv);

        let myClone = document.querySelector('.values').cloneNode(true);//copy Element with child
        myClone.querySelector(".expense_date_val").innerText = now;
        myClone.querySelector(".merchant_name_val").innerText = merchantName;
        myClone.querySelector(".amount_val").innerText = amount;
        myClone.querySelector(".classification_val").innerText = classification;

        document.querySelector('.values').parentElement.appendChild(myClone);//add new Element value
    }
    //make input values empty
    document.getElementById('Mname_input').value = '';
    document.getElementById('amount_input').value = 0;
    document.getElementById('calssification_input').value = '';
}


function addNewFunc(){
    //let myClone = document.querySelector('.values').cloneNode(true);
    let myClone = document.getElementById('main');
    let neww = myClone.children[myClone.children.length -1].cloneNode(true);//copy last item
    document.querySelector('.values').parentElement.appendChild(neww);//paste last item
}