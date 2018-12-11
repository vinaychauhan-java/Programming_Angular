D:\Programming_Angular>ng new ngAppPrj
	CREATE ngAppPrj/angular.json (3566 bytes)
	CREATE ngAppPrj/package.json (1316 bytes)
	CREATE ngAppPrj/README.md (1025 bytes)
	CREATE ngAppPrj/tsconfig.json (408 bytes)
	CREATE ngAppPrj/tslint.json (2837 bytes)
	CREATE ngAppPrj/.editorconfig (245 bytes)
	CREATE ngAppPrj/.gitignore (503 bytes)
	CREATE ngAppPrj/src/favicon.ico (5430 bytes)
	CREATE ngAppPrj/src/index.html (295 bytes)
	CREATE ngAppPrj/src/main.ts (373 bytes)
	CREATE ngAppPrj/src/polyfills.ts (3194 bytes)
	CREATE ngAppPrj/src/test.ts (642 bytes)
	CREATE ngAppPrj/src/styles.css (80 bytes)
	CREATE ngAppPrj/src/browserslist (388 bytes)
	CREATE ngAppPrj/src/karma.conf.js (964 bytes)
	CREATE ngAppPrj/src/tsconfig.app.json (166 bytes)
	CREATE ngAppPrj/src/tsconfig.spec.json (256 bytes)
	CREATE ngAppPrj/src/tslint.json (314 bytes)
	CREATE ngAppPrj/src/assets/.gitkeep (0 bytes)
	CREATE ngAppPrj/src/environments/environment.prod.ts (51 bytes)
	CREATE ngAppPrj/src/environments/environment.ts (662 bytes)
	CREATE ngAppPrj/src/app/app.module.ts (314 bytes)
	CREATE ngAppPrj/src/app/app.component.html (1141 bytes)
	CREATE ngAppPrj/src/app/app.component.spec.ts (984 bytes)
	CREATE ngAppPrj/src/app/app.component.ts (212 bytes)
	CREATE ngAppPrj/src/app/app.component.css (0 bytes)
	CREATE ngAppPrj/e2e/protractor.conf.js (752 bytes)
	CREATE ngAppPrj/e2e/tsconfig.e2e.json (213 bytes)
	CREATE ngAppPrj/e2e/src/app.e2e-spec.ts (304 bytes)
	CREATE ngAppPrj/e2e/src/app.po.ts (208 bytes)
	npm WARN deprecated circular-json@0.5.9: CircularJSON is in maintenance only, flatted is its successor.

	> node-sass@4.10.0 install D:\Programming_Angular\ngAppPrj\node_modules\node-sass
	> node scripts/install.js

	Downloading binary from https://github.com/sass/node-sass/releases/download/v4.10.0/win32-x64-57_binding.node
	Download complete  ] - :
	Binary saved to D:\Programming_Angular\ngAppPrj\node_modules\node-sass\vendor\win32-x64-57\binding.node
	Caching binary to C:\Users\e3002198\AppData\Roaming\npm-cache\node-sass\4.10.0\win32-x64-57_binding.node

	> node-sass@4.10.0 postinstall D:\Programming_Angular\ngAppPrj\node_modules\node-sass
	> node scripts/build.js

	Binary found at D:\Programming_Angular\ngAppPrj\node_modules\node-sass\vendor\win32-x64-57\binding.node
	Testing binary
	Binary is fine
	npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
	npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

	added 1086 packages from 1314 contributors and audited 39190 packages in 371.604s
	found 0 vulnerabilities

	'git' is not recognized as an internal or external command,
	operable program or batch file.


D:\Programming_Angular\ngAppPrj>npm install --save bootstrap@3
	npm WARN rollback Rolling back node-pre-gyp@0.10.0 failed (this is probably harmless): EPERM: operation not permitted, rmdir 'D:\Programming_Angular\ngAppPrj\node_modules\fsevents\node_modules'
	npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
	npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

	+ bootstrap@3.3.7
	added 1 package from 1 contributor and audited 39191 packages in 22.594s
	found 0 vulnerabilities


D:\Programming_Angular\ngAppPrj>ng -v
     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / ? \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/

Angular CLI: 6.2.8
Node: 8.12.0
OS: win32 x64
Angular: 6.1.10
... animations, common, compiler, compiler-cli, core, forms
... http, language-service, platform-browser
... platform-browser-dynamic, router

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.8.8
@angular-devkit/build-angular     0.8.8
@angular-devkit/build-optimizer   0.8.8
@angular-devkit/build-webpack     0.8.8
@angular-devkit/core              0.8.8
@angular-devkit/schematics        0.8.8
@angular/cli                      6.2.8
@ngtools/webpack                  6.2.8
@schematics/angular               0.8.8
@schematics/update                0.8.8
rxjs                              6.2.2
typescript                        2.9.2
webpack                           4.16.4


D:\Programming_Angular\ngAppPrj>ng generate component recipes --spec false
	CREATE src/app/recipes/recipes.component.html (26 bytes)
	CREATE src/app/recipes/recipes.component.ts (273 bytes)
	CREATE src/app/recipes/recipes.component.css (0 bytes)
	UPDATE src/app/app.module.ts (482 bytes)
	

D:\Programming_Angular\ngAppPrj>ng generate component recipes/recipe-list --spec false
	CREATE src/app/recipes/recipe-list/recipe-list.component.html (30 bytes)
	CREATE src/app/recipes/recipe-list/recipe-list.component.ts (288 bytes)
	CREATE src/app/recipes/recipe-list/recipe-list.component.css (0 bytes)
	UPDATE src/app/app.module.ts (590 bytes)


D:\Programming_Angular\ngAppPrj>ng generate component recipes/recipe-detail --spec false
	CREATE src/app/recipes/recipe-detail/recipe-detail.component.html (32 bytes)
	CREATE src/app/recipes/recipe-detail/recipe-detail.component.ts (296 bytes)
	CREATE src/app/recipes/recipe-detail/recipe-detail.component.css (0 bytes)
	UPDATE src/app/app.module.ts (706 bytes)


D:\Programming_Angular\ngAppPrj>ng generate component recipes/recipe-list/recipe-item --spec false
	CREATE src/app/recipes/recipe-list/recipe-item/recipe-item.component.html (30 bytes)
	CREATE src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts (288 bytes)
	CREATE src/app/recipes/recipe-list/recipe-item/recipe-item.component.css (0 bytes)
	UPDATE src/app/app.module.ts (826 bytes)


D:\Programming_Angular\ngAppPrj>ng g c shopping-list --spec false
	CREATE src/app/shopping-list/shopping-list.component.html (32 bytes)
	CREATE src/app/shopping-list/shopping-list.component.ts (296 bytes)
	CREATE src/app/shopping-list/shopping-list.component.css (0 bytes)
	UPDATE src/app/app.module.ts (934 bytes)


D:\Programming_Angular\ngAppPrj>ng g c shopping-list/shopping-edit --spec false
	CREATE src/app/shopping-list/shopping-edit/shopping-edit.component.html (32 bytes)
	CREATE src/app/shopping-list/shopping-edit/shopping-edit.component.ts (296 bytes)
	CREATE src/app/shopping-list/shopping-edit/shopping-edit.component.css (0 bytes)
	UPDATE src/app/app.module.ts (1056 bytes)


