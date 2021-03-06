
import * as moment from 'moment';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
var myVar = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById("demo").innerHTML = moment().format("DD-MM-YYYY hh:mm:ss A");
}

function addPill(description, dueTime) {

    const pillList = document.getElementById("pill_list");
    const pillInterval = document.getElementById("pill_interval").value;
    let number_time = parseInt(pillInterval);
    const pillAmount = document.getElementById("pill_amount").value;
    const dueTimeNode = document.createElement("span");
    
    const newPill = document.createElement("li");
    dueTimeNode.textContent = moment().add(number_time, 'hours').calendar();
    newPill.append(description, pillAmount, dueTimeNode);
    pillList.append(newPill);

}

const addPillButton = document.getElementById("add_pill");

addPillButton.addEventListener("click", () => {
    const descriptionInput = document.getElementById("pill_name_input");
    const pillAmountInput = document.getElementById("pill_amount");
    const pillIntervalInput = document.getElementById("pill_interval").value;

    const description = descriptionInput.value + ' ';
    const pillAmount = pillAmountInput.value + ' Tablets ';
    const pillInterval = 'at ' + pillIntervalInput.value;
    const fullDueDate = pillAmount + pillInterval;

    addPill(description, fullDueDate);
    descriptionInput.value = ' ';
});
