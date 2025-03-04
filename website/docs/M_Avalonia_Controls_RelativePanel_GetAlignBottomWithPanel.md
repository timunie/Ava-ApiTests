import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# GetAlignBottomWithPanel Method


Gets the value of the RelativePanel.AlignBottomWithPanel XAML attached property for the target element.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static bool GetAlignBottomWithPanel(
	AvaloniaObject obj
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function GetAlignBottomWithPanel ( 
	obj As AvaloniaObject
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member GetAlignBottomWithPanel : 
        obj : AvaloniaObject -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/RelativePanel.AttachedProperties.cs#L74" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  AvaloniaObject</dt><dd>The object from which the property value is read.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
The RelativePanel.AlignBottomWithPanel XAML attached property value of the specified object. (true to align this element's bottom edge with the panel's bottom edge; otherwise, false.)

## See Also


#### Reference
<a href="T_Avalonia_Controls_RelativePanel">RelativePanel Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
