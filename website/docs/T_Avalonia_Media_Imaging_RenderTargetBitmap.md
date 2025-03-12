# RenderTargetBitmap Class


A bitmap that holds the rendering of a <a href="T_Avalonia_Visual">Visual</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Media_Imaging">Avalonia.Media.Imaging</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class RenderTargetBitmap : Bitmap
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class RenderTargetBitmap
	Inherits Bitmap
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type RenderTargetBitmap = 
    class
        inherit Bitmap
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Imaging/RenderTargetBitmap.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap</a>  →  RenderTargetBitmap</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_Imaging_RenderTargetBitmap__ctor_1">RenderTargetBitmap(PixelSize)</a></td>
<td>Initializes a new instance of the RenderTargetBitmap class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Imaging_RenderTargetBitmap__ctor">RenderTargetBitmap(PixelSize, Vector)</a></td>
<td>Initializes a new instance of the RenderTargetBitmap class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_Imaging_Bitmap_AlphaFormat">AlphaFormat</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Imaging_Bitmap_Dpi">Dpi</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Imaging_Bitmap_Format">Format</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Imaging_Bitmap_PixelSize">PixelSize</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Imaging_Bitmap_Size">Size</a></td>
<td>Gets the size of the image, in device independent pixels.<br />(Inherited from <a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_Imaging_Bitmap_CopyPixels_1">CopyPixels(ILockedFramebuffer, AlphaFormat)</a></td>
<td>Copies pixels to the target buffer and transcodes the pixel and alpha format if needed.<br />(Inherited from <a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Imaging_Bitmap_CopyPixels">CopyPixels(PixelRect, IntPtr, Int32, Int32)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Imaging_RenderTargetBitmap_CreateDrawingContext">CreateDrawingContext()</a></td>
<td>Creates a <a href="T_Avalonia_Media_DrawingContext">DrawingContext</a> for drawing to the RenderTargetBitmap. Clears the current image data to transparent.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Imaging_RenderTargetBitmap_CreateDrawingContext_1">CreateDrawingContext(Boolean)</a></td>
<td>Creates a <a href="T_Avalonia_Media_DrawingContext">DrawingContext</a> for drawing to the RenderTargetBitmap.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Imaging_Bitmap_CreateScaledBitmap">CreateScaledBitmap(PixelSize, BitmapInterpolationMode)</a></td>
<td>Creates a Bitmap scaled to a specified size from the current bitmap.<br />(Inherited from <a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Imaging_RenderTargetBitmap_Dispose">Dispose()</a></td>
<td>Releases all resources used by the RenderTargetBitmap<br />(Overrides <a href="M_Avalonia_Media_Imaging_Bitmap_Dispose">Bitmap.Dispose()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
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
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Imaging_RenderTargetBitmap_Render">Render(Visual)</a></td>
<td>Renders a visual to the RenderTargetBitmap.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Imaging_Bitmap_Save">Save(Stream, Nullable(Int32))</a></td>
<td>Saves the bitmap to a stream.<br />(Inherited from <a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Imaging_Bitmap_Save_1">Save(String, Nullable(Int32))</a></td>
<td>Saves the bitmap to a file.<br />(Inherited from <a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media_Imaging">Avalonia.Media.Imaging Namespace</a>  

