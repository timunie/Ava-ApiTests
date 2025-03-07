# TextLeadingPrefixCharacterEllipsis Constructor


Construct a text trailing word ellipsis collapsing properties.



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public TextLeadingPrefixCharacterEllipsis(
	string ellipsis,
	int prefixLength,
	double width,
	TextRunProperties textRunProperties,
	FlowDirection flowDirection
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	ellipsis As String,
	prefixLength As Integer,
	width As Double,
	textRunProperties As TextRunProperties,
	flowDirection As FlowDirection
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        ellipsis : string * 
        prefixLength : int * 
        width : float * 
        textRunProperties : TextRunProperties * 
        flowDirection : FlowDirection -> TextLeadingPrefixCharacterEllipsis
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/TextLeadingPrefixCharacterEllipsis.cs#L23" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>Text used as collapsing symbol.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>Length of leading prefix.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>width in which collapsing is constrained to</dd><dt>  <a href="T_Avalonia_Media_TextFormatting_TextRunProperties">TextRunProperties</a></dt><dd>text run properties of ellipsis symbol</dd><dt>  <a href="T_Avalonia_Media_FlowDirection">FlowDirection</a></dt><dd>the flow direction of the collapes line.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_TextFormatting_TextLeadingPrefixCharacterEllipsis">TextLeadingPrefixCharacterEllipsis Class</a>  
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  
