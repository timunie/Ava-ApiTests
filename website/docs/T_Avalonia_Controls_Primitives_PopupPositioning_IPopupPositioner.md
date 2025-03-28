# IPopupPositioner Interface


Positions an <a href="T_Avalonia_Controls_Primitives_IPopupHost">IPopupHost</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[NotClientImplementableAttribute]
public interface IPopupPositioner
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<NotClientImplementableAttribute>
Public Interface IPopupPositioner
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<NotClientImplementableAttribute>]
type IPopupPositioner = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Primitives/PopupPositioning/IPopupPositioner.cs" title="View the source code">View Source</a>



## Remarks
IPopupPositioner is an abstraction of the wayland xdg_positioner spec. The popup positioner implementation is determined by the platform implementation. A default managed implementation is provided in ManagedPopupPositioner for platforms on which popups can be arbitrarily positioned.

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_PopupPositioning_IPopupPositioner_Update">Update(PopupPositionerParameters)</a></td>
<td>Updates the position of the associated <a href="T_Avalonia_Controls_Primitives_IPopupHost">IPopupHost</a> according to the specified parameters.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning Namespace</a>  

