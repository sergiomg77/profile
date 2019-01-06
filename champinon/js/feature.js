
var allFeatures = (function() { 

	var person_info_url = "https://cors.io/?https://torre.bio/api/people/sergiomg77";
    var person_jobs_url = "https://cors.io/?https://torre.bio/api/bios/sergiomg77/jobs";

    var init = function(){

        initPersonInfo();

    };

    var initPersonInfo = function(){

        $.get(person_jobs_url, function(data, status){

            if(status == 'success'){
                console.log(data);

                var obj = JSON.parse(data);
                console.log(obj);

                $("#job1desc").text(obj[0].role);
                $("#job2desc").text(obj[1].role);

                

            }else{
                console.log("No data !");
            }

        });

    	$.get(person_info_url, function(data, status){

    		if(status == 'success'){
    			console.log(data);

                var obj = JSON.parse(data);

    			$("#personPhoto").attr("src",obj.picture);
    			$("#personName").text(obj.name);
                $("#personSummary").text(obj.summaryOfBio);
    			$("title").text(obj.name);
    			$("#personProfession").html("<i class=\"fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal\"></i>"+obj.professionalHeadline);
    			$("#personEmail").html("<i class=\"fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal\"></i>"+obj.email);
    			$("#personLocation").html("<i class=\"fa fa-home fa-fw w3-margin-right w3-large w3-text-teal\"></i>"+obj.location);
    			


    		}else{
    			console.log("No data !");
    		}

    	});

    }

    return {

        allinit: init

    };

})();

$(document).on('ready',allFeatures.allinit);
