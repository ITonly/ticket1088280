// Resolve JavaScript classes that extend a Java class, and need to resolve
// their JavaScript module from a bundled script. For example:
// NativeScriptApplication, NativeScriptActivity, etc.
//
// This module gets bundled together with the rest of the app code and the
// `require` calls get resolved to the correct bundling import call.
//
// At runtime the module gets loaded *before* the rest of the app code, so code
// placed here needs to be careful about its dependencies.
require('application');
require('ui/frame');
require('ui/frame/activity');
if (global.TNS_WEBPACK) {
    global.__requireOverride = function (name, dir) {
        if (name === './tns_modules/application/application.js') {
            return require('application');
        }
        else if (name === './tns_modules/ui/frame/frame.js') {
            return require('ui/frame');
        }
        else if (name === './tns_modules/ui/frame/activity.js') {
            return require('ui/frame/activity');
        }
        else if (name === './tns_modules/connectivity/connectivity.js') {
            return require('connectivity');
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLXBsYXRmb3JtLmFuZHJvaWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2ZW5kb3ItcGxhdGZvcm0uYW5kcm9pZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyRUFBMkU7QUFDM0UsOERBQThEO0FBQzlELHNEQUFzRDtBQUN0RCxFQUFFO0FBQ0YsMEVBQTBFO0FBQzFFLG9FQUFvRTtBQUNwRSxFQUFFO0FBQ0YsK0VBQStFO0FBQy9FLDBEQUEwRDtBQUUxRCxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDdkIsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3BCLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBRTdCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxVQUFTLElBQUksRUFBRSxHQUFHO1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSywwQ0FBMEMsQ0FBQyxDQUFDLENBQUM7WUFDdEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsQyxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7WUFDcEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUM7WUFDdkQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLDRDQUE0QyxDQUFDLENBQUMsQ0FBQztZQUMvRCxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ25DLENBQUM7SUFDTCxDQUFDLENBQUM7QUFDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUmVzb2x2ZSBKYXZhU2NyaXB0IGNsYXNzZXMgdGhhdCBleHRlbmQgYSBKYXZhIGNsYXNzLCBhbmQgbmVlZCB0byByZXNvbHZlXG4vLyB0aGVpciBKYXZhU2NyaXB0IG1vZHVsZSBmcm9tIGEgYnVuZGxlZCBzY3JpcHQuIEZvciBleGFtcGxlOlxuLy8gTmF0aXZlU2NyaXB0QXBwbGljYXRpb24sIE5hdGl2ZVNjcmlwdEFjdGl2aXR5LCBldGMuXG4vL1xuLy8gVGhpcyBtb2R1bGUgZ2V0cyBidW5kbGVkIHRvZ2V0aGVyIHdpdGggdGhlIHJlc3Qgb2YgdGhlIGFwcCBjb2RlIGFuZCB0aGVcbi8vIGByZXF1aXJlYCBjYWxscyBnZXQgcmVzb2x2ZWQgdG8gdGhlIGNvcnJlY3QgYnVuZGxpbmcgaW1wb3J0IGNhbGwuXG4vL1xuLy8gQXQgcnVudGltZSB0aGUgbW9kdWxlIGdldHMgbG9hZGVkICpiZWZvcmUqIHRoZSByZXN0IG9mIHRoZSBhcHAgY29kZSwgc28gY29kZVxuLy8gcGxhY2VkIGhlcmUgbmVlZHMgdG8gYmUgY2FyZWZ1bCBhYm91dCBpdHMgZGVwZW5kZW5jaWVzLlxuXG5yZXF1aXJlKCdhcHBsaWNhdGlvbicpO1xucmVxdWlyZSgndWkvZnJhbWUnKTtcbnJlcXVpcmUoJ3VpL2ZyYW1lL2FjdGl2aXR5Jyk7XG5cbmlmIChnbG9iYWwuVE5TX1dFQlBBQ0spIHtcbiAgICBnbG9iYWwuX19yZXF1aXJlT3ZlcnJpZGUgPSBmdW5jdGlvbihuYW1lLCBkaXIpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09ICcuL3Ruc19tb2R1bGVzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uLmpzJykge1xuICAgICAgICAgICAgcmV0dXJuIHJlcXVpcmUoJ2FwcGxpY2F0aW9uJyk7XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJy4vdG5zX21vZHVsZXMvdWkvZnJhbWUvZnJhbWUuanMnKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVxdWlyZSgndWkvZnJhbWUnKTtcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSAnLi90bnNfbW9kdWxlcy91aS9mcmFtZS9hY3Rpdml0eS5qcycpIHtcbiAgICAgICAgICAgIHJldHVybiByZXF1aXJlKCd1aS9mcmFtZS9hY3Rpdml0eScpO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICcuL3Ruc19tb2R1bGVzL2Nvbm5lY3Rpdml0eS9jb25uZWN0aXZpdHkuanMnKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVxdWlyZSgnY29ubmVjdGl2aXR5Jyk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuIl19