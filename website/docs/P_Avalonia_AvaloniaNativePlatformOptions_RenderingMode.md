# RenderingMode Property


Gets or sets Avalonia rendering modes with fallbacks. The first element in the array has the highest priority. The default value is: <a href="T_Avalonia_AvaloniaNativeRenderingMode">OpenGl</a>, <a href="T_Avalonia_AvaloniaNativeRenderingMode">Software</a>.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Native (in Avalonia.Native.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IReadOnlyList<AvaloniaNativeRenderingMode> RenderingMode { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property RenderingMode As IReadOnlyList(Of AvaloniaNativeRenderingMode)
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member RenderingMode : IReadOnlyList<AvaloniaNativeRenderingMode> with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Native/AvaloniaNativePlatformExtensions.cs#L66" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_AvaloniaNativeRenderingMode">AvaloniaNativeRenderingMode</a>)If application should work on as wide range of devices as possible, at least add <a href="T_Avalonia_AvaloniaNativeRenderingMode">Software</a> as a fallback value.

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.invalidoperationexception" target="_blank" rel="noopener noreferrer">InvalidOperationException</a></td>
<td>Thrown if no values were matched.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaNativePlatformOptions">AvaloniaNativePlatformOptions Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

