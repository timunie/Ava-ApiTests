import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# CustomPopupPlacementCallback Delegate


Represents a method that provides custom positioning for a <a href="T_Avalonia_Controls_Primitives_Popup">Popup</a> control.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public delegate void CustomPopupPlacementCallback(
	CustomPopupPlacement parameters
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Delegate Sub CustomPopupPlacementCallback ( 
	parameters As CustomPopupPlacement
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type CustomPopupPlacementCallback = 
    delegate of 
        parameters : CustomPopupPlacement -> unit
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Primitives_PopupPositioning_CustomPopupPlacement">CustomPopupPlacement</a></dt><dd> </dd></dl>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning Namespace</a>  
