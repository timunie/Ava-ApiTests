---
title:IMouseDevice Interface
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# IMouseDevice Interface




## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public interface IMouseDevice : IPointerDevice, 
	IInputDevice
```
**VB**
``` VB
Public Interface IMouseDevice
	Inherits IPointerDevice, IInputDevice
```
**F#**
``` F#
type IMouseDevice = 
    interface
        interface IPointerDevice
        interface IInputDevice
    end
```

<table><tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Input_IInputDevice">IInputDevice</a>, <a href="T_Avalonia_Input_IPointerDevice">IPointerDevice</a></td></tr>
</table>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Input_IInputDevice_ProcessRawEvent">ProcessRawEvent(RawInputEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IInputDevice">IInputDevice</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Input_IPointerDevice_TryGetPointer">TryGetPointer(RawPointerEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IPointerDevice">IPointerDevice</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  
