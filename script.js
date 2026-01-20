function calculate(){
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const people = Number(document.getElementById("people").value);
  const days = Number(document.getElementById("days").value);

  if(!people || !days){
    alert("Enter people & days");
    return;
  }

  // average costs
  let stay = 1500 * days;
  let food = 500 * people * days;
  let travel = 2000 + (people * 500);

  let total = stay + food + travel;

  document.getElementById("result").innerHTML = `
    <hr>
    <b>Route:</b> ${from} → ${to}<br>
    <b>People:</b> ${people}<br>
    <b>Days:</b> ${days}<br><br>

    🏨 Stay: ₹${stay}<br>
    🍽 Food: ₹${food}<br>
    🚆 Travel: ₹${travel}<br><br>

    <h3>Total Budget: ₹${total}</h3>
  `;
}

function logout(){
  localStorage.removeItem("login");
  window.location.href="login.html";
}

