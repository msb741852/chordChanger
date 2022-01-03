// Standard
const C_key = ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'];
const D_key = ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#dim'];
const E_key = ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#dim'];
const F_key = ['F', 'Gm', 'Am', 'Bb', 'C', 'Dm', 'Edim'];
const G_key = ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#dim'];
const A_key = ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#dim'];
const B_key = ['B', 'C#m', 'D#m', 'E', 'F#', 'G#m', 'A#dim'];



function before_chord() {

    let before_select = document.querySelector('#before_select');
    let before_key = before_select.options[before_select.selectedIndex].value;
    let selected_before_key ;

    switch(before_key) {
        case "C" :
            selected_before_key = C_key;
            break;
        case "D" :
            selected_before_key = D_key;
            break;
        case "E" :
            selected_before_key = E_key;
            break;
        case "F" :
            selected_before_key = F_key;
            break;
        case "G" :
            selected_before_key = G_key;
            break;
        case "A" :
            selected_before_key = A_key;
            break;
        case "B" :
            selected_before_key = B_key;
            break;
    }

    for(let i=1; i<8; i++) {
        let before_input = document.querySelector('#before'+i);
        before_input.value = selected_before_key[i-1];
    }
}

function after_chord() {

    let after_select = document.querySelector('#after_select');
    let after_key = after_select.options[after_select.selectedIndex].value;
    let selected_after_key;

    switch(after_key) {
        case "C" :
            selected_after_key = C_key;
            break;
        case "D" :
            selected_after_key = D_key;
            break;
        case "E" :
            selected_after_key = E_key;
            break;
        case "F" :
            selected_after_key = F_key;
            break;
        case "G" :
            selected_after_key = G_key;
            break;
        case "A" :
            selected_after_key = A_key;
            break;
        case "B" :
            selected_after_key = B_key;
            break;
    }

    for(let i=1; i<8; i++) {
        let after_input = document.querySelector('#after'+i);
        after_input.value = selected_after_key[i-1];
    }
}