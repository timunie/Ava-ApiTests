# BuildHighlightGeometry(Point, Int32, Int32) Method


Builds a highlight geometry object for a given character range.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Geometry? BuildHighlightGeometry(
	Point origin,
	int startIndex,
	int count
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function BuildHighlightGeometry ( 
	origin As Point,
	startIndex As Integer,
	count As Integer
) As Geometry
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member BuildHighlightGeometry : 
        origin : Point * 
        startIndex : int * 
        count : int -> Geometry 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/FormattedText.cs#L1402" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The origin of the highlight region.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The start index of initial character the bounds should be obtained for.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The number of characters the bounds should be obtained for.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_Geometry">Geometry</a>  
Geometry that surrounds the specified character range.

## See Also


#### Reference
<a href="T_Avalonia_Media_FormattedText">FormattedText Class</a>  
<a href="Overload_Avalonia_Media_FormattedText_BuildHighlightGeometry">BuildHighlightGeometry Overload</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

