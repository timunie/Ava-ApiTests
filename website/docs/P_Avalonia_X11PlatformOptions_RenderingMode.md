# RenderingMode Property


Gets or sets Avalonia rendering modes with fallbacks. The first element in the array has the highest priority. The default value is: <a href="T_Avalonia_X11RenderingMode">Glx</a>, <a href="T_Avalonia_X11RenderingMode">Software</a>.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.X11 (in Avalonia.X11.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IReadOnlyList<X11RenderingMode> RenderingMode \{ get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property RenderingMode As IReadOnlyList(Of X11RenderingMode)
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member RenderingMode : IReadOnlyList<X11RenderingMode> with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.X11/X11Platform.cs#L276" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_X11RenderingMode">X11RenderingMode</a>)If application should work on as wide range of devices as possible, at least add <a href="T_Avalonia_X11RenderingMode">Software</a> as a fallback value.

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.invalidoperationexception" target="_blank" rel="noopener noreferrer">InvalidOperationException</a></td>
<td>Thrown if no values were matched.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_X11PlatformOptions">X11PlatformOptions Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
