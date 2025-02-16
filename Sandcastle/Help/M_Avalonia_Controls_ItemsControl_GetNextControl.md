---
title:GetNextControl Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# GetNextControl Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.4

**C#**
``` C#
protected static IInputElement? GetNextControl(
	INavigableContainer container,
	NavigationDirection direction,
	IInputElement? from,
	bool wrap
)
```
**VB**
``` VB
Protected Shared Function GetNextControl ( 
	container As INavigableContainer,
	direction As NavigationDirection,
	from As IInputElement,
	wrap As Boolean
) As IInputElement
```
**F#**
``` F#
static member GetNextControl : 
        container : INavigableContainer * 
        direction : NavigationDirection * 
        from : IInputElement * 
        wrap : bool -> IInputElement 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_INavigableContainer">INavigableContainer</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_NavigationDirection">NavigationDirection</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_IInputElement">IInputElement</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Input_IInputElement">IInputElement</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_ItemsControl">ItemsControl Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
