# GetRegularSnapPoints Method


Gets the distance between regular snap points for a specified orientation and alignment.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
double GetRegularSnapPoints(
	Orientation orientation,
	SnapPointsAlignment snapPointsAlignment,
	out double offset
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function GetRegularSnapPoints ( 
	orientation As Orientation,
	snapPointsAlignment As SnapPointsAlignment,
	<OutAttribute> ByRef offset As Double
) As Double
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetRegularSnapPoints : 
        orientation : Orientation * 
        snapPointsAlignment : SnapPointsAlignment * 
        offset : float byref -> float 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Primitives/IScrollSnapPointsInfo.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Layout_Orientation">Orientation</a></dt><dd>The orientation for the desired snap point set.</dd><dt>  <a href="T_Avalonia_Controls_Primitives_SnapPointsAlignment">SnapPointsAlignment</a></dt><dd>The alignment to use when applying the snap points.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>Out parameter. The offset of the first snap point.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  
The distance between the equidistant snap points. Returns 0 when no snap points are present.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_IScrollSnapPointsInfo">IScrollSnapPointsInfo Interface</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  
