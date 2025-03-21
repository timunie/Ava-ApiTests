# IClassicDesktopStyleApplicationLifetime Interface


Controls application lifetime in classic desktop style



## Definition
**Namespace:** <a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[NotClientImplementableAttribute]
public interface IClassicDesktopStyleApplicationLifetime : IControlledApplicationLifetime, 
	IApplicationLifetime
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<NotClientImplementableAttribute>
Public Interface IClassicDesktopStyleApplicationLifetime
	Inherits IControlledApplicationLifetime, IApplicationLifetime
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<NotClientImplementableAttribute>]
type IClassicDesktopStyleApplicationLifetime = 
    interface
        interface IControlledApplicationLifetime
        interface IApplicationLifetime
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ApplicationLifetimes/IClassicDesktopStyleApplicationLifetime.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_ApplicationLifetimes_IApplicationLifetime">IApplicationLifetime</a>, <a href="T_Avalonia_Controls_ApplicationLifetimes_IControlledApplicationLifetime">IControlledApplicationLifetime</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_ApplicationLifetimes_IClassicDesktopStyleApplicationLifetime_Args">Args</a></td>
<td>Gets the arguments passed to the <a href="M_Avalonia_ClassicDesktopStyleApplicationLifetimeExtensions_StartWithClassicDesktopLifetime">StartWithClassicDesktopLifetime(AppBuilder, String[], ShutdownMode)</a> method.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_ApplicationLifetimes_IClassicDesktopStyleApplicationLifetime_MainWindow">MainWindow</a></td>
<td>Gets or sets the main window of the application.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_ApplicationLifetimes_IClassicDesktopStyleApplicationLifetime_ShutdownMode">ShutdownMode</a></td>
<td>Gets or sets the <a href="P_Avalonia_Controls_ApplicationLifetimes_IClassicDesktopStyleApplicationLifetime_ShutdownMode">ShutdownMode</a>. This property indicates whether the application is shutdown explicitly or implicitly. If <a href="P_Avalonia_Controls_ApplicationLifetimes_IClassicDesktopStyleApplicationLifetime_ShutdownMode">ShutdownMode</a> is set to OnExplicitShutdown the application is only closes if Shutdown is called. The default is OnLastWindowClose</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_ApplicationLifetimes_IClassicDesktopStyleApplicationLifetime_Windows">Windows</a></td>
<td>Gets the list of all open windows in the application.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_ApplicationLifetimes_IControlledApplicationLifetime_Shutdown">Shutdown(Int32)</a></td>
<td>Shuts down the application and sets the exit code that is returned to the operating system when the application exits.<br />(Inherited from <a href="T_Avalonia_Controls_ApplicationLifetimes_IControlledApplicationLifetime">IControlledApplicationLifetime</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ApplicationLifetimes_IClassicDesktopStyleApplicationLifetime_TryShutdown">TryShutdown(Int32)</a></td>
<td>Tries to Shutdown the application. <a href="E_Avalonia_Controls_ApplicationLifetimes_IClassicDesktopStyleApplicationLifetime_ShutdownRequested">ShutdownRequested</a> event can be used to cancel the shutdown.</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Controls_ApplicationLifetimes_IControlledApplicationLifetime_Exit">Exit</a></td>
<td>Sent when the application is exiting.<br />(Inherited from <a href="T_Avalonia_Controls_ApplicationLifetimes_IControlledApplicationLifetime">IControlledApplicationLifetime</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_ApplicationLifetimes_IClassicDesktopStyleApplicationLifetime_ShutdownRequested">ShutdownRequested</a></td>
<td>Raised by the platform when an application shutdown is requested.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_ApplicationLifetimes_IControlledApplicationLifetime_Startup">Startup</a></td>
<td>Sent when the application is starting up.<br />(Inherited from <a href="T_Avalonia_Controls_ApplicationLifetimes_IControlledApplicationLifetime">IControlledApplicationLifetime</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes Namespace</a>  

