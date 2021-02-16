function totalIt() {
    var input = document.getElementsByClassName("stipend");
    var total = 0;
    for (var i = 0; i < input.length; i++) {
      if (input[i].checked) {
        total += parseFloat(input[i].value);
      }
    }
    document.getElementById("TotalMonthlyStipend").value = "$" + total.toFixed(2);
  }