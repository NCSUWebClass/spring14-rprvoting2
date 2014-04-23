$(document).ready(
		function() {
			$(".candidate_county_commission_item").hide();
			$(".candidate_county_commission tr:first-child").show();
			$(".candidate_table tr.candidate_county_commission").click(
					function() {
						$(this).nextAll("tr.candidate_county_commission_item")
								.fadeToggle("fast");
					});
		});
$(document).ready(function() {
	$(".candidate_wake_da_item").hide();
	$(".candidate_wake_da tr:first-child").show();
	$(".candidate_table tr.candidate_wake_da").click(function() {
		$(this).nextAll("tr.candidate_wake_da_item").fadeToggle();
	});
});
$(document).ready(function() {
	$(".candidate_clerk_of_court_item").hide();
	$(".candidate_clerk_of_court tr:first-child").show();
	$(".candidate_table tr.candidate_clerk_of_court").click(function() {
		$(this).nextAll("tr.candidate_clerk_of_court_item").fadeToggle();
	});
});
$(document).ready(function() {
	$(".candidate_nc_senate_15_item").hide();
	$(".candidate_nc_senate_15 tr:first-child").show();
	$(".candidate_table tr.candidate_nc_senate_15").click(function() {
		$(this).nextAll("tr.candidate_nc_senate_15_item").fadeToggle();
	});
});
$(document).ready(function() {
	$(".candidate_nc_house_49_item").hide();
	$(".candidate_nc_house_49 tr:first-child").show();
	$(".candidate_table tr.candidate_nc_house_49").click(function() {
		$(this).nextAll("tr.candidate_nc_house_49_item").fadeToggle();
	});
});
