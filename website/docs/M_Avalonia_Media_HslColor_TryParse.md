# TryParse Method


Parses an HSL color string.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static bool TryParse(
	string? s,
	out HslColor? hslColor
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function TryParse ( 
	s As String,
	<OutAttribute> ByRef hslColor As HslColor
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member TryParse : 
        s : string * 
        hslColor : HslColor byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/HslColor.cs#L237" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The HSL color string to parse.</dd><dt>  <a href="T_Avalonia_Media_HslColor">HslColor</a></dt><dd>The parsed <a href="T_Avalonia_Media_HslColor">HslColor</a>.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if parsing was successful; otherwise, false.

## See Also


#### Reference
<a href="T_Avalonia_Media_HslColor">HslColor Structure</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

