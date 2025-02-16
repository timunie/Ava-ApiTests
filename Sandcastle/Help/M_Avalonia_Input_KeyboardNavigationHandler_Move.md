---
title:Move Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Move Method




## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public void Move(
	IInputElement? element,
	NavigationDirection direction,
	KeyModifiers keyModifiers = KeyModifiers.None
)
```
**VB**
``` VB
Public Sub Move ( 
	element As IInputElement,
	direction As NavigationDirection,
	Optional keyModifiers As KeyModifiers = KeyModifiers.None
)
```
**F#**
``` F#
abstract Move : 
        element : IInputElement * 
        direction : NavigationDirection * 
        ?keyModifiers : KeyModifiers 
(* Defaults:
        let _keyModifiers = defaultArg keyModifiers KeyModifiers.None
*)
-> unit 
override Move : 
        element : IInputElement * 
        direction : NavigationDirection * 
        ?keyModifiers : KeyModifiers 
(* Defaults:
        let _keyModifiers = defaultArg keyModifiers KeyModifiers.None
*)
-> unit 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_IInputElement">IInputElement</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_NavigationDirection">NavigationDirection</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_KeyModifiers">KeyModifiers</a>  (Optional)</dt><dd> </dd></dl>

#### Implements
<a href="M_Avalonia_Input_IKeyboardNavigationHandler_Move">IKeyboardNavigationHandler.Move(IInputElement, NavigationDirection, KeyModifiers)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Input_KeyboardNavigationHandler">KeyboardNavigationHandler Class</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  
