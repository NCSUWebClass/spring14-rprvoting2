$(document).ready(function() {
		$(".candidate_county_commission_item").hide();
		$(".candidate_county_commission tr:first-child").show();
		$(".candidate_table tr.candidate_county_commission").click( function() {
			$(this).nextAll("tr.candidate_county_commission_item").fadeToggle("fast");
			$(".candidate_wake_da_item").hide();
			$(".candidate_clerk_of_court_item").hide();
			$(".candidate_nc_senate_15_item").hide();
			$(".candidate_nc_house_49_item").hide();
	});
});
$(document).ready(function() {
	$(".candidate_wake_da_item").hide();
	$(".candidate_wake_da tr:first-child").show();
	$(".candidate_table tr.candidate_wake_da").click(function() {
		$(this).nextAll("tr.candidate_wake_da_item").fadeToggle();
		$(".candidate_county_commission_item").hide();
		$(".candidate_clerk_of_court_item").hide();
		$(".candidate_nc_senate_15_item").hide();
		$(".candidate_nc_house_49_item").hide();
	});
});
$(document).ready(function() {
	$(".candidate_clerk_of_court_item").hide();
	$(".candidate_clerk_of_court tr:first-child").show();
	$(".candidate_table tr.candidate_clerk_of_court").click(function() {
		$(this).nextAll("tr.candidate_clerk_of_court_item").fadeToggle();
		$(".candidate_county_commission_item").hide();
		$(".candidate_wake_da_item").hide();
		$(".candidate_nc_senate_15_item").hide();
		$(".candidate_nc_house_49_item").hide();
	});
});
$(document).ready(function() {
	$(".candidate_nc_senate_15_item").hide();
	$(".candidate_nc_senate_15 tr:first-child").show();
	$(".candidate_table tr.candidate_nc_senate_15").click(function() {
		$(this).nextAll("tr.candidate_nc_senate_15_item").fadeToggle();
		$(".candidate_county_commission_item").hide();
		$(".candidate_clerk_of_court_item").hide();
		$(".candidate_wake_da_item").hide();
		$(".candidate_nc_house_49_item").hide();
	});
});
$(document).ready(function() {
	$(".candidate_nc_house_49_item").hide();
	$(".candidate_nc_house_49 tr:first-child").show();
	$(".candidate_table tr.candidate_nc_house_49").click(function() {
		$(this).nextAll("tr.candidate_nc_house_49_item").fadeToggle();
		$(".candidate_county_commission_item").hide();
		$(".candidate_clerk_of_court_item").hide();
		$(".candidate_nc_senate_15_item").hide();
		$(".candidate_wake_da_item").hide();
	});
});

