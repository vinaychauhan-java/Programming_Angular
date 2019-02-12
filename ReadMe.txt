=======================================
Software to be referred or download
=======================================
https://nodejs.org/en/
	-- Installed Version : 6.4.1
https://cli.angular.io/
	-- Installed Version : 6.2.4 
https://visualstudio.microsoft.com/


=======================================
Angular Code @ Referenced For
=======================================
ngApp1   : For String Interpolation, Property Binding, Event Binding & Two-Way Data Binding
ngApp2   : For Debugging & For-Loop activities 
ngApp3   : For Component & Data Binding
ngApp4   : For Directives
ngApp5   : For Services and Dependency Injection (Basic)
ngApp6   : For Services and Dependency Injection (Advanced)
ngApp7   : For Routing with Params, QueryParams and Fragment
ngApp8   : For Routing with Child and WildCard Routes
ngApp9   : For Routing with Guards and Error Handling
ngAppPrj : For Project Artifacts


=======================================
For Angular
=======================================
D:\>npm install -g @angular/cli
	C:\Users\VinayChauhan\AppData\Roaming\npm\ng -> C:\Users\VinayChauhan\AppData\Roaming\npm\node_modules\@angular\cli\bin\ng
	npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\@angular\cli\node_modules\fsevents):
	npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
	+ @angular/cli@6.2.4
	added 242 packages from 191 contributors in 128.725s
	
	
D:\Programming_Angular>ng new ngApp1
	CREATE ngApp1/angular.json (3548 bytes)
	CREATE ngApp1/package.json (1313 bytes)
	CREATE ngApp1/README.md (1023 bytes)
	CREATE ngApp1/tsconfig.json (408 bytes)
	CREATE ngApp1/tslint.json (2837 bytes)
	CREATE ngApp1/.editorconfig (245 bytes)
	CREATE ngApp1/.gitignore (503 bytes)
	CREATE ngApp1/src/favicon.ico (5430 bytes)
	CREATE ngApp1/src/index.html (293 bytes)
	CREATE ngApp1/src/main.ts (373 bytes)
	CREATE ngApp1/src/polyfills.ts (3194 bytes)
	CREATE ngApp1/src/test.ts (642 bytes)
	CREATE ngApp1/src/styles.css (80 bytes)
	CREATE ngApp1/src/browserslist (388 bytes)
	CREATE ngApp1/src/karma.conf.js (964 bytes)
	CREATE ngApp1/src/tsconfig.app.json (166 bytes)
	CREATE ngApp1/src/tsconfig.spec.json (256 bytes)
	CREATE ngApp1/src/tslint.json (314 bytes)
	CREATE ngApp1/src/assets/.gitkeep (0 bytes)
	CREATE ngApp1/src/environments/environment.prod.ts (51 bytes)
	CREATE ngApp1/src/environments/environment.ts (662 bytes)
	CREATE ngApp1/src/app/app.module.ts (314 bytes)
	CREATE ngApp1/src/app/app.component.html (1141 bytes)
	CREATE ngApp1/src/app/app.component.spec.ts (978 bytes)
	CREATE ngApp1/src/app/app.component.ts (210 bytes)
	CREATE ngApp1/src/app/app.component.css (0 bytes)
	CREATE ngApp1/e2e/protractor.conf.js (752 bytes)
	CREATE ngApp1/e2e/tsconfig.e2e.json (213 bytes)
	CREATE ngApp1/e2e/src/app.e2e-spec.ts (302 bytes)
	CREATE ngApp1/e2e/src/app.po.ts (208 bytes)
	npm WARN deprecated circular-json@0.5.9: CircularJSON is in maintenance only, flatted is its successor.

	> node-sass@4.9.4 install D:\Programming_Angular\ngApp1\node_modules\node-sass
	> node scripts/install.js

	Cached binary found at C:\Users\e3002198\AppData\Roaming\npm-cache\node-sass\4.9.4\win32-x64-57_binding.node

	> node-sass@4.9.4 postinstall D:\Programming_Angular\ngApp1\node_modules\node-sass
	> node scripts/build.js

	Binary found at D:\Programming_Angular\ngApp1\node_modules\node-sass\vendor\win32-x64-57\binding.node
	Testing binary
	Binary is fine
	npm WARN rollback Rolling back node-pre-gyp@0.10.0 failed (this is probably harmless): EPERM: operation not permitted, rmdir 'D:\Programming_Angular\ngApp1\node_modules\fsevents\node_modules'
	npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
	npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

	added 1067 packages from 1313 contributors and audited 39010 packages in 539.63s
	found 0 vulnerabilities
	
	
