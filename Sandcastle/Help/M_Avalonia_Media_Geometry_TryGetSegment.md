---
title:TryGetSegment Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# TryGetSegment Method




## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public bool TryGetSegment(
	double startDistance,
	double stopDistance,
	bool startOnBeginFigure,
	out Geometry?? segmentGeometry
)
```
**VB**
``` VB
Public Function TryGetSegment ( 
	startDistance As Double,
	stopDistance As Double,
	startOnBeginFigure As Boolean,
	<OutAttribute> ByRef segmentGeometry As Geometry
) As Boolean
```
**F#**
``` F#
member TryGetSegment : 
        startDistance : float * 
        stopDistance : float * 
        startOnBeginFigure : bool * 
        segmentGeometry : Geometry byref -> bool 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_Geometry">Geometry</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_Avalonia_Media_Geometry">Geometry Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
