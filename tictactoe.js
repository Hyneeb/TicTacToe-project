const cells = document.querySelectorAll(".square")
let open_positions = ['', '', '',
                  '', '', '',
                  '', '', '']



let game_start = false
let player = "X"

for (const i of cells){
    i.addEventListener("click", () => make_move_player(i))
}
function game_is_over(lst){
    if ('' in open_positions){
        return false
    }
    return true
}
function start_1player(lst){
    return true
}

function start_2player(){

}

function make_move_player(square){
    // true refers to x
    // false refers to o
    if (game_start){
        return
    }
    const cell_index = square.getAttribute("cellindex");
    if (open_positions[cell_index] != ""){
        return;
    }
    open_positions[cell_index] = player
    square.innerHTML = player
    player = (player == "X")? 'O': "X"
}

function make_move_bot(){

}

function announce_winner(){

}

function clear_game(){
    for (let i of cells){
        i.innerHTML=''
    }
    player = 'X'
    open_positions = ['', '', '',
    '', '', '',
    '', '', '']
}