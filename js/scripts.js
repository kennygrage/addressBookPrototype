$(document).ready(function() {
  var newContact = { firstName: ["John", "Mary"], lastName: ["Doe", "Jane"], address: ["123 Main Street", "567 State Street"], ivalue: [0,1]};
  var ivalue = 1;

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    $("ul#contacts").empty();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedAddress = $("input#new-address").val();

    function addContact(inputtedFirstName, inputtedLastName, inputtedAddress){
      ivalue++;
      newContact.firstName.push(inputtedFirstName);
      newContact.lastName.push(inputtedLastName);
      newContact.address.push(inputtedAddress);
      newContact.ivalue.push(ivalue);
    };

    addContact(inputtedFirstName, inputtedLastName, inputtedAddress);

    for (var i = 0; i < newContact.firstName.length; i++){
      $("ul#contacts").append("<li class='list-group-item'><span class='contact " + i + "'>" + newContact.firstName[i] + " " + newContact.lastName[i] + "</span></li>");
      // $('.' + i).click(function(){
      //   $("#show-contact").show();
      //     var currentClasses = $(this).attr("class");
      //     var currentClass = currentClasses.split(" ");
      //     console.log(currentClass[1]);
      //     $("#show-contact h2").text(newContact.firstName[currentClass] + " " + newContact.lastName[currentClass]);
      //     $(".first-name").text(newContact.firstName[currentClass]);
      //     $(".last-name").text(newContact.lastName[currentClass]);
      //     $(".address").text(newContact.address[currentClass]);
      //   });

        // });
    }

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-address").val("");

      // for (var key in newContact) {
      $('.' + i).click(function(){
        $("#show-contact").show();
          var currentClasses = $(this).attr("class");
          var currentClass = currentClasses.split(" ");
          console.log(currentClass[1]);
          $("#show-contact h2").text(newContact.firstName[currentClass] + " " + newContact.lastName[currentClass]);
          $(".first-name").text(newContact.firstName[currentClass]);
          $(".last-name").text(newContact.lastName[currentClass]);
          $(".address").text(newContact.address[currentClass]);
        });
      // $('#' + i).click(function(e){
      //   debugger;
      //   $("#show-contact").show();
      //   $("#show-contact h2").text(newContact.firstName[e] + " " + newContact.lastName[e]);
      //   $(".first-name").text(newContact.firstName[e]);
      //   $(".last-name").text(newContact.lastName[e]);
      //   $(".address").text(newContact.address[e]);
      // });
  });
});
