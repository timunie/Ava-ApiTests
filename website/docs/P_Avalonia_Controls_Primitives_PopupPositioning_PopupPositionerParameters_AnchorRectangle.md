import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# AnchorRectangle Property


Specifies the anchor rectangle within the parent that the popup will be placed relative to, in device-independent pixels.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Rect AnchorRectangle {
	get;
 set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property AnchorRectangle As Rect
		Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member AnchorRectangle : Rect with 
		get, set
```
</TabItem>
</Tabs>



#### Property Value
RectThe rectangle is relative to the parent geometry and may not extend outside the window geometry of the popup's parent.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_PopupPositioning_PopupPositionerParameters">PopupPositionerParameters Structure</a>  
<a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning Namespace</a>  
