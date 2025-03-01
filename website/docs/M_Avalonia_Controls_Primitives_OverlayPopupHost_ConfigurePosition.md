import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ConfigurePosition Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
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



#### Parameters
<dl><dt>  Visual</dt><dd> </dd><dt>  <a href="T_Avalonia_Controls_PlacementMode">PlacementMode</a></dt><dd> </dd><dt>  Point</dt><dd> </dd><dt>  <a href="T_Avalonia_Controls_Primitives_PopupPositioning_PopupAnchor">PopupAnchor</a>  (Optional)</dt><dd> </dd><dt>  <a href="T_Avalonia_Controls_Primitives_PopupPositioning_PopupGravity">PopupGravity</a>  (Optional)</dt><dd> </dd><dt>  <a href="T_Avalonia_Controls_Primitives_PopupPositioning_PopupPositionerConstraintAdjustment">PopupPositionerConstraintAdjustment</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(Rect)  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_OverlayPopupHost">OverlayPopupHost Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  
