
   function getPosition(element) {
		var left = 0;
		var top = 0;
		if(element.offsetParent) {
			while(element) {
				left += element.offsetLeft;
				top += element.offsetTop;
				element = element.offsetParent;
			}
		}
		return {offsetLeft: left, offsetTop: top};
	}


  function showResponse(responseText, statusText)  {
      $("#supDialog").hide();
      //alert("I sent all ");
  }



  function loadProduct(prodID,fromWhere){
     //alert("You have clicked " + prodID );
     if (fromWhere === 'jsddm'){
       $("#selectedProduct").val(prodID);
       $("#loadSingleProduct").trigger("submit");
     } else {
       $("#selectedPic").val(prodID);
       $("#orderFrm").trigger("submit");
     }
  }


  function loadFamily(famID){
    //$("#famID").val(famID);
    //$("#firstProductFromFamily").trigger("submit");
    $("#pics").children("*").remove();
    $("#chosenFamily").val(famID);
    $("#loadSelectedFamily").trigger("submit");

  }

  function newUser(){
    $("#sup").trigger("click");
  }

  function logIn(){
    $("#signUpResponse").trigger("click");
  }


$(document).ready(function() {
var options = {target:"#showProduct",
               success: showResponse};

var opts1 = {target:"#status",
             success: showResponse
};

var optionsFamily = {target:"#pics",
             success: showResponseFml
};


$("#loginFrm").ajaxForm();
$("#loginFrm").submit(function () {
    $(this).ajaxSubmit(opts1);
    return false;
})

$("#orderFrm").ajaxForm();
$("#orderFrm").submit(function (){
   $(this).ajaxSubmit(options);
   return false;
});

$("#loadSingleProduct").ajaxForm();
$("#loadSingleProduct").submit(function (){
   $(this).ajaxSubmit(options);
   return false;
});

$("#loadSelectedFamily").ajaxForm();
$("#loadSelectedFamily").submit(function (){
   $(this).ajaxSubmit(optionsFamily);
   return false;
});

$("#signUpFrm").submit(function() {
   $(this).ajaxSubmit(options);
   return false;
});


$("#loginFrm").hide();
$("#supDialog").hide();

var showing = false;
var context;

$("#sup").click(function(){
  if (showing == false){
  $("#supDialog").show();
  context = $("#supDialog").dialog({
    modal: false,
    width: 600,
    height:450,
    overlay: {
        opacity: 0.5,
        background: "black"
    }
});

showing = true;
} else {
  context.dialog("close");
  showing = false;

}});

$("#pics").dialog({
modal: false,
position: [getPosition(document.getElementById("mainTable")).offsetLeft + 600 + 190 ,getPosition(document.getElementById("mainTable")).offsetTop+1],
    draggable: false,
    resizable: false,
    width: 150,
    height: ($("#mainTable").height())
});
    $("#bdate").datepicker();
    $("#bdate").datepicker({rangeSelect: true, firstDay: 1,yearRange: '1915:2010',showOtherMonths: true});

    $("#in").click(function() {
        $.blockUI({ message: $("#loginFrm")});
    });


    $("#loginBtn").click(function(){
        $("#loginFrm").trigger("submit");
        $.unblockUI();
    });

     $("#signUpFrm").validate({
	   errorLabelContainer: "#errorContainer",
       rules: {
         user: {required: true,
                minlength: 3,
                maxlength: 250},
         pass: {required: true,
                minlength: 4,
                maxlength: 20},
         passagain: { required : function(){
                                   return ($("#pass").val().toString() !== $("#passagain").val().toString());
                                 }},
         fname: { required: true,
                  minlength: 4,
                  maxlength: 100},
         lname: { required: true,
                  minlength: 4,
                  maxlength: 100},
         bdate: { required: true,
                  date: true},
         country: { required: true,
                    minlength: 5,
                    maxlength: 50},
         city: {    required: true,
                    minlength: 5,
                    maxlength: 50},
         address: { required: true,
                    minlength: 8,
                    maxlength: 250},
         email: { required: true,
                  email: true},
         zip: { required: true,
                minlength: 3,
                maxlength: 15},
         phone: { required: true,
                  phoneUS: true
         }
       }
      });



    $("#navigation").fancybox({ 'zoomSpeedIn': 0, 'zoomSpeedOut': 0, 'overlayShow': true });

    $('#jsddm > li').bind('mouseover', jsddm_open);
	$('#jsddm > li').bind('mouseout',  jsddm_timer);

//$("#fam0").trigger("click");


 });

 function showResponseFml(responseText, statusText)  {
     // $("#supDialog").hide();
      $("#pics>img:first").trigger("click");
  }
