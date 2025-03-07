# BeginFigure Method


Begins a new figure.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
void BeginFigure(
	Point startPoint,
	bool isFilled = true
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub BeginFigure ( 
	startPoint As Point,
	Optional isFilled As Boolean = true
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract BeginFigure : 
        startPoint : Point * 
        ?isFilled : bool 
(* Defaults:
        let _isFilled = defaultArg isFilled true
*)
-> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IGeometryContext.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The starting point for the figure.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>Whether the figure is filled.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IGeometryContext">IGeometryContext Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
