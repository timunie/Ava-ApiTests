import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# SetAlignRightWithPanel Method


Sets the value of the RelativePanel.Above XAML attached property for a target element.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static void SetAlignRightWithPanel(
	AvaloniaObject obj,
	bool value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Sub SetAlignRightWithPanel ( 
	obj As AvaloniaObject,
	value As Boolean
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member SetAlignRightWithPanel : 
        obj : AvaloniaObject * 
        value : bool -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/RelativePanel.AttachedProperties.cs#L284" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  AvaloniaObject</dt><dd>The object to which the property value is written.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd>The value to set. (true to align this element's right edge with the panel's right edge; otherwise, false.)</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_RelativePanel">RelativePanel Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
