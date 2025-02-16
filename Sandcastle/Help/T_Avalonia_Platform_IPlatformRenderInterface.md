---
title:IPlatformRenderInterface Interface
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# IPlatformRenderInterface Interface




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
[UnstableAttribute]
public interface IPlatformRenderInterface
```
**VB**
``` VB
<UnstableAttribute>
Public Interface IPlatformRenderInterface
```
**F#**
``` F#
[<UnstableAttribute>]
type IPlatformRenderInterface = interface end
```



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_IPlatformRenderInterface_DefaultAlphaFormat">DefaultAlphaFormat</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Platform_IPlatformRenderInterface_DefaultPixelFormat">DefaultPixelFormat</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Platform_IPlatformRenderInterface_SupportsIndividualRoundRects">SupportsIndividualRoundRects</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Platform_IPlatformRenderInterface_SupportsRegions">SupportsRegions</a></td>
<td> </td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformRenderInterface_BuildGlyphRunGeometry">BuildGlyphRunGeometry(GlyphRun)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformRenderInterface_CreateBackendContext">CreateBackendContext(IPlatformGraphicsContext)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformRenderInterface_CreateCombinedGeometry">CreateCombinedGeometry(GeometryCombineMode, IGeometryImpl, IGeometryImpl)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformRenderInterface_CreateEllipseGeometry">CreateEllipseGeometry(Rect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformRenderInterface_CreateGeometryGroup">CreateGeometryGroup(FillRule, IReadOnlyList(IGeometryImpl))</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformRenderInterface_CreateGlyphRun">CreateGlyphRun(IGlyphTypeface, Double, IReadOnlyList(GlyphInfo), Point)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformRenderInterface_CreateLineGeometry">CreateLineGeometry(Point, Point)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformRenderInterface_CreateRectangleGeometry">CreateRectangleGeometry(Rect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformRenderInterface_CreateRegion">CreateRegion()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformRenderInterface_CreateRenderTargetBitmap">CreateRenderTargetBitmap(PixelSize, Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformRenderInterface_CreateStreamGeometry">CreateStreamGeometry()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformRenderInterface_CreateWriteableBitmap">CreateWriteableBitmap(PixelSize, Vector, PixelFormat, AlphaFormat)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformRenderInterface_IsSupportedBitmapPixelFormat">IsSupportedBitmapPixelFormat(PixelFormat)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformRenderInterface_LoadBitmap_1">LoadBitmap(Stream)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformRenderInterface_LoadBitmap_2">LoadBitmap(String)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformRenderInterface_LoadBitmap">LoadBitmap(PixelFormat, AlphaFormat, IntPtr, PixelSize, Vector, Int32)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformRenderInterface_LoadBitmapToHeight">LoadBitmapToHeight(Stream, Int32, BitmapInterpolationMode)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformRenderInterface_LoadBitmapToWidth">LoadBitmapToWidth(Stream, Int32, BitmapInterpolationMode)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformRenderInterface_LoadWriteableBitmap">LoadWriteableBitmap(Stream)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformRenderInterface_LoadWriteableBitmap_1">LoadWriteableBitmap(String)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformRenderInterface_LoadWriteableBitmapToHeight">LoadWriteableBitmapToHeight(Stream, Int32, BitmapInterpolationMode)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformRenderInterface_LoadWriteableBitmapToWidth">LoadWriteableBitmapToWidth(Stream, Int32, BitmapInterpolationMode)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformRenderInterface_ResizeBitmap">ResizeBitmap(IBitmapImpl, PixelSize, BitmapInterpolationMode)</a></td>
<td> </td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
