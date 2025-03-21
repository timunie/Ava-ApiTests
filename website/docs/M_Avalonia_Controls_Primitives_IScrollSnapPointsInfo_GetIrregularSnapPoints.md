# GetIrregularSnapPoints Method


Returns the set of distances between irregular snap points for a specified orientation and alignment.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IReadOnlyList<double> GetIrregularSnapPoints(
	Orientation orientation,
	SnapPointsAlignment snapPointsAlignment
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function GetIrregularSnapPoints ( 
	orientation As Orientation,
	snapPointsAlignment As SnapPointsAlignment
) As IReadOnlyList(Of Double)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetIrregularSnapPoints : 
        orientation : Orientation * 
        snapPointsAlignment : SnapPointsAlignment -> IReadOnlyList<float> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Primitives/IScrollSnapPointsInfo.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Layout_Orientation">Orientation</a></dt><dd>The orientation for the desired snap point set.</dd><dt>  <a href="T_Avalonia_Controls_Primitives_SnapPointsAlignment">SnapPointsAlignment</a></dt><dd>The alignment to use when applying the snap points.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>)  
The read-only collection of snap point distances. Returns an empty collection when no snap points are present.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_IScrollSnapPointsInfo">IScrollSnapPointsInfo Interface</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  

