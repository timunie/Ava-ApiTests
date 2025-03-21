# TryGetSegment Method


Attempts to get the corresponding path segment given by the two distances specified. Imagine it like snipping a part of the current geometry.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool TryGetSegment(
	double startDistance,
	double stopDistance,
	bool startOnBeginFigure,
	out Geometry?? segmentGeometry
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function TryGetSegment ( 
	startDistance As Double,
	stopDistance As Double,
	startOnBeginFigure As Boolean,
	<OutAttribute> ByRef segmentGeometry As Geometry
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member TryGetSegment : 
        startDistance : float * 
        stopDistance : float * 
        startOnBeginFigure : bool * 
        segmentGeometry : Geometry byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Geometry.cs#L292" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The contour distance to start snipping from.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The contour distance to stop snipping to.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd>If ture, the resulting snipped path will start with a BeginFigure call.</dd><dt>  <a href="T_Avalonia_Media_Geometry">Geometry</a></dt><dd>The resulting snipped path.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
If the snipping operation is successful.

## See Also


#### Reference
<a href="T_Avalonia_Media_Geometry">Geometry Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

