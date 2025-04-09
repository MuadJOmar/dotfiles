exports.id=301,exports.ids=[301],exports.modules={2619:(e,t,i)=>{i.d(t,{PatchDetailsWebviewProvider:()=>PatchDetailsWebviewProvider});var s=i(1398),a=i(6525),r=i(1518),o=i(8336),n=i(1192),c=i(4505),h=i(9349),l=i(1403),d=i(6066),p=i(2636),f=i(8554),u=i(3310),g=i(1454),y=i(6655),m=i(6103),w=i(6189),v=i(9487),C=i(6851),b=i(5576),D=i(3934);async function _(e,t,i,r){let o=(0,b.v6)(),n=[];function c(e){return e.sort((e,t)=>(e.picked?-1:1)-(t.picked?-1:1)||(0,D.wN)(e.label,t.label))}try{let h=s.window.createQuickPick();if(n.push(h,h.onDidHide(()=>o.fulfill(void 0)),h.onDidAccept(()=>h.busy?void 0:o.fulfill(h.selectedItems.map(e=>e.item))),h.onDidTriggerButton(e=>{e===v.tH&&(h.canSelectMany?h.selectedItems=[]:o.fulfill([]))})),h.ignoreFocusOut=!0,h.title=e,h.placeholder=t,h.matchOnDescription=!0,h.matchOnDetail=!0,h.canSelectMany=r?.multiselect??!0,h.buttons=r?.clearButton?[v.tH]:[],h.busy=!0,h.show(),i=await i,r?.filter!=null&&(i=i.filter(r.filter)),!o.pending)return;let l=i.map(e=>{let t={label:e.name??e.username,description:e.email,picked:r?.picked?.(e)??!1,item:e,iconPath:(0,a.m_)(e.email,void 0)};return t.alwaysShow=t.picked,t});if(!o.pending)return;return h.items=c(l),h.canSelectMany?h.selectedItems=l.filter(e=>e.picked):h.activeItems=l.filter(e=>e.picked),h.busy=!1,n.push(h.onDidChangeSelection((0,C.s)(e=>{if(!h.canSelectMany||h.busy)return;let t=!1;for(let i of h.items){let s=e.includes(i);(i.picked!==s||i.alwaysShow!==s)&&(i.alwaysShow=i.picked=s,t=!0)}t&&(h.items=c([...h.items]),h.selectedItems=e)},10))),await o.promise}finally{n.forEach(e=>void e.dispose())}}var x=i(5288),S=i(4301),k=i(1078),P=i(655),R=i(3500),U=i(4342),M=i(7747),I=i(6006),F=i(6983),T=i(3373),O=i(5510);let W="patchDetails",V=new O.Q2(W,"apply"),A=new O.Q2(W,"archive"),E=new O.Q2(W,"create"),H=new O.Q2(W,"openInGraph"),$=new O.Q2(W,"checked");new O.Q2(W,"selectRepo"),new O.Q2(W,"selectBase"),new O.Q2(W,"file/actions/execute");let Q=new O.Q2(W,"file/open");new O.Q2(W,"file/openOnRemote");let L=new O.Q2(W,"file/compareWorking"),z=new O.Q2(W,"file/comparePrevious"),N=new O.Q2(W,"preferences/update"),G=new O.Q2(W,"switchMode"),B=new O.Q2(W,"cloud/copyLink");new O.Q2(W,"local/createPatch");let Z=new O.Q2(W,"create/repository/check"),q=new O.Q2(W,"update/create/metadata"),j=new O.Q2(W,"update/draft/metadata"),Y=new O.Q2(W,"update/draft/permissions"),J=new O.Q2(W,"update/users"),K=new O.Q2(W,"update/userSelection"),X=new O.Oz(W,"explain"),ee=new O.Oz(W,"generate"),et=new O.C1(W,"didChange",!0),ei=new O.C1(W,"create/didChange"),es=new O.C1(W,"draft/didChange"),ea=new O.C1(W,"preferences/didChange"),er=new O.C1(W,"draft/didChangeRepository");new O.C1(W,"org/settings/didChange");let RepositoryRefChangeset=class RepositoryRefChangeset{constructor(e,t,i,s,a,r){this.container=e,this.repository=t,this.revision=i,this.files=s,this.checked=a,this.expanded=r}type="revision";dispose(){}suspend(){}resume(){}_checked=!1;get checked(){return this._checked}set checked(e){this._checked=e}_expanded=!1;get expanded(){return this._expanded}set expanded(e){this._expanded!==e&&(this._expanded=e)}async getChange(){return{type:"revision",repository:{name:this.repository.name,path:this.repository.path,uri:this.repository.uri.toString()},revision:this.revision,files:this.files,checked:this.checked,expanded:this.expanded}}};let RepositoryWipChangeset=class RepositoryWipChangeset{constructor(e,t,i,s,a,r){this.container=e,this.repository=t,this.revision=i,this.onDidChangeRepositoryWip=s,this.checked=a,this.expanded=r}type="wip";_disposable;dispose(){this._disposable?.dispose(),this._disposable=void 0}suspend(){this._disposable?.dispose(),this._disposable=void 0}resume(){this._files=void 0,this._expanded&&this.subscribe()}_checked=!1;get checked(){return this._checked}set checked(e){this._checked=e}_expanded=!1;get expanded(){return this._expanded}set expanded(e){this._expanded!==e&&(this._files=void 0,e?this.subscribe():(this._disposable?.dispose(),this._disposable=void 0),this._expanded=e)}_files;async getChange(){let e;return this.expanded&&(null==this._files&&(this._files=this.getFiles()),e=await this._files),{type:"wip",repository:{name:this.repository.name,path:this.repository.path,uri:this.repository.uri.toString()},revision:this.revision,files:e?.files,checked:this.checked,expanded:this.expanded}}subscribe(){null==this._disposable&&(this._disposable=s.Disposable.from(this.repository.watchFileSystem(1e3),this.repository.onDidChangeFileSystem(()=>this.onDidChangeWip(),this),this.repository.onDidChange(e=>{e.changed(l.Z_.Index,l.Ti.Any)&&this.onDidChangeWip()})))}onDidChangeWip(){this._files=void 0,this.onDidChangeRepositoryWip(this)}async getFiles(){let e=await this.container.git.status(this.repository.path).getStatus(),t=[];if(null!=e)for(let i of e.files){let e={repoPath:i.repoPath,path:i.path,status:i.status,originalPath:i.originalPath,staged:i.staged};t.push(e),i.staged&&i.wip&&t.push({...e,staged:!1})}return{files:t}}};var eo=Object.defineProperty,en=Object.getOwnPropertyDescriptor,ec=(e,t,i,s)=>{for(var a,r=s>1?void 0:s?en(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(r=(s?a(t,i,r):a(r))||r);return s&&r&&eo(t,i,r),r};let PatchDetailsWebviewProvider=class PatchDetailsWebviewProvider{constructor(e,t){this.container=e,this.host=t,this._context={mode:"create",draft:void 0,draftGkDevUrl:void 0,draftUserState:void 0,draftVisibiltyState:void 0,create:void 0,preferences:this.getPreferences(),orgSettings:this.getOrgSettings()},this.setHostTitle(),this.host.description=r.WZ,this._disposable=s.Disposable.from(k.H.onDidChangeAny(this.onAnyConfigurationChanged,this),e.git.onDidChangeRepositories(this.onRepositoriesChanged,this),(0,P.wt)(this.onContextChanged,this))}_context;_disposable;dispose(){this._disposable.dispose()}canReuseInstance(...e){let[t]=e;if(t?.mode==="view"&&null!=t.draft)switch(t.draft.draftType){case"cloud":return this._context.draft?.draftType===t.draft.draftType&&this._context.draft.id===t.draft.id;case"local":return this._context.draft?.draftType===t.draft.draftType&&this._context.draft.patch.contents===t.draft.patch?.contents}return!1}getTelemetryContext(){return{...this.host.getTelemetryContext()}}async onShowing(e,t,...i){let[s]=i;if(s?.mode==="view"&&null!=s.draft)await this.updateViewDraftState(s.draft),this.trackViewDraft(this._context.draft,s.source);else{this.container.git.isDiscoveringRepositories&&await this.container.git.isDiscoveringRepositories;let e=s?.mode==="create"&&null!=s.create?s.create:{repositories:void 0};this.updateCreateDraftState(e)}return t?.preserveVisibility&&!this.host.visible?[!1,void 0]:[!0,void 0]}includeBootstrap(){return this.getState(this._context)}registerCommands(){let e=[];return this.host.isHost("view")&&e.push((0,S.Lb)(`${this.host.id}.refresh`,()=>this.host.refresh(!0)),(0,S.Lb)(`${this.host.id}.close`,()=>this.closeView())),e}onMessageReceived(e){switch(!0){case V.is(e):this.applyPatch(e.params);break;case B.is(e):this.copyCloudLink();break;case E.is(e):this.createDraft(e.params);break;case X.is(e):this.explainRequest(X,e);break;case ee.is(e):this.generateRequest(ee,e);break;case z.is(e):this.openFileComparisonWithPrevious(e.params);break;case L.is(e):this.openFileComparisonWithWorking(e.params);break;case Q.is(e):this.openFile(e.params);break;case H.is(e):(0,S.RS)("gitlens.showInCommitGraph",{ref:(0,p.kA)(e.params.ref,e.params.repoPath,{refType:"revision"})});break;case G.is(e):this.switchMode(e.params);break;case q.is(e):this.updateCreateMetadata(e.params);break;case j.is(e):this.updateDraftMetadata(e.params);break;case Y.is(e):this.updateDraftPermissions();break;case Z.is(e):this.updateCreateCheckedState(e.params);break;case N.is(e):this.updatePreferences(e.params);break;case $.is(e):this.onPatchChecked(e.params);break;case J.is(e):this.onInviteUsers();break;case K.is(e):this.onUpdatePatchUserSelection(e.params);break;case A.is(e):this.archiveDraft(e.params.reason)}}onRefresh(){this.updateState(!0)}onReloaded(){this.updateState(!0)}onVisibilityChanged(e){this._context.create?.changes.forEach(t=>e?t.resume():t.suspend()),e&&this.host.sendPendingIpcNotifications()}onAnyConfigurationChanged(e){(k.H.changed(e,["defaultDateFormat","views.patchDetails.files","views.patchDetails.avatars"])||k.H.changedCore(e,"workbench.tree.renderIndentGuides")||k.H.changedCore(e,"workbench.tree.indent"))&&(this._context.preferences={...this._context.preferences,...this.getPreferences()},this.updateState())}getPreferences(){return{avatars:k.H.get("views.patchDetails.avatars"),dateFormat:k.H.get("defaultDateFormat")??"MMMM Do, YYYY h:mma",files:k.H.get("views.patchDetails.files"),indentGuides:k.H.getCore("workbench.tree.renderIndentGuides")??"onHover",indent:k.H.getCore("workbench.tree.indent")}}onContextChanged(e){["gitlens:gk:organization:ai:enabled","gitlens:gk:organization:drafts:enabled"].includes(e)&&(this._context.orgSettings=this.getOrgSettings(),this.updateState())}getOrgSettings(){return{ai:(0,P.SD)("gitlens:gk:organization:ai:enabled",!1),byob:(0,P.SD)("gitlens:gk:organization:drafts:byob",!1)}}onRepositoriesChanged(e){if("create"===this.mode&&null!=this._context.create){if(this._context.create?.showingAllRepos)for(let t of e.added)this._context.create.changes.set(t.uri.toString(),new RepositoryWipChangeset(this.container,t,{to:d.SU,from:"HEAD"},this.onRepositoryWipChanged.bind(this),!1,!0));for(let t of e.removed)this._context.create.changes.delete(t.uri.toString());this.notifyDidChangeCreateDraftState()}}onRepositoryWipChanged(e){this.notifyDidChangeCreateDraftState()}get mode(){return this._context.mode}setMode(e,t){this._context.mode=e,this.setHostTitle(e),(0,P.o)("gitlens:views:patchDetails:mode","editor"===k.H.get("cloudPatches.experimental.layout")?void 0:e),t||this.updateState(!0)}setHostTitle(e=this._context.mode){"create"===e?this.host.title="Create Cloud Patch":this._context.draft?.draftType==="cloud"&&"suggested_pr_change"===this._context.draft.type?this.host.title="Cloud Suggestion":this.host.title="Cloud Patch Details"}async applyPatch(e){if(null==this._context.draft||"local"===this._context.draft.draftType||!e.selected?.length)return;let t=this._context.draft.changesets?.[0];if(null==t)return;let i="branch"===e.target;for(let a of t.patches)if(e.selected.includes(a.id))try{let e,t=a.commit??await this.getOrCreateCommitForPatch(a.gkRepositoryId);if(!t)continue;if(i){let i=t.getRepository(),o=await (0,w.vt)(`Select a Branch ${r.EO.Dot} ${i?.name}`,i);if(null==o){s.window.showErrorMessage(`Unable to apply patch to '${a.repository.name}': No branch selected`);continue}let n="string"==typeof o;e={branchName:n?o:o.ref,createBranchIfNeeded:n}}await this.container.git.patch(t.repoPath)?.applyUnreachableCommitForPatch(t.ref,{stash:"prompt",...e}),s.window.showInformationMessage("Patch applied successfully")}catch(e){if(e instanceof o.AL)return;e instanceof c.ol?e.reason===c.a_.AppliedWithConflicts?s.window.showWarningMessage("Patch applied with conflicts"):s.window.showErrorMessage(e.message):s.window.showErrorMessage(`Unable to apply patch onto '${a.baseRef}': ${e.message}`)}}closeView(){if((0,P.o)("gitlens:views:patchDetails:mode",void 0),"create"===this._context.mode)this.container.views.drafts.show();else if(this._context.draft?.draftType==="cloud")if("suggested_pr_change"===this._context.draft.type){let e=this._context.draft.changesets?.[0].patches[0].repository;(0,T.$)({type:"wip",repository:el(e)?e:void 0,source:"patchDetails"})}else this.container.views.drafts.revealDraft(this._context.draft)}copyCloudLink(){this._context.draft?.draftType==="cloud"&&s.env.clipboard.writeText(this._context.draft.deepLinkUrl)}async getOrganizationMembers(){return this.container.organizations.getMembers()}async onInviteUsers(){let e,t,i;"create"===this.mode?(i=this._context.create?.userSelections?.map(e=>e.member.id),t=this._context.create?.userSelections?.find(e=>"owner"===e.member.role),e=t?.user):(i=this._context.draftUserState?.selections?.filter(e=>"delete"!==e.change)?.map(e=>e.member.id),e=this._context.draftUserState?.users.find(e=>"owner"===e.role));let s=await _("Select Collaborators","Choose collaborators to share this patch with",this.getOrganizationMembers(),{multiselect:!0,filter:t=>t.id!==e?.userId,picked:e=>i?.includes(e.id)??!1});if(null==s)return;if("create"===this.mode){let e=s.map(e=>ed(e,void 0,"editor","add"));null!=t&&e.push(t),this._context.create.userSelections=e,this.notifyDidChangeCreateDraftState();return}let a=this._context.draftUserState,r=a.selections,o=new Map,n=new Set(s.map(e=>e.id)),c=[];for(let e of r){if(n.has(e.member.id)||"owner"===e.member.role){o.set(e.member.id,e);continue}c.push({...e,change:"delete"})}for(let e of s){let t=o.get(e.id);null!=t&&"delete"===t.change&&(t.change=void 0),c.push(null!=t?t:ed(e,void 0,"editor","add"))}c.length&&(a.selections=c,this.notifyDidChangeViewDraftState())}onUpdatePatchUserSelection(e){if("create"===this.mode){let t=this._context.create?.userSelections;if(null==t)return;if("remove"===e.role){let i=t.findIndex(t=>t.member.id===e.selection.member.id);if(-1===i)return;t.splice(i,1)}else{let i=t.find(t=>t.member.id===e.selection.member.id);if(null==i)return;i.pendingRole=e.role}this.notifyDidChangeCreateDraftState();return}let t=this._context.draftUserState.selections.find(t=>t.member.id===e.selection.member.id);null!=t&&("remove"===e.role?t.change="delete":(t.change="modify",t.pendingRole=e.role),this.notifyDidChangeViewDraftState())}async createDraft({title:e,changesets:t,description:i,visibility:a,userSelections:r}){if(!await (0,m.G5)(this.container,"Cloud Patches are a Preview feature and require an account.",{source:"cloud-patches",detail:"create"})||!await (0,y.l)(this.container))return;let o=[],n=Object.entries(t),c=1===n.length;for(let[e,t]of n){if(!c&&!1===t.checked)continue;let i=this._context.create?.changes?.get(e);if(null==i)continue;let{revision:s,repository:a}=i;"wip"===t.type&&"staged"===t.checked&&(s={...s,to:d.id}),o.push({repository:a,revision:s})}if(null!=o)try{let t=await this.container.drafts.createDraft("patch",e,o,{description:i,visibility:a});null!=r&&0!==r.length&&await this.container.drafts.addDraftUsers(t.id,r.map(e=>({userId:e.member.id,role:e.pendingRole}))),async function(){let e={title:"View Patch"},i={title:"Copy Link"},a=!1;for(;;){let r=await s.window.showInformationMessage(`Cloud Patch successfully created${a?"— link copied to the clipboard":""}`,e,i);if(r===i){s.env.clipboard.writeText(t.deepLinkUrl),a=!0;continue}r===e&&(0,u.X)({mode:"view",draft:t});break}}(),this.container.views.drafts.refresh(!0).then(()=>void this.container.views.drafts.revealDraft(t)),this.closeView()}catch(e){this.notifyDidChangeCreateDraftState(),s.window.showErrorMessage(`Unable to create draft: ${e.message}`)}}async archiveDraft(e){if(this._context.draft?.draftType!=="cloud")return;let t="suggested_pr_change"===this._context.draft.type,i="Cloud Patch";t&&(i="Code Suggestion");try{await this.container.drafts.archiveDraft(this._context.draft,{archiveReason:e}),this._context.draft={...this._context.draft,isArchived:!0,archivedReason:e};let a="archived";if(t)switch(e){case"accepted":a="accepted";break;case"rejected":a="declined"}s.window.showInformationMessage(`${i} successfully ${a}`),this.notifyDidChangeViewDraftState(),t&&this.trackArchiveDraft(this._context.draft)}catch(r){let a="archive";if(t)switch(e){case"accepted":a="accept";break;case"rejected":a="decline"}s.window.showErrorMessage(`Unable to ${a} ${i}: ${r.message}`)}}async trackArchiveDraft(e){let t;e=await this.ensureDraftContent(e);let i=e.changesets?.[0].patches.find(e=>el(e.repository));(0,l.Z6)(i?.repository)&&(t=await this.container.git.visibility(i.repository.uri));let s=(0,g.y)(e,i);this.container.telemetry.sendEvent("codeSuggestionArchived",{provider:s?.provider,"repository.visibility":t,repoPrivacy:t,draftId:e.id,reason:e.archivedReason},{source:"patchDetails"})}async explainRequest(e,t){let i;if(this._context.draft?.draftType!=="cloud"){this.host.respond(e,t,{error:{message:"Unable to find patch"}});return}try{let e=await this.getDraftPatch(this._context.draft);if(null==e)throw Error("Unable to find patch");let t=await this.getOrCreateCommitForPatch(e.gkRepositoryId);if(null==t)throw Error("Unable to find commit");let s=await this.container.ai.explainCommit(t,{source:"patchDetails",type:`draft-${this._context.draft.type}`},{progress:{location:{viewId:this.host.id}}});if(null==s)throw Error("Error retrieving content");i={result:s.parsed}}catch(e){i={error:{message:e.message}}}this.host.respond(e,t,i)}async generateRequest(e,t){let i,s;if(this._context.create?.changes!=null){for(let e of this._context.create.changes.values())if(e.repository){i=e.repository;break}}if(!i){this.host.respond(e,t,{error:{message:"Unable to find changes"}});return}try{let e=await this.container.ai.generateDraftMessage(i,{source:"patchDetails",type:"patch"},{progress:{location:{viewId:this.host.id}}});if(null==e)throw Error("Error retrieving content");s={title:e.parsed.summary,description:e.parsed.body}}catch(e){s={error:{message:e.message}}}this.host.respond(e,t,s)}async openPatchContents(e){}onPatchChecked(e){if(e.patch.repository.located||!1===e.checked)return;let t=this._context.draft?.changesets?.[0].patches?.find(t=>t.gkRepositoryId===e.patch.gkRepositoryId);null!=t&&this.getOrLocatePatchRepository(t,{prompt:!0,notifyOnLocation:!0})}notifyPatchRepositoryUpdated(e){return this.host.notify(er,{patch:(0,F.l)({...e,contents:void 0,commit:void 0,repository:{id:e.gkRepositoryId,name:e.repository?.name??"",located:el(e.repository)}})})}updateCreateCheckedState(e){let t=this._context.create?.changes.get(e.repoUri);null!=t&&(t.checked=e.checked,this.notifyDidChangeCreateDraftState())}updateCreateMetadata(e){null!=this._context.create&&(this._context.create.title=e.title,this._context.create.description=e.description,this._context.create.visibility=e.visibility,this.notifyDidChangeCreateDraftState())}updateDraftMetadata(e){null!=this._context.draft&&(this._context.draftVisibiltyState=e.visibility,this.notifyDidChangeViewDraftState())}async updateDraftPermissions(){let e=this._context.draft,t=e.id,i=[];null!=this._context.draftVisibiltyState&&this._context.draftVisibiltyState!==e.visibility&&i.push(this.container.drafts.updateDraftVisibility(t,this._context.draftVisibiltyState));let a=this._context.draftUserState?.selections,r=[];if(null!=a)for(let e of a)void 0!==e.change&&("delete"!==e.change&&r.push({userId:e.member.id,role:e.pendingRole}),"add"!==e.change&&i.push(this.container.drafts.removeDraftUser(t,e.member.id)));(0!==i.length||0!==r.length)&&(0!==i.length&&await Promise.all(i),0!==r.length&&await this.container.drafts.addDraftUsers(t,r),await this.createDraftUserState(e,{force:!0}),s.window.showInformationMessage("Cloud Patch successfully updated"),this.notifyDidChangeViewDraftState())}switchMode(e){this.setMode(e.mode)}_notifyDidChangeStateDebounced=void 0;updateState(e=!1){if(this.host.clearPendingIpcNotifications(),e){this.notifyDidChangeState();return}null==this._notifyDidChangeStateDebounced&&(this._notifyDidChangeStateDebounced=(0,C.s)(this.notifyDidChangeState.bind(this),500)),this._notifyDidChangeStateDebounced()}async getState(e){let t,i;return"create"===e.mode&&null!=e.create&&(t=await this.getCreateDraftState(e)),"view"===e.mode&&null!=e.draft&&(i=await this.getViewDraftState(e)),(0,F.l)({...this.host.baseWebviewState,mode:e.mode,create:t,draft:i,preferences:e.preferences,orgSettings:e.orgSettings})}async notifyDidChangeState(){return this._notifyDidChangeStateDebounced?.cancel(),this.host.notify(et,{state:await this.getState(this._context)})}updateCreateDraftState(e){let t,i=!1;if(null!=e.changes){t=this._context.create?.changes??new Map;let i=new Set;for(let a of e.changes){let e,r=this.container.git.getRepository(s.Uri.parse(a.repository.uri));null!=r&&(e="wip"===a.type?new RepositoryWipChangeset(this.container,r,a.revision,this.onRepositoryWipChanged.bind(this),a.checked??!0,a.expanded??!0):new RepositoryRefChangeset(this.container,r,a.revision,a.files,a.checked??!0,a.expanded??!0),i.add(r.uri.toString()),t.set(r.uri.toString(),e))}if(i.size!==t.size)for(let[e,s]of t)i.has(e)||(s.checked=!1)}else i=null==e.repositories,t=new Map((e.repositories??this.container.git.openRepositories).map(e=>[e.uri.toString(),new RepositoryWipChangeset(this.container,e,{to:d.SU,from:"HEAD"},this.onRepositoryWipChanged.bind(this),!0,!0)]));this._context.create={title:e.title,description:e.description,changes:t,showingAllRepos:i,visibility:"public"},this.setMode("create",!0),this.notifyDidChangeCreateDraftState()}async getCreateDraftState(e){let{create:t}=e;if(null==t)return;let i={};if(0!==t.changes.size)for(let[e,s]of t.changes){let t=await s.getChange();t?.files?.length!==0&&(t.checked!==s.checked&&(t.checked=s.checked),i[e]=t)}return{title:t.title,description:t.description,changes:i,visibility:t.visibility,userSelections:t.userSelections}}async notifyDidChangeCreateDraftState(){return this.host.notify(ei,{mode:this._context.mode,create:await this.getCreateDraftState(this._context)})}async trackViewDraft(e,t){let i;if(e?.draftType!=="cloud"||"suggested_pr_change"!==e.type)return;e=await this.ensureDraftContent(e);let s=e.changesets?.[0].patches.find(e=>el(e.repository));(0,l.Z6)(s?.repository)&&(i=await this.container.git.visibility(s.repository.uri));let a=(0,g.y)(e,s);this.container.telemetry.sendEvent("codeSuggestionViewed",{provider:a?.provider,"repository.visibility":i,repoPrivacy:i,draftId:e.id,draftPrivacy:e.visibility,source:t},{source:t??"patchDetails"})}async updateViewDraftState(e){this._context.draft=e,e?.draftType==="cloud"&&(this._context.draftGkDevUrl=this.container.drafts.generateWebUrl(e),await this.createDraftUserState(e,{force:!0})),this.setMode("view",!0),this.notifyDidChangeViewDraftState()}async getViewDraftState(e,t=!0){if(null==e.draft)return;let i=e.draft;if("cloud"===i.draftType){!0===t&&eh(i)&&setTimeout(async()=>{await this.ensureDraftContent(i),this.notifyDidChangeViewDraftState(!1)},0);let e=this._context.draftUserState;return{draftType:"cloud",id:i.id,type:i.type,createdAt:i.createdAt.getTime(),updatedAt:i.updatedAt.getTime(),author:{id:i.author.id,name:i.author.name,email:i.author.email,avatar:i.author.avatarUri?.toString()},role:i.role,title:i.title,description:i.description,isArchived:i.isArchived,archivedReason:i.archivedReason,visibility:i.visibility,gkDevLink:this._context.draftGkDevUrl,patches:i.changesets?.length?(0,F.l)(i.changesets[0].patches.map(e=>({...e,contents:void 0,commit:void 0,repository:{id:e.gkRepositoryId,name:e.repository?.name??"",located:el(e.repository)}}))):void 0,users:e.users,userSelections:e.selections}}}async createDraftUserState(e,t){if(null==this._context.draftUserState||t?.force===!0)try{let t=await this.container.drafts.getDraftUsers(e.id);if(0===t.length)return;let i=[],s=[],a=await this.getOrganizationMembers();for(let e of t){i.push(e);let t=a.find(t=>t.id===e.userId);s.push(ed(t,e))}s.sort((e,t)=>((e.pendingRole??e.member.role)==="owner"?-1:1)-((t.pendingRole??t.member.role)==="owner"?-1:1)||e.member.name.localeCompare(t.member.name)),this._context.draftUserState={users:i,selections:s}}catch{}}async notifyDidChangeViewDraftState(e=!0){return this.host.notify(es,{mode:this._context.mode,draft:(0,F.l)(await this.getViewDraftState(this._context,e))})}updatePreferences(e){(this._context.preferences?.files?.compact!==e.files?.compact||this._context.preferences?.files?.icon!==e.files?.icon||this._context.preferences?.files?.layout!==e.files?.layout||this._context.preferences?.files?.threshold!==e.files?.threshold)&&(null!=e.files&&(this._context.preferences?.files?.compact!==e.files?.compact&&k.H.updateEffective("views.patchDetails.files.compact",e.files?.compact),this._context.preferences?.files?.icon!==e.files?.icon&&k.H.updateEffective("views.patchDetails.files.icon",e.files?.icon),this._context.preferences?.files?.layout!==e.files?.layout&&k.H.updateEffective("views.patchDetails.files.layout",e.files?.layout),this._context.preferences?.files?.threshold!==e.files?.threshold&&k.H.updateEffective("views.patchDetails.files.threshold",e.files?.threshold),this._context.preferences.files=e.files),this.notifyDidChangePreferences())}async notifyDidChangePreferences(){return this.host.notify(ea,{preferences:this._context.preferences})}async getDraftPatch(e,t){e.changesets=await this.ensureChangesets(e);let i=null==t?e.changesets[0].patches?.[0]:e.changesets[0].patches?.find(e=>e.gkRepositoryId===t);if(null!=i){if(null==i.contents||null==i.files||null==i.repository){let e=await this.container.drafts.getPatchDetails(i.id);i.contents=e.contents,i.files=e.files,i.repository=e.repository}return i}}async getFileCommitFromParams(e){let[t,i]=await this.getOrCreateCommit(e);return null!=t&&null!=i?[t,new h.l(this.container,e.repoPath,e.path,e.status,e.originalPath,void 0,void 0,e.staged),i]:null!=(t=await t?.getCommitForFile(e.path,e.staged))?[t,t.file,i]:void 0}async getOrCreateCommit(e){switch(this.mode){case"create":return this.getCommitForFile(e);case"view":return[await this.getOrCreateCommitForPatch(e.gkRepositoryId)];default:return[void 0]}}async getCommitForFile(e){let t=(0,M.I6)(this._context.create.changes.values(),t=>t.repository.path===e.repoPath);if(null==t)return[void 0];let i=await t.getChange();if(null==i)return[void 0];if("revision"===i.type){let t=await this.container.git.commits(e.repoPath).getCommit(i.revision.to??d.SU);return i.revision.to===i.revision.from||i.revision.from.length===i.revision.to.length+1&&i.revision.from.endsWith("^")&&i.revision.from.startsWith(i.revision.to)?[t]:[t,i.revision]}return"wip"===i.type?[await this.container.git.commits(e.repoPath).getCommit(i.revision.to??d.SU)]:[void 0]}async getOrCreateCommitForPatch(e){let t=this._context.draft;if("local"===t.draftType)return;let i=await this.getDraftPatch(t,e);if(i?.repository!=null){if(i?.commit==null){let e=await this.getOrLocatePatchRepository(i,{prompt:!0});if(null==e)return;let a=i.baseRef??"HEAD";for(;;){try{let s=await e.git.patch()?.createUnreachableCommitForPatch(i.contents,a,t.title);i.commit=s}catch(t){if(null!=a){let t={title:"Choose Base..."},i={title:"Cancel",isCloseAffordance:!0},r=await s.window.showErrorMessage(`Unable to apply the patch onto ${"HEAD"===a?"HEAD":`'${(0,f.pV)(a)}'`}.
Do you want to try again on a different base?`,{modal:!0},t,i);if(null==r||r===i)break;if(r===t){let t=await (0,x.NZ)(e.path,"Choose New Base for Patch","Choose a new base to apply the patch onto",{allowRevisions:!0,include:x.m7.BranchesAndTags|x.m7.HEAD});if(null==t)break;a=t.ref;continue}}else s.window.showErrorMessage(`Unable to apply the patch on base '${(0,f.pV)(a)}': ${t.message}`)}break}}return i?.commit}}async openFile(e){let t=await this.getFileCommitFromParams(e);if(null==t)return;let[i,s]=t;(0,n.Tq)(s,i,{preserveFocus:!0,preview:!0,...e.showOptions})}getChangesTitleNote(){return"view"===this._context.mode&&this._context.draft?.draftType==="cloud"&&"suggested_pr_change"===this._context.draft.type?"Code Suggestion":"Patch"}async openFileComparisonWithPrevious(e){let t=await this.getFileCommitFromParams(e);if(null==t)return;let[i,s,a]=t,r=this.getChangesTitleNote();(0,n.eX)(s,null!=a?{repoPath:i.repoPath,rhs:a.to??d.SU,lhs:a.from}:i,{preserveFocus:!0,preview:!0,...e.showOptions,rhsTitle:"view"===this.mode?`${(0,I.P8)(s.path)} (${r})`:void 0}),this.container.events.fire("file:selected",{uri:s.uri},{source:this.host.id})}async openFileComparisonWithWorking(e){let t=await this.getFileCommitFromParams(e);if(null==t)return;let[i,s,a]=t,r=this.getChangesTitleNote();(0,n.DD)(s,null!=a?{repoPath:i.repoPath,ref:a.to}:i,{preserveFocus:!0,preview:!0,...e.showOptions,lhsTitle:"view"===this.mode?`${(0,I.P8)(s.path)} (${r})`:void 0})}async getOrLocatePatchRepository(e,t){if(null==e.repository||(0,l.Z6)(e.repository))return e.repository;let i=await this.container.repositoryIdentity.getRepository(e.repository,{openIfNeeded:!0,prompt:t?.prompt??!1});return null==i?s.window.showErrorMessage(`Unable to locate repository '${e.repository.name}'`):(e.repository=i,t?.notifyOnLocation&&this.notifyPatchRepositoryUpdated(e)),i}async ensureChangesets(e){return e.changesets??=await this.container.drafts.getChangesets(e.id),e.changesets}async ensureDraftContent(e){if(!eh(e))return e;e.changesets=await this.ensureChangesets(e);let t=e.changesets.flatMap(e=>e.patches).filter(e=>null==e.contents||null==e.files||null==e.repository);if(0===t.length)return e;for(let e of(await Promise.allSettled(t.map(e=>this.container.drafts.getPatchDetails(e)))))if("fulfilled"===e.status){let i=t.find(t=>t.id===e.value.id);null!=i&&(i.contents=e.value.contents,i.files=e.value.files,i.repository=e.value.repository,await this.getOrLocatePatchRepository(i))}return e}};function eh(e){return null==e.changesets||(0,M.zN)(e.changesets,e=>e.patches.some(e=>null==e.contents||null==e.files||null==e.repository))}function el(e){return null!=e&&(0,l.Z6)(e)}function ed(e,t,i,s){return{change:s,member:e,user:t,pendingRole:i,avatarUrl:e?.email!=null?(0,a.m_)(e.email,void 0).toString():void 0}}ec([(0,U.Yz)({args:!1})],PatchDetailsWebviewProvider.prototype,"getState",1),ec([(0,R.G)(e=>e.id)],PatchDetailsWebviewProvider.prototype,"ensureChangesets",1)},6655:(e,t,i)=>{i.d(t,{l:()=>o});var s=i(1398),a=i(1518),r=i(6612);async function o(e){if(e.storage.get("confirm:draft:storage",!1))return!0;for(;;){let t={title:"Continue"},i={title:"Cancel",isCloseAffordance:!0},o={title:"Learn More"},n={title:"Security"},c=await s.window.showInformationMessage("Cloud Patches are securely stored by GitKraken and can be accessed by anyone with the link and a GitKraken account.",{modal:!0},t,o,n,i);if(c===t)return e.storage.store("confirm:draft:storage",!0).catch(),!0;if(c===n){(0,r.CZ)(a.DS.security);continue}if(c===o){(0,r.CZ)(a.DS.cloudPatches);continue}return!1}}},6983:(e,t,i)=>{i.d(t,{l:()=>a});var s=i(9624);function a(e){if(null!=e)try{return JSON.parse(JSON.stringify(e,s.t))}catch(e){throw e}}}};