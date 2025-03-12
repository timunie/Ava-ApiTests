# SetFillRule Method


Sets path's winding rule (default is EvenOdd). You should call this method before any calls to BeginFigure. If you wonder why, ask Direct2D guys about their design decisions.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void SetFillRule(
	FillRule fillRule
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub SetFillRule ( 
	fillRule As FillRule
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract SetFillRule : 
        fillRule : FillRule -> unit 
override SetFillRule : 
        fillRule : FillRule -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/StreamGeometryContext.cs#L34" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_FillRule">FillRule</a></dt><dd /></dl>

#### Implements
<a href="M_Avalonia_Platform_IGeometryContext_SetFillRule">IGeometryContext.SetFillRule(FillRule)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Media_StreamGeometryContext">StreamGeometryContext Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

