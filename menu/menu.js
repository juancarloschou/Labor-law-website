/*
   Apycom DHTML Menu data file
   Created by Apycom DHTML Tuner
   http://dhtml-menu.com
*/


// --- DHTML Tuner style names ---
var itemStylesNames=[];
var menuStylesNames=[];
// --- End of DHTML Tuner style names ---

//------- Common -------
var isHorizontal = 0;
var saveNavigationPath = 1;
var showByClick = 0;
var bottomUp = 0;
var orientation = 0;
var columnPerSubmenu = "";
var pressedItem = -2;
var blankImage = "blank image filename";
var pathPrefix = "";
var statusString = "link";

//------- Menu -------
var menuWidth = "135";
var menuBorderWidth = 2;
var menuBorderStyle = "groove";
var menuBackImage = "";

//------- Menu Positioning -------
var absolutePos = 1;
var posX = 7;
var posY = 180;
var floatable = 1;
var floatIterations = 6;
var movable = 1;
var moveWidth = 15;
var moveHeight = 25;
var moveCursor = "move";
var moveImage = "../imagenes/menu_ppal.gif";

//------- Submenu Positioning -------
var topDX = 0;
var topDY = 0;
var DX = -5;
var DY = 0;

//------- Font -------
var fontStyle = "bold 10px Verdana";
var fontColor = ["#004080","#ff3300"];
var fontDecoration = ["none","none"];

//------- Items -------
var itemBorderWidth = "";
var itemBorderStyle = ["none","none"];
var itemBackImage = ["../imagenes/rugoso.gif",""];
var itemAlign = "center";
var subMenuAlign = "";
var itemSpacing = 0;
var itemPadding = 0;
var itemCursor = "pointer";
var itemTarget = "_self";

//------- Colors -------
var menuBackColor = "";
var menuBorderColor = "";
var itemBackColor = ["#FFFFFF","#FF8000"];
var itemBorderColor = ["#6655ff","#665500"];

//------- Icons -------
var iconTopWidth = 15;
var iconTopHeight = 17;
var iconWidth = 15;
var iconHeight = 15;
var arrowImageMain = ["../imagenes/flecha.gif","../imagenes/flecha2.gif"];
var arrowImageSub = ["",""];
var arrowWidth = 9;
var arrowHeight = 9;

//------- Separators -------
var separatorWidth = "0";
var separatorHeight = "0";
var separatorAlignment = "center";
var separatorImage = "";
var separatorVWidth = "135";
var separatorVHeight = "2";
var separatorVImage = "../imagenes/separador2.gif";

//------- Visual Effects -------
var transparency = "100";
var transition = 38;
var transDuration = 300;
var transOptions = "";
var shadowLen = 5;
var shadowTop = 1;
var shadowColor = "#777777";

//------- CSS Mode -------
var cssStyle = 0;
var cssClass = "";

//------- MAC OS Additional -------
var macIEoffX = 10;
var macIEoffY = 15;
var macIEtopDX = 0;
var macIEtopDY = 2;
var macIEDX = -3;
var macIEDY = 0;


var menuItems = [

    ["-","", "", "", "", "", "", "", "", "", "",],
    ["Inicio","index.html", "../icos/main_home.gif", "", "", "", "", "", "", "", "",],
    ["-","", "", "", "", "", "", "", "", "", "",],
    ["Presentaci&oacute;n","presentacion.html", "../icos/server.gif", "", "Necesita una Pagina Web?. Entre en Nuestro Taller Web", "", "", "", "", "", "",],
    ["Qui&eacute;nes Somos","", "../icos/foros.gif", "", "Hable con otras Personas sobre su Situacion", "", "", "", "", "", "",],
    ["Qu&eacute; Ofrecemos","", "../icos/servicios.ico", "", "", "", "", "", "", "", "",],
    ["-","", "", "", "", "", "", "", "", "", "",],
    ["Noticias","noticias.html", "../icos/news.gif", "", "Las Ultimas Noticias de Actualidad Laboral", "", "", "", "", "", "",],
    ["Laboral","laboral.html", "../icos/laboral.ico", "", "", "", "", "", "", "", "",],
    ["Legislacion","leyes.html", "../icos/clipboard.gif", "", "Todo El Derecho Laboral a su Alcance", "", "", "", "", "", "",],
    ["-","", "", "", "", "", "", "", "", "", "",],
    ["Contacte ","", "../icos/main_email.gif", "", "Siempre Dispuestos a Ayudarle", "", "", "", "", "", "",],
        ["|Por e-Mail","", "", "", "", "", "", "", "", "", "",],
        ["|Por Correo Postal","", "", "", "", "", "", "", "", "", "",],
        ["|Por Telefono","", "", "", "", "", "", "", "", "", "",],
        ["|Por Fax","", "", "", "", "", "", "", "", "", "",],
    ["Consultenos","", "../icos/messages.gif", "", "Su Situacion es Importante para Nosotros. Le Ofreceremos la Mejor Ayuda lo antes Posible", "", "", "", "", "", "",],
    ["Demanda Formal","", "../icos/contract.gif", "", "Usted no esta Solo. Realice su Demanda Ahora y Cuente con Nuestros Servicios en Todo Momento", "", "", "", "", "", "",],
    ["-","", "", "", "", "", "", "", "", "", "",],
    ["Enlaces Utiles","", "../icos/preferences.gif", "", "Links a Webs de Ayuda al Trabajador", "", "", "", "", "", "",],
        ["|Bolsa de Trabajo","", "", "", "", "", "", "", "", "", "",],
        ["|Empleo Publico","", "", "", "", "", "", "", "", "", "",],
        ["|E.T.T.","", "", "", "", "", "", "", "", "", "",],
        ["|Servicio de Colocacion","", "", "", "", "", "", "", "", "", "",],
        ["|Sindicatos","", "", "", "", "", "", "", "", "", "",],
        ["|Administracion","", "", "", "", "", "", "", "", "", "",],
    ["Descargas","", "../icos/replace2.gif", "", "Pagina de Descargas de Libros y Estatutos", "", "", "", "", "", "",],
        ["|Libros FTP","", "", "", "", "", "", "", "", "", "",],
        ["|Programas Utiles","", "", "", "", "", "", "", "", "", "",],
    ["Herramientas","", "../icos/config.ico", "", "Utilidades Varias de Gran Ayuda", "", "", "", "", "", "",],
    ["Agregar ","", "../icos/main_fav.gif", "", "Acceda a esta Pagina con  un solo Click", "", "", "", "", "", "",],
        ["|A Favoritos","", "", "", "", "", "", "", "", "", "",],
        ["|Como Pagina de Inicio","", "", "", "", "", "", "", "", "", "",],
];

apy_init();