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



});
