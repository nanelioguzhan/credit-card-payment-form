const holderName = document.querySelector("#name")
const cardNumber = document.querySelector("#card-number");
const cardMonth = document.querySelector("#month")
const cardYear = document.querySelector("#year")
const cvcNumber = document.querySelector("#cvc")
const form = document.querySelector("#form")
const formContainer = document.querySelector(".form-wrapper")
const submitBtn = document.querySelector("#submit")

const displayedName = document.querySelector(".displayed-name")
const displayedNumber = document.querySelector(".displayed-number")
const displayedMonth = document.querySelector(".displayed-month")
const displayedYear = document.querySelector(".displayed-year")
const displayedCvc = document.querySelector(".displayed-cvc")




holderName.oninput = () => {
    displayedName.textContent = holderName.value.toUpperCase();
}

cardNumber.oninput = () => {
    
    displayedNumber.textContent = cardNumber.value.replace(/[^0-9]+/gi, '').replace(/(.{4})/g, '$1 ');

}

cardMonth.oninput = () => {
    displayedMonth.textContent = cardMonth.value.replace(/[^0-9]+/gi, "")
}

cardYear.oninput = () => {
    displayedYear.textContent = cardYear.value.replace(/[^0-9]+/gi, "");
}

cvcNumber.oninput = () => {
    displayedCvc.textContent = cvcNumber.value.replace(/[^0-9]+/gi, "")
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
   
    console.log(cardNumber.value);
    if(holderName.value / holderName.value == "1") {
        alert("Your card name involves numeric value!")
    }
    else if(cardNumber.value / cardNumber.value != "1") {
        alert("Your card number includes non-numeric value!")
    }
    else if(cardMonth.value / cardMonth.value != "1") {
        alert("Expire month involves non-numeric value!")
    }
    else if(cardYear.value / cardYear.value != "1") {
        alert("Expire year includes non-numeric value!")
    } else {
        ThankYouDisplay()
        formContainer.classList.add("hidden");
    }

    
})

function ThankYouDisplay () {
    const main = document.querySelector("main")

    const thankSection = document.createElement("section");
    thankSection.classList.add("thank-you")
    main.appendChild(thankSection)

    const thanksDIV = document.createElement("div")
    thanksDIV.classList.add("thank-you-wrapper")
    thankSection.appendChild(thanksDIV)
    
    const imgComplete = document.createElement("img");
    imgComplete.src = "images/icon-complete.svg";
    imgComplete.alt = "complete icon"
    thanksDIV.appendChild(imgComplete);

    const thankYouHeader = document.createElement("h3");
    thankYouHeader.textContent = "THANK YOU";
    thanksDIV.appendChild(thankYouHeader);

    const thankYouText = document.createElement("p");
    thankYouText.textContent = "We've added your card details";
    thanksDIV.appendChild(thankYouText);

    const continueBtn = document.createElement("button");
    continueBtn.textContent = "Continue";
    thanksDIV.appendChild(continueBtn);

    continueBtn.addEventListener("click", () => {
        formContainer.classList.remove("hidden");
        thankSection.remove();
    })
}





