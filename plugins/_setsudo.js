function _0x2380(){const _0x438486=['239336LAejkh','body','Human\x20tool','user','setsudo\x20?(.*)','/apps/','replace','getsudo\x20?(.*)','11uLqPcV','36HCqrRh','HEROKU_API_KEY','365GhmJUG','```','577776rpgUDk','7tqROJn','3419039Lbzwwz','get','12297640Anhfar','SUDO\x20Numbers\x20are\x20:\x20','/config-vars','startsWith','catch','message','sendMessage','956OsMNlK','2813652gtPnUX','19372aWALEW','_new\x20sudo\x20numbers\x20are:_','2264nHURWS','HEROKU\x20:\x20','_It\x20takes\x2030\x20seconds\x20to\x20make\x20effect_','../config','patch','jid','SUDO','HEROKU_APP_NAME','99HMtwYU','shows\x20sudo','split'];_0x2380=function(){return _0x438486;};return _0x2380();}const _0x376944=_0x2dc9;function _0x2dc9(_0x3535df,_0x79a01){const _0x2380a6=_0x2380();return _0x2dc9=function(_0x2dc9b3,_0x1f4398){_0x2dc9b3=_0x2dc9b3-0xb9;let _0x36ff99=_0x2380a6[_0x2dc9b3];return _0x36ff99;},_0x2dc9(_0x3535df,_0x79a01);}(function(_0xe99d2f,_0x21205e){const _0xb0163b=_0x2dc9,_0x24d337=_0xe99d2f();while(!![]){try{const _0x53d500=parseInt(_0xb0163b(0xde))/0x1*(-parseInt(_0xb0163b(0xbb))/0x2)+parseInt(_0xb0163b(0xd3))/0x3+parseInt(_0xb0163b(0xb9))/0x4*(-parseInt(_0xb0163b(0xd1))/0x5)+-parseInt(_0xb0163b(0xdf))/0x6*(parseInt(_0xb0163b(0xd4))/0x7)+-parseInt(_0xb0163b(0xc6))/0x8*(-parseInt(_0xb0163b(0xc3))/0x9)+-parseInt(_0xb0163b(0xd7))/0xa*(-parseInt(_0xb0163b(0xce))/0xb)+-parseInt(_0xb0163b(0xcf))/0xc*(-parseInt(_0xb0163b(0xd5))/0xd);if(_0x53d500===_0x21205e)break;else _0x24d337['push'](_0x24d337['shift']());}catch(_0x4a25dc){_0x24d337['push'](_0x24d337['shift']());}}}(_0x2380,0x9b383));const {command}=require('../lib'),Config=require(_0x376944(0xbe)),{SUDO}=require('../config'),Heroku=require('heroku-client'),heroku=new Heroku({'token':Config[_0x376944(0xd0)]}),baseURI=_0x376944(0xcb)+Config[_0x376944(0xc2)];command({'pattern':_0x376944(0xca),'fromMe':!![],'desc':'set\x20sudo','type':_0x376944(0xc9)},async(_0xc8e7c5,_0xc01463,_0x1b3d23)=>{const _0x4c6c63=_0x376944;var _0x328bcb=_0xc8e7c5['mention'][0x0][_0x4c6c63(0xc5)]('@')[0x0]||_0xc8e7c5['reply_message'][_0x4c6c63(0xc0)][_0x4c6c63(0xc5)]('@')[0x0];if(!_0x328bcb)return await _0x1b3d23[_0x4c6c63(0xdd)]('*reply\x20to\x20a\x20number*',{'quoted':_0x1b3d23});var _0x8ce7df=(SUDO+','+_0x328bcb)[_0x4c6c63(0xcc)](/,,/g,',');_0x8ce7df=_0x8ce7df[_0x4c6c63(0xda)](',')?_0x8ce7df[_0x4c6c63(0xcc)](',',''):_0x8ce7df,await _0xc8e7c5[_0x4c6c63(0xdd)](_0x4c6c63(0xba)+_0x8ce7df,{'quoted':_0x1b3d23}),await _0xc8e7c5[_0x4c6c63(0xdd)](_0x4c6c63(0xbd),{'quoted':_0x1b3d23}),await heroku[_0x4c6c63(0xbf)](baseURI+_0x4c6c63(0xd9),{'body':{'SUDO':_0x8ce7df}})['then'](async _0x7f1cd9=>{});}),command({'pattern':_0x376944(0xcd),'fromMe':!![],'desc':_0x376944(0xc4),'type':_0x376944(0xc8)},async(_0x2cf767,_0x4703c5)=>{const _0x4acdfc=_0x376944,_0x4e511e=await heroku[_0x4acdfc(0xd6)](baseURI+_0x4acdfc(0xd9))[_0x4acdfc(0xdb)](async _0x528925=>{const _0x302590=_0x4acdfc;return await _0x2cf767['send'](_0x302590(0xbc)+_0x528925[_0x302590(0xc7)][_0x302590(0xdc)]);});await _0x2cf767[_0x4acdfc(0xdd)](_0x4acdfc(0xd2)+(_0x4acdfc(0xd8)+_0x4e511e[_0x4acdfc(0xc1)])+_0x4acdfc(0xd2));});