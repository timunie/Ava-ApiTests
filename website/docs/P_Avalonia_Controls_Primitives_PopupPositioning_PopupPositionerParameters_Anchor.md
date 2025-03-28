# Anchor Property


Defines the anchor point for the anchor rectangle.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Primitives/PopupPositioning/IPopupPositioner.cs#L103" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Controls_Primitives_PopupPositioning_PopupAnchor">PopupAnchor</a>

## Remarks
The specified anchor is used derive an anchor point that the popup will be positioned relative to. If a corner anchor is set (e.g. 'TopLeft' or 'BottomRight'), the anchor point will be at the specified corner; otherwise, the derived anchor point will be centered on the specified edge, or in the center of the anchor rectangle if no edge is specified.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_PopupPositioning_PopupPositionerParameters">PopupPositionerParameters Structure</a>  
<a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning Namespace</a>  

