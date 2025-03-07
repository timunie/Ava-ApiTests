# RawKeyEventArgs Class




## Definition
**Namespace:** <a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class RawKeyEventArgs : RawInputEventArgs
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class RawKeyEventArgs
	Inherits RawInputEventArgs
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type RawKeyEventArgs = 
    class
        inherit RawInputEventArgs
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/Raw/RawKeyEventArgs.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.eventargs" target="_blank" rel="noopener noreferrer">EventArgs</a>  →  <a href="T_Avalonia_Input_Raw_RawInputEventArgs">RawInputEventArgs</a>  →  RawKeyEventArgs</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Input_Raw_RawKeyEventArgs__ctor_2">RawKeyEventArgs(IKeyboardDevice, UInt64, IInputRoot, RawKeyEventType, Key, RawInputModifiers)</a></td>
<td>Initializes a new instance of the RawKeyEventArgs class<br />Obsolete.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_Raw_RawKeyEventArgs__ctor_1">RawKeyEventArgs(IInputDevice, UInt64, IInputRoot, RawKeyEventType, Key, RawInputModifiers, PhysicalKey, String)</a></td>
<td>Initializes a new instance of the RawKeyEventArgs class</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_Raw_RawKeyEventArgs__ctor">RawKeyEventArgs(IInputDevice, UInt64, IInputRoot, RawKeyEventType, Key, RawInputModifiers, PhysicalKey, KeyDeviceType, String)</a></td>
<td>Initializes a new instance of the RawKeyEventArgs class</td>
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
<td><a href="P_Avalonia_Input_Raw_RawKeyEventArgs_Key">Key</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawKeyEventArgs_KeyDeviceType">KeyDeviceType</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawKeyEventArgs_KeySymbol">KeySymbol</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawKeyEventArgs_Modifiers">Modifiers</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawKeyEventArgs_PhysicalKey">PhysicalKey</a></td>
<td> </td>
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
<td><a href="P_Avalonia_Input_Raw_RawKeyEventArgs_Type">Type</a></td>
<td> </td>
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
