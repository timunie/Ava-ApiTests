# DrawGeometry Method


Draws a geometry.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
void DrawGeometry(
	IBrush? brush,
	IPen? pen,
	IGeometryImpl geometry
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub DrawGeometry ( 
	brush As IBrush,
	pen As IPen,
	geometry As IGeometryImpl
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract DrawGeometry : 
        brush : IBrush * 
        pen : IPen * 
        geometry : IGeometryImpl -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IDrawingContextImpl.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_IBrush">IBrush</a></dt><dd>The fill brush.</dd><dt>  <a href="T_Avalonia_Media_IPen">IPen</a></dt><dd>The stroke pen.</dd><dt>  <a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a></dt><dd>The geometry.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IDrawingContextImpl">IDrawingContextImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
