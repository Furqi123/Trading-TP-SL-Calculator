function calculate() {
    const entry = parseFloat(document.getElementById("entry").value);
    const tpPercent = parseFloat(document.getElementById("tp").value);
    const slPercent = parseFloat(document.getElementById("sl").value);

    if (isNaN(entry) || isNaN(tpPercent) || isNaN(slPercent)) {
      alert("Please enter valid numbers for all fields.");
      return;
    }

    const tpBuy = entry * (1 + tpPercent / 100);
    const slBuy = entry * (1 - slPercent / 100);

    const tpSell = entry * (1 - tpPercent / 100);
    const slSell = entry * (1 + slPercent / 100);

    document.getElementById("result").innerHTML += 
    //   <h3> BUY Trade:</h3>
    //   <p>TP (${tpPercent}%): <strong>$${tpBuy.toFixed(2)}</strong></p>
    //   <p>SL (${slPercent}%): <strong>$${slBuy.toFixed(2)}</strong></p>

    //   <h3>📉 SELL Trade:</h3>
    //   <p>TP (${tpPercent}%): <strong>$${tpSell.toFixed(2)}</strong></p>
    //   <p>SL (${slPercent}%): <strong>$${slSell.toFixed(2)}</strong></p>
`
    <div class="card mb-4">
<div class="card-header">
  <h3> Result</h3>
</div>
<div  class="card-body">
   <h3> BUY Trade:</h3>
      <p>TP (${tpPercent}%): <strong>$${tpBuy.toFixed(2)}</strong></p>
      <p>SL (${slPercent}%): <strong>$${slBuy.toFixed(2)}</strong></p>

      <h3>SELL Trade:</h3>
      <p>TP (${tpPercent}%): <strong>$${tpSell.toFixed(2)}</strong></p>
      <p>SL (${slPercent}%): <strong>$${slSell.toFixed(2)}</strong></p>

</div>
</div>
`

    
  }


  calculate()

{/* <blockquote class="blockquote mb-1">
 <h3>BUY Trade:</h3>
  <p>TP (${tpPercent}%): <strong>$${tpBuy.toFixed(2)}</strong></p>
  <p>SL (${slPercent}%): <strong>$${slBuy.toFixed(2)}</strong></p>
</blockquote>
<blockquote class="blockquote mb-0">

     <h3>SELL Trade:</h3>
    <p>TP (${tpPercent}%): <strong>$${tpSell.toFixed(2)}</strong></p>
    <p>SL (${slPercent}%): <strong>$${slSell.toFixed(2)}</strong></p>
</blockquote> */}