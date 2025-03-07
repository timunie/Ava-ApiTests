# DrawRectangle Method


Draws a rectangle with the specified Brush and Pen.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
void DrawRectangle(
	IBrush? brush,
	IPen? pen,
	RoundedRect rect,
	BoxShadows boxShadows = default
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub DrawRectangle ( 
	brush As IBrush,
	pen As IPen,
	rect As RoundedRect,
	Optional boxShadows As BoxShadows = Nothing
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract DrawRectangle : 
        brush : IBrush * 
        pen : IPen * 
        rect : RoundedRect * 
        ?boxShadows : BoxShadows 
(* Defaults:
        let _boxShadows = defaultArg boxShadows new BoxShadows()
*)
-> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IDrawingContextImpl.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_IBrush">IBrush</a></dt><dd>The brush used to fill the rectangle, or <code>null</code> for no fill.</dd><dt>  <a href="T_Avalonia_Media_IPen">IPen</a></dt><dd>The pen used to stroke the rectangle, or <code>null</code> for no stroke.</dd><dt>  <a href="T_Avalonia_RoundedRect">RoundedRect</a></dt><dd>The rectangle bounds.</dd><dt>  <a href="T_Avalonia_Media_BoxShadows">BoxShadows</a>  (Optional)</dt><dd>Box shadow effect parameters</dd></dl>The brush and the pen can both be null. If the brush is null, then no fill is performed. If the pen is null, then no stoke is performed. If both the pen and the brush are null, then the drawing is not visible.

## See Also


#### Reference
<a href="T_Avalonia_Platform_IDrawingContextImpl">IDrawingContextImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
