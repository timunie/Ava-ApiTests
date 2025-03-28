# TryGetPointAndTangentAtDistance Method


Attempts to get the corresponding point and tangent from the specified distance along the contour of the geometry.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool TryGetPointAndTangentAtDistance(
	double distance,
	out Point? point,
	out Point? tangent
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function TryGetPointAndTangentAtDistance ( 
	distance As Double,
	<OutAttribute> ByRef point As Point,
	<OutAttribute> ByRef tangent As Point
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member TryGetPointAndTangentAtDistance : 
        distance : float * 
        point : Point byref * 
        tangent : Point byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Geometry.cs#L269" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The contour distance to get from.</dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The point in the specified distance.</dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The tangent in the specified distance.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
If there's valid point and tangent at the specified distance.

## See Also


#### Reference
<a href="T_Avalonia_Media_Geometry">Geometry Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

