# BrowserPlatformOptions Class




## Definition
**Namespace:** <a href="N_Avalonia_Browser">Avalonia.Browser</a>  
**Assembly:** Avalonia.Browser (in Avalonia.Browser.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class BrowserPlatformOptions : IEquatable<BrowserPlatformOptions>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class BrowserPlatformOptions
	Implements IEquatable(Of BrowserPlatformOptions)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type BrowserPlatformOptions = 
    class
        interface IEquatable<BrowserPlatformOptions>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Browser/Avalonia.Browser/BrowserAppBuilder.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  BrowserPlatformOptions</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(BrowserPlatformOptions)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Browser_BrowserPlatformOptions__ctor">BrowserPlatformOptions()</a></td>
<td>Initializes a new instance of the BrowserPlatformOptions class</td>
</tr>
</table>

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

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Browser">Avalonia.Browser Namespace</a>  

