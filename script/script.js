$(document).ready(function() {
    $.get("./Table_Input.csv", function(data) {
      var lines = data.split("\n");
      var table1 = "<table class='table'><caption>Table 1</caption><thead><tr><th>Index #</th><th>Value</th></tr></thead><tbody>";
      var values = {}; // Store values for Table 2 calculation
      for (var i = 1; i < lines.length; i++) {
        var cells = lines[i].split(",");
        if (cells.length === 2) {
          table1 += "<tr><td>" + cells[0] + "</td><td>" + cells[1] + "</td></tr>";
          values[cells[0]] = parseInt(cells[1]); // Store values for Table 2
        }
      }
      table1 += "</tbody></table>";
      $(".tableContainer").html(table1);
  
      // Generate Table 2 using values from Table 1
      var table2 = "<table class='table'><caption>Table 2</caption><thead><tr><th>Category</th><th>Value</th></tr></thead><tbody>";
      table2 += "<tr><td>Alpha</td><td>" + (values["A5"] + values["A20"]) + "</td></tr>";
      table2 += "<tr><td>Beta</td><td>" + (values["A15"] / values["A7"]) + "</td></tr>";
      table2 += "<tr><td>Charlie</td><td>" + (values["A13"] * values["A12"]) + "</td></tr>";
      table2 += "</tbody></table>";
  
      $(".tableContainer").append(table2);
    });
  });
  