---
title:RawPointerGestureEventArgs Constructor
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# RawPointerGestureEventArgs Constructor


Initializes a new instance of the <a href="T_Avalonia_Input_Raw_RawPointerGestureEventArgs">RawPointerGestureEventArgs</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public RawPointerGestureEventArgs(
	IInputDevice device,
	ulong timestamp,
	IInputRoot root,
	RawPointerEventType gestureType,
	Point position,
	Vector delta,
	RawInputModifiers inputModifiers
)
```
**VB**
``` VB
Public Sub New ( 
	device As IInputDevice,
	timestamp As ULong,
	root As IInputRoot,
	gestureType As RawPointerEventType,
	position As Point,
	delta As Vector,
	inputModifiers As RawInputModifiers
)
```
**F#**
``` F#
new : 
        device : IInputDevice * 
        timestamp : uint64 * 
        root : IInputRoot * 
        gestureType : RawPointerEventType * 
        position : Point * 
        delta : Vector * 
        inputModifiers : RawInputModifiers -> RawPointerGestureEventArgs
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_IInputDevice">IInputDevice</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint64" target="_blank" rel="noopener noreferrer">UInt64</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_IInputRoot">IInputRoot</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_Raw_RawPointerEventType">RawPointerEventType</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Vector">Vector</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_RawInputModifiers">RawInputModifiers</a></dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Input_Raw_RawPointerGestureEventArgs">RawPointerGestureEventArgs Class</a>  
<a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw Namespace</a>  
