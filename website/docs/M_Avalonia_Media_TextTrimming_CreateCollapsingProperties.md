# CreateCollapsingProperties Method


Creates properties that will be used for collapsing lines of text.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract TextCollapsingProperties CreateCollapsingProperties(
	TextCollapsingCreateInfo createInfo
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustOverride Function CreateCollapsingProperties ( 
	createInfo As TextCollapsingCreateInfo
) As TextCollapsingProperties
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CreateCollapsingProperties : 
        createInfo : TextCollapsingCreateInfo -> TextCollapsingProperties 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextTrimming.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_TextCollapsingCreateInfo">TextCollapsingCreateInfo</a></dt><dd>Contextual info about text that will be collapsed.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_TextFormatting_TextCollapsingProperties">TextCollapsingProperties</a>

## See Also


#### Reference
<a href="T_Avalonia_Media_TextTrimming">TextTrimming Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

