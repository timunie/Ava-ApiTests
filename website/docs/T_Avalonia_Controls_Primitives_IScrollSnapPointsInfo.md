# IScrollSnapPointsInfo Interface


Describes snap point behavior for objects that contain and present items.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IScrollSnapPointsInfo
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IScrollSnapPointsInfo
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IScrollSnapPointsInfo = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Primitives/IScrollSnapPointsInfo.cs" title="View the source code">View Source</a>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_IScrollSnapPointsInfo_AreHorizontalSnapPointsRegular">AreHorizontalSnapPointsRegular</a></td>
<td>Gets or sets a value that indicates whether the horizontal snap points for the container are equidistant from each other.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_IScrollSnapPointsInfo_AreVerticalSnapPointsRegular">AreVerticalSnapPointsRegular</a></td>
<td>Gets or sets a value that indicates whether the vertical snap points for the container are equidistant from each other.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_IScrollSnapPointsInfo_GetIrregularSnapPoints">GetIrregularSnapPoints(Orientation, SnapPointsAlignment)</a></td>
<td>Returns the set of distances between irregular snap points for a specified orientation and alignment.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_IScrollSnapPointsInfo_GetRegularSnapPoints">GetRegularSnapPoints(Orientation, SnapPointsAlignment, Double)</a></td>
<td>Gets the distance between regular snap points for a specified orientation and alignment.</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Controls_Primitives_IScrollSnapPointsInfo_HorizontalSnapPointsChanged">HorizontalSnapPointsChanged</a></td>
<td>Occurs when the measurements for horizontal snap points change.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Primitives_IScrollSnapPointsInfo_VerticalSnapPointsChanged">VerticalSnapPointsChanged</a></td>
<td>Occurs when the measurements for vertical snap points change.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  
