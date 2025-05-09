# IControlledApplicationLifetime Interface




## Definition
**Namespace:** <a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[NotClientImplementableAttribute]
public interface IControlledApplicationLifetime : IApplicationLifetime
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<NotClientImplementableAttribute>
Public Interface IControlledApplicationLifetime
	Inherits IApplicationLifetime
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<NotClientImplementableAttribute>]
type IControlledApplicationLifetime = 
    interface
        interface IApplicationLifetime
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ApplicationLifetimes/IControlledApplicationLifetime.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_ApplicationLifetimes_IApplicationLifetime">IApplicationLifetime</a></td></tr>
</table>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_ApplicationLifetimes_IControlledApplicationLifetime_Shutdown">Shutdown(Int32)</a></td>
<td>Shuts down the application and sets the exit code that is returned to the operating system when the application exits.</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Controls_ApplicationLifetimes_IControlledApplicationLifetime_Exit">Exit</a></td>
<td>Sent when the application is exiting.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_ApplicationLifetimes_IControlledApplicationLifetime_Startup">Startup</a></td>
<td>Sent when the application is starting up.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes Namespace</a>  

