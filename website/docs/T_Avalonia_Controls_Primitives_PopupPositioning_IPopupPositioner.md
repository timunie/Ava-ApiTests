import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# IPopupPositioner Interface


Positions an <a href="T_Avalonia_Controls_Primitives_IPopupHost">IPopupHost</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IPopupPositioner
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IPopupPositioner
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IPopupPositioner = interface end
```
</TabItem>
</Tabs>

IPopupPositioner is an abstraction of the wayland xdg_positioner spec. The popup positioner implementation is determined by the platform implementation. A default managed implementation is provided in <a href="T_Avalonia_Controls_Primitives_PopupPositioning_ManagedPopupPositioner">ManagedPopupPositioner</a> for platforms on which popups can be arbitrarily positioned.

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_PopupPositioning_IPopupPositioner_Update">Update</a></td>
<td>Updates the position of the associated <a href="T_Avalonia_Controls_Primitives_IPopupHost">IPopupHost</a> according to the specified parameters.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning Namespace</a>  
