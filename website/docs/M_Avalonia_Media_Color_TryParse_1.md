# TryParse(String, Color) Method


Parses a color string.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static bool TryParse(
	string? s,
	out Color? color
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function TryParse ( 
	s As String,
	<OutAttribute> ByRef color As Color
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member TryParse : 
        s : string * 
        color : Color byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Color.cs#L146" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The color string.</dd><dt>  <a href="T_Avalonia_Media_Color">Color</a></dt><dd>The parsed color</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
The status of the operation.

## See Also


#### Reference
<a href="T_Avalonia_Media_Color">Color Structure</a>  
<a href="Overload_Avalonia_Media_Color_TryParse">TryParse Overload</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

