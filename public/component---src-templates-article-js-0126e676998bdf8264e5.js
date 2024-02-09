(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{330:function(e,t,r){"use strict";r.r(t);var n=r(68),a=r.n(n);r(9),r(95),r(33),r(22),r(28),r(1);function i(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}var o={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function u(e){return function(t){var r=t||{},n=r.width?String(r.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var s={date:u({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:u({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:u({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},c={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};r(352),r(3),r(4);function l(e){return function(t,r){var n,a=r||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=a.width?String(a.width):i;n=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,s=a.width?String(a.width):e.defaultWidth;n=e.values[s]||e.values[u]}return n[e.argumentCallback?e.argumentCallback(t):t]}}var d={ordinalNumber:function(e,t){var r=Number(e),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},era:l({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:l({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:l({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:l({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:l({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};r(357);function h(e){return function(t,r){var n=String(t),a=r||{},i=a.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=n.match(o);if(!u)return null;var s,c=u[0],l=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(l)?l.findIndex(function(e){return e.test(n)}):function(e,t){for(var r in e)if(e.hasOwnProperty(r)&&t(e[r]))return r}(l,function(e){return e.test(n)}),s=e.valueCallback?e.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:n.slice(c.length)}}}var m,f={formatDistance:function(e,t,r){var n;return r=r||{},n="string"==typeof o[e]?o[e]:1===t?o[e].one:o[e].other.replace("{{count}}",t),r.addSuffix?r.comparison>0?"in "+n:n+" ago":n},formatLong:s,formatRelative:function(e,t,r,n){return c[e]},localize:d,match:{ordinalNumber:(m={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var r=String(e),n=t||{},a=r.match(m.matchPattern);if(!a)return null;var i=a[0],o=r.match(m.parsePattern);if(!o)return null;var u=m.valueCallback?m.valueCallback(o[0]):o[0];return{value:u=n.valueCallback?n.valueCallback(u):u,rest:r.slice(i.length)}}),era:h({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:h({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:h({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:h({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:h({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function g(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function w(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");return function(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=i(e).getTime(),n=g(t);return new Date(r+n)}(e,-g(t))}function v(e,t){for(var r=e<0?"-":"",n=Math.abs(e).toString();n.length<t;)n="0"+n;return r+n}var p={y:function(e,t){var r=e.getUTCFullYear(),n=r>0?r:1-r;return v("yy"===t?n%100:n,t.length)},M:function(e,t){var r=e.getUTCMonth();return"M"===t?String(r+1):v(r+1,2)},d:function(e,t){return v(e.getUTCDate(),t.length)},a:function(e,t){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return r.toUpperCase();case"aaaaa":return r[0];case"aaaa":default:return"am"===r?"a.m.":"p.m."}},h:function(e,t){return v(e.getUTCHours()%12||12,t.length)},H:function(e,t){return v(e.getUTCHours(),t.length)},m:function(e,t){return v(e.getUTCMinutes(),t.length)},s:function(e,t){return v(e.getUTCSeconds(),t.length)},S:function(e,t){var r=t.length,n=e.getUTCMilliseconds();return v(Math.floor(n*Math.pow(10,r-3)),t.length)}},y=864e5;function b(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=i(e),r=t.getUTCDay(),n=(r<1?7:0)+r-1;return t.setUTCDate(t.getUTCDate()-n),t.setUTCHours(0,0,0,0),t}function T(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=i(e),r=t.getUTCFullYear(),n=new Date(0);n.setUTCFullYear(r+1,0,4),n.setUTCHours(0,0,0,0);var a=b(n),o=new Date(0);o.setUTCFullYear(r,0,4),o.setUTCHours(0,0,0,0);var u=b(o);return t.getTime()>=a.getTime()?r+1:t.getTime()>=u.getTime()?r:r-1}var M=6048e5;function C(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=i(e),r=b(t).getTime()-function(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=T(e),r=new Date(0);return r.setUTCFullYear(t,0,4),r.setUTCHours(0,0,0,0),b(r)}(t).getTime();return Math.round(r/M)+1}function E(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var r=t||{},n=r.locale,a=n&&n.options&&n.options.weekStartsOn,o=null==a?0:g(a),u=null==r.weekStartsOn?o:g(r.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=i(e),c=s.getUTCDay(),l=(c<u?7:0)+c-u;return s.setUTCDate(s.getUTCDate()-l),s.setUTCHours(0,0,0,0),s}function N(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var r=i(e,t),n=r.getUTCFullYear(),a=t||{},o=a.locale,u=o&&o.options&&o.options.firstWeekContainsDate,s=null==u?1:g(u),c=null==a.firstWeekContainsDate?s:g(a.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(n+1,0,c),l.setUTCHours(0,0,0,0);var d=E(l,t),h=new Date(0);h.setUTCFullYear(n,0,c),h.setUTCHours(0,0,0,0);var m=E(h,t);return r.getTime()>=d.getTime()?n+1:r.getTime()>=m.getTime()?n:n-1}var x=6048e5;function P(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var r=i(e),n=E(r,t).getTime()-function(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var r=t||{},n=r.locale,a=n&&n.options&&n.options.firstWeekContainsDate,i=null==a?1:g(a),o=null==r.firstWeekContainsDate?i:g(r.firstWeekContainsDate),u=N(e,t),s=new Date(0);return s.setUTCFullYear(u,0,o),s.setUTCHours(0,0,0,0),E(s,t)}(r,t).getTime();return Math.round(n/x)+1}var D="midnight",S="noon",U="morning",k="afternoon",_="evening",q="night";function W(e,t){var r=e>0?"-":"+",n=Math.abs(e),a=Math.floor(n/60),i=n%60;if(0===i)return r+String(a);var o=t||"";return r+String(a)+o+v(i,2)}function Y(e,t){return e%60==0?(e>0?"-":"+")+v(Math.abs(e)/60,2):O(e,t)}function O(e,t){var r=t||"",n=e>0?"-":"+",a=Math.abs(e);return n+v(Math.floor(a/60),2)+r+v(a%60,2)}var A={G:function(e,t,r){var n=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(e,t,r){if("yo"===t){var n=e.getUTCFullYear(),a=n>0?n:1-n;return r.ordinalNumber(a,{unit:"year"})}return p.y(e,t)},Y:function(e,t,r,n){var a=N(e,n),i=a>0?a:1-a;return"YY"===t?v(i%100,2):"Yo"===t?r.ordinalNumber(i,{unit:"year"}):v(i,t.length)},R:function(e,t){return v(T(e),t.length)},u:function(e,t){return v(e.getUTCFullYear(),t.length)},Q:function(e,t,r){var n=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return v(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,t,r){var n=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return v(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,t,r){var n=e.getUTCMonth();switch(t){case"M":case"MM":return p.M(e,t);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(e,t,r){var n=e.getUTCMonth();switch(t){case"L":return String(n+1);case"LL":return v(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(e,t,r,n){var a=P(e,n);return"wo"===t?r.ordinalNumber(a,{unit:"week"}):v(a,t.length)},I:function(e,t,r){var n=C(e);return"Io"===t?r.ordinalNumber(n,{unit:"week"}):v(n,t.length)},d:function(e,t,r){return"do"===t?r.ordinalNumber(e.getUTCDate(),{unit:"date"}):p.d(e,t)},D:function(e,t,r){var n=function(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=i(e),r=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var n=r-t.getTime();return Math.floor(n/y)+1}(e);return"Do"===t?r.ordinalNumber(n,{unit:"dayOfYear"}):v(n,t.length)},E:function(e,t,r){var n=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(e,t,r,n){var a=e.getUTCDay(),i=(a-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return v(i,2);case"eo":return r.ordinalNumber(i,{unit:"day"});case"eee":return r.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(a,{width:"short",context:"formatting"});case"eeee":default:return r.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,r,n){var a=e.getUTCDay(),i=(a-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return v(i,t.length);case"co":return r.ordinalNumber(i,{unit:"day"});case"ccc":return r.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(a,{width:"narrow",context:"standalone"});case"cccccc":return r.day(a,{width:"short",context:"standalone"});case"cccc":default:return r.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,r){var n=e.getUTCDay(),a=0===n?7:n;switch(t){case"i":return String(a);case"ii":return v(a,t.length);case"io":return r.ordinalNumber(a,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(e,t,r){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaaaa":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(e,t,r){var n,a=e.getUTCHours();switch(n=12===a?S:0===a?D:a/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbbbb":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(e,t,r){var n,a=e.getUTCHours();switch(n=a>=17?_:a>=12?k:a>=4?U:q,t){case"B":case"BB":case"BBB":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(e,t,r){if("ho"===t){var n=e.getUTCHours()%12;return 0===n&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return p.h(e,t)},H:function(e,t,r){return"Ho"===t?r.ordinalNumber(e.getUTCHours(),{unit:"hour"}):p.H(e,t)},K:function(e,t,r){var n=e.getUTCHours()%12;return"Ko"===t?r.ordinalNumber(n,{unit:"hour"}):v(n,t.length)},k:function(e,t,r){var n=e.getUTCHours();return 0===n&&(n=24),"ko"===t?r.ordinalNumber(n,{unit:"hour"}):v(n,t.length)},m:function(e,t,r){return"mo"===t?r.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):p.m(e,t)},s:function(e,t,r){return"so"===t?r.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):p.s(e,t)},S:function(e,t){return p.S(e,t)},X:function(e,t,r,n){var a=(n._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return Y(a);case"XXXX":case"XX":return O(a);case"XXXXX":case"XXX":default:return O(a,":")}},x:function(e,t,r,n){var a=(n._originalDate||e).getTimezoneOffset();switch(t){case"x":return Y(a);case"xxxx":case"xx":return O(a);case"xxxxx":case"xxx":default:return O(a,":")}},O:function(e,t,r,n){var a=(n._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+W(a,":");case"OOOO":default:return"GMT"+O(a,":")}},z:function(e,t,r,n){var a=(n._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+W(a,":");case"zzzz":default:return"GMT"+O(a,":")}},t:function(e,t,r,n){var a=n._originalDate||e;return v(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,r,n){return v((n._originalDate||e).getTime(),t.length)}};function I(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function F(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var L={p:F,P:function(e,t){var r,n=e.match(/(P+)(p+)?/),a=n[1],i=n[2];if(!i)return I(e,t);switch(a){case"P":r=t.dateTime({width:"short"});break;case"PP":r=t.dateTime({width:"medium"});break;case"PPP":r=t.dateTime({width:"long"});break;case"PPPP":default:r=t.dateTime({width:"full"})}return r.replace("{{date}}",I(a,t)).replace("{{time}}",F(i,t))}},H=6e4;r(18);var j=["D","DD"],z=["YY","YYYY"];function X(e){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===e)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===e)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===e)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}var G=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Q=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,R=/^'(.*?)'?$/,B=/''/g,J=/[a-zA-Z]/;function V(e,t,r){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=String(t),a=r||{},o=a.locale||f,u=o.options&&o.options.firstWeekContainsDate,s=null==u?1:g(u),c=null==a.firstWeekContainsDate?s:g(a.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=o.options&&o.options.weekStartsOn,d=null==l?0:g(l),h=null==a.weekStartsOn?d:g(a.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var m=i(e);if(!function(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=i(e);return!isNaN(t)}(m))throw new RangeError("Invalid time value");var v=w(m,function(e){var t=new Date(e.getTime()),r=t.getTimezoneOffset();t.setSeconds(0,0);var n=t.getTime()%H;return r*H+n}(m)),p={firstWeekContainsDate:c,weekStartsOn:h,locale:o,_originalDate:m};return n.match(Q).map(function(e){var t=e[0];return"p"===t||"P"===t?(0,L[t])(e,o.formatLong,p):e}).join("").match(G).map(function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return e.match(R)[1].replace(B,"'");var r,n=A[t];if(n)return a.useAdditionalWeekYearTokens||(r=e,-1===z.indexOf(r))||X(e),!a.useAdditionalDayOfYearTokens&&function(e){return-1!==j.indexOf(e)}(e)&&X(e),n(v,e,o.localize,p);if(t.match(J))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return e}).join("")}var K=r(0),$=r.n(K),Z=r(356);r(303);function ee(e){var t=e.data,r=e.pageContext,n=t.markdownRemark,i=n.frontmatter,o=n.html,u=r.relatedArticles.filter(function(e){return e.title!==i.title}),s=Array.isArray(u)&&u.length>0,c=a()("up-articles__article",{"up-articles__article--no-related":!s});return $.a.createElement("div",{className:"up-articles"},$.a.createElement("div",{className:"up-articles__inner"},$.a.createElement("article",{className:c},$.a.createElement("div",{className:"up-articles__header"},$.a.createElement("h1",{className:"up-articles__title"},i.title),$.a.createElement("div",{className:"up-articles__date"},V(new Date(i.date),"MMMM yyyy"))),i.featuredImage&&$.a.createElement("div",{className:"up-articles__image"},$.a.createElement("img",{src:i.featuredImage.publicURL,alt:""})),i.subtitle&&$.a.createElement("h2",{className:"up-articles__subtitle"},i.subtitle),$.a.createElement("div",{className:"up-articles__content",dangerouslySetInnerHTML:{__html:o}})),s&&$.a.createElement(Z.a,{list:u,subTitle:"Related Articles",title:"See other similar articles"})))}r.d(t,"default",function(){return ee}),r.d(t,"query",function(){return te});var te="3183263611"},352:function(e,t,r){"use strict";var n=r(12),a=r(36),i=r(54),o=r(120),u=r(72),s=r(13),c=r(74).f,l=r(98).f,d=r(20).f,h=r(179).trim,m=n.Number,f=m,g=m.prototype,w="Number"==i(r(70)(g)),v="trim"in String.prototype,p=function(e){var t=u(e,!1);if("string"==typeof t&&t.length>2){var r,n,a,i=(t=v?t.trim():h(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+t}for(var o,s=t.slice(2),c=0,l=s.length;c<l;c++)if((o=s.charCodeAt(c))<48||o>a)return NaN;return parseInt(s,n)}}return+t};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof m&&(w?s(function(){g.valueOf.call(r)}):"Number"!=i(r))?o(new f(p(t)),r,m):p(t)};for(var y,b=r(16)?c(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),T=0;b.length>T;T++)a(f,y=b[T])&&!a(m,y)&&d(m,y,l(f,y));m.prototype=g,g.constructor=m,r(23)(n,"Number",m)}},356:function(e,t,r){"use strict";r(32);var n=r(0),a=r.n(n),i=r(55);r(293);var o=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props,t=e.list,r=e.subTitle,n=e.title;return a.a.createElement("section",{className:"up-article-list"},a.a.createElement("div",{className:"up-article-list__inner"},a.a.createElement("h2",{className:"up-article-list__title"},r&&a.a.createElement("span",null,r),n),a.a.createElement("div",{className:"up-article-list__list"},t.map(function(e){var t=e.html,r=e.featuredImage,n=e.path,o=e.title;return a.a.createElement("article",{key:o,className:"up-article-list__item"},a.a.createElement(i.a,{to:n,className:"up-article-list__article-title"},o),r&&a.a.createElement(i.a,{to:n,className:"up-article-list__image"},a.a.createElement("img",{src:r.publicURL,alt:""})),a.a.createElement("div",{className:"up-article-list__copy"},function(e){var t=e.html,r=e.words,n=void 0===r?50:r,a=e.ellipsis,i=void 0===a?"...":a;if("undefined"==typeof document)return t;var o=document.createElement("div");o.innerHTML=t;var u=o.textContent.split(" ");return u<n?u.join(" "):u.slice(0,n).join(" ")+i}({html:t})),a.a.createElement(i.a,{className:"up-article-list__cta",to:n},"Read more"))}))))},n}(n.PureComponent);o.defaultProps={list:[]};var u=o;r.d(t,"a",function(){return u})},357:function(e,t,r){"use strict";var n=r(2),a=r(45)(6),i="findIndex",o=!0;i in[]&&Array(1)[i](function(){o=!1}),n(n.P+n.F*o,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),r(73)(i)}}]);
//# sourceMappingURL=component---src-templates-article-js-0126e676998bdf8264e5.js.map