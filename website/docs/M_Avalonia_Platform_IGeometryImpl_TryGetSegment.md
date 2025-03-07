# TryGetSegment Method


Attempts to get the corresponding path segment given by the two distances specified. Imagine it like snipping a part of the current geometry.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
bool TryGetSegment(
	double startDistance,
	double stopDistance,
	bool startOnBeginFigure,
	out IGeometryImpl?? segmentGeometry
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function TryGetSegment ( 
	startDistance As Double,
	stopDistance As Double,
	startOnBeginFigure As Boolean,
	<OutAttribute> ByRef segmentGeometry As IGeometryImpl
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract TryGetSegment : 
        startDistance : float * 
        stopDistance : float * 
        startOnBeginFigure : bool * 
        segmentGeometry : IGeometryImpl byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IGeometryImpl.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The contour distance to start snipping from.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The contour distance to stop snipping to.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd>If ture, the resulting snipped path will start with a BeginFigure call.</dd><dt>  <a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a></dt><dd>The resulting snipped path.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
If the snipping operation is successful.

## See Also


#### Reference
<a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
