function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
};

function addPhoneNumber(obj){    
    $(".add-phone-number").last().on("click", function(event){           
            $(".phone").html("<div class='new-phone-number removeable'>" + 
                                                    "<div class='form-group'>" + 
                                                        "<label for='description'>Description</label>" + 
                                                        "<input type='text' class='form-control description' placeholder='Description'>" +                                                 
                                                    "</div>" + 
                                                    "<div class='form-group'>" + 
                                                        "<label for='new-phone-number'>Phone Number</label>" + 
                                                        "<input type='text' class='form-control new-phone-number' placeholder='Phone Number'>" +
                                                    "</div>" + 
                                                    "<button class='btn btn-primary add-new-phone-number'>ADD</button>" +                                              
                                               "</div>");

            $(".add-new-phone-number").on("click", function(event){
                event.preventDefault();

                var inputedDescription = $("input.description").val();
                var inputedNewPhoneNumber = $("input.new-phone-number").val();
                var phoneAndDescription = {
                    phoneDescription: inputedDescription,
                    newPhoneNumber: inputedNewPhoneNumber
                };

                obj.phoneNumber.push(phoneAndDescription);

                $(".removeable").remove();
            });
    });
};

function addAddress(obj){    
    $(".add-address").last().on("click", function(event){        
        event.preventDefault();
        $(".address").html("<div class='add-addresses removeable'>" + 
                                "<div class='new-address'>" + 
                                    "<div class='form-group'>" +
                                        "<label for='new-street'>Street</label>" +
                                        "<input type='text' class='form-control new-street' placeholder='Street'>" +
                                    "</div>" +                          
                                    "<div class='form-group'>" + 
                                        "<label for='new-city'>City</label>" +
                                        "<input type='text' class='form-control new-city' placeholder='City'>" +
                                    "</div>" +
                                    '<div class="form-group">' +
                                        '<label for="new-state">State</label>' +
                                       ' <input type="text" class="form-control new-state" placeholder="State">' +
                                    "</div>" + 
                                "</div>" +
                                "<button class='btn btn-primary add-new-address'>ADD</button>" +
                            "</div>");

        $(".add-new-address").on("click", function(event){
            event.preventDefault();

            var inputedStreet = $("input.new-street").val();
            var inputedCity = $("input.new-city").val();
            var inputedState = $("input.new-state").val();
            var address = {
                street: inputedStreet,
                city: inputedCity,
                state: inputedState
            };

            obj.adresses.push(address);
            $(".removeable").remove();
        }); 
    });
};

function showAllInfo(obj){
    $("#contacts-info").show();
    $("li#first-name").text("First Name: " + obj.firstName);
    $("li#last-name").text("Last Name: " + obj.lastName);
    $("#phones").text("");
    $("#addresses").text("");
    var number = 1;      
    obj.phoneNumber.forEach(function(phone){
        $("#phones").append($("<li>",{id:"phone" + number}).addClass("list-group-item"));
        $("#phone" + number).text(capitalize(phone.phoneDescription) + " Phone Number: " + phone.newPhoneNumber);
        number++;
    });
    var count = 1;
    obj.adresses.forEach(function(address){
        $("#addresses").append($("<li>",{id:"address" + count}).addClass("list-group-item"));
        $("#address" + count).text("Address #" + count + ":" + address.street + ", " + address.city + ", " + address.state + ".");
        count++;
    });    
};

function showNameOfContact(firstName, lastName){
    $(".output").show();
    $("ol").append("<li class='contact'>" + 
                        firstName + " " + lastName + 
                    "</li>" + 
                    "<span class='btn btn-primary add-phone-number'>Add Phone Number</span>" +
                    " " + 
                    "<span class='btn btn-primary add-address'>Add Address</span>"
                    );
};

function cleanInput(){
    $("#first-name").val("");
    $("#last-name").val("");
    $(".new-street").val("");
    $(".new-city").val("");
    $(".new-state").val("");
    $("input.phone-number").val("");
};


$(document).ready(function(){
    $("#create-contact").click(function(event){

        event.preventDefault();
        var inputedFirstName = $("#first-name").val();
        var inputedLastName = $("#last-name").val();
                

        var newContact = {
            firstName: inputedFirstName,
            lastName: inputedLastName,
            phoneNumber: [],
            adresses: [] 
        };        

        showNameOfContact(newContact.firstName, newContact.lastName);

        addPhoneNumber(newContact);

        addAddress(newContact);
        
        cleanInput();

        $(".contact").last().click(function(event){

        event.preventDefault();     

         showAllInfo(newContact);       
    });   

    });

})