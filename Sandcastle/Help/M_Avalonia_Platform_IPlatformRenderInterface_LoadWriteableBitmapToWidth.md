---
title:LoadWriteableBitmapToWidth Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# LoadWriteableBitmapToWidth Method




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
IWriteableBitmapImpl LoadWriteableBitmapToWidth(
	Stream stream,
	int width,
	BitmapInterpolationMode interpolationMode = BitmapInterpolationMode.HighQuality
)
```
**VB**
``` VB
Function LoadWriteableBitmapToWidth ( 
	stream As Stream,
	width As Integer,
	Optional interpolationMode As BitmapInterpolationMode = BitmapInterpolationMode.HighQuality
) As IWriteableBitmapImpl
```
**F#**
``` F#
abstract LoadWriteableBitmapToWidth : 
        stream : Stream * 
        width : int * 
        ?interpolationMode : BitmapInterpolationMode 
(* Defaults:
        let _interpolationMode = defaultArg interpolationMode BitmapInterpolationMode.HighQuality
*)
-> IWriteableBitmapImpl 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.io.stream" target="_blank" rel="noopener noreferrer">Stream</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_Imaging_BitmapInterpolationMode">BitmapInterpolationMode</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_IWriteableBitmapImpl">IWriteableBitmapImpl</a>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IPlatformRenderInterface">IPlatformRenderInterface Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
