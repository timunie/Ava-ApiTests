---
title:TryInterpolate Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# TryInterpolate Method




## Definition
**Namespace:** <a href="N_Avalonia_Media_Transformation">Avalonia.Media.Transformation</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static bool TryInterpolate(
	TransformOperation? from,
	TransformOperation? to,
	double progress,
	ref TransformOperation result
)
```
**VB**
``` VB
Public Shared Function TryInterpolate ( 
	from As TransformOperation?,
	to As TransformOperation?,
	progress As Double,
	ByRef result As TransformOperation
) As Boolean
```
**F#**
``` F#
static member TryInterpolate : 
        from : Nullable<TransformOperation> * 
        to : Nullable<TransformOperation> * 
        progress : float * 
        result : TransformOperation byref -> bool 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_Media_Transformation_TransformOperation">TransformOperation</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_Media_Transformation_TransformOperation">TransformOperation</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_Transformation_TransformOperation">TransformOperation</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_Avalonia_Media_Transformation_TransformOperation">TransformOperation Structure</a>  
<a href="N_Avalonia_Media_Transformation">Avalonia.Media.Transformation Namespace</a>  
