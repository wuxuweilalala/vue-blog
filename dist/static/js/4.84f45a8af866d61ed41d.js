webpackJsonp([4],{HYWu:function(t,e){},epW7:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("ZYmg"),s={data:function(){return{blogs:[],page:1,total:0}},created:function(){var t=this;this.page=parseInt(this.$route.query.page)||1,n.a.getIndexBlogs({page:this.page}).then(function(e){console.log(e),t.blogs=e.data,t.total=e.total,t.page=e.page})},methods:{onPageChange:function(t){var e=this;console.log(t),n.a.getIndexBlogs({page:t}).then(function(a){console.log(a),e.blogs=a.data,e.total=a.total,e.page=a.page,e.$router.push({path:"/",query:{page:t}})})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"index"}},[a("section",{staticClass:"blog-posts"},[t._l(t.blogs,function(e){return a("router-link",{key:e.id,staticClass:"item",attrs:{to:"/detail/"+e.id}},[a("figure",{staticClass:"avatar"},[a("img",{attrs:{src:e.user.avatar,alt:e.user.username}}),t._v(" "),a("figcaption",[t._v(t._s(e.user.username))])]),t._v(" "),a("h3",[t._v(t._s(e.title)+" "),a("span",[t._v(t._s(t._f("formatDate")(e.createdAt)))])]),t._v(" "),a("p",[t._v(t._s(e.description))])])}),t._v(" "),a("section",[a("el-pagination",{attrs:{layout:"prev, pager, next",total:t.total,"current-page":t.page},on:{"current-change":t.onPageChange}})],1)],2)])},staticRenderFns:[]};var r=a("VU/8")(s,o,!1,function(t){a("HYWu")},"data-v-b0522f78",null);e.default=r.exports}});
//# sourceMappingURL=4.84f45a8af866d61ed41d.js.map