# GetIrregularSnapPoints Method


Returns the set of distances between irregular snap points for a specified orientation and alignment.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IReadOnlyList<double> GetIrregularSnapPoints(
	Orientation orientation,
	SnapPointsAlignment snapPointsAlignment
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetIrregularSnapPoints ( 
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
override GetIrregularSnapPoints : 
        orientation : Orientation * 
        snapPointsAlignment : SnapPointsAlignment -> IReadOnlyList<float> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/StackPanel.cs#L361" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Layout_Orientation">Orientation</a></dt><dd>The orientation for the desired snap point set.</dd><dt>  <a href="T_Avalonia_Controls_Primitives_SnapPointsAlignment">SnapPointsAlignment</a></dt><dd>The alignment to use when applying the snap points.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>)  
The read-only collection of snap point distances. Returns an empty collection when no snap points are present.

#### Implements
<a href="M_Avalonia_Controls_Primitives_IScrollSnapPointsInfo_GetIrregularSnapPoints">IScrollSnapPointsInfo.GetIrregularSnapPoints(Orientation, SnapPointsAlignment)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Controls_StackPanel">StackPanel Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

