---
title:DrawingContext Class
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# DrawingContext Class




## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public abstract class DrawingContext : IDisposable
```
**VB**
``` VB
Public MustInherit Class DrawingContext
	Implements IDisposable
```
**F#**
``` F#
[<AbstractClassAttribute>]
type DrawingContext = 
    class
        interface IDisposable
    end
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  DrawingContext</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_Custom">Custom(ICustomDrawOperation)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_Dispose">Dispose()</a></td>
<td>Releases all resources used by the DrawingContext</td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_DisposeCore">DisposeCore()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_DrawEllipse_1">DrawEllipse(IBrush, IPen, Rect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_DrawEllipse">DrawEllipse(IBrush, IPen, Point, Double, Double)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_DrawEllipseCore">DrawEllipseCore(IBrush, IPen, Rect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_DrawGeometry">DrawGeometry(IBrush, IPen, Geometry)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_DrawGeometry_1">DrawGeometry(IBrush, IPen, IGeometryImpl)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_DrawGeometryCore">DrawGeometryCore(IBrush, IPen, IGeometryImpl)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_DrawGlyphRun">DrawGlyphRun(IBrush, GlyphRun)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_DrawImage_1">DrawImage(IImage, Rect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_DrawImage">DrawImage(IImage, Rect, Rect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_DrawLine">DrawLine(IPen, Point, Point)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_DrawLineCore">DrawLineCore(IPen, Point, Point)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_DrawRectangle_2">DrawRectangle(IPen, Rect, Single)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_DrawRectangle_1">DrawRectangle(IBrush, IPen, RoundedRect, BoxShadows)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_DrawRectangle">DrawRectangle(IBrush, IPen, Rect, Double, Double, BoxShadows)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_DrawRectangleCore">DrawRectangleCore(IBrush, IPen, RoundedRect, BoxShadows)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_DrawText">DrawText(FormattedText, Point)</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_FillRectangle">FillRectangle(IBrush, Rect, Single)</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_PopClipCore">PopClipCore()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_PopGeometryClipCore">PopGeometryClipCore()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_PopOpacityCore">PopOpacityCore()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_PopOpacityMaskCore">PopOpacityMaskCore()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_PopRenderOptionsCore">PopRenderOptionsCore()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_PopTransformCore">PopTransformCore()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_PushClip">PushClip(Rect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_PushClip_1">PushClip(RoundedRect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_PushClipCore">PushClipCore(Rect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_PushClipCore_1">PushClipCore(RoundedRect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_PushGeometryClip">PushGeometryClip(Geometry)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_PushGeometryClipCore">PushGeometryClipCore(Geometry)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_PushOpacity">PushOpacity(Double)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_PushOpacityCore">PushOpacityCore(Double)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_PushOpacityMask">PushOpacityMask(IBrush, Rect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_PushOpacityMaskCore">PushOpacityMaskCore(IBrush, Rect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_PushRenderOptions">PushRenderOptions(RenderOptions)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_PushRenderOptionsCore">PushRenderOptionsCore(RenderOptions)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_PushTransform">PushTransform(Matrix)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_DrawingContext_PushTransformCore">PushTransformCore(Matrix)</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
