# ImmediateDrawingContext Class




## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public sealed class ImmediateDrawingContext : IDisposable, 
	IOptionalFeatureProvider
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class ImmediateDrawingContext
	Implements IDisposable, IOptionalFeatureProvider
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type ImmediateDrawingContext = 
    class
        interface IDisposable
        interface IOptionalFeatureProvider
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/ImmediateDrawingContext.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  ImmediateDrawingContext</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Platform_IOptionalFeatureProvider">IOptionalFeatureProvider</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_ImmediateDrawingContext_CurrentTransform">CurrentTransform</a></td>
<td>Gets the current transform of the drawing context.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_ImmediateDrawingContext_PlatformImpl">PlatformImpl</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_Dispose">Dispose()</a></td>
<td>Disposes of any resources held by the <a href="T_Avalonia_Media_DrawingContext">DrawingContext</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_DrawBitmap_1">DrawBitmap(Bitmap, Rect)</a></td>
<td>Draws an bitmap.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_DrawBitmap">DrawBitmap(Bitmap, Rect, Rect)</a></td>
<td>Draws an image.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_DrawEllipse">DrawEllipse(IImmutableBrush, ImmutablePen, Point, Double, Double)</a></td>
<td>Draws an ellipse with the specified Brush and Pen.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_DrawGlyphRun">DrawGlyphRun(IImmutableBrush, IImmutableGlyphRunReference)</a></td>
<td>Draws a glyph run.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_DrawLine">DrawLine(ImmutablePen, Point, Point)</a></td>
<td>Draws a line.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_DrawRectangle_1">DrawRectangle(ImmutablePen, Rect, Single)</a></td>
<td>Draws the outline of a rectangle.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_DrawRectangle">DrawRectangle(IImmutableBrush, ImmutablePen, Rect, Double, Double, BoxShadows)</a></td>
<td>Draws a rectangle with the specified Brush and Pen.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_FillRectangle">FillRectangle(IImmutableBrush, Rect, Single)</a></td>
<td>Draws a filled rectangle.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_PushClip">PushClip(Rect)</a></td>
<td>Pushes a clip rectangle.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_PushClip_1">PushClip(RoundedRect)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_PushOpacity">PushOpacity(Double, Rect)</a></td>
<td>Pushes an opacity value.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_PushOpacityMask">PushOpacityMask(IImmutableBrush, Rect)</a></td>
<td>Pushes an opacity mask.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_PushPostTransform">PushPostTransform(Matrix)</a></td>
<td>Pushes a matrix post-transformation.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_PushPreTransform">PushPreTransform(Matrix)</a></td>
<td>Pushes a matrix pre-transformation.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_PushSetTransform">PushSetTransform(Matrix)</a></td>
<td>Sets the current matrix transformation.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_PushTransformContainer">PushTransformContainer()</a></td>
<td>Pushes a new transform context.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_ImmediateDrawingContext_TryGetFeature">TryGetFeature(Type)</a></td>
<td> </td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_OptionalFeatureProviderExtensions_TryGetFeature__1_1">TryGetFeature(T)()</a></td>
<td>Queries for an optional feature.<br />(Defined by <a href="T_Avalonia_Platform_OptionalFeatureProviderExtensions">OptionalFeatureProviderExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_OptionalFeatureProviderExtensions_TryGetFeature__1">TryGetFeature(T)(T)</a></td>
<td>Queries for an optional feature.<br />(Defined by <a href="T_Avalonia_Platform_OptionalFeatureProviderExtensions">OptionalFeatureProviderExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
