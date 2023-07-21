const changeMoney = document.getElementById('change')

const convertButton = document.getElementById('button')

const selectCurrency1 = document.getElementById('select-value')

const selectCurrency = document.getElementById('select-values')


function convertValue() {
 
  //Valores das moedas
  const inputGetValue = document.getElementById('get-value').value
  


  //Conversão
 //Real
const convertRealDolar = inputGetValue * 0.21
const convertRealEuro = inputGetValue * 0.19
const convertRealLibra = inputGetValue * 0.16
const convertRealBitcoin = inputGetValue * 0.0000070

//Dolar
const convertDolarReal = inputGetValue * 4.77
const convertDolarEuro = inputGetValue * 0.9
const convertDolarLibra = inputGetValue * 0.78
const convertDolarBitcoin = inputGetValue * 0.000033

//Euro

const convertEuroReal = inputGetValue * 5.30
const convertEuroDolar = inputGetValue * 1.11
const convertEuroLibra = inputGetValue * 0.87
const convertEuroBitcoin = inputGetValue * 0.000037

//Libra

const convertLibraReal = inputGetValue * 6.13
const convertLibraDolar = inputGetValue * 1.28
const convertLibraEuro = inputGetValue * 1.16
const convertLibraBitcoin = inputGetValue * 0.000043

//Bitcoin
const convertBitcoinReal = inputGetValue * 142466
const convertBitcoinDolar = inputGetValue * 29872
const convertBitcoinEuro = inputGetValue * 26855
const convertBitcoinLibra = inputGetValue * 23240


  
  const getValue = document.getElementById('values')
  
  const getValue2 = document.getElementById('values-2')


//Real para:
 if(selectCurrency1.value == "real"){
  getValue.innerHTML = `<p>R$ ${inputGetValue}</p>`
 } 
 if(selectCurrency.value == "real"){
  getValue2.innerHTML = `<p>R$ ${inputGetValue}</p>`
 }
 if(selectCurrency.value == "dolar"){
   getValue2.innerHTML = `<p>US$ ${convertRealDolar}</p>`
 }
 if(selectCurrency.value == "euro"){
  getValue2.innerHTML = `<p>€ ${convertRealEuro}</p>`
}
if(selectCurrency.value == "libra"){
  getValue2.innerHTML = `<p>£ ${convertRealLibra}</p>`
}
if(selectCurrency.value == "bitcoin"){
  getValue2.innerHTML = `<p> ${convertRealBitcoin}</p>`
}

//Dolar para:
if(selectCurrency1.value == "dolar"){
  getValue.innerHTML = `<p>US$ ${inputGetValue}</p>`
}
if(selectCurrency.value == "real" && selectCurrency1.value == "dolar"){
 getValue2.innerHTML = `<p>R$ ${convertDolarReal}</p>`
}
if(selectCurrency1.value == "dolar" && selectCurrency.value == "dolar"){
  getValue.innerHTML = getValue2.innerHTML = `<p>US$ ${inputGetValue}</p>`
}
if(selectCurrency1.value == "dolar" && selectCurrency.value == "euro"){
  getValue2.innerHTML = `<p>€ ${convertDolarEuro}</p>`
}
if(selectCurrency1.value == "dolar" && selectCurrency.value == "libra"){
  getValue2.innerHTML = `<p>£ ${convertDolarLibra}</p>`
}
if(selectCurrency1.value == "dolar" && selectCurrency.value == "bitcoin"){
  getValue2.innerHTML = `<p> ${convertDolarBitcoin}</p>`
}

//Euro para:
if(selectCurrency1.value == "euro"){
  getValue.innerHTML = `<p>€ ${inputGetValue}</p>`
}
if(selectCurrency.value == "real" && selectCurrency1.value == "euro"){
 getValue2.innerHTML = `<p>R$ ${convertEuroReal}</p>`
}
if(selectCurrency1.value == "euro" && selectCurrency.value == "dolar"){
   getValue2.innerHTML = `<p>US$ ${convertEuroDolar}</p>`
}
if(selectCurrency1.value == "euro" && selectCurrency.value == "euro"){
  getValue.innerHTML = getValue2.innerHTML = `<p>€ ${inputGetValue}</p>`
}
if(selectCurrency1.value == "euro" && selectCurrency.value == "libra"){
  getValue2.innerHTML = `<p>£ ${convertEuroLibra}</p>`
}
if(selectCurrency1.value == "euro" && selectCurrency.value == "bitcoin"){
  getValue2.innerHTML = `<p> ${convertEuroBitcoin}</p>`
}

//Libra para:
if(selectCurrency1.value == "libra"){
  getValue.innerHTML = `<p>€ ${inputGetValue}</p>`
}
if(selectCurrency.value == "real" && selectCurrency1.value == "libra"){
 getValue2.innerHTML = `<p>R$ ${convertLibraReal}</p>`
}
if(selectCurrency1.value == "libra" && selectCurrency.value == "dolar"){
   getValue2.innerHTML = `<p>US$ ${convertLibraDolar}</p>`
}
if(selectCurrency1.value == "libra" && selectCurrency.value == "euro"){
  getValue2.innerHTML = `<p>€ ${convertLibraEuro}</p>`
}
if(selectCurrency1.value == "libra" && selectCurrency.value == "libra"){
  getValue.innerHTML = getValue2.innerHTML = `<p>£ ${inputGetValue}</p>`
}
if(selectCurrency1.value == "libra" && selectCurrency.value == "bitcoin"){
  getValue2.innerHTML = `<p> ${convertLibraBitcoin}</p>`
}

//Bitcoin para: 

if(selectCurrency1.value == "bitcoin"){
  getValue.innerHTML = `<p>€ ${inputGetValue}</p>`
}
if(selectCurrency.value == "real" && selectCurrency1.value == "bitcoin"){
 getValue2.innerHTML = `<p>R$ ${convertBitcoinReal}</p>`
}
if(selectCurrency1.value == "bitcoin" && selectCurrency.value == "dolar"){
   getValue2.innerHTML = `<p>US$ ${convertBitcoinDolar}</p>`
}
if(selectCurrency1.value == "bitcoin" && selectCurrency.value == "euro"){
  getValue2.innerHTML = `<p>€ ${convertBitcoinEuro}</p>`
}
if(selectCurrency1.value == "bitcoin" && selectCurrency.value == "libra"){
  getValue2.innerHTML = `<p>€ ${convertBitcoinLibra}</p>`
}
if(selectCurrency1.value == "bitcoin" && selectCurrency.value == "bitcoin"){
  getValue.innerHTML = getValue2.innerHTML = `<p> ${inputGetValue}</p>`
}

}
console.log(selectCurrency.value)

