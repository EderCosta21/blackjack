export class gerarCartas {

    public cartas: any = [
        'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Q', 'J', 'K',
        'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Q', 'J', 'K',
        'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Q', 'J', 'K',
        'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Q', 'J', 'K'
    ];
    public naipes: any [
        
    ]

    sorteioCartasPessoa() {
  
        let currentIndex = this.cartas.length
        let randon1 = Math.floor(Math.random() * currentIndex)+1;
        let randon2 = Math.floor(Math.random() * currentIndex) + 1;
       
        let variavel1 = this.cartas[randon1]
        let variavel2 = this.cartas[randon2]
        let v = [variavel1,variavel2]
   
        return v 
    }

    sorteioCartasMaquina() {
       
        let currentIndex = this.cartas.length
        let randon1 = Math.floor(Math.random() * currentIndex) +1 ;
        let randon2 = Math.floor(Math.random() * currentIndex) + 1;
       
        let variavel1 = this.cartas[randon1]
        let variavel2 = this.cartas[randon2]
        let v = [variavel1,variavel2]
   
        return v 
    }

  
}