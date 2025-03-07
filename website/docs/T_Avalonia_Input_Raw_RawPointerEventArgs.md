# RawPointerEventArgs Class


A raw mouse event.



## Definition
**Namespace:** <a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class RawPointerEventArgs : RawInputEventArgs
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class RawPointerEventArgs
	Inherits RawInputEventArgs
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type RawPointerEventArgs = 
    class
        inherit RawInputEventArgs
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/Raw/RawPointerEventArgs.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.eventargs" target="_blank" rel="noopener noreferrer">EventArgs</a>  →  <a href="T_Avalonia_Input_Raw_RawInputEventArgs">RawInputEventArgs</a>  →  RawPointerEventArgs</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Input_Raw_RawMouseWheelEventArgs">Avalonia.Input.Raw.RawMouseWheelEventArgs</a><br /><a href="T_Avalonia_Input_Raw_RawPointerGestureEventArgs">Avalonia.Input.Raw.RawPointerGestureEventArgs</a><br /><a href="T_Avalonia_Input_Raw_RawTouchEventArgs">Avalonia.Input.Raw.RawTouchEventArgs</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Input_Raw_RawPointerEventArgs__ctor">RawPointerEventArgs(IInputDevice, UInt64, IInputRoot, RawPointerEventType, RawPointerPoint, RawInputModifiers)</a></td>
<td>Initializes a new instance of the RawPointerEventArgs class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_Raw_RawPointerEventArgs__ctor_1">RawPointerEventArgs(IInputDevice, UInt64, IInputRoot, RawPointerEventType, Point, RawInputModifiers)</a></td>
<td>Initializes a new instance of the RawPointerEventArgs class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawInputEventArgs_Device">Device</a></td>
<td>Gets the associated device.<br />(Inherited from <a href="T_Avalonia_Input_Raw_RawInputEventArgs">RawInputEventArgs</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawInputEventArgs_Handled">Handled</a></td>
<td>Gets or sets a value indicating whether the event was handled.<br />(Inherited from <a href="T_Avalonia_Input_Raw_RawInputEventArgs">RawInputEventArgs</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawPointerEventArgs_InputModifiers">InputModifiers</a></td>
<td>Gets the input modifiers.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawPointerEventArgs_IntermediatePoints">IntermediatePoints</a></td>
<td>Points that were traversed by a pointer since the previous relevant event, only valid for Move and TouchUpdate</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawPointerEventArgs_Point">Point</a></td>
<td>Gets the pointer properties and position, in client DIPs.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawPointerEventArgs_Position">Position</a></td>
<td>Gets the mouse position, in client DIPs.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawPointerEventArgs_RawPointerId">RawPointerId</a></td>
<td>Gets the raw pointer identifier.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawInputEventArgs_Root">Root</a></td>
<td>Gets the root from which the event originates.<br />(Inherited from <a href="T_Avalonia_Input_Raw_RawInputEventArgs">RawInputEventArgs</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawInputEventArgs_Timestamp">Timestamp</a></td>
<td>Gets the timestamp associated with the event.<br />(Inherited from <a href="T_Avalonia_Input_Raw_RawInputEventArgs">RawInputEventArgs</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawPointerEventArgs_Type">Type</a></td>
<td>Gets the type of the event.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw Namespace</a>  
