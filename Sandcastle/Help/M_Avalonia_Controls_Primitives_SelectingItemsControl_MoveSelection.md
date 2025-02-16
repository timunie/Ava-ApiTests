---
title:MoveSelection(Control, NavigationDirection, Boolean, Boolean) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# MoveSelection(Control, NavigationDirection, Boolean, Boolean) Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.4

**C#**
``` C#
protected bool MoveSelection(
	Control? from,
	NavigationDirection direction,
	bool wrap = false,
	bool rangeModifier = false
)
```
**VB**
``` VB
Protected Function MoveSelection ( 
	from As Control,
	direction As NavigationDirection,
	Optional wrap As Boolean = false,
	Optional rangeModifier As Boolean = false
) As Boolean
```
**F#**
``` F#
member MoveSelection : 
        from : Control * 
        direction : NavigationDirection * 
        ?wrap : bool * 
        ?rangeModifier : bool 
(* Defaults:
        let _wrap = defaultArg wrap false
        let _rangeModifier = defaultArg rangeModifier false
*)
-> bool 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_NavigationDirection">NavigationDirection</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_SelectingItemsControl">SelectingItemsControl Class</a>  
<a href="Overload_Avalonia_Controls_Primitives_SelectingItemsControl_MoveSelection">MoveSelection Overload</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  
