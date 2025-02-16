---
title:CreateScaledBitmap Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# CreateScaledBitmap Method




## Definition
**Namespace:** <a href="N_Avalonia_Media_Imaging">Avalonia.Media.Imaging</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public Bitmap CreateScaledBitmap(
	PixelSize destinationSize,
	BitmapInterpolationMode interpolationMode = BitmapInterpolationMode.HighQuality
)
```
**VB**
``` VB
Public Function CreateScaledBitmap ( 
	destinationSize As PixelSize,
	Optional interpolationMode As BitmapInterpolationMode = BitmapInterpolationMode.HighQuality
) As Bitmap
```
**F#**
``` F#
member CreateScaledBitmap : 
        destinationSize : PixelSize * 
        ?interpolationMode : BitmapInterpolationMode 
(* Defaults:
        let _interpolationMode = defaultArg interpolationMode BitmapInterpolationMode.HighQuality
*)
-> Bitmap 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_PixelSize">PixelSize</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_Imaging_BitmapInterpolationMode">BitmapInterpolationMode</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap</a>

## See Also


#### Reference
<a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap Class</a>  
<a href="N_Avalonia_Media_Imaging">Avalonia.Media.Imaging Namespace</a>  