$(document).ready(function() {
$("#joeBryan").hover(
	function(e) { $("#hiddendiv_joeBryan").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_joeBryan").hide(); }
);
$("#hiddendiv_joeBryan").hover(
	function(e) { $("#hiddendiv_joeBryan").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_joeBryan").hide(); }
);
});

$(document).ready(function() {
$("#fredPuryear").hover(
	function(e) { $("#hiddendiv_fredPuryear").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_fredPuryear").hide(); }
);
$("#hiddendiv_fredPuryear").hover(
	function(e) { $("#hiddendiv_fredPuryear").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_fredPuryear").hide(); }
);
});

$(document).ready(function() {
$("#nancyFreeman").hover(
	function(e) { $("#hiddendiv_nancyFreeman").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_nancyFreeman").hide(); }
);
$("#hiddendiv_nancyFreeman").hover(
	function(e) { $("#hiddendiv_nancyFreeman").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_nancyFreeman").hide(); }
);
});

$(document).ready(function() {
$("#jeffCruden").hover(
	function(e) { $("#hiddendiv_jeffCruden").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_jeffCruden").hide(); }
);
$("#hiddendiv_jeffCruden").hover(
	function(e) { $("#hiddendiv_jeffCruden").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_jeffCruden").hide(); }
);
});

$(document).ready(function() {
$("#terrySwaim").hover(
	function(e) { $("#hiddendiv_terrySwaim").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_terrySwaim").hide(); }
);
$("#hiddendiv_terrySwaim").hover(
	function(e) { $("#hiddendiv_terrySwaim").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_terrySwaim").hide(); }
);
});

$(document).ready(function() {
$("#benjaminZellinger").hover(
	function(e) { $("#hiddendiv_benjaminZellinger").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_benjaminZellinger").hide(); }
);
$("#hiddendiv_benjaminZellinger").hover(
	function(e) { $("#hiddendiv_benjaminZellinger").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_benjaminZellinger").hide(); }
);
});

$(document).ready(function() {
$("#jeffersonGriffin").hover(
	function(e) { $("#hiddendiv_jeffersonGriffin").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_jeffersonGriffin").hide(); }
);
$("#hiddendiv_jeffersonGriffin").hover(
	function(e) { $("#hiddendiv_jeffersonGriffin").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_jeffersonGriffin").hide(); }
);
});

$(document).ready(function() {
$("#johnBryant").hover(
	function(e) { $("#hiddendiv_johnBryant").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_johnBryant").hide(); }
);
$("#hiddendiv_johnBryant").hover(
	function(e) { $("#hiddendiv_johnBryant").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_johnBryant").hide(); }
);
});

$(document).ready(function() {
$("#blairWilliams").hover(
	function(e) { $("#hiddendiv_blairWilliams").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_blairWilliams").hide(); }
);
$("#hiddendiv_blairWilliams").hover(
	function(e) { $("#hiddendiv_blairWilliams").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_blairWilliams").hide(); }
);
});

$(document).ready(function() {
$("#jenniferKnox").hover(
	function(e) { $("#hiddendiv_jenniferKnox").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_jenniferKnox").hide(); }
);
$("#hiddendiv_jenniferKnox").hover(
	function(e) { $("#hiddendiv_jenniferKnox").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_jenniferKnox").hide(); }
);
});

$(document).ready(function() {
$("#joeTeague").hover(
	function(e) { $("#hiddendiv_joeTeague").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_joeTeague").hide(); }
);
$("#hiddendiv_joeTeague").hover(
	function(e) { $("#hiddendiv_joeTeague").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_joeTeague").hide(); }
);
});

$(document).ready(function() {
$("#samBridges").hover(
	function(e) { $("#hiddendiv_samBridges").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_samBridges").hide(); }
);
$("#hiddendiv_samBridges").hover(
	function(e) { $("#hiddendiv_samBridges").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_samBridges").hide(); }
);
});

$(document).ready(function() {
$("#barbaraMoore").hover(
	function(e) { $("#hiddendiv_barbaraMoore").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_barbaraMoore").hide(); }
);
$("#hiddendiv_barbaraMoore").hover(
	function(e) { $("#hiddendiv_barbaraMoore").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_barbaraMoore").hide(); }
);
});

$(document).ready(function() {
$("#aprylMajor").hover(
	function(e) { $("#hiddendiv_aprylMajor").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_aprylMajor").hide(); }
);
$("#hiddendiv_aprylMajor").hover(
	function(e) { $("#hiddendiv_aprylMajor").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_aprylMajor").hide(); }
);
});

$(document).ready(function() {
$("#jimFulghum").hover(
	function(e) { $("#hiddendiv_jimFulghum").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_jimFulghum").hide(); }
);
$("#hiddendiv_jimFulghum").hover(
	function(e) { $("#hiddendiv_jimFulghum").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_jimFulghum").hide(); }
);
});

$(document).ready(function() {
$("#kimHanchette").hover(
	function(e) { $("#hiddendiv_kimHanchette").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_kimHanchette").hide(); }
);
$("#hiddendiv_kimHanchette").hover(
	function(e) { $("#hiddendiv_kimHanchette").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_kimHanchette").hide(); }
);
});

$(document).ready(function() {
$("#derekKiszely").hover(
	function(e) { $("#hiddendiv_derekKiszely").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_derekKiszely").hide(); }
);
$("#hiddendiv_derekKiszely").hover(
	function(e) { $("#hiddendiv_derekKiszely").show().css('top', (e.pageY-100)).css('left', (e.pageX)); }, 
	function() { $("#hiddendiv_derekKiszely").hide(); }
);
});

function loadCandidate(name) {
	var xmlHttp = null;
	response.addHeader("Access-Control-Allow-Origin", "*");
	var url = "http://152.1.13.65/view.php?candidate=" + name;
	xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", url, false);
	xmlHttp.send(null);
	var html = xmlHttp.responseText;
	alert(html);

}

