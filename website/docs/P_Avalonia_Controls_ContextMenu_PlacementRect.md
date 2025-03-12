# PlacementRect Property


Gets or sets the anchor rectangle within the parent that the popup will be placed relative to when <a href="P_Avalonia_Controls_Primitives_Popup_Placement">Placement</a> is <a href="T_Avalonia_Controls_PlacementMode">AnchorAndGravity</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Rect? PlacementRect { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property PlacementRect As Rect?
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member PlacementRect : Nullable<Rect> with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ContextMenu.cs#L181" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_Rect">Rect</a>)The placement rect defines a rectangle relative to <a href="P_Avalonia_Controls_Primitives_Popup_PlacementTarget">PlacementTarget</a> around which the popup will be opened, with <a href="P_Avalonia_Controls_Primitives_Popup_PlacementAnchor">PlacementAnchor</a> determining which edge of the placement target is used. If unset, the anchor rectangle will be the bounds of the <a href="P_Avalonia_Controls_Primitives_Popup_PlacementTarget">PlacementTarget</a>.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ContextMenu">ContextMenu Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