function changeCurrency () {
    const trocarImagem = document.getElementById('trocaImg')
    const trocarCoin = document.getElementById('trocaCoin')
  
    const imgChange = document.getElementById('change-img')
    const coinName = document.getElementById('change-coin')


   if(selectCurrency.value == "dolar"){
       imgChange.src = './img/eua.png'
       coinName.innerHTML = "Dólar"
    }
    if(selectCurrency.value == "euro"){
    imgChange.src = './img/euro.png'
    coinName.innerHTML = "Euro"
   }
   if(selectCurrency.value == "libra"){
    imgChange.src = './img/libra.png'
    coinName.innerHTML = "Libra"
   }
   if(selectCurrency.value == "bitcoin"){
    imgChange.src = './img/bitcoin.png'
    coinName.innerHTML = "Bitcoin"
   }
   if(selectCurrency1.value && selectCurrency.value == "real") {
    imgChange.src = './img/brasil.png'
    coinName.innerHTML = "Real"
  }
  if(selectCurrency1.value == "real"){
    trocarImagem.src = './img/brasil.png'
    trocarCoin.innerHTML = 'Real'
  }
  if(selectCurrency1.value == "dolar"){
    trocarImagem.src = './img/eua.png'
    trocarCoin.innerHTML = 'Dólar'
  }
  if(selectCurrency1.value == "euro"){
    trocarImagem.src = './img/euro.png'
    trocarCoin.innerHTML = 'Euro'
  }
  if(selectCurrency1.value == "libra"){
    trocarImagem.src = './img/libra.png'
    trocarCoin.innerHTML = 'Libra'
  }
  if(selectCurrency1.value == "bitcoin"){
    trocarImagem.src = './img/bitcoin.png'
    trocarCoin.innerHTML = 'Bitcoin'
  }
  
  
  convertValue()
}

selectCurrency.addEventListener('change', changeCurrency)
convertButton.addEventListener('click' , convertValue)
selectCurrency1.addEventListener('change', changeCurrency)






