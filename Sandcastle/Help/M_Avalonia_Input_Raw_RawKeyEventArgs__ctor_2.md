---
title:RawKeyEventArgs(IKeyboardDevice, UInt64, IInputRoot, RawKeyEventType, Key, RawInputModifiers) Constructor
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# RawKeyEventArgs(IKeyboardDevice, UInt64, IInputRoot, RawKeyEventType, Key, RawInputModifiers) Constructor
<blockquote><strong>Note: This API is now obsolete.</strong></blockquote>




Initializes a new instance of the <a href="T_Avalonia_Input_Raw_RawKeyEventArgs">RawKeyEventArgs</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
[ObsoleteAttribute("Use the overload that takes a physical key and key symbol instead.")]
public RawKeyEventArgs(
	IKeyboardDevice device,
	ulong timestamp,
	IInputRoot root,
	RawKeyEventType type,
	Key key,
	RawInputModifiers modifiers
)
```
**VB**
``` VB
<ObsoleteAttribute("Use the overload that takes a physical key and key symbol instead.")>
Public Sub New ( 
	device As IKeyboardDevice,
	timestamp As ULong,
	root As IInputRoot,
	type As RawKeyEventType,
	key As Key,
	modifiers As RawInputModifiers
)
```
**F#**
``` F#
[<ObsoleteAttribute("Use the overload that takes a physical key and key symbol instead.")>]
new : 
        device : IKeyboardDevice * 
        timestamp : uint64 * 
        root : IInputRoot * 
        type : RawKeyEventType * 
        key : Key * 
        modifiers : RawInputModifiers -> RawKeyEventArgs
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_IKeyboardDevice">IKeyboardDevice</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint64" target="_blank" rel="noopener noreferrer">UInt64</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_IInputRoot">IInputRoot</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_Raw_RawKeyEventType">RawKeyEventType</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_Key">Key</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_RawInputModifiers">RawInputModifiers</a></dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Input_Raw_RawKeyEventArgs">RawKeyEventArgs Class</a>  
<a href="Overload_Avalonia_Input_Raw_RawKeyEventArgs__ctor">RawKeyEventArgs Overload</a>  
<a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw Namespace</a>  
