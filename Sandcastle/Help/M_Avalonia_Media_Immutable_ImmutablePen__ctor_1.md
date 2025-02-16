---
title:ImmutablePen(UInt32, Double, ImmutableDashStyle, PenLineCap, PenLineJoin, Double) Constructor
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# ImmutablePen(UInt32, Double, ImmutableDashStyle, PenLineCap, PenLineJoin, Double) Constructor


Initializes a new instance of the <a href="T_Avalonia_Media_Immutable_ImmutablePen">ImmutablePen</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Media_Immutable">Avalonia.Media.Immutable</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public ImmutablePen(
	uint color,
	double thickness = 1,
	ImmutableDashStyle? dashStyle = null,
	PenLineCap lineCap = PenLineCap.Flat,
	PenLineJoin lineJoin = PenLineJoin.Miter,
	double miterLimit = 10
)
```
**VB**
``` VB
Public Sub New ( 
	color As UInteger,
	Optional thickness As Double = 1,
	Optional dashStyle As ImmutableDashStyle = Nothing,
	Optional lineCap As PenLineCap = PenLineCap.Flat,
	Optional lineJoin As PenLineJoin = PenLineJoin.Miter,
	Optional miterLimit As Double = 10
)
```
**F#**
``` F#
new : 
        color : uint32 * 
        ?thickness : float * 
        ?dashStyle : ImmutableDashStyle * 
        ?lineCap : PenLineCap * 
        ?lineJoin : PenLineJoin * 
        ?miterLimit : float 
(* Defaults:
        let _thickness = defaultArg thickness 1
        let _dashStyle = defaultArg dashStyle null
        let _lineCap = defaultArg lineCap PenLineCap.Flat
        let _lineJoin = defaultArg lineJoin PenLineJoin.Miter
        let _miterLimit = defaultArg miterLimit 10
*)
-> ImmutablePen
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint32" target="_blank" rel="noopener noreferrer">UInt32</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  (Optional)</dt><dd> </dd><dt>  <a href="T_Avalonia_Media_Immutable_ImmutableDashStyle">ImmutableDashStyle</a>  (Optional)</dt><dd> </dd><dt>  <a href="T_Avalonia_Media_PenLineCap">PenLineCap</a>  (Optional)</dt><dd> </dd><dt>  <a href="T_Avalonia_Media_PenLineJoin">PenLineJoin</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_Immutable_ImmutablePen">ImmutablePen Class</a>  
<a href="Overload_Avalonia_Media_Immutable_ImmutablePen__ctor">ImmutablePen Overload</a>  
<a href="N_Avalonia_Media_Immutable">Avalonia.Media.Immutable Namespace</a>  
