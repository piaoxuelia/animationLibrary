
(function($) {
	var pX = pY = tX = tY = 0;
	var wW, wH,canvas, ctx_t, bgCanvas, bgctx, particles = [],
		img, cW, cH, create_t_left, create_t_top, int_draw_t, ctx;
	if (getUA() === "chrome") { 
		var intval = 20; var density = 12 
	} else { 
		var intval = 40; 
		var density = 18 
	}
	var range = 10;
	var speed = 100;
	var megane = 130;
	var stroke_megane = 25;
	var jimble = 2;
	HTML = $("html");
	var imageW = 300;
	var imageH = 3918;
	var cW = 800;
	var cH = imageH;
	var image = new Image();

	image.src = "static/kenji/kenjiendo2.png";

	$(function() { 
		getUA();
		setSize();
		preload();
		common();
	});

	$(window).mousemove(function(e) { 
		pX = e.pageX;
		pY = e.pageY;
		tX = pX - create_t_left;
		tY = pY - create_t_top; 
	});

	// 晚加载
	function lateload() { 
		$(".late").each(function(a, d) { 
			var e = $(this); 
			var f = e.data("src"); 
			var b = e.data("width");
			e.html('<img src="' + f + '" width="' + b + '">') 
		}) 
	}
	// 预加载
	function preload() { 
		if (richflag) { 
			Array.prototype.remove = function(g) { 
				for (var f = 0; f < this.length; f++) { 
					if (this[f] == g) { 
						this.splice(f, 1) 
					} 
				} 
			};

			function a(f, g) { 
				var h = f.length;
				$(f).each(function() { 
					var j = this;
					$("<img/>").attr("src", j).load(function() { 
						f.remove(j);
						g(h, h - f.length) 
					}) 
				}) 
			} 
			var b = 0; 
			var e = 0;
			a(["static/kenji/kenjiendo2.png", "static/kenji/main.jpg"], function(g, f) { 
				b = Math.ceil(100 * f / g) 
			}); 
			var d = window.setInterval(function() { 
				if (e >= 100) { 
					window.clearInterval(d);
					$("body").removeClass("preload");
					setTimeout(function() { $(".firstload").remove() }, 1000);
					setTimeout(function() { 
						setdraw_t(); 
					}, 500); 

					if (getUA() === "firefox") {

					} else { 
						int_draw_t = setInterval(function() { 
							draw_t() 
						}, intval) 
					} 
					setupParticles() 
				} else { 
					if (e < b) { 
						e++;
						$(".preloadbar").css({ width: e + "%" }) 
					} 
				} 
			}, 10) 
		} else { 
			$(window).on("load", function() { 
				$("body").removeClass("preload");
				$(".firstload").fadeOut("400");
				setTimeout(function() { 
					setdraw_t(); 
				
				}, 500); 
				if (getUA() === "firefox") {

				} else { 
					int_draw_t = setInterval(function() { 
						draw_t() 
					}, intval) 
				} 
				setupParticles();
			}) 
		} 
	}

	function common() { 
		clearInterval(int_draw_t);
		HTML = $("html");
		canvas_flag = $("#kenjiendo").length;


		if ($(".create_t").length) { 
			create_t_top = $(".create_t").offset().top;
			create_t_left = $(".create_t").offset().left 
		} 
		
		HTML.addClass(getUA);
		setdraw_t() 

		$(window).on("load", function() { 
			setTimeout(function() { HTML.addClass("loaded") }, 1000);
			
			lateload(); 
			setSize(); 
			setdraw_t() 
		});

		$(window).on("resize", function() { 
			setSize(); 
			setdraw_t() 
			if ($(".create_t").length) { 
				create_t_top = $(".create_t").offset().top;
				create_t_left = $(".create_t").offset().left 
			} 
		});
		 
	}

	function commonafter() { 
		clearInterval(int_draw_t);
		HTML = $("html");
		canvas_flag = $("#kenjiendo").length;
		HTML.addClass(getUA);

		$(window).on("resize", function() { 
			setSize();
			setdraw_t();
			if ($(".create_t").length) { 
				create_t_top = $(".create_t").offset().top;
				create_t_left = $(".create_t").offset().left 
			} 
		}); 
	}

	function setSize() { 
		wW = $(window).width();
		wH = $(window).height();
	}


	window.requestAnimFrame = (function() { 
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(b, a) { 
			window.setTimeout(b, 1000 / 60) 
		} 
	})();

	function setdraw_t() { 
		if (canvas_flag) { 
			if (richflag) { 
				canvas = document.getElementById("kenjiendo");
				bgCanvas = document.getElementById("kenjiendo_bk");
				ctx_t = canvas.getContext("2d");
				bgctx = bgCanvas.getContext("2d");
				canvas.width = cW;
				canvas.height = cH;
				bgCanvas.width = cW;
				bgCanvas.height = cH;
				prepare();
				setupParticles();
				ctx_t.drawImage(image, 0, 0, imageW, imageH, imgX, imgY, imageW, imageH) 
			} 
		} 
	}
	function prepare() { 
		imgX = (cW - imageW) / 2;
		imgY = (cH - imageH) / 2;
		bgctx.drawImage(image, 0, 0, imageW, imageH, imgX, imgY, imageW, imageH) 
	}

	function setupParticles() { 
		if (canvas_flag && richflag) { 
			particles = []; 
			var f, d, b;
			f = bgctx.getImageData(0, 0, cW, cH);
			d = f.data; 
			for (var e = 0; e < cW; e += density) { 
				for (var a = 0; a < cH; a += density) { 
					b = d[((e + (a * cW)) * 4) - 1]; 
					if (b == 255) { 
						particles.push({ x: e, y: a, x0: e, y0: a }) 
					} 
				} 
			} 
		} 
	}

	function draw_t() { 
		if (canvas_flag && richflag) { 
			ctx_t.clearRect(0, 0, cW, cH);
			ctx_t.drawImage(image, 0, 0, imageW, imageH, imgX, imgY, imageW, imageH);
			ctx_t.globalCompositeOperation = "destination-out"; 

			for (var g = 0; g <= 10; g++) { 
				var j = 1 - g / 10; var b = 80 + (g * 3);
				ctx_t.beginPath();
				ctx_t.fillStyle = "rgba(255,255,255," + j + ")";
				ctx_t.arc(tX, tY, b, 0, Math.PI * 2, true);
				ctx_t.closePath();
				ctx_t.fill() 
			} 
			ctx_t.globalCompositeOperation = "source-over"; 

			for (var g = 0, l = particles.length; g < l; ++g) { 
				var d = particles[g];
				dx = tX - d.x;
				dy = tY - d.y;
				distance = Math.sqrt(dx * dx + dy * dy);
				d.x = (d.x - (dx / distance) * (range / distance) * speed) - ((d.x - d.x0) / 2);
				d.y = (d.y - (dy / distance) * (range / distance) * speed) - ((d.y - d.y0) / 2); 
				var o = d.x - tX; 
				var m = d.y - tY; 
				var q = Math.sqrt(Math.pow(o, 2) + Math.pow(m, 2)); 
				if (q < megane) { 
					for (var e = 1; e < particles.length; e++) { 
						var f = particles[e]; 
						var k = d.x - f.x; 
						var h = d.y - f.y; 
						var a = Math.sqrt(Math.pow(k, 2) + Math.pow(h, 2)); 
						if (a < stroke_megane) { 
							ctx_t.beginPath();
							ctx_t.lineWidth = 0.3;
							ctx_t.strokeStyle = "rgba(255,255,255,1)";
							ctx_t.lineTo(d.x + (Math.random() * jimble - jimble / 2), d.y + (Math.random() * jimble - jimble / 2));
							ctx_t.lineTo(f.x + (Math.random() * jimble - jimble / 2), f.y + (Math.random() * jimble - jimble / 2));
							ctx_t.lineTo(d.x0, d.y0);
							ctx_t.lineTo(f.x0, f.y0);
							ctx_t.closePath();
							ctx_t.stroke() 
						} 
					} 
				} 
			} 
		} 
	}
	function getUA() { 
		var b = window.navigator.userAgent.toLowerCase(); 
		var a = window.navigator.appVersion.toLowerCase(); 
		if (b.indexOf("msie") > -1) { if (a.indexOf("msie 6.0") > -1) { return "ie ie6" } 
		else { if (a.indexOf("msie 7.0") > -1) { richflag = false; return "ie ie7" } 
		else { if (a.indexOf("msie 8.0") > -1) { richflag = false; return "ie ie8" } 
		else { if (a.indexOf("msie 9.0") > -1) { richflag = true; return "ie ie9" } 
		else { if (a.indexOf("msie 10.0") > -1) { richflag = true; return "ie ie10" } 
		else { richflag = true; return "ie" } } } } } } 
		else { if (a.indexOf("trident/7.0") > -1) { richflag = true; return "ie ie11" } 
		else { if (b.indexOf("firefox") > -1) { richflag = true; return "firefox" } 
		else { if (b.indexOf("opera") > -1) { richflag = true; return "opera" } 
		else { if (b.indexOf("chrome") > -1) { richflag = true; return "chrome" } 
		else { if (b.indexOf("safari") > -1) { richflag = true; return "safari" } 
		else {} } } } } } 
	} 


})(jQuery);