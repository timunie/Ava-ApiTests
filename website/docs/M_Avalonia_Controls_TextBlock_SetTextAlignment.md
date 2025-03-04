import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# SetTextAlignment Method


Writes the attached property BaselineOffset to the given element.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static void SetTextAlignment(
	Control control,
	TextAlignment alignment
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Sub SetTextAlignment ( 
	control As Control,
	alignment As TextAlignment
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member SetTextAlignment : 
        control : Control * 
        alignment : TextAlignment -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/TextBlock.cs#L427" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The element to which to write the attached property.</dd><dt>  TextAlignment</dt><dd>The property value to set</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_TextBlock">TextBlock Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
