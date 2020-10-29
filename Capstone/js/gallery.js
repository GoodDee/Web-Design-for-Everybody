function update(currentpic){
	
	pic_list = document.getElementsByClassName("GCL_pic");
				   
	current_id = currentpic.id;
	current_alt = currentpic.alt;
	current_src = currentpic.src;
	
	for (var i = 0; i < pic_list.length; i++){
		if (pic_list[i].id == currentpic.id){
			pic_list[i].style.border = "3px solid blue";
			
			y = document.getElementById("profile_pic");
			y.src = current_src;
			y.alt = current_alt;
		}
		else{
			pic_list[i].style.border = "none";
		}
	}
	
	title_list = ["GCL ROUND 1", "GCL ROUND 2", "GCL ROUND 3", "GCL ROUND 4"];
	rule_list = ["Bonus pts for Spider Mansion Coins but do not count as normal Coins; Finish #8 to advance to Round 2!",
				 "Bonus pts for Bear Jellies, x10 pts for Rainbow Bear Jellies; Finish #6 to advance to Round 3!",
				 "+50,000 pts for destroying obstacles with the Cookie's Skill; Finish #3 to advance to Round 4!",
				 "Darkness surrounds you... + 24,420 pts for Jellies; Finish #2 to advance to Round 5!"];
	advice_list = ["Collect all Coins in Spider Mansion. Don't miss a single one!",
				   "A single Bear Jelly can lead to victory or defeat.",
				   "Pave your own path. Destroy obstacles that stand in your way!",
				   "Stay calm and endure the raging blizzard."];
	scores = ["490,908,690", "578,904,166", "388,352,185", "263,283,099"];
	ranks = ["#1/11", "#2/16", "#2/12", "#5/12"];
	
	content_list = document.getElementsByClassName("tab_data");
	num = current_id[current_id.length-1];
	
	content_list[0].innerHTML = title_list[num-1];
	content_list[1].innerHTML = rule_list[num-1];
	content_list[2].innerHTML = advice_list[num-1];
	content_list[3].innerHTML = scores[num-1];
	content_list[4].innerHTML = ranks[num-1];
}