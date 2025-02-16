---
title:PlatformHotkeyConfiguration(KeyModifiers, KeyModifiers, KeyModifiers) Constructor
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# PlatformHotkeyConfiguration(KeyModifiers, KeyModifiers, KeyModifiers) Constructor


Initializes a new instance of the <a href="T_Avalonia_Input_Platform_PlatformHotkeyConfiguration">PlatformHotkeyConfiguration</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Input_Platform">Avalonia.Input.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public PlatformHotkeyConfiguration(
	KeyModifiers commandModifiers,
	KeyModifiers selectionModifiers = KeyModifiers.Shift,
	KeyModifiers wholeWordTextActionModifiers = KeyModifiers.Control
)
```
**VB**
``` VB
Public Sub New ( 
	commandModifiers As KeyModifiers,
	Optional selectionModifiers As KeyModifiers = KeyModifiers.Shift,
	Optional wholeWordTextActionModifiers As KeyModifiers = KeyModifiers.Control
)
```
**F#**
``` F#
new : 
        commandModifiers : KeyModifiers * 
        ?selectionModifiers : KeyModifiers * 
        ?wholeWordTextActionModifiers : KeyModifiers 
(* Defaults:
        let _selectionModifiers = defaultArg selectionModifiers KeyModifiers.Shift
        let _wholeWordTextActionModifiers = defaultArg wholeWordTextActionModifiers KeyModifiers.Control
*)
-> PlatformHotkeyConfiguration
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_KeyModifiers">KeyModifiers</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_KeyModifiers">KeyModifiers</a>  (Optional)</dt><dd> </dd><dt>  <a href="T_Avalonia_Input_KeyModifiers">KeyModifiers</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Input_Platform_PlatformHotkeyConfiguration">PlatformHotkeyConfiguration Class</a>  
<a href="Overload_Avalonia_Input_Platform_PlatformHotkeyConfiguration__ctor">PlatformHotkeyConfiguration Overload</a>  
<a href="N_Avalonia_Input_Platform">Avalonia.Input.Platform Namespace</a>  
