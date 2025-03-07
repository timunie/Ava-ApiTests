# KeyboardDevice Class




## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class KeyboardDevice : IKeyboardDevice, 
	IInputDevice, INotifyPropertyChanged
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class KeyboardDevice
	Implements IKeyboardDevice, IInputDevice, INotifyPropertyChanged
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type KeyboardDevice = 
    class
        interface IKeyboardDevice
        interface IInputDevice
        interface INotifyPropertyChanged
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/KeyboardDevice.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  KeyboardDevice</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Input_IInputDevice">IInputDevice</a>, <a href="T_Avalonia_Input_IKeyboardDevice">IKeyboardDevice</a>, <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.inotifypropertychanged" target="_blank" rel="noopener noreferrer">INotifyPropertyChanged</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Input_KeyboardDevice__ctor">KeyboardDevice()</a></td>
<td>Initializes a new instance of the KeyboardDevice class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Input_KeyboardDevice_FocusedElement">FocusedElement</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_KeyboardDevice_FocusManager">FocusManager</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_KeyboardDevice_InputManager">InputManager</a></td>
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
<td><a href="M_Avalonia_Input_KeyboardDevice_ProcessRawEvent">ProcessRawEvent(RawInputEventArgs)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_KeyboardDevice_RaisePropertyChanged">RaisePropertyChanged(String)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_KeyboardDevice_SetFocusedElement">SetFocusedElement(IInputElement, NavigationMethod, KeyModifiers)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Input_KeyboardDevice_PropertyChanged">PropertyChanged</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  
