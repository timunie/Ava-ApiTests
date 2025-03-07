# ConstraintAdjustment Property


Specify how the popup should be positioned if the originally intended position caused the popup to be constrained.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public PopupPositionerConstraintAdjustment ConstraintAdjustment \{
	get;
 set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property ConstraintAdjustment As PopupPositionerConstraintAdjustment
		Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ConstraintAdjustment : PopupPositionerConstraintAdjustment with 
		get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Primitives/PopupPositioning/IPopupPositioner.cs#L148" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Controls_Primitives_PopupPositioning_PopupPositionerConstraintAdjustment">PopupPositionerConstraintAdjustment</a>Adjusts the popup position if the intended position caused the popup to be constrained; meaning at least partially outside positioning boundaries set by the positioner. The adjustment is set by constructing a bitmask describing the adjustment to be made when the popup is constrained on that axis. If no bit for one axis is set, the positioner will assume that the child surface should not change its position on that axis when constrained. If more than one bit for one axis is set, the order of how adjustments are applied is specified in the corresponding adjustment descriptions. The default adjustment is none.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_PopupPositioning_PopupPositionerParameters">PopupPositionerParameters Structure</a>  
<a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning Namespace</a>  
