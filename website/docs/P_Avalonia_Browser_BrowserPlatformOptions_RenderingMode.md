# RenderingMode Property


Gets or sets Avalonia rendering modes with fallbacks. The first element in the array has the highest priority.



## Definition
**Namespace:** <a href="N_Avalonia_Browser">Avalonia.Browser</a>  
**Assembly:** Avalonia.Browser (in Avalonia.Browser.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IReadOnlyList<BrowserRenderingMode> RenderingMode { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property RenderingMode As IReadOnlyList(Of BrowserRenderingMode)
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member RenderingMode : IReadOnlyList<BrowserRenderingMode> with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Browser/Avalonia.Browser/BrowserAppBuilder.cs#L26" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Browser_BrowserRenderingMode">BrowserRenderingMode</a>)

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.invalidoperationexception" target="_blank" rel="noopener noreferrer">InvalidOperationException</a></td>
<td>Thrown if no values were matched.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Browser_BrowserPlatformOptions">BrowserPlatformOptions Class</a>  
<a href="N_Avalonia_Browser">Avalonia.Browser Namespace</a>  

