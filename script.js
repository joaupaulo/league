let cont = document.querySelector(".sea");


function gerar (id , num ) {
	fetch(`http://api.football-data.org/v2/players/${id}/matches` , {
	"headers":  {
		"X-Auth-Token":"dc27d36b147a479bae295e494c925263"

	}
}).then( r => r.json()).then(r => criar(r,num));

}


function jogadores() {
	
	let primeiro = Math.round(Math.random() * 50)
	let segundo  = Math.round(Math.random() * 50)
	
	gerar (primeiro,1);
	gerar (segundo,2);
	
}



function criar(r,num) {

	let play = cont.querySelector(`.box${num}`)
	let name = play.querySelector("h1");
	name.textContent=r.player.name


		
}

jogadores()
