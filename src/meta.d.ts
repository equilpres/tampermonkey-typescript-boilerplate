type Grant =
	| 'GM_addElement'
	| 'GM_addStyle'
	| 'GM_addValueChangeListener'
	| 'GM_deleteValue'
	| 'GM_download'
	| 'GM_getResourceText'
	| 'GM_getResourceURL'
	| 'GM_getTab'
	| 'GM_getTabs'
	| 'GM_getValue'
	| 'GM_info'
	| 'GM_listValues'
	| 'GM_log'
	| 'GM_notification'
	| 'GM_openInTab'
	| 'GM_registerMenuCommand'
	| 'GM_removeValueChangeListener'
	| 'GM_saveTab'
	| 'GM_setClipboard'
	| 'GM_setValue'
	| 'GM_unregisterMenuCommand'
	| 'GM_xmlhttpRequest'
	| 'unsafeWindow';

type RunAt = 'document-start' | 'document-body' | 'document-end' | 'document-idle' | 'context-menu';

/** https://www.tampermonkey.net/documentation.php */
export interface Meta {
	name: string;
	description: string;
	version: string;
	author: string;

	iconURL?: string | undefined;
	icon64URL?: string | undefined;

	match: Array<string>;
	grant?: Array<Grant | 'none'> | undefined;

	'run-at'?: RunAt | undefined;
	noframes?: boolean | undefined;

	updateURL?: string | undefined;
	downloadURL?: string | undefined;
	homepageURL?: string | undefined;
	supportURL?: string | undefined;

	webRequest?: Array<Tampermonkey.WebRequestRuleParam> | undefined;
}
