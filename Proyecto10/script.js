const QuoteEl = document.getElementById('Quote')
const QuoteBtn = document.getElementById('QuoteBtn')

QuoteBtn.addEventListener('click', generateQuote)

generateQuote()

// USING ASYNC/AWAIT
async function generateQuote() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('', config)

  const data = await res.json()

  QuoteEl.innerHTML = data.Quote
}

// USING .then()
// function generateQuote() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadQuote.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       QuoteEl.innerHTML = data.Quote
//     })
// }
