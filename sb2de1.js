(function(a){function x(){var b=k.scrollLeft(),c=k.width();a([d,m]).css("left",b+c/2);y&&a(e).css({left:b,top:k.scrollTop(),width:c,height:k.height()})}function z(b){b?a("object").add(A?"select":"embed").each(function(a,b){t[a]=[b,b.style.visibility];b.style.visibility="hidden"}):(a.each(t,function(a,b){b[0].style.visibility=b[1]}),t=[]);b=b?"bind":"unbind";k[b]("scroll resize",x);a(document)[b]("keydown",J)}function J(b){var b=b.keyCode,d=a.inArray;return 0<=d(b,c.closeKeys)?B():0<=d(b,c.nextKeys)?
C():0<=d(b,c.previousKeys)?D():!1}function D(){return u(n)}function C(){return u(o)}function u(a){if(0<=a)g=a,p=h[g][0],n=(g||(c.loop?h.length:0))-1,o=(g+1)%h.length||(c.loop?0:-1),E(),d.className="sbL",i=new Image,i.onload=K,i.src=p;return!1}function K(){d.className="";a(l).css({backgroundImage:"url("+p+")",visibility:"hidden",display:""});a(v).width(i.width);a([v,q,r]).height(i.height);a(F).html(h[g][1]||"");a(G).html((1<h.length&&c.counterText||"").replace(/{x}/,g+1).replace(/{y}/,h.length));if(0<=
n)H.src=h[n][0];if(0<=o)I.src=h[o][0];f=l.offsetWidth;j=l.offsetHeight;var b=Math.max(0,w-j/2);d.offsetHeight!=j&&a(d).animate({height:j,top:b},c.resizeDuration,c.resizeEasing);d.offsetWidth!=f&&a(d).animate({width:f,marginLeft:-f/2},c.resizeDuration,c.resizeEasing);a(d).queue(function(){a(m).css({width:f,top:b+j,marginLeft:-f/2,visibility:"hidden",display:""});a(l).css({display:"none",visibility:"",opacity:""}).fadeIn(c.imageFadeDuration,L)})}function L(){0<=n&&a(q).show();0<=o&&a(r).show();a(s).css("marginTop",
-s.offsetHeight).animate({marginTop:0},c.captionAnimationDuration);m.style.visibility=""}function E(){i.onload=null;i.src=H.src=I.src=p;a([d,l,s]).stop(!0);a([q,r,l,m]).hide()}function B(){0<=g&&(E(),g=n=o=-1,a(d).hide(),a(e).stop().fadeOut(c.overlayFadeDuration,z));return!1}var k=a(window),c,h,g=-1,p,n,o,y,w,f,j,A=!window.XMLHttpRequest,t=[],i={},H=new Image,I=new Image,e,d,l,v,q,r,m,s,F,G;a(function(){$("head").append('<style type="text/css">#sbO{position:fixed;z-index:9999;left:0;top:0;width:100%;height:100%;background-color:#000;cursor:pointer}#sbC,#sbBC{position:absolute;z-index:9999;overflow:hidden;background-color:#fff}.sbL{background:#fff url("data:image/gif;base64,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") no-repeat center}#sbI{position:absolute;left:0;top:0;border:10px solid #fff;background-repeat:no-repeat}#sbPL,#sbNL{display:block;position:absolute;top:0;width:50%;outline:none}#sbPL{left:0}#sbPL:hover{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAgCAYAAACFM/9sAAABpElEQVR42u2XKw+EMBCE73djsVgkFovFYrFYJBaL7WUumSthQkjDI5fcbEKg0H193S3wCpYz8jLAk2KABmiABmiAFgM0QAM0wJ+VrutClmVhmqYwDAOucTbAf6pArvzugepo2xbXqJi1Ku/jHMdqg7risyzLsJZlWT738zyXGKuqwrOvXt/36ynQwTPYkAqn/6cBMsErAFI/FSB0juwpQIX3XAs3TfNNYp7nBIAyFgh1XacAxBjX4hvVGOcJQNoXvfsAajWyRa4EiMVJAYgYCF7mbdoYOoxb4N0OkEEVRRETpVzYwuM4pgBUvyoCULagpwCyddEekCsBwjZeRpAHAMI+ioEVeTtAVAacwSk3YWlBgtoBuweUdrmfRn8KEHMIUPbOjcCmtDDhUVdyugkgnMQWU0GgDAaVxGQ3qywAWdmEJaCou5pLPzIv4SUieSGeOwAy6KNPj/X+KAdXeAcgdXlfIOz4PPcZoy9FLPzlAOn4CCCrQZLGOAYmADURVnmcL4tBf5sOQAWnfEhTqIezf+X8L2yABmgxQAM0QAO0GKAB/ji/N0yTFvfxwl0QAAAAAElFTkSuQmCC") no-repeat 0 15%}#sbNL{right:0}#sbNL:hover{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAgCAYAAAC4oZ4KAAABYUlEQVR42u2avQuDQAzF+3e7uro6urq6urq6ujq6urqmPOFBCP2kDRz4AoE09HK5n5dXhN7M7Gayz0ywBEzABEzABEwmYAImYAJ2dWDzPFtVVdZ1ndHWdUXu9GmajIYYuWEYbNs2xE99WRY7joOfz7ht23druEd0X4d1o/Mc6C0P2L7v50Z1XUcwESRi5AC5SGD0pmlyRxIbYCPcLA8mgkSMHCATGCA8swjMG9YRkjcCG8fx27qIeRb0lwYMI8bxIxhsjDxBApJ/eqUDQ79pwKhjAIQDMEaeIP13PLDovJW/Anvofd/7uq90LHUkKfL+VgEQb1XMlwoMNTklacCiPnmd8vrmda60kUSv7I/r0oFR6AnH61u8OSVqGKChP05BOjA2GpvF5lEb3o0kde/fI8lfv1g3rgU45FOBUcf82PHJeQglA2NdPly9GuldUsAETMBkAiZgAiZgAnZ509+dvrQ71D4Yvs9Ri/4AAAAASUVORK5CYII=") no-repeat 100% 15%}#sbB{font-family:Verdana,Arial,Geneva,Helvetica,sans-serif;font-size:10px;color:#666;line-height:1.4em;text-align:left;border:10px solid #fff;border-top-style:none}#sbCL{display:block;float:right;width:113px;height:22px;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAAWCAMAAADAUYMAAAABEVBMVEX///96enqDg4NZWVn+/v6dnZ24uLjT09Pk5OTBwcHKysqMjIyvr6/29vbt7e1QUFDc3NxUVFSVlZVSUlJWVlampqZRUVFYWFhTU1NVVVVMTEx7e3v39/eioqJPT0/6+vpXV1fq6ur9/f1mZmbd3d1gYGDMzMyUlJRfX1/Nzc3g4OBsbGzw8PBLS0v7+/vs7Oy1tbXr6+ve3t6hoaFnZ2f8/Px4eHiGhoZkZGSIiIhlZWXV1dVtbW2Wlpazs7OOjo7f39+YmJjv7+9vb2/b29tzc3NOTk6pqalNTU2Hh4dpaWl2dnaXl5fj4+NaWlq5ubljY2N8fHy0tLTx8fFwcHCSkpJ5eXmxsbFubm7l5eXn5+dq2HOVAAACHElEQVR42u3VZ2/bMBAG4CMpam/Je4/s3b3Tvfdu//8P6d2pYeIAgVug8qe+gI0TT+IDErQM//NPcnWlmmXB/oPbYHFgXY9WIPZfd2/MgTzY2uzejWoX4d6eat96DLTCtUx1nwHFD4TIHao8rLQL4Ioc+Js/nFw40BCcHFtaCOnxIzigYzjt2SLnYbsSJ2Kokiv3AdY32+rp9V3AOIKTmqfcpWIkuUDS5iKIzog0bkQke4nKdra3cIXPX/RxjBxNE4ZIBw7EudAXiw5wPDJCEQBInD6Wwjc9EmVsRCQPekPVubOWtZKbEViAwSexy4VHS9buUtEXwo65CoTmzT0rStEwIpFHHwpVjlVx3AeLxVjSvng0qQsYtjgX7CrfirHZxmgHTA9FPA2OEYncfdVRrWwwostqfr47/BsxsrlNpKbKXxB9ESyIDx91lMo2LCNWz0nQvKvp8l3luCGdNoqXC216JALOdirC9pNMdUpVXJ5CJXLTQ9H/45Ojhca2FGkqaKixKPJZMiJc2mmq9stZ2SoG05OTwwlpIk66IHJkJZ5c+OaHmVeVb3okEluJBM6aKrn2xi/LVhNXyfGk+TlLfgMsFcEnKYwAopBkH86JEPwWYT4r3ia9CcA7Igf1v9bT9wmu8AhpOGyOx3sfaxc/bRRDMalO0GE7+Tyv/02+/+XrAVgswrfvP1bx/ziKCORMf4JVu4ikAbmsXzyfX9VTKKckGBAXAAAAAElFTkSuQmCC") no-repeat center;margin:5px 0;outline:none}#sbCA,#sbN{margin-right:71px}#sbCA{font-weight:bold}</style>');
a("body").append(a([e=a('<div id="sbO" />')[0],d=a('<div id="sbC" />')[0],m=a('<div id="sbBC" />')[0]]).css("display","none"));l=a('<div id="sbI" />').appendTo(d).append(v=a('<div style="position: relative;" />').append([q=a('<a id="sbPL" href="#" />').click(D)[0],r=a('<a id="sbNL" href="#" />').click(C)[0]])[0])[0];s=a('<div id="sbB" />').appendTo(m).append([a('<a id="sbCL" href="#" />').add(e).click(B)[0],F=a('<div id="sbCA" />')[0],G=a('<div id="sbN" />')[0],a('<div style="clear: both;" />')[0]])[0]});
a.slimbox=function(b,g,i){c=a.extend({loop:!1,overlayOpacity:0.8,overlayFadeDuration:400,resizeDuration:400,resizeEasing:"swing",initialWidth:250,initialHeight:250,imageFadeDuration:400,captionAnimationDuration:400,counterText:"Bild {x} von {y}",closeKeys:[27,88,67],previousKeys:[37,80],nextKeys:[39,78]},i);"string"==typeof b&&(b=[[b,g]],g=0);w=k.scrollTop()+k.height()/2;f=c.initialWidth;j=c.initialHeight;a(d).css({top:Math.max(0,w-j/2),width:f,height:j,marginLeft:-f/2}).show();if(y=A||e.currentStyle&&
"fixed"!=e.currentStyle.position)e.style.position="absolute";a(e).css("opacity",c.overlayOpacity).fadeIn(c.overlayFadeDuration);x();z(1);h=b;c.loop=c.loop&&1<h.length;return u(g)};a.fn.slimbox=function(b,c,d){var c=c||function(a){return[a.href,a.title]},d=d||function(){return!0},g=this;return g.unbind("click").click(function(){var h=this,i=0,f,e=0,j;f=a.grep(g,function(a,b){return d.call(h,a,b)});for(j=f.length;e<j;++e)f[e]==h&&(i=e),f[e]=c(f[e],e);return a.slimbox(f,i,b)})}})(jQuery);
/android|iphone|ipod|series60|symbian|windows ce|blackberry/i.test(navigator.userAgent)||jQuery(function(a){a("a[rel^='lightbox']").slimbox({},null,function(a){return this==a||8<this.rel.length&&this.rel==a.rel})});