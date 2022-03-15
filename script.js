var itens ={
    carne: 400,
    cerveja: 1200,
    refriAgua: 1000,
    hora6: function(){
        this.carne = 650, this.cerveja = 2000, this.refriAgua = 1500;
    }
}    

function calcular(){
    let adulto = document.getElementsByClassName("inputs")[0].value;
    let criancas = document.getElementsByClassName("inputs")[1].value;
    let duracao = document.getElementsByClassName("inputs")[2].value;


    let info = document.getElementById("info");
    info.style.display="block";

    let qtdCarne, qtdCerveja, qtdRefriAgua;

    if(duracao >= 6){
        itens.hora6();

        qtdCarne = (adulto*itens.carne)+(criancas*itens.carne)/2;
        qtdCerveja = adulto*itens.cerveja;
        qtdRefriAgua = (adulto*itens.refriAgua)+(criancas*itens.carne)/2;
    }
    else{
        qtdCarne = (adulto*itens.carne)+(criancas*itens.carne)/2;
        qtdCerveja = adulto*itens.cerveja;
        qtdRefriAgua = (adulto*itens.refriAgua)+(criancas*itens.carne)/2;
    }   

    qtdCarne = qtdCarne/1000;
    qtdCerveja = Math.ceil(qtdCerveja/350);
    qtdRefriAgua = Math.ceil(qtdRefriAgua/2000);

    info.innerHTML = "<p>"+qtdCarne+"kg de carne"+"</p>" +
                     "<p>"+qtdCerveja+" latas de Cerveja de 350ml "+"</p>"+
                     "<p>"+qtdRefriAgua+" garrafas de 2L de refrigerante e água "+"</p>";
}