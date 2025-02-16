---
title:IDrawingContextImpl Interface
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# IDrawingContextImpl Interface




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
[UnstableAttribute]
public interface IDrawingContextImpl : IDisposable
```
**VB**
``` VB
<UnstableAttribute>
Public Interface IDrawingContextImpl
	Inherits IDisposable
```
**F#**
``` F#
[<UnstableAttribute>]
type IDrawingContextImpl = 
    interface
        interface IDisposable
    end
```

<table><tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_IDrawingContextImpl_Transform">Transform</a></td>
<td> </td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_Clear">Clear(Color)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_CreateLayer">CreateLayer(PixelSize)</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_DrawBitmap">DrawBitmap(IBitmapImpl, IBrush, Rect, Rect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_DrawBitmap_1">DrawBitmap(IBitmapImpl, Double, Rect, Rect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_DrawEllipse">DrawEllipse(IBrush, IPen, Rect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_DrawGeometry">DrawGeometry(IBrush, IPen, IGeometryImpl)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_DrawGlyphRun">DrawGlyphRun(IBrush, IGlyphRunImpl)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_DrawLine">DrawLine(IPen, Point, Point)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_DrawRectangle">DrawRectangle(IBrush, IPen, RoundedRect, BoxShadows)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_DrawRegion">DrawRegion(IBrush, IPen, IPlatformRenderInterfaceRegion)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_GetFeature">GetFeature(Type)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_PopClip">PopClip()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_PopGeometryClip">PopGeometryClip()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_PopLayer">PopLayer()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_PopOpacity">PopOpacity()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_PopOpacityMask">PopOpacityMask()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_PopRenderOptions">PopRenderOptions()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_PushClip">PushClip(IPlatformRenderInterfaceRegion)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_PushClip_1">PushClip(Rect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_PushClip_2">PushClip(RoundedRect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_PushGeometryClip">PushGeometryClip(IGeometryImpl)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_PushLayer">PushLayer(Rect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_PushOpacity">PushOpacity(Double, Nullable(Rect))</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_PushOpacityMask">PushOpacityMask(IBrush, Rect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextImpl_PushRenderOptions">PushRenderOptions(RenderOptions)</a></td>
<td> </td></tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_DrawingContextImplExtensions_GetFeature__1">GetFeature(T)()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Platform_DrawingContextImplExtensions">DrawingContextImplExtensions</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
