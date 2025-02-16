---
title:RawPointerEventArgs Class
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# RawPointerEventArgs Class




## Definition
**Namespace:** <a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public class RawPointerEventArgs : RawInputEventArgs
```
**VB**
``` VB
Public Class RawPointerEventArgs
	Inherits RawInputEventArgs
```
**F#**
``` F#
type RawPointerEventArgs = 
    class
        inherit RawInputEventArgs
    end
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.eventargs" target="_blank" rel="noopener noreferrer">EventArgs</a>  →  <a href="T_Avalonia_Input_Raw_RawInputEventArgs">RawInputEventArgs</a>  →  RawPointerEventArgs</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Input_Raw_RawMouseWheelEventArgs">Avalonia.Input.Raw.RawMouseWheelEventArgs</a><br /><a href="T_Avalonia_Input_Raw_RawPointerGestureEventArgs">Avalonia.Input.Raw.RawPointerGestureEventArgs</a><br /><a href="T_Avalonia_Input_Raw_RawTouchEventArgs">Avalonia.Input.Raw.RawTouchEventArgs</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Input_Raw_RawPointerEventArgs__ctor">RawPointerEventArgs(IInputDevice, UInt64, IInputRoot, RawPointerEventType, RawPointerPoint, RawInputModifiers)</a></td>
<td>Initializes a new instance of the RawPointerEventArgs class</td></tr>
<tr>
<td><a href="M_Avalonia_Input_Raw_RawPointerEventArgs__ctor_1">RawPointerEventArgs(IInputDevice, UInt64, IInputRoot, RawPointerEventType, Point, RawInputModifiers)</a></td>
<td>Initializes a new instance of the RawPointerEventArgs class</td></tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawInputEventArgs_Device">Device</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_Raw_RawInputEventArgs">RawInputEventArgs</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawInputEventArgs_Handled">Handled</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_Raw_RawInputEventArgs">RawInputEventArgs</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawPointerEventArgs_InputModifiers">InputModifiers</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawPointerEventArgs_IntermediatePoints">IntermediatePoints</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawPointerEventArgs_Point">Point</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawPointerEventArgs_Position">Position</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawPointerEventArgs_RawPointerId">RawPointerId</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawInputEventArgs_Root">Root</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_Raw_RawInputEventArgs">RawInputEventArgs</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawInputEventArgs_Timestamp">Timestamp</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_Raw_RawInputEventArgs">RawInputEventArgs</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawPointerEventArgs_Type">Type</a></td>
<td> </td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw Namespace</a>  
