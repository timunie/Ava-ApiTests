---
title:LoadBitmap(PixelFormat, AlphaFormat, IntPtr, PixelSize, Vector, Int32) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# LoadBitmap(PixelFormat, AlphaFormat, IntPtr, PixelSize, Vector, Int32) Method




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
IBitmapImpl LoadBitmap(
	PixelFormat format,
	AlphaFormat alphaFormat,
	IntPtr data,
	PixelSize size,
	Vector dpi,
	int stride
)
```
**VB**
``` VB
Function LoadBitmap ( 
	format As PixelFormat,
	alphaFormat As AlphaFormat,
	data As IntPtr,
	size As PixelSize,
	dpi As Vector,
	stride As Integer
) As IBitmapImpl
```
**F#**
``` F#
abstract LoadBitmap : 
        format : PixelFormat * 
        alphaFormat : AlphaFormat * 
        data : IntPtr * 
        size : PixelSize * 
        dpi : Vector * 
        stride : int -> IBitmapImpl 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_PixelFormat">PixelFormat</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Platform_AlphaFormat">AlphaFormat</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.intptr" target="_blank" rel="noopener noreferrer">IntPtr</a></dt><dd> </dd><dt>  <a href="T_Avalonia_PixelSize">PixelSize</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Vector">Vector</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IPlatformRenderInterface">IPlatformRenderInterface Interface</a>  
<a href="Overload_Avalonia_Platform_IPlatformRenderInterface_LoadBitmap">LoadBitmap Overload</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
