(this["webpackJsonpredux-simple-starter"]=this["webpackJsonpredux-simple-starter"]||[]).push([[0],{21:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_Cameron_Desktop_CodingNomads_POOP_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),_Users_Cameron_Desktop_CodingNomads_POOP_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_Users_Cameron_Desktop_CodingNomads_POOP_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9),_Users_Cameron_Desktop_CodingNomads_POOP_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),lodash__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),lodash__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),react_redux__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(7),_selectors_parse_expressions__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(22),react_split_pane__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(13),Viewer=function(_Component){Object(_Users_Cameron_Desktop_CodingNomads_POOP_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(Viewer,_Component);var _super=Object(_Users_Cameron_Desktop_CodingNomads_POOP_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Viewer);function Viewer(){return Object(_Users_Cameron_Desktop_CodingNomads_POOP_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Viewer),_super.apply(this,arguments)}return Object(_Users_Cameron_Desktop_CodingNomads_POOP_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Viewer,[{key:"evaluateExpressions",value:function evaluateExpressions(expressions){var formattedExpressions=lodash__WEBPACK_IMPORTED_MODULE_4___default.a.mapValues(expressions,(function(expression){var result=eval(expression);return result&&result.type?result:lodash__WEBPACK_IMPORTED_MODULE_4___default.a.isFunction(result)&&result.name?react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i",null,"Function ",result.name):lodash__WEBPACK_IMPORTED_MODULE_4___default.a.isBoolean(result)?result?"True":"False":lodash__WEBPACK_IMPORTED_MODULE_4___default.a.isObject(result)||lodash__WEBPACK_IMPORTED_MODULE_4___default.a.isArray(result)?JSON.stringify(result):result}));return lodash__WEBPACK_IMPORTED_MODULE_4___default.a.map(formattedExpressions,(function(_,e){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,_)}))}},{key:"renderExpressions",value:function(_){return this.evaluateExpressions(this.props.expressions)}},{key:"render",value:function(){var _=window.innerHeight/1.3;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_split_pane__WEBPACK_IMPORTED_MODULE_8__.a,{split:"horizontal",defaultSize:_,className:"viewer"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"result"},this.renderExpressions(this.props.code)),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"errors"},this.props.errors))}}]),Viewer}(react__WEBPACK_IMPORTED_MODULE_5__.Component);function mapStateToProps(_){var e,r;try{e=Object(_selectors_parse_expressions__WEBPACK_IMPORTED_MODULE_7__.a)(_)}catch(a){r=a.toString()}return{expressions:e,errors:r}}__webpack_exports__.a=Object(react_redux__WEBPACK_IMPORTED_MODULE_6__.b)(mapStateToProps)(Viewer)},22:function(module,__webpack_exports__,__webpack_require__){"use strict";var lodash__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),lodash__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__),reselect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(23),babel_standalone__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(24),babel_standalone__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(babel_standalone__WEBPACK_IMPORTED_MODULE_2__),esprima__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(25),esprima__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(esprima__WEBPACK_IMPORTED_MODULE_3__),codeSelector=function(_){return _.code},OPEN_DELIMITERS=["(","{","[","`"],CLOSE_DELIMITERS=[")","}","]","`"],DELIMITER_MAP={")":"(","}":"{","]":"[","`":"`"},findDelimiters=function(_,e){var r=_.column;return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.intersection(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.takeRight(e,e.length-r),OPEN_DELIMITERS).length},parseExpressions=function parseExpressions(code){var transformedCode=Object(babel_standalone__WEBPACK_IMPORTED_MODULE_2__.transform)(code,{presets:["react"]}).code;console.log("transformedCode",transformedCode);var codeByLine=transformedCode.split("\n");console.log("codeByLine",codeByLine);var tokenized=esprima__WEBPACK_IMPORTED_MODULE_3___default.a.tokenize(transformedCode,{loc:!0}),parens={"(":0,"{":0,"[":0},wasOpen=!1,exp=lodash__WEBPACK_IMPORTED_MODULE_0___default.a.reduce(tokenized,(function(_,e,r){var a=e.value,t=e.loc.end,s=t.line,n=codeByLine[s-1],o=findDelimiters(t,n);t.column,n.length;return _[s]?_:(OPEN_DELIMITERS.includes(a)&&(parens[a]+=1,wasOpen=!0),CLOSE_DELIMITERS.includes(a)&&(parens[DELIMITER_MAP[a]]-=1),!o&&wasOpen&&lodash__WEBPACK_IMPORTED_MODULE_0___default.a.every(parens,(function(_){return 0===_}))?(wasOpen=!1,_[s]=lodash__WEBPACK_IMPORTED_MODULE_0___default.a.take(codeByLine,s).join("\n"),_):!o&&lodash__WEBPACK_IMPORTED_MODULE_0___default.a.every(parens,(function(_){return 0===_}))?(_[s]=lodash__WEBPACK_IMPORTED_MODULE_0___default.a.take(codeByLine,s).join("\n"),_):_)}),{});return eval(transformedCode),exp};__webpack_exports__.a=Object(reselect__WEBPACK_IMPORTED_MODULE_1__.a)(codeSelector,parseExpressions)},26:function(_,e,r){_.exports=r(46)},46:function(_,e,r){"use strict";r.r(e);var a={};r.r(a),r.d(a,"updateCode",(function(){return m}));var t=r(0),s=r.n(t),n=r(10),o=r.n(n),l=r(7),E=r(4),u=r(5),i=r(6),d=r(9),c=r(8),p=r(13),O=r(2),P=r.n(O),D=r(20),M=r.n(D);r(43);function m(_){return console.clear(),{type:"did_update_code",payload:_}}var C=function(_){Object(d.a)(r,_);var e=Object(c.a)(r);function r(){return Object(u.a)(this,r),e.apply(this,arguments)}return Object(i.a)(r,[{key:"onCodeChange",value:function(_){this.props.updateCode(_)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(M.a,{value:this.props.code,onChange:this.onCodeChange.bind(this),options:{mode:"jsx",lineNumbers:!0,tabSize:2}}))}}]),r}(t.Component);var b=Object(l.b)((function(_){return{code:_.code}}),a)(C),f=r(21),L=function(_){Object(d.a)(r,_);var e=Object(c.a)(r);function r(){return Object(u.a)(this,r),e.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){var _=window.innerHeight;return s.a.createElement(p.a,{split:"vertical",defaultSize:_},s.a.createElement(b,null),s.a.createElement(f.a,null))}}]),r}(t.Component),I=Object(E.c)({code:function(){var _=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"did_update_code":return e.payload;default:return _}}});P.a.extend(window,{_:P.a,React:s.a,Component:t.Component});var h=Object(E.a)()(E.d);o.a.render(s.a.createElement(l.a,{store:h(I)},s.a.createElement(L,null)),document.querySelector(".render"))}},[[26,1,2]]]);
//# sourceMappingURL=main.28cc4ec4.chunk.js.map