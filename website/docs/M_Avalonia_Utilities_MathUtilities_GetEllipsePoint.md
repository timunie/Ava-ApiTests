# GetEllipsePoint Method


Calculates the point of an angle on an ellipse.



## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Point GetEllipsePoint(
	Point centre,
	double radiusX,
	double radiusY,
	double angle
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function GetEllipsePoint ( 
	centre As Point,
	radiusX As Double,
	radiusY As Double,
	angle As Double
) As Point
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member GetEllipsePoint : 
        centre : Point * 
        radiusX : float * 
        radiusY : float * 
        angle : float -> Point 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Utilities/MathUtilities.cs#L342" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The centre point of the ellipse.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The x radius of the ellipse.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The y radius of the ellipse.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The angle in radians.</dd></dl>

#### Return Value
<a href="T_Avalonia_Point">Point</a>  
A point on the ellipse.

## See Also


#### Reference
<a href="T_Avalonia_Utilities_MathUtilities">MathUtilities Class</a>  
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  

