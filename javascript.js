$(document).ready(function(){
    var row = $("#Parent").children().has("id");
    var rightNow = dayjs().format('MMMM D H:mm:ss');
    var currentDay = $("#currentDay");
    currentDay.text(rightNow);
    var saveBtn = $(".saveBtn");
    
    var liveDate = setInterval(function(){
      rightNow = dayjs().format('MMMM D H:mm:ss');
      currentDay.text(rightNow);
    },1000);

    function hourColor(){
      currentHour = parseInt(dayjs().format('H'));
      for (i=0;i<9;i++){
        var rowID = parseInt(row.prevObject[i].getAttribute("id"));
        var rowText = $("textarea")[i];
        if (rowID < currentHour) {
          console.log("low");
          rowText.setAttribute("class", "past");
        } if (rowID === currentHour) {
          console.log("mid");
          rowText.setAttribute("class", "present");
        } if (rowID > currentHour) {
          console.log("high");
          rowText.setAttribute("class", "future");
        };
      };
    };
    hourColor();

    saveBtn.on("click", function(){
      //FIGURE OUT HOW TO USE SWITCH AND CASE TO CUT DOWN ON THE LENGTH OF THIS PARTICULAR CODE
      var savedText = $(this).siblings("textarea").val();
      var savedID = $(this).parent().attr("id");
      var savedIDInt = parseInt(savedID);
      if (savedIDInt === 9){
        localStorage.setItem("text9", savedText);
      } else if (savedIDInt === 10){
        localStorage.setItem("text10", savedText);
      } else if (savedIDInt === 11){
        localStorage.setItem("text11", savedText);
      } else if (savedIDInt === 12){
        localStorage.setItem("text12", savedText);
      } else if (savedIDInt === 13){
        localStorage.setItem("text13", savedText);
      } else if (savedIDInt === 14){
        localStorage.setItem("text14", savedText);
      } else if (savedIDInt === 15){
        localStorage.setItem("text15", savedText);
      } else if (savedIDInt === 16){
        localStorage.setItem("text16", savedText);
      } else if (savedIDInt === 17){
        localStorage.setItem("text17", savedText);
      };
    });

    function grabStored(){
      var storageText = localStorage.getItem("userInput");
      $("#9").children("textarea").text(localStorage.getItem("text9"));
      $("#10").children("textarea").text(localStorage.getItem("text10"));
      $("#11").children("textarea").text(localStorage.getItem("text11"));
      $("#12").children("textarea").text(localStorage.getItem("text12"));
      $("#13").children("textarea").text(localStorage.getItem("text13"));
      $("#14").children("textarea").text(localStorage.getItem("text14"));
      $("#15").children("textarea").text(localStorage.getItem("text15"));
      $("#16").children("textarea").text(localStorage.getItem("text16"));
      $("#17").children("textarea").text(localStorage.getItem("text17"));
    };
    grabStored();
  });