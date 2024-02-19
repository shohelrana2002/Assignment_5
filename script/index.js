const allKeys = document.getElementsByClassName("kbd");
let sumMinas = 40;
let sum = 0;

for (const allKey of allKeys) {
  allKey.addEventListener("click", function kbdAllClick(event) {
    //  4 sit select just
    if (sum === 4) {
      allKeys.removeAttribute("click");
    }
    if (allKey.classList.add("bg-[green]")) {
      return;
    }
    sum += 1;
    sumMinas = sumMinas - 1;
    setInnerText("count-ticket", sum);
    setInnerText("minas", sumMinas);

    const keyText = allKey.innerText;
    console.log(keyText);
    // add text
    const add = document.getElementById("selected-place-container");
    const li = document.createElement("li");
    li.classList.add("flex", "justify-between", "gap-20", "my-2");
    const p = document.createElement("p");
    p.innerText = keyText;
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p3.innerText = 550;
    // total price
    const p3Total = parseInt(p3.innerText);
    const totalPrice = document.getElementById("total-t").innerText;
    const totalPriceConvert = parseInt(totalPrice);
    const priceTotal = p3Total + totalPriceConvert;
    setInnerText("total-t", priceTotal);
    setInnerText("grand-total", priceTotal);

    //  input fileld cupon code
    const btn = document.getElementById("btn-input");
    btn.addEventListener("click", function (e) {
      const inputFiled = document.getElementById("input-filed");
      const inputFiledValue = inputFiled.value;
      const couponCode = inputFiledValue;
      const hide = document.getElementById("hidden");
      document.getElementById("btn-input").removeAttribute("disabled");
      if (couponCode === "NEW15") {
        const x = priceTotal * 0.15;
        const priceTotalDiscount = priceTotal - x;
        setInnerText("grand-total", priceTotalDiscount);
        hide.setAttribute("hidden", true);
      } else if (couponCode === "Couple 20") {
        const x = priceTotal * 0.2;
        const priceTotalDiscount = priceTotal - x;
        setInnerText("grand-total", priceTotalDiscount);
        hide.setAttribute("hidden", true);
      } else {
        alert("Invalid Coupon");
      }
    });

    p2.innerText = "Economoy";
    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(p3);
    add.appendChild(li);
  });
}

// input number
const btns = document.getElementsByClassName("btn-success");
const inputs = document.getElementsByClassName("nummber-input");
const hide = document.getElementById("hide_succes");
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", function () {
    const telValue = this.value.length;
    if (telValue === 0) {
      for (let j = 0; j < btns.length; j++) {
        btns[j].setAttribute("disabled", true);
      }
    } else {
      for (let j = 0; j < btns.length; j++) {
        btns[j].removeAttribute("disabled");
      }
    }
  });
}

function btnsClicked() {
  hide.classList.remove("hidden");
}
