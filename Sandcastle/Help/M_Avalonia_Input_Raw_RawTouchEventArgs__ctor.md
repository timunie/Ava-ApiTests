---
title:RawTouchEventArgs(IInputDevice, UInt64, IInputRoot, RawPointerEventType, RawPointerPoint, RawInputModifiers, Int64) Constructor
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# RawTouchEventArgs(IInputDevice, UInt64, IInputRoot, RawPointerEventType, RawPointerPoint, RawInputModifiers, Int64) Constructor


Initializes a new instance of the <a href="T_Avalonia_Input_Raw_RawTouchEventArgs">RawTouchEventArgs</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public RawTouchEventArgs(
	IInputDevice device,
	ulong timestamp,
	IInputRoot root,
	RawPointerEventType type,
	RawPointerPoint point,
	RawInputModifiers inputModifiers,
	long rawPointerId
)
```
**VB**
``` VB
Public Sub New ( 
	device As IInputDevice,
	timestamp As ULong,
	root As IInputRoot,
	type As RawPointerEventType,
	point As RawPointerPoint,
	inputModifiers As RawInputModifiers,
	rawPointerId As Long
)
```
**F#**
``` F#
new : 
        device : IInputDevice * 
        timestamp : uint64 * 
        root : IInputRoot * 
        type : RawPointerEventType * 
        point : RawPointerPoint * 
        inputModifiers : RawInputModifiers * 
        rawPointerId : int64 -> RawTouchEventArgs
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_IInputDevice">IInputDevice</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint64" target="_blank" rel="noopener noreferrer">UInt64</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_IInputRoot">IInputRoot</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_Raw_RawPointerEventType">RawPointerEventType</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_Raw_RawPointerPoint">RawPointerPoint</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_RawInputModifiers">RawInputModifiers</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int64" target="_blank" rel="noopener noreferrer">Int64</a></dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Input_Raw_RawTouchEventArgs">RawTouchEventArgs Class</a>  
<a href="Overload_Avalonia_Input_Raw_RawTouchEventArgs__ctor">RawTouchEventArgs Overload</a>  
<a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw Namespace</a>  
