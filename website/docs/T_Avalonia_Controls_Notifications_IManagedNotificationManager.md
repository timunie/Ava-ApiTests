# IManagedNotificationManager Interface


Represents a notification manager that can show arbitrary content. Managed notification managers can show any content.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Notifications">Avalonia.Controls.Notifications</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IManagedNotificationManager : INotificationManager
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IManagedNotificationManager
	Inherits INotificationManager
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IManagedNotificationManager = 
    interface
        interface INotificationManager
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Notifications/IManagedNotificationManager.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_Notifications_INotificationManager">INotificationManager</a></td></tr>
</table>

Because notification managers of this type are implemented purely in managed code, they can display arbitrary content, as opposed to notification managers which display notifications using the host operating system's notification mechanism.

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_Notifications_INotificationManager_Close">Close(INotification)</a></td>
<td>Closes a notification.<br />(Inherited from <a href="T_Avalonia_Controls_Notifications_INotificationManager">INotificationManager</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Notifications_IManagedNotificationManager_Close">Close(Object)</a></td>
<td>Closes a notification.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Notifications_INotificationManager_CloseAll">CloseAll()</a></td>
<td>Closes all notifications.<br />(Inherited from <a href="T_Avalonia_Controls_Notifications_INotificationManager">INotificationManager</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Notifications_INotificationManager_Show">Show(INotification)</a></td>
<td>Show a notification.<br />(Inherited from <a href="T_Avalonia_Controls_Notifications_INotificationManager">INotificationManager</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Notifications_IManagedNotificationManager_Show">Show(Object)</a></td>
<td>Shows a notification.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Notifications">Avalonia.Controls.Notifications Namespace</a>  
