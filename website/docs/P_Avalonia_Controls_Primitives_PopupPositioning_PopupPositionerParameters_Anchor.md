import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Anchor Property


Defines the anchor point for the anchor rectangle.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public PopupAnchor Anchor { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property Anchor As PopupAnchor
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Anchor : PopupAnchor with get, set
```
</TabItem>
</Tabs>



#### Property Value
<a href="T_Avalonia_Controls_Primitives_PopupPositioning_PopupAnchor">PopupAnchor</a>The specified anchor is used derive an anchor point that the popup will be positioned relative to. If a corner anchor is set (e.g. 'TopLeft' or 'BottomRight'), the anchor point will be at the specified corner; otherwise, the derived anchor point will be centered on the specified edge, or in the center of the anchor rectangle if no edge is specified.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_PopupPositioning_PopupPositionerParameters">PopupPositionerParameters Structure</a>  
<a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning Namespace</a>  
