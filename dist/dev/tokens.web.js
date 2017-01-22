"use strict";
var tokens_1 = require('./app/frameworks/core/tokens');
var firebase = require('firebase/app');
require("firebase/auth");
require("firebase/database");
exports.TOKENS_WEB = [
    {
        provide: tokens_1.FIREBASE, useFactory: function () {
            return firebase;
        }
    },
    { provide: tokens_1.ENUMS, useValue: {} },
    { provide: tokens_1.APPSETTINGS, useValue: {} }
];

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRva2Vucy53ZWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUEyQyw4QkFBOEIsQ0FBQyxDQUFBO0FBQzFFLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN2QyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDekIsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFaEIsa0JBQVUsR0FBZTtJQUNwQztRQUNFLE9BQU8sRUFBRSxpQkFBUSxFQUFFLFVBQVUsRUFBRTtZQUM3QixNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2xCLENBQUM7S0FDRjtJQUNELEVBQUUsT0FBTyxFQUFFLGNBQUssRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO0lBQ2hDLEVBQUUsT0FBTyxFQUFFLG9CQUFXLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtDQUN2QyxDQUFDIiwiZmlsZSI6InRva2Vucy53ZWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZJUkVCQVNFLCBFTlVNUywgQVBQU0VUVElOR1N9IGZyb20gJy4vYXBwL2ZyYW1ld29ya3MvY29yZS90b2tlbnMnO1xudmFyIGZpcmViYXNlID0gcmVxdWlyZSgnZmlyZWJhc2UvYXBwJyk7XG5yZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTtcbnJlcXVpcmUoXCJmaXJlYmFzZS9kYXRhYmFzZVwiKTtcblxuZXhwb3J0IGNvbnN0IFRPS0VOU19XRUI6IEFycmF5PGFueT4gPSBbXG4gIHtcbiAgICBwcm92aWRlOiBGSVJFQkFTRSwgdXNlRmFjdG9yeTogKCkgPT4ge1xuICAgICAgcmV0dXJuIGZpcmViYXNlO1xuICAgIH1cbiAgfSxcbiAgeyBwcm92aWRlOiBFTlVNUywgdXNlVmFsdWU6IHt9IH0sXG4gIHsgcHJvdmlkZTogQVBQU0VUVElOR1MsIHVzZVZhbHVlOiB7fSB9XG5dO1xuIl19
