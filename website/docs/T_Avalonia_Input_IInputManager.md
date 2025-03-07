# IInputManager Interface


Receives input from the windowing subsystem and dispatches it to interested parties for processing.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IInputManager
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IInputManager
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IInputManager = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/IInputManager.cs" title="View the source code">View Source</a>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Input_IInputManager_PostProcess">PostProcess</a></td>
<td>Gets an observable that notifies on each input event received after <a href="P_Avalonia_Input_IInputManager_Process">Process</a>.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_IInputManager_PreProcess">PreProcess</a></td>
<td>Gets an observable that notifies on each input event received before <a href="P_Avalonia_Input_IInputManager_Process">Process</a>.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_IInputManager_Process">Process</a></td>
<td>Gets an observable that notifies on each input event received.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Input_IInputManager_ProcessInput">ProcessInput(RawInputEventArgs)</a></td>
<td>Processes a raw input event.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  
