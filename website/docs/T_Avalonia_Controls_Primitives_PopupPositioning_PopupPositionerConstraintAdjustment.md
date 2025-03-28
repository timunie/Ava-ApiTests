# PopupPositionerConstraintAdjustment Enumeration


Defines how a popup position will be adjusted if the unadjusted position would result in the popup being partly constrained.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[FlagsAttribute]
public enum PopupPositionerConstraintAdjustment
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<FlagsAttribute>
Public Enumeration PopupPositionerConstraintAdjustment
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<FlagsAttribute>]
type PopupPositionerConstraintAdjustment
```
</TabItem>
</Tabs>



## Remarks
Whether a popup is considered 'constrained' is left to the positioner to determine. For example, the popup may be partly outside the target platform defined 'work area', thus necessitating the popup's position be adjusted until it is entirely inside the work area.

## Members
<table>
<tr>
<td>None</td>
<td>0</td>
<td>Don't alter the surface position even if it is constrained on some axis, for example partially outside the edge of an output.</td>
</tr>
<tr>
<td>SlideX</td>
<td>1</td>
<td>Slide the surface along the x axis until it is no longer constrained.</td>
</tr>
<tr>
<td>SlideY</td>
<td>2</td>
<td>Slide the surface along the y axis until it is no longer constrained.</td>
</tr>
<tr>
<td>FlipX</td>
<td>4</td>
<td>Invert the anchor and gravity on the x axis if the surface is constrained on the x axis.</td>
</tr>
<tr>
<td>FlipY</td>
<td>8</td>
<td>Invert the anchor and gravity on the y axis if the surface is constrained on the y axis.</td>
</tr>
<tr>
<td>ResizeX</td>
<td>16</td>
<td>Horizontally resize the surface</td>
</tr>
<tr>
<td>ResizeY</td>
<td>32</td>
<td>Vertically resize the surface</td>
</tr>
<tr>
<td>All</td>
<td>63</td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning Namespace</a>  

