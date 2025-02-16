---
title:Combine Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Combine Method




## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static Geometry Combine(
	Geometry geometry1,
	RectangleGeometry geometry2,
	GeometryCombineMode combineMode,
	Transform? transform = null
)
```
**VB**
``` VB
Public Shared Function Combine ( 
	geometry1 As Geometry,
	geometry2 As RectangleGeometry,
	combineMode As GeometryCombineMode,
	Optional transform As Transform = Nothing
) As Geometry
```
**F#**
``` F#
static member Combine : 
        geometry1 : Geometry * 
        geometry2 : RectangleGeometry * 
        combineMode : GeometryCombineMode * 
        ?transform : Transform 
(* Defaults:
        let _transform = defaultArg transform null
*)
-> Geometry 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_Geometry">Geometry</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_RectangleGeometry">RectangleGeometry</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_GeometryCombineMode">GeometryCombineMode</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_Transform">Transform</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Media_Geometry">Geometry</a>

## See Also


#### Reference
<a href="T_Avalonia_Media_Geometry">Geometry Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
