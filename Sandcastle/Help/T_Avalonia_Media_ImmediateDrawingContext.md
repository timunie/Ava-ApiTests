---
title:ImmediateDrawingContext Class
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# ImmediateDrawingContext Class




## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public sealed class ImmediateDrawingContext : IDisposable, 
	IOptionalFeatureProvider
```
**VB**
``` VB
Public NotInheritable Class ImmediateDrawingContext
	Implements IDisposable, IOptionalFeatureProvider
```
**F#**
``` F#
[<SealedAttribute>]
type ImmediateDrawingContext = 
    class
        interface IDisposable
        interface IOptionalFeatureProvider
    end
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  ImmediateDrawingContext</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Platform_IOptionalFeatureProvider">IOptionalFeatureProvider</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_ImmediateDrawingContext_CurrentTransform">CurrentTransform</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_ImmediateDrawingContext_PlatformImpl">PlatformImpl</a></td>
<td> </td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_Dispose">Dispose()</a></td>
<td>Releases all resources used by the ImmediateDrawingContext</td></tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_DrawBitmap_1">DrawBitmap(Bitmap, Rect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_DrawBitmap">DrawBitmap(Bitmap, Rect, Rect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_DrawEllipse">DrawEllipse(IImmutableBrush, ImmutablePen, Point, Double, Double)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_DrawGlyphRun">DrawGlyphRun(IImmutableBrush, IImmutableGlyphRunReference)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_DrawLine">DrawLine(ImmutablePen, Point, Point)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_DrawRectangle_1">DrawRectangle(ImmutablePen, Rect, Single)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_DrawRectangle">DrawRectangle(IImmutableBrush, ImmutablePen, Rect, Double, Double, BoxShadows)</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_FillRectangle">FillRectangle(IImmutableBrush, Rect, Single)</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_PushClip">PushClip(Rect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_PushClip_1">PushClip(RoundedRect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_PushOpacity">PushOpacity(Double, Rect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_PushOpacityMask">PushOpacityMask(IImmutableBrush, Rect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_PushPostTransform">PushPostTransform(Matrix)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_PushPreTransform">PushPreTransform(Matrix)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_PushSetTransform">PushSetTransform(Matrix)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_PushTransformContainer">PushTransformContainer()</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_TryGetFeature">TryGetFeature(Type)</a></td>
<td> </td></tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_OptionalFeatureProviderExtensions_TryGetFeature__1_1">TryGetFeature(T)()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Platform_OptionalFeatureProviderExtensions">OptionalFeatureProviderExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_OptionalFeatureProviderExtensions_TryGetFeature__1">TryGetFeature(T)(T)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Platform_OptionalFeatureProviderExtensions">OptionalFeatureProviderExtensions</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
