    nbr1 = 0;
    nbr2 = 1;

    for (let i = 0; i < 18; i++) {
        depNumber =nbr1;
        nbr1 = nbr2;
        nbr2=nbr1+depNumber;
        console.log(nbr2);
    }