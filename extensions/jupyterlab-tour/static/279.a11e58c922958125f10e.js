(self.webpackChunkjupyterlab_tour=self.webpackChunkjupyterlab_tour||[]).push([[279],{279:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ITourManager:()=>T,default:()=>B});var r=n(835),s=n(464),o=n(575),a=n(883),i=n(337),l=n(242),u=n(271),c=n.n(u),d=n(456),p=n.n(d),h=n(378),m=n.n(h);class g extends c().Component{constructor(e){super(e),this.reset=()=>{this.setState({run:!0,index:0})},this._handleJoyrideCallback=e=>{const{status:t}=e,n=[h.STATUS.FINISHED,h.STATUS.SKIPPED];if(this.props.tours[this.state.index].handleTourEvent(e),n.includes(t)){this.setState({run:!1});const e=this.state.index+1;e<this.props.tours.length?this.setState({index:e,run:!0}):this.setState({index:-1})}},this.state={run:!0,index:0}}render(){return this.props.tours&&this.props.tours[this.state.index]?c().createElement(m(),Object.assign({key:this.props.tours[this.state.index].id},this.props.tours[this.state.index].options,{callback:this._handleJoyrideCallback,run:this.state.run,steps:this.props.tours[this.state.index].steps})):null}}function _(e){const t=c().useRef(null);return t.current&&t.current.reset(),c().createElement(g,{ref:t,tours:e.tours})}function b(e){return c().createElement(r.UseSignal,{signal:e.tourLaunched,initialArgs:[]},((e,t)=>t&&t.length>0?c().createElement(_,{tours:t}):null))}var f=n(797);const y="jupyterlab-tour",S=`${y}:plugin`,v=`${y}:user-tours`,E=`${y}:default-tours`,T=new f.Token(`${y}:ITourManager`),k=new f.Token(`${y}:IUserTourManager`);var w;!function(e){e.addTour=`${y}:add`,e.launch=`${y}:launch`}(w||(w={}));const j=`${y}:welcome`,x=`${y}:notebook`,I={continuous:!0,showProgress:!0,showSkipButton:!0,styles:{options:{arrowColor:"var(--jp-layout-color1)",backgroundColor:"var(--jp-layout-color1)",beaconSize:36,overlayColor:"var(--jp-dialog-background)",primaryColor:"var(--jp-brand-color1)",spotlightShadow:"var(--jp-elevation-z6)",textColor:"var(--jp-ui-font-color1)",zIndex:100}}};var C=n(168),D=n(477);class A{constructor(e,t,n){this.handleTourEvent=e=>{if(!e)return;const{status:t,step:n,index:r}=e;t!==this._previousStatus&&(this._previousStatus=t,this._currentStepIndex=-1,t===h.STATUS.FINISHED?this._finished.emit(e):t===h.STATUS.SKIPPED?this._skipped.emit(e):t===h.STATUS.RUNNING?(this._currentStepIndex=0,this._started.emit(e)):t===h.STATUS.ERROR&&console.error(`An error occurred with the tour at step: ${n}`)),t===h.STATUS.RUNNING&&(r!==this._previousStepIndex&&(this._previousStepIndex=r,this._currentStepIndex=e.index),this._stepChanged.emit(e))},this._skipped=new C.Signal(this),this._finished=new C.Signal(this),this._started=new C.Signal(this),this._stepChanged=new C.Signal(this),this._currentStepIndex=-1,this._isDisposed=!1,this._previousStatus=h.STATUS.READY,this._previousStepIndex=-1,this._steps=new Array,this._label=t,this._id=e;const r=null!=n?n:{},{styles:s}=r,o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n}(r,["styles"]);this._options=Object.assign(Object.assign({},I),o),this._options.styles||(this._options.styles={}),this._options.styles.options=Object.assign(Object.assign({},this._options.styles.options||{}),(null==s?void 0:s.options)||{})}get currentStepIndex(){return this._currentStepIndex}get finished(){return this._finished}get hasSteps(){return this.steps.length>0}get id(){return this._id}get isDisposed(){return this._isDisposed}get label(){return this._label}get options(){return this._options}set options(e){this._options=f.JSONExt.deepCopy(e)}get skipped(){return this._skipped}get started(){return this._started}get stepChanged(){return this._stepChanged}get steps(){return this._steps}set steps(e){this._steps=e}addStep(e){e&&this.steps.push(e)}createAndAddStep(e,t,n,r){const s={title:r,placement:n,target:e,content:t};return this.addStep(s),s}dispose(){this.isDisposed||(this._isDisposed=!0,C.Signal.clearData(this))}isRunning(){return this._currentStepIndex>=0}replaceStep(e,t){if(e<0||e>=this.steps.length)return;const n=this._steps;n[e]=t,this.steps=n}removeStep(e){return e<0||e>=this.steps.length?null:this.steps.splice(e,1)[0]}}const N="3.0.0",M=`${y}:state`;class O{constructor(e,t,n){this.createTour=(e,t,n=!0,r={})=>{if(this._tours.has(e))throw new Error(this._trans.__("Error creating new tour. TourHandler id's must be unique.\nTutorial with the id: '%1' already exists.",e));r.locale||(r.locale=this._locale);const s=new A(e,t,r);if(this._menu&&n){const e=this._menu.helpMenu.menu.addItem({args:{id:s.id},command:w.launch});this._menuItems.set(s.id,e)}this._tours.set(e,s);const o=e=>{this._rememberDoneTour(e.id)};return s.skipped.connect(o),s.finished.connect(o),s},this._forgetDoneTour=e=>{this._state.toursDone.delete(e),this._stateDB.save(M,{toursDone:[...this._state.toursDone],version:N})},this._rememberDoneTour=e=>{this._state.toursDone.add(e),this._stateDB.save(M,{toursDone:[...this._state.toursDone],version:N})},this._activeTours=new Array,this._isDisposed=!1,this._menuItems=new Map,this._state={toursDone:new Set,version:N},this._tourLaunched=new C.Signal(this),this._stateDB=e,this._menu=n,this._tours=new Map,this._trans=t.load("jupyterlab-tour"),this._translator=t,this._locale={back:this._trans.__("Back"),close:this._trans.__("Close"),last:this._trans.__("Done"),next:this._trans.__("Next"),open:this._trans.__("Open"),skip:this._trans.__("Skip")},this._stateDB.fetch(M).then((e=>{if(e){const t=e;t.version!==N?(this._state.toursDone=new Set,this._stateDB.save(M,{version:N,toursDone:[]})):this._state.toursDone=new Set([...t.toursDone])}}))}get activeTour(){return this._activeTours.filter((e=>e.isRunning()))[0]}get isDisposed(){return this._isDisposed}get tourLaunched(){return this._tourLaunched}get tours(){return this._tours}get translator(){return this._trans}addTour(e){try{let t=this._trans;e.translation&&(t=this._translator.load(e.translation));const n=this.createTour(e.id,t.__(e.label),!1!==e.hasHelpEntry,e.options);return e.steps.forEach((e=>{const r=Object.assign({},e);"string"==typeof r.title&&(r.title=t.__(r.title)),"string"==typeof r.content&&(r.content=t.__(r.content)),n.addStep(r)})),n}catch(t){return console.error(this._trans.__("Fail to add tour '%1' (%2)",e.label,e.id),t),null}}dispose(){this.isDisposed||(this._isDisposed=!0,C.Signal.clearData(this))}launch(e,t=!0){if(!e||0===e.length||this.activeTour)return Promise.resolve();let n;n="string"==typeof e[0]?e.map((e=>this._tours.get(e))):e;let r=n.filter((e=>e&&e.hasSteps));t||(r=r.filter((e=>!this._state.toursDone.has(e.id))));const s=()=>{this._activeTours=r,this._tourLaunched.emit(r)};return r.length>0&&(t?s():D.INotification.info(this._trans.__("Try the %1.",r[0].label),{autoClose:1e4,buttons:[{label:this._trans.__("Start now"),callback:s},{label:this._trans.__("Don't show me again"),callback:()=>{r.forEach((e=>this._rememberDoneTour(e.id)))}}]})),Promise.resolve()}removeTour(e){if(!e)return;let t;t="string"==typeof e?e:e.id;const n=this._tours.get(t);if(n){if(this._menu&&this._menuItems.has(t)){const e=this._menuItems.get(t);e&&this._menu.helpMenu.menu.removeItem(e),this._menuItems.delete(t)}n.dispose(),this._tours.delete(t),this._forgetDoneTour(t)}}}class P{constructor(e){var t;this._ready=new f.PromiseDelegate,this._userTours=null,this._tourManager=e.tourManager,this._translator=null!==(t=e.translator)&&void 0!==t?t:l.nullTranslator,e.getSettings().then((e=>{this._userTours=e,this._userTours.changed.connect(this._userToursChanged,this),this._userToursChanged(),this._ready.resolve()})).catch((e=>{console.warn(e),this._ready.reject(e)}))}get ready(){return this._ready.promise}get tourManager(){return this._tourManager}_userToursChanged(){var e,t;const n=[...null===(t=null===(e=this._userTours)||void 0===e?void 0:e.composite)||void 0===t?void 0:t.tours];if(n){for(const e of this._tourManager.tours.keys())e.startsWith(v)&&this._tourManager.removeTour(e);n.sort(this._compareTours);for(const e of n)try{this._addUserTour(e),this._tourManager.launch([e.id],!1)}catch(t){const n=this._tourManager.translator;console.groupCollapsed(n.__("Error encountered adding user tour %1 (%2)",e.label,e.id),t),console.table(e.steps),console.log(e.options||{}),console.groupEnd()}}}_addUserTour(e){this._tourManager.addTour(Object.assign(Object.assign({},e),{id:`${v}:${e.id}`}))}_compareTours(e,t){let n=this._tourManager.translator;e.translation&&(n=this._translator.load(e.translation));let r=this._tourManager.translator;return t.translation&&(r=this._translator.load(t.translation)),n.__(e.label).toLocaleLowerCase().localeCompare(r.__(t.label).toLocaleLowerCase())||e.id.localeCompare(t.id)}}const B=[{id:S,autoStart:!0,activate:function(e,t,n,s,o){const{commands:a}=e;o=null!=o?o:l.nullTranslator;const i=new O(t,o,s);a.addCommand(w.launch,{label:e=>{if(e.id){const t=i.tours.get(e.id);return i.translator.__(t.label)}return i.translator.__("Launch a Tour")},usage:i.translator.__("Launch a tour.\nIf no id provided, prompt the user.\nArguments {id: Tour ID}"),isEnabled:()=>!i.activeTour,execute:async e=>{let t=e.id;const n=void 0===e.force||e.force;if(!t){const e=await r.InputDialog.getItem({items:Array.from(i.tours.keys()),title:i.translator.__("Choose a tour")});if(!e.button.accept||!e.value)return;t=e.value}i.launch([t],n)}}),a.addCommand(w.addTour,{label:i.translator.__("Add a tour"),usage:i.translator.__("Add a tour and returns it.\nArguments {tour: ITour}\nReturns `null` if a failure occurs."),execute:e=>i.addTour(e.tour)}),n&&n.addItem({category:i.translator.__("Help"),command:w.launch});const u=document.createElement("div");return document.body.appendChild(u),p().render(c().createElement(b,{tourLaunched:i.tourLaunched}),u),i},requires:[a.IStateDB],optional:[r.ICommandPalette,s.IMainMenu,l.ITranslator],provides:T},{id:v,autoStart:!0,activate:function(e,t,n,r){return r=r||l.nullTranslator,new P({tourManager:n,translator:r,getSettings:()=>t.load(v)})},requires:[i.ISettingRegistry,T],optional:[l.ITranslator],provides:k},{id:E,autoStart:!0,activate:function(e,t,n){(function(e,t,n){const{commands:r,shell:s}=t;!function(e,t){const n=e.translator.__.bind(e.translator),r=e.createTour(j,n("Welcome Tour"),!0);r.options=Object.assign(Object.assign({},r.options),{hideBackButton:!0}),r.addStep({target:"#jp-main-dock-panel",content:n("The following tour will point out some of the main UI components within JupyterLab."),placement:"center",title:n("Welcome to JupyterLab!")}),r.addStep({content:c().createElement(c().Fragment,null,c().createElement("p",null,n("Pause the tour by clicking anywhere outside of the tooltip.")),c().createElement("p",null,n("Resume the tour by clicking on the symbol:")),c().createElement("div",{style:{display:"inline-block",height:"60px"}},c().createElement("span",{style:{animation:"1.2s ease-in-out 0s infinite normal none running joyride-beacon-inner",backgroundColor:"var(--jp-brand-color1)",borderRadius:"50%",display:"block",height:"30px",opacity:"0.7",position:"relative",top:"15px",width:"30px"}}),c().createElement("span",{style:{animation:"1.2s ease-in-out 0s infinite normal none running joyride-beacon-outer",border:"2px solid var(--jp-brand-color1)",borderRadius:"50%",boxSizing:"border-box",display:"block",height:"60px",left:"-15px",opacity:"0.9",position:"relative",top:"-30px",width:"60px"}})),c().createElement("p",null,c().createElement("small",null,n("Tip: Tours can be restarted from the Help menu.")))),target:"#jp-main-dock-panel",placement:"center",title:n("Some information on the tour, first.")}),r.addStep({content:c().createElement("details",null,c().createElement("summary",null,n("This is the top menu bar where you can access several menus.")),c().createElement("ul",null,c().createElement("li",null,c().createElement("strong",null,n("File")),n(": actions related to files and directories")),c().createElement("li",null,c().createElement("strong",null,n("Edit")),n(": actions related to editing documents and other activities")),c().createElement("li",null,c().createElement("strong",null,n("View")),n(": actions that alter the appearance of JupyterLab")),c().createElement("li",null,c().createElement("strong",null,n("Run")),n(": actions for running code in notebooks and code consoles for example")),c().createElement("li",null,c().createElement("strong",null,n("Kernel")),n(": actions for managing kernels (i.e. separate processes for running code)")),c().createElement("li",null,c().createElement("strong",null,n("Tabs")),n(": a list of the open documents and activities")),c().createElement("li",null,c().createElement("strong",null,n("Settings")),n(": common settings and an advanced settings editor")),c().createElement("li",null,c().createElement("strong",null,n("Help")),n(": help links")))),placement:"bottom",target:"#jp-MainMenu",title:n("Top Menu Options"),styles:{tooltipContent:{overflowY:"auto",maxHeight:"200px"}}}),r.addStep({content:c().createElement(c().Fragment,null,c().createElement("p",null,n("The main area enables you to arrange documents and activities into \n            panels of tabs that can be resized or subdivided.")),c().createElement("p",null,n("Drag a tab to the center of a tab panel to move the tab to the panel."),c().createElement("br",null),n("Subdivide a tab panel by dragging a tab to the left, right, top, or bottom of the panel.")),c().createElement("p",null,n("The tab for the current activity is marked with a colored top border."))),placement:"left-end",target:"#jp-main-dock-panel",title:n("Main Work Area")}),r.addStep({target:"#jp-main-statusbar",content:c().createElement("p",null,n("Various information are reported on the status bar.")),placement:"top",title:n("Status Bar")}),r.addStep({content:c().createElement(c().Fragment,null,c().createElement("p",null,n("This sidebar contains a number of tabs: a file browser, a list of tabs, running kernels and terminals,...")),c().createElement("p",null,c().createElement("small",null,n('Tip: The sidebar can be collapsed or expanded by selecting \n              "Show Left Sidebar" in the View menu or by \n              clicking on the active sidebar tab.')))),placement:"right",target:".jp-SideBar.jp-mod-left",title:n("Left Side Bar")}),r.addStep({content:c().createElement(c().Fragment,null,c().createElement("p",null,n("The file browser enable you to work with files and directories on your \n            system. This includes opening, creating, deleting, renaming, \n            downloading, copying, and sharing files and directories.")),c().createElement("p",null,c().createElement("small",null,n("Tip: Actions can be triggered through the context menu.")))),placement:"right",target:"#filebrowser",title:n("File Browser")}),r.addStep({content:c().createElement(c().Fragment,null,c().createElement("p",null,n("All user actions in JupyterLab are processed through a centralized \n            command system, called command palette. It provides a keyboard-driven \n            way to search for and run JupyterLab commands.")),c().createElement("p",null,c().createElement("small",null,n('Tip: To open it, the default shortcut is "Ctrl + Shift + C"')))),placement:"center",target:"#jp-main-dock-panel",title:n("Command Palette")}),r.stepChanged.connect(((e,n)=>{switch(n.type){case"step:after":".jp-SideBar.jp-mod-left"===n.step.target?t.execute("filebrowser:activate"):"#filebrowser"===n.step.target&&t.execute("apputils:activate-command-palette")}}))}(e,r),function(e,t,n,r){const s=e.translator.__.bind(e.translator),a=e.createTour(x,s("Notebook Tour"),!0);a.options=Object.assign(Object.assign({},a.options),{hideBackButton:!0,disableScrolling:!0});let i=null,l=null;a.addStep({target:".jp-MainAreaWidget.jp-NotebookPanel",content:c().createElement("p",null,s("Notebooks are documents combining live runnable code with narrative text (i.e. text, images,...).")),placement:"center",title:s("Working with notebooks!")}),a.addStep({target:".jp-Cell.jp-Notebook-cell",content:c().createElement("p",null,s("Notebook consists of one cells list."),c().createElement("br",null),s("This is the first cell.")),placement:"bottom"}),a.addStep({target:".jp-NotebookPanel-toolbar .jp-Notebook-toolbarCellType",content:c().createElement(c().Fragment,null,c().createElement("p",null,s("A cell can have different type")),c().createElement("ul",null,c().createElement("li",null,c().createElement("strong",null,s("Code")),s(": Executable code")),c().createElement("li",null,c().createElement("strong",null,s("Markdown")),s(": Markdown formatted text")),c().createElement("li",null,c().createElement("strong",null,s("Raw")),s(": Plain text"))))}),a.addStep({target:".jp-Notebook-cell:last-child .jp-InputArea.jp-Cell-inputArea",content:c().createElement("p",null,s("A cell has an input and an output area. This is the input area that you can edit with \n          the proper syntax depending on the type.")),placement:"bottom"}),a.addStep({target:'.jp-NotebookPanel-toolbar svg[data-icon="ui-components:run"]',content:c().createElement("p",null,s("Hitting the Play button (or pressing Shift+Enter) will execute the cell content.")),placement:"right"}),a.addStep({target:".jp-Notebook-cell:last-child .jp-OutputArea.jp-Cell-outputArea",content:c().createElement("p",null,s("Once a cell has been executed. Its result is display in the output cell area.")),placement:"bottom"}),a.addStep({target:".jp-NotebookPanel-toolbar .jp-KernelName",content:c().createElement("p",null,s('When executing a "Code" cell, its code is sent to a execution kernel.'),c().createElement("br",null),s("Its name and its status are displayed here and in the status bar.")),placement:"bottom"}),a.addStep({target:"#jp-running-sessions",content:c().createElement("p",null,s("The running kernels are listed on this tab."),c().createElement("br",null),s(" It can be used to open the associated document or to shut them down.")),placement:"right"}),a.addStep({target:"#jp-property-inspector",content:c().createElement("p",null,s("Metadata (like tags) can be added to cells through this tab.")),placement:"left"}),a.stepChanged.connect(((e,t)=>{if("tour:start"===t.type)l=null;else if("step:before"===t.type)switch(t.step.target){case'.jp-NotebookPanel-toolbar svg[data-icon="ui-components:run"]':if(r&&i){const{content:e,context:t}=i;o.NotebookActions.run(e,t.sessionContext)}}else if("step:after"===t.type)switch(t.step.target){case".jp-NotebookPanel-toolbar .jp-Notebook-toolbarCellType":if(r&&(i=r.currentWidget,i&&!l)){const e=i.content;o.NotebookActions.insertBelow(e);const t=e.activeCell;l=e.activeCellIndex,t&&(t.model.value.text="a = 2\na")}break;case".jp-NotebookPanel-toolbar .jp-KernelName":n.activateById("jp-running-sessions");break;case"#jp-running-sessions":n.activateById("jp-property-inspector")}})),a.finished.connect(((e,n)=>{"#jp-property-inspector"===n.step.target&&(t.execute("filebrowser:activate"),r&&i&&null!==l&&(i.content.activeCellIndex=l,o.NotebookActions.deleteCells(i.content),l=null))}))}(e,r,s,n)})(t,e,n),n&&n.widgetAdded.connect((()=>{t.tours.has(x)&&t.launch([x],!1)})),e.restored.then((()=>{t.tours.has(j)&&setTimeout((()=>t.launch([j],!1)),3e3)}))},requires:[T],optional:[o.INotebookTracker]}]}}]);