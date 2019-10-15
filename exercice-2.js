
    let num = prompt("Choisir un chiffre",0)


    let nbr1 = 0;
    let nbr2 = 1;

    for (let i = 0; i < num; i++) {
        depNumber =nbr1;
        nbr1 = nbr2;
        nbr2=nbr1+depNumber;
        document.write(" <br> "+nbr2);
    }

    
