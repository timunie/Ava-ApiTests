# RenderingMode Property


Gets or sets Avalonia rendering modes with fallbacks. The first element in the array has the highest priority. The default value is: <a href="T_Avalonia_AndroidRenderingMode">Egl</a>, <a href="T_Avalonia_AndroidRenderingMode">Software</a>.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Android (in Avalonia.Android.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IReadOnlyList<AndroidRenderingMode> RenderingMode \{ get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property RenderingMode As IReadOnlyList(Of AndroidRenderingMode)
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member RenderingMode : IReadOnlyList<AndroidRenderingMode> with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Android/Avalonia.Android/AndroidPlatform.cs#L62" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_AndroidRenderingMode">AndroidRenderingMode</a>)If application should work on as wide range of devices as possible, at least add <a href="T_Avalonia_AndroidRenderingMode">Software</a> as a fallback value.

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.invalidoperationexception" target="_blank" rel="noopener noreferrer">InvalidOperationException</a></td>
<td>Thrown if no values were matched.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_AndroidPlatformOptions">AndroidPlatformOptions Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
