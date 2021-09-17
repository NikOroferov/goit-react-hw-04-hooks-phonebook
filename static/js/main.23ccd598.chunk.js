(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Jagatai Khan","number":"6556-083-12"},{"id":"id-2","name":"Lion el Jonson","number":"6556-464-07"},{"id":"id-3","name":"Rogal Dorn","number":"6555-701-13"},{"id":"id-4","name":"Robaut Guilliman","number":"6556-111-12"}]')},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(4),r=n.n(s),o=(n(10),n(2)),i=(n(11),n(12),n(18)),u=n(0);function l(e){var t=e.onSubmit,n=Object(c.useState)(""),a=Object(o.a)(n,2),s=a[0],r=a[1],l=Object(c.useState)(""),b=Object(o.a)(l,2),j=b[0],m=b[1],d=Object(c.useState)(""),h=Object(o.a)(d,2),f=h[0],O=h[1],p={name:s,number:j,id:f},x=function(e){var t=e.target,n=t.name,c=t.value;switch(O(Object(i.a)()),n){case"name":r(c);break;case"number":m(c)}},_=function(){r(""),m("")};return Object(u.jsxs)("form",{className:"submit__form",onSubmit:function(e){e.preventDefault(),t(p),_()},children:[Object(u.jsxs)("label",{className:"form__label",children:[Object(u.jsx)("h3",{children:"Name"}),Object(u.jsx)("input",{className:"form__input",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:s,onChange:x})]}),Object(u.jsxs)("label",{className:"form__label",children:[Object(u.jsx)("h3",{children:"Number"}),Object(u.jsx)("input",{className:"form__input",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:j,onChange:x})]}),Object(u.jsx)("button",{className:"form__button",type:"submit",children:"Add contact"})]})}n(14);function b(e){var t=e.value,n=e.onInput;return Object(u.jsxs)("label",{children:[Object(u.jsx)("h3",{children:"Find contact by name"}),Object(u.jsx)("input",{className:"filter__input",type:"text",value:t,onChange:n})]})}n(15);function j(e){var t=e.contacts,n=e.handleDeleteContact;return Object(u.jsx)("ul",{className:"contacts__list",children:t.map((function(e){var t=e.id,c=e.name,a=e.number;return Object(u.jsxs)("li",{className:"contacts__item",children:[Object(u.jsx)("p",{className:"contacts__name",children:c}),Object(u.jsx)("p",{children:a}),Object(u.jsx)("button",{className:"delete__btn",onClick:function(){return n(t)},children:"Delete contact"})]},t)}))})}var m=n(5);function d(){var e=Object(c.useState)((function(){var e;return null!==(e=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==e?e:m})),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(o.a)(s,2),i=r[0],d=r[1];Object(c.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);return Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsxs)("section",{className:"section",children:[Object(u.jsx)("h1",{children:"Phonebook"}),Object(u.jsx)(l,{onSubmit:function(e){void 0===n.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?a((function(t){return t.concat(e)})):alert("".concat(e.name," is alredy in the contacts list"))}})]}),Object(u.jsxs)("section",{className:"section",children:[Object(u.jsx)("h2",{children:"Contacts"}),Object(u.jsx)(b,{value:i,onInput:function(e){d(e.target.value)}}),Object(u.jsx)(j,{contacts:function(){var e=i.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),handleDeleteContact:function(e){a((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})]})}r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.23ccd598.chunk.js.map