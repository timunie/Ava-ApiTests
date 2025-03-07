# Offset Property


Specify the popup position offset relative to the position of the anchor on the anchor rectangle and the anchor on the popup.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Point Offset \{
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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Primitives/PopupPositioning/IPopupPositioner.cs#L164" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Point">Point</a>For example if the anchor of the anchor rectangle is at (x, y), the popup has the gravity bottom|right, and the offset is (ox, oy), the calculated surface position will be (x + ox, y + oy). The offset position of the surface is the one used for constraint testing. See set_constraint_adjustment. An example use case is placing a popup menu on top of a user interface element, while aligning the user interface element of the parent surface with some user interface element placed somewhere in the popup.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_PopupPositioning_PopupPositionerParameters">PopupPositionerParameters Structure</a>  
<a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning Namespace</a>  
