---
title:WriteableBitmap Class
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# WriteableBitmap Class




## Definition
**Namespace:** <a href="N_Avalonia_Media_Imaging">Avalonia.Media.Imaging</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public class WriteableBitmap : Bitmap
```
**VB**
``` VB
Public Class WriteableBitmap
	Inherits Bitmap
```
**F#**
``` F#
type WriteableBitmap = 
    class
        inherit Bitmap
    end
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap</a>  →  WriteableBitmap</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_Imaging_WriteableBitmap__ctor">WriteableBitmap(PixelSize, Vector, Nullable(PixelFormat), Nullable(AlphaFormat))</a></td>
<td>Initializes a new instance of the WriteableBitmap class</td></tr>
<tr>
<td><a href="M_Avalonia_Media_Imaging_WriteableBitmap__ctor_1">WriteableBitmap(PixelFormat, AlphaFormat, IntPtr, PixelSize, Vector, Int32)</a></td>
<td>Initializes a new instance of the WriteableBitmap class</td></tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_Imaging_Bitmap_AlphaFormat">AlphaFormat</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Media_Imaging_Bitmap_Dpi">Dpi</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Media_Imaging_WriteableBitmap_Format">Format</a></td>
<td><br />(Overrides <a href="P_Avalonia_Media_Imaging_Bitmap_Format">Bitmap.Format</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Media_Imaging_Bitmap_PixelSize">PixelSize</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Media_Imaging_Bitmap_Size">Size</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap</a>)</td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_Imaging_Bitmap_CopyPixels_1">CopyPixels(ILockedFramebuffer, AlphaFormat)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Media_Imaging_WriteableBitmap_CopyPixels">CopyPixels(PixelRect, IntPtr, Int32, Int32)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Media_Imaging_Bitmap_CopyPixels">Bitmap.CopyPixels(PixelRect, IntPtr, Int32, Int32)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Media_Imaging_Bitmap_CreateScaledBitmap">CreateScaledBitmap(PixelSize, BitmapInterpolationMode)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Media_Imaging_WriteableBitmap_Decode">Decode(Stream)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_Imaging_WriteableBitmap_DecodeToHeight">DecodeToHeight(Stream, Int32, BitmapInterpolationMode)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_Imaging_WriteableBitmap_DecodeToWidth">DecodeToWidth(Stream, Int32, BitmapInterpolationMode)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_Imaging_Bitmap_Dispose">Dispose()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
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
<td><a href="M_Avalonia_Media_Imaging_WriteableBitmap_Lock">Lock()</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Media_Imaging_Bitmap_Save">Save(Stream, Nullable(Int32))</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Media_Imaging_Bitmap_Save_1">Save(String, Nullable(Int32))</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media_Imaging">Avalonia.Media.Imaging Namespace</a>  
