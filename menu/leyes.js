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
var posX = 843;
var posY = 5;
var floatable = 1;
var floatIterations = 6;
var movable = 1;
var moveWidth = 135;
var moveHeight = 20;
var moveCursor = "move";
var moveImage = "../imagenes/menu_leyes.gif";

//------- Submenu Positioning -------
var topDX = 0;
var topDY = 0;
var DX = -5;
var DY = 0;

//------- Font -------
var fontStyle = "bold 10px Verdana";
var fontColor = ["#FF6600","#33ffFF"];
var fontDecoration = ["none","none"];

//------- Items -------
var itemBorderWidth = 0;
var itemBorderStyle = ["none","none"];
var itemBackImage = ["../imagenes/rugoso2.gif",""];
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
var separatorVImage = "../imagenes/separador.gif";

//------- Visual Effects -------
var transparency = "100";
var transition = 0;
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

    ["-","", "", "", "", "", "", "", "", "", "",],
    ["P&Aacute;GINA PRINCIPAL","../paginas/index.html", "", "", "", "", "", "", "", "", "",],
    ["LISTA DE LEYES","../paginas/leyes.html", "", "", "", "_self", "", "", "", "", "",],
    ["-","", "", "", "", "_self", "", "", "", "", "",],
    ["Constituci&oacute;n","constitucion.html", "", "", "", "_self", "", "", "", "", "",],
    ["C&oacute;digo Civil","codigo_civil.html", "", "", "", "_self", "", "", "", "", "",],
    ["-","", "", "", "", "_", "", "", "", "", "",],
    ["Estatuto Trabajadores","rdl_1_1995_estatuto_trabajadores.html", "", "", "", "_self", "", "", "", "", "",],
    ["Procedimiento Laboral","rdl_2_1995_procedimiento_laboral.html", "", "", "", "_self", "", "", "", "", "",],
    ["Justicia Gratis","l_1_1996_justicia_gratis.html", "", "", "", "_self", "", "", "", "", "",],
    ["-","", "", "", "", "", "", "", "", "", "",],
    ["Inspecci&oacute;n Trabajo","l_42_1997_inspeccion_trabajo.html", "", "", "", "_self", "", "", "", "", "",],
    ["Infracciones Sanciones","rdl_5_2000_infracciones_sanciones.html", "", "", "", "_self", "", "", "", "", "",],
    ["-","", "", "", "", "", "", "", "", "", "",],
    ["Libertad Sindical","lo_11_1985_libertad_sindical.html", "", "", "", "_self", "", "", "", "", "",],
    ["Elecciones Sindicales","rd_1844_1994_eleccion_representantes.html", "", "", "", "_self", "", "", "", "", "",],
    ["Relaciones Trabajo","rdl_17_1977_relaciones_trabajo.html", "", "", "", "_self", "", "", "", "", "",],
    ["Prevenci&oacute;n Riesgos","l_31_1995_prevencion_riesgos.html", "", "", "", "_self", "", "", "", "", "",],
    ["-","", "", "", "", "", "", "", "", "", "",],
    ["Enfermedad Profesional","rd_1995_1978_enfermedades_profesionales.html", "", "", "", "_self", "", "", "", "", "",],
    ["Indenmizaci&oacute;n Lesiones","o_1040_2005_indenmizaciones_lesiones.html", "", "", "", "_self", "", "", "", "", "",],
    ["Colaboraci&oacute;n Mutuas","rd_1993_1995_colaboracion_mutuas.html", "", "", "", "_self", "", "", "", "", "",],
    ["-","", "", "", "", "", "", "", "", "", "",],
    ["Seguridad Social","rdl_1_1994_seguridad_social.html", "", "", "", "_self", "", "", "", "", "",],
    ["Recaudaci&oacute;n SS","rd_1415_2004_recaudacion_ss.html", "", "", "", "_self", "", "", "", "", "",],
    ["Resoluci&oacute;n Tesorer&iacute;a SS","r_2004_tesoreria_SS.html", "", "", "", "_self", "", "", "", "", "",],
    ["Protecci&oacute;n Desempleo","rd_625_1985_proteccion_desempleo.html", "", "", "", "_self", "", "", "", "", "",],
    ["-","", "", "", "", "", "", "", "", "", "",],
    ["Salario M&iacute;nimo 2004","rdl_3_2004_salario_minimo_iprem.html", "", "", "", "_self", "", "", "", "", "",],
    ["Fondo Garant&iacute;a Salarial","rd_505_1985_fondo_salarial.html", "", "", "", "_self", "", "", "", "", "",],
    ["-","", "", "", "", "_self", "", "", "", "", "",],
    ["Informaci&oacute;n Contrato","rd_1659_1998_informacion_contrato.html", "", "", "", "_self", "", "", "", "", "",],
    ["Contratos Temporales","rd_2720_1998_contratos_temporales.html", "", "", "", "_self", "", "", "", "", "",],
    ["Mercado Trabajo 2001","l_12_2001_mercado_trabajo.html", "", "", "", "_self", "", "", "", "", "",],
    ["-","", "", "", "", "", "", "", "", "", "",],
    ["Jornadas especiales","D:/emule/Incoming/Asesoria Laboral WEB/Web Gerardo/leyes/rd_1561_1995_jornadas_especiales.html", "", "", "", "", "", "", "", "", "",],
    ["Conciliaci&oacute;n Familiar","l_39_1999_conciliacion_familiar.html", "", "", "", "_self", "", "", "", "", "",],
    ["-","", "", "", "", "_self", "", "", "", "", "",],
    ["Ley ETT","l_14_1994_ett.html", "", "", "", "_self", "", "", "", "", "",],
    ["Desarrollo Ley ETT","rd_4_1995_ett.html", "", "", "", "_self", "", "", "", "", "",],
    ["-","", "", "", "", "_self", "", "", "", "", "",],
    ["Sociedades Laborales","l_4_1997_sociedades_laborales.html", "", "", "", "_self", "", "", "", "", "",],
    ["-","", "", "", "", "", "", "", "", "", "",],
    ["INICIO DOCUMENTO","#ini", "", "", "", "_self", "", "", "", "", "",],
    ["MENU DEL FINAL","#fin", "", "", "", "_self", "", "", "", "", "",],
];

apy_init();