# Bitmap Class


Holds a bitmap image.



## Definition
**Namespace:** <a href="N_Avalonia_Media_Imaging">Avalonia.Media.Imaging</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class Bitmap : IImage, IDisposable, 
	IImageBrushSource
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class Bitmap
	Implements IImage, IDisposable, IImageBrushSource
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type Bitmap = 
    class
        interface IImage
        interface IDisposable
        interface IImageBrushSource
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Imaging/Bitmap.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  Bitmap</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Media_Imaging_RenderTargetBitmap">Avalonia.Media.Imaging.RenderTargetBitmap</a><br /><a href="T_Avalonia_Media_Imaging_WriteableBitmap">Avalonia.Media.Imaging.WriteableBitmap</a></td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Media_IImage">IImage</a>, <a href="T_Avalonia_Media_IImageBrushSource">IImageBrushSource</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_Imaging_Bitmap__ctor_1">Bitmap(Stream)</a></td>
<td>Initializes a new instance of the Bitmap class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Imaging_Bitmap__ctor_2">Bitmap(String)</a></td>
<td>Initializes a new instance of the Bitmap class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Imaging_Bitmap__ctor">Bitmap(PixelFormat, AlphaFormat, IntPtr, PixelSize, Vector, Int32)</a></td>
<td>Initializes a new instance of the Bitmap class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_Imaging_Bitmap_AlphaFormat">AlphaFormat</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Imaging_Bitmap_Dpi">Dpi</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Imaging_Bitmap_Format">Format</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Imaging_Bitmap_PixelSize">PixelSize</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Imaging_Bitmap_Size">Size</a></td>
<td>Gets the size of the image, in device independent pixels.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_Imaging_Bitmap_CopyPixels_1">CopyPixels(ILockedFramebuffer, AlphaFormat)</a></td>
<td>Copies pixels to the target buffer and transcodes the pixel and alpha format if needed.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Imaging_Bitmap_CopyPixels">CopyPixels(PixelRect, IntPtr, Int32, Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Imaging_Bitmap_CreateScaledBitmap">CreateScaledBitmap(PixelSize, BitmapInterpolationMode)</a></td>
<td>Creates a Bitmap scaled to a specified size from the current bitmap.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Imaging_Bitmap_DecodeToHeight">DecodeToHeight(Stream, Int32, BitmapInterpolationMode)</a></td>
<td>Loads a Bitmap from a stream and decodes at the desired height. Aspect ratio is maintained. This is more efficient than loading and then resizing.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Imaging_Bitmap_DecodeToWidth">DecodeToWidth(Stream, Int32, BitmapInterpolationMode)</a></td>
<td>Loads a Bitmap from a stream and decodes at the desired width. Aspect ratio is maintained. This is more efficient than loading and then resizing.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Imaging_Bitmap_Dispose">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.</td>
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
<td><a href="M_Avalonia_Media_Imaging_Bitmap_Save">Save(Stream, Nullable(Int32))</a></td>
<td>Saves the bitmap to a stream.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Imaging_Bitmap_Save_1">Save(String, Nullable(Int32))</a></td>
<td>Saves the bitmap to a file.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media_Imaging">Avalonia.Media.Imaging Namespace</a>  

