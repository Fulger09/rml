(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{307:function(t,e,n){"use strict";n.r(e);var l=n(296),o=n.n(l),c=(n(298),{components:{flatPicker:o.a},data:function(){return{dates:{simple:"2018-07-17",range:"2018-07-17 to 2018-07-19"}}}}),r=n(3),component=Object(r.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4"},[n("small",{staticClass:"d-block text-uppercase font-weight-bold mb-3"},[t._v("Single date")]),t._v(" "),n("base-input",{attrs:{"addon-left-icon":"ni ni-calendar-grid-58"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.focus,o=e.blur;return n("flat-picker",{staticClass:"form-control datepicker",attrs:{config:{allowInput:!0}},on:{"on-open":l,"on-close":o},model:{value:t.dates.simple,callback:function(e){t.$set(t.dates,"simple",e)},expression:"dates.simple"}})}}])})],1),t._v(" "),n("div",{staticClass:"col-md-4 mt-4 mt-md-0"},[n("small",{staticClass:"d-block text-uppercase font-weight-bold mb-3"},[t._v("Date range")]),t._v(" "),n("div",{staticClass:"input-daterange datepicker row align-items-center"},[n("div",{staticClass:"col"},[n("base-input",{attrs:{"addon-left-icon":"ni ni-calendar-grid-58"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.focus,o=e.blur;return n("flat-picker",{staticClass:"form-control datepicker",attrs:{config:{allowInput:!0,mode:"range"}},on:{"on-open":l,"on-close":o},model:{value:t.dates.range,callback:function(e){t.$set(t.dates,"range",e)},expression:"dates.range"}})}}])})],1)])])])},[],!1,null,null,null);e.default=component.exports}}]);