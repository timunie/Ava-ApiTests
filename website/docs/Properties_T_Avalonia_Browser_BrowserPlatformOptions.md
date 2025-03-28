# BrowserPlatformOptions Properties




## Properties
<table>
<tr>
<td><a href="P_Avalonia_Browser_BrowserPlatformOptions_AvaloniaServiceWorkerScope">AvaloniaServiceWorkerScope</a></td>
<td>If <a href="P_Avalonia_Browser_BrowserPlatformOptions_RegisterAvaloniaServiceWorker">RegisterAvaloniaServiceWorker</a> is enabled, it is possible to redefine scope for the worker. By default, current domain root is used as a scope.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Browser_BrowserPlatformOptions_FrameworkAssetPathResolver">FrameworkAssetPathResolver</a></td>
<td>Defines paths where avalonia modules and service locator should be resolved. If null, default path resolved depending on the backend (browser or blazor) is used.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Browser_BrowserPlatformOptions_PreferFileDialogPolyfill">PreferFileDialogPolyfill</a></td>
<td>Avalonia uses "native-file-system-adapter" polyfill for the file dialogs. If native implementation is available, by default it is used. This property forces polyfill to be always used. For more details, see https://github.com/jimmywarting/native-file-system-adapter#a-note-when-downloading-with-the-polyfilled-version.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Browser_BrowserPlatformOptions_PreferManagedThreadDispatcher">PreferManagedThreadDispatcher</a></td>
<td>Defines if Avalonia should create a controlled dispatcher loop on the web worker thread. If used only when WasmEnableThreads is set to true. Default value is true.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Browser_BrowserPlatformOptions_RegisterAvaloniaServiceWorker">RegisterAvaloniaServiceWorker</a></td>
<td>Defines if the service worker used by Avalonia should be registered. If registered, service worker can work as a save file picker fallback on the browsers that don't support native implementation. For more details, see https://github.com/jimmywarting/native-file-system-adapter#a-note-when-downloading-with-the-polyfilled-version.<br /><Tag type="is-info">Unstable.</Tag></td>
</tr>
<tr>
<td><a href="P_Avalonia_Browser_BrowserPlatformOptions_RenderingMode">RenderingMode</a></td>
<td>Gets or sets Avalonia rendering modes with fallbacks. The first element in the array has the highest priority.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Browser_BrowserPlatformOptions">BrowserPlatformOptions Class</a>  
<a href="N_Avalonia_Browser">Avalonia.Browser Namespace</a>  

