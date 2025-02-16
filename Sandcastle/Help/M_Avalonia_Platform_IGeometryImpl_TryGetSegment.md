---
title:TryGetSegment Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# TryGetSegment Method




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
bool TryGetSegment(
	double startDistance,
	double stopDistance,
	bool startOnBeginFigure,
	out IGeometryImpl?? segmentGeometry
)
```
**VB**
``` VB
Function TryGetSegment ( 
	startDistance As Double,
	stopDistance As Double,
	startOnBeginFigure As Boolean,
	<OutAttribute> ByRef segmentGeometry As IGeometryImpl
) As Boolean
```
**F#**
``` F#
abstract TryGetSegment : 
        startDistance : float * 
        stopDistance : float * 
        startOnBeginFigure : bool * 
        segmentGeometry : IGeometryImpl byref -> bool 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
