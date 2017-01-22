"use strict";
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
console.log("Electron launching with NODE_ENV: " + process.env.NODE_ENV);
var electron = require('electron');
var app = electron.app;
var Menu = electron.Menu;
var shell = electron.shell;
var BrowserWindow = electron.BrowserWindow;
var mainWindow = null;
var template;
var menu;
var app_config_1 = require('./app/frameworks/sample/services/app-config');
if (process.env.NODE_ENV === 'development') {
    require('electron-debug')();
}
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('ready', function () {
    mainWindow = new BrowserWindow({ width: 900, height: 620 });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
    mainWindow.webContents.on('did-navigate-in-page', function (e, url) {
        console.log("Page navigated: " + url);
    });
    var appTitle = "Angular Seed Advanced";
    var langMenu = {
        label: 'Language',
        submenu: []
    };
    var _loop_1 = function() {
        var code = lang.code;
        var langOption = {
            label: lang.title,
            click: function () {
                console.log("Change lang: " + code);
                mainWindow.webContents.executeJavaScript("window.dispatchEvent(new CustomEvent('changeLang', {detail: { value: '" + code + "'} }));");
            }
        };
        langMenu.submenu.push(langOption);
    };
    for (var _i = 0, _a = app_config_1.AppConfig.SUPPORTED_LANGUAGES; _i < _a.length; _i++) {
        var lang = _a[_i];
        _loop_1();
    }
    var helpMenu = {
        label: 'Help',
        submenu: [{
                label: 'Learn More',
                click: function () {
                    shell.openExternal('https://github.com/NathanWalker/angular-seed-advanced');
                }
            }, {
                label: 'Issues',
                click: function () {
                    shell.openExternal('https://github.com/NathanWalker/angular-seed-advanced/issues');
                }
            }, {
                label: "My Amazing Parent: Minko Gechev's Angular Seed",
                click: function () {
                    shell.openExternal('https://github.com/mgechev/angular-seed');
                }
            }, {
                label: 'Angular 2',
                click: function () {
                    shell.openExternal('https://angular.io/');
                }
            }, {
                label: 'Electron',
                click: function () {
                    shell.openExternal('http://electron.atom.io/');
                }
            }, {
                label: 'Electron Docs',
                click: function () {
                    shell.openExternal('https://github.com/atom/electron/tree/master/docs');
                }
            }, {
                label: 'Codeology Visualization',
                click: function () {
                    shell.openExternal('http://codeology.braintreepayments.com/nathanwalker/angular-seed-advanced');
                }
            }]
    };
    if (process.platform === 'darwin') {
        template = [{
                label: appTitle,
                submenu: [{
                        label: "About " + appTitle,
                        selector: 'orderFrontStandardAboutPanel:'
                    }, {
                        type: 'separator'
                    }, {
                        label: 'Services',
                        submenu: []
                    }, {
                        type: 'separator'
                    }, {
                        label: 'Hide Angular Seed Advanced',
                        accelerator: 'Command+H',
                        selector: 'hide:'
                    }, {
                        label: 'Hide Others',
                        accelerator: 'Command+Shift+H',
                        selector: 'hideOtherApplications:'
                    }, {
                        label: 'Show All',
                        selector: 'unhideAllApplications:'
                    }, {
                        type: 'separator'
                    }, {
                        label: 'Quit',
                        accelerator: 'Command+Q',
                        click: function () {
                            app.quit();
                        }
                    }]
            }, {
                label: 'Edit',
                submenu: [{
                        label: 'Undo',
                        accelerator: 'Command+Z',
                        selector: 'undo:'
                    }, {
                        label: 'Redo',
                        accelerator: 'Shift+Command+Z',
                        selector: 'redo:'
                    }, {
                        type: 'separator'
                    }, {
                        label: 'Cut',
                        accelerator: 'Command+X',
                        selector: 'cut:'
                    }, {
                        label: 'Copy',
                        accelerator: 'Command+C',
                        selector: 'copy:'
                    }, {
                        label: 'Paste',
                        accelerator: 'Command+V',
                        selector: 'paste:'
                    }, {
                        label: 'Select All',
                        accelerator: 'Command+A',
                        selector: 'selectAll:'
                    }]
            }, {
                label: 'View',
                submenu: (process.env.NODE_ENV === 'development') ? [{
                        label: 'Reload',
                        accelerator: 'Command+R',
                        click: function () {
                            mainWindow.restart();
                        }
                    }, {
                        label: 'Toggle Full Screen',
                        accelerator: 'Ctrl+Command+F',
                        click: function () {
                            mainWindow.setFullScreen(!mainWindow.isFullScreen());
                        }
                    }, {
                        label: 'Toggle Developer Tools',
                        accelerator: 'Alt+Command+I',
                        click: function () {
                            mainWindow.toggleDevTools();
                        }
                    }] : [{
                        label: 'Toggle Full Screen',
                        accelerator: 'Ctrl+Command+F',
                        click: function () {
                            mainWindow.setFullScreen(!mainWindow.isFullScreen());
                        }
                    }]
            }, {
                label: 'Window',
                submenu: [{
                        label: 'Minimize',
                        accelerator: 'Command+M',
                        selector: 'performMiniaturize:'
                    }, {
                        label: 'Close',
                        accelerator: 'Command+W',
                        selector: 'performClose:'
                    }, {
                        type: 'separator'
                    }, {
                        label: 'Bring All to Front',
                        selector: 'arrangeInFront:'
                    }]
            },
            langMenu,
            helpMenu];
        menu = Menu.buildFromTemplate(template);
        Menu.setApplicationMenu(menu);
    }
    else {
        template = [{
                label: '&File',
                submenu: [{
                        label: '&Open',
                        accelerator: 'Ctrl+O'
                    }, {
                        label: '&Close',
                        accelerator: 'Ctrl+W',
                        click: function () {
                            mainWindow.close();
                        }
                    }]
            }, {
                label: '&View',
                submenu: (process.env.NODE_ENV === 'development') ? [{
                        label: '&Reload',
                        accelerator: 'Ctrl+R',
                        click: function () {
                            mainWindow.restart();
                        }
                    }, {
                        label: 'Toggle &Full Screen',
                        accelerator: 'F11',
                        click: function () {
                            mainWindow.setFullScreen(!mainWindow.isFullScreen());
                        }
                    }, {
                        label: 'Toggle &Developer Tools',
                        accelerator: 'Alt+Ctrl+I',
                        click: function () {
                            mainWindow.toggleDevTools();
                        }
                    }] : [{
                        label: 'Toggle &Full Screen',
                        accelerator: 'F11',
                        click: function () {
                            mainWindow.setFullScreen(!mainWindow.isFullScreen());
                        }
                    }]
            },
            langMenu,
            helpMenu];
        menu = Menu.buildFromTemplate(template);
        mainWindow.setMenu(menu);
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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O3FCQUNGLEVBQUU7d0JBQ0QsS0FBSyxFQUFFLHlCQUF5Qjt3QkFDaEMsV0FBVyxFQUFFLFlBQVk7d0JBQ3pCLEtBQUssRUFBQzs0QkFDSixVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBQzlCLENBQUM7cUJBQ0YsQ0FBQyxHQUFHLENBQUM7d0JBQ0osS0FBSyxFQUFFLHFCQUFxQjt3QkFDNUIsV0FBVyxFQUFFLEtBQUs7d0JBQ2xCLEtBQUssRUFBQzs0QkFDSixVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7d0JBQ3ZELENBQUM7cUJBQ0YsQ0FBQzthQUNMO1lBQ0QsUUFBUTtZQUNSLFFBQVEsQ0FBQyxDQUFDO1FBQ1osSUFBSSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7QUFFSCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmRlc2t0b3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJwcm9jZXNzLmVudi5OT0RFX0VOViA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdwcm9kdWN0aW9uJztcbmNvbnNvbGUubG9nKGBFbGVjdHJvbiBsYXVuY2hpbmcgd2l0aCBOT0RFX0VOVjogJHtwcm9jZXNzLmVudi5OT0RFX0VOVn1gKTtcblxuLy8gZWxlY3Ryb25cbmNvbnN0IGVsZWN0cm9uID0gcmVxdWlyZSgnZWxlY3Ryb24nKTtcbmNvbnN0IGFwcCA9IGVsZWN0cm9uLmFwcDtcbmNvbnN0IE1lbnU6IGFueSA9IGVsZWN0cm9uLk1lbnU7XG5jb25zdCBzaGVsbDogYW55ID0gZWxlY3Ryb24uc2hlbGw7XG4vLyBjb25zdCB7Y3Jhc2hSZXBvcnRlcn0gPSByZXF1aXJlKCdlbGVjdHJvbicpO1xuY29uc3QgQnJvd3NlcldpbmRvdyA9IGVsZWN0cm9uLkJyb3dzZXJXaW5kb3c7XG5sZXQgbWFpbldpbmRvdzogYW55ID0gbnVsbDtcbmxldCB0ZW1wbGF0ZTogYW55O1xubGV0IG1lbnU6IGFueTtcblxuLy8gYXBwXG5pbXBvcnQgeyBBcHBDb25maWcgfSBmcm9tICcuL2FwcC9mcmFtZXdvcmtzL3NhbXBsZS9zZXJ2aWNlcy9hcHAtY29uZmlnJztcblxuLy8gU2FtcGxlXG4vLyBZb3Ugd291bGQgbmVlZCBhIHZhbGlkIGBzdWJtaXRVUkxgIHRvIHVzZVxuLy8gY3Jhc2hSZXBvcnRlci5zdGFydCh7XG4vLyAgIHByb2R1Y3ROYW1lOiAnQW5ndWxhclNlZWRBZHZhbmNlZCcsXG4vLyAgIGNvbXBhbnlOYW1lOiAnTmF0aGFuV2Fsa2VyJyxcbi8vICAgc3VibWl0VVJMOiAnaHR0cHM6Ly9naXRodWIuY29tL05hdGhhbldhbGtlci9hbmd1bGFyLXNlZWQtYWR2YW5jZWQnLFxuLy8gICBhdXRvU3VibWl0OiB0cnVlXG4vLyB9KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIHJlcXVpcmUoJ2VsZWN0cm9uLWRlYnVnJykoKTtcbn1cblxuYXBwLm9uKCd3aW5kb3ctYWxsLWNsb3NlZCcsICgpID0+IHtcbiAgaWYgKHByb2Nlc3MucGxhdGZvcm0gIT09ICdkYXJ3aW4nKSB7XG4gICAgYXBwLnF1aXQoKTtcbiAgfVxufSk7XG5cbmFwcC5vbigncmVhZHknLCAoKSA9PiB7XG5cbiAgLy8gSW5pdGlhbGl6ZSB0aGUgd2luZG93IHRvIG91ciBzcGVjaWZpZWQgZGltZW5zaW9uc1xuICBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coeyB3aWR0aDogOTAwLCBoZWlnaHQ6IDYyMCB9KTtcblxuICAvLyBUZWxsIEVsZWN0cm9uIHdoZXJlIHRvIGxvYWQgdGhlIGVudHJ5IHBvaW50IGZyb21cbiAgbWFpbldpbmRvdy5sb2FkVVJMKCdmaWxlOi8vJyArIF9fZGlybmFtZSArICcvaW5kZXguaHRtbCcpO1xuXG4gIC8vIENsZWFyIG91dCB0aGUgbWFpbiB3aW5kb3cgd2hlbiB0aGUgYXBwIGlzIGNsb3NlZFxuICBtYWluV2luZG93Lm9uKCdjbG9zZWQnLCAoKSA9PiB7XG4gICAgbWFpbldpbmRvdyA9IG51bGw7XG4gIH0pO1xuXG4gIG1haW5XaW5kb3cud2ViQ29udGVudHMub24oJ2RpZC1uYXZpZ2F0ZS1pbi1wYWdlJywgKGU6IGFueSwgdXJsOiBzdHJpbmcpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgUGFnZSBuYXZpZ2F0ZWQ6ICR7dXJsfWApO1xuICB9KTtcblxuICBsZXQgYXBwVGl0bGU6IHN0cmluZyA9IGBBbmd1bGFyIFNlZWQgQWR2YW5jZWRgO1xuXG4gIGxldCBsYW5nTWVudTogYW55ID0ge1xuICAgIGxhYmVsOiAnTGFuZ3VhZ2UnLFxuICAgIHN1Ym1lbnU6IFtdXG4gIH07XG4gIGZvciAodmFyIGxhbmcgb2YgQXBwQ29uZmlnLlNVUFBPUlRFRF9MQU5HVUFHRVMpIHtcbiAgICBsZXQgY29kZSA9IGxhbmcuY29kZTtcbiAgICBsZXQgbGFuZ09wdGlvbiA9IHtcbiAgICAgIGxhYmVsOiBsYW5nLnRpdGxlLFxuICAgICAgY2xpY2s6KCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgQ2hhbmdlIGxhbmc6ICR7Y29kZX1gKTtcbiAgICAgICAgbWFpbldpbmRvdy53ZWJDb250ZW50cy5leGVjdXRlSmF2YVNjcmlwdChgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2VMYW5nJywge2RldGFpbDogeyB2YWx1ZTogJyR7Y29kZX0nfSB9KSk7YCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBsYW5nTWVudS5zdWJtZW51LnB1c2gobGFuZ09wdGlvbik7XG4gIH1cblxuICBsZXQgaGVscE1lbnU6IGFueSA9IHtcbiAgICBsYWJlbDogJ0hlbHAnLFxuICAgIHN1Ym1lbnU6IFt7XG4gICAgICBsYWJlbDogJ0xlYXJuIE1vcmUnLFxuICAgICAgY2xpY2s6KCkgPT4ge1xuICAgICAgICBzaGVsbC5vcGVuRXh0ZXJuYWwoJ2h0dHBzOi8vZ2l0aHViLmNvbS9OYXRoYW5XYWxrZXIvYW5ndWxhci1zZWVkLWFkdmFuY2VkJyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgICBsYWJlbDogJ0lzc3VlcycsXG4gICAgICAgIGNsaWNrOigpID0+IHtcbiAgICAgICAgICBzaGVsbC5vcGVuRXh0ZXJuYWwoJ2h0dHBzOi8vZ2l0aHViLmNvbS9OYXRoYW5XYWxrZXIvYW5ndWxhci1zZWVkLWFkdmFuY2VkL2lzc3VlcycpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBgTXkgQW1hemluZyBQYXJlbnQ6IE1pbmtvIEdlY2hldidzIEFuZ3VsYXIgU2VlZGAsXG4gICAgICAgIGNsaWNrOigpID0+IHtcbiAgICAgICAgICBzaGVsbC5vcGVuRXh0ZXJuYWwoJ2h0dHBzOi8vZ2l0aHViLmNvbS9tZ2VjaGV2L2FuZ3VsYXItc2VlZCcpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiAnQW5ndWxhciAyJyxcbiAgICAgICAgY2xpY2s6KCkgPT4ge1xuICAgICAgICAgIHNoZWxsLm9wZW5FeHRlcm5hbCgnaHR0cHM6Ly9hbmd1bGFyLmlvLycpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiAnRWxlY3Ryb24nLFxuICAgICAgICBjbGljazooKSA9PiB7XG4gICAgICAgICAgc2hlbGwub3BlbkV4dGVybmFsKCdodHRwOi8vZWxlY3Ryb24uYXRvbS5pby8nKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogJ0VsZWN0cm9uIERvY3MnLFxuICAgICAgICBjbGljazogKCkgPT4ge1xuICAgICAgICAgIHNoZWxsLm9wZW5FeHRlcm5hbCgnaHR0cHM6Ly9naXRodWIuY29tL2F0b20vZWxlY3Ryb24vdHJlZS9tYXN0ZXIvZG9jcycpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiAnQ29kZW9sb2d5IFZpc3VhbGl6YXRpb24nLFxuICAgICAgICBjbGljazooKSA9PiB7XG4gICAgICAgICAgc2hlbGwub3BlbkV4dGVybmFsKCdodHRwOi8vY29kZW9sb2d5LmJyYWludHJlZXBheW1lbnRzLmNvbS9uYXRoYW53YWxrZXIvYW5ndWxhci1zZWVkLWFkdmFuY2VkJyk7XG4gICAgICAgIH1cbiAgICAgIH1dXG4gIH07XG5cbiAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICdkYXJ3aW4nKSB7XG4gICAgdGVtcGxhdGUgPSBbe1xuICAgICAgbGFiZWw6IGFwcFRpdGxlLFxuICAgICAgc3VibWVudTogW3tcbiAgICAgICAgbGFiZWw6IGBBYm91dCAke2FwcFRpdGxlfWAsXG4gICAgICAgIHNlbGVjdG9yOiAnb3JkZXJGcm9udFN0YW5kYXJkQWJvdXRQYW5lbDonXG4gICAgICB9LCB7XG4gICAgICAgICAgdHlwZTogJ3NlcGFyYXRvcidcbiAgICAgICAgfSwge1xuICAgICAgICAgIGxhYmVsOiAnU2VydmljZXMnLFxuICAgICAgICAgIHN1Ym1lbnU6IFtdXG4gICAgICAgIH0sIHtcbiAgICAgICAgICB0eXBlOiAnc2VwYXJhdG9yJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgbGFiZWw6ICdIaWRlIEFuZ3VsYXIgU2VlZCBBZHZhbmNlZCcsXG4gICAgICAgICAgYWNjZWxlcmF0b3I6ICdDb21tYW5kK0gnLFxuICAgICAgICAgIHNlbGVjdG9yOiAnaGlkZTonXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBsYWJlbDogJ0hpZGUgT3RoZXJzJyxcbiAgICAgICAgICBhY2NlbGVyYXRvcjogJ0NvbW1hbmQrU2hpZnQrSCcsXG4gICAgICAgICAgc2VsZWN0b3I6ICdoaWRlT3RoZXJBcHBsaWNhdGlvbnM6J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgbGFiZWw6ICdTaG93IEFsbCcsXG4gICAgICAgICAgc2VsZWN0b3I6ICd1bmhpZGVBbGxBcHBsaWNhdGlvbnM6J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgdHlwZTogJ3NlcGFyYXRvcidcbiAgICAgICAgfSwge1xuICAgICAgICAgIGxhYmVsOiAnUXVpdCcsXG4gICAgICAgICAgYWNjZWxlcmF0b3I6ICdDb21tYW5kK1EnLFxuICAgICAgICAgIGNsaWNrOigpID0+IHtcbiAgICAgICAgICAgIGFwcC5xdWl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgIH0sIHtcbiAgICAgICAgbGFiZWw6ICdFZGl0JyxcbiAgICAgICAgc3VibWVudTogW3tcbiAgICAgICAgICBsYWJlbDogJ1VuZG8nLFxuICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ29tbWFuZCtaJyxcbiAgICAgICAgICBzZWxlY3RvcjogJ3VuZG86J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBsYWJlbDogJ1JlZG8nLFxuICAgICAgICAgICAgYWNjZWxlcmF0b3I6ICdTaGlmdCtDb21tYW5kK1onLFxuICAgICAgICAgICAgc2VsZWN0b3I6ICdyZWRvOidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICB0eXBlOiAnc2VwYXJhdG9yJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGxhYmVsOiAnQ3V0JyxcbiAgICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ29tbWFuZCtYJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnY3V0OidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBsYWJlbDogJ0NvcHknLFxuICAgICAgICAgICAgYWNjZWxlcmF0b3I6ICdDb21tYW5kK0MnLFxuICAgICAgICAgICAgc2VsZWN0b3I6ICdjb3B5OidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBsYWJlbDogJ1Bhc3RlJyxcbiAgICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ29tbWFuZCtWJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiAncGFzdGU6J1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGxhYmVsOiAnU2VsZWN0IEFsbCcsXG4gICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0NvbW1hbmQrQScsXG4gICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdEFsbDonXG4gICAgICAgICAgfV1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6ICdWaWV3JyxcbiAgICAgICAgc3VibWVudTogKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/IFt7XG4gICAgICAgICAgbGFiZWw6ICdSZWxvYWQnLFxuICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ29tbWFuZCtSJyxcbiAgICAgICAgICBjbGljazooKSA9PiB7XG4gICAgICAgICAgICBtYWluV2luZG93LnJlc3RhcnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGxhYmVsOiAnVG9nZ2xlIEZ1bGwgU2NyZWVuJyxcbiAgICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ3RybCtDb21tYW5kK0YnLFxuICAgICAgICAgICAgY2xpY2s6KCkgPT4ge1xuICAgICAgICAgICAgICBtYWluV2luZG93LnNldEZ1bGxTY3JlZW4oIW1haW5XaW5kb3cuaXNGdWxsU2NyZWVuKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGxhYmVsOiAnVG9nZ2xlIERldmVsb3BlciBUb29scycsXG4gICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0FsdCtDb21tYW5kK0knLFxuICAgICAgICAgICAgY2xpY2s6KCkgPT4ge1xuICAgICAgICAgICAgICBtYWluV2luZG93LnRvZ2dsZURldlRvb2xzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfV0gOiBbe1xuICAgICAgICAgICAgbGFiZWw6ICdUb2dnbGUgRnVsbCBTY3JlZW4nLFxuICAgICAgICAgICAgYWNjZWxlcmF0b3I6ICdDdHJsK0NvbW1hbmQrRicsXG4gICAgICAgICAgICBjbGljazooKSA9PiB7XG4gICAgICAgICAgICAgIG1haW5XaW5kb3cuc2V0RnVsbFNjcmVlbighbWFpbldpbmRvdy5pc0Z1bGxTY3JlZW4oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfV1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6ICdXaW5kb3cnLFxuICAgICAgICBzdWJtZW51OiBbe1xuICAgICAgICAgIGxhYmVsOiAnTWluaW1pemUnLFxuICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ29tbWFuZCtNJyxcbiAgICAgICAgICBzZWxlY3RvcjogJ3BlcmZvcm1NaW5pYXR1cml6ZTonXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGxhYmVsOiAnQ2xvc2UnLFxuICAgICAgICAgICAgYWNjZWxlcmF0b3I6ICdDb21tYW5kK1cnLFxuICAgICAgICAgICAgc2VsZWN0b3I6ICdwZXJmb3JtQ2xvc2U6J1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHR5cGU6ICdzZXBhcmF0b3InXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbGFiZWw6ICdCcmluZyBBbGwgdG8gRnJvbnQnLFxuICAgICAgICAgICAgc2VsZWN0b3I6ICdhcnJhbmdlSW5Gcm9udDonXG4gICAgICAgICAgfV1cbiAgICAgIH0sXG4gICAgICBsYW5nTWVudSxcbiAgICAgIGhlbHBNZW51XTtcblxuICAgIG1lbnUgPSBNZW51LmJ1aWxkRnJvbVRlbXBsYXRlKHRlbXBsYXRlKTtcbiAgICBNZW51LnNldEFwcGxpY2F0aW9uTWVudShtZW51KTtcbiAgfSBlbHNlIHtcbiAgICB0ZW1wbGF0ZSA9IFt7XG4gICAgICBsYWJlbDogJyZGaWxlJyxcbiAgICAgIHN1Ym1lbnU6IFt7XG4gICAgICAgIGxhYmVsOiAnJk9wZW4nLFxuICAgICAgICBhY2NlbGVyYXRvcjogJ0N0cmwrTydcbiAgICAgIH0sIHtcbiAgICAgICAgICBsYWJlbDogJyZDbG9zZScsXG4gICAgICAgICAgYWNjZWxlcmF0b3I6ICdDdHJsK1cnLFxuICAgICAgICAgIGNsaWNrOigpID0+IHtcbiAgICAgICAgICAgIG1haW5XaW5kb3cuY2xvc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1dXG4gICAgfSwge1xuICAgICAgICBsYWJlbDogJyZWaWV3JyxcbiAgICAgICAgc3VibWVudTogKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/IFt7XG4gICAgICAgICAgbGFiZWw6ICcmUmVsb2FkJyxcbiAgICAgICAgICBhY2NlbGVyYXRvcjogJ0N0cmwrUicsXG4gICAgICAgICAgY2xpY2s6KCkgPT4ge1xuICAgICAgICAgICAgbWFpbldpbmRvdy5yZXN0YXJ0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBsYWJlbDogJ1RvZ2dsZSAmRnVsbCBTY3JlZW4nLFxuICAgICAgICAgICAgYWNjZWxlcmF0b3I6ICdGMTEnLFxuICAgICAgICAgICAgY2xpY2s6KCkgPT4ge1xuICAgICAgICAgICAgICBtYWluV2luZG93LnNldEZ1bGxTY3JlZW4oIW1haW5XaW5kb3cuaXNGdWxsU2NyZWVuKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGxhYmVsOiAnVG9nZ2xlICZEZXZlbG9wZXIgVG9vbHMnLFxuICAgICAgICAgICAgYWNjZWxlcmF0b3I6ICdBbHQrQ3RybCtJJyxcbiAgICAgICAgICAgIGNsaWNrOigpID0+IHtcbiAgICAgICAgICAgICAgbWFpbldpbmRvdy50b2dnbGVEZXZUb29scygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1dIDogW3tcbiAgICAgICAgICAgIGxhYmVsOiAnVG9nZ2xlICZGdWxsIFNjcmVlbicsXG4gICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0YxMScsXG4gICAgICAgICAgICBjbGljazooKSA9PiB7XG4gICAgICAgICAgICAgIG1haW5XaW5kb3cuc2V0RnVsbFNjcmVlbighbWFpbldpbmRvdy5pc0Z1bGxTY3JlZW4oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfV1cbiAgICAgIH0sXG4gICAgICBsYW5nTWVudSxcbiAgICAgIGhlbHBNZW51XTtcbiAgICBtZW51ID0gTWVudS5idWlsZEZyb21UZW1wbGF0ZSh0ZW1wbGF0ZSk7XG4gICAgbWFpbldpbmRvdy5zZXRNZW51KG1lbnUpO1xuICB9XG5cbn0pO1xuIl19
