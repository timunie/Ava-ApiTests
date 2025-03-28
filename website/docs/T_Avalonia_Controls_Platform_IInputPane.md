# IInputPane Interface


Listener for the platform's input pane(eg, software keyboard). Provides access to the input pane height and state.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Platform">Avalonia.Controls.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[NotClientImplementableAttribute]
public interface IInputPane
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<NotClientImplementableAttribute>
Public Interface IInputPane
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<NotClientImplementableAttribute>]
type IInputPane = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Platform/IInputPane.cs" title="View the source code">View Source</a>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_Platform_IInputPane_OccludedRect">OccludedRect</a></td>
<td>The current input pane bounds.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Platform_IInputPane_State">State</a></td>
<td>The current input pane state.</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Controls_Platform_IInputPane_StateChanged">StateChanged</a></td>
<td>Occurs when the input pane's state has changed.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Platform">Avalonia.Controls.Platform Namespace</a>  

