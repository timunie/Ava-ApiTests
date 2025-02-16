---
title:Focus Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Focus Method




## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public bool Focus(
	NavigationMethod method = NavigationMethod.Unspecified,
	KeyModifiers keyModifiers = KeyModifiers.None
)
```
**VB**
``` VB
Public Function Focus ( 
	Optional method As NavigationMethod = NavigationMethod.Unspecified,
	Optional keyModifiers As KeyModifiers = KeyModifiers.None
) As Boolean
```
**F#**
``` F#
abstract Focus : 
        ?method : NavigationMethod * 
        ?keyModifiers : KeyModifiers 
(* Defaults:
        let _method = defaultArg method NavigationMethod.Unspecified
        let _keyModifiers = defaultArg keyModifiers KeyModifiers.None
*)
-> bool 
override Focus : 
        ?method : NavigationMethod * 
        ?keyModifiers : KeyModifiers 
(* Defaults:
        let _method = defaultArg method NavigationMethod.Unspecified
        let _keyModifiers = defaultArg keyModifiers KeyModifiers.None
*)
-> bool 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_NavigationMethod">NavigationMethod</a>  (Optional)</dt><dd> </dd><dt>  <a href="T_Avalonia_Input_KeyModifiers">KeyModifiers</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

#### Implements
<a href="M_Avalonia_Input_IInputElement_Focus">IInputElement.Focus(NavigationMethod, KeyModifiers)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Input_InputElement">InputElement Class</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  
