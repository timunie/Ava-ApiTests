---
title:GetNext Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# GetNext Method




## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
(bool handled, IInputElement next) GetNext(
	IInputElement element,
	NavigationDirection direction
)
```
**VB**
``` VB
Function GetNext ( 
	element As IInputElement,
	direction As NavigationDirection
) As (handled As Boolean, next As IInputElement)
```
**F#**
``` F#
abstract GetNext : 
        element : IInputElement * 
        direction : NavigationDirection -> ValueTuple<bool, IInputElement> 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_IInputElement">IInputElement</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_NavigationDirection">NavigationDirection</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.valuetuple-2" target="_blank" rel="noopener noreferrer">ValueTuple</a>(<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>, <a href="T_Avalonia_Input_IInputElement">IInputElement</a>)

## See Also


#### Reference
<a href="T_Avalonia_Input_ICustomKeyboardNavigation">ICustomKeyboardNavigation Interface</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  
