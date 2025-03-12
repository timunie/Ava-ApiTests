# Collapse Method


Create a collapsed line based on collapsed text properties.



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract TextLine Collapse(
	params TextCollapsingProperties?[] collapsingPropertiesList
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustOverride Function Collapse ( 
	ParamArray collapsingPropertiesList As TextCollapsingProperties()
) As TextLine
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Collapse : 
        collapsingPropertiesList : TextCollapsingProperties[] -> TextLine 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/TextLine.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_TextFormatting_TextCollapsingProperties">TextCollapsingProperties</a>[]</dt><dd>A list of <a href="T_Avalonia_Media_TextFormatting_TextCollapsingProperties">TextCollapsingProperties</a> objects that represent the collapsed text properties.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_TextFormatting_TextLine">TextLine</a>  
A <a href="T_Avalonia_Media_TextFormatting_TextLine">TextLine</a> value that represents a collapsed line that can be displayed.

## See Also


#### Reference
<a href="T_Avalonia_Media_TextFormatting_TextLine">TextLine Class</a>  
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  

