# AnchorRectangle Property


Specifies the anchor rectangle within the parent that the popup will be placed relative to, in device-independent pixels.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Primitives/PopupPositioning/IPopupPositioner.cs#L89" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Rect">Rect</a>

## Remarks
The rectangle is relative to the parent geometry and may not extend outside the window geometry of the popup's parent.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_PopupPositioning_PopupPositionerParameters">PopupPositionerParameters Structure</a>  
<a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning Namespace</a>  

