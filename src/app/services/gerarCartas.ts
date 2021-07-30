export class gerarCartas {

    // public cartas: any = [
    //     'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Q', 'J', 'K',
    //     'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Q', 'J', 'K',
    //     'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Q', 'J', 'K',
    //     'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Q', 'J', 'K'
    // ];

    public cartas: any = [
        ['A', '&clubs'], ['2', '&clubs'], ['3', '&clubs'], ['4', '&clubs'], ['5', '&clubs'], ['6', '&clubs'], ['7', '&clubs'], ['8', '&clubs'], ['9', '&clubs'], ['10', '&clubs'], ['Q', '&clubs'], ['J', '&clubs'], ['K', '&clubs'],
        ['A', '&hearts'], ['2', '&hearts'], ['3', '&hearts'], ['4', '&hearts'], ['5', '&hearts'], ['6', '&hearts'], ['7', '&hearts'], ['8', '&hearts'], ['9', '&hearts'], ['10', '&hearts'], ['Q', '&hearts'], ['J', '&hearts'], ['K', '&hearts'],
        ['A', '&spades'], ['2', '&spades'], ['3', '&spades'], ['4', '&spades'], ['5', '&spades'], ['6', '&spades'], ['7', '&spades'], ['8', '&spades'], ['9', '&spades'], ['10', '&spades'], ['Q', '&spades'], ['J', '&spades'], ['K', '&spades'],
        ['A', '&diams'], ['2', '&diams'], ['3', '&diams'], ['4', '&diams'], ['5', '&diams'], ['6', '&diams'], ['7', '&diams'], ['8', '&diams'], ['9', '&diams'], ['10', '&diams'], ['Q', '&diams'], ['J', '&diams'], ['K', '&diams'],


    ];

    
    sorteioCartas() {
    
        let currentIndex = this.cartas.length
        let randon1 = Math.floor(Math.random() * currentIndex);
        let variavel1 = this.cartas[randon1];
         this.cartas.splice(randon1,1); 
        return variavel1
    }

  

}