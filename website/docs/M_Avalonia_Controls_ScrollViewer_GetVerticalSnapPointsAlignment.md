import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# GetVerticalSnapPointsAlignment Method


Gets the value of the VerticalSnapPointsAlignment attached property.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static SnapPointsAlignment GetVerticalSnapPointsAlignment(
	Control control
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function GetVerticalSnapPointsAlignment ( 
	control As Control
) As SnapPointsAlignment
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member GetVerticalSnapPointsAlignment : 
        control : Control -> SnapPointsAlignment 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/ScrollViewer.cs#L549" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The control to read the value from.</dd></dl>

#### Return Value
<a href="T_Avalonia_Controls_Primitives_SnapPointsAlignment">SnapPointsAlignment</a>  
The value of the property.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ScrollViewer">ScrollViewer Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
