---
title:DrawRectangleCore Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# DrawRectangleCore Method




## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
protected abstract void DrawRectangleCore(
	IBrush? brush,
	IPen? pen,
	RoundedRect rrect,
	BoxShadows boxShadows = default
)
```
**VB**
``` VB
Protected MustOverride Sub DrawRectangleCore ( 
	brush As IBrush,
	pen As IPen,
	rrect As RoundedRect,
	Optional boxShadows As BoxShadows = Nothing
)
```
**F#**
``` F#
abstract DrawRectangleCore : 
        brush : IBrush * 
        pen : IPen * 
        rrect : RoundedRect * 
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
<a href="T_Avalonia_Media_DrawingContext">DrawingContext Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
