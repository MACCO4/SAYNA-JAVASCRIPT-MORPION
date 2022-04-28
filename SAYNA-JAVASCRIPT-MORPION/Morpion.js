(function() {

    // Récupération des cases à clicker
    const items = [...document.getElementsByClassName('grid-item')];
    let turn = document.getElementsByClassName('turn');
    let score1 = document.getElementsByClassName('you-score');
    let score2 = document.getElementsByClassName('cpu-score');
    let scoreNul = document.getElementsByClassName('matchNul');

    // Manipulation state
    let state = {
        joueurEnCours : 1,
        scoreJ1 : 0,
        scoreJ2 : 0,
        matchNul : 0,
        item1 : 0,
        item2 : 0,
        item3 : 0,
        item4 : 0,
        item5 : 0,
        item6 : 0,
        item7 : 0,
        item8 : 0,
        item9 : 0,
    };

    // Implémentation et vérification des différents cas de figures
    const resetState = () => {
        joueurEnCours = 1;
        state.item1 = 0;
        state.item2 = 0;
        state.item3 = 0;
        state.item4 = 0;
        state.item5 = 0;
        state.item6 = 0;
        state.item7 = 0;
        state.item8 = 0;
        state.item9 = 0;
    };

    let verifierWin = () => {
        if(
            (state.item1 == state.item2 && state.item2 == state.item3 && state.item1 > 0) ||
            (state.item4 == state.item5 && state.item5 == state.item6 && state.item4 > 0) ||
            (state.item7 == state.item8 && state.item8 == state.item9 && state.item7 > 0) ||
            (state.item1 == state.item4 && state.item4 == state.item7 && state.item1 > 0) ||
            (state.item2 == state.item5 && state.item5 == state.item8 && state.item2 > 0) ||
            (state.item3 == state.item6 && state.item6 == state.item9 && state.item3 > 0) ||
            (state.item1 == state.item5 && state.item5 == state.item9 && state.item1 > 0) ||
            (state.item7 == state.item5 && state.item5 == state.item3 && state.item7 > 0) || 
        ){
            return true;
        }else if (
            state.item1 != 0 &&
            state.item2 != 0 &&
            state.item3 != 0 &&
            state.item4 != 0 &&
            state.item5 != 0 &&
            state.item6 != 0 &&
            state.item7 != 0 &&
            state.item8 != 0 &&
            state.item9 != 0 
        ){
            return null;
        }else {
            return false;
        }
    };

    function choiseCase(id) {
        let iditems = e.target.id;
        if(state[iditems] != 0)return;
        state[iditems] = state.joueurEnCours;
        let isWin = verifierWin();
        console.log(e);
    };

    if(isWin === true){
        alert('Win!' + state.joueurEnCours);
        if(state.joueurEnCours === 1){
            state.scoreJ1++;
            score1.textContent = state.scoreJ1;
        }else {
            state.scoreJ2++;
            score2.textContent = state.scoreJ2;
        }
        resetState();
        
        // Vide le contenu de toute les cases
         function rest() {
             for (var i = 0; i < items.length; i++) {
                 console.log(items[i]);
                 items[i].textContent = ''
             }
         }
       
    }else if (isWin === null){
        alert('Defeat!');
        state.matchNul++;
        scoreNul.textContent = state.matchNul;
        resetState();

        // Vide le contenu de toute les cases
        function rest() {
             for (var i = 0; i < items.length; i++) {
                 console.log(items[i]);
                 items[i].textContent = ''
             }
         }
    }else if (isWin === false){
        if(state.joueurEnCours === 1) {
            e.target.textContent = 'X';
            state.joueurEnCours = 2;
            turn.textContent = '1';
        }
    }

    items.forEach((i)=>{
        i.addEventListener('onclick', choiseCase(id));
    });
})();