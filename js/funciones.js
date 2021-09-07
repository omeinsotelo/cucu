$(document).ready(function(){

	/* CATEGORIAS ============================================================= */
	/* Ver categorías */
	
	$("#boton-categorias").click(function(){
		if($("#check-categorias").is(':checked')){
			$("#open-ico").css("top", "0");
			$("#close-ico").css("top", "40px");
			$("#lightBox-Back").removeClass("show-lightBox-Back");
			$("body").removeClass("fixed-body");

		}else{
			$("#open-ico").css("top", "40px");
			$("#close-ico").css("top", "0");
			$("#lightBox-Back").addClass("show-lightBox-Back");
			$("body").addClass("fixed-body");

		}
	});

	/* Cerrar categorías*/
	$("#close-categorias-movil").click(function(){
			$("#open-ico").css("top", "0");
			$("#close-ico").css("top", "40px");
			$("#lightBox-Back").removeClass("show-lightBox-Back");
			$("body").removeClass("fixed-body");
	});
	
	
	
	$(".item-categoria").click(function(){
		var anchoventana = $( window ).width();
		if(anchoventana > 650){
			$("#subcategorias-nav-content").empty();
			var categorias = $(this).children("section").clone();
			$("#subcategorias-nav-content").append(categorias);
			$(categorias).css("display", "flex");
		}else{
			$(this).children(".wrap-subcategorias-nav").slideToggle();	
		}
		
	});

	/* --------------------------------------------------------------- */
	/* --------------------------------------------------------------- */
	/* --------------------------------------------------------------- */
	/* --------------------------------------------------------------- */



	/* CUENTA ============================================================= */
	/* Ver cuenta */
	$("#cuenta-header").click(function(){
		
		if($("#check-cuenta").is(':checked')){
			$("#lightBox-Back").removeClass("show-lightBox-Back-2");
			$("body").removeClass("fixed-body");
		}else{
			$("#lightBox-Back").addClass("show-lightBox-Back-2");
			$("body").addClass("fixed-body");	
		}
	});

	$("#close-cuenta-movil").click(function(){
		$("#lightBox-Back").removeClass("show-lightBox-Back-2");
		$("body").removeClass("fixed-body");	
	});
	/* --------------------------------------------------------------- */
	/* --------------------------------------------------------------- */
	/* --------------------------------------------------------------- */



	/* TAB CATEGORIAS ============================================================= */
	$("#nav-tabContent").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		adaptiveHeight: true,
		autoplay: false,
		arrows: false,
		draggable:false,
		fade:true,
	});



	$(".enlaceCategorias").click(function(){
		$(".enlaceCategorias").removeClass("enlaceCategoriasActivo");
		$(this).addClass("enlaceCategoriasActivo");
		var posicion = $(this).index();
		$("#nav-tabContent").slick('slickGoTo', posicion);
	});
	/* --------------------------------------------------------------- */
	/* --------------------------------------------------------------- */
	/* --------------------------------------------------------------- */


	/* CARRUSELES ============================================================ */
	$("#carrusel-juguetes").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		infinite: true,
		prevArrow:'#flecha-left-carrusel-juguetes',
		nextArrow:'#flecha-right-carrusel-juguetes',
		responsive: [
			{
			breakpoint: 960,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				}
			},
			{
			breakpoint: 750,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
			breakpoint: 550,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});

	$("#carrusel-todos").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		infinite: true,
		prevArrow:'#flecha-left-carrusel-todos',
		nextArrow:'#flecha-right-carrusel-todos',
		responsive: [
			{
			breakpoint: 960,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				}
			},
			{
			breakpoint: 750,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
			breakpoint: 550,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});

	$("#carrusel-moda").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		infinite: true,
		prevArrow:'#flecha-left-carrusel-moda',
		nextArrow:'#flecha-right-carrusel-moda',
		responsive: [
			{
			breakpoint: 960,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				}
			},
			{
			breakpoint: 750,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
			breakpoint: 550,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});

	$("#carrusel-accesorios").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		infinite: true,
		prevArrow:'#flecha-left-carrusel-accesorios',
		nextArrow:'#flecha-right-carrusel-accesorios',
		responsive: [
			{
			breakpoint: 960,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				}
			},
			{
			breakpoint: 750,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
			breakpoint: 550,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});

	$("#carrusel-alimentacion").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		infinite: true,
		prevArrow:'#flecha-left-carrusel-alimentacion',
		nextArrow:'#flecha-right-carrusel-alimentacion',
		responsive: [
			{
			breakpoint: 960,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				}
			},
			{
			breakpoint: 750,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
			breakpoint: 550,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});

	$("#carrusel-cuidado").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		infinite: true,
		prevArrow:'#flecha-left-carrusel-cuidado',
		nextArrow:'#flecha-right-carrusel-cuidado',
		responsive: [
			{
			breakpoint: 960,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				}
			},
			{
			breakpoint: 750,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
			breakpoint: 550,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});

	$("#carrusel-fiestas").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		infinite: true,
		prevArrow:'#flecha-left-carrusel-fiestas',
		nextArrow:'#flecha-right-carrusel-fiestas',
		responsive: [
			{
			breakpoint: 960,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				}
			},
			{
			breakpoint: 750,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
			breakpoint: 550,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});

	$("#carrusel-mama").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		infinite: true,
		prevArrow:'#flecha-left-carrusel-mama',
		nextArrow:'#flecha-right-carrusel-mama',
		responsive: [
			{
			breakpoint: 960,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				}
			},
			{
			breakpoint: 750,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
			breakpoint: 550,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});


	$("#carrusel-productos-tendencia").slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		infinite: true,
		prevArrow:'#flecha-left-carrusel-tendencia',
		nextArrow:'#flecha-right-carrusel-tendencia',
		responsive: [
			{
			breakpoint: 1100,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				}
			},
			{
			breakpoint: 960,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				}
			},
			{
			breakpoint: 750,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
			breakpoint: 550,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});


	$("#carrusel-otros-productos").slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		infinite: true,
		prevArrow:'#flecha-left-carrusel-otros-productos',
		nextArrow:'#flecha-right-carrusel-otros-productos',
		responsive: [
			{
			breakpoint: 1100,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				}
			},
			{
			breakpoint: 960,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				}
			},
			{
			breakpoint: 750,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
			breakpoint: 550,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});

	

	/* Carrusel producto ampliado */

	$('#slider-galeria-producto-ampliado').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow:'#flecha-left-galeria-producto-ampliado',
		nextArrow:'#flecha-right-galeria-producto-ampliado',
	});

	function moveGaleria(posicion){
		$("#slider-galeria-producto-ampliado").slick('slickGoTo', posicion);
	}
	
	$("#wrap-thumbs-producto-ampliado").children("img").click(function(){
		var posi = $(this).index();
		moveGaleria(posi);
	});

	/* Carruseles internos */
	$('#carrusel-productos-relacionados').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		infinite: true,
		prevArrow:'#flecha-left-carrusel-relacionados',
		nextArrow:'#flecha-right-carrusel-relacionados',
		responsive: [
			{
			breakpoint: 1100,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				}
			},
			{
			breakpoint: 960,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				}
			},
			{
			breakpoint: 750,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
			breakpoint: 550,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});

	$('#carrusel-productos-similares').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		infinite: true,
		prevArrow:'#flecha-left-carrusel-similares',
		nextArrow:'#flecha-right-carrusel-similares',
		responsive: [
			{
			breakpoint: 1100,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				}
			},
			{
			breakpoint: 960,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				}
			},
			{
			breakpoint: 750,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
			breakpoint: 550,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});


	$('#carrusel-productos-recien-vistos').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		infinite: true,
		prevArrow:'#flecha-left-carrusel-recien-vistos',
		nextArrow:'#flecha-right-carrusel-recien-vistos',
		responsive: [
			{
			breakpoint: 1100,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				}
			},
			{
			breakpoint: 960,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				}
			},
			{
			breakpoint: 750,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
			breakpoint: 550,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});

	/* --------------------------------------------------------------- */
	/* --------------------------------------------------------------- */
	/* --------------------------------------------------------------- */


	/* RANGOS ============================================================= */
	$(document).on('input', '#range-min-precio-filtros', function() {
		$('#min-precio-filtros').html(  "$" + Math.round( $(this).val() ) + "mil");
	});

	$(document).on('input', '#range-max-precio-filtros', function() {
		$('#max-precio-filtros').html(  "$" + Math.round( $(this).val() ) + "mil");
	});
	/* --------------------------------------------------------------- */
	/* --------------------------------------------------------------- */
	/* --------------------------------------------------------------- */


	/* BOTON GO TOP ============================================================= */

	$("#boton-go-top").click(function(){
		$("html, body").animate({ scrollTop: 0 }, 500, 'swing');
		return false;
	});

	/* --------------------------------------------------------------- */
	/* --------------------------------------------------------------- */



	/* FILTROS  ============================================================= */
	/* Ver cuenta */
	$( window ).resize(function() {
		changeTxtFiltro();
	});

	function changeTxtFiltro(){
		var numInfoFiltro = $(".info-filtro").length;

		if($( window ).width() < 980){
			for(var i = 0; i < numInfoFiltro; i++){
				var dataInfoFiltro = $(".info-filtro").eq(i).data("value");
				$(".info-filtro").eq(i).text(dataInfoFiltro);
			}
		}

	}
	changeTxtFiltro();
	
	$("#up-down-ordenar-por").click(function(){
		var expand = $(this).data("expand");
		if(expand == false){
			$(this).children(".down-filtro").addClass("up-filtro");
			$(this).data("expand", true);
		}else{
			$(this).children(".down-filtro").removeClass("up-filtro");
			$(this).data("expand", false);
		}
		$("#up-down-filtros").children(".down-filtro").removeClass("up-filtro");
		$("#up-down-filtros").data("expand", false);
		$(".contenedor-movil-columna-filtros").slideUp();
		$(".contenedor-movil-columna-ordenar-por").slideToggle();
	});

	$("#up-down-filtros").click(function(){
		var expand = $(this).data("expand");
		if(expand == false){
			$(this).children(".down-filtro").addClass("up-filtro");
			$(this).data("expand", true);
		}else{
			$(this).children(".down-filtro").removeClass("up-filtro");
			$(this).data("expand", false);
		}
		$("#up-down-ordenar-por").children(".down-filtro").removeClass("up-filtro");
		$("#up-down-ordenar-por").data("expand", false);
		$(".contenedor-movil-columna-ordenar-por").slideUp();
		$(".contenedor-movil-columna-filtros").slideToggle();
	});

	/* ------------------------ */

	/* PRODUCTO AMPLIADO  ============================================================= */
	/* TALLE */
	$(".talle-variantes-producto-ampliado").click(function(){
		var numTalles = $(".talle-variantes-producto-ampliado").length;
		
		for(var i=0; i < numTalles; i++){
			$(".talle-variantes-producto-ampliado").eq(i).removeClass("talle-enable");
		}

		$(this).addClass("talle-enable");

	});

	/* MAS INFO TABS */
	$(".header-masinformacion-producto-ampliado").click(function(){
		var pos = $(this).index();
		verTabsMasInfo(pos);
	});

	function verTabsMasInfo(posicion){
		var numTabs = $(".header-masinformacion-producto-ampliado").length;
		
		for(var i=0; i < numTabs; i++){
			$(".header-masinformacion-producto-ampliado").eq(i).removeClass("header-masinformacion-producto-ampliado-activo");
			$(".tab-masinformacion-producto-ampliado").eq(i).css("display", "none");
		}

		$(".header-masinformacion-producto-ampliado").eq(posicion).addClass("header-masinformacion-producto-ampliado-activo");
		$(".tab-masinformacion-producto-ampliado").eq(posicion).slideDown();
	}
	verTabsMasInfo(0);

	/* AGREGAR PRODUCTO */
	function showAddCart(){
		
		$("#wrap-columna-addCart").addClass("show-columna-addCart");
		$("#lightBox-Back").addClass("show-lightBox-Back-3");
		$("body").addClass("fixed-body");
	}

	function hideAddCart(){
		$("#wrap-columna-addCart").removeClass("show-columna-addCart");
		$("#lightBox-Back").removeClass("show-lightBox-Back-3");
		$("body").removeClass("fixed-body");
	}
	
	$("#addCart").click(function(){
		showAddCart();
		return false;
	});

	$("#close-addCart").click(function(){
		hideAddCart();
		return false;
	});

	/* ------------------------ */

	/* FORMULARIOS  ============================================================= */
	/* TAB FORMULARIOS */
	$(".bt-tab-IngresoRegistro").click(function(){
		var pos = $(this).index();
		verTabFormulario(pos);
	});

	function verTabFormulario(posicion){
		var numTabsForm = $(".bt-tab-IngresoRegistro").length;
		
		for(var i=0; i < numTabsForm; i++){
			$(".bt-tab-IngresoRegistro").eq(i).removeClass("bt-tab-IngresoRegistro-activo");
			$(".form-IngresoRegistro").eq(i).css("display", "none");
		}
		$(".bt-tab-IngresoRegistro").eq(posicion).addClass("bt-tab-IngresoRegistro-activo");
		$(".form-IngresoRegistro").eq(posicion).css("display", "block");
	};

	verTabFormulario(0);

	$("#bt-registrate").click(function(){
		verTabFormulario(1);
	});

	$("#bt-ingresa").click(function(){
		verTabFormulario(0);
	});


	/* VER PASSWORD */
	$(".ico-ver-pass").click(function(){
		verPassword($(this));
	});

	function verPassword(boton){
		if($(boton).next().attr("type") === "password"){
			$(boton).next().attr("type", "text");
			$(boton).css("opacity", "1");
		}else{
			$(boton).next().attr("type", "password");
			$(boton).css("opacity", "0.5");
		}
	};

	/* MODALES */
	$("#bt-agregarDireccion").click(function(){	
		showModal("#agregar-direccion");
	});

	$(".bt-close-modal").click(function(){	
		hideModal();
	});

	function showModal(elemento){
		$(elemento).addClass("show-modal");
		$("#lightBox-Back").addClass("show-lightBox-Back-3");
		$("body").addClass("fixed-body");
		$("html, body").animate({ scrollTop: 0 }, 500, 'linear');
	}

	function hideModal(){
		$(".modal-cucu").removeClass("show-modal");
		$("#lightBox-Back").removeClass("show-lightBox-Back-3");
		$("body").removeClass("fixed-body");
	}


});
