   var game =
    {
        up1: new Decimal(0),
        up2: new Decimal(0),
        up3: new Decimal(0),
        unlock:1 
    }

    function update(){
        document.getElementById("score").textContent= game.up1
        document.getElementById("up1").textContent= game.up1
        document.getElementById("up2").textContent= game.up2
        setInterval(update, 50)
    }
    function reset(){
        game =
    {
        up1: new Decimal(0),
        up2: new Decimal(0),
        up3: new Decimal(0),
        unlock:1 
    }
    }
    save()
    load()
    setInterval(save, 10000)