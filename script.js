function planTrip() {
  const people = document.getElementById("people").value || 1;
  const transport = document.getElementById("transport").value;

  let destination = "Jaipur";
  let days = 3;

  let stay = 1200 * days;
  let food = 400 * people * days;
  let transportCost = transport === "train" ? 700 * people : 3000;

  let total = stay + food + transportCost;

  document.getElementById("result").innerHTML = `
    <div style="margin-top:15px;">
      <h3>${destination}</h3>
      <p>Days: ${days}</p>
      <p>Transport: ${transport}</p>
      <h2>₹${total}</h2>
    </div>
  `;
}
