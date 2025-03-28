# RegisterAvaloniaServiceWorker Property


Defines if the service worker used by Avalonia should be registered. If registered, service worker can work as a save file picker fallback on the browsers that don't support native implementation. For more details, see https://github.com/jimmywarting/native-file-system-adapter#a-note-when-downloading-with-the-polyfilled-version.



## Definition
**Namespace:** <a href="N_Avalonia_Browser">Avalonia.Browser</a>  
**Assembly:** Avalonia.Browser (in Avalonia.Browser.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[UnstableAttribute("This property might not work reliably.")]
public bool RegisterAvaloniaServiceWorker { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<UnstableAttribute("This property might not work reliably.")>
Public Property RegisterAvaloniaServiceWorker As Boolean
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<UnstableAttribute("This property might not work reliably.")>]
member RegisterAvaloniaServiceWorker : bool with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Browser/Avalonia.Browser/BrowserAppBuilder.cs#L43" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_Avalonia_Browser_BrowserPlatformOptions">BrowserPlatformOptions Class</a>  
<a href="N_Avalonia_Browser">Avalonia.Browser Namespace</a>  

