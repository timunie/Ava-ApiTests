import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Offset Property


Specify the popup position offset relative to the position of the anchor on the anchor rectangle and the anchor on the popup.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Point Offset {
	get;
 set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property Offset As Point
		Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Offset : Point with 
		get, set
```
</TabItem>
</Tabs>



#### Property Value
PointFor example if the anchor of the anchor rectangle is at (x, y), the popup has the gravity bottom|right, and the offset is (ox, oy), the calculated surface position will be (x + ox, y + oy). The offset position of the surface is the one used for constraint testing. See set_constraint_adjustment. An example use case is placing a popup menu on top of a user interface element, while aligning the user interface element of the parent surface with some user interface element placed somewhere in the popup.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_PopupPositioning_PopupPositionerParameters">PopupPositionerParameters Structure</a>  
<a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning Namespace</a>  
