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
var posX = 845;
var posY = 180;
var floatable = 1;
var floatIterations = 6;
var movable = 1;
var moveWidth = 135;
var moveHeight = 20;
var moveCursor = "move";
var moveImage = "../../imagenes/menu_leyes.gif";

//------- Submenu Positioning -------
var topDX = -240;
var topDY = -20;
var DX = 0;
var DY = 0;

//------- Font -------
var fontStyle = "bold 10px Verdana";
var fontColor = ["#FF6600","#33ffFF"];
var fontDecoration = ["none","none"];

//------- Items -------
var itemBorderWidth = 0;
var itemBorderStyle = ["none","none"];
var itemBackImage = ["../../imagenes/rugoso2.gif",""];
var itemAlign = "center";
var subMenuAlign = "";
var itemSpacing = 0;
var itemPadding = 1;
var itemCursor = "pointer";
var itemTarget = "_self";

//------- Colors -------
var menuBackColor = "";
var menuBorderColor = "#FF8000";
var itemBackColor = ["#ffffff","#4792E6"];
var itemBorderColor = ["#6655ff","#665500"];

//------- Icons -------
var iconTopWidth = 24;
var iconTopHeight = 24;
var iconWidth = 16;
var iconHeight = 16;
var arrowImageMain = ["",""];
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
var separatorVImage = "../../imagenes/separador.gif";

//------- Visual Effects -------
var transparency = "100";
var transition = 38;
var transDuration = 300;
var transOptions = "";
var shadowLen = 3;
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

    ["-","", "", "", "", "_self", "", "", "", "", "",],
    ["P&Aacute;GINA PRINCIPAL","../../paginas/index.html", "", "", "", "_self", "", "", "", "", "",],
    ["INDICE","../../paginas/laboral.html", "", "", "", "_self", "", "", "", "", "",],
    ["-","", "", "", "", "_self", "", "", "", "", "",],
    ["Trabajo","", "", "", "", "_self", "", "", "", "", "",],
        ["|Cuenta Ajena","", "", "", "", "_self", "", "", "", "", "",],
        ["|Relac. Especiales","", "", "", "", "_self", "", "", "", "", "",],
        ["|Aut&oacute;nomos","", "", "", "", "_self", "", "", "", "", "",],
    ["Salario","", "", "", "", "_self", "", "", "", "", "",],
        ["|Contrato","", "", "", "", "_self", "", "", "", "", "",],
        ["|N&oacute;mina","", "", "", "", "_self", "", "", "", "", "",],
        ["|Salario","", "", "", "", "_self", "", "", "", "", "",],
        ["|Pagas Extra","", "", "", "", "_self", "", "", "", "", "",],
    ["Tiempo","", "", "", "", "_self", "", "", "", "", "",],
        ["|Jornada","../jornada/jornada.html", "", "", "", "_self", "", "", "", "", "",],
        ["|Nocturno, Turnos","../nocturno/nocturno.html", "", "", "", "_self", "", "", "", "", "",],
        ["|Descansos","../descansos/descansos.html", "", "", "", "_self", "", "", "", "", "",],
        ["|Festivos","../festivos/festivos.html", "", "", "", "_self", "", "", "", "", "",],
        ["|Vacaciones","../vacaciones/vacaciones.html", "", "", "", "_self", "", "", "", "", "",],
        ["|Horas Extra","../horas_extra/horas_extra.html", "", "", "", "_self", "", "", "", "", "",],
        ["|Permisos","../permisos/permisos.html", "", "", "", "_self", "", "", "", "", "",],
        ["|Pactos","../pactos/pactos.html", "", "", "", "_self", "", "", "", "", "",],
        ["|Per&iacute;odo de Prueba","../prueba/prueba.html", "", "", "", "_self", "", "", "", "", "",],
        ["|Duración Contrato","../duracion_contrato/duracion_contrato.html", "", "", "", "_self", "", "", "", "", "",],
    ["Finalizaci&oacute;n","", "", "", "", "_self", "", "", "", "", "",],
        ["|Extinci&oacute;n y Despido","../extincion/extincion.html", "", "", "", "_self", "", "", "", "", "",],
        ["|Finiquito","", "", "", "", "_self", "", "", "", "", "",],
        ["|Cierre Patronal","", "", "", "", "_self", "", "", "", "", "",],
        ["|Regulaci&oacute;n","", "", "", "", "_self", "", "", "", "", "",],
        ["|Traslado","", "", "", "", "_self", "", "", "", "", "",],
        ["|Movil. Funcional","", "", "", "", "_self", "", "", "", "", "",],
        ["|Suspensi&oacute;n","", "", "", "", "_self", "", "", "", "", "",],
        ["|Modicicaci&oacute;n","", "", "", "", "_self", "", "", "", "", "",],
    ["Los D&eacute;biles","", "", "", "", "_self", "", "", "", "", "",],
        ["|Extrangeros","", "", "", "", "_self", "", "", "", "", "",],
        ["|Mobbing","", "", "", "", "_self", "", "", "", "", "",],
        ["|Violencia G&eacute;nero","", "", "", "", "_self", "", "", "", "", "",],
    ["Proceso Laboral","", "", "", "", "_self", "", "", "", "", "",],
        ["|Reclamaci&oacute;n","", "", "", "", "_self", "", "", "", "", "",],
        ["|Conciliaci&oacute;n","", "", "", "", "_self", "", "", "", "", "",],
        ["|Plazos Tr&aacute;mites","", "", "", "", "_self", "", "", "", "", "",],
        ["|Juicio Laboral","", "", "", "", "_self", "", "", "", "", "",],
    ["Bajas","", "", "", "", "_self", "", "", "", "", "",],
        ["|Prevenci&oacute;n","", "", "", "", "_self", "", "", "", "", "",],
        ["|Accidentes y EP","", "", "", "", "_self", "", "", "", "", "",],
        ["|Bajas Comunes","", "", "", "", "_self", "", "", "", "", "",],
        ["|Mutuas Trabajo","", "", "", "", "_self", "", "", "", "", "",],
        ["|Maternidad","", "", "", "", "_self", "", "", "", "", "",],
        ["|Minusval&iacute;as","", "", "", "", "_self", "", "", "", "", "",],
    ["Sindicatos","", "", "", "", "_self", "", "", "", "", "",],
        ["|Sindicatos","", "", "", "", "_self", "", "", "", "", "",],
        ["|Delegados","", "", "", "", "_self", "", "", "", "", "",],
        ["|Comit&eacute; Empresa","", "", "", "", "_self", "", "", "", "", "",],
        ["|Elecciones","", "", "", "", "_self", "", "", "", "", "",],
        ["|Huelga","", "", "", "", "_self", "", "", "", "", "",],
    ["Seguridad Social","", "", "", "", "_self", "", "", "", "", "",],
        ["|Jubilaci&oacute;n","", "", "", "", "_self", "", "", "", "", "",],
        ["|Prestaciones Desempleo","../desempleo/desempleo.html", "", "", "", "_self", "", "", "", "", "",],
        ["|Subsidios","", "", "", "", "_self", "", "", "", "", "",],
        ["|Emigrantes","", "", "", "", "_self", "", "", "", "", "",],
    ["???","", "", "", "", "_self", "", "", "", "", "",],
    ["-","", "", "", "", "_self", "", "", "", "", "",],
    ["INICIO","#ini", "", "", "", "_self", "", "", "", "", "",],
    ["MENU FINAL","#fin", "", "", "", "_self", "", "", "", "", "",],
];

apy_init();