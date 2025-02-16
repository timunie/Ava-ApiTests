---
title:DrawRectangle Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# DrawRectangle Method




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
void DrawRectangle(
	IBrush? brush,
	IPen? pen,
	RoundedRect rect,
	BoxShadows boxShadows = default
)
```
**VB**
``` VB
Sub DrawRectangle ( 
	brush As IBrush,
	pen As IPen,
	rect As RoundedRect,
	Optional boxShadows As BoxShadows = Nothing
)
```
**F#**
``` F#
abstract DrawRectangle : 
        brush : IBrush * 
        pen : IPen * 
        rect : RoundedRect * 
        ?boxShadows : BoxShadows 
(* Defaults:
        let _boxShadows = defaultArg boxShadows new BoxShadows()
*)
-> unit 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_IBrush">IBrush</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_IPen">IPen</a></dt><dd> </dd><dt>  <a href="T_Avalonia_RoundedRect">RoundedRect</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_BoxShadows">BoxShadows</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IDrawingContextImpl">IDrawingContextImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
