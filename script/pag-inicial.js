//Exibir página inicial;
const linkInicio = document.getElementById("linkInicio");
const outSaida = document.getElementById("outSaida")

    var pagInicio = document.createElement("main");
    pagInicio.className = "cx-mn-inicio";
    //

    var welcome = document.createElement("div");
    welcome.className = ("welcome")

    var imgWelcome = document.createElement("img");
    imgWelcome.src = "../imagens/imgWelcome.png";
    imgWelcome.className = "imgWelcome";
    //
    //
    var tituloTexto = document.createElement("div");
    
    var tituloWelcome = document.createElement("h1");
    tituloWelcome.innerHTML = "Bem-vindo ao Nossa Casa - seu destino de sabores incríveis para todas as suas refeições!";

    var textoWelcome = document.createElement("p");
    textoWelcome.innerHTML = "Explore nossa deliciosa seleção de lanches suculentos e refeições satisfatórias, feitas com ingredientes frescos e preparadas com paixão. Do café da manhã ao jantar, oferecemos uma variedade de opções para todos os paladares.";
    tituloTexto.appendChild(tituloWelcome);
    tituloTexto.appendChild(textoWelcome);

    welcome.appendChild(imgWelcome);
    welcome.appendChild(tituloTexto);
    //
    var divDestaque = document.createElement("div");
    divDestaque.className = "destaque-site";

    var destaques = document.createElement("div");
    destaques.className = "linkDestaques";
    

    var tituloDestaque = document.createElement("h2");
    tituloDestaque.innerHTML = "Destaques do nosso site:";

    var linkMenu = document.createElement("p");
    linkMenu.href = //CHAMARFUNCAOCARDAPIO;
    linkMenu.innerHTML = "Menu Irresistível";
    linkMenu.className = "destaque-revela a1";

    var linkEspecial = document.createElement("p");
    linkEspecial.innerHTML = "Especiais do Dia";
    linkEspecial.className = "destaque-revela a2";

    var linkFacilidade = document.createElement("p");
    linkFacilidade.innerHTML = "Facilidade de Pedido";
    linkFacilidade.className = "destaque-revela a3";

    var linkEntrega = document.createElement("p");
    linkEntrega.innerHTML = "Entrega Conveniente";
    linkEntrega.className = "destaque-revela a4";

    // destaques.appendChild(tituloDestaque);
    destaques.appendChild(linkMenu);
    destaques.appendChild(linkEspecial);
    destaques.appendChild(linkFacilidade);
    destaques.appendChild(linkEntrega);
    //
    divDestaque.appendChild(tituloDestaque)
    divDestaque.appendChild(destaques);
    //
    pagInicio.appendChild(welcome);
    pagInicio.appendChild(divDestaque);

    outSaida.appendChild(pagInicio);

linkInicio.addEventListener("click", exibirPagInicial);

function exibirPagInicial (titulo){
    outSaida.innerHTML = "";

    var pagInicio = document.createElement("main");
    pagInicio.className = "cx-mn-inicio";
    //

    var welcome = document.createElement("div");
    welcome.className = ("welcome")

    var imgWelcome = document.createElement("img");
    imgWelcome.src = "../imagens/imgWelcome.png";
    imgWelcome.className = "imgWelcome";
    //
    //
    var tituloTexto = document.createElement("div");
    
    var tituloWelcome = document.createElement("h1");
    tituloWelcome.innerHTML = "Bem-vindo ao Nossa Casa - seu destino de sabores incríveis para todas as suas refeições!";

    var textoWelcome = document.createElement("p");
    textoWelcome.innerHTML = "Explore nossa deliciosa seleção de lanches suculentos e refeições satisfatórias, feitas com ingredientes frescos e preparadas com paixão. Do café da manhã ao jantar, oferecemos uma variedade de opções para todos os paladares.";
    tituloTexto.appendChild(tituloWelcome);
    tituloTexto.appendChild(textoWelcome);

    welcome.appendChild(imgWelcome);
    welcome.appendChild(tituloTexto);
    //
    var divDestaque = document.createElement("div");
    divDestaque.className = "destaque-site";

    var destaques = document.createElement("div");
    destaques.className = "linkDestaques";
    

    var tituloDestaque = document.createElement("h2");
    tituloDestaque.innerHTML = "Destaques do nosso site:";

    var linkMenu = document.createElement("p");
    linkMenu.href = //CHAMARFUNCAOCARDAPIO;
    linkMenu.innerHTML = "Menu Irresistível";
    linkMenu.className = "destaque-revela a1";

    var linkEspecial = document.createElement("p");
    linkEspecial.innerHTML = "Especiais do Dia";
    linkEspecial.className = "destaque-revela a2";

    var linkFacilidade = document.createElement("p");
    linkFacilidade.innerHTML = "Facilidade de Pedido";
    linkFacilidade.className = "destaque-revela a3";

    var linkEntrega = document.createElement("p");
    linkEntrega.innerHTML = "Entrega Conveniente";
    linkEntrega.className = "destaque-revela a4";

    // destaques.appendChild(tituloDestaque);
    destaques.appendChild(linkMenu);
    destaques.appendChild(linkEspecial);
    destaques.appendChild(linkFacilidade);
    destaques.appendChild(linkEntrega);
    //
    divDestaque.appendChild(tituloDestaque)
    divDestaque.appendChild(destaques);
    //
    pagInicio.appendChild(welcome);
    pagInicio.appendChild(divDestaque);

    outSaida.appendChild(pagInicio);
}