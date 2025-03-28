# FrameworkAssetPathResolver Property


Defines paths where avalonia modules and service locator should be resolved. If null, default path resolved depending on the backend (browser or blazor) is used.



## Definition
**Namespace:** <a href="N_Avalonia_Browser">Avalonia.Browser</a>  
**Assembly:** Avalonia.Browser (in Avalonia.Browser.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Func<string, string>? FrameworkAssetPathResolver { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property FrameworkAssetPathResolver As Func(Of String, String)
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member FrameworkAssetPathResolver : Func<string, string> with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Browser/Avalonia.Browser/BrowserAppBuilder.cs#L35" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>, <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>)

## See Also


#### Reference
<a href="T_Avalonia_Browser_BrowserPlatformOptions">BrowserPlatformOptions Class</a>  
<a href="N_Avalonia_Browser">Avalonia.Browser Namespace</a>  

