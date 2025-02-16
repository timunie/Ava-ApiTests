---
title:WriteableBitmap(PixelSize, Vector, Nullable&lt;PixelFormat&gt;, Nullable&lt;AlphaFormat&gt;) Constructor
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# WriteableBitmap(PixelSize, Vector, Nullable&lt;PixelFormat&gt;, Nullable&lt;AlphaFormat&gt;) Constructor


Initializes a new instance of the <a href="T_Avalonia_Media_Imaging_WriteableBitmap">WriteableBitmap</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Media_Imaging">Avalonia.Media.Imaging</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public WriteableBitmap(
	PixelSize size,
	Vector dpi,
	PixelFormat? format = null,
	AlphaFormat? alphaFormat = null
)
```
**VB**
``` VB
Public Sub New ( 
	size As PixelSize,
	dpi As Vector,
	Optional format As PixelFormat? = Nothing,
	Optional alphaFormat As AlphaFormat? = Nothing
)
```
**F#**
``` F#
new : 
        size : PixelSize * 
        dpi : Vector * 
        ?format : Nullable<PixelFormat> * 
        ?alphaFormat : Nullable<AlphaFormat> 
(* Defaults:
        let _format = defaultArg format null
        let _alphaFormat = defaultArg alphaFormat null
*)
-> WriteableBitmap
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_PixelSize">PixelSize</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Vector">Vector</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_Platform_PixelFormat">PixelFormat</a>)  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_Platform_AlphaFormat">AlphaFormat</a>)  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_Imaging_WriteableBitmap">WriteableBitmap Class</a>  
<a href="Overload_Avalonia_Media_Imaging_WriteableBitmap__ctor">WriteableBitmap Overload</a>  
<a href="N_Avalonia_Media_Imaging">Avalonia.Media.Imaging Namespace</a>  
