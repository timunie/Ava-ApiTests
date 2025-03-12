# PopupPositionerParameters Structure


Provides positioning parameters to <a href="T_Avalonia_Controls_Primitives_PopupPositioning_IPopupPositioner">IPopupPositioner</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[UnstableAttribute("This API may be removed in Avalonia 12. If you depend on this API, please open an issue with details of your use-case.")]
public struct PopupPositionerParameters : IEquatable<PopupPositionerParameters>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<UnstableAttribute("This API may be removed in Avalonia 12. If you depend on this API, please open an issue with details of your use-case.")>
Public Structure PopupPositionerParameters
	Implements IEquatable(Of PopupPositionerParameters)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
[<UnstableAttribute("This API may be removed in Avalonia 12. If you depend on this API, please open an issue with details of your use-case.")>]
type PopupPositionerParameters = 
    struct
        inherit ValueType
        interface IEquatable<PopupPositionerParameters>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Primitives/PopupPositioning/IPopupPositioner.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  PopupPositionerParameters</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(PopupPositionerParameters)</td></tr>
</table>

The IPopupPositioner provides a collection of rules for the placement of a popup relative to its parent. Rules can be defined to ensure the popup remains within the visible area's borders, and to specify how the popup changes its position, such as sliding along an axis, or flipping around a rectangle. These positioner-created rules are constrained by the requirement that a popup must intersect with or be at least partially adjacent to its parent surface.

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_PopupPositioning_PopupPositionerParameters_Anchor">Anchor</a></td>
<td>Defines the anchor point for the anchor rectangle.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_PopupPositioning_PopupPositionerParameters_AnchorRectangle">AnchorRectangle</a></td>
<td>Specifies the anchor rectangle within the parent that the popup will be placed relative to, in device-independent pixels.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_PopupPositioning_PopupPositionerParameters_ConstraintAdjustment">ConstraintAdjustment</a></td>
<td>Specify how the popup should be positioned if the originally intended position caused the popup to be constrained.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_PopupPositioning_PopupPositionerParameters_Gravity">Gravity</a></td>
<td>Defines in what direction a popup should be positioned, relative to the anchor point of the parent.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_PopupPositioning_PopupPositionerParameters_Offset">Offset</a></td>
<td>Specify the popup position offset relative to the position of the anchor on the anchor rectangle and the anchor on the popup.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_PopupPositioning_PopupPositionerParameters_Size">Size</a></td>
<td>Set the size of the popup that is to be positioned with the positioner object, in device- independent pixels.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning Namespace</a>  

