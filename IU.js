   var game =
    {
        up:[ new Decimal(0),
            new Decimal(0),
            new Decimal(0),
            new Decimal(0),
            new Decimal(0),
            new Decimal(0),
            new Decimal(0),
            new Decimal(0),
            new Decimal(0),
            new Decimal(0),
            new Decimal(0),
            new Decimal(0),
            new Decimal(0)],
        unlock:1,
        tickpower:new Decimal(1),
        tick:1
    }

    function update(){
        document.getElementById("score").textContent= game.up[0]
        document.getElementById("up1").textContent= game.up[0]
        document.getElementById("up2").textContent= game.up[1]
        document.getElementById("up3").textContent= game.up[2]
        document.getElementById("up4").textContent= game.up[3]
        document.getElementById("up5").textContent= game.up[4]
        document.getElementById("up6").textContent= game.up[5]
        document.getElementById("up7").textContent= game.up[6]
        document.getElementById("up8").textContent= game.up[7]
        document.getElementById("up9").textContent= game.up[8]
        document.getElementById("up10").textContent= game.up[9]
    }
     setInterval(update, 50)
     setInterval(add, 1000/game.tick)
    function reset(){
        game =
    {
        up:[ new Decimal(0),
		new Decimal(0),
		new Decimal(0),
		new Decimal(0),
		new Decimal(0),
		new Decimal(0),
		new Decimal(0),
		new Decimal(0),
		new Decimal(0),
		new Decimal(0),
		new Decimal(0),
		new Decimal(0),
		new Decimal(0)],
        unlock:1,
        tickpower:new Decimal(1),
        tick:1
    }
    }
	function add() {
game.up[0] = game.up[0].add(game.up[1])
game.up[1] = game.up[1].add(game.up[2])
game.up[2] = game.up[2].add(game.up[3])
game.up[3] = game.up[3].add(game.up[4])
game.up[4] = game.up[4].add(game.up[5])
game.up[5] = game.up[5].add(game.up[6])
game.up[6] = game.up[6].add(game.up[7])
game.up[7] = game.up[7].add(game.up[8])
game.up[8] = game.up[8].add(game.up[9])

    }
	
