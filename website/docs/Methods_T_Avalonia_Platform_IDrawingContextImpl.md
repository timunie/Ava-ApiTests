# IDrawingContextImpl Methods




## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_Clear">Clear(Color)</a></td>
<td>Clears the render target to the specified color.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_CreateLayer">CreateLayer(PixelSize)</a></td>
<td>Creates a new <a href="T_Avalonia_Platform_IRenderTargetBitmapImpl">IRenderTargetBitmapImpl</a> that can be used as a render layer for the current render target.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_DrawBitmap">DrawBitmap(IBitmapImpl, IBrush, Rect, Rect)</a></td>
<td>Draws a bitmap image.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_DrawBitmap_1">DrawBitmap(IBitmapImpl, Double, Rect, Rect)</a></td>
<td>Draws a bitmap image.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_DrawEllipse">DrawEllipse(IBrush, IPen, Rect)</a></td>
<td>Draws an ellipse with the specified Brush and Pen.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_DrawGeometry">DrawGeometry(IBrush, IPen, IGeometryImpl)</a></td>
<td>Draws a geometry.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_DrawGlyphRun">DrawGlyphRun(IBrush, IGlyphRunImpl)</a></td>
<td>Draws a glyph run.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_DrawLine">DrawLine(IPen, Point, Point)</a></td>
<td>Draws a line.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_DrawRectangle">DrawRectangle(IBrush, IPen, RoundedRect, BoxShadows)</a></td>
<td>Draws a rectangle with the specified Brush and Pen.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_DrawRegion">DrawRegion(IBrush, IPen, IPlatformRenderInterfaceRegion)</a></td>
<td>Draws the specified region with the specified Brush and Pen.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_GetFeature">GetFeature(Type)</a></td>
<td>Attempts to get an optional feature from the drawing context implementation.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_PopClip">PopClip()</a></td>
<td>Pops the latest pushed clip rectangle.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_PopGeometryClip">PopGeometryClip()</a></td>
<td>Pops the latest pushed geometry clip.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_PopLayer">PopLayer()</a></td>
<td>Pops the latest pushed intermediate surface layer.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_PopOpacity">PopOpacity()</a></td>
<td>Pops the latest pushed opacity value.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_PopOpacityMask">PopOpacityMask()</a></td>
<td>Pops the latest pushed opacity mask.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_PopRenderOptions">PopRenderOptions()</a></td>
<td>Pops the latest render options.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_PushClip">PushClip(IPlatformRenderInterfaceRegion)</a></td>
<td>Pushes a clip region.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_PushClip_1">PushClip(Rect)</a></td>
<td>Pushes a clip rectangle.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_PushClip_2">PushClip(RoundedRect)</a></td>
<td>Pushes a clip rounded rectangle.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_PushGeometryClip">PushGeometryClip(IGeometryImpl)</a></td>
<td>Pushes a clip geometry.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_PushLayer">PushLayer(Rect)</a></td>
<td>Enforces rendering to happen on an intermediate surface</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_PushOpacity">PushOpacity(Double, Nullable(Rect))</a></td>
<td>Pushes an opacity value.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_PushOpacityMask">PushOpacityMask(IBrush, Rect)</a></td>
<td>Pushes an opacity mask.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_PushRenderOptions">PushRenderOptions(RenderOptions)</a></td>
<td>Pushes render options.</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_DrawingContextImplExtensions_GetFeature__1">GetFeature(T)()</a></td>
<td>Attempts to get an optional feature from the drawing context implementation.<br />(Defined by <a href="T_Avalonia_Platform_DrawingContextImplExtensions">DrawingContextImplExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IDrawingContextImpl">IDrawingContextImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