D:\Programming_Angular>cd ngApp1


D:\Programming_Angular\ngApp1>ng serve
	** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
	 42% building modules 273/273 modules 0 activei ?wdm?: wait until bundle f
	Date: 2018-11-02T11:47:27.855Z
	Hash: 836404f460173e94e06a
	Time: 25591ms
	chunk {main} main.js, main.js.map (main) 10.7 kB [initial] [rendered]
	chunk {polyfills} polyfills.js, polyfills.js.map (polyfills) 227 kB [initial] [rendered]
	chunk {runtime} runtime.js, runtime.js.map (runtime) 6.22 kB [entry] [rendered]
	chunk {styles} styles.js, styles.js.map (styles) 15.6 kB [initial] [rendered]
	chunk {vendor} vendor.js, vendor.js.map (vendor) 3.28 MB [initial] [rendered]
	wdm: Compiled successfully.


=======================================
Creating Components with CLI 
=======================================
D:\Programming_Angular\ngApp1>ng generate component XServer
	CREATE src/app/xserver/xserver.component.html (26 bytes)
	CREATE src/app/xserver/xserver.component.spec.ts (635 bytes)
	CREATE src/app/xserver/xserver.component.ts (273 bytes)
	CREATE src/app/xserver/xserver.component.css (0 bytes)
	UPDATE src/app/app.module.ts (644 bytes)

	
=======================================
Creating Directives with CLI 
=======================================
D:\Programming_Angular\ngApp4>ng g d better-highlight/better-highlight
	CREATE src/app/better-highlight/better-highlight.directive.spec.ts (261 bytes)
	CREATE src/app/better-highlight/better-highlight.directive.ts (159 bytes)
	UPDATE src/app/app.module.ts (673 bytes)

D:\Programming_Angular\ngApp4>ng g d better-highlight/another-better-highlight --spec false
	CREATE src/app/better-highlight/another-better-highlight.directive.ts (173 bytes)
	UPDATE src/app/app.module.ts (815 bytes)

		
=======================================
How to get npm work behind Proxy Server and other Useful commands
=======================================
npm config set proxy "http://<<DOMAIN_NAME>>%5C<<UserName>>:<<UserPassword>>@<<SERVER_IP_ADDRESS>>:<<SERVER_PORT>>/"
npm config set https-proxy "http://<<DOMAIN_NAME>>%5C<<UserName>>:<<UserPassword>>@<<SERVER_IP_ADDRESS>>:<<SERVER_PORT>>/"
npm config get proxy 
npm config get https-proxy
npm config list

	
=======================================
Creating Angular project and adding BootStrap 
=======================================
D:\Programming_Angular>ng new ngApp2
D:\Programming_Angular>cd ng ngApp2
D:\Programming_Angular\ngApp2>npm install --save bootstrap@3

Note:- Update BootStrap entry in angular.json file
		"styles": [
		  "node_modules/bootstrap/dist/css/bootstrap.min.css",
		  "src/styles.css"
		]

		
=======================================
Bindable Properties and Events : Tips
=======================================
How do you know to which Properties or Events of HTML Elements you may bind? You can basically bind to all Properties and Events - a good idea is to console.log() the element you're interested in to see which properties and events it offers.

Important: For events, you don't bind to onclick but only to click (=> (click)).

The MDN (Mozilla Developer Network) offers nice lists of all properties and events of the element you're interested in. Googling for YOUR_ELEMENT properties  or YOUR_ELEMENT events  should yield nice results.

For Two-Way-Binding to work, you need to enable the ngModel  directive. This is done by adding the FormsModule to the imports[] array in the AppModule. You then also need to add the import from @angular/forms  in the app.module.ts file: import { FormsModule } from '@angular/forms'; 
