import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Gravity Property


Defines in what direction a popup should be positioned, relative to the anchor point of the parent.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public PopupGravity Gravity { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property Gravity As PopupGravity
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Gravity : PopupGravity with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Primitives/PopupPositioning/IPopupPositioner.cs#L122" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Controls_Primitives_PopupPositioning_PopupGravity">PopupGravity</a>

## 
If a corner gravity is specified (e.g. 'BottomRight' or 'TopLeft'), then the popup will be placed towards the specified gravity; otherwise, the popup will be centered over the anchor point on any axis that had no gravity specified.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_PopupPositioning_PopupPositionerParameters">PopupPositionerParameters Structure</a>  
<a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning Namespace</a>  
