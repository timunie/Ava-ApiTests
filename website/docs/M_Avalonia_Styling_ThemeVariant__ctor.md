# ThemeVariant Constructor


Creates a new instance of the <a href="T_Avalonia_Styling_ThemeVariant">ThemeVariant</a>



## Definition
**Namespace:** <a href="N_Avalonia_Styling">Avalonia.Styling</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public ThemeVariant(
	Object key,
	ThemeVariant? inheritVariant
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	key As Object,
	inheritVariant As ThemeVariant
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        key : Object * 
        inheritVariant : ThemeVariant -> ThemeVariant
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Styling/ThemeVariant.cs#L40" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>Key of the theme variant by which variants are compared.</dd><dt>  <a href="T_Avalonia_Styling_ThemeVariant">ThemeVariant</a></dt><dd>Reference to a theme variant which should be used, if resource wasn't found for the requested variant.</dd></dl>

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.argumentexception" target="_blank" rel="noopener noreferrer">ArgumentException</a></td>
<td>Thrown if inheritVariant is a reference to the <a href="P_Avalonia_Styling_ThemeVariant_Default">Default</a> which is ambiguous value to inherit.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.argumentnullexception" target="_blank" rel="noopener noreferrer">ArgumentNullException</a></td>
<td>Thrown if key is null.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Styling_ThemeVariant">ThemeVariant Class</a>  
<a href="N_Avalonia_Styling">Avalonia.Styling Namespace</a>  

