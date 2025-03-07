# ICommandSource Interface


An interface for classes that know how to invoke a Command.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface ICommandSource
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface ICommandSource
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ICommandSource = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/ICommandSource.cs" title="View the source code">View Source</a>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Input_ICommandSource_Command">Command</a></td>
<td>The command that will be executed when the class is "invoked." Classes that implement this interface should enable or disable based on the command's CanExecute return value. The property may be implemented as read-write if desired.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_ICommandSource_CommandParameter">CommandParameter</a></td>
<td>The parameter that will be passed to the command when executing the command. The property may be implemented as read-write if desired.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_ICommandSource_IsEffectivelyEnabled">IsEffectivelyEnabled</a></td>
<td>Gets a value indicating whether this control and all its parents are enabled.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Input_ICommandSource_CanExecuteChanged">CanExecuteChanged(Object, EventArgs)</a></td>
<td>Called for the CanExecuteChanged event when changes are detected.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  
