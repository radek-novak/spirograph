function resetElem(a){var b=$(a),c=b.clone(!0);b.before(c),$("."+b.attr("class")+":last").remove()}function setupCanvas(){var a=$(window).width(),b=$(window).height();$("canvas").attr("width",a).attr("height",b),$rods.height((b>a?a:b)/6-20),clearScreen()}function draw(a,b){ctx.strokeStyle=linecolor,ctx.beginPath(),ctx.moveTo(last.x,last.y),last.x&&ctx.lineTo(a,b),ctx.lineWidth=2,ctx.lineCap="round",ctx.stroke(),last={x:a,y:b}}function render(){var a=$(".draw").offset();draw(a.left,a.top),window.requestAnimationFrame(render)}function clearScreen(){ctx.clearRect(0,0,9999,9999),window.setTimeout(ctx.clearRect(0,0,9999,9999),1500)}!function(){for(var a=0,b=["ms","moz","webkit","o"],c=0;c<b.length&&!window.requestAnimationFrame;++c)window.requestAnimationFrame=window[b[c]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[b[c]+"CancelAnimationFrame"]||window[b[c]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(b){var c=(new Date).getTime(),d=Math.max(0,16-(c-a)),e=window.setTimeout(function(){b(c+d)},d);return a=c+d,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)})}();var ctx=$("canvas")[0].getContext("2d"),last={x:null,y:null},linecolor=$('input[type="color"]').val(),$rods=$(".a, .b, .c");setupCanvas(),$(window).resize(setupCanvas),window.requestAnimationFrame(render),$(".clear").click(clearScreen),$(".spinner").spinner(),$(".spinner").on("spinstop",function(){var a=$(this),b=a.val(),c=a.attr("id")[5],d=$(".a").css("-webkit-animation").split(" ");d[1]=b+"s",$("."+c).css({"-webkit-animation":d.join(" ")}),resetElem("."+c),clearScreen()}),$('input[type="color"]').on("change",function(){linecolor=$(this).val()});