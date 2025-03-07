# BeginFigure Method


Begins a new figure.



## Definition
**Namespace:** <a href="N_Avalonia_Visuals_Platform">Avalonia.Visuals.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void BeginFigure(
	Point startPoint,
	bool isFilled
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub BeginFigure ( 
	startPoint As Point,
	isFilled As Boolean
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract BeginFigure : 
        startPoint : Point * 
        isFilled : bool -> unit 
override BeginFigure : 
        startPoint : Point * 
        isFilled : bool -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/PathGeometryContext.cs#L40" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The starting point for the figure.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd>Whether the figure is filled.</dd></dl>

#### Implements
<a href="M_Avalonia_Platform_IGeometryContext_BeginFigure">IGeometryContext.BeginFigure(Point, Boolean)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Visuals_Platform_PathGeometryContext">PathGeometryContext Class</a>  
<a href="N_Avalonia_Visuals_Platform">Avalonia.Visuals.Platform Namespace</a>  
