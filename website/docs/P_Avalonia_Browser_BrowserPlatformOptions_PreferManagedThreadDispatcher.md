# PreferManagedThreadDispatcher Property


Defines if Avalonia should create a controlled dispatcher loop on the web worker thread. If used only when WasmEnableThreads is set to true. Default value is true.



## Definition
**Namespace:** <a href="N_Avalonia_Browser">Avalonia.Browser</a>  
**Assembly:** Avalonia.Browser (in Avalonia.Browser.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool? PreferManagedThreadDispatcher { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property PreferManagedThreadDispatcher As Boolean?
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member PreferManagedThreadDispatcher : Nullable<bool> with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Browser/Avalonia.Browser/BrowserAppBuilder.cs#L63" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)

## See Also


#### Reference
<a href="T_Avalonia_Browser_BrowserPlatformOptions">BrowserPlatformOptions Class</a>  
<a href="N_Avalonia_Browser">Avalonia.Browser Namespace</a>  

