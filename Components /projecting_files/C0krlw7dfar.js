if (self.CavalryLogger) { CavalryLogger.start_js(["S9Ue2"]); }

__d("ProfileCometActionEditProfileHandler_handler$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"ProfileCometActionEditProfileHandler_handler$normalization",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[a,{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"profile_owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"should_use_page_rename",storageKey:null},b],storageKey:null},b],storageKey:null},a]}}();e.exports=a}),null);
__d("ProfileCometActionEditProfileHandler_handler.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometActionEditProfileHandler_handler",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"profile_owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"should_use_page_rename",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],type:"ProfileActionEditProfileHandler",abstractKey:null};e.exports=a}),null);
__d("ProfileCometSingleEditDialogQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3134875399955172",metadata:{relayPreloadable:!0},name:"ProfileCometSingleEditDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("ProfileCometSingleEditDialog.entrypoint",["JSResource","WebPixelRatio","ProfileCometSingleEditDialogQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){return{queries:{queryReference:{parameters:b("ProfileCometSingleEditDialogQuery$Parameters"),variables:{scale:b("WebPixelRatio").get()}}}}},root:b("JSResource")("ProfileCometSingleEditDialog.react").__setRef("ProfileCometSingleEditDialog.entrypoint")};e.exports=a}),null);
__d("ProfileCometActionEditProfileHandler.react",["fbt","CometCardedDialogLoadingState.react","CometRelay","ProfileCometSingleEditDialog.entrypoint","React","useCometEntryPointDialog","ProfileCometActionEditProfileHandler_handler.graphql"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=b("React");function a(a){var c=a.children;a=a.handler;a=b("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometActionEditProfileHandler_handler.graphql"),a);var d=(a==null?void 0:(a=a.profile_action)==null?void 0:(a=a.profile_owner)==null?void 0:a.should_use_page_rename)===!0;a=i.useCallback(function(a){return i.jsx(b("CometCardedDialogLoadingState.react"),{onClose:a,title:d?g._("Edit Page"):g._("Edit Profile"),withCloseButton:!0})},[d]);a=b("useCometEntryPointDialog")(b("ProfileCometSingleEditDialog.entrypoint"),{},"button",a);var e=a[0],f=a[1],j=a[2],k=a[3];a=a[4];return c({onHoverIn:j,onHoverOut:k,onPress:function(){return e({})},onPressIn:a,ref:f})}}),null);
__d("ProfileCometImagePreloader",["Promise","promiseDone"],(function(a,b,c,d,e,f){"use strict";f.preloadImages=a;function g(a){return new(b("Promise"))(function(b){var c=new Image();c.onload=function(){return b(c)};c.onerror=function(){return b(c)};c.src=a})}function a(a,c){b("promiseDone")(b("Promise").all(a.map(function(a){return g(a)})),c)}}),null);