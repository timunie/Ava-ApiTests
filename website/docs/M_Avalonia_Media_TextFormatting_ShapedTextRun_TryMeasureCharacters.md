# TryMeasureCharacters Method


Measures the number of characters that fit into available width.



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool TryMeasureCharacters(
	double availableWidth,
	out int length
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function TryMeasureCharacters ( 
	availableWidth As Double,
	<OutAttribute> ByRef length As Integer
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member TryMeasureCharacters : 
        availableWidth : float * 
        length : int byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/ShapedTextRun.cs#L103" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The available width.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The count of fitting characters.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
`true` if characters fit into the available width; otherwise, `false`.

## See Also


#### Reference
<a href="T_Avalonia_Media_TextFormatting_ShapedTextRun">ShapedTextRun Class</a>  
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  

