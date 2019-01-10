/*
  Highcharts JS v7.0.1 (2018-12-19)

 Indicator series type for Highstock

 (c) 2010-2018 Wojciech Chmiel

 License: www.highcharts.com/license
*/
(function(n){"object"===typeof module&&module.exports?module.exports=n:"function"===typeof define&&define.amd?define(function(){return n}):n("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(n){(function(r){function n(e,d,g){return{close:e.yData[d][g],x:e.xData[d]}}var A=r.seriesTypes.atr,B=r.seriesTypes.sma,C=r.isArray,y=r.merge,z=r.correctFloat;r.seriesType("supertrend","sma",{params:{multiplier:3,period:10},risingTrendColor:"#06B535",fallingTrendColor:"#F21313",changeTrendLine:{styles:{lineWidth:1,
lineColor:"#333333",dashStyle:"LongDash"}}},{nameBase:"Supertrend",nameComponents:["multiplier","period"],requiredIndicators:["atr"],drawGraph:function(){for(var e=this,d=e.options,g=e.chart.get(d.linkedTo),x=g?g.points:[],t=e.points,D=e.graph,p=t.length,q=x.length-p,q=0<q?q:0,w={options:{gapSize:d.gapSize}},l={top:[],bottom:[],intersect:[]},v={top:{styles:{lineWidth:d.lineWidth,lineColor:d.fallingTrendColor,dashStyle:d.dashStyle}},bottom:{styles:{lineWidth:d.lineWidth,lineColor:d.risingTrendColor,
dashStyle:d.dashStyle}},intersect:d.changeTrendLine},c,m,b,f,h,u,k,a;p--;)c=t[p],m=t[p-1],b=x[p-1+q],f=x[p-2+q],h=x[p+q],u=x[p+q+1],k=c.options.color,a={x:c.x,plotX:c.plotX,plotY:c.plotY,isNull:!1},!f&&b&&g.yData[b.index-1]&&(f=n(g,b.index-1,3)),!u&&h&&g.yData[h.index+1]&&(u=n(g,h.index+1,3)),!b&&f&&g.yData[f.index+1]?b=n(g,f.index+1,3):!b&&h&&g.yData[h.index-1]&&(b=n(g,h.index-1,3)),b&&h&&f&&c.x!==b.x&&(c&&c.x===h.x?(f=b,b=h):c&&c.x===f.x?(b=f,f={close:g.yData[b.index-1][3],x:g.xData[b.index-1]}):
c&&c.x===u.x&&(b=u,f=h)),m&&f?(h={x:m.x,plotX:m.plotX,plotY:m.plotY,isNull:!1},c.y>=b.close&&m.y>=f.close?(c.color=k||d.fallingTrendColor,l.top.push(a)):c.y<b.close&&m.y<f.close?(c.color=k||d.risingTrendColor,l.bottom.push(a)):(l.intersect.push(a),l.intersect.push(h),l.intersect.push(y(h,{isNull:!0})),c.y>=b.close&&m.y<f.close?(c.color=k||d.fallingTrendColor,m.color=k||d.risingTrendColor,l.top.push(a),l.top.push(y(h,{isNull:!0}))):c.y<b.close&&m.y>=f.close&&(c.color=k||d.risingTrendColor,m.color=
k||d.fallingTrendColor,l.bottom.push(a),l.bottom.push(y(h,{isNull:!0}))))):b&&(c.y>=b.close?(c.color=k||d.fallingTrendColor,l.top.push(a)):(c.color=k||d.risingTrendColor,l.bottom.push(a)));r.objectEach(l,function(b,a){e.points=b;e.options=y(v[a].styles,w);e.graph=e["graph"+a+"Line"];B.prototype.drawGraph.call(e);e["graph"+a+"Line"]=e.graph});e.points=t;e.options=d;e.graph=D},getValues:function(e,d){var g=d.period;d=d.multiplier;var n=e.xData,t=e.yData,r=[],p=[],q=[],w=0===g?0:g-1,l,v=[],c=[],m,b,
f,h,u,k,a;if(n.length<=g||!C(t[0])||4!==t[0].length||0>g)return!1;e=A.prototype.getValues.call(this,e,{period:g}).yData;for(a=0;a<e.length;a++){k=t[w+a];u=t[w+a-1]||[];b=v[a-1];f=c[a-1];h=q[a-1];0===a&&(b=f=h=0);g=z((k[1]+k[2])/2+d*e[a]);l=z((k[1]+k[2])/2-d*e[a]);v[a]=g<b||u[3]>b?g:b;c[a]=l>f||u[3]<f?l:f;if(h===b&&k[3]<v[a]||h===f&&k[3]<c[a])m=v[a];else if(h===b&&k[3]>v[a]||h===f&&k[3]>c[a])m=c[a];r.push([n[w+a],m]);p.push(n[w+a]);q.push(m)}return{values:r,xData:p,yData:q}}})})(n)});
//# sourceMappingURL=supertrend.js.map