---
title:ResizeBitmap Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# ResizeBitmap Method




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
IBitmapImpl ResizeBitmap(
	IBitmapImpl bitmapImpl,
	PixelSize destinationSize,
	BitmapInterpolationMode interpolationMode = BitmapInterpolationMode.HighQuality
)
```
**VB**
``` VB
Function ResizeBitmap ( 
	bitmapImpl As IBitmapImpl,
	destinationSize As PixelSize,
	Optional interpolationMode As BitmapInterpolationMode = BitmapInterpolationMode.HighQuality
) As IBitmapImpl
```
**F#**
``` F#
abstract ResizeBitmap : 
        bitmapImpl : IBitmapImpl * 
        destinationSize : PixelSize * 
        ?interpolationMode : BitmapInterpolationMode 
(* Defaults:
        let _interpolationMode = defaultArg interpolationMode BitmapInterpolationMode.HighQuality
*)
-> IBitmapImpl 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a></dt><dd> </dd><dt>  <a href="T_Avalonia_PixelSize">PixelSize</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_Imaging_BitmapInterpolationMode">BitmapInterpolationMode</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IPlatformRenderInterface">IPlatformRenderInterface Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
