# ConfigurePosition Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[UnstableAttribute("This API may be removed in Avalonia 12. If you depend on this API, please open an issue with details of your use-case.")]
public void ConfigurePosition(
	Visual target,
	PlacementMode placement,
	Point offset,
	PopupAnchor anchor = PopupAnchor.None,
	PopupGravity gravity = PopupGravity.None,
	PopupPositionerConstraintAdjustment constraintAdjustment = PopupPositionerConstraintAdjustment.All,
	Rect? rect = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<UnstableAttribute("This API may be removed in Avalonia 12. If you depend on this API, please open an issue with details of your use-case.")>
Public Sub ConfigurePosition ( 
	target As Visual,
	placement As PlacementMode,
	offset As Point,
	Optional anchor As PopupAnchor = PopupAnchor.None,
	Optional gravity As PopupGravity = PopupGravity.None,
	Optional constraintAdjustment As PopupPositionerConstraintAdjustment = PopupPositionerConstraintAdjustment.All,
	Optional rect As Rect? = Nothing
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<UnstableAttribute("This API may be removed in Avalonia 12. If you depend on this API, please open an issue with details of your use-case.")>]
member ConfigurePosition : 
        target : Visual * 
        placement : PlacementMode * 
        offset : Point * 
        ?anchor : PopupAnchor * 
        ?gravity : PopupGravity * 
        ?constraintAdjustment : PopupPositionerConstraintAdjustment * 
        ?rect : Nullable<Rect> 
(* Defaults:
        let _anchor = defaultArg anchor PopupAnchor.None
        let _gravity = defaultArg gravity PopupGravity.None
        let _constraintAdjustment = defaultArg constraintAdjustment PopupPositionerConstraintAdjustment.All
        let _rect = defaultArg rect null
*)
-> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Primitives/OverlayPopupHost.cs#L130" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Controls_PlacementMode">PlacementMode</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Controls_Primitives_PopupPositioning_PopupAnchor">PopupAnchor</a>  (Optional)</dt><dd> </dd><dt>  <a href="T_Avalonia_Controls_Primitives_PopupPositioning_PopupGravity">PopupGravity</a>  (Optional)</dt><dd> </dd><dt>  <a href="T_Avalonia_Controls_Primitives_PopupPositioning_PopupPositionerConstraintAdjustment">PopupPositionerConstraintAdjustment</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_Rect">Rect</a>)  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_OverlayPopupHost">OverlayPopupHost Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  

