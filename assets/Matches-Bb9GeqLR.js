import{r as W,j as d}from"./index-BkUI4s4X.js";import{i as A,f as B}from"./information-DoIo4D-k.js";const R={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},V=(t,e,n)=>{let r;const a=R[t];return typeof a=="string"?r=a:e===1?r=a.one:r=a.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function E(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const I={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},J={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},$={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},z={date:E({formats:I,defaultWidth:"full"}),time:E({formats:J,defaultWidth:"full"}),dateTime:E({formats:$,defaultWidth:"full"})},U={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},K=(t,e,n,r)=>U[t];function O(t){return(e,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let a;if(r==="formatting"&&t.formattingValues){const s=t.defaultFormattingWidth||t.defaultWidth,c=n!=null&&n.width?String(n.width):s;a=t.formattingValues[c]||t.formattingValues[s]}else{const s=t.defaultWidth,c=n!=null&&n.width?String(n.width):t.defaultWidth;a=t.values[c]||t.values[s]}const i=t.argumentCallback?t.argumentCallback(e):e;return a[i]}}const Z={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ee={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},te={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ne={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},re={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ae={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ie=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},se={ordinalNumber:ie,era:O({values:Z,defaultWidth:"wide"}),quarter:O({values:ee,defaultWidth:"wide",argumentCallback:t=>t-1}),month:O({values:te,defaultWidth:"wide"}),day:O({values:ne,defaultWidth:"wide"}),dayPeriod:O({values:re,defaultWidth:"wide",formattingValues:ae,defaultFormattingWidth:"wide"})};function k(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;const s=i[0],c=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],m=Array.isArray(c)?ce(c,g=>g.test(s)):oe(c,g=>g.test(s));let f;f=t.valueCallback?t.valueCallback(m):m,f=n.valueCallback?n.valueCallback(f):f;const u=e.slice(s.length);return{value:f,rest:u}}}function oe(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function ce(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function ue(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const a=r[0],i=e.match(t.parsePattern);if(!i)return null;let s=t.valueCallback?t.valueCallback(i[0]):i[0];s=n.valueCallback?n.valueCallback(s):s;const c=e.slice(a.length);return{value:s,rest:c}}}const de=/^(\d+)(th|st|nd|rd)?/i,me=/\d+/i,fe={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},he={any:[/^b/i,/^(a|c)/i]},le={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},ge={any:[/1/i,/2/i,/3/i,/4/i]},we={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ye={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},be={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},xe={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},ve={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Me={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Pe={ordinalNumber:ue({matchPattern:de,parsePattern:me,valueCallback:t=>parseInt(t,10)}),era:k({matchPatterns:fe,defaultMatchWidth:"wide",parsePatterns:he,defaultParseWidth:"any"}),quarter:k({matchPatterns:le,defaultMatchWidth:"wide",parsePatterns:ge,defaultParseWidth:"any",valueCallback:t=>t+1}),month:k({matchPatterns:we,defaultMatchWidth:"wide",parsePatterns:ye,defaultParseWidth:"any"}),day:k({matchPatterns:be,defaultMatchWidth:"wide",parsePatterns:xe,defaultParseWidth:"any"}),dayPeriod:k({matchPatterns:ve,defaultMatchWidth:"any",parsePatterns:Me,defaultParseWidth:"any"})},Oe={code:"en-US",formatDistance:V,formatLong:z,formatRelative:K,localize:se,match:Pe,options:{weekStartsOn:0,firstWeekContainsDate:1}};let ke={};function Y(){return ke}const p=6048e5,De=864e5,N=Symbol.for("constructDateFrom");function x(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&N in t?t[N](e):t instanceof Date?new t.constructor(e):new Date(e)}function y(t,e){return x(e||t,t)}function F(t){const e=y(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function We(t,...e){const n=x.bind(null,e.find(r=>typeof r=="object"));return e.map(n)}function j(t,e){const n=y(t,e==null?void 0:e.in);return n.setHours(0,0,0,0),n}function Se(t,e,n){const[r,a]=We(n==null?void 0:n.in,t,e),i=j(r),s=j(a),c=+i-F(i),m=+s-F(s);return Math.round((c-m)/De)}function Ye(t,e){const n=y(t,e==null?void 0:e.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}function Te(t,e){const n=y(t,e==null?void 0:e.in);return Se(n,Ye(n))+1}function D(t,e){var c,m,f,u;const n=Y(),r=(e==null?void 0:e.weekStartsOn)??((m=(c=e==null?void 0:e.locale)==null?void 0:c.options)==null?void 0:m.weekStartsOn)??n.weekStartsOn??((u=(f=n.locale)==null?void 0:f.options)==null?void 0:u.weekStartsOn)??0,a=y(t,e==null?void 0:e.in),i=a.getDay(),s=(i<r?7:0)+i-r;return a.setDate(a.getDate()-s),a.setHours(0,0,0,0),a}function S(t,e){return D(t,{...e,weekStartsOn:1})}function L(t,e){const n=y(t,e==null?void 0:e.in),r=n.getFullYear(),a=x(n,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const i=S(a),s=x(n,0);s.setFullYear(r,0,4),s.setHours(0,0,0,0);const c=S(s);return n.getTime()>=i.getTime()?r+1:n.getTime()>=c.getTime()?r:r-1}function Ee(t,e){const n=L(t,e),r=x(t,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),S(r)}function Ne(t,e){const n=y(t,e==null?void 0:e.in),r=+S(n)-+Ee(n);return Math.round(r/p)+1}function X(t,e){var u,g,v,l;const n=y(t,e==null?void 0:e.in),r=n.getFullYear(),a=Y(),i=(e==null?void 0:e.firstWeekContainsDate)??((g=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:g.firstWeekContainsDate)??a.firstWeekContainsDate??((l=(v=a.locale)==null?void 0:v.options)==null?void 0:l.firstWeekContainsDate)??1,s=x((e==null?void 0:e.in)||t,0);s.setFullYear(r+1,0,i),s.setHours(0,0,0,0);const c=D(s,e),m=x((e==null?void 0:e.in)||t,0);m.setFullYear(r,0,i),m.setHours(0,0,0,0);const f=D(m,e);return+n>=+c?r+1:+n>=+f?r:r-1}function Fe(t,e){var c,m,f,u;const n=Y(),r=(e==null?void 0:e.firstWeekContainsDate)??((m=(c=e==null?void 0:e.locale)==null?void 0:c.options)==null?void 0:m.firstWeekContainsDate)??n.firstWeekContainsDate??((u=(f=n.locale)==null?void 0:f.options)==null?void 0:u.firstWeekContainsDate)??1,a=X(t,e),i=x((e==null?void 0:e.in)||t,0);return i.setFullYear(a,0,r),i.setHours(0,0,0,0),D(i,e)}function je(t,e){const n=y(t,e==null?void 0:e.in),r=+D(n,e)-+Fe(n,e);return Math.round(r/p)+1}function o(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const b={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return o(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):o(n+1,2)},d(t,e){return o(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return o(t.getHours()%12||12,e.length)},H(t,e){return o(t.getHours(),e.length)},m(t,e){return o(t.getMinutes(),e.length)},s(t,e){return o(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),a=Math.trunc(r*Math.pow(10,n-3));return o(a,e.length)}},P={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},C={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return b.y(t,e)},Y:function(t,e,n,r){const a=X(t,r),i=a>0?a:1-a;if(e==="YY"){const s=i%100;return o(s,2)}return e==="Yo"?n.ordinalNumber(i,{unit:"year"}):o(i,e.length)},R:function(t,e){const n=L(t);return o(n,e.length)},u:function(t,e){const n=t.getFullYear();return o(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return o(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return o(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return b.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return o(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=je(t,r);return e==="wo"?n.ordinalNumber(a,{unit:"week"}):o(a,e.length)},I:function(t,e,n){const r=Ne(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):o(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):b.d(t,e)},D:function(t,e,n){const r=Te(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):o(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return o(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return o(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=r===0?7:r;switch(e){case"i":return String(a);case"ii":return o(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(r===12?a=P.noon:r===0?a=P.midnight:a=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(r>=17?a=P.evening:r>=12?a=P.afternoon:r>=4?a=P.morning:a=P.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return b.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):b.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):o(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):o(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):b.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):b.s(t,e)},S:function(t,e){return b.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return _(r);case"XXXX":case"XX":return M(r);case"XXXXX":case"XXX":default:return M(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return _(r);case"xxxx":case"xx":return M(r);case"xxxxx":case"xxx":default:return M(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+q(r,":");case"OOOO":default:return"GMT"+M(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+q(r,":");case"zzzz":default:return"GMT"+M(r,":")}},t:function(t,e,n){const r=Math.trunc(+t/1e3);return o(r,e.length)},T:function(t,e,n){return o(+t,e.length)}};function q(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),i=r%60;return i===0?n+String(a):n+String(a)+e+o(i,2)}function _(t,e){return t%60===0?(t>0?"-":"+")+o(Math.abs(t)/60,2):M(t,e)}function M(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=o(Math.trunc(r/60),2),i=o(r%60,2);return n+a+e+i}const H=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},G=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Ce=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return H(t,e);let i;switch(r){case"P":i=e.dateTime({width:"short"});break;case"PP":i=e.dateTime({width:"medium"});break;case"PPP":i=e.dateTime({width:"long"});break;case"PPPP":default:i=e.dateTime({width:"full"});break}return i.replace("{{date}}",H(r,e)).replace("{{time}}",G(a,e))},qe={p:G,P:Ce},_e=/^D+$/,He=/^Y+$/,Qe=["D","DD","YY","YYYY"];function pe(t){return _e.test(t)}function Le(t){return He.test(t)}function Xe(t,e,n){const r=Ge(t,e,n);if(console.warn(r),Qe.includes(t))throw new RangeError(r)}function Ge(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}function Ae(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Be(t){return!(!Ae(t)&&typeof t!="number"||isNaN(+y(t)))}const Re=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ve=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ie=/^'([^]*?)'?$/,Je=/''/g,$e=/[a-zA-Z]/;function Q(t,e,n){var u,g,v,l;const r=Y(),a=r.locale??Oe,i=r.firstWeekContainsDate??((g=(u=r.locale)==null?void 0:u.options)==null?void 0:g.firstWeekContainsDate)??1,s=r.weekStartsOn??((l=(v=r.locale)==null?void 0:v.options)==null?void 0:l.weekStartsOn)??0,c=y(t,n==null?void 0:n.in);if(!Be(c))throw new RangeError("Invalid time value");let m=e.match(Ve).map(h=>{const w=h[0];if(w==="p"||w==="P"){const T=qe[w];return T(h,a.formatLong)}return h}).join("").match(Re).map(h=>{if(h==="''")return{isToken:!1,value:"'"};const w=h[0];if(w==="'")return{isToken:!1,value:ze(h)};if(C[w])return{isToken:!0,value:h};if(w.match($e))throw new RangeError("Format string contains an unescaped latin alphabet character `"+w+"`");return{isToken:!1,value:h}});a.localize.preprocessor&&(m=a.localize.preprocessor(c,m));const f={firstWeekContainsDate:i,weekStartsOn:s,locale:a};return m.map(h=>{if(!h.isToken)return h.value;const w=h.value;(Le(w)||pe(w))&&Xe(w,e,String(t));const T=C[w[0]];return T(c,w,a.localize,f)}).join("")}function ze(t){const e=t.match(Ie);return e?e[1].replace(Je,"'"):t}function Ze(){var f;const[t,e]=W.useState(1),n=38,[r,a]=W.useState({}),[i,s]=W.useState({});W.useEffect(()=>{let u={},g={};A.teams.forEach(l=>{u[l.id]=l.name,g[l.id]=l.short_name}),a({teamName:u,teamLogo:g});const v=B.reduce((l,h)=>(l[h.event]||(l[h.event]=[]),l[h.event].push(h),l),{});s(v)},[]);const c=()=>{t>1&&e(t-1)},m=()=>{t<n&&e(t+1)};return d.jsx(d.Fragment,{children:d.jsxs("div",{className:"matchTable",children:[d.jsxs("h2",{className:"mathTitle",children:[d.jsx("div",{className:"prev",children:d.jsx("i",{className:"bx bxs-left-arrow",onClick:c})}),d.jsxs("div",{children:["Matchday ",t," of ",n]}),d.jsx("div",{className:"next",children:d.jsx("i",{className:"bx bxs-right-arrow",onClick:m})})]}),(f=i[t])==null?void 0:f.map((u,g)=>d.jsxs("div",{className:"eachEvent",children:[d.jsxs("div",{className:"teamInfo",children:[d.jsxs("div",{className:"teamA",children:[d.jsx("img",{className:"club-logo",src:`img/logo/${r.teamLogo[u.team_a]}.png`,alt:r.teamName[u.team_a]}),d.jsx("div",{className:"teamAName",children:r.teamName[u.team_a]}),d.jsx("div",{className:"teamScore",children:u.team_a_score})]}),d.jsxs("div",{className:"teamH",children:[d.jsx("img",{className:"club-logo",src:`img/logo/${r.teamLogo[u.team_h]}.png`,alt:r.teamName[u.team_h]}),d.jsx("div",{className:"teamHName",children:r.teamName[u.team_h]}),d.jsx("div",{className:"teamScore",children:u.team_h_score})]})]}),d.jsxs("div",{className:"matchTime",children:[Q(new Date(u.kickoff_time),"EEE, MMM d"),d.jsx("div",{children:Q(new Date(u.kickoff_time),"h:mm a")})]})]},g))]})})}export{Ze as default};
