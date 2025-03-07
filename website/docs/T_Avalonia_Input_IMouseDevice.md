# IMouseDevice Interface


Represents a mouse device.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IMouseDevice : IPointerDevice, 
	IInputDevice
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IMouseDevice
	Inherits IPointerDevice, IInputDevice
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IMouseDevice = 
    interface
        interface IPointerDevice
        interface IInputDevice
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/IMouseDevice.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Input_IInputDevice">IInputDevice</a>, <a href="T_Avalonia_Input_IPointerDevice">IPointerDevice</a></td></tr>
</table>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Input_IInputDevice_ProcessRawEvent">ProcessRawEvent(RawInputEventArgs)</a></td>
<td>Processes raw event. Is called after preprocessing by InputManager<br />(Inherited from <a href="T_Avalonia_Input_IInputDevice">IInputDevice</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_IPointerDevice_TryGetPointer">TryGetPointer(RawPointerEventArgs)</a></td>
<td>Gets a pointer for specific event args.<br />(Inherited from <a href="T_Avalonia_Input_IPointerDevice">IPointerDevice</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  
