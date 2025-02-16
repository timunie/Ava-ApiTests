---
title:DrawRectangle(IImmutableBrush, ImmutablePen, Rect, Double, Double, BoxShadows) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# DrawRectangle(IImmutableBrush, ImmutablePen, Rect, Double, Double, BoxShadows) Method




## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public void DrawRectangle(
	IImmutableBrush? brush,
	ImmutablePen? pen,
	Rect rect,
	double radiusX = 0,
	double radiusY = 0,
	BoxShadows boxShadows = default
)
```
**VB**
``` VB
Public Sub DrawRectangle ( 
	brush As IImmutableBrush,
	pen As ImmutablePen,
	rect As Rect,
	Optional radiusX As Double = 0,
	Optional radiusY As Double = 0,
	Optional boxShadows As BoxShadows = Nothing
)
```
**F#**
``` F#
member DrawRectangle : 
        brush : IImmutableBrush * 
        pen : ImmutablePen * 
        rect : Rect * 
        ?radiusX : float * 
        ?radiusY : float * 
        ?boxShadows : BoxShadows 
(* Defaults:
        let _radiusX = defaultArg radiusX 0
        let _radiusY = defaultArg radiusY 0
        let _boxShadows = defaultArg boxShadows new BoxShadows()
*)
-> unit 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_IImmutableBrush">IImmutableBrush</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_Immutable_ImmutablePen">ImmutablePen</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Rect">Rect</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  (Optional)</dt><dd> </dd><dt>  <a href="T_Avalonia_Media_BoxShadows">BoxShadows</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_ImmediateDrawingContext">ImmediateDrawingContext Class</a>  
<a href="Overload_Avalonia_Media_ImmediateDrawingContext_DrawRectangle">DrawRectangle Overload</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
