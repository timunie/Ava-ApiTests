# RawInputEventArgs Class


A raw input event.



## Definition
**Namespace:** <a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class RawInputEventArgs : EventArgs
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class RawInputEventArgs
	Inherits EventArgs
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type RawInputEventArgs = 
    class
        inherit EventArgs
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/Raw/RawInputEventArgs.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.eventargs" target="_blank" rel="noopener noreferrer">EventArgs</a>  →  RawInputEventArgs</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Input_Raw_RawDragEvent">Avalonia.Input.Raw.RawDragEvent</a><br /><a href="T_Avalonia_Input_Raw_RawKeyEventArgs">Avalonia.Input.Raw.RawKeyEventArgs</a><br /><a href="T_Avalonia_Input_Raw_RawPointerEventArgs">Avalonia.Input.Raw.RawPointerEventArgs</a><br /><a href="T_Avalonia_Input_Raw_RawTextInputEventArgs">Avalonia.Input.Raw.RawTextInputEventArgs</a></td></tr>
</table>

Raw input events are sent from the windowing subsystem to the InputManager for processing: this gives an application the opportunity to pre-process the event. After pre-processing they are consumed by the relevant <a href="P_Avalonia_Input_Raw_RawInputEventArgs_Device">Device</a> and turned into standard Avalonia events.

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Input_Raw_RawInputEventArgs__ctor">RawInputEventArgs(IInputDevice, UInt64, IInputRoot)</a></td>
<td>Initializes a new instance of the RawInputEventArgs class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawInputEventArgs_Device">Device</a></td>
<td>Gets the associated device.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawInputEventArgs_Handled">Handled</a></td>
<td>Gets or sets a value indicating whether the event was handled.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawInputEventArgs_Root">Root</a></td>
<td>Gets the root from which the event originates.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawInputEventArgs_Timestamp">Timestamp</a></td>
<td>Gets the timestamp associated with the event.</td>
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
