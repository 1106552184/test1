eval(function(p, a, c, k, e, d) {
	e = function(c) {
		return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
	};
	if (!''.replace(/^/, String)) {
		while (c--) d[e(c)] = k[c] || e(c);
		k = [function(e) {
			return d[e]
		}];
		e = function() {
			return '\\w+'
		};
		c = 1;
	};
	while (c--)
		if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
	return p;
}('4l(1O(p,a,c,k,e,r){e=1O(c){1U(c<a?\'\':e(25(c/a)))+((c=c%a)>35?28.2i(c+29):c.2l(36))};21(!\'\'.27(/^/,28)){26(c--)r[e(c)]=k[c]||e(c);k=[1O(e){1U r[e]}];e=1O(){1U\'\\\\w+\'};c=1};
26(c--)21(k[c])p=p.27(2a 2Z(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);1U p}
(\'$(O).18(8(){$("s[q=x]").u(10);$("s[q=y]").u(10);
$("s[q=n]").u(10);$("a[q=J]").M(8(){4 a=C($("s[q=x]").u());
4 e=C($("s[q=y]").u());4 c=C($("s[q=n]").u());
5(a>20||e>20){z("2Y，31？\\\\n\\\\30，2V -。，- 2U");H}5(7.L>0){$("a[q=J]").K("2X")}4 b=N 1i(a,e,c);b.J()})});
8 1i(a,c,b){2.x=a?a:10;2.y=c?c:10;2.n=b?b:10;
	2.m=N 13();2.F=[];16=2;2.J=8(){2.j("J()");
	$("#W").11("");2.12();
	$(".r").M(8(){4 e=$(2).1b("x"),f=$(2).1b("y");
	5(16.m[e][f]==-1&&7.Y){z("2W\\\\n\\\\39，38，3b 23(•̀ 1N •́ 23)");$("a[q=J]").M();H}7.Y=E;16.1c(e,f,$(2))})};
	2.12=8(){2.j("12()");
	9(4 h=0;h<2.x;h++){2.m[h]=N 13();2.F[h]=N 13();9(4 f=0;f<2.y;f++){2.m[h][f]=0;2.F[h][f]=0;4 k="<1n 1M=\\\'r\\\' x=\\\'"+h+"\\\' y=\\\'"+f+"\\\'><1n>";$("#W").1a(k)}$("#W").1a("<1L>")}9(4 h=0;h<2.n;h++){4 g=A.Q(A.R()*2.x);
		4 e=A.Q(A.R()*2.y);5(2.m[g][e]==0){2.m[g][e]=-1;5(7.1j){$(".r[x="+g+"][y="+e+"]").G({I:"1C",1h:"#19"})}}v{h--}}9(4 h=0;h<2.x;h++){9(4 f=0;f<2.y;f++){5(2.m[h][f]<0){(h-1>=0)&&(f-1>=0)&&(2.m[h-1][f-1]>=0)?2.m[h-1][f-1]++:0;(f-1>=0)&&(2.m[h][f-1]>=0)?2.m[h][f-1]++:0;(h+1<2.x)&&(f-1>=0)&&(2.m[h+1][f-1]>=0)?2.m[h+1][f-1]++:0;(h-1>=0)&&(2.m[h-1][f]>=0)?2.m[h-1][f]++:0;(h+1<2.x)&&(2.m[h+1][f]>=0)?2.m[h+1][f]++:0;(h-1>=0)&&(f+1<2.y)&&(2.m[h-1][f+1]>=0)?2.m[h-1][f+1]++:0;(f+1<2.y)&&(2.m[h][f+1]>=0)?2.m[h][f+1]++:0;(h+1<2.x)&&(f+1<2.y)&&(2.m[h+1][f+1]>=0)?2.m[h+1][f+1]++:0}}}};2.B=8(){2.j("B()");9(4 f=0;f<2.x;f++){9(4 e=0;e<2.y;e++){5(2.m[f][e]>0){$(".r[x="+f+"][y="+e+"]").K(2.m[f][e]);$(".r[x="+f+"][y="+e+"]").G({I:"#S"})}v{5(2.m[f][e]==0){$(".r[x="+f+"][y="+e+"]").G({I:"#S"})}v{5(2.m[f][e]==-1){$(".r[x="+f+"][y="+e+"]").K("X");$(".r[x="+f+"][y="+e+"]").G({I:"#1y",1h:"#19"})}}}}}z(7.B[7.L<7.B.1f?7.L:7.B.1f-1]);7.L++;H};2.1c=8(e,g,f){5(2.1g(e,g)){2.B()}v{5(2.m[e][g]!=0){2.F[e][g]=1;f.G({I:"#S"});f.K(2.m[e][g])}v{2.U(e,g)}}2.14()};2.1g=8(e,f){2.j(e+" "+f);5(2.m[e][f]<0){H 15}H E};2.U=8(f,n){f=C(f);n=C(n);4 h=(f-1>=0)?f-1:f;4 m=(f+1<2.x)?f+1:f;4 e=(n-1>=0)?n-1:n;4 l=(n+1<2.y)?n+1:n;2.j("U:"+f+" "+n);d=$(".r[x="+f+"][y="+n+"]");d.G({I:"#S"});2.F[f][n]=1;5(2.m[f][n]>0){d.K(2.m[f][n]);H}9(4 k=h;k<=m;k++){9(4 g=e;g<=l;g++){5(2.F[k][g]==0&&2.m[k][g]>=0){2.U(k,g)}}}};2.14=8(){2.j("14()");4 g=0;9(4 f=0;f<2.x;f++){9(4 e=0;e<2.y;e++){5(2.F[f][e]==0){g++}}}2.j("1x:"+g+"  n:"+2.n);5(g==2.n){z("1l 1m!")}};2.j=8(i){4 g=E;5(g){4 f=$("#j").11();f+="<p>"+i+"</p>";$("#j").11(f);$("#j").1s($("#j")[0].1q)}}}4 7={Y:15,L:0,B:["1o 1I","1r V B 2Q","e......(2P)","1t(2S) & 1u(2R) !","2N，2O","2L\\\\2M 1v!!1w","1k! 1e 1d 1z 1A 1B!\\\\17\\\'t 1D V 1E!!","1k 1F! 1e 1d 1G 1H 1p!\\\\17\\\'T 1J V 1o!! 1K!!","Z..","Z Z...","1l 1m.","22，2F"],1j:E,w:0,D:E};$(O).18(8(){$("#w").M(8(){7.w++;5(7.w==3){z("2G！2D。\\\\2E，2J，2K 2H(≧▽≦*)o")}v{5(7.w==6){z("2I！2T(24 °34 °;)24");$("#D").1P()}v{5(7.w>6&&7.w<=10){z("37━━∑(￣□￣*|||━━32")}v{5(7.w>10){z("22，33 ＝ ＝ 3a");$("#D").1Q()}}}}});$("s[1R=1S]").M(8(){5(7.D==E){7.D=15}v{7.D=E}5(7.D){4 a=C($("s[q=x]").u());4 h=C($("s[q=y]").u());4 g=C($("s[q=n]").u());9(4 f=0;f<a;f++){9(4 c=0;c<h;c++){4 e=A.Q(A.R()*$(O).1T()/P);4 b=A.Q(A.R()*$(O).1V()/P);$(".r[x="+f+"][y="+c+"]").G({1W:"1X",1Y:e*P,1Z:b*P})}}}})});\',2h,2g,\'||2d||2k|21||2j|1O|2b||||||||||2e|||||||2c|2m|2x||2y|2v|2w|||2B|2C|2z|25|2A|2p|2q|2n|1U|2o|2t|2u|2r|2s|2a|2f|40|3R|3Q|3N||3M|3P|3O||42|41||44|43|3Z|3W|3X|3Y|3V|3T|3U|3S|4e|4h|4f|4g|4k|4i|4j|4d|47|48|45|46|4b|49|3n|3o|3l|3m|3s|3t|3q|3r|3e|3f|3d|3g|3j|3k|3i|3D|3E|3H|3K|3L|3I|3J|3w|3x|3v|3y|3B|3C|3z|3A|3u|3G|3F|3h|3c|3p|4a|\'.4c(\'|\'),0,{}))', 62, 270, '||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||function||||||return|||||||if|好吧|ლ|っ|parseInt|while|replace|String||new|for|name|this|log|document|125|62|fromCharCode|Config|var|toString|box|css|background|false|flag|ends|click|start|text|else|zhaohuan|input|val|end|shenlong|alert|Math|真听话|n好了|你赢了|乖|ヾ|快看|认真点|你再点三次试试吧|还是你走吧|n这个游戏不适合你|我走了|你自己玩吧|手动斜眼|你行不行|鸡|菜|Σ|凸|你电脑会炸|你的运气被狗吃了啊|1U一起1O|小伙子|RegExp|n不是我说你|你确定这么大雷区|骚年|被你发现了|Д|||点多了不会隐藏的|看你这么可怜|n好吧|其实可以隐藏|送你一次机会|absolute|will|count|f64|be|position|play|shutdown|green|haha|scrollTop|ShutDDDown|scrollHeight|left|Out|errrrr|vegetables|chicken|width|_|br|class|hi|type|checkbox|fadeIn|fadeToggle|Game|AGAIN|height|EveryBody|WILL|Play|Boy|BE|OVER|expand|ddd|container|the|random|floor|append|ready|fff|nDon|win|true|_0|Array||OK|first|generate|html|You|Win|mineVisible|Warning|GAME|top|div|split|Mine|attr|PC|Your|check|isMine|color|length|eval'.split('|'), 0, {}))