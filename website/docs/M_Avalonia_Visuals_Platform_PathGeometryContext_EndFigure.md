# EndFigure Method


Ends the figure started by <a href="M_Avalonia_Platform_IGeometryContext_BeginFigure">BeginFigure(Point, Boolean)</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Visuals_Platform">Avalonia.Visuals.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void EndFigure(
	bool isClosed
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub EndFigure ( 
	isClosed As Boolean
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract EndFigure : 
        isClosed : bool -> unit 
override EndFigure : 
        isClosed : bool -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/PathGeometryContext.cs#L79" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd>Whether the figure is closed.</dd></dl>

#### Implements
<a href="M_Avalonia_Platform_IGeometryContext_EndFigure">IGeometryContext.EndFigure(Boolean)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Visuals_Platform_PathGeometryContext">PathGeometryContext Class</a>  
<a href="N_Avalonia_Visuals_Platform">Avalonia.Visuals.Platform Namespace</a>  

