(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,a){e.exports="static/media/mlp_data1.7cf182bf.csv"},126:function(e,t,a){e.exports="static/media/mlp_data2.41b5909d.csv"},127:function(e,t,a){e.exports="static/media/mlp_data3.4be1826c.csv"},128:function(e,t,a){e.exports="static/media/mlp_data4.f56eb12b.csv"},129:function(e,t,a){e.exports="static/media/mlp_data5.1092dfbc.csv"},130:function(e,t,a){e.exports="static/media/dmlp_data1.91457413.csv"},131:function(e,t,a){e.exports="static/media/dmlp_data2.2a9a0efb.csv"},132:function(e,t,a){e.exports="static/media/dmlp_data3.a36d1537.csv"},133:function(e,t,a){e.exports="static/media/dmlp_data4.09ec7ee0.csv"},134:function(e,t,a){e.exports="static/media/dmlp_data5.31c5b388.csv"},135:function(e,t,a){e.exports="static/media/dmlp_data1.d58cd2a1.csv"},136:function(e,t,a){e.exports="static/media/dmlp_data2.3d099b33.csv"},137:function(e,t,a){e.exports="static/media/dmlp_data3.abfe445a.csv"},138:function(e,t,a){e.exports="static/media/dmlp_data4.04cdc2d6.csv"},139:function(e,t,a){e.exports="static/media/dmlp_data5.9cd10c10.csv"},140:function(e,t,a){e.exports="static/media/dmlp_train0_trials.6256f023.csv"},141:function(e,t,a){e.exports="static/media/dmlp_train1_trials.12bebc43.csv"},142:function(e,t,a){e.exports="static/media/dmlp_train2_trials.bcf3accc.csv"},143:function(e,t,a){e.exports="static/media/dmlp_train3_trials.24887b7c.csv"},144:function(e,t,a){e.exports="static/media/dmlp_train4_trials.13e495e0.csv"},145:function(e,t,a){e.exports="static/media/mlp_train0_trials.c265c5ed.csv"},146:function(e,t,a){e.exports="static/media/mlp_train1_trials.1054da20.csv"},147:function(e,t,a){e.exports="static/media/mlp_train2_trials.7d88cfca.csv"},148:function(e,t,a){e.exports="static/media/mlp_train3_trials.d3228103.csv"},149:function(e,t,a){e.exports="static/media/mlp_train4_trials.e3d0998f.csv"},150:function(e,t,a){e.exports="static/media/mlp_train0_trials.6584f183.csv"},151:function(e,t,a){e.exports="static/media/mlp_train1_trials.7f11f1fe.csv"},152:function(e,t,a){e.exports="static/media/mlp_train2_trials.2f55b8db.csv"},153:function(e,t,a){e.exports="static/media/mlp_train3_trials.cc18b276.csv"},154:function(e,t,a){e.exports="static/media/mlp_train4_trials.60e55d81.csv"},155:function(e,t,a){e.exports="static/media/dmlp_train0_trials.f02567aa.csv"},156:function(e,t,a){e.exports="static/media/dmlp_train1_trials.574221f3.csv"},157:function(e,t,a){e.exports="static/media/dmlp_train2_trials.36ebf121.csv"},158:function(e,t,a){e.exports="static/media/dmlp_train3_trials.ed9fc2c9.csv"},159:function(e,t,a){e.exports="static/media/dmlp_train4_trials.3a27972e.csv"},160:function(e,t,a){e.exports="static/media/teste1.ac577fe6.csv"},161:function(e,t,a){e.exports="static/media/teste2.9a7dd682.csv"},162:function(e,t,a){e.exports="static/media/teste3.5cc51d72.csv"},163:function(e,t,a){e.exports="static/media/teste4.5f16ef5a.csv"},164:function(e,t,a){e.exports="static/media/teste5.d5ffc69f.csv"},165:function(e,t,a){e.exports="static/media/dmlp_train0_trials.adefd2b2.csv"},166:function(e,t,a){e.exports="static/media/dmlp_train1_trials.b7372c77.csv"},167:function(e,t,a){e.exports="static/media/dmlp_train2_trials.d657ff6b.csv"},168:function(e,t,a){e.exports="static/media/dmlp_train3_trials.55bbebe2.csv"},169:function(e,t,a){e.exports="static/media/dmlp_train4_trials.365e4eaf.csv"},248:function(e,t,a){e.exports=a(398)},253:function(e,t,a){},260:function(e,t){},262:function(e,t){},398:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(17),l=a(80),s=a(47),u=a(48),p=a(50),m=a(49),d=a(51),f=a(3),h=a(20),v=a(15),E=a(1),g=(a(253),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).drawGraph=function(){var e=a.props,t=e.title,n=e.source,r=e.xLabel,c=e.yLabel,o=e.data,i=a.props.width,l=a.props.height;o.forEach(function(e){e.values.forEach(function(e){e.value=+e.value})});var s=v.h().domain(v.c(o[0].values,function(e){return e.description})).range([0,i-80]),u=[].concat.apply([],o.map(function(e){return e.values})).map(function(e){return e.value}),p=v.f().domain([0,v.e(u)]).range([l-80,0]),m=v.g(v.i),d=Object(E.f)(a.d3Component).attr("width",i+80+"px").attr("height",l+80+"px").append("g").attr("transform","translate(".concat(80,", ").concat(80,")")),f=v.d().x(function(e){return s(e.description)}).y(function(e){return p(e.value)}),h=d.append("g").attr("class","lines");h.selectAll(".line-group").data(o).enter().append("g").attr("class","line-group").on("mouseover",function(e,t){d.append("text").attr("class","title-text").style("fill",m(t)).text(e.name).attr("text-anchor","middle").attr("x",(i-80)/2).attr("y",5)}).on("mouseout",function(e){d.select(".title-text").remove()}).append("path").attr("class","line").attr("d",function(e){return f(e.values)}).style("stroke",function(e,t){return m(t)}).style("opacity","0.25").on("mouseover",function(e){v.k(".line").style("opacity","0.1"),v.k(".circle").style("opacity","0.25"),v.j(this).style("opacity","0.85").style("stroke-width","2.5px").style("cursor","pointer")}).on("mouseout",function(e){v.k(".line").style("opacity","0.25"),v.k(".circle").style("opacity","0.85"),v.j(this).style("stroke-width","1.5px").style("cursor","none")}),h.selectAll("circle-group").data(o).enter().append("g").style("fill",function(e,t){return m(t)}).selectAll("circle").data(function(e){return e.values}).enter().append("g").attr("class","circle").on("mouseover",function(e){v.j(this).style("cursor","pointer").append("text").attr("class","text").text("".concat(e.value)).attr("x",function(e){return s(e.description)+5}).attr("y",function(e){return p(e.value)-10})}).on("mouseout",function(e){v.j(this).style("cursor","none").transition().duration(250).selectAll(".text").remove()}).append("circle").attr("cx",function(e){return s(e.description)}).attr("cy",function(e){return p(e.value)}).attr("r",3).style("opacity","0.85").on("mouseover",function(e){v.j(this).transition().duration(250).attr("r",6)}).on("mouseout",function(e){v.j(this).transition().duration(250).attr("r",3)});var g=v.a(s).ticks(5),x=v.b(p).ticks(5);d.append("g").attr("class","x axis").attr("transform","translate(0, ".concat(l-80,")")).call(g),d.append("g").attr("class","y axis").call(x),d.append("text").attr("class","label").attr("x",-l/2).attr("y",-40).attr("transform","rotate(-90)").attr("text-anchor","start").text(c),d.append("text").attr("class","label").attr("x",i/2-40).attr("y",l-40).attr("text-anchor","middle").text(r),d.append("text").attr("class","title").attr("x",i/2-80).attr("y",-40).attr("text-anchor","middle").text(t),d.append("text").attr("class","source").attr("x",i/2+240).attr("y",l-10).attr("text-anchor","middle").text(n);for(var b=100;b>0;)v.j("path.line").remove(),b--},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.drawGraph()}},{key:"componentDidUpdate",value:function(e){Object(E.f)(this.d3Component).selectAll("g").remove(),this.props!==e&&this.drawGraph()}},{key:"render",value:function(){var e=this,t=this.props,a=t.width,n=t.height;return r.a.createElement("div",{className:"line_chart"},r.a.createElement("svg",{ref:function(t){return e.d3Component=t},width:a,height:n}))}}]),t}(r.a.Component)),x=a(28),b=a(125),y=a.n(b),_=a(126),j=a.n(_),w=a(127),k=a.n(w),T=a(128),C=a.n(T),O=a(129),S=a.n(O),N=a(130),F=a.n(N),L=a(131),D=a.n(L),W=a(132),A=a.n(W),G=a(133),B=a.n(G),z=a(134),U=a.n(z),I=a(135),J=a.n(I),M=a(136),H=a.n(M),$=a(137),q=a.n($),K=a(138),P=a.n(K),Q=a(139),R=a.n(Q),V=a(140),X=a.n(V),Y=a(141),Z=a.n(Y),ee=a(142),te=a.n(ee),ae=a(143),ne=a.n(ae),re=a(144),ce=a.n(re),oe=a(145),ie=a.n(oe),le=a(146),se=a.n(le),ue=a(147),pe=a.n(ue),me=a(148),de=a.n(me),fe=a(149),he=a.n(fe),ve=a(150),Ee=a.n(ve),ge=a(151),xe=a.n(ge),be=a(152),ye=a.n(be),_e=a(153),je=a.n(_e),we=a(154),ke=a.n(we),Te=a(155),Ce=a.n(Te),Oe=a(156),Se=a.n(Oe),Ne=a(157),Fe=a.n(Ne),Le=a(158),De=a.n(Le),We=a(159),Ae=a.n(We),Ge=a(160),Be=a.n(Ge),ze=a(161),Ue=a.n(ze),Ie=a(162),Je=a.n(Ie),Me=a(163),He=a.n(Me),$e=a(164),qe=a.n($e),Ke=a(165),Pe=a.n(Ke),Qe=a(166),Re=a.n(Qe),Ve=a(167),Xe=a.n(Ve),Ye=a(168),Ze=a.n(Ye),et=a(169),tt=a.n(et),at=function(e){return e.map(function(e){return{act:e.activation,dropout:e.dropout,init:e.init,value:e.loss,lr:e.lr,lr_reg:e.lr_reg,layers:e.n_layers,opt:e.opt,reg:e.reg,description:e.tentativa,units1:e.units1}}).filter(function(e){return void 0!==e.description&&""!==e.description&&null!==e.description})},nt=function(e,t,a,n){var r,c,o,l,s;switch(parseInt(e,10)){case 1:r=y.a,c=j.a,o=k.a,l=C.a,s=S.a;break;case 2:r=F.a,c=D.a,o=A.a,l=B.a,s=U.a;break;case 3:r=J.a,c=H.a,o=q.a,l=P.a,s=R.a;break;case 4:r=X.a,c=Z.a,o=te.a,l=ne.a,s=ce.a;break;case 5:r=ie.a,c=se.a,o=pe.a,l=de.a,s=he.a;break;case 6:r=Ce.a,c=Se.a,o=Fe.a,l=De.a,s=Ae.a;break;case 7:r=Ee.a,c=xe.a,o=ye.a,l=je.a,s=ke.a;break;case 8:r=Pe.a,c=Re.a,o=Xe.a,l=Ze.a,s=tt.a;break;case 9:r=Be.a,c=Ue.a,o=Je.a,l=He.a,s=qe.a}Object(x.parse)(r,{download:!0,header:!0,dynamicTyping:!0,complete:function(e){t.push({name:"FOLD1",values:at(e.data)}),a.push.apply(a,Object(i.a)(at(e.data))),n()}}),Object(x.parse)(c,{download:!0,header:!0,dynamicTyping:!0,complete:function(e){t.push({name:"FOLD2",values:at(e.data)}),a.push.apply(a,Object(i.a)(at(e.data))),n()}}),Object(x.parse)(o,{download:!0,header:!0,dynamicTyping:!0,complete:function(e){t.push({name:"FOLD3",values:at(e.data)}),a.push.apply(a,Object(i.a)(at(e.data))),n()}}),Object(x.parse)(l,{download:!0,header:!0,dynamicTyping:!0,complete:function(e){t.push({name:"FOLD4",values:at(e.data)}),a.push.apply(a,Object(i.a)(at(e.data))),n()}}),Object(x.parse)(s,{download:!0,header:!0,dynamicTyping:!0,complete:function(e){t.push({name:"FOLD5",values:at(e.data)}),a.push.apply(a,Object(i.a)(at(e.data))),n()}})},rt=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).updateForced=function(){return a.forceUpdate()},a.loadCsv=function(){nt(a.state.base,a.state.ordata,a.state.values,a.updateForced),a.updateGraph()},a.updateWindowDimensions=function(){a.setState({width:window.innerWidth,height:window.innerHeight}),a.updateGraph()},a.handleChange=function(e){a.setState(Object(l.a)({},e.target.name,e.target.value)),a.updateGraph()},a.handleChangeLoad=function(e){a.setState(Object(l.a)({},e.target.name,e.target.value)),a.loadCsv()},a.updateGraph=function(){var e=a.state.ordata,t=a.state,n=t.units,r=t.lr,c=t.act,o=t.init,i=t.opt,l=t.reg,s=t.lr_reg,u=t.layers,p=t.dropout,m=t.fold;"T"!==n&&(e=e.map(function(e){return{name:e.name,values:e.values.filter(function(e){return e.units1===parseFloat(n)})}})),"T"!==r&&(e=e.map(function(e){return{name:e.name,values:e.values.filter(function(e){return e.lr===parseFloat(r)})}})),"T"!==c&&(e=e.map(function(e){return{name:e.name,values:e.values.filter(function(e){return e.act===parseFloat(c)})}})),"T"!==o&&(e=e.map(function(e){return{name:e.name,values:e.values.filter(function(e){return e.init===o})}})),"T"!==i&&(e=e.map(function(e){return{name:e.name,values:e.values.filter(function(e){return e.opt===i})}})),"T"!==l&&(e=e.map(function(e){return{name:e.name,values:e.values.filter(function(e){return e.reg===l})}})),"T"!==s&&(e=e.map(function(e){return{name:e.name,values:e.values.filter(function(e){return e.lr_reg===parseFloat(s)})}})),"T"!==u&&(e=e.map(function(e){return{name:e.name,values:e.values.filter(function(e){return e.layers===parseFloat(u)})}})),"T"!==p&&(e=e.map(function(e){return{name:e.name,values:e.values.filter(function(e){return e.dropout===parseFloat(p)})}})),"T"!==m&&(e=e.filter(function(e){return e.name===m})),a.setState({data:e})},a.state={width:0,height:0,data:[],ordata:[],values:[],units:"T",lr:"T",act:"T",init:"T",opt:"T",reg:"T",lr_reg:"T",layers:"T",dropout:"T",fold:"T",base:"1"},a.loadCsv(),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.values,n=this.props.classes;return r.a.createElement(f.b,null,r.a.createElement(f.d,{title:"Analise sobre redes",subheader:"Escolha os parametros para ver altera\xe7\xf5es no gr\xe1fico"}),r.a.createElement(f.c,null,r.a.createElement("div",{className:n.root},r.a.createElement(f.f,{className:n.formControl},r.a.createElement(f.i,null,"Base analisada"),r.a.createElement(f.k,{value:this.state.base,onChange:this.handleChangeLoad,input:r.a.createElement(f.h,{name:"base",id:"base-helper"})},r.a.createElement(f.j,{value:"1"},"mlp 4uni mf"),r.a.createElement(f.j,{value:"2"},"dmlp 4uni mf"),r.a.createElement(f.j,{value:"3"},"dmlp 4uni tfidf"),r.a.createElement(f.j,{value:"4"},"20ng dmlp"),r.a.createElement(f.j,{value:"5"},"20ng mlp"),r.a.createElement(f.j,{value:"6"},"acm mlp"),r.a.createElement(f.j,{value:"7"},"acm dmlp"),r.a.createElement(f.j,{value:"8"},"webkb mlp"),r.a.createElement(f.j,{value:"9"},"webkb dmlp")),r.a.createElement(f.g,null,"Escolha o valor do parametro")),r.a.createElement(f.e,{style:{width:"100%"}}),r.a.createElement(f.f,{className:n.formControl},r.a.createElement(f.i,null,"fold"),r.a.createElement(f.k,{value:this.state.fold,onChange:this.handleChange,input:r.a.createElement(f.h,{name:"fold",id:"fold-helper"})},r.a.createElement(f.j,{value:"T"},"Todos"),a&&Object(i.a)(new Set(t.map(function(e){return e.name}))).map(function(e,t){return r.a.createElement(f.j,{key:t,value:"".concat(e)},"".concat(e))})),r.a.createElement(f.g,null,"Escolha o valor do parametro")),r.a.createElement(f.f,{className:n.formControl},r.a.createElement(f.i,null,"units"),r.a.createElement(f.k,{value:this.state.units,onChange:this.handleChange,input:r.a.createElement(f.h,{name:"units",id:"units-helper"})},r.a.createElement(f.j,{value:"T"},"Todos"),a&&Object(i.a)(new Set(a.map(function(e){return e.units1}))).map(function(e,t){return r.a.createElement(f.j,{key:t,value:"".concat(e)},"".concat(e))})),r.a.createElement(f.g,null,"Escolha o valor do parametro")),r.a.createElement(f.f,{className:n.formControl},r.a.createElement(f.i,null,"lr"),r.a.createElement(f.k,{value:this.state.lr,onChange:this.handleChange,input:r.a.createElement(f.h,{name:"lr",id:"lr-helper"})},r.a.createElement(f.j,{value:"T"},"Todos"),a&&Object(i.a)(new Set(a.map(function(e){return e.lr}))).map(function(e,t){return r.a.createElement(f.j,{key:t,value:"".concat(e)},"".concat(e))})),r.a.createElement(f.g,null,"Escolha o valor do parametro")),r.a.createElement(f.f,{className:n.formControl},r.a.createElement(f.i,null,"act"),r.a.createElement(f.k,{value:this.state.act,onChange:this.handleChange,input:r.a.createElement(f.h,{name:"act",id:"act-helper"})},r.a.createElement(f.j,{value:"T"},"Todos"),a&&Object(i.a)(new Set(a.map(function(e){return e.act}))).map(function(e,t){return r.a.createElement(f.j,{key:t,value:"".concat(e)},"".concat(e))})),r.a.createElement(f.g,null,"Escolha o valor do parametro")),r.a.createElement(f.f,{className:n.formControl},r.a.createElement(f.i,null,"init"),r.a.createElement(f.k,{value:this.state.init,onChange:this.handleChange,input:r.a.createElement(f.h,{name:"init",id:"init-helper"})},r.a.createElement(f.j,{value:"T"},"Todos"),a&&Object(i.a)(new Set(a.map(function(e){return e.init}))).map(function(e,t){return r.a.createElement(f.j,{key:t,value:"".concat(e)},"".concat(e))})),r.a.createElement(f.g,null,"Escolha o valor do parametro")),r.a.createElement(f.f,{className:n.formControl},r.a.createElement(f.i,null,"opt"),r.a.createElement(f.k,{value:this.state.opt,onChange:this.handleChange,input:r.a.createElement(f.h,{name:"opt",id:"opt-helper"})},r.a.createElement(f.j,{value:"T"},"Todos"),a&&Object(i.a)(new Set(a.map(function(e){return e.opt}))).map(function(e,t){return r.a.createElement(f.j,{key:t,value:"".concat(e)},"".concat(e))})),r.a.createElement(f.g,null,"Escolha o valor do parametro")),r.a.createElement(f.f,{className:n.formControl},r.a.createElement(f.i,null,"reg"),r.a.createElement(f.k,{value:this.state.reg,onChange:this.handleChange,input:r.a.createElement(f.h,{name:"reg",id:"reg-helper"})},r.a.createElement(f.j,{value:"T"},"Todos"),a&&Object(i.a)(new Set(a.map(function(e){return e.reg}))).map(function(e,t){return r.a.createElement(f.j,{key:t,value:"".concat(e)},"".concat(e))})),r.a.createElement(f.g,null,"Escolha o valor do parametro")),r.a.createElement(f.f,{className:n.formControl},r.a.createElement(f.i,null,"lr_reg"),r.a.createElement(f.k,{value:this.state.lr_reg,onChange:this.handleChange,input:r.a.createElement(f.h,{name:"lr_reg",id:"lr_reg-helper"})},r.a.createElement(f.j,{value:"T"},"Todos"),a&&Object(i.a)(new Set(a.map(function(e){return e.lr_reg}))).map(function(e,t){return r.a.createElement(f.j,{key:t,value:"".concat(e)},"".concat(e))})),r.a.createElement(f.g,null,"Escolha o valor do parametro")),r.a.createElement(f.f,{className:n.formControl},r.a.createElement(f.i,null,"layers"),r.a.createElement(f.k,{value:this.state.layers,onChange:this.handleChange,input:r.a.createElement(f.h,{name:"layers",id:"layers-helper"})},r.a.createElement(f.j,{value:"T"},"Todos"),a&&Object(i.a)(new Set(a.map(function(e){return e.layers}))).map(function(e,t){return r.a.createElement(f.j,{key:t,value:"".concat(e)},"".concat(e))})),r.a.createElement(f.g,null,"Escolha o valor do parametro")),r.a.createElement(f.f,{className:n.formControl},r.a.createElement(f.i,null,"dropout"),r.a.createElement(f.k,{value:this.state.dropout,onChange:this.handleChange,input:r.a.createElement(f.h,{name:"dropout",id:"dropout-helper"})},r.a.createElement(f.j,{value:"T"},"Todos"),a&&Object(i.a)(new Set(a.map(function(e){return e.dropout}))).map(function(e,t){return r.a.createElement(f.j,{key:t,value:"".concat(e)},"".concat(e))})),r.a.createElement(f.g,null,"Escolha o valor do parametro")),r.a.createElement("div",{style:{marginBottom:"auto",marginTop:"auto"}},r.a.createElement(f.a,{variant:"raised",color:"primary",onClick:this.updateGraph},"Atualizar"))),r.a.createElement("div",{className:n.root},t&&t.length>0&&r.a.createElement(g,{data:t,width:this.state.width-70,height:450,title:"Taxa de perca por tentativa",source:"",xLabel:"Tentativas",yLabel:"Taxa de erro"}))))}}]),t}(r.a.Component),ct=Object(h.withStyles)(function(e){return{root:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing.unit,minWidth:120,maxWidth:300}}},{withTheme:!0})(rt);o.a.render(r.a.createElement(ct,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[248,2,1]]]);
